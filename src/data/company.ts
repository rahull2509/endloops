export const COMPANY = {
  name: "Endloops",
  legalName: "Endloops Technologies FZ-LLC",
  parentFirm: "Alkazim Accounting & Auditing",
  tagline: "Software prepares the work. Financial professionals review and decide.",
  establishedLocation: "Dubai, United Arab Emirates",
  officeAddress: "Alkazim Building, Sheikh Zayed Road, Dubai, UAE",
  contactEmail: "contact@endloops.com",
  supportEmail: "support@endloops.com",
  phone: "+971 4 392 8100",
  businessHours: "Monday – Friday: 8:30 AM – 5:30 PM (GST / UTC+4)",
  regionalFocus: "GCC (UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman) & Global International Practice",
  story: {
    origin: "Alkazim is an established accounting and audit firm based in Dubai. Over the years, its technology department built software that automates financial work to relieve practitioners from tedious manual checks. That department is now Endloops, an independent company building automation specifically for Financial Professionals.",
    mission: "To eliminate the repetitive, mechanical burden of financial documentation, 3-way matching, and schedule preparation—allowing accountants, auditors, and finance leaders to focus their intellectual energy on judgement, strategic advisory, and client trust.",
    creed: "We believe software should prepare drafts with immaculate citations, but the final sign-off, decision, and accountability must always remain in human hands."
  },
  pillars: [
    {
      title: "Built by Practitioners, Not Just Technologists",
      description: "Every algorithm, extraction rule, and working paper format originated inside a practicing Dubai audit firm handling real commercial files and statutory filings.",
      icon: "ShieldCheck"
    },
    {
      title: "Human-in-the-Loop Architecture",
      description: "No autonomous black-box decisions. Endloops organizes, matches, highlights discrepancies, and drafts schedules. The professional reviews, adjusts, and authorizes.",
      icon: "UserCheck"
    },
    {
      title: "Pixel-Level Auditability",
      description: "Every extracted number and variance links directly back to its source document coordinate, allowing instant 1-click verification of any cell.",
      icon: "FileCheck"
    },
    {
      title: "GCC Regulatory Pre-Configuration",
      description: "Engineered specifically for regional statutory requirements: UAE Corporate Tax, FTA VAT, Dubai RERA Escrow Law No. 8, and Mollak Jointly Owned Property regulations.",
      icon: "Building2"
    }
  ]
};

export const AUDIENCE_SEGMENTS = [
  {
    id: "accounting-firms",
    title: "Accounting & Bookkeeping Firms",
    subtitle: "Scale your client portfolio without linear headcount expansion.",
    painPoint: "Hours lost manually transcribing vendor bills, matching credit card receipts, and drafting routine monthly schedules.",
    solution: "Endloops automates data ingestion, GL categorization, and bank reconciliations—preparing review-ready client work papers in minutes.",
    features: ["Multi-client tenant isolation", "Tally, QuickBooks & Xero export", "Automated expense working papers"]
  },
  {
    id: "audit-firms",
    title: "External & Internal Audit Firms",
    subtitle: "Elevate audit quality while slashing substantive testing duration.",
    painPoint: "Audit seniors bogged down in physical vouching, cross-casting trial balances, and checking footnote references instead of testing audit risk.",
    solution: "Automated ISA-compliant sampling, 3-way matching of invoices to POs and GRNs, and lead schedule roll-forwards with full audit citations.",
    features: ["Full ISA 240/315/500 audit trails", "Statutory RERA Escrow audit engine", "Automated footnote consistency validation"]
  },
  {
    id: "finance-teams",
    title: "Corporate Finance & FP&A Teams",
    subtitle: "Accelerate month-end closing from two weeks to three days.",
    painPoint: "Fragmented spreadsheets, budget variance blind spots, and delayed reconciliations across subsidiaries.",
    solution: "Automated historical budget variance analysis, multi-currency ledger reconciliation, and instant corporate tax disallowance reporting.",
    features: ["Threshold variance alerts (>5%)", "Corporate Tax entertainment/fine add-back splits", "Automated intercompany clearing"]
  },
  {
    id: "property-management",
    title: "Property Management & Owners Associations",
    subtitle: "Simplify service charge modeling and statutory escrow audits.",
    painPoint: "Complex unit entitlement formulas, escalating vendor contracts, and intense RERA/Mollak regulatory scrutiny on service charge filings.",
    solution: "Automated service charge apportionment models, 10-year reserve fund sinking schedules, and RERA-compliant escrow withdrawal verification.",
    features: ["Native Mollak filing formats", "Unit square-foot entitlement matrix", "Statutory 5% marketing fee cap tracking"]
  }
];

