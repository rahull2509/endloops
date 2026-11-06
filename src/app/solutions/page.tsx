"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  ChevronDown
} from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedWorkingPaper, setExpandedWorkingPaper] = useState<string | null>(null);

  const categories = ["All", "Audit & Assurance", "Corporate Finance", "Real Estate & Property"];

  const filteredSolutions =
    selectedCategory === "All"
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-[#07111e] text-white py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block mb-4">
              Enterprise Product Category A
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              End-to-End Financial Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Complete, end-to-end software platforms designed to run entire multi-week financial processes from start to finish. Software prepares every lead schedule, trial balance cross-cast, and vouching pack—keeping statutory sign-off with registered professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>5 Comprehensive Platforms</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>GCC Statutory Compliance Pre-Configured</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Black-Box Hallucinations</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline mr-2">
              Filter by Practice Area:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0b192c] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800 whitespace-nowrap hidden md:inline-flex items-center gap-1"
          >
            <span>Custom Solution Architecture? Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Solutions Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredSolutions.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm scroll-mt-32"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {sol.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">SOLUTION #{index + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {sol.title}
                  </h2>
                  <p className="text-base text-slate-600 font-medium">
                    {sol.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/contact?solution=${encodeURIComponent(sol.title)}`}
                    className="inline-flex items-center gap-2 bg-[#0b192c] hover:bg-[#132844] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                  >
                    <span>Request Solution Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Target Audience & Problem Solved */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-slate-100">
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Target Audience
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.targetAudience.map((aud, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      The Problem It Solves
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {sol.problemSolved}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Statutory Regulatory Alignment
                    </h3>
                    <div className="space-y-1">
                      {sol.regulatoryCompliance.map((reg, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{reg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Full Platform Overview
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Key System Capabilities
                    </h4>
                    <div className="space-y-2">
                      {sol.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* End-to-End Workflow */}
              <div className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Process Workflow (Software Prepares ↔ Professional Reviews)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Clear operational delineation between automated mechanical prep and professional sign-off.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sol.workflowSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                            {sIdx + 1}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 text-[10px] space-y-1">
                        <div className="text-emerald-800">
                          <strong>Software Task:</strong> {step.systemAction}
                        </div>
                        <div className="text-slate-700">
                          <strong>Human Decision:</strong> {step.humanDecision}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Draft Working Paper Viewer (Collapsible / Interactive) */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>Sample Output: {sol.sampleWorkingPaper.sheetName}</span>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedWorkingPaper(
                        expandedWorkingPaper === sol.id ? null : sol.id
                      )
                    }
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                  >
                    <span>
                      {expandedWorkingPaper === sol.id
                        ? "Hide Working Paper Preview"
                        : "Preview Generated Working Paper"}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        expandedWorkingPaper === sol.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {expandedWorkingPaper === sol.id && (
                  <div className="mt-4 p-4 bg-slate-900 rounded-xl border border-slate-800 text-slate-200 text-xs overflow-x-auto">
                    <table className="w-full text-left font-mono text-[11px]">
                      <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                          {sol.sampleWorkingPaper.columns.map((col, cIdx) => (
                            <th key={cIdx} className="pb-2 px-2 font-medium">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          {sol.sampleWorkingPaper.sampleRow.map((val, rIdx) => (
                            <td key={rIdx} className="py-2.5 px-2 text-slate-200">
                              {val}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0b192c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Need a tailored solution for your firm&apos;s audit or accounting workflow?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto">
            Our engineering team in Dubai configures custom working paper templates, chart of accounts mappings, and regulatory rule sets to match your exact practice guidelines.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
