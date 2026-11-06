"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Lock } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { STANDALONE_TOOLS } from "@/data/tools";
import { COMPANY } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07111e] text-slate-300 border-t border-slate-800" aria-label="Footer">
      {/* Top Banner / Philosophy Bar */}
      <div className="border-b border-slate-800/80 bg-[#050c15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Core Operating Philosophy
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white mt-0.5">
                Software prepares the work. Financial professionals review and decide.
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Endloops never acts as an unmonitored black-box. Automated extraction and rule validation feed directly into structured draft working papers, keeping final sign-off with registered accountants and auditors.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-all shadow-sm shrink-0"
          >
            <span>Schedule Platform Walkthrough</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Origin */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg inline-flex items-center shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Endloops Logo"
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Originating inside <span className="text-slate-200 font-medium">Alkazim</span> in Dubai, Endloops builds intelligent financial automation purpose-crafted for accountants, statutory auditors, and property management finance teams across the GCC.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY.contactEmail}`} className="hover:text-white transition-colors">
                  {COMPANY.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise UAE Data Residency • Zero Public AI Training</span>
              </div>
            </div>
          </div>

          {/* Column 2: End-to-End Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
              End-to-End Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions#${s.slug}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Standalone Tools */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
              Standalone Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              {STANDALONE_TOOLS.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/tools#${t.slug}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Compliance */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
              Company & Standards
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Endloops
                </Link>
              </li>
              <li>
                <Link href="/about#origin" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Born inside Alkazim
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Human-in-the-Loop Ethics
                </Link>
              </li>
              <li>
                <Link href="/solutions#compliance" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  GCC Regulatory Alignment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution */}
      <div className="border-t border-slate-800 py-6 bg-[#04080e] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Endloops Technologies FZ-LLC. All rights reserved.</span>
            <span className="hidden md:inline">• Dubai, United Arab Emirates</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-mono text-[11px]">Audit Engine v2.4 (Enterprise)</span>
            <span className="text-slate-400">SOC 2 Type II Alignment</span>
            <span className="text-slate-400">ISA 500 Audit Trail Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
