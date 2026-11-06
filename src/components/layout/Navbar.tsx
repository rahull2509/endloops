"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Regional Trust Ribbon */}
      <div className="bg-[#07111e] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">GCC Enterprise Automation:</span>
            <span className="hidden sm:inline text-slate-400">
              UAE Corporate Tax, FTA VAT, and Dubai RERA Escrow compliance ready
            </span>
            <span className="sm:hidden text-slate-400">RERA & VAT ready</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 hidden md:inline">Incubated inside Alkazim Dubai</span>
            <Link
              href="/about"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
            >
              Our Story <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
              aria-label="Endloops Home"
            >
              <div className="relative h-10 w-40 flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="Endloops - Financial Automation for Professionals"
                  width={180}
                  height={52}
                  className="object-contain max-h-11 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? "text-[#0b192c] bg-slate-100 font-semibold"
                        : "text-slate-600 hover:text-[#0b192c] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/solutions"
                className="text-xs font-semibold text-slate-600 hover:text-[#0b192c] px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                View Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0b192c] hover:bg-[#132844] text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b192c] focus-visible:ring-offset-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/contact"
                className="text-xs font-medium bg-[#0b192c] text-white px-3 py-1.5 rounded-md"
              >
                Demo
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? "bg-slate-100 text-[#0b192c] font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 space-y-3">
              <div className="flex items-center gap-2 px-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Human-in-the-loop financial verification</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#0b192c] text-white font-medium py-3 px-4 rounded-lg shadow-sm"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
