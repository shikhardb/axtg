import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-[#1E293B] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold font-heading tracking-tight flex items-center mb-4">
              <span className="text-[#F5F7FA]">AXTG</span>
              <span className="text-[#00C2FF] ml-1.5">AI</span>
            </Link>
            <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
              An AI-powered digital assets operating platform for builders, issuers, investors, and enterprise users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#94A3B8] hover:text-[#00C2FF] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#00C2FF] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#00C2FF] transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/ai-agents" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">AI Agents</Link></li>
              <li><Link href="/build" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Token Builder</Link></li>
              <li><Link href="/compliance" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Compliance Lab</Link></li>
              <li><Link href="/markets" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Market Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">RWA Tokenization</Link></li>
              <li><Link href="/solutions" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Carbon Credits</Link></li>
              <li><Link href="/solutions" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Stablecoins</Link></li>
              <li><Link href="/solutions" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">OTC Digital Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase mb-4">Corporate</h3>
            <ul className="space-y-3">
              <li><Link href="/investors" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Investor Relations</Link></li>
              <li><Link href="/about" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">About Us</Link></li>
              <li><Link href="/docs" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Documentation</Link></li>
              <li><Link href="/contact" className="text-sm text-[#94A3B8] hover:text-[#00C2FF]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#94A3B8]">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AXTG AI. All rights reserved. Not financial advice.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[#00C2FF]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#00C2FF]">Terms of Service</Link>
            <Link href="/risk" className="hover:text-[#00C2FF]">Risk Notice</Link>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center items-center text-[#94A3B8] opacity-50">
          <Sparkles className="w-3 h-3 mr-2" />
          <span className="text-xs tracking-widest uppercase">Powered by AXTG AI</span>
        </div>
      </div>
    </footer>
  );
}
