"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#07111e] via-[#0b192c] to-[#081a2e] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Ready for the Future of Financial Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Automate the mechanical work.
            <span className="block mt-1 text-emerald-400">Keep final review firmly in your hands.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join leading accounting firms, statutory auditors, and property finance teams across Dubai, Riyadh, and the GCC who rely on Endloops for precision automation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-base"
            >
              <span>Schedule a 30-Minute Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-base"
            >
              <span>View Solutions & Use Cases</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>No credit card required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pilot with your sample documents</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC-2 & UAE data residency compliant</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

