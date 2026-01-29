# MyRights – Deine Rechte, sofort

A Progressive Web App (PWA) that makes consumer rights in Germany simple and accessible — offline.

## Features

- **20 Legal Cases** — The most common consumer rights situations in Germany
- **8 Categories** — Flight & Travel, Online Shopping, Rent & Housing, Employment, Phone & Internet, Craftsmen, Health, Government
- **Template Letters** — Ready-to-use letters with placeholders, one-click copy
- **Step-by-Step Guides** — Clear instructions for each situation
- **Legal References** — German law references (BGB, EU regulations, etc.)
- **Search** — Instant search across all cases, tags, and descriptions
- **Favorites** — Save important cases for quick access
- **5 Languages** — German, English, Turkish, Spanish, French (legal texts in German only)
- **Dark/Light Mode** — System-aware theme switching
- **Fully Offline** — Service Worker caches everything, works without internet
- **No Dependencies** — Pure vanilla JavaScript, no frameworks, no CDN

## Disclaimer

MyRights provides **general information only** about consumer rights in Germany. It is **not legal advice**. For legal counsel, please consult a qualified attorney.

## Project Structure

```
MyRights/
├── index.html              # Main app
├── css/style.css           # Design system (dark/light, responsive)
├── js/
│   ├── app.js              # Core logic (navigation, search, favorites)
│   ├── i18n.js             # Translations (DE, EN, TR, ES, FR)
│   ├── categories.js       # 8 categories
│   └── rights-data.js      # 20 legal cases with full data model
├── img/                    # SVG icons (favicon, PWA icons)
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (cache-first)
├── privacy-policy.html     # Privacy policy (GDPR)
├── LICENSE                 # MIT License
└── README.md
```

## Getting Started

1. Open `index.html` in a browser
2. Or serve with any static server: `npx serve .`

## Tech Stack

- Vanilla JavaScript (ES6+)
- CSS Custom Properties (Dark/Light theming)
- Service Worker API (Offline support)
- Web Share API (Native sharing)
- Clipboard API (One-click copy)
- localStorage (Favorites & settings)

## Legal Cases Covered

| # | Category | Case |
|---|----------|------|
| 1 | Flight & Travel | Flight delayed >3h |
| 2 | Flight & Travel | Flight cancelled |
| 3 | Flight & Travel | Luggage lost/damaged |
| 4 | Online Shopping | 14-day withdrawal |
| 5 | Online Shopping | Defective goods (warranty) |
| 6 | Online Shopping | Parcel not delivered |
| 7 | Online Shopping | Warranty vs. guarantee |
| 8 | Rent & Housing | Rental defects (mold, heating) |
| 9 | Rent & Housing | Deposit not returned |
| 10 | Rent & Housing | Utility bill dispute |
| 11 | Rent & Housing | Landlord termination |
| 12 | Employment | Job termination received |
| 13 | Employment | Work reference request |
| 14 | Employment | Overtime not paid |
| 15 | Employment | Vacation entitlement |
| 16 | Phone & Internet | Contract cancellation |
| 17 | Phone & Internet | Price increase |
| 18 | Craftsmen | Defective craftsman work |
| 19 | Health | Medical treatment error |
| 20 | Government | Objection against official decision |

## License

MIT License — see [LICENSE](LICENSE)
