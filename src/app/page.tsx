import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustPositioning } from "@/components/home/TrustPositioning";
import { InteractiveDocumentDemo } from "@/components/home/InteractiveDocumentDemo";
import { SolutionsOverview } from "@/components/home/SolutionsOverview";
import { ToolsOverview } from "@/components/home/ToolsOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TechCapabilities } from "@/components/home/TechCapabilities";
import { IndustrySection } from "@/components/home/IndustrySection";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Endloops | Financial Automation for Accountants, Auditors & Property Finance",
  description:
    "Software prepares the work. Financial professionals review and decide. Born in Dubai inside Alkazim, Endloops automates budget reviews, escrow audits, 3-way vouching, and draft working papers.",
  openGraph: {
    title: "Endloops | Financial Automation for Accountants, Auditors & Property Finance",
    description:
      "Software prepares the work. Financial professionals review and decide. High-precision financial automation for accounting, audit, and property finance teams.",
    url: "https://endloops.com",
    siteName: "Endloops",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* Signature Interactive Product Visualization Section */}
      <section className="py-16 bg-[#06101c] border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80 inline-block mb-3">
              Interactive Product Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              See How Endloops Automates Financial Work
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our live multi-stage simulation. Switch between realistic demo packets, inspect extracted fields, view automated 3-way matching, examine draft working papers, and test the human review sign-off.
            </p>
          </div>

          <InteractiveDocumentDemo />
        </div>
      </section>

      {/* 2. Trust and Brand Positioning */}
      <TrustPositioning />

      {/* 3. Solutions Overview (End-to-End Solutions) */}
      <SolutionsOverview />

      {/* 4. Standalone Tools Overview */}
      <ToolsOverview />

      {/* 5. How It Works (5-Stage Architecture) */}
      <HowItWorks />

      {/* 6. Technology Capabilities */}
      <TechCapabilities />

      {/* 7. Industry / Target Audience Section */}
      <IndustrySection />

      {/* 8. Interactive Efficiency Calculator */}
      <RoiCalculator />

      {/* 9. Final High-Impact CTA */}
      <CtaBanner />
    </div>
  );
}
