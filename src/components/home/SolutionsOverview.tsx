"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, Building, ShieldCheck, BarChart3 } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export const SolutionsOverview: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState(SOLUTIONS[0].id);
  const activeSolution = SOLUTIONS.find((s) => s.id === selectedSolutionId) || SOLUTIONS[0];

  const getIcon = (category: string) => {
    switch (category) {
      case "Audit & Assurance":
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case "Corporate Finance":
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case "Real Estate & Property":
        return <Building className="w-5 h-5 text-purple-600" />;
      default:
        return <Layers className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Product Offering Category A
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
              End-to-End Financial Solutions
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Complete, end-to-end software platforms that run entire multi-week financial audit cycles and budgeting processes from document ingestion to final review sign-off.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 group shrink-0"
          >
            <span>Explore All 5 Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Solution Selector Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTIONS.map((sol) => {
              const isSelected = sol.id === selectedSolutionId;
              return (
                <div
                  key={sol.id}
                  onClick={() => setSelectedSolutionId(sol.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 shrink-0 mt-0.5">
                        {getIcon(sol.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900">{sol.shortTitle}</h3>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {sol.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                          {sol.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 mt-1 transition-transform ${
                        isSelected ? "text-emerald-600 translate-x-1" : "text-slate-400"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Solution Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  {activeSolution.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {activeSolution.title}
                </h3>
              </div>
              <Link
                href={`/solutions#${activeSolution.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0b192c] hover:bg-[#132844] text-white px-4 py-2 rounded-lg transition-colors shrink-0"
              >
                <span>Full Solution Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>

            {/* Target Audience & Problem Solved */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Target Audience
                </h4>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {activeSolution.targetAudience.map((aud, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  The Problem It Solves
                </h4>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                  {activeSolution.problemSolved}
                </p>
              </div>

              {/* 4-Step Workflow Preview */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  End-to-End Workflow Stages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSolution.workflowSteps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-slate-100 bg-slate-50/80">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{step.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal mb-2">
                        {step.description}
                      </p>
                      <div className="pt-1.5 border-t border-slate-200/70 text-[10px] space-y-0.5">
                        <div className="text-emerald-700">
                          <strong>Software:</strong> {step.systemAction}
                        </div>
                        <div className="text-slate-600">
                          <strong>Human:</strong> {step.humanDecision}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
                {activeSolution.impactMetrics.map((m, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="text-xl sm:text-2xl font-bold text-[#0b192c] block">
                      {m.metric}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
