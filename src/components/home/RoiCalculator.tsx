"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [docVolume, setDocVolume] = useState<number>(1500);
  const [teamSize, setTeamSize] = useState<number>(6);

  // Financial model formulas (conservative industry estimates)
  // Average manual review & entry time per financial document: 14 minutes (0.23 hours)
  // Endloops automated extraction + review: 2 minutes (0.033 hours)
  // Time saved per document: 12 minutes (0.2 hours)
  const hoursSavedPerMonth = Math.round(docVolume * 0.2);
  const fullTimeEquivalent = (hoursSavedPerMonth / 160).toFixed(1);
  const annualSavingsAED = (hoursSavedPerMonth * 12 * 95).toLocaleString(); // AED 95/hr average accountant cost

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Efficiency Estimation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
            Estimate Your Practice&apos;s Time Saved
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            See how much manual document processing, vouching, and schedule drafting your team can recover each month.
          </p>
        </div>

        <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Monthly Financial Documents
                  </label>
                  <span className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {docVolume.toLocaleString()} docs/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={docVolume}
                  onChange={(e) => setDocVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>200 docs</span>
                  <span>5,000 docs</span>
                  <span>10,000+ docs</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-800">
                    Finance / Audit Team Size
                  </label>
                  <span className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {teamSize} professionals
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 person</span>
                  <span>25 people</span>
                  <span>50+ team</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Estimates based on conservative GCC benchmarks: 12 minutes saved per 3-way matched document voucher.
                </span>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="bg-[#0b192c] text-white p-6 sm:p-8 rounded-xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Estimated Monthly Recovery
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {hoursSavedPerMonth.toLocaleString()}
                  </span>
                  <span className="text-slate-300 text-sm font-medium">hours / month</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Equivalent to {fullTimeEquivalent} full-time audit or finance professionals freed from clerical tasks.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">Est. Annual Value</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">
                    AED {annualSavingsAED}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Audit Cycle Speedup</span>
                  <span className="text-lg font-bold text-white font-mono">
                    3.8× Faster
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <span>Book a Guided PoC With Your Files</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
