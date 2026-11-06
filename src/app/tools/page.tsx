"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { STANDALONE_TOOLS } from "@/data/tools";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Extraction & OCR", "Verification & Matching", "Accounting Schedules"];

  const filteredTools =
    selectedCategory === "All"
      ? STANDALONE_TOOLS
      : STANDALONE_TOOLS.filter((t) => t.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-[#07111e] text-white py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/80 inline-block mb-4">
              Enterprise Product Category B
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Standalone Financial Automation Tools
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Focused, modular utilities designed to solve a single acute financial friction point. Deploy them individually into your existing audit toolkit, or connect via API directly to your ERP and general ledger systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>6 Purpose-Built Standalone Tools</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Black-Box AI Hallucinations</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ERP & Excel Interoperable</span>
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
              Filter by Capability:
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
            className="text-xs font-medium text-blue-700 hover:text-blue-800 whitespace-nowrap hidden md:inline-flex items-center gap-1"
          >
            <span>Need API integration? Talk to our architects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Standalone Tools Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              id={tool.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm scroll-mt-32"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {tool.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">TOOL #{index + 1} • {tool.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {tool.name}
                  </h2>
                  <p className="text-base text-slate-600 font-medium">
                    {tool.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    {tool.typicalTimeSaved}
                  </span>
                  <Link
                    href={`/contact?tool=${encodeURIComponent(tool.name)}`}
                    className="inline-flex items-center gap-2 bg-[#0b192c] hover:bg-[#132844] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
                  >
                    <span>Request Tool Access</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </Link>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-slate-100">
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Core Functionality
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Key Capabilities & Controls
                    </h4>
                    <div className="space-y-2">
                      {tool.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Supported Input Ingestion Formats
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.inputTypes.map((inp, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-mono"
                          >
                            {inp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80">
                      <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Export & Output Destinations
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {tool.outputFormats.map((out, i) => (
                          <span
                            key={i}
                            className="text-xs bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded border border-emerald-200 font-mono font-medium"
                          >
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-600">
                      <strong>Audit Trail Guarantee:</strong> Every extracted line item links to its source coordinate bounding box for click-through validation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Interactive Sandbox Preview */}
              <div className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      INTERACTIVE PREVIEW
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Live Input & Verification Engine
                    </h3>
                  </div>
                </div>

                <div className="bg-[#091320] text-slate-100 rounded-xl p-5 border border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Input snippet */}
                    <div className="lg:col-span-6 space-y-3">
                      <span className="text-xs font-mono text-slate-400 block">
                        SOURCE INPUT: {tool.interactiveDemo.inputLabel}
                      </span>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                        {tool.interactiveDemo.sampleInputSnippet}
                      </div>

                      <span className="text-xs font-semibold text-slate-300 block pt-1">
                        Extracted Key-Values:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {tool.interactiveDemo.extractedFields.map((f, fIdx) => (
                          <div key={fIdx} className="p-2 bg-slate-900/80 rounded border border-slate-800 text-xs">
                            <span className="text-[10px] text-slate-400 block">{f.label}</span>
                            <span className="text-xs font-mono text-white block truncate font-medium">
                              {f.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rule checks & output preview */}
                    <div className="lg:col-span-6 space-y-3">
                      <span className="text-xs font-mono text-slate-400 block">
                        RULE VALIDATION ENGINE:
                      </span>
                      <div className="space-y-2">
                        {tool.interactiveDemo.discrepancyCheck.map((chk, cIdx) => (
                          <div
                            key={cIdx}
                            className={`p-2.5 rounded-lg border text-xs ${
                              chk.status === "flag"
                                ? "bg-rose-950/30 border-rose-800/60 text-rose-300"
                                : chk.status === "info"
                                ? "bg-purple-950/30 border-purple-800/60 text-purple-300"
                                : "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                            }`}
                          >
                            <div className="font-semibold">{chk.rule}</div>
                            <div className="text-[11px] text-slate-300 mt-0.5">{chk.detail}</div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <span className="text-xs font-semibold text-slate-300 block mb-1">
                          Generated Draft Output:
                        </span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 leading-relaxed">
                          {tool.interactiveDemo.outputSchedulePreview}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0b192c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Want to test one of these tools with your actual documents?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto">
            We will run a confidential sample batch of your invoices, POs, or bank statements through our extraction engine and present the structured working papers.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors"
            >
              <span>Schedule File Test Run</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
