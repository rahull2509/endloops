"use client";

import React from "react";
import { FileCode, Database, GitCompare, CheckCircle, Layers, Zap } from "lucide-react";

export const TechCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Document Reading & Intelligence",
      tagline: "Bilingual OCR & layout analysis",
      description: "Extract figures and multi-tiered metadata from invoices, purchase orders, engineering progress certificates, bank statements, and commercial contracts—with native Arabic and English support.",
      specs: ["Table recognition across page breaks", "Handwritten annotation segregation", "Bilingual Arabic-English character mapping"],
      icon: <FileCode className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "High-Precision Data Extraction",
      tagline: "Tax numbers, currencies & line items",
      description: "Parses complex commercial parameters: 15-digit GCC Tax Registration Numbers (TRN), line-item descriptions, unit rates, discount tiers, and multi-currency exchange rates.",
      specs: ["Algorithmic TRN checksum validation", "Subtotal and line math cross-verification", "Pixel coordinate coordinate mapping for audit links"],
      icon: <Database className="w-5 h-5 text-teal-600" />
    },
    {
      title: "3-Way Document Comparison & Matching",
      tagline: "Multi-key deterministic reconciliation",
      description: "Automatically compares and cross-references documents against general ledgers, vendor quotes against one another, and performs strict 3-way matching (PO ↔ GRN ↔ Invoice).",
      specs: ["Configurable numerical tolerance thresholds", "Fuzzy description and SKU reconciliation", "Many-to-one and one-to-many transaction clustering"],
      icon: <GitCompare className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Rule-Based Financial Validation",
      tagline: "Statutory compliance & anomaly detection",
      description: "Checks documents against rigid compliance limits: flags missing items, mismatched totals, duplicates, and transactions violating corporate policies or statutory escrow caps.",
      specs: ["Dubai RERA Law No. 8 5% marketing cap checks", "UAE Corporate Tax 50% entertainment disallowance", "Duplicate invoice and payment detection"],
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />
    },
    {
      title: "Draft Working Paper Generation",
      tagline: "Standardized audit schedules",
      description: "Produces audit lead schedules, variance bridges, bank reconciliation statements, and footnote cross-casting memorandums formatted for direct senior review.",
      specs: ["Export to multi-tab Excel with live formulas", "Standard ISA 500 compliant cross-referencing", "Audit memo synthesis ready for sign-off"],
      icon: <Layers className="w-5 h-5 text-emerald-700" />
    },
    {
      title: "High-Throughput Bulk Processing",
      tagline: "Enterprise batch ingestion",
      description: "Processes hundreds of multi-page documents concurrently. Ingest thousands of transactions in minutes during high-pressure month-end and annual audit closes.",
      specs: ["Concurrent parallel document pipeline", "Automated batch error quarantine", "Sub-second extraction per complex invoice"],
      icon: <Zap className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Core Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
            Technology Capabilities Engineered for Precision
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Built from the ground up for the demands of high-stakes financial verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    {cap.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide block">
                      {cap.tagline}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/70">
                  {cap.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
