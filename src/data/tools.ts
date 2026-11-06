export interface StandaloneTool {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  category: "Extraction & OCR" | "Verification & Matching" | "Accounting Schedules";
  description: string;
  keyFeatures: string[];
  inputTypes: string[];
  outputFormats: string[];
  typicalTimeSaved: string;
  interactiveDemo: {
    inputLabel: string;
    sampleInputSnippet: string;
    extractedFields: { label: string; value: string; confidence: number; verified?: boolean }[];
    discrepancyCheck: { rule: string; status: "pass" | "flag" | "info"; detail: string }[];
    outputSchedulePreview: string;
  };
}

export const STANDALONE_TOOLS: StandaloneTool[] = [
  {
    id: "po-extraction",
    slug: "po-extraction",
    name: "Purchase Order Extraction",
    badge: "Document OCR",
    tagline: "High-precision line-item and header parsing from complex multi-page POs and contracts.",
    category: "Extraction & OCR",
    description: "Converts scanned, digital, and multi-page purchase orders into structured tabular data. Automatically captures buyer/supplier TRN, line descriptions, quantities, unit prices, tax amounts, and delivery terms with over 99% character-level accuracy.",
    keyFeatures: [
      "Bilingual Arabic and English OCR for GCC commercial documentation",
      "Automatic UAE / GCC Tax Registration Number (TRN) validation via checksum",
      "Dynamic table detection across nested line items and multi-page continuation sheets",
      "Instant export to ERP-ready JSON, CSV, or formatted Excel working papers",
      "Confidence scoring per extracted cell with clickable source document highlight"
    ],
    inputTypes: ["Scanned PDF", "Digital PDF", "TIFF / JPG", "Email Attachment"],
    outputFormats: ["Structured JSON", "Excel (.xlsx)", "CSV", "Direct ERP API"],
    typicalTimeSaved: "85% reduction in manual data entry time",
    interactiveDemo: {
      inputLabel: "PO-2026-GulfCommercial-4921.pdf",
      sampleInputSnippet: "PURCHASE ORDER: PO-4921 | Date: 12-Feb-2026 | Vendor: Al-Futtaim Engineering | TRN: 100234819200003 | Total: AED 148,250.00",
      extractedFields: [
        { label: "PO Number", value: "PO-4921", confidence: 99.8, verified: true },
        { label: "Vendor Name", value: "Al-Futtaim Engineering LLC", confidence: 99.4, verified: true },
        { label: "Vendor TRN", value: "100234819200003", confidence: 100, verified: true },
        { label: "Subtotal", value: "AED 141,190.48", confidence: 99.1, verified: true },
        { label: "VAT (5%)", value: "AED 7,059.52", confidence: 99.7, verified: true },
        { label: "Total Payable", value: "AED 148,250.00", confidence: 99.9, verified: true }
      ],
      discrepancyCheck: [
        { rule: "TRN Valid Format", status: "pass", detail: "Valid 15-digit UAE FTA Tax Registration Number" },
        { rule: "Tax Calculation Match", status: "pass", detail: "5% VAT matches subtotal within AED 0.00 rounding limit" },
        { rule: "Approved Vendor List", status: "pass", detail: "Vendor active in Master Vendor Database" }
      ],
      outputSchedulePreview: "Line 1: 50x Chiller Filter Elements @ AED 850.00 = AED 42,500.00 | Line 2: Preventive HVAC Overhaul Package = AED 98,690.48"
    }
  },
  {
    id: "vouching-automation",
    slug: "vouching-automation",
    name: "Vouching Automation",
    badge: "Audit Verification",
    tagline: "Automated 3-way matching between Purchase Orders, Delivery Notes, and Supplier Invoices.",
    category: "Verification & Matching",
    description: "Eliminates physical vouching binders. Endloops cross-references each invoice against its originating purchase order and physical goods received note (GRN), verifying quantities, rates, and authorized signatures before preparing the audit vouching schedule.",
    keyFeatures: [
      "Rigorous 3-Way Matching (PO ↔ GRN ↔ Tax Invoice) with tolerance thresholds",
      "Automatic detection of quantity variances, rate escalations, and unapproved additions",
      "Authorized signatory verification against approved signing limits",
      "Automated compilation of audit vouching work papers (WP-AP-01)",
      "Instant exception flagging with direct side-by-side document comparison"
    ],
    inputTypes: ["Invoice PDF", "Scanned GRN", "ERP Purchase Orders", "Store Receipt Slips"],
    outputFormats: ["Vouching Exception Memo", "Audit Lead Schedule", "ERP Settlement Feed"],
    typicalTimeSaved: "90% faster vouching sample testing",
    interactiveDemo: {
      inputLabel: "Audit Sample Voucher #V-8812 (Sample testing AED 100k+)",
      sampleInputSnippet: "3-Way Packet: Tax Invoice #INV-9901 + PO-4402 + Delivery Note GRN-1102",
      extractedFields: [
        { label: "Voucher Reference", value: "V-8812", confidence: 100, verified: true },
        { label: "Supplier", value: "Emirates Steel Industries", confidence: 99.6, verified: true },
        { label: "PO Ordered Qty", value: "1,200 MT", confidence: 99.8, verified: true },
        { label: "GRN Delivered Qty", value: "1,180 MT", confidence: 99.2, verified: true },
        { label: "Invoiced Qty", value: "1,200 MT", confidence: 99.7, verified: false },
        { label: "Billed Total", value: "AED 3,240,000.00", confidence: 99.9, verified: false }
      ],
      discrepancyCheck: [
        { rule: "3-Way Quantity Reconciliation", status: "flag", detail: "DISCREPANCY: Invoiced for 1,200 MT but warehouse GRN acknowledges only 1,180 MT (-20 MT short-shipment)" },
        { rule: "Approved Unit Rate Check", status: "pass", detail: "Invoiced rate AED 2,700/MT matches approved contract rate" },
        { rule: "Voucher Authorization", status: "pass", detail: "Signed by authorized procurement director" }
      ],
      outputSchedulePreview: "Draft WP-AP-01 generated: Adjustment recommendation of AED 54,000.00 credit note for short-shipment flagged for Senior Auditor review."
    }
  },
  {
    id: "expense-working",
    slug: "expense-working",
    name: "Expense Working Automation",
    badge: "Financial Accounting",
    tagline: "Categorization, ledger allocation, and schedule compilation of corporate expenses.",
    category: "Accounting Schedules",
    description: "Transforms unstructured corporate expense receipts, credit card statements, and vendor claims into clean, categorized, and reconciled expense working papers with tax disallowance calculations ready for management and tax audits.",
    keyFeatures: [
      "Intelligent Chart of Accounts expense account mapping",
      "Corporate Tax disallowance identification (entertainment 50% rule, fines 100%)",
      "Duplicate receipt detection across employees, dates, and amounts",
      "Multi-currency conversion using central bank daily benchmark rates",
      "Automated compilation of expense schedules with hyperlinked receipts"
    ],
    inputTypes: ["Employee Receipts", "Corporate Card CSV", "Vendor Bills", "Hotel Folios"],
    outputFormats: ["Monthly Expense Schedule", "Tax Disallowance Working Paper", "Journal Import CSV"],
    typicalTimeSaved: "75% reduction in expense closing cycle",
    interactiveDemo: {
      inputLabel: "Corporate Card Batch - October 2026 (142 Transactions)",
      sampleInputSnippet: "Merchant: Armani Hotel Dubai | Amount: AED 4,200.00 | Category: Business Dining / Entertainment",
      extractedFields: [
        { label: "Merchant", value: "Armani Hotel Dubai", confidence: 99.5, verified: true },
        { label: "Date", value: "24-Oct-2026", confidence: 100, verified: true },
        { label: "Amount", value: "AED 4,200.00", confidence: 99.9, verified: true },
        { label: "Assigned GL Code", value: "6140-Entertainment", confidence: 98.4, verified: true },
        { label: "Tax Disallowed (50%)", value: "AED 2,100.00", confidence: 100, verified: true },
        { label: "Tax Deductible (50%)", value: "AED 2,100.00", confidence: 100, verified: true }
      ],
      discrepancyCheck: [
        { rule: "UAE Corporate Tax Entertainment Rule", status: "info", detail: "Article 32: 50% limitation automatically segregated to tax add-back schedule" },
        { rule: "Itemized Receipt Attached", status: "pass", detail: "Full food & beverage breakdown present" },
        { rule: "Policy Daily Per-Diem Cap", status: "pass", detail: "Within executive hospitality allowance" }
      ],
      outputSchedulePreview: "Draft WP-EXP-08: General ledger journal entry balanced; corporate tax tax-computation add-back schedule populated."
    }
  },
  {
    id: "financial-report-review",
    slug: "financial-report-review",
    name: "Financial Report Review",
    badge: "Reporting Quality",
    tagline: "Automated consistency checking, footnote math reconciliation, and cross-statement validation.",
    category: "Verification & Matching",
    description: "Acts as the ultimate quality check on draft statutory financial statements. Scans balance sheets, income statements, cash flow statements, and hundreds of footnote disclosures to guarantee every cross-reference, casting total, and prior-year comparative ties out flawlessly.",
    keyFeatures: [
      "Cross-statement reconciliation (Cash & Cash Equivalents, Retained Earnings, Net Income tie-out)",
      "Comprehensive footnote mathematical casting (horizontal and vertical cross-casting)",
      "Prior-year comparative balance verification against previously published audited reports",
      "IFRS disclosure completeness verification against statutory checklists",
      "Instant issue summary identifying typographical errors, rounded pennies, and broken references"
    ],
    inputTypes: ["Draft Financial Statements (Word/PDF)", "Final Trial Balance", "Prior Year Audited Statements"],
    outputFormats: ["Diagnostic Error Report", "Cross-Reference Map", "Clean Final Review Memo"],
    typicalTimeSaved: "2 full days of manual review per audit engagement",
    interactiveDemo: {
      inputLabel: "Draft-Statutory-FS-FY2026-v3.docx (64 pages)",
      sampleInputSnippet: "Note 14: Property, Plant & Equipment vs Statement of Financial Position Line Item",
      extractedFields: [
        { label: "BS Caption - PP&E", value: "AED 84,250,000", confidence: 100, verified: true },
        { label: "Note 14 Net Book Value", value: "AED 84,230,000", confidence: 100, verified: false },
        { label: "Variance Detected", value: "AED (20,000) Mismatch", confidence: 100, verified: false },
        { label: "Statement of Cash Flows Additions", value: "AED 6,400,000", confidence: 99.8, verified: true },
        { label: "Note 14 Capex Additions", value: "AED 6,400,000", confidence: 99.8, verified: true }
      ],
      discrepancyCheck: [
        { rule: "Footnote to Balance Sheet Casting", status: "flag", detail: "DISCREPANCY: Note 14 total (AED 84,230k) does not equal Balance Sheet (AED 84,250k). Rounding error in office equipment depreciation column." },
        { rule: "Cash Flow to Note Additions", status: "pass", detail: "PPE cash additions tie out to Statement of Cash Flows investing activities" },
        { rule: "PY Restatement Disclosures", status: "pass", detail: "Prior year figures match 2025 audited accounts" }
      ],
      outputSchedulePreview: "Financial Review Diagnostic: 1 critical footing discrepancy in Note 14; 2 minor grammatical inconsistencies in accounting policies."
    }
  },
  {
    id: "tender-verification",
    slug: "tender-verification",
    name: "Tender Verification",
    badge: "Commercial Assurance",
    tagline: "Side-by-side bidder quote comparison, rate analysis, and compliance against Bill of Quantities.",
    category: "Verification & Matching",
    description: "Streamlines commercial tender evaluation for real estate, engineering, and corporate procurement. Normalizes disparate bidder quotes, compares unit rates against client Bill of Quantities (BOQ), flags front-loaded bids, and spots mathematical errors in bidder submissions.",
    keyFeatures: [
      "Automated extraction of multi-thousand line Bill of Quantities (BOQ) price schedules",
      "Normalized side-by-side rate matrix across all participating contractors",
      "Arithmetic error detection in contractor submissions (rate × quantity ≠ total)",
      "Outlier detection flagging abnormally low rates (front-loading) or inflated line items",
      "Comprehensive Tender Evaluation Working Paper ready for Tender Committee evaluation"
    ],
    inputTypes: ["Client BOQ Excel", "Contractor Tender Bids (PDF/Excel)", "Technical Specifications"],
    outputFormats: ["Comparative Bid Analysis Matrix", "Commercial Evaluation Report", "Negotiation Memo"],
    typicalTimeSaved: "80% reduction in bid tab preparation time",
    interactiveDemo: {
      inputLabel: "Tender Package #TND-2026-TowerA: Structural Works (3 Bidders)",
      sampleInputSnippet: "BOQ Item 3.12: High-Strength Rebar Grade 500 (Qty: 4,500 MT)",
      extractedFields: [
        { label: "Engineer Estimate", value: "AED 2,850 / MT", confidence: 100, verified: true },
        { label: "Bidder A (Arabtec Eng)", value: "AED 2,900 / MT (+1.7%)", confidence: 99.6, verified: true },
        { label: "Bidder B (Al Habtoor)", value: "AED 2,820 / MT (-1.0%)", confidence: 99.4, verified: true },
        { label: "Bidder C (Global Steel)", value: "AED 2,100 / MT (-26.3%)", confidence: 99.8, verified: false }
      ],
      discrepancyCheck: [
        { rule: "Outlier Rate Detection", status: "flag", detail: "WARNING: Bidder C rate is 26% below engineer estimate; high risk of future claims or substandard specification" },
        { rule: "Bidder Arithmetic Verification", status: "pass", detail: "All extensions and sub-totals cast correctly" },
        { rule: "Scope Inclusions Check", status: "info", detail: "Bidder B includes testing & third-party mill certs; Bidder A excluded" }
      ],
      outputSchedulePreview: "Tender Committee Summary: Bidder B offers most balanced commercial compliance with lowest lifecycle risk score."
    }
  },
  {
    id: "reconciliation",
    slug: "reconciliation",
    name: "Reconciliation Automation",
    badge: "High-Volume Ledger",
    tagline: "High-volume bank and ledger balance reconciliation with exception flagging.",
    category: "Accounting Schedules",
    description: "Resolves millions of ledger transactions against bank statements, gateway settlement files, intercompany balances, and merchant accounts. Employs smart deterministic multi-key matching to clear 95%+ of items automatically while highlighting true exceptions.",
    keyFeatures: [
      "Multi-key deterministic matching (Amount, Value Date, Reference, Normalized Description)",
      "Many-to-one and one-to-many transaction grouping (e.g. daily POS batch to individual sales)",
      "Automated unpresented cheque and outstanding lodgement aging schedules",
      "Intercompany cross-ledger matching and foreign currency translation clearing",
      "Auditor-ready Bank Reconciliation Statements (BRS) with full supporting documentation"
    ],
    inputTypes: ["Bank MT940 / CAMT.053 / CSV", "ERP General Ledger Dump", "Payment Gateway Batches"],
    outputFormats: ["Standard BRS Working Paper", "Outstanding Items Aging", "Journal Adjustment Pack"],
    typicalTimeSaved: "92% faster month-end bank reconciliation",
    interactiveDemo: {
      inputLabel: "Mashreq Bank Corporate Account #40019283 - Month of September 2026",
      sampleInputSnippet: "Statement Balance: AED 14,892,110.40 | GL Balance: AED 14,210,400.12 (Diff: AED 681,710.28)",
      extractedFields: [
        { label: "Bank Closing Balance", value: "AED 14,892,110.40", confidence: 100, verified: true },
        { label: "GL Book Balance", value: "AED 14,210,400.12", confidence: 100, verified: true },
        { label: "Auto-Matched Items", value: "4,821 txns (AED 84.2M)", confidence: 99.9, verified: true },
        { label: "Unpresented Cheques", value: "14 items (AED 810,420.28)", confidence: 100, verified: true },
        { label: "Uncredited Lodgements", value: "3 items (AED 128,710.00)", confidence: 100, verified: true }
      ],
      discrepancyCheck: [
        { rule: "Unexplained Variance Check", status: "pass", detail: "Zero unexplained difference: Statement - Unpresented + Uncredited = GL Balance (AED 0.00 drift)" },
        { rule: "Stale Cheque Flagging", status: "flag", detail: "WARNING: Cheque #9021 (AED 14,200) issued >6 months ago; flag for re-issue or write-back" }
      ],
      outputSchedulePreview: "Bank Reconciliation Statement (WP-BRS-09) prepared and balanced; signed by Financial Controller."
    }
  }
];
