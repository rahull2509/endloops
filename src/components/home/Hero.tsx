"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50">
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60"></div>
      
      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/30 to-blue-100/20 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-medium mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-emerald-800">Born Inside Alkazim Dubai</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Built for Accountants, Auditors & Property Finance</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b192c] leading-[1.12]">
            Software prepares the work.
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Financial professionals review and decide.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Eliminate repetitive document extraction, 3-way vouching, and working paper preparation. Endloops takes care of mechanical financial verification—keeping final judgement and statutory sign-off strictly in human hands.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0b192c] hover:bg-[#132844] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>

            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-base"
            >
              <span>Explore End-to-End Solutions</span>
            </Link>
          </div>

          {/* Value Micro-Points */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-900">100% Traceable Citations</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Every figure links to source PDF coordinates</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-900">Deterministic Rules</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero probabilistic hallucination or guesswork</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-900">GCC Regulatory Ready</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">UAE Corporate Tax, FTA VAT & RERA Escrow</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-900">Human Sign-off Standard</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Draft schedules require professional seal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
