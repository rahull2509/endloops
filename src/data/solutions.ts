export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "Audit & Assurance" | "Corporate Finance" | "Real Estate & Property";
  targetAudience: string[];
  problemSolved: string;
  description: string;
  workflowSteps: {
    title: string;
    description: string;
    systemAction: string;
    humanDecision: string;
  }[];
  keyCapabilities: string[];
  regulatoryCompliance: string[];
  impactMetrics: {
    metric: string;
    label: string;
  }[];
  sampleWorkingPaper: {
    sheetName: string;
    columns: string[];
    sampleRow: string[];
  };
}

export const SOLUTIONS: Solution[] = [
  {
    id: "budget-review",
    slug: "budget-review",
    title: "Budget Review Solution",
    shortTitle: "Budget Review",
    tagline: "Automated historical variance detection and multi-entity budget reconciliation.",
    category: "Corporate Finance",
    targetAudience: ["CFOs & Finance Directors", "Budget Committees", "Financial Planning & Analysis (FP&A) Teams"],
    problemSolved: "Manual spreadsheet comparisons between departmental budget proposals and historical general ledgers take weeks, obscure hidden cost escalations, and introduce formula drift across entities.",
    description: "Endloops ingests departmental budget submissions, aligns line items against historical general ledger actuals, flags threshold anomalies (>5% variance or unbudgeted CapEx), and generates structured review schedules ready for executive review.",
    workflowSteps: [
      {
        title: "Submission Ingestion",
        description: "Department heads upload budget sheets across multiple cost centers in Excel or CSV.",
        systemAction: "Standardizes chart of accounts mapping and normalizes multi-currency line items.",
        humanDecision: "Finance controller approves currency exchange rate assumptions."
      },
      {
        title: "Historical GL Comparison",
        description: "System compares current proposals against trailing 3-year historical audited actuals.",
        systemAction: "Computes run-rate variance, seasonal indices, and compound growth metrics.",
        humanDecision: "FP&A Analyst sets materiality tolerance thresholds."
      },
      {
        title: "Anomaly & Policy Screening",
        description: "System flags line items breaching company spending limits or sudden discretionary spikes.",
        systemAction: "Identifies recurring vendor price increases and unclassified expenditures.",
        humanDecision: "Department head provides justification notes for flagged variances."
      },
      {
        title: "Draft Working Schedule",
        description: "Generates the comprehensive executive budget pack with variance bridge charts.",
        systemAction: "Compiles consolidated financial pack with audit-ready references.",
        humanDecision: "CFO conducts final review and gives formal budget approval."
      }
    ],
    keyCapabilities: [
      "Automated Chart of Accounts normalization across disparate ERPs",
      "Dynamic variance threshold screening (absolute AED/$ and % drift)",
      "Automated prior-year actuals vs proposed budget bridging",
      "Scenario sensitivity modeling for inflation and FX rates",
      "Complete version-controlled audit trail of all revisions and approvals"
    ],
    regulatoryCompliance: ["IFRS Management Reporting Standards", "Corporate Governance Compliance", "Internal Delegation of Authority (DoA) Controls"],
    impactMetrics: [
      { metric: "75%", label: "Reduction in budget cycle duration" },
      { metric: "100%", label: "Formula integrity & variance audit trail" },
      { metric: "0", label: "Hidden unbudgeted line items missed" }
    ],
    sampleWorkingPaper: {
      sheetName: "WP-BR-01_Variance_Schedule",
      columns: ["Cost Center", "Account Code", "Line Item", "FY25 Actual (AED)", "FY26 Budget (AED)", "Variance (%)", "Flag Status", "Reviewer Action"],
      sampleRow: ["CC-102 Marketing", "6020-04", "Digital Acquisition", "420,000", "590,000", "+40.48%", "Flagged: Above 15% Cap", "Requires CMO Justification"]
    }
  },
  {
    id: "escrow-audit",
    slug: "escrow-audit",
    title: "Escrow Audit Solution",
    shortTitle: "Escrow Audit",
    tagline: "Specialized auditing automation for real estate escrow accounts under GCC regulatory standards.",
    category: "Real Estate & Property",
    targetAudience: ["RERA / DLD Registered Auditors", "Real Estate Developers", "Escrow Trustee Banks"],
    problemSolved: "Statutory escrow regulations in Dubai (Law No. 8) and the GCC demand meticulous verification of developer withdrawals against engineer completion certificates, contractor invoices, and retention releases. Manual audit sampling is painfully slow and prone to compliance risks.",
    description: "Built with the domain expertise of Alkazim's audit practitioners in Dubai, Endloops automatically reconciles trust account bank statements against project payment certificates, vendor contracts, and retention schedules to produce RERA-compliant escrow audit working papers.",
    workflowSteps: [
      {
        title: "Bank & Project Ledger Extraction",
        description: "Ingests escrow bank statements, developer journals, and engineering progress certificates.",
        systemAction: "Extracts transaction dates, beneficiaries, payment references, and project milestone stages.",
        humanDecision: "Auditor verifies account boundary and bank confirmation letter."
      },
      {
        title: "Regulatory Purpose Matching",
        description: "Validates every debit against statutory permitted escrow expenditures (construction, marketing cap 5%, land cost, management fees).",
        systemAction: "Performs 3-way match: Bank Debit ↔ Contractor Invoice ↔ Consultant Certificate.",
        humanDecision: "Audit Senior evaluates non-standard subcontractor payment justifications."
      },
      {
        title: "Retention & Defect Liability Verification",
        description: "Cross-checks retention fund balances against contracted percentages (e.g. 5% or 10%).",
        systemAction: "Flags any premature release of retention before expiry of defect liability period.",
        humanDecision: "Audit Manager determines compliance with RERA escrow release mandates."
      },
      {
        title: "Statutory Working Paper & Certificate",
        description: "Generates the draft Escrow Account Statement and audit findings ready for submission.",
        systemAction: "Drafts comprehensive schedules of receipts, disbursements, and retention balances.",
        humanDecision: "Signing Audit Partner reviews findings and signs statutory audit certificate."
      }
    ],
    keyCapabilities: [
      "GCC & Dubai RERA Law No. 8 compliance rule-engine pre-configured",
      "Automated 5% marketing fee statutory cap monitoring and alerts",
      "Consultant Engineer Completion Certificate ↔ Bank Debit 3-way reconciliation",
      "Contractor retention ledger tracking and release schedule validation",
      "Instant generation of trust account statutory audit working papers"
    ],
    regulatoryCompliance: ["Dubai RERA Law No. 8 of 2007", "DLD Escrow Account Guidelines", "GCC Real Estate Regulatory Authority Trust Rules"],
    impactMetrics: [
      { metric: "80%", label: "Faster escrow account reconciliation" },
      { metric: "100%", label: "Inspection of all debits (zero sampling blindspots)" },
      { metric: "RERA", label: "Submission-ready statutory audit working papers" }
    ],
    sampleWorkingPaper: {
      sheetName: "WP-ESC-04_Disbursement_Testing",
      columns: ["Voucher No", "Value Date", "Payee", "Amount (AED)", "Purpose Category", "Consultant Cert Ref", "Statutory Compliance", "Auditor Sign-off"],
      sampleRow: ["ESC-2026-089", "14-Feb-2026", "Arabian Gulf Contracting", "2,450,000", "Substructure Milestone 3", "CERT-ENG-992", "Compliant - Within Approved BOQ", "Verified by J. Al-Mansoor"]
    }
  },
  {
    id: "financial-audit",
    slug: "financial-audit",
    title: "Financial Audit Solution",
    shortTitle: "Financial Audit",
    tagline: "Comprehensive working paper preparation, trial balance roll-forwards, and substantive testing automation.",
    category: "Audit & Assurance",
    targetAudience: ["External Audit Firms", "Internal Audit Departments", "Compliance Officers"],
    problemSolved: "Audit seniors spend over 60% of their billable hours on clerical tasks: reconciling lead schedules, cross-casting trial balances, and extracting sampling populations instead of evaluating audit risk.",
    description: "Endloops serves as the digital foundation for audit teams. It handles data ingestion, trial balance roll-forwards, automated lead schedule generation, journal entry testing, and sample selection, preparing comprehensive draft working papers for audit professionals to review, test, and sign off.",
    workflowSteps: [
      {
        title: "Trial Balance & General Ledger Ingestion",
        description: "Uploads unadjusted client Trial Balance and detailed General Ledger transaction files.",
        systemAction: "Validates mathematical casting, verifies debits equal credits, maps to lead schedules.",
        humanDecision: "Audit Senior reviews chart of accounts groupings and materiality thresholds."
      },
      {
        title: "Substantive Sampling & Stratification",
        description: "Identifies key items above performance materiality and generates random/monetary unit samples.",
        systemAction: "Stratifies populations, pulls representative transaction samples, flags high-risk journals.",
        humanDecision: "Audit Manager approves sample sizes and risk allocation."
      },
      {
        title: "Evidence Extraction & 3-Way Matching",
        description: "Uploads invoices, shipping documents, and bank records for selected samples.",
        systemAction: "Extracts dates, amounts, approvals, and ties them back to ledger voucher entries.",
        humanDecision: "Auditor investigates variances and records audit commentary."
      },
      {
        title: "Audit Working Papers Preparation",
        description: "Produces standardized audit working papers with cross-referenced hyperlinked citations.",
        systemAction: "Compiles Lead Schedules, Variance Summaries, and Journal Entry Testing memos.",
        humanDecision: "Audit Partner performs second-partner review and signs off working paper."
      }
    ],
    keyCapabilities: [
      "Automated Trial Balance to Lead Schedule cross-casting and roll-forward",
      "ISA-compliant statistical sampling (MUS, stratified, and haphazard)",
      "High-risk Journal Entry Testing (weekend postings, round numbers, manual overrides)",
      "Automated lead schedule variance analysis with prior-year comparatives",
      "Exportable in standard audit file structures (Excel, Caseware, or PDF archives)"
    ],
    regulatoryCompliance: ["International Standards on Auditing (ISA 240, 315, 330, 500)", "IFRS Accounting Standards", "UAE Federal Decree-Law on Commercial Companies"],
    impactMetrics: [
      { metric: "65%", label: "Reduction in substantive testing prep time" },
      { metric: "100%", label: "Mathematical accuracy across all lead schedules" },
      { metric: "ISA", label: "Full alignment with International Standards on Auditing" }
    ],
    sampleWorkingPaper: {
      sheetName: "WP-TB-02_Revenue_Lead_Schedule",
      columns: ["FS Caption", "GL Code", "Description", "PY Audited (AED)", "CY Unadjusted (AED)", "Audit Adjustments", "CY Final", "Partner Sign-off"],
      sampleRow: ["Revenue - Contracts", "4010-00", "Commercial Lease Income", "18,450,000", "21,200,000", "(150,000)", "21,050,000", "Approved - T. Alkazim"]
    }
  },
  {
    id: "interim-audit",
    slug: "interim-audit",
    title: "Interim Audit Solution",
    shortTitle: "Interim Audit",
    tagline: "Rapid quarterly cut-off testing, revenue recognition review, and interim risk assessment.",
    category: "Audit & Assurance",
    targetAudience: ["External Audit Teams", "Listed Company Finance Teams", "Quarterly Review Auditors"],
    problemSolved: "Interim and quarterly reviews operate on compressed timelines. Performing manual cut-off tests and evaluating significant unrecorded liabilities often leads to late reporting or overlooked quarterly adjustments.",
    description: "Designed specifically for tight quarterly closing windows, Endloops automates cut-off testing around period-end dates, screens post-period-end bank payments for unrecorded liabilities, and generates interim analytical review memos ready for auditor sign-off.",
    workflowSteps: [
      {
        title: "Interim Period-End Data Feed",
        description: "Receives mid-year or quarterly trial balances and transaction journals for months 1-6 or 1-9.",
        systemAction: "Calculates annualized run rates and highlights quarterly seasonality shifts.",
        humanDecision: "Auditor defines cut-off testing window (e.g. +/- 15 days from period close)."
      },
      {
        title: "Cut-Off & Unrecorded Liability Sweep",
        description: "Examines invoices, delivery notes, and post-close payments for proper period accounting.",
        systemAction: "Flags goods received before cut-off without corresponding invoice accrual.",
        humanDecision: "Auditor reviews flagged accrual entries with client management."
      },
      {
        title: "Key Controls & Authorization Check",
        description: "Validates approval signatures and delegation limits on significant quarterly transactions.",
        systemAction: "Compares transaction amounts against documented user authorization matrix.",
        humanDecision: "Senior Auditor documents control deficiency or exception."
      },
      {
        title: "Interim Review Memorandum",
        description: "Generates the draft ISRE 2410 review working papers and findings summary.",
        systemAction: "Drafts review report notes, key analytical findings, and proposed adjustments.",
        humanDecision: "Audit Partner conducts clearance meeting and issues interim conclusion."
      }
    ],
    keyCapabilities: [
      "Automated 15-day pre/post cut-off testing for sales and purchase cycles",
      "Subsequent disbursements testing to detect unrecorded liabilities",
      "Quarter-over-quarter analytical review with automated fluctuation explanations",
      "Internal delegation of authority compliance audit checks",
      "Streamlined draft memorandums compliant with ISRE 2410 review standards"
    ],
    regulatoryCompliance: ["ISRE 2410 (Review of Interim Financial Information)", "GCC Capital Markets Authority Quarterly Filing Rules", "IFRS 34 Interim Reporting"],
    impactMetrics: [
      { metric: "4 Days", label: "Average cut from quarterly closing cycle" },
      { metric: "90%", label: "Automated cut-off sample extraction and matching" },
      { metric: "Zero", label: "Late filing penalties recorded across client engagements" }
    ],
    sampleWorkingPaper: {
      sheetName: "WP-INT-03_Cutoff_Testing",
      columns: ["Invoice Date", "GRN Date", "Supplier", "Invoice Amount (AED)", "Recorded Period", "Correct Period", "Adjustment Required", "Status"],
      sampleRow: ["02-Jul-2026", "28-Jun-2026", "Emirates Facility Services", "84,500", "Q3 2026", "Q2 2026", "Accrual of AED 84,500 needed", "Actioned - Client Adjusted"]
    }
  },
  {
    id: "budget-prep-property",
    slug: "budget-prep-property",
    title: "Budget Preparation for Property Management",
    shortTitle: "Property Management Budgeting",
    tagline: "Automated service charge modeling, common area expense distribution, and reserve fund schedules.",
    category: "Real Estate & Property",
    targetAudience: ["Property Management Companies", "Owners Associations (OA)", "Jointly Owned Property (JOP) Managers"],
    problemSolved: "Managing annual service charge budgets across residential towers and commercial communities involves thousands of square footage apportionment formulas, vendor service agreements, and complex statutory sinking fund requirements.",
    description: "Built for Dubai and GCC property managers, Endloops automates the complete service charge budgeting cycle. It ingests historical utility bills, facilities management contracts, and unit entitlement schedules, applies statutory reserve fund rules, and prepares Mollak/RERA-ready service charge filing budgets.",
    workflowSteps: [
      {
        title: "Community Asset & Entitlement Ingestion",
        description: "Loads tower unit breakdown, gross floor area, unit entitlement percentages, and common areas.",
        systemAction: "Validates square footage totals and verifies apportionment percentages sum exactly to 100%.",
        humanDecision: "Property Manager confirms commercial vs residential shared area splits."
      },
      {
        title: "Vendor Contracts & Utility Modeling",
        description: "Ingests security, cleaning, MEP maintenance, DEWA/utility, and chiller contracts.",
        systemAction: "Applies contracted escalation clauses, seasonal utility modeling, and indexation rates.",
        humanDecision: "Operations Manager reviews contractor scope changes and renewal estimates."
      },
      {
        title: "Statutory Reserve Fund Calculation",
        description: "Calculates long-term capital replacement reserve allocation based on asset lifespan schedules.",
        systemAction: "Computes sinking fund contributions in accordance with RERA 10-year reserve guidelines.",
        humanDecision: "Owners Association Board reviews reserve funding trajectory."
      },
      {
        title: "Service Charge Pack & Mollak Filing",
        description: "Generates unit-by-unit service charge rate cards (AED/sq.ft) and regulatory filing schedules.",
        systemAction: "Produces RERA/Mollak-compliant budget submission documents with backup tables.",
        humanDecision: "Senior Property Director conducts final sign-off before regulatory upload."
      }
    ],
    keyCapabilities: [
      "Native support for Dubai Mollak and GCC Jointly Owned Property regulations",
      "Dynamic square foot / unit entitlement apportionment engine",
      "Vendor contract rate indexing and multi-year facility escalation tracking",
      "Statutory 10-year reserve fund (sinking fund) actuarial schedule generator",
      "Automated unit-level invoice rate card preview (AED per sq. ft breakdown)"
    ],
    regulatoryCompliance: ["Dubai Law No. 6 of 2019 (Jointly Owned Property)", "RERA Service Charge Budget Guidelines", "Mollak System Filing Standards"],
    impactMetrics: [
      { metric: "70%", label: "Faster annual service charge budget approval" },
      { metric: "100%", label: "Apportionment accuracy across thousands of units" },
      { metric: "Mollak", label: "Ready format for official regulatory filing" }
    ],
    sampleWorkingPaper: {
      sheetName: "WP-JOP-01_Service_Charge_Model",
      columns: ["Cost Element", "Annual Cost (AED)", "Residential Alloc (%)", "Commercial Alloc (%)", "Total Area (Sq Ft)", "Rate (AED/Sq Ft)", "Variance vs PY", "Board Status"],
      sampleRow: ["MEP & HVAC Maintenance", "680,000", "72%", "28%", "245,000", "2.78", "+3.2%", "Approved by OA Board"]
    }
  }
];
