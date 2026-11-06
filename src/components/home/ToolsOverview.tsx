"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { STANDALONE_TOOLS, StandaloneTool } from "@/data/tools";

export const ToolsOverview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTool, setSelectedTool] = useState<StandaloneTool>(STANDALONE_TOOLS[0]);

  const categories = ["All", "Extraction & OCR", "Verification & Matching", "Accounting Schedules"];

  const filteredTools =
    activeCategory === "All"
      ? STANDALONE_TOOLS
      : STANDALONE_TOOLS.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-white border-b border-slate-200" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Product Offering Category B
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b192c] tracking-tight">
              Standalone Financial Automation Tools
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Modular, highly specialized tools designed to solve a single acute financial friction point—deployable independently or integrated into existing accounting stacks.
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 group shrink-0"
          >
            <span>Explore Tools Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[#0b192c] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid & Interactive Inspect Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-50/80 border-blue-500 shadow-md ring-1 ring-blue-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                      {tool.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{tool.tagline}</p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {tool.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {tool.keyFeatures.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold">{tool.typicalTimeSaved}</span>
                  <Link
                    href={`/tools#${tool.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tool Interactive Deep Dive Banner */}
        <div className="mt-12 bg-[#091524] rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  LIVE TOOL DEMO
                </span>
                <span className="text-xs text-slate-400">• Inspecting:</span>
                <h4 className="text-base sm:text-lg font-bold text-white">{selectedTool.name}</h4>
              </div>
              <p className="text-xs text-slate-400 mt-1">{selectedTool.tagline}</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/tools#${selectedTool.slug}`}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg border border-slate-700 transition-colors"
              >
                Full Tool Specification
              </Link>
              <Link
                href="/contact"
                className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Request Tool Access
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Input Snippet & Extracted Key Values */}
            <div className="lg:col-span-6 bg-slate-800/40 p-4 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase block">
                Sample Ingestion: {selectedTool.interactiveDemo.inputLabel}
              </span>
              <p className="text-xs font-mono text-slate-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed">
                {selectedTool.interactiveDemo.sampleInputSnippet}
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Extracted Structured Fields ({selectedTool.interactiveDemo.extractedFields.length})
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTool.interactiveDemo.extractedFields.map((field, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-2 rounded border border-slate-800 text-xs">
                      <span className="text-[10px] text-slate-400 block">{field.label}</span>
                      <span className="font-mono text-white text-xs block truncate mt-0.5">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Automated Rule Checks & Schedule Output */}
            <div className="lg:col-span-6 bg-slate-800/40 p-4 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase block">
                Automated Verification Rules
              </span>

              <div className="space-y-2">
                {selectedTool.interactiveDemo.discrepancyCheck.map((check, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border text-xs ${
                      check.status === "flag"
                        ? "bg-rose-950/30 border-rose-800/60 text-rose-300"
                        : check.status === "info"
                        ? "bg-purple-950/30 border-purple-800/60 text-purple-300"
                        : "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                    }`}
                  >
                    <div className="font-semibold">{check.rule}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{check.detail}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-300 block mb-1">
                  Draft Working Output
                </span>
                <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 leading-relaxed">
                  {selectedTool.interactiveDemo.outputSchedulePreview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
