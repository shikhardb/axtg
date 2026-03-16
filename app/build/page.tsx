"use client";

import { motion } from "framer-motion";
import { Coins, ChevronRight, Settings, Rocket } from "lucide-react";
import Link from "next/link";

export default function BuildLandingPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-[#1E293B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-[#121A24] border border-[#334155] flex items-center justify-center shadow-[0_0_30px_rgba(0,194,255,0.2)] mb-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <Coins className="w-10 h-10 text-[#00C2FF] transform -rotate-12 hover:rotate-0 transition-transform duration-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-[#F5F7FA]">
            The Token Architect
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10">
            A visual, state-machine driven builder for deploying highly complex, compliant smart contracts without writing a single line of Solidity.
          </p>
          <Link href="/app/token-builder">
            <button className="px-8 py-4 rounded-xl bg-[#00C2FF] text-[#0A0F15] font-bold mx-auto hover:bg-[#00E0C7] transition-colors shadow-[0_4px_14px_rgba(0,194,255,0.4)] flex items-center text-lg">
               Launch the Builder <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Stepper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold font-heading text-center mb-16 text-[#F5F7FA]">From Idea to Mainnet in Minutes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-8 text-center relative">
             <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-6 border border-blue-500/20">1</div>
             <Settings className="w-8 h-8 mx-auto text-[#94A3B8] mb-4" />
             <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">Configure</h3>
             <p className="text-sm text-[#94A3B8]">Select standard (ERC-20, 3643, 3525), set supply dynamics, define access controls and minting logic.</p>
           </div>
           
           <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-8 text-center relative">
             <div className="hidden md:block absolute top-[45px] -left-12 w-24 h-0.5 bg-gradient-to-r from-[#1E293B] to-[#00C2FF]" />
             <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-full flex items-center justify-center text-[#00C2FF] mx-auto mb-6 border border-[#00C2FF]/20 shadow-[0_0_15px_rgba(0,194,255,0.4)]">2</div>
             <Shield className="w-8 h-8 mx-auto text-[#94A3B8] mb-4" />
             <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">Secure & Inject</h3>
             <p className="text-sm text-[#94A3B8]">AI automatically weaves in OpenZeppelin secure modules and jurisdiction-specific compliance lockups.</p>
           </div>

           <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-8 text-center relative">
             <div className="hidden md:block absolute top-[45px] -left-12 w-24 h-0.5 bg-gradient-to-r from-[#00C2FF] to-[#1E293B]" />
             <div className="w-12 h-12 bg-[#00E0C7]/10 rounded-full flex items-center justify-center text-[#00E0C7] mx-auto mb-6 border border-[#00E0C7]/20">3</div>
             <Rocket className="w-8 h-8 mx-auto text-[#94A3B8] mb-4" />
             <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">Deploy</h3>
             <p className="text-sm text-[#94A3B8]">One-click deployment to EVM-compatible testnets and mainnets via integrated RPC routing.</p>
           </div>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-[#121A24] to-[#1A2332] border border-[#334155] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div>
             <h2 className="text-2xl font-bold text-[#F5F7FA] mb-2">Cost Comparison</h2>
             <p className="text-[#94A3B8] text-sm max-w-sm mb-6 md:mb-0">Traditional smart contract development and auditing costs scale linearly. AXTG AI scales logarithmically.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col items-center md:items-end">
             <div className="flex items-center space-x-4 mb-3">
               <span className="text-sm text-[#FF5C6C] line-through decoration-red-900/50">Trad Dev: $45,000+</span>
             </div>
             <div className="flex items-center space-x-3 bg-[#0B0F14] px-6 py-4 rounded-xl border border-[#00E0C7]/30 shadow-[0_0_20px_rgba(0,224,199,0.1)]">
               <span className="text-xl font-bold text-[#00E0C7] font-mono">AXTG: Free</span>
               <span className="text-xs text-[#94A3B8]">/ during beta</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Shield(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2.5 7-4.2a1 1 0 0 1 1 0c3 1.7 5 3.2 7 4.2a1 1 0 0 1 1 1v7z"/></svg>;
}
