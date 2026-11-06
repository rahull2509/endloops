export interface FAQItem {
  id: string;
  category: "General" | "Security & Data" | "Product & Workflow" | "Implementation";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Does Endloops replace accountants, auditors, or junior finance staff?",
    answer: "No, absolutely not. Our foundational principle is: 'Software prepares the work. Financial professionals review and decide.' Endloops acts as an intelligent digital assistant that automates the clerical, repetitive mechanics—such as document transcription, 3-way matching, mathematical footing, and draft schedule compilation. All substantive decisions, professional judgement, and statutory sign-offs remain strictly with human professionals."
  },
  {
    id: "faq-2",
    category: "General",
    question: "What is the relationship between Endloops and Alkazim?",
    answer: "Endloops was conceived and incubated inside Alkazim, a prominent accounting and audit practice in Dubai. Having operated in the trenches of GCC audits, tax compliance, and financial reporting, Alkazim's internal technology team engineered software to solve their own operational bottlenecks. That proprietary technology has now been spun out as Endloops to empower the wider accounting, auditing, and property finance industry."
  },
  {
    id: "faq-3",
    category: "Product & Workflow",
    question: "Can Endloops process bilingual Arabic and English financial documents?",
    answer: "Yes. Given our origins in the United Arab Emirates, Endloops is built natively for GCC commercial realities. Our document intelligence engine parses bilingual Arabic and English tax invoices, purchase orders, engineering progress certificates, and bank statements—including automatic validation of 15-digit UAE Federal Tax Authority (FTA) Tax Registration Numbers (TRN)."
  },
  {
    id: "faq-4",
    category: "Product & Workflow",
    question: "How does Endloops handle discrepancies or ambiguous document figures?",
    answer: "Whenever a document exhibits low confidence, a mismatch (e.g. invoiced quantity exceeding Goods Received Note count), or a rule violation (such as exceeding a statutory 5% marketing fee cap on an escrow account), Endloops flags the line item with an amber or red alert. It highlights the exact coordinate on the source document and drafts an explanatory variance note for the auditor to inspect and override or confirm."
  },
  {
    id: "faq-5",
    category: "Security & Data",
    question: "Where is our confidential client financial data stored?",
    answer: "We treat financial data confidentiality with the highest enterprise rigor. Endloops supports regional data residency within UAE / GCC hyperscale data centers (Microsoft Azure UAE / AWS Middle East). We enforce AES-256 encryption at rest and TLS 1.3 in transit. Crucially, your financial documents and data are never used to train generalized third-party public AI models."
  },
  {
    id: "faq-6",
    category: "Implementation",
    question: "What ERP and accounting systems can Endloops integrate with?",
    answer: "Endloops works seamlessly with leading regional and global accounting systems, including TallyPrime, Zoho Books, QuickBooks, Xero, Microsoft Dynamics 365, SAP, Oracle NetSuite, and Yardi. It can ingest data via standard Excel/CSV exports or direct REST APIs, and export completed working papers back into standard Excel or audit management suites."
  },
  {
    id: "faq-7",
    category: "Implementation",
    question: "How do we run a pilot or Proof of Concept (PoC)?",
    answer: "We typically conduct a 2-week structured pilot where we ingest a batch of your historical documents (e.g., 200–500 vendor invoices, a past escrow audit file, or annual budget sheets). We run them through Endloops and compare the generated working papers directly against your team's historical manual work papers to demonstrate precision, time saved, and audit readiness."
  }
];

