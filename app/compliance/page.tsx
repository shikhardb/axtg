"use client";

import { ShieldCheck, Globe, Scale, Lock, Fingerprint, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComplianceLandingPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,166,74,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <ShieldCheck className="w-16 h-16 text-[#D4A64A] mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-[#F5F7FA]">
            Institutional-Grade Compliance
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10">
            Navigate multi-jurisdictional frameworks automatically. AXTG embeds identity verification, transfer restrictions, and regulatory reporting directly into the smart contract layer.
          </p>
          <Link href="/app/compliance">
            <button className="px-8 py-4 rounded-xl bg-transparent border border-[#D4A64A]/50 text-[#D4A64A] font-bold mx-auto hover:bg-[#D4A64A]/10 transition-colors flex items-center text-lg">
               Explore Compliance Lab <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           
           <div className="bg-[#121A24] border border-[#1E293B] rounded-3xl p-10 relative overflow-hidden group hover:border-[#D4A64A]/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A64A]/10 rounded-bl-full flex items-center justify-center pt-8 pl-8 transform group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-[#D4A64A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4 relative z-10">Jurisdictional Rules Engine</h2>
              <p className="text-[#94A3B8] leading-relaxed relative z-10">
                Assets deployed via AXTG are context-aware. If an asset is registered under US Reg D, the smart contract automatically blocks transfers to non-accredited wallets or restricted jurisdictions, enforcing compliance on-chain.
              </p>
           </div>

           <div className="bg-[#121A24] border border-[#1E293B] rounded-3xl p-10 relative overflow-hidden group hover:border-[#00C2FF]/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/10 rounded-bl-full flex items-center justify-center pt-8 pl-8 transform group-hover:scale-110 transition-transform">
                <Fingerprint className="w-8 h-8 text-[#00C2FF]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4 relative z-10">Unified Identity & KYC</h2>
              <p className="text-[#94A3B8] leading-relaxed relative z-10">
                Plug into industry-leading KYC/AML and behavioral monitoring providers. Users verify once, and their identity claims are attached to their wallet addresses via privacy-preserving zero-knowledge proofs.
              </p>
           </div>

           <div className="bg-[#121A24] border border-[#1E293B] rounded-3xl p-10 relative overflow-hidden group hover:border-[#00E0C7]/50 transition-colors md:col-span-2 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4 flex items-center"><Scale className="w-6 h-6 mr-3 text-[#00E0C7]" /> Legal Document Automation</h2>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  The Compliance Agent drafts bespoke legal wrappers for your tokens. From SPV operating agreements to Private Placement Memorandums (PPMs), ensure your on-chain assets correspond legally to real-world entities.
                </p>
                <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-[#94A3B8]">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00E0C7] mr-2" /> Offering Memos</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00E0C7] mr-2" /> Subscription Docs</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00E0C7] mr-2" /> AML Policies</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#00E0C7] mr-2" /> Custody Agreements</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 bg-[#0B0F14] border border-[#1E293B] rounded-2xl p-6 flex flex-col items-center justify-center shadow-inner">
                 <Lock className="w-10 h-10 text-[#334155] mb-4" />
                 <div className="text-sm text-[#F5F7FA] font-mono text-center mb-2">ON-CHAIN ATTESTATION</div>
                 <div className="text-xs text-[#00E0C7] bg-[#00E0C7]/10 px-3 py-1 rounded-full border border-[#00E0C7]/20">0x3f...8a2b Validated</div>
              </div>
           </div>
           
        </div>
      </section>
    </div>
  );
}
