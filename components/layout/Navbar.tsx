"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform" },
  { name: "AI Agents", href: "/ai-agents" },
  { name: "Solutions", href: "/solutions" },
  { name: "Markets", href: "/markets" },
  { name: "Build", href: "/build" },
  { name: "Compliance", href: "/compliance" },
  { name: "Docs", href: "/docs" },
  { name: "Investors", href: "/investors" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold font-heading tracking-tight flex items-center">
              <span className="text-[#F5F7FA]">AXTG</span>
              <span className="text-[#00C2FF] ml-1.5">AI</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#00C2FF] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/login" className="text-sm font-medium text-[#94A3B8] hover:text-[#F5F7FA]">
              Login
            </Link>
            <Link
              href="/app"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#0B0F14] bg-gradient-to-r from-[#00C2FF] to-[#00E0C7] hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,194,255,0.3)]"
            >
              Launch App
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#94A3B8] hover:text-[#F5F7FA] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-[#1E293B]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#94A3B8] hover:text-[#00C2FF] hover:bg-[#121A24]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-[#1E293B]">
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#F5F7FA] hover:bg-[#121A24]"
              >
                Login
              </Link>
              <Link
                href="/app"
                className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-[#0B0F14] bg-gradient-to-r from-[#00C2FF] to-[#00E0C7] text-center"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
