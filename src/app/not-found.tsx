import React from "react";
import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center py-16">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100">
          <FileQuestion className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
          404 ERROR • PAGE NOT FOUND
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0b192c] mt-2 mb-3">
          Working paper not found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
          The financial schedule or resource you are looking for has been moved, re-indexed, or does not exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b192c] hover:bg-[#132844] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded-lg border border-slate-200 transition-all"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
