"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  RefreshCw,
  Download,
  Eye,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { DEMO_PACKETS, DemoDocumentPacket } from "@/data/demoData";

type Stage = "extract" | "validate" | "paper" | "review";

export const InteractiveDocumentDemo: React.FC = () => {
  const [activePacketIndex, setActivePacketIndex] = useState(0);
  const [activeStage, setActiveStage] = useState<Stage>("validate");
  const [selectedDocIndex, setSelectedDocIndex] = useState(0);
  const [highlightedField, setHighlightedField] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [signOffStatus, setSignOffStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [auditorNote, setAuditorNote] = useState(
    "Verified 3-way discrepancy on Line 1. Recommend issuing Debit Note of AED 14,850.00 to Al-Habtoor MEP for 3 damaged units prior to AP settlement."
  );
  const [notification, setNotification] = useState<string | null>(null);

  const packet: DemoDocumentPacket = DEMO_PACKETS[activePacketIndex];
  const activeDoc = packet.documents[selectedDocIndex] || packet.documents[0];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      showToast("Document batch re-scanned and cross-cast: 100% data fidelity verified.");
    }, 1100);
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSignOff = (status: "approved" | "rejected") => {
    setSignOffStatus(status);
    if (status === "approved") {
      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if canvas not supported
      }
      showToast("Working Paper officially signed off & locked into immutable audit trail.");
    } else {
      showToast("Working Paper flagged as rejected. Notification routed to procurement.");
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Toast Notification */}
      {notification && (
        <div className="bg-emerald-500 text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center animate-fade-in flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Top Application Bar */}
      <div className="bg-[#0b1523] px-4 sm:px-6 py-4 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-400 font-medium">ENDLOOPS ENGINE V2.4</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-700 hidden sm:block"></div>
          <div>
            <span className="text-xs text-slate-400 block sm:inline">Active Audit File:</span>{" "}
            <span className="text-xs sm:text-sm font-semibold text-white">{packet.entity}</span>
          </div>
        </div>

        {/* Demo Packet Switcher */}
        <div className="flex items-center gap-1 bg-slate-800/60 p-1 rounded-lg border border-slate-700/60 overflow-x-auto">
          {DEMO_PACKETS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setActivePacketIndex(idx);
                setSelectedDocIndex(0);
                setSignOffStatus("pending");
                setHighlightedField(null);
              }}
              className={`text-xs px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-all ${
                activePacketIndex === idx
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Demo {idx + 1}: {p.name.split(" ")[0]} {p.name.split(" ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Workflow Stage Navigator Tabs */}
      <div className="bg-[#09111c] px-4 sm:px-6 py-2.5 border-b border-slate-800/80 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveStage("extract")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStage === "extract"
                ? "bg-slate-800 text-emerald-400 border border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center text-[10px] font-bold">1</span>
            <span>1. Document Extraction</span>
          </button>

          <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />

          <button
            onClick={() => setActiveStage("validate")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStage === "validate"
                ? "bg-slate-800 text-emerald-400 border border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center text-[10px] font-bold">2</span>
            <span>2. 3-Way Match & Rules</span>
            {packet.ruleChecks.some((r) => r.status === "fail") && (
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            )}
          </button>

          <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />

          <button
            onClick={() => setActiveStage("paper")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStage === "paper"
                ? "bg-slate-800 text-emerald-400 border border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center text-[10px] font-bold">3</span>
            <span>3. Draft Working Paper</span>
          </button>

          <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />

          <button
            onClick={() => setActiveStage("review")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeStage === "review"
                ? "bg-slate-800 text-emerald-400 border border-slate-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center text-[10px] font-bold">4</span>
            <span>4. Human Sign-Off</span>
            {signOffStatus === "approved" && (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            )}
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateScan}
            disabled={isScanning}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1.5 rounded-md border border-slate-700 transition-colors"
            title="Re-run OCR and extraction engine"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin text-emerald-400" : ""}`} />
            <span className="hidden sm:inline">Re-Run Extraction</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-4 sm:p-6 min-h-[460px]">
        {/* STAGE 1: DOCUMENT EXTRACTION */}
        {activeStage === "extract" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Document Ingestion Queue */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
                <span>INGESTED DOCUMENTS ({packet.documents.length})</span>
                <span>STATUS: EXTRACTED</span>
              </div>

              {packet.documents.map((doc, dIdx) => (
                <div
                  key={doc.refNumber}
                  onClick={() => setSelectedDocIndex(dIdx)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedDocIndex === dIdx
                      ? "bg-slate-800/90 border-emerald-500 shadow-md"
                      : "bg-slate-800/40 border-slate-800 hover:bg-slate-800/70"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2.5">
                      <FileText className={`w-5 h-5 mt-0.5 ${selectedDocIndex === dIdx ? "text-emerald-400" : "text-slate-400"}`} />
                      <div>
                        <h4 className="text-sm font-medium text-white">{doc.name}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{doc.type} • Dated {doc.date}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      OCR 99%+
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">{doc.refNumber}</span>
                    <span className="text-slate-200 font-medium">{doc.totalAmount}</span>
                  </div>
                </div>
              ))}

              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs text-slate-300">
                <span className="font-semibold text-emerald-400 block mb-1">Pixel-Level Traceability</span>
                Every extracted field retains exact (x, y) bounding box coordinates linking back to source PDF pages.
              </div>
            </div>

            {/* Right: Extracted Fields Inspector */}
            <div className="lg:col-span-8 bg-slate-800/40 border border-slate-800 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Field Extraction: {activeDoc.name}</span>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">
                      {activeDoc.fields.length} Fields
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Click any field to view bounding box verification and confidence metric.
                  </p>
                </div>
                <div className="text-xs text-slate-400">
                  Total Parsed: <span className="text-white font-mono font-medium">{activeDoc.totalAmount}</span>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-700/80 text-slate-400">
                      <th className="pb-2.5 font-medium">FIELD KEY</th>
                      <th className="pb-2.5 font-medium">EXTRACTED VALUE</th>
                      <th className="pb-2.5 font-medium">CONFIDENCE</th>
                      <th className="pb-2.5 font-medium text-right">AUDIT STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {activeDoc.fields.map((f, fIdx) => (
                      <tr
                        key={fIdx}
                        onClick={() => setHighlightedField(f.key)}
                        className={`hover:bg-slate-800/60 cursor-pointer transition-colors ${
                          highlightedField === f.key ? "bg-slate-700/60" : ""
                        }`}
                      >
                        <td className="py-2.5 text-slate-300 font-medium">
                          {f.key}
                        </td>
                        <td className="py-2.5 font-mono text-white">
                          {f.value}
                        </td>
                        <td className="py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-700 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-emerald-400 h-full rounded-full"
                                style={{ width: `${f.confidence}%` }}
                              ></div>
                            </div>
                            <span className="font-mono text-[11px] text-slate-400">{f.confidence}%</span>
                          </div>
                        </td>
                        <td className="py-2.5 text-right">
                          {f.isFlagged ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded">
                              <AlertTriangle className="w-3 h-3" /> Flagged
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                              <CheckCircle2 className="w-3 h-3" /> Verified
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {highlightedField && (
                <div className="mt-4 p-3 bg-slate-900/90 border border-emerald-500/40 rounded-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    <span>Highlighted Coordinate: <strong>{highlightedField}</strong> mapped to Page 1, BoundingBox [x: 48, y: 192, w: 280, h: 22]</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">Pixel Verified</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STAGE 2: 3-WAY MATCH & RULE ENGINE */}
        {activeStage === "validate" && (
          <div className="space-y-6">
            {/* Header summary banner */}
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                  Deterministic Rule Validation
                </span>
                <h4 className="text-base font-semibold text-white mt-0.5">
                  Automated Cross-Validation & Discrepancy Flagging
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Endloops evaluates multi-document matching and statutory constraints without probabilistic guesswork.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setActiveStage("paper")}
                  className="flex items-center gap-1.5 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-3.5 py-2 rounded-lg transition-colors"
                >
                  <span>Proceed to Working Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Rule Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packet.ruleChecks.map((rule) => {
                const isFail = rule.status === "fail";
                const isWarning = rule.status === "warning";
                return (
                  <div
                    key={rule.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isFail
                        ? "bg-rose-950/20 border-rose-800/60 shadow-lg shadow-rose-950/10"
                        : isWarning
                        ? "bg-amber-950/20 border-amber-800/60"
                        : "bg-slate-800/40 border-slate-700/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {isFail ? (
                          <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-4 h-4 text-rose-400" />
                          </div>
                        ) : isWarning ? (
                          <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                            <ShieldAlert className="w-4 h-4 text-amber-400" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </div>
                        )}
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            isFail ? "text-rose-400" : isWarning ? "text-amber-400" : "text-emerald-400"
                          }`}
                        >
                          {isFail ? "Discrepancy" : isWarning ? "Warning" : "Passed Check"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">{rule.id}</span>
                    </div>

                    <h5 className="text-sm font-semibold text-white mt-3">{rule.ruleName}</h5>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{rule.description}</p>

                    <div className="mt-3 pt-3 border-t border-slate-800 text-xs">
                      <span className="text-slate-400">Impact on Audit:</span>{" "}
                      <span className={isFail ? "text-rose-300 font-medium" : "text-slate-200"}>
                        {rule.impact}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Side-by-side Voucher Comparison table */}
            <div className="bg-slate-800/30 border border-slate-700/60 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-white">3-WAY MATCH COMPARISON MATRIX</span>
                <span className="text-slate-400 font-mono">TOLERANCE THRESHOLD: 0.00 AED</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 font-medium">
                      <th className="pb-2">ITEM DESCRIPTION</th>
                      <th className="pb-2 font-mono">PURCHASE ORDER</th>
                      <th className="pb-2 font-mono">GOODS RECEIVED NOTE</th>
                      <th className="pb-2 font-mono">TAX INVOICE</th>
                      <th className="pb-2 text-right">VARIANCE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {packet.workingPaper.rows.map((r, i) => (
                      <tr key={i} className="hover:bg-slate-800/40">
                        <td className="py-2.5 text-slate-200 font-medium">{r.description}</td>
                        <td className="py-2.5 font-mono text-slate-300">{r.poAmount}</td>
                        <td className="py-2.5 font-mono text-slate-300">{r.grnAmount}</td>
                        <td className="py-2.5 font-mono text-white">{r.invoicedAmount}</td>
                        <td className="py-2.5 text-right font-mono">
                          {r.variance.includes("-") || r.variance.includes("(") ? (
                            <span className="text-rose-400 font-semibold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/50">
                              {r.variance}
                            </span>
                          ) : (
                            <span className="text-emerald-400">{r.variance}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 3: GENERATED WORKING PAPER */}
        {activeStage === "paper" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                    {packet.workingPaper.code}
                  </span>
                  <h4 className="text-base font-semibold text-white">{packet.workingPaper.title}</h4>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Prepared by: {packet.workingPaper.preparedBy} • Ready for engagement partner review
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => showToast("Exporting Excel working paper (WP-AP-3W-088.xlsx) with linked citations...")}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Export Excel</span>
                </button>
                <button
                  onClick={() => setActiveStage("review")}
                  className="flex items-center gap-1.5 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-3.5 py-1.5 rounded-lg transition-colors"
                >
                  <span>Review & Sign Off</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Working Paper Excel-Like Table */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-[#07111e]">
              <div className="bg-slate-800/60 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span>CLIENT: <strong className="text-slate-200">{packet.entity}</strong></span>
                  <span>PERIOD: <strong className="text-slate-200">FY 2026</strong></span>
                  <span>CURRENCY: <strong className="text-slate-200">{packet.currency}</strong></span>
                </div>
                <span className="font-mono text-[11px]">DRAFT STATUS: UNSEALED</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                      <th className="py-2.5 px-3 font-mono font-medium">REF</th>
                      <th className="py-2.5 px-3 font-medium">DESCRIPTION</th>
                      <th className="py-2.5 px-3 font-mono font-medium">PO AMOUNT</th>
                      <th className="py-2.5 px-3 font-mono font-medium">GRN DELIVERED</th>
                      <th className="py-2.5 px-3 font-mono font-medium">INVOICED TOTAL</th>
                      <th className="py-2.5 px-3 font-mono font-medium">VARIANCE</th>
                      <th className="py-2.5 px-3 font-medium">AUDIT FINDING & ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                    {packet.workingPaper.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-3 px-3 text-slate-400 font-medium">{row.ref}</td>
                        <td className="py-3 px-3 font-sans text-white text-xs">{row.description}</td>
                        <td className="py-3 px-3 text-slate-300">{row.poAmount}</td>
                        <td className="py-3 px-3 text-slate-300">{row.grnAmount}</td>
                        <td className="py-3 px-3 text-white font-semibold">{row.invoicedAmount}</td>
                        <td className="py-3 px-3">
                          {row.variance.includes("-") || row.variance.includes("(") ? (
                            <span className="text-rose-400 font-bold">{row.variance}</span>
                          ) : (
                            <span className="text-emerald-400">{row.variance}</span>
                          )}
                        </td>
                        <td className="py-3 px-3 font-sans text-slate-300 text-xs">
                          {row.auditFinding}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#0b1625] p-3 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Working Paper Footing: Mathematically cross-cast & cross-referenced to GL Account #2100-AP.</span>
                <span className="text-emerald-400 font-mono">100% Balanced</span>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 4: HUMAN REVIEW & SIGN-OFF */}
        {activeStage === "review" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Audit Trail History */}
            <div className="lg:col-span-5 bg-slate-800/40 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Audit Trail & Execution Log</span>
                </h4>
                <span className="text-[11px] font-mono text-slate-400">IMMUTABLE LOG</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-mono text-slate-400 text-[10px]">10:14:02 GST</span>
                    <p className="text-slate-300 mt-0.5">Ingested 3 source PDF documents ({packet.documents.length} files parsed).</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-mono text-slate-400 text-[10px]">10:14:18 GST</span>
                    <p className="text-slate-300 mt-0.5">OCR extracted 18 data points with 99.4% mean character confidence.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-mono text-slate-400 text-[10px]">10:14:35 GST</span>
                    <p className="text-rose-300 font-medium mt-0.5">
                      Rule Engine flagged discrepancy: Line 1 quantity mismatch (-3 units damaged in transit).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-mono text-slate-400 text-[10px]">10:15:01 GST</span>
                    <p className="text-slate-300 mt-0.5">Draft Working Paper {packet.workingPaper.code} compiled.</p>
                  </div>
                </div>

                {signOffStatus !== "pending" && (
                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-700/60">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0"></span>
                    <div>
                      <span className="font-mono text-blue-400 text-[10px]">JUST NOW</span>
                      <p className="text-white font-medium mt-0.5">
                        Human decision recorded: {signOffStatus.toUpperCase()} by Senior Auditor.
                      </p>
                      <p className="text-slate-400 text-[11px] mt-0.5 font-mono">
                        SHA-256 Stamp: 9f82...a17c
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-400">
                <span className="text-white font-semibold block mb-0.5">ISA 240 / 500 Compliance</span>
                Software prepares the working paper draft. The registered financial professional reviews and authorizes the final journal adjustment or voucher release.
              </div>
            </div>

            {/* Right: Human Sign-off Action Form */}
            <div className="lg:col-span-7 bg-slate-800/60 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-base font-semibold text-white">Professional Review & Sign-Off</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Authorized Signatory: <strong>Senior Audit Partner (Alkazim Dubai)</strong>
                  </p>
                </div>
                <div>
                  {signOffStatus === "pending" && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      Pending Professional Sign-Off
                    </span>
                  )}
                  {signOffStatus === "approved" && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Approved & Signed Off
                    </span>
                  )}
                  {signOffStatus === "rejected" && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-rose-400 bg-rose-950 border border-rose-800 px-3 py-1 rounded-full font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Rejected to Procurement
                    </span>
                  )}
                </div>
              </div>

              {/* Auditor Note Editor */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Auditor Decision & Adjustment Memorandum
                </label>
                <textarea
                  value={auditorNote}
                  onChange={(e) => setAuditorNote(e.target.value)}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-sans"
                  placeholder="Enter auditor commentary, required adjustments, or justification..."
                />
              </div>

              {/* Decision Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleSignOff("rejected")}
                    className="flex-1 sm:flex-initial text-xs bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/70 font-medium px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Reject Back to Vendor
                  </button>
                  <button
                    onClick={() => handleSignOff("approved")}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md"
                  >
                    <Check className="w-4 h-4" />
                    <span>Approve & Authorize Working Paper</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSignOffStatus("pending");
                    showToast("Status reset to unsealed draft.");
                  }}
                  className="text-xs text-slate-400 hover:text-slate-200 underline"
                >
                  Reset Status
                </button>
              </div>

              {signOffStatus === "approved" && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-300">
                      Working Paper Officially Authorized
                    </h5>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      The software prepared the schedule; the auditor reviewed the discrepancy and authorized the debit note adjustment. Audit file sealed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Interactive Guide / Micro-Trust Bar */}
      <div className="bg-[#08121f] px-6 py-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>
            Demonstration Mode: Switch documents, inspect rule passes/fails, and test the human sign-off loop.
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="font-mono text-emerald-400">100% Deterministic Matching</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400">Zero Black-Box Guesswork</span>
        </div>
      </div>
    </div>
  );
};
