import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  Scale,
  MapPin,
  Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Endloops | Born Inside Alkazim Dubai",
  description:
    "Learn about Endloops, born out of Alkazim accounting and audit firm in Dubai. Our mission, human-in-the-loop philosophy, and vision for financial automation across the GCC and beyond.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-[#07111e] text-white py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block mb-4">
              Our Origin & Purpose
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Built by practitioners who lived the manual grind.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Endloops was born inside Alkazim, an accounting and audit firm based in Dubai. Having solved our own operational bottlenecks in statutory audits and financial reporting, we spun out the technology to empower the entire financial profession.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 bg-white border-b border-slate-200" id="origin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold text-[#0b192c] tracking-tight">
                From a Dubai audit firm&apos;s internal technology department to an independent automation company.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Alkazim is an established accounting and audit firm based in Dubai. Over years of conducting statutory audits, corporate tax computations, and real estate escrow reviews, its internal technology department built proprietary software to automate the tedious mechanical work that consumed its teams.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                That department has now evolved into <strong>Endloops</strong>—an independent technology company building software purpose-crafted for financial professionals: accountants, statutory auditors, corporate finance departments, and property management companies.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our users operate in rigorous, high-stakes environments. Their work is deeply detailed, highly time-sensitive, and legally binding. They cannot rely on flashy, unverified AI experiments. For them, <strong>reliability, mathematical precision, and clarity matter as much as appearance.</strong>
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-800">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Headquartered in Dubai, UAE</h4>
                  <p className="text-xs text-slate-500">Operating across the GCC region and international markets</p>
                </div>
              </div>
            </div>

            {/* Quote / Highlight Card */}
            <div className="lg:col-span-5 bg-[#091524] text-white p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                The Foundational Principle
              </span>
              <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug">
                &ldquo;The software prepares the work, and the professional reviews and decides.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-300 leading-relaxed">
                We take care of the repetitive, mechanical tasks—data extraction, 3-way matching, footing, and schedule drafting—and the final sign-off always stays with qualified people.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  EL
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">The Endloops Creed</span>
                  <span className="text-[11px] text-slate-400">Guiding every engineering choice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Address */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              The Need We Address
            </span>
            <h2 className="text-3xl font-bold text-[#0b192c] tracking-tight">
              Freeing financial intellect from mechanical clerical drudgery.
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Much of a finance professional&apos;s day goes into tasks that software can handle with greater speed and fewer clerical errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4 font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Repetitive & Time-Consuming
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auditors and accountants spend hundreds of billable hours typing invoice figures into spreadsheets, cross-checking purchase orders against delivery notes, and re-casting footnote totals.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4 font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Leaves Room for Costly Errors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fatigue leads to transposition errors, overlooked price escalations, broken spreadsheet cell references, and missed statutory compliance thresholds under tight month-end deadlines.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Diverts Attention from Clients & Judgement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clerical mechanics steal time from what truly matters: substantive risk evaluation, fraud detection, commercial negotiations, and high-value strategic advisory for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Heading: GCC Vision & Beyond */}
      <section className="py-20 bg-white border-b border-slate-200" id="vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Where We Are Heading
            </span>
            <h2 className="text-3xl font-bold text-[#0b192c] tracking-tight">
              The trusted automation partner for accounting, audit & property finance in the GCC and beyond.
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              We are expanding our engineering, design, and quality capabilities to shape how modern financial institutions operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
              <Building2 className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900">GCC Regional Leadership</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Deep compliance with UAE Corporate Tax, FTA VAT, Saudi ZATCA e-invoicing standards, and Dubai RERA Escrow requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
              <Scale className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900">Uncompromising Standards</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Adherence to International Standards on Auditing (ISA) and IFRS frameworks so our working papers withstand regulatory scrutiny.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
              <Lock className="w-6 h-6 text-purple-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900">Regional Data Sovereignty</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Hosting data within UAE and regional cloud regions with enterprise encryption and strict zero third-party model training guarantees.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60">
              <Users className="w-6 h-6 text-teal-600 mb-3" />
              <h4 className="text-sm font-bold text-slate-900">Growing World-Class Team</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Recruiting elite product designers and full-stack engineers to build the next generation of financial intelligence software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0b192c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Partner with Endloops for your firm&apos;s financial automation.
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto">
            Schedule a conversation with our leadership and engineering team in Dubai to see how Endloops can elevate your practice.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
