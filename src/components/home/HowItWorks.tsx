"use client";

import React from "react";
import { UploadCloud, FileSearch, Scale, FileSpreadsheet, UserCheck } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Upload & Ingest Documents",
      subtitle: "Multi-format & bulk intake",
      description: "Drop hundreds of multi-page invoices, purchase orders, engineering certificates, or bank statements in PDF, TIFF, Excel, or direct ERP feeds.",
      systemRole: "Validates file integrity, de-duplicates submissions, and queues batch processing.",
      icon: <UploadCloud className="w-6 h-6 text-emerald-600" />
    },
    {
      step: "02",
      title: "Intelligent Extraction",
      subtitle: "Bilingual OCR & parsing",
      description: "Extracts line items, vendor details, tax identification (TRN), currencies, and mathematical subtotals with pixel-level coordinate mapping.",
      systemRole: "Preserves bounding box coordinates for instant click-through citations.",
      icon: <FileSearch className="w-6 h-6 text-teal-600" />
    },
    {
      step: "03",
      title: "Comparison & Validation",
      subtitle: "Deterministic rule engine",
      description: "Cross-checks documents 3-way (PO ↔ GRN ↔ Invoice), tests against general ledgers, verifies statutory caps, and flags discrepancies.",
      systemRole: "Applies rigid financial arithmetic and statutory compliance checks without hallucination.",
      icon: <Scale className="w-6 h-6 text-blue-600" />
    },
    {
      step: "04",
      title: "Draft Working Paper Prep",
      subtitle: "Standardized audit schedules",
      description: "Compiles balanced lead schedules, variance bridges, vouching binders, and footnote cross-casting memorandums in recognized formats.",
      systemRole: "Generates fully cast, cross-referenced working papers with hyperlinked source evidence.",
      icon: <FileSpreadsheet className="w-6 h-6 text-purple-600" />
    },
    {
      step: "05",
      title: "Professional Review & Sign-Off",
      subtitle: "Human accountability loop",
      description: "The qualified accountant or audit partner reviews flagged anomalies, applies professional judgement, overrides or confirms adjustments, and signs off.",
      systemRole: "Seals the working paper with an immutable cryptographic timestamp and audit trail.",
      icon: <UserCheck className="w-6 h-6 text-emerald-700" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Workflow Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
            How Endloops Automates Financial Work
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From raw, messy client paperwork to certified audit schedules—here is how the human-in-the-loop pipeline operates.
          </p>
        </div>

        {/* 5-Step Connected Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="text-xl font-bold font-mono text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {st.step}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide block">
                  {st.subtitle}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {st.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-800 block mb-0.5">Automated Task:</strong>
                {st.systemRole}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b192c] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                The Final Decision Always Rests with People
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Endloops performs the 90% mechanical preparation; qualified accountants and auditors maintain the 10% decision authority.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap self-start sm:self-center">
            Human-in-the-Loop Standard
          </span>
        </div>
      </div>
    </section>
  );
};
