"use client";

import { motion } from "framer-motion";
import { Bot, Terminal, ShieldCheck, LineChart, FileText, ArrowRight } from "lucide-react";

const AGENT_DETAILS = [
  {
    role: "Token Architect System",
    icon: Bot,
    color: "text-[#00C2FF]",
    capabilities: ["Smart Contract Generation (Solidity/Rust)", "Tokenomics Modeling", "Vesting Schedule Logic", "Gas Optimization Analysis"],
    model: "AXTG-Core-Code (GPT-4o fine-tuned on EVM)",
  },
  {
    role: "Regulatory & Compliance Agent",
    icon: ShieldCheck,
    color: "text-[#00E0C7]",
    capabilities: ["Jurisdiction Screening (US, MiCA, MAS)", "Transfer Restriction Rules", "KYC/AML Oracle Integration", "Real-time Regulatory Alerts"],
    model: "AXTG-Legal (Claude 3.5 Sonnet + Legal Corpus)",
  },
  {
    role: "Institutional Document Generator",
    icon: FileText,
    color: "text-[#D4A64A]",
    capabilities: ["Whitepaper & Litepaper Drafting", "SPV Operating Agreements", "PPM/Term Sheet Builder", "Investor Deck Structuring"],
    model: "AXTG-DocGen (Multi-LLM Ensemble router)",
  },
  {
    role: "Market Intelligence Oracle",
    icon: LineChart,
    color: "text-[#FF5C6C]",
    capabilities: ["On-chain Liquidity Analysis", "Competitor Protocol Audits", "OTC Price Aggregation", "Sentiment & Social Scoring"],
    model: "AXTG-MarketData (Real-time Web Search + Graph)",
  }
];

export default function AiAgentsPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0C7] blur-[150px] opacity-10 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-[#F5F7FA]">
              The Orchestrator & The Operatives
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-4">
              Behind the AXTG Chat interface is a swarm of specialized, fine-tuned agentic models designed to automate complex financial engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow UI Mock */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-8 mb-20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,194,255,0.05)_0%,transparent_70%)]" />
           
           <div className="w-full md:w-1/2 pr-0 md:pr-12 relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-[#F5F7FA]">One Prompt. <br/>Four Workstreams.</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                When you input a request like <i>"Build a carbon credit-backed stablecoin for European markets"</i>, the Orchestrator distributes the task. The Token Architect writes the contract, Compliance checks MiCA regulations, Docs generates the whitepaper, and Markets assesses the current carbon price index—all in parallel.
              </p>
              <button className="flex items-center text-[#00E0C7] font-semibold hover:text-[#F5F7FA] transition-colors">
                Try the Orchestrator Demo <ArrowRight className="ml-2 w-4 h-4" />
              </button>
           </div>
           
           <div className="w-full md:w-1/2 mt-12 md:mt-0 relative z-10">
              <div className="bg-[#121A24] border border-[#334155] rounded-xl p-4 font-mono text-xs text-[#00E0C7]">
                 <div className="flex items-center text-[#94A3B8] mb-4 border-b border-[#334155] pb-2">
                   <Terminal className="w-4 h-4 mr-2" /> Orchestrator Trace Log
                 </div>
                 <div className="space-y-2 opacity-80">
                   <div>&gt; _Parsing intent: asset_creation, target=carbon_stablecoin, reg=EU</div>
                   <div className="text-[#D4A64A]">&gt; _Routing [ComplianceAgent] Task IDs: C-8812...</div>
                   <div className="text-[#00C2FF]">&gt; _Routing [TokenArchitect] Task IDs: T-9921...</div>
                   <div className="text-[#FF5C6C]">&gt; _Routing [DocGenAgent] Task IDs: D-4432...</div>
                   <div className="mt-4 text-[#F5F7FA]">&gt; _Synthesizing results into Workspace... OK.</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Detailed Agent Cards */}
        <h2 className="text-3xl font-bold font-heading text-center mb-16 text-[#F5F7FA]">The Swarm Directory</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AGENT_DETAILS.map((agent, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-8 hover:border-[#334155] transition-all"
            >
               <div className="flex items-center space-x-4 mb-6">
                 <div className={`w-14 h-14 rounded-xl bg-[#0A0F15] border border-[#1E293B] flex items-center justify-center`}>
                   <agent.icon className={`w-7 h-7 ${agent.color}`} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#F5F7FA]">{agent.role}</h3>
                   <p className="text-xs text-[#94A3B8] mt-1 font-mono">Engine: {agent.model}</p>
                 </div>
               </div>
               
               <h4 className="text-sm font-semibold text-[#F5F7FA] mb-3 border-b border-[#1E293B] pb-2">Key Competencies</h4>
               <ul className="space-y-2">
                 {agent.capabilities.map((cap, i) => (
                   <li key={i} className="flex items-start text-sm text-[#94A3B8]">
                     <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 shrink-0 ${agent.color.replace('text-', 'bg-')}`} />
                     {cap}
                   </li>
                 ))}
               </ul>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
