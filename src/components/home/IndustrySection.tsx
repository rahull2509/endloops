"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building, ShieldCheck, BarChart3, Users, Landmark } from "lucide-react";
import { AUDIENCE_SEGMENTS } from "@/data/company";

export const IndustrySection: React.FC = () => {
  const [activeAudienceId, setActiveAudienceId] = useState(AUDIENCE_SEGMENTS[0].id);
  const activeSegment = AUDIENCE_SEGMENTS.find((a) => a.id === activeAudienceId) || AUDIENCE_SEGMENTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "accounting-firms":
        return <Users className="w-5 h-5 text-emerald-600" />;
      case "audit-firms":
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case "finance-teams":
        return <BarChart3 className="w-5 h-5 text-purple-600" />;
      case "property-management":
        return <Building className="w-5 h-5 text-teal-600" />;
      default:
        return <Landmark className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Target Audience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
            Who Endloops Serves
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Tailored automation workflows built for the distinct operational pressures of modern financial institutions and advisory practices.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {AUDIENCE_SEGMENTS.map((seg) => {
            const isSelected = seg.id === activeAudienceId;
            return (
              <button
                key={seg.id}
                onClick={() => setActiveAudienceId(seg.id)}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-sm ring-1 ring-emerald-500/20 text-[#0b192c]"
                    : "bg-white/60 border-slate-200/80 hover:bg-white text-slate-600 hover:text-slate-900"
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? "bg-emerald-50" : "bg-slate-100"}`}>
                  {getIcon(seg.id)}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold truncate">{seg.title}</h3>
                  <span className="text-[10px] text-slate-400 block truncate">Explore workflow</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Audience Detail Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Specialized Industry Solution
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {activeSegment.title}
            </h3>
            <p className="text-sm font-medium text-slate-700">
              {activeSegment.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 text-xs">
                <strong className="text-rose-900 block mb-1">Common Industry Bottleneck:</strong>
                <span className="text-slate-700 leading-relaxed">{activeSegment.painPoint}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs">
                <strong className="text-emerald-900 block mb-1">How Endloops Solves It:</strong>
                <span className="text-slate-700 leading-relaxed">{activeSegment.solution}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-700 block mb-2">Key Platform Features:</span>
              <div className="flex flex-wrap gap-2">
                {activeSegment.features.map((feat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#07111e] rounded-xl p-6 sm:p-8 text-white space-y-4">
            <h4 className="text-base font-bold text-white">
              Ready to automate your {activeSegment.title.toLowerCase()} workflow?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We provide tailored demonstration datasets showing how your team can eliminate manual extraction and schedule preparation while staying 100% compliant.
            </p>

            <div className="pt-2 space-y-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Custom Practice Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-2.5 px-4 rounded-lg border border-slate-700 transition-colors"
              >
                <span>Review Matching Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
