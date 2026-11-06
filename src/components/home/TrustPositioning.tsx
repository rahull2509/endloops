"use client";

import React from "react";
import { UserCheck, ShieldAlert, CheckCircle2, Scale } from "lucide-react";

export const TrustPositioning: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
            Core Brand Positioning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
            Financial decisions demand human accountability.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            In statutory audits and financial reporting, errors carry legal liabilities. That is why Endloops rejects autonomous black-box AI in favour of deterministic automation with mandatory professional review.
          </p>
        </div>

        {/* Side-by-Side Comparison: The Black-Box AI Trap vs The Endloops Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: The Flawed "Autonomous AI" Approach */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-rose-700 uppercase tracking-wide">
                    The Industry Trap
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    The &ldquo;Fully Autonomous AI&rdquo; Fallacy
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Generic AI tools make probabilistic guesses without citing source evidence, hallucinate numbers, and claim to replace human accountants—creating enormous compliance and statutory audit exposure.
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Black-box hallucinations:</strong> Probabilistic text models invent plausible figures when OCR is degraded.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Zero verifiable audit trail:</strong> Inability to link a reported variance back to the exact source invoice page.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                  <span><strong>Displaced responsibility:</strong> Regulators require registered partners to sign audit opinions, not algorithms.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-rose-200/80 text-xs font-medium text-rose-800">
              Outcome: High regulatory audit risk, formula drift, and lost professional trust.
            </div>
          </div>

          {/* Right: The Endloops Human-in-the-Loop Standard */}
          <div className="rounded-2xl border border-emerald-300 bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                    The Endloops Standard
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Software Prepares. Professionals Decide.
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Endloops executes the high-volume mechanical legwork: ingesting documents, extracting fields, cross-matching 3-way records, and preparing draft working papers. Every finding requires professional sign-off.
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>100% Traceable Citations:</strong> Every cell links directly to coordinate bounding boxes in the original PDF.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Deterministic Financial Logic:</strong> Rigid mathematical casting and statutory rules with zero hallucination.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Human Review Sign-Off:</strong> Draft schedules remain unsealed until signed off by the responsible accountant or auditor.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>Full compliance with International Standards on Auditing (ISA 240, 315, 500).</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Trust Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60">
            <span className="text-xs font-mono text-emerald-700 font-bold">PILLAR 01</span>
            <h4 className="text-sm font-semibold text-slate-900 mt-1">Audit-Ready Documentation</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Standard lead schedules, variance bridges, and vouching binders compiled automatically in recognized audit formats.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60">
            <span className="text-xs font-mono text-emerald-700 font-bold">PILLAR 02</span>
            <h4 className="text-sm font-semibold text-slate-900 mt-1">Zero Third-Party Model Training</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Your financial statements and ledgers remain confidential in isolated tenant containers with UAE data sovereignty.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60">
            <span className="text-xs font-mono text-emerald-700 font-bold">PILLAR 03</span>
            <h4 className="text-sm font-semibold text-slate-900 mt-1">Statutory GCC Rules Pre-Baked</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Configured out-of-the-box for UAE Corporate Tax disallowances, 5% VAT rules, and Dubai RERA Escrow Law No. 8.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60">
            <span className="text-xs font-mono text-emerald-700 font-bold">PILLAR 04</span>
            <h4 className="text-sm font-semibold text-slate-900 mt-1">Auditor-Grade Exception Flags</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Anomalies, price drifts, and short shipments flagged with explicit materiality calculations rather than silent corrections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
