export interface DemoDocumentPacket {
  id: string;
  name: string;
  category: string;
  entity: string;
  currency: string;
  date: string;
  status: "Review Required" | "Auto-Verified" | "Escrow Flagged";
  summary: string;
  documents: {
    name: string;
    type: string;
    refNumber: string;
    date: string;
    totalAmount: string;
    fields: { key: string; value: string; confidence: number; isFlagged?: boolean }[];
  }[];
  ruleChecks: {
    id: string;
    ruleName: string;
    status: "pass" | "fail" | "warning";
    description: string;
    impact: string;
  }[];
  workingPaper: {
    code: string;
    title: string;
    preparedBy: string;
    rows: {
      ref: string;
      description: string;
      poAmount: string;
      grnAmount: string;
      invoicedAmount: string;
      variance: string;
      auditFinding: string;
    }[];
  };
}

export const DEMO_PACKETS: DemoDocumentPacket[] = [
  {
    id: "packet-1",
    name: "Commercial HVAC Procurement (3-Way Match)",
    category: "Vouching & AP Audit",
    entity: "Al-Habtoor MEP Engineering LLC",
    currency: "AED",
    date: "14-Feb-2026",
    status: "Review Required",
    summary: "Purchase Order #PO-4091 vs Delivery Note #GRN-104 vs Tax Invoice #INV-8821. Quantity mismatch detected on Line 2.",
    documents: [
      {
        name: "Tax Invoice #INV-8821",
        type: "Tax Invoice",
        refNumber: "INV-8821",
        date: "14-Feb-2026",
        totalAmount: "AED 232,575.00",
        fields: [
          { key: "Supplier TRN", value: "100349281900003", confidence: 99.8 },
          { key: "Customer TRN", value: "100298192800002", confidence: 100 },
          { key: "Payment Terms", value: "Net 30 Days", confidence: 98.5 },
          { key: "Line 1: Chiller Compressors (45 units)", value: "AED 198,000.00", confidence: 99.4, isFlagged: true },
          { key: "Line 2: R-410A Refrigerant Cylinders (15 units)", value: "AED 23,500.00", confidence: 99.2 },
          { key: "VAT (5%)", value: "AED 11,075.00", confidence: 99.9 }
        ]
      },
      {
        name: "Purchase Order #PO-4091",
        type: "Approved PO",
        refNumber: "PO-4091",
        date: "02-Feb-2026",
        totalAmount: "AED 232,575.00",
        fields: [
          { key: "Approved Buyer", value: "Head of Procurement", confidence: 100 },
          { key: "Contract Quote Ref", value: "QT-2026-09", confidence: 99.1 },
          { key: "Authorized Line 1", value: "45 units @ AED 4,400.00", confidence: 99.6 },
          { key: "Authorized Line 2", value: "15 units @ AED 1,566.67", confidence: 99.5 }
        ]
      },
      {
        name: "Goods Received Note #GRN-104",
        type: "Warehouse Inspection",
        refNumber: "GRN-104",
        date: "11-Feb-2026",
        totalAmount: "AED 217,725.00 (Physical Accepted)",
        fields: [
          { key: "Receiving Inspector", value: "Hamad K. (Gate 4)", confidence: 99.9 },
          { key: "Physical Count Line 1", value: "42 units accepted (3 units damaged in transit)", confidence: 99.7, isFlagged: true },
          { key: "Physical Count Line 2", value: "15 units accepted (Intact)", confidence: 99.9 }
        ]
      }
    ],
    ruleChecks: [
      {
        id: "rc-1",
        ruleName: "3-Way Quantity Verification (PO vs GRN vs Invoice)",
        status: "fail",
        description: "Invoice billed for 45 units of Chiller Compressors; warehouse GRN confirms only 42 units accepted. 3 units rejected at gate due to carrier transit damage.",
        impact: "Over-billing of AED 14,850.00 (inclusive of VAT)."
      },
      {
        id: "rc-2",
        ruleName: "Supplier TRN Checksum (Federal Tax Authority)",
        status: "pass",
        description: "TRN 100349281900003 verified active on UAE FTA register.",
        impact: "Full VAT input credit eligibility confirmed."
      },
      {
        id: "rc-3",
        ruleName: "Delegation of Authority (DoA) Limit",
        status: "pass",
        description: "PO-4091 signed within AED 500,000 threshold for procurement tier.",
        impact: "Authorized commitment valid."
      }
    ],
    workingPaper: {
      code: "WP-AP-3W-088",
      title: "Substantive 3-Way Match & Vouching Schedule",
      preparedBy: "Endloops Financial Intelligence Engine",
      rows: [
        {
          ref: "LN-01",
          description: "Chiller Compressors 25HP",
          poAmount: "AED 198,000.00 (45 pcs)",
          grnAmount: "AED 184,800.00 (42 pcs)",
          invoicedAmount: "AED 198,000.00 (45 pcs)",
          variance: "AED (13,200.00)",
          auditFinding: "Short shipment: 3 units damaged. Recommend Debit Note / Credit Adjustment."
        },
        {
          ref: "LN-02",
          description: "Refrigerant R-410A Cylinders",
          poAmount: "AED 23,500.00 (15 pcs)",
          grnAmount: "AED 23,500.00 (15 pcs)",
          invoicedAmount: "AED 23,500.00 (15 pcs)",
          variance: "AED 0.00",
          auditFinding: "Full tie-out confirmed across PO, GRN, and Invoice."
        },
        {
          ref: "TAX-01",
          description: "5% UAE VAT",
          poAmount: "AED 11,075.00",
          grnAmount: "AED 10,415.00",
          invoicedAmount: "AED 11,075.00",
          variance: "AED (660.00)",
          auditFinding: "VAT adjustment required commensurate with short-delivery debit note."
        }
      ]
    }
  },
  {
    id: "packet-2",
    name: "Dubai RERA Escrow Account Payment Audit",
    category: "Escrow Statutory Compliance",
    entity: "Marina Crest Towers - Project Trust #9910",
    currency: "AED",
    date: "18-Jan-2026",
    status: "Escrow Flagged",
    summary: "Developer withdrawal request #W-204 vs Escrow Bank Statement & Engineer Certificate #EC-331. Marketing allocation cap review.",
    documents: [
      {
        name: "Withdrawal Application #W-204",
        type: "Escrow Requisition",
        refNumber: "W-204",
        date: "16-Jan-2026",
        totalAmount: "AED 1,450,000.00",
        fields: [
          { key: "Escrow Account", value: "Mashreq Bank IBAN AE9203...", confidence: 100 },
          { key: "Contractor Interim Claim #14", value: "AED 1,220,000.00", confidence: 99.8 },
          { key: "Project Marketing Claim", value: "AED 230,000.00", confidence: 99.4, isFlagged: true },
          { key: "RERA Project ID", value: "PRJ-MARINA-2024-09", confidence: 100 }
        ]
      },
      {
        name: "Consulting Engineer Cert #EC-331",
        type: "Independent Engineer",
        refNumber: "EC-331",
        date: "12-Jan-2026",
        totalAmount: "AED 1,220,000.00 Certified",
        fields: [
          { key: "Supervising Firm", value: "Meinhardt Engineering Consultants", confidence: 99.9 },
          { key: "Milestone Verified", value: "Floor 22 Concrete Pour Complete", confidence: 99.7 },
          { key: "Retention Deducted (10%)", value: "AED 135,555.55", confidence: 99.9 }
        ]
      }
    ],
    ruleChecks: [
      {
        id: "rc-esc-1",
        ruleName: "Dubai RERA Law No. 8 5% Marketing Cap Rule",
        status: "fail",
        description: "Cumulative marketing withdrawals cannot exceed 5% of total deposited investor funds to date. Requested AED 230,000 breaches remaining ceiling by AED 38,200.",
        impact: "Statutory escrow violation if disbursed without cap adjustment."
      },
      {
        id: "rc-esc-2",
        ruleName: "Certified Engineer Milestone Concurrence",
        status: "pass",
        description: "Contractor payment matches exact certified net figure on EC-331 after 10% retention.",
        impact: "Approved for construction release."
      }
    ],
    workingPaper: {
      code: "WP-ESC-DLD-04",
      title: "RERA Escrow Account Statutory Audit Schedule",
      preparedBy: "Endloops Escrow Compliance Engine",
      rows: [
        {
          ref: "SEC-01",
          description: "Construction Milestone 14 (Substructure)",
          poAmount: "AED 1,220,000.00",
          grnAmount: "AED 1,220,000.00 (Cert)",
          invoicedAmount: "AED 1,220,000.00",
          variance: "AED 0.00",
          auditFinding: "Compliant with RERA Escrow Release Guidelines."
        },
        {
          ref: "SEC-02",
          description: "Developer Marketing Allocation",
          poAmount: "AED 191,800.00 (Cap Limit)",
          grnAmount: "N/A",
          invoicedAmount: "AED 230,000.00 (Claimed)",
          variance: "AED (38,200.00)",
          auditFinding: "Breaches statutory 5% cap. Recommend reducing disbursement to AED 191,800.00."
        }
      ]
    }
  },
  {
    id: "packet-3",
    name: "Statutory Financial Statements Footnote Check",
    category: "Financial Statement Audit",
    entity: "Gulf Logistics PJSC",
    currency: "AED",
    date: "04-Feb-2026",
    status: "Auto-Verified",
    summary: "Balance Sheet vs Note 12 (Lease Liabilities) & Note 18 (Commitments). Mathematical casting and IFRS 16 cross-verification.",
    documents: [
      {
        name: "Statement of Financial Position",
        type: "Draft FS",
        refNumber: "FS-Q4-P14",
        date: "31-Dec-2025",
        totalAmount: "AED 842,100,000.00",
        fields: [
          { key: "Non-Current Lease Liabilities", value: "AED 42,850,000.00", confidence: 100 },
          { key: "Current Lease Liabilities", value: "AED 8,150,000.00", confidence: 100 },
          { key: "Total Lease Obligations", value: "AED 51,000,000.00", confidence: 100 }
        ]
      },
      {
        name: "Note 12: IFRS 16 Leases Disclosure",
        type: "Footnote Schedule",
        refNumber: "NOTE-12",
        date: "31-Dec-2025",
        totalAmount: "AED 51,000,000.00 (Maturity Analysis)",
        fields: [
          { key: "Year 1 (Within 12 months)", value: "AED 8,150,000.00", confidence: 99.8 },
          { key: "Years 2 to 5", value: "AED 28,400,000.00", confidence: 99.7 },
          { key: "Beyond 5 Years", value: "AED 14,450,000.00", confidence: 99.9 }
        ]
      }
    ],
    ruleChecks: [
      {
        id: "rc-fs-1",
        ruleName: "Horizontal & Vertical Footnote Casting",
        status: "pass",
        description: "Maturity analysis sums precisely to AED 51,000,000.00 (AED 8.15M + AED 28.40M + AED 14.45M).",
        impact: "Zero mathematical discrepancy."
      },
      {
        id: "rc-fs-2",
        ruleName: "Cross-Statement Face Reconciliation",
        status: "pass",
        description: "Current (AED 8.15M) and Non-current (AED 42.85M) obligations exactly equal Note 12 sum.",
        impact: "Clean audit tie-out achieved."
      }
    ],
    workingPaper: {
      code: "WP-FS-NOTE-12",
      title: "IFRS 16 Lease Liability Footnote Cross-Casting Schedule",
      preparedBy: "Endloops Reporting Review Engine",
      rows: [
        {
          ref: "ROW-01",
          description: "Current Portion of Lease Liabilities",
          poAmount: "N/A",
          grnAmount: "N/A",
          invoicedAmount: "AED 8,150,000.00",
          variance: "AED 0.00",
          auditFinding: "Ties directly to Note 12 Maturity Year 1. Verified."
        },
        {
          ref: "ROW-02",
          description: "Non-Current Portion of Lease Liabilities",
          poAmount: "N/A",
          grnAmount: "N/A",
          invoicedAmount: "AED 42,850,000.00",
          variance: "AED 0.00",
          auditFinding: "Ties directly to Note 12 Maturity (Years 2-5 + Beyond). Verified."
        }
      ]
    }
  }
];
