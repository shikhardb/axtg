"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Cpu, Activity, Database, Key } from "lucide-react";

export default function PlatformPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-[#00C2FF] blur-[120px] opacity-10 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-[#F5F7FA]">
              The Operating System for<br/>Institutional Digital Assets
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10">
              AXTG AI provides a unified infrastructure layer that connects enterprise capital markets to public blockchains through autonomous AI workflows.
            </p>
            <button className="px-8 py-4 rounded-md bg-gradient-to-r from-[#00C2FF] to-[#0088FF] text-[#F5F7FA] font-semibold mx-auto hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(0,194,255,0.4)]">
              Explore the Architecture
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-center mb-16 text-[#F5F7FA]">Core Infrastructure Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Layers, color: "text-[#00C2FF]", title: "Asset Structuring Engine", desc: "Define tokenomics, supply models, and cap tables. Supports standard ERC-20, compliance-ready ERC-3643, and SFTs." },
            { icon: Cpu, color: "text-[#D4A64A]", title: "AI Orchestration Layer", desc: "Multi-agent system that interprets natural language into smart contract code, legal documents, and compliance logic." },
            { icon: ShieldCheck, color: "text-[#00E0C7]", title: "Compliance & Identity Lab", desc: "Integrated KYC/AML, investor whitelisting, and automated sanctions screening tied directly to token transfer functions." },
            { icon: Database, color: "text-[#FF5C6C]", title: "Data & Market Intelligence", desc: "Real-time indexing of on-chain state married with off-chain Oracles (Chainlink/Pyth) for pricing and reserves." }
          ].map((feature, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-8 hover:border-[#334155] transition-colors"
             >
               <div className={`w-14 h-14 rounded-xl bg-[#0A0F15] border border-[#1E293B] flex items-center justify-center mb-6`}>
                 <feature.icon className={`w-7 h-7 ${feature.color}`} />
               </div>
               <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">{feature.title}</h3>
               <p className="text-[#94A3B8] leading-relaxed">{feature.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Security & Audit */}
      <section className="py-24 bg-[#0D141C] border-y border-[#1E293B]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <Key className="w-12 h-12 text-[#94A3B8] mb-6 opacity-50" />
            <h2 className="text-3xl font-bold font-heading mb-6 text-[#F5F7FA]">Enterprise-Grade Security</h2>
            <p className="text-[#94A3B8] max-w-2xl mb-12">
              Our smart contract templates undergo rigorous formal verification and third-party audits by leading security firms. Assets are protected by configurable multi-sig protocols and MPC wallet integrations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-[#1A2332] text-[#F5F7FA] font-medium rounded border border-[#334155]">CertiK Audited</div>
              <div className="px-6 py-3 bg-[#1A2332] text-[#F5F7FA] font-medium rounded border border-[#334155]">Quantstamp Verified</div>
              <div className="px-6 py-3 bg-[#1A2332] text-[#F5F7FA] font-medium rounded border border-[#334155]">Fireblocks Integrated</div>
            </div>
         </div>
      </section>

    </div>
  );
}
