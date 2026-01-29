const App = (function () {
  let settings = {
    theme: "dark",
    lang: "de",
    onboardingDone: false,
  };
  let favorites = [];
  let currentRight = null;
  let currentCategory = null;
  let onboardingStep = 0;
  let searchQuery = "";
  let previousView = "home";

  // === Init ===
  function init() {
    loadSettings();
    loadFavorites();
    currentLang = settings.lang;
    applyTheme();
    applyTranslations();

    if (settings.onboardingDone) {
      showApp();
    } else {
      document.getElementById("onboarding").classList.remove("hidden");
      document.getElementById("appContent").classList.add("hidden");
    }

    renderCategories();
    renderPopular();
    registerServiceWorker();

    // Close modals on overlay click
    document.querySelectorAll(".modal-overlay").forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.remove("visible");
        }
      });
    });

    // Search input
    document.getElementById("searchInput").addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        clearSearch();
      }
    });
  }

  // === Settings ===
  function loadSettings() {
    try {
      const saved = localStorage.getItem("myrights-settings");
      if (saved) {
        settings = { ...settings, ...JSON.parse(saved) };
      }
    } catch (e) { /* ignore */ }
  }

  function saveSettings() {
    localStorage.setItem("myrights-settings", JSON.stringify(settings));
  }

  function loadFavorites() {
    try {
      const saved = localStorage.getItem("myrights-favorites");
      if (saved) favorites = JSON.parse(saved);
    } catch (e) { /* ignore */ }
  }

  function saveFavorites() {
    localStorage.setItem("myrights-favorites", JSON.stringify(favorites));
  }

  // === Theme ===
  function applyTheme() {
    if (settings.theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme", settings.theme);
    }
  }

  function cycleTheme() {
    const themes = ["dark", "light", "auto"];
    const idx = themes.indexOf(settings.theme);
    settings.theme = themes[(idx + 1) % themes.length];
    applyTheme();
    saveSettings();
    showToast(t("theme") + ": " + t("theme" + capitalize(settings.theme)));
  }

  function setTheme(theme) {
    settings.theme = theme;
    applyTheme();
    saveSettings();
    renderSettingsOptions();
  }

  // === Language ===
  function changeLang(lang) {
    settings.lang = lang;
    setLanguage(lang);
    saveSettings();
    renderAll();
    renderSettingsOptions();
  }

  // === Onboarding ===
  function nextOnboarding() {
    onboardingStep++;
    if (onboardingStep >= 3) {
      settings.onboardingDone = true;
      saveSettings();
      showApp();
      return;
    }
    updateOnboarding();
  }

  function updateOnboarding() {
    document.querySelectorAll(".onboarding-step").forEach((el) => {
      el.classList.toggle("active", parseInt(el.dataset.step) === onboardingStep);
    });
    document.querySelectorAll(".onboarding-dot").forEach((el) => {
      el.classList.toggle("active", parseInt(el.dataset.dot) === onboardingStep);
    });
    const btn = document.getElementById("onboardingNext");
    if (onboardingStep === 2) {
      btn.textContent = t("onboardingStart");
    } else {
      btn.textContent = t("onboardingNext");
    }
  }

  function showApp() {
    document.getElementById("onboarding").classList.add("hidden");
    document.getElementById("appContent").classList.remove("hidden");
  }

  // === Navigation ===
  function goHome() {
    showView("home");
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("searchClear").classList.remove("visible");
    document.getElementById("searchResults").classList.add("hidden");
    document.getElementById("categoriesSection").classList.remove("hidden");
    document.getElementById("popularSection").classList.remove("hidden");
  }

  function showView(view) {
    const views = ["homeView", "categoryView", "detailView", "favoritesView"];
    views.forEach((v) => {
      const el = document.getElementById(v);
      if (el) el.classList.toggle("hidden", v !== view + "View");
    });
    window.scrollTo(0, 0);
  }

  function goBackFromDetail() {
    if (previousView === "favorites") {
      showFavorites();
    } else if (previousView === "category" && currentCategory) {
      showCategory(currentCategory);
    } else {
      goHome();
    }
  }

  // === Categories ===
  function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    grid.innerHTML = CATEGORIES.map((cat) => {
      const count = RIGHTS_DATA.filter((r) => r.category === cat.id).length;
      return `<div class="category-card" onclick="App.showCategory('${cat.id}')">
        <div class="category-emoji">${cat.emoji}</div>
        <div class="category-name">${t(cat.i18nKey)}</div>
        <div class="category-count">${count} ${count === 1 ? "Fall" : "Fälle"}</div>
      </div>`;
    }).join("");
  }

  function showCategory(categoryId) {
    currentCategory = categoryId;
    previousView = "category";
    const cat = CATEGORIES.find((c) => c.id === categoryId);
    if (!cat) return;

    document.getElementById("categoryTitle").textContent = cat.emoji + " " + t(cat.i18nKey);
    const rights = RIGHTS_DATA.filter((r) => r.category === categoryId);
    document.getElementById("categoryRightsList").innerHTML = renderRightCards(rights);
    showView("category");
  }

  // === Popular ===
  function renderPopular() {
    const popular = RIGHTS_DATA.filter((r) =>
      ["flight-delayed", "online-withdrawal", "defective-goods", "rent-defects", "termination-received"].includes(r.id)
    );
    document.getElementById("popularList").innerHTML = renderRightCards(popular);
  }

  // === Right Cards ===
  function renderRightCards(rights) {
    if (rights.length === 0) {
      return `<div class="favorites-empty"><div class="favorites-empty-text">${t("noResults")}</div></div>`;
    }
    return rights.map((r) => {
      const isFav = favorites.includes(r.id);
      return `<div class="right-card" onclick="App.showDetail('${r.id}')">
        <div class="right-card-icon">${r.icon}</div>
        <div class="right-card-content">
          <div class="right-card-title">${t(r.titleKey)}</div>
          <div class="right-card-summary">${t(r.summaryKey)}</div>
        </div>
        <button class="right-card-fav ${isFav ? "active" : ""}" onclick="event.stopPropagation(); App.toggleFavFromCard('${r.id}', this)" aria-label="Favorit">
          ${isFav ? "\u2605" : "\u2606"}
        </button>
      </div>`;
    }).join("");
  }

  // === Detail ===
  function showDetail(rightId) {
    const right = RIGHTS_DATA.find((r) => r.id === rightId);
    if (!right) return;
    currentRight = right;

    if (document.getElementById("categoryView").classList.contains("hidden") &&
        document.getElementById("favoritesView").classList.contains("hidden")) {
      previousView = "home";
    }

    const cat = CATEGORIES.find((c) => c.id === right.category);

    document.getElementById("detailEmoji").textContent = right.icon;
    document.getElementById("detailTitle").textContent = t(right.titleKey);
    document.getElementById("detailCategory").textContent = cat ? (cat.emoji + " " + t(cat.i18nKey)) : "";

    // Situation
    document.getElementById("detailSituation").textContent = t(right.situationKey);

    // Rights
    document.getElementById("detailRights").innerHTML = right.rights.map((r) => `
      <div class="detail-right-item">
        <div class="detail-right-text">${t(r.textKey)}</div>
        <div class="detail-right-law">${r.law}</div>
      </div>
    `).join("");

    // Steps
    document.getElementById("detailSteps").innerHTML = right.steps.map((s, i) => `
      <div class="detail-step">
        <div class="detail-step-num">${i + 1}</div>
        <div class="detail-step-text">${t(s.textKey)}</div>
      </div>
    `).join("");

    // Deadline
    const deadlineSection = document.getElementById("detailDeadlineSection");
    if (right.deadlineKey) {
      deadlineSection.classList.remove("hidden");
      document.getElementById("detailDeadline").textContent = t(right.deadlineKey);
    } else {
      deadlineSection.classList.add("hidden");
    }

    // Compensation
    const compSection = document.getElementById("detailCompSection");
    if (right.compensationKey) {
      compSection.classList.remove("hidden");
      document.getElementById("detailComp").textContent = t(right.compensationKey);
    } else {
      compSection.classList.add("hidden");
    }

    // Law References
    document.getElementById("detailLaws").innerHTML = right.lawRefs.map((law) =>
      `<span class="law-tag">${law}</span>`
    ).join("");

    // Template button
    const templateBtn = document.getElementById("detailTemplateBtn");
    if (right.templateKey) {
      templateBtn.classList.remove("hidden");
    } else {
      templateBtn.classList.add("hidden");
    }

    // Favorite button state
    updateFavoriteButton();

    showView("detail");
  }

  function updateFavoriteButton() {
    if (!currentRight) return;
    const isFav = favorites.includes(currentRight.id);
    document.getElementById("detailFavIcon").innerHTML = isFav ? "\u2605" : "\u2606";
    document.getElementById("detailFavText").textContent = t(isFav ? "removeFavorite" : "addFavorite");
  }

  // === Favorites ===
  function toggleFavorite() {
    if (!currentRight) return;
    const idx = favorites.indexOf(currentRight.id);
    if (idx >= 0) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(currentRight.id);
    }
    saveFavorites();
    updateFavoriteButton();
  }

  function toggleFavFromCard(rightId, btn) {
    const idx = favorites.indexOf(rightId);
    if (idx >= 0) {
      favorites.splice(idx, 1);
      btn.classList.remove("active");
      btn.innerHTML = "\u2606";
    } else {
      favorites.push(rightId);
      btn.classList.add("active");
      btn.innerHTML = "\u2605";
    }
    saveFavorites();
  }

  function showFavorites() {
    previousView = "favorites";
    const favRights = RIGHTS_DATA.filter((r) => favorites.includes(r.id));
    const content = document.getElementById("favoritesContent");
    if (favRights.length === 0) {
      content.innerHTML = `
        <div class="favorites-empty">
          <div class="favorites-empty-icon">\u2606</div>
          <div class="favorites-empty-text">${t("favoritesEmpty")}</div>
          <div class="favorites-empty-text" style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">${t("favoritesEmptyHint")}</div>
        </div>`;
    } else {
      content.innerHTML = `<div class="rights-list">${renderRightCards(favRights)}</div>`;
    }
    showView("favorites");
  }

  // === Search ===
  function onSearch(query) {
    searchQuery = query.trim().toLowerCase();
    const clearBtn = document.getElementById("searchClear");

    if (searchQuery.length === 0) {
      clearBtn.classList.remove("visible");
      document.getElementById("searchResults").classList.add("hidden");
      document.getElementById("categoriesSection").classList.remove("hidden");
      document.getElementById("popularSection").classList.remove("hidden");
      return;
    }

    clearBtn.classList.add("visible");
    document.getElementById("categoriesSection").classList.add("hidden");
    document.getElementById("popularSection").classList.add("hidden");
    document.getElementById("searchResults").classList.remove("hidden");

    const results = RIGHTS_DATA.filter((r) => {
      const title = t(r.titleKey).toLowerCase();
      const summary = t(r.summaryKey).toLowerCase();
      const tags = r.tags.join(" ").toLowerCase();
      return title.includes(searchQuery) || summary.includes(searchQuery) || tags.includes(searchQuery);
    });

    document.getElementById("searchResultsList").innerHTML = renderRightCards(results);
  }

  function clearSearch() {
    document.getElementById("searchInput").value = "";
    onSearch("");
    document.getElementById("searchInput").focus();
  }

  // === Template ===
  function openTemplate() {
    if (!currentRight || !currentRight.templateKey) {
      showToast(t("noTemplate"));
      return;
    }
    const templateText = t(currentRight.templateKey);
    const content = document.getElementById("templateContent");
    // Highlight placeholders
    content.innerHTML = templateText.replace(/\[([^\]]+)\]/g, '<span class="placeholder">[$1]</span>');

    document.getElementById("templateModal").classList.add("visible");
    // Reset copy button
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.classList.remove("copied");
    copyBtn.innerHTML = "\uD83D\uDCCB " + t("copyTemplate");
  }

  function closeTemplate() {
    document.getElementById("templateModal").classList.remove("visible");
  }

  function copyTemplate() {
    if (!currentRight || !currentRight.templateKey) return;
    const text = t(currentRight.templateKey);
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("copyBtn");
      btn.classList.add("copied");
      btn.innerHTML = "\u2713 " + t("copied");
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = "\uD83D\uDCCB " + t("copyTemplate");
      }, 2000);
    }).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(t("copied"));
    });
  }

  // === Share ===
  function shareRight() {
    if (!currentRight) return;
    const title = t(currentRight.titleKey);
    const text = t(currentRight.summaryKey);

    if (navigator.share) {
      navigator.share({ title: "MyRights: " + title, text: text + "\n\n" + t("disclaimerBanner") }).catch(() => {});
    } else {
      navigator.clipboard.writeText(title + "\n" + text).then(() => {
        showToast(t("copied"));
      }).catch(() => {});
    }
  }

  // === Settings ===
  function openSettings() {
    renderSettingsOptions();
    document.getElementById("settingsModal").classList.add("visible");
  }

  function closeSettings() {
    document.getElementById("settingsModal").classList.remove("visible");
  }

  function renderSettingsOptions() {
    // Language options
    const langs = [
      { code: "de", label: "Deutsch" },
      { code: "en", label: "English" },
      { code: "tr", label: "Türkçe" },
      { code: "es", label: "Español" },
      { code: "fr", label: "Français" },
    ];
    document.getElementById("langOptions").innerHTML = langs.map((l) =>
      `<button class="settings-option ${settings.lang === l.code ? "active" : ""}" onclick="App.changeLang('${l.code}')">${l.label}</button>`
    ).join("");

    // Theme options
    const themes = [
      { code: "dark", label: t("themeDark") },
      { code: "light", label: t("themeLight") },
      { code: "auto", label: t("themeAuto") },
    ];
    document.getElementById("themeOptions").innerHTML = themes.map((th) =>
      `<button class="settings-option ${settings.theme === th.code ? "active" : ""}" onclick="App.setTheme('${th.code}')">${th.label}</button>`
    ).join("");
  }

  // === Toast ===
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 2500);
  }

  // === Render All ===
  function renderAll() {
    applyTranslations();
    renderCategories();
    renderPopular();
    if (currentRight) {
      showDetail(currentRight.id);
    }
  }

  // === Helpers ===
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  // === DOMContentLoaded ===
  document.addEventListener("DOMContentLoaded", init);

  // === Public API ===
  return {
    goHome,
    showCategory,
    showDetail,
    showFavorites,
    goBackFromDetail,
    nextOnboarding,
    onSearch,
    clearSearch,
    openTemplate,
    closeTemplate,
    copyTemplate,
    shareRight,
    openSettings,
    closeSettings,
    toggleFavorite,
    toggleFavFromCard,
    cycleTheme,
    setTheme,
    changeLang,
  };
})();
