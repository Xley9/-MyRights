const RIGHTS_DATA = [
  // === TRAVEL ===
  {
    id: "flight-delayed",
    category: "travel",
    icon: "\u2708\uFE0F",
    titleKey: "rightFlightDelayedTitle",
    summaryKey: "rightFlightDelayedSummary",
    situationKey: "rightFlightDelayedSituation",
    rights: [
      { textKey: "rightFlightDelayed1", law: "EU VO 261/2004, Art. 7" },
      { textKey: "rightFlightDelayed2", law: "EU VO 261/2004, Art. 9" }
    ],
    steps: [
      { textKey: "rightFlightDelayedStep1" },
      { textKey: "rightFlightDelayedStep2" },
      { textKey: "rightFlightDelayedStep3" },
      { textKey: "rightFlightDelayedStep4" }
    ],
    deadlineKey: "rightFlightDelayedDeadline",
    compensationKey: "rightFlightDelayedComp",
    templateKey: "rightFlightDelayedTemplate",
    lawRefs: ["EU VO 261/2004", "\u00a7\u00a7 280, 286 BGB"],
    tags: ["flug", "versp\u00e4tung", "entsch\u00e4digung", "airline", "flight", "delay"]
  },
  {
    id: "flight-cancelled",
    category: "travel",
    icon: "\u2708\uFE0F",
    titleKey: "rightFlightCancelledTitle",
    summaryKey: "rightFlightCancelledSummary",
    situationKey: "rightFlightCancelledSituation",
    rights: [
      { textKey: "rightFlightCancelled1", law: "EU VO 261/2004, Art. 5" },
      { textKey: "rightFlightCancelled2", law: "EU VO 261/2004, Art. 8" }
    ],
    steps: [
      { textKey: "rightFlightCancelledStep1" },
      { textKey: "rightFlightCancelledStep2" },
      { textKey: "rightFlightCancelledStep3" }
    ],
    deadlineKey: "rightFlightCancelledDeadline",
    compensationKey: "rightFlightCancelledComp",
    templateKey: "rightFlightCancelledTemplate",
    lawRefs: ["EU VO 261/2004", "\u00a7 651i BGB"],
    tags: ["flug", "annulliert", "storniert", "erstattung", "flight", "cancelled"]
  },
  {
    id: "luggage-lost",
    category: "travel",
    icon: "\uD83E\uDDF3",
    titleKey: "rightLuggageLostTitle",
    summaryKey: "rightLuggageLostSummary",
    situationKey: "rightLuggageLostSituation",
    rights: [
      { textKey: "rightLuggageLost1", law: "Montrealer \u00dcbereinkommen, Art. 22" },
      { textKey: "rightLuggageLost2", law: "Montrealer \u00dcbereinkommen, Art. 31" }
    ],
    steps: [
      { textKey: "rightLuggageLostStep1" },
      { textKey: "rightLuggageLostStep2" },
      { textKey: "rightLuggageLostStep3" }
    ],
    deadlineKey: "rightLuggageLostDeadline",
    compensationKey: "rightLuggageLostComp",
    templateKey: "rightLuggageLostTemplate",
    lawRefs: ["Montrealer \u00dcbereinkommen", "\u00a7 823 BGB"],
    tags: ["gep\u00e4ck", "koffer", "verloren", "besch\u00e4digt", "luggage", "lost"]
  },

  // === SHOPPING ===
  {
    id: "online-withdrawal",
    category: "shopping",
    icon: "\uD83D\uDED2",
    titleKey: "rightOnlineWithdrawalTitle",
    summaryKey: "rightOnlineWithdrawalSummary",
    situationKey: "rightOnlineWithdrawalSituation",
    rights: [
      { textKey: "rightOnlineWithdrawal1", law: "\u00a7 355 BGB" },
      { textKey: "rightOnlineWithdrawal2", law: "\u00a7 357 BGB" }
    ],
    steps: [
      { textKey: "rightOnlineWithdrawalStep1" },
      { textKey: "rightOnlineWithdrawalStep2" },
      { textKey: "rightOnlineWithdrawalStep3" }
    ],
    deadlineKey: "rightOnlineWithdrawalDeadline",
    compensationKey: "rightOnlineWithdrawalComp",
    templateKey: "rightOnlineWithdrawalTemplate",
    lawRefs: ["\u00a7 355 BGB", "\u00a7 312g BGB", "\u00a7 357 BGB"],
    tags: ["widerruf", "online", "kauf", "14 tage", "r\u00fccktritt", "withdrawal"]
  },
  {
    id: "defective-goods",
    category: "shopping",
    icon: "\uD83D\uDCE6",
    titleKey: "rightDefectiveGoodsTitle",
    summaryKey: "rightDefectiveGoodsSummary",
    situationKey: "rightDefectiveGoodsSituation",
    rights: [
      { textKey: "rightDefectiveGoods1", law: "\u00a7 437 BGB" },
      { textKey: "rightDefectiveGoods2", law: "\u00a7 439 BGB" }
    ],
    steps: [
      { textKey: "rightDefectiveGoodsStep1" },
      { textKey: "rightDefectiveGoodsStep2" },
      { textKey: "rightDefectiveGoodsStep3" },
      { textKey: "rightDefectiveGoodsStep4" }
    ],
    deadlineKey: "rightDefectiveGoodsDeadline",
    compensationKey: "rightDefectiveGoodsComp",
    templateKey: "rightDefectiveGoodsTemplate",
    lawRefs: ["\u00a7 437 BGB", "\u00a7 439 BGB", "\u00a7 434 BGB"],
    tags: ["defekt", "mangel", "gew\u00e4hrleistung", "kaputt", "reklamation", "defective"]
  },
  {
    id: "parcel-not-arrived",
    category: "shopping",
    icon: "\uD83D\uDCEE",
    titleKey: "rightParcelNotArrivedTitle",
    summaryKey: "rightParcelNotArrivedSummary",
    situationKey: "rightParcelNotArrivedSituation",
    rights: [
      { textKey: "rightParcelNotArrived1", law: "\u00a7 447 BGB" },
      { textKey: "rightParcelNotArrived2", law: "\u00a7 421 BGB" }
    ],
    steps: [
      { textKey: "rightParcelNotArrivedStep1" },
      { textKey: "rightParcelNotArrivedStep2" },
      { textKey: "rightParcelNotArrivedStep3" }
    ],
    deadlineKey: "rightParcelNotArrivedDeadline",
    compensationKey: "rightParcelNotArrivedComp",
    templateKey: "rightParcelNotArrivedTemplate",
    lawRefs: ["\u00a7 447 BGB", "\u00a7 474 Abs. 2 BGB"],
    tags: ["paket", "lieferung", "nicht angekommen", "versand", "parcel"]
  },
  {
    id: "warranty-vs-guarantee",
    category: "shopping",
    icon: "\uD83D\uDD0D",
    titleKey: "rightWarrantyVsGuaranteeTitle",
    summaryKey: "rightWarrantyVsGuaranteeSummary",
    situationKey: "rightWarrantyVsGuaranteeSituation",
    rights: [
      { textKey: "rightWarrantyVsGuarantee1", law: "\u00a7 437 BGB" },
      { textKey: "rightWarrantyVsGuarantee2", law: "\u00a7 443 BGB" }
    ],
    steps: [
      { textKey: "rightWarrantyVsGuaranteeStep1" },
      { textKey: "rightWarrantyVsGuaranteeStep2" },
      { textKey: "rightWarrantyVsGuaranteeStep3" }
    ],
    deadlineKey: "rightWarrantyVsGuaranteeDeadline",
    compensationKey: null,
    templateKey: null,
    lawRefs: ["\u00a7 437 BGB", "\u00a7 443 BGB"],
    tags: ["garantie", "gew\u00e4hrleistung", "unterschied", "warranty", "guarantee"]
  },

  // === HOUSING ===
  {
    id: "rent-defects",
    category: "housing",
    icon: "\uD83C\uDFE0",
    titleKey: "rightRentDefectsTitle",
    summaryKey: "rightRentDefectsSummary",
    situationKey: "rightRentDefectsSituation",
    rights: [
      { textKey: "rightRentDefects1", law: "\u00a7 536 BGB" },
      { textKey: "rightRentDefects2", law: "\u00a7 536a BGB" }
    ],
    steps: [
      { textKey: "rightRentDefectsStep1" },
      { textKey: "rightRentDefectsStep2" },
      { textKey: "rightRentDefectsStep3" },
      { textKey: "rightRentDefectsStep4" }
    ],
    deadlineKey: "rightRentDefectsDeadline",
    compensationKey: "rightRentDefectsComp",
    templateKey: "rightRentDefectsTemplate",
    lawRefs: ["\u00a7 536 BGB", "\u00a7 536a BGB"],
    tags: ["miete", "mangel", "schimmel", "heizung", "mietminderung", "rent", "defect"]
  },
  {
    id: "deposit-return",
    category: "housing",
    icon: "\uD83D\uDCB0",
    titleKey: "rightDepositReturnTitle",
    summaryKey: "rightDepositReturnSummary",
    situationKey: "rightDepositReturnSituation",
    rights: [
      { textKey: "rightDepositReturn1", law: "\u00a7 551 BGB" },
      { textKey: "rightDepositReturn2", law: "\u00a7 551 Abs. 3 BGB" }
    ],
    steps: [
      { textKey: "rightDepositReturnStep1" },
      { textKey: "rightDepositReturnStep2" },
      { textKey: "rightDepositReturnStep3" }
    ],
    deadlineKey: "rightDepositReturnDeadline",
    compensationKey: "rightDepositReturnComp",
    templateKey: "rightDepositReturnTemplate",
    lawRefs: ["\u00a7 551 BGB"],
    tags: ["kaution", "r\u00fcckzahlung", "auszug", "deposit", "return"]
  },
  {
    id: "utility-bill",
    category: "housing",
    icon: "\uD83D\uDCC4",
    titleKey: "rightUtilityBillTitle",
    summaryKey: "rightUtilityBillSummary",
    situationKey: "rightUtilityBillSituation",
    rights: [
      { textKey: "rightUtilityBill1", law: "\u00a7 556 BGB" },
      { textKey: "rightUtilityBill2", law: "\u00a7 556 Abs. 3 BGB" }
    ],
    steps: [
      { textKey: "rightUtilityBillStep1" },
      { textKey: "rightUtilityBillStep2" },
      { textKey: "rightUtilityBillStep3" }
    ],
    deadlineKey: "rightUtilityBillDeadline",
    compensationKey: null,
    templateKey: "rightUtilityBillTemplate",
    lawRefs: ["\u00a7 556 BGB", "BetrKV"],
    tags: ["nebenkosten", "abrechnung", "betriebskosten", "widerspruch", "utility"]
  },
  {
    id: "landlord-termination",
    category: "housing",
    icon: "\uD83D\uDCDD",
    titleKey: "rightLandlordTerminationTitle",
    summaryKey: "rightLandlordTerminationSummary",
    situationKey: "rightLandlordTerminationSituation",
    rights: [
      { textKey: "rightLandlordTermination1", law: "\u00a7 573 BGB" },
      { textKey: "rightLandlordTermination2", law: "\u00a7 574 BGB" }
    ],
    steps: [
      { textKey: "rightLandlordTerminationStep1" },
      { textKey: "rightLandlordTerminationStep2" },
      { textKey: "rightLandlordTerminationStep3" }
    ],
    deadlineKey: "rightLandlordTerminationDeadline",
    compensationKey: null,
    templateKey: "rightLandlordTerminationTemplate",
    lawRefs: ["\u00a7 573 BGB", "\u00a7 574 BGB", "\u00a7 573c BGB"],
    tags: ["k\u00fcndigung", "vermieter", "wohnung", "mieter", "termination", "landlord"]
  },

  // === WORK ===
  {
    id: "termination-received",
    category: "work",
    icon: "\uD83D\uDCBC",
    titleKey: "rightTerminationReceivedTitle",
    summaryKey: "rightTerminationReceivedSummary",
    situationKey: "rightTerminationReceivedSituation",
    rights: [
      { textKey: "rightTerminationReceived1", law: "\u00a7 4 KSchG" },
      { textKey: "rightTerminationReceived2", law: "\u00a7 1 KSchG" }
    ],
    steps: [
      { textKey: "rightTerminationReceivedStep1" },
      { textKey: "rightTerminationReceivedStep2" },
      { textKey: "rightTerminationReceivedStep3" }
    ],
    deadlineKey: "rightTerminationReceivedDeadline",
    compensationKey: "rightTerminationReceivedComp",
    templateKey: null,
    lawRefs: ["\u00a7 4 KSchG", "\u00a7 1 KSchG", "\u00a7 623 BGB"],
    tags: ["k\u00fcndigung", "arbeit", "arbeitsrecht", "klage", "termination", "job"]
  },
  {
    id: "work-reference",
    category: "work",
    icon: "\uD83D\uDCC3",
    titleKey: "rightWorkReferenceTitle",
    summaryKey: "rightWorkReferenceSummary",
    situationKey: "rightWorkReferenceSituation",
    rights: [
      { textKey: "rightWorkReference1", law: "\u00a7 630 BGB" },
      { textKey: "rightWorkReference2", law: "\u00a7 109 GewO" }
    ],
    steps: [
      { textKey: "rightWorkReferenceStep1" },
      { textKey: "rightWorkReferenceStep2" },
      { textKey: "rightWorkReferenceStep3" }
    ],
    deadlineKey: "rightWorkReferenceDeadline",
    compensationKey: null,
    templateKey: "rightWorkReferenceTemplate",
    lawRefs: ["\u00a7 630 BGB", "\u00a7 109 GewO"],
    tags: ["zeugnis", "arbeitszeugnis", "referenz", "reference"]
  },
  {
    id: "overtime-unpaid",
    category: "work",
    icon: "\u23F0",
    titleKey: "rightOvertimeUnpaidTitle",
    summaryKey: "rightOvertimeUnpaidSummary",
    situationKey: "rightOvertimeUnpaidSituation",
    rights: [
      { textKey: "rightOvertimeUnpaid1", law: "\u00a7 612 BGB" },
      { textKey: "rightOvertimeUnpaid2", law: "ArbZG" }
    ],
    steps: [
      { textKey: "rightOvertimeUnpaidStep1" },
      { textKey: "rightOvertimeUnpaidStep2" },
      { textKey: "rightOvertimeUnpaidStep3" }
    ],
    deadlineKey: "rightOvertimeUnpaidDeadline",
    compensationKey: "rightOvertimeUnpaidComp",
    templateKey: "rightOvertimeUnpaidTemplate",
    lawRefs: ["\u00a7 612 BGB", "ArbZG"],
    tags: ["\u00fcberstunden", "bezahlung", "arbeitszeit", "overtime"]
  },
  {
    id: "vacation-entitlement",
    category: "work",
    icon: "\uD83C\uDFD6\uFE0F",
    titleKey: "rightVacationEntitlementTitle",
    summaryKey: "rightVacationEntitlementSummary",
    situationKey: "rightVacationEntitlementSituation",
    rights: [
      { textKey: "rightVacationEntitlement1", law: "\u00a7 3 BUrlG" },
      { textKey: "rightVacationEntitlement2", law: "\u00a7 7 BUrlG" }
    ],
    steps: [
      { textKey: "rightVacationEntitlementStep1" },
      { textKey: "rightVacationEntitlementStep2" },
      { textKey: "rightVacationEntitlementStep3" }
    ],
    deadlineKey: "rightVacationEntitlementDeadline",
    compensationKey: null,
    templateKey: "rightVacationEntitlementTemplate",
    lawRefs: ["\u00a7 3 BUrlG", "\u00a7 7 BUrlG"],
    tags: ["urlaub", "urlaubstage", "anspruch", "vacation"]
  },

  // === TELECOM ===
  {
    id: "contract-cancel",
    category: "telecom",
    icon: "\uD83D\uDCF1",
    titleKey: "rightContractCancelTitle",
    summaryKey: "rightContractCancelSummary",
    situationKey: "rightContractCancelSituation",
    rights: [
      { textKey: "rightContractCancel1", law: "\u00a7 314 BGB" },
      { textKey: "rightContractCancel2", law: "\u00a7 56 Abs. 3 TKG" }
    ],
    steps: [
      { textKey: "rightContractCancelStep1" },
      { textKey: "rightContractCancelStep2" },
      { textKey: "rightContractCancelStep3" }
    ],
    deadlineKey: "rightContractCancelDeadline",
    compensationKey: null,
    templateKey: "rightContractCancelTemplate",
    lawRefs: ["\u00a7 314 BGB", "\u00a7 56 TKG"],
    tags: ["vertrag", "k\u00fcndigung", "handy", "internet", "contract", "cancel"]
  },
  {
    id: "price-increase",
    category: "telecom",
    icon: "\uD83D\uDCC8",
    titleKey: "rightPriceIncreaseTitle",
    summaryKey: "rightPriceIncreaseSummary",
    situationKey: "rightPriceIncreaseSituation",
    rights: [
      { textKey: "rightPriceIncrease1", law: "\u00a7 41 Abs. 3 TKG" },
      { textKey: "rightPriceIncrease2", law: "\u00a7 314 BGB" }
    ],
    steps: [
      { textKey: "rightPriceIncreaseStep1" },
      { textKey: "rightPriceIncreaseStep2" },
      { textKey: "rightPriceIncreaseStep3" }
    ],
    deadlineKey: "rightPriceIncreaseDeadline",
    compensationKey: null,
    templateKey: "rightPriceIncreaseTemplate",
    lawRefs: ["\u00a7 41 TKG", "\u00a7 314 BGB"],
    tags: ["preiserh\u00f6hung", "sonderk\u00fcndigung", "vertrag", "price", "increase"]
  },

  // === SERVICES ===
  {
    id: "craftsman-defect",
    category: "services",
    icon: "\uD83D\uDD27",
    titleKey: "rightCraftsmanDefectTitle",
    summaryKey: "rightCraftsmanDefectSummary",
    situationKey: "rightCraftsmanDefectSituation",
    rights: [
      { textKey: "rightCraftsmanDefect1", law: "\u00a7 634 BGB" },
      { textKey: "rightCraftsmanDefect2", law: "\u00a7 637 BGB" }
    ],
    steps: [
      { textKey: "rightCraftsmanDefectStep1" },
      { textKey: "rightCraftsmanDefectStep2" },
      { textKey: "rightCraftsmanDefectStep3" },
      { textKey: "rightCraftsmanDefectStep4" }
    ],
    deadlineKey: "rightCraftsmanDefectDeadline",
    compensationKey: "rightCraftsmanDefectComp",
    templateKey: "rightCraftsmanDefectTemplate",
    lawRefs: ["\u00a7 634 BGB", "\u00a7 637 BGB", "\u00a7 13 VOB/B"],
    tags: ["handwerker", "pfusch", "nachbesserung", "mangel", "craftsman"]
  },

  // === HEALTH ===
  {
    id: "treatment-error",
    category: "health",
    icon: "\u2695\uFE0F",
    titleKey: "rightTreatmentErrorTitle",
    summaryKey: "rightTreatmentErrorSummary",
    situationKey: "rightTreatmentErrorSituation",
    rights: [
      { textKey: "rightTreatmentError1", law: "\u00a7 630a BGB" },
      { textKey: "rightTreatmentError2", law: "\u00a7 630h BGB" }
    ],
    steps: [
      { textKey: "rightTreatmentErrorStep1" },
      { textKey: "rightTreatmentErrorStep2" },
      { textKey: "rightTreatmentErrorStep3" },
      { textKey: "rightTreatmentErrorStep4" }
    ],
    deadlineKey: "rightTreatmentErrorDeadline",
    compensationKey: "rightTreatmentErrorComp",
    templateKey: null,
    lawRefs: ["\u00a7 630a BGB", "\u00a7 630h BGB", "\u00a7 823 BGB"],
    tags: ["behandlungsfehler", "arzt", "krankenhaus", "gutachten", "treatment", "error"]
  },

  // === GOVERNMENT ===
  {
    id: "objection-decision",
    category: "government",
    icon: "\uD83C\uDFDB\uFE0F",
    titleKey: "rightObjectionDecisionTitle",
    summaryKey: "rightObjectionDecisionSummary",
    situationKey: "rightObjectionDecisionSituation",
    rights: [
      { textKey: "rightObjectionDecision1", law: "\u00a7 70 VwGO" },
      { textKey: "rightObjectionDecision2", law: "\u00a7 80 VwGO" }
    ],
    steps: [
      { textKey: "rightObjectionDecisionStep1" },
      { textKey: "rightObjectionDecisionStep2" },
      { textKey: "rightObjectionDecisionStep3" }
    ],
    deadlineKey: "rightObjectionDecisionDeadline",
    compensationKey: null,
    templateKey: "rightObjectionDecisionTemplate",
    lawRefs: ["\u00a7 70 VwGO", "\u00a7 80 VwGO"],
    tags: ["widerspruch", "bescheid", "beh\u00f6rde", "frist", "objection", "government"]
  }
];
