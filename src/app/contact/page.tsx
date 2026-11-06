"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY } from "@/data/company";
import { FAQS } from "@/data/faqs";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  solution: string;
  docVolume: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  solution?: string;
  message?: string;
}

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedSolution = searchParams.get("solution") || searchParams.get("tool") || "";

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    solution: preselectedSolution || "Budget Review Solution",
    docVolume: "1,000 - 5,000 docs / month",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@firm.com).";
    }

    if (!form.company.trim()) {
      newErrors.company = "Please enter your firm or company name.";
    }

    if (!form.jobTitle.trim()) {
      newErrors.jobTitle = "Please enter your job title (e.g. Audit Senior, CFO).";
    }

    if (!form.solution) {
      newErrors.solution = "Please select the solution or tool you are interested in.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please briefly share your workflow requirements or questions.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters so we can prepare relevant sample files.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission to demonstrate loading & success states
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore if not supported
      }
    }, 1200);
  };

  const solutionOptions = [
    "Budget Review Solution",
    "Escrow Audit Solution (RERA / DLD)",
    "Financial Audit Solution",
    "Interim Audit Solution",
    "Property Management Budget Preparation",
    "Purchase Order Extraction Tool",
    "Vouching Automation Tool",
    "Expense Working Automation Tool",
    "Financial Report Review Tool",
    "Tender Verification Tool",
    "Reconciliation Automation Tool",
    "Custom Firm Integration / Multiple Solutions"
  ];

  const faqCategories = ["All", "General", "Product & Workflow", "Security & Data", "Implementation"];
  const filteredFaqs =
    activeFaqCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeFaqCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-[#07111e] text-white py-16 md:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block mb-4">
              Direct Practice Access
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Request a Guided Platform Demo
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Schedule a personalized walkthrough with our financial engineering team. We will ingest your sample documents and demonstrate our automated extraction, 3-way matching, and working paper generation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Details & Value Props */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                    Regional Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dubai Office & Practice Operations
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Conceived and operated from Dubai, United Arab Emirates.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Registered Office:</strong>
                      <span>{COMPANY.officeAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Email Inquiries:</strong>
                      <a href={`mailto:${COMPANY.contactEmail}`} className="text-emerald-700 hover:underline">
                        {COMPANY.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Direct Telephone:</strong>
                      <span>{COMPANY.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Operating Hours:</strong>
                      <span>{COMPANY.businessHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#0b192c] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block">
                  The Demo Process
                </span>
                <h4 className="text-base font-bold text-white">
                  What to expect after booking:
                </h4>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                      1
                    </span>
                    <span><strong>15-Minute Scope Review:</strong> Understand your current document volume, software stack, and audit procedures.</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                      2
                    </span>
                    <span><strong>Sample Batch Testing:</strong> You securely supply 10–20 redacted invoices or POs for live processing.</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                      3
                    </span>
                    <span><strong>Working Paper Walkthrough:</strong> We present the generated audit schedule side-by-side with your existing working paper.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA and UAE data residency safeguards guaranteed.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Demo Request Submitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{form.fullName}</strong>. A senior financial architect from our Dubai office will review your request for <strong className="text-slate-900">{form.solution}</strong> and reach out within 1 business day.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-xs text-left space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Submitted Email:</span>
                      <span className="font-medium text-slate-800">{form.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Firm / Company:</span>
                      <span className="font-medium text-slate-800">{form.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Document Volume:</span>
                      <span className="font-medium text-slate-800">{form.docVolume}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setForm({
                          fullName: "",
                          email: "",
                          company: "",
                          jobTitle: "",
                          solution: "Budget Review Solution",
                          docVolume: "1,000 - 5,000 docs / month",
                          message: "",
                        });
                      }}
                      className="text-xs text-emerald-700 font-semibold hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>

                  <div className="mt-6 p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-xs max-w-md mx-auto">
                    <span className="font-semibold block mb-0.5">Evaluation Note:</span>
                    This form validates and simulates the client intake workflow directly in the interface. No third-party CRM endpoint is configured in this test environment.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Schedule Your Practice Demo</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete the form below to request a tailored demonstration.
                    </p>
                  </div>

                  {/* Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        placeholder="e.g. Tariq Alkazim"
                        className={`w-full text-xs p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-rose-400 bg-rose-50/20 focus:ring-rose-500"
                            : "border-slate-300 focus:ring-emerald-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        placeholder="name@firm.com"
                        className={`w-full text-xs p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-rose-400 bg-rose-50/20 focus:ring-rose-500"
                            : "border-slate-300 focus:ring-emerald-500"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">
                        Firm / Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        placeholder="e.g. Alkazim Auditing LLC"
                        className={`w-full text-xs p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                          errors.company
                            ? "border-rose-400 bg-rose-50/20 focus:ring-rose-500"
                            : "border-slate-300 focus:ring-emerald-500"
                        }`}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="jobTitle" className="block text-xs font-semibold text-slate-700 mb-1">
                        Job Title / Position <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="jobTitle"
                        type="text"
                        value={form.jobTitle}
                        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                        aria-invalid={!!errors.jobTitle}
                        aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
                        placeholder="e.g. Senior Audit Manager"
                        className={`w-full text-xs p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                          errors.jobTitle
                            ? "border-rose-400 bg-rose-50/20 focus:ring-rose-500"
                            : "border-slate-300 focus:ring-emerald-500"
                        }`}
                      />
                      {errors.jobTitle && (
                        <p id="jobTitle-error" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.jobTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Interested Solution & Document Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="solution" className="block text-xs font-semibold text-slate-700 mb-1">
                        Interested Solution / Tool <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="solution"
                        value={form.solution}
                        onChange={(e) => setForm({ ...form, solution: e.target.value })}
                        className="w-full text-xs p-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        {solutionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="docVolume" className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated Monthly Document Volume
                      </label>
                      <select
                        id="docVolume"
                        value={form.docVolume}
                        onChange={(e) => setForm({ ...form, docVolume: e.target.value })}
                        className="w-full text-xs p-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Under 500 docs / month">Under 500 docs / month</option>
                        <option value="500 - 1,500 docs / month">500 - 1,500 docs / month</option>
                        <option value="1,500 - 5,000 docs / month">1,500 - 5,000 docs / month</option>
                        <option value="5,000 - 20,000 docs / month">5,000 - 20,000 docs / month</option>
                        <option value="20,000+ docs / month (Enterprise)">20,000+ docs / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Workflow Requirements or Questions <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Tell us about your current audit / accounting process, ERP software in use, or specific bottlenecks you want to automate..."
                      className={`w-full text-xs p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-rose-400 bg-rose-50/20 focus:ring-rose-500"
                          : "border-slate-300 focus:ring-emerald-500"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#0b192c] hover:bg-[#132844] text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Submitting Demo Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request for Platform Demo</span>
                          <ArrowRight className="w-4 h-4 text-emerald-400" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are encrypted and treated as strictly confidential under UAE law.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise FAQ Accordion Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-[#0b192c] tracking-tight">
              Questions Financial Professionals Ask Us
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Clear answers regarding our technology, security, and human-in-the-loop philosophy.
            </p>
          </div>

          {/* FAQ Category Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeFaqCategory === cat
                    ? "bg-[#0b192c] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-xs text-slate-500">Loading demo reservation console...</p>
          </div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
