"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Trees, Landmark, Coins, ArrowRight } from "lucide-react";

const SECTORS = [
  { id: "rwa", name: "Real Estate & RWA", icon: Building2 },
  { id: "carbon", name: "Carbon Credits", icon: Trees },
  { id: "private_equity", name: "Private Equity", icon: Landmark },
  { id: "stablecoin", name: "Stablecoins", icon: Coins },
];

const CONTENT: Record<string, { title: string, desc: string, before: string, after: string }> = {
  "rwa": {
    title: "Fractionalize Commercial Real Estate",
    desc: "Transform illiquid property portofolios into tradable digital assets with baked-in compliance.",
    before: "18-month syndication process, $100k+ in legal fees, locked liquidity for 5-7 years.",
    after: "AI-generated SPV structures in minutes. Automated cap table management and secondary liquidity pools."
  },
  "carbon": {
    title: "Transparent Ecology & Carbon Markets",
    desc: "Verifiable, on-chain carbon offset registries that eliminate double-spending.",
    before: "Opaque OTC registries, high broker fees, difficulty verifying actual retirement of credits.",
    after: "Public ledger verification, API-driven retirement, and tokenized forwards for project financing."
  },
  "private_equity": {
    title: "Liquid Private Markets",
    desc: "Tokenize fund LP positions to allow for secondary trading while enforcing strict KYC/AML lockups.",
    before: "Manual PDF subscription agreements, 60-day transfer approvals, strictly illiquid.",
    after: "Automated subscription via Smart Contracts, instantaneous compliant transfers using the ERC-3643 standard."
  },
  "stablecoin": {
    title: "Yield-Bearing Fiat Equivalents",
    desc: "Launch your own compliant, treasury-backed stablecoin tailored to your jurisdiction.",
    before: "Massive banking integration hurdles, fragmented multi-state MTL licensing.",
    after: "AXTG Compliance Agents map regulatory requirements and orchestrate Proof of Reserve oracles instantly."
  }
};

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("rwa");

  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-[#F5F7FA]">
            Industry-Specific <span className="text-[#00C2FF]">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
             Tailored workflows for deploying capital and structuring assets across varied sectors.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         {/* Tabs */}
         <div className="flex flex-wrap justify-center gap-4 mb-16">
           {SECTORS.map(sector => (
             <button
               key={sector.id}
               onClick={() => setActiveTab(sector.id)}
               className={`flex items-center px-6 py-3 rounded-full border transition-all ${
                 activeTab === sector.id 
                   ? "bg-[#1E293B] border-[#00C2FF] text-[#F5F7FA] shadow-[0_0_15px_rgba(0,194,255,0.2)]" 
                   : "bg-[#0B0F14] border-[#1E293B] text-[#94A3B8] hover:border-[#334155]"
               }`}
             >
               <sector.icon className={`w-5 h-5 mr-3 ${activeTab === sector.id ? "text-[#00C2FF]" : ""}`} />
               <span className="font-semibold">{sector.name}</span>
             </button>
           ))}
         </div>

         {/* Content Area */}
         <div className="bg-[#0D141C] border border-[#1E293B] rounded-3xl p-8 md:p-12 shadow-2xl min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               transition={{ duration: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-12"
             >
               <div>
                 <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">{CONTENT[activeTab].title}</h2>
                 <p className="text-[#94A3B8] text-lg mb-10 leading-relaxed">{CONTENT[activeTab].desc}</p>
                 
                 <div className="space-y-6">
                   <div className="bg-[#121A24] border-l-4 border-[#FF5C6C] p-6 rounded-r-xl">
                      <div className="text-xs text-[#FF5C6C] uppercase font-bold tracking-widest mb-2">Before AXTG</div>
                      <p className="text-[#94A3B8]">{CONTENT[activeTab].before}</p>
                   </div>
                   <div className="bg-[#121A24] border-l-4 border-[#00E0C7] p-6 rounded-r-xl shadow-[0_0_20px_rgba(0,224,199,0.05)]">
                      <div className="text-xs text-[#00E0C7] uppercase font-bold tracking-widest mb-2">With AXTG AI</div>
                      <p className="text-[#F5F7FA]">{CONTENT[activeTab].after}</p>
                   </div>
                 </div>
               </div>
               
               <div className="flex flex-col justify-center">
                  <div className="bg-[#0B0F14] border border-[#1E293B] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <h3 className="text-xl font-bold text-[#F5F7FA] mb-4 relative z-10">Start Building in this Sector</h3>
                     <p className="text-[#94A3B8] text-sm mb-6 relative z-10">Launch a tailored AI orchestrated workflow specialized for {SECTORS.find(s=>s.id === activeTab)?.name}.</p>
                     
                     <form className="w-full space-y-4 relative z-10">
                       <input type="email" placeholder="Work Email" className="w-full bg-[#1A2332] border border-[#334155] rounded-lg px-4 py-3 text-[#F5F7FA] focus:outline-none focus:border-[#00C2FF] transition-colors" />
                       <button type="button" className="w-full flex items-center justify-center bg-gradient-to-r from-[#00C2FF] to-[#0088FF] text-[#F5F7FA] font-semibold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,194,255,0.4)] transition-all">
                         Request Enterprise Demo <ArrowRight className="w-4 h-4 ml-2" />
                       </button>
                     </form>
                  </div>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>
      </section>
    </div>
  );
}
