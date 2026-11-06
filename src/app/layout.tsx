import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://endloops.com"),
  title: {
    default: "Endloops | Financial Automation for Accountants & Auditors",
    template: "%s | Endloops",
  },
  description:
    "Software prepares the work. Financial professionals review and decide. Purpose-built financial automation for accountants, auditors, and property management teams across the GCC.",
  keywords: [
    "Financial Automation",
    "Audit Software Dubai",
    "RERA Escrow Audit",
    "Vouching Automation",
    "Purchase Order Extraction",
    "Alkazim",
    "GCC Accounting Tech",
    "Endloops",
  ],
  authors: [{ name: "Endloops Technologies FZ-LLC" }],
  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",
  },
  openGraph: {
    title: "Endloops | Financial Automation for Accountants & Auditors",
    description:
      "Software prepares the work. Financial professionals review and decide. Purpose-built financial automation for accountants, auditors, and property management teams across the GCC.",
    url: "https://endloops.com",
    siteName: "Endloops",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b192c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0b192c]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
