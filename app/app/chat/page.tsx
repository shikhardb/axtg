"use client";

import { motion } from "framer-motion";
import { Mic, Paperclip, Send, Bot, Sparkles, Code2, ShieldAlert, FileText, Download } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading text-[#F5F7FA] flex items-center">
            <Sparkles className="w-5 h-5 text-[#00C2FF] mr-2" />
            AXTG AI Orchestrator
          </h1>
          <p className="text-sm text-[#94A3B8] mt-1">Chat securely with the master AI. Your data is encrypted and not used for training.</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#00E0C7] animate-pulse" />
          <span className="text-xs text-[#00E0C7] font-mono">System Ready</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-6 pb-6 scrollbar-thin scrollbar-thumb-[#1E293B]">
        {/* User Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <div className="max-w-[80%] bg-[#1E293B] text-[#F5F7FA] rounded-2xl rounded-tr-sm p-4 text-sm leading-relaxed border border-[#334155]">
            Create a stablecoin model backed by treasury assets. I need a technical outline and regulatory approach for the US.
          </div>
        </motion.div>

        {/* AI Response Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-start"
        >
          <div className="max-w-[90%] bg-gradient-to-br from-[#0B0F14] to-[#121A24] border border-[#1E293B] rounded-2xl rounded-tl-sm p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E0C7]" />
            
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-[#00C2FF]/10 flex items-center justify-center mr-3">
                <Bot className="w-4 h-4 text-[#00C2FF]" />
              </div>
              <span className="font-semibold text-[#F5F7FA]">AXTG AI</span>
              <span className="mx-2 text-[#334155]">|</span>
              <span className="text-xs text-[#94A3B8] font-mono">Generating Executive Briefing...</span>
            </div>

            <div className="space-y-6 text-sm text-[#F5F7FA] leading-relaxed">
              <p>
                Based on your request, I've engaged the <span className="text-[#00C2FF]">Token Architect</span> and <span className="text-[#D4A64A]">Compliance</span> Agents to map out a Treasury-Backed Stablecoin Model for the U.S. Jurisdiction.
              </p>
              
              {/* Executive Summary Block */}
              <div className="bg-[#121A24] rounded-lg border border-[#1E293B] p-4">
                <h4 className="font-semibold text-[#00C2FF] mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2" /> Executive Summary
                </h4>
                <p className="text-[#94A3B8]">
                  Structure: Fiat-collateralized stablecoin pegged to 1 USD.<br/>
                  Backing: Short-term U.S. Treasury Bills (90-day avg duration) and USD Overnight Repo.<br/>
                  Standard: ERC-20 with upgradeable proxy pattern and integrated blocklist functionality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-4">
                    <h4 className="font-semibold text-[#D4A64A] mb-2 flex items-center">
                      <ShieldAlert className="w-4 h-4 mr-2" /> Compliance & Legal
                    </h4>
                    <ul className="text-xs text-[#94A3B8] space-y-2 list-disc pl-4">
                      <li>Money Transmitter Licenses (MTLs) required in 49 states.</li>
                      <li>FinCEN registration as an MSB (Money Services Business).</li>
                      <li>Must enforce NYDFS reserve reporting standards (monthly attestations).</li>
                    </ul>
                 </div>
                 
                 <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-4">
                    <h4 className="font-semibold text-[#00E0C7] mb-2 flex items-center">
                      <Code2 className="w-4 h-4 mr-2" /> Technical Architecture
                    </h4>
                    <ul className="text-xs text-[#94A3B8] space-y-2 list-disc pl-4">
                      <li>Minting requires external Off-Chain oracle proving reserve 1:1.</li>
                      <li>Role-based access: `MINTER_ROLE`, `PAUSER_ROLE`, `BLACKLIST_ROLE`.</li>
                      <li>Smart contracts should implement ERC-3539 for attestation registries.</li>
                    </ul>
                 </div>
              </div>

              <p>Would you like me to draft the SPV operating agreement or simulate the Smart Contract architecture?</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]">
                <button className="flex items-center px-4 py-2 text-xs font-semibold rounded bg-[#1A2E3B] text-[#00C2FF] border border-[#00C2FF]/30 hover:bg-[#00C2FF]/20 transition-colors">
                  <FileText className="w-3 h-3 mr-2" />
                  Draft Operating Agreement
                </button>
                <button className="flex items-center px-4 py-2 text-xs font-semibold rounded bg-[#1A332E] text-[#00E0C7] border border-[#00E0C7]/30 hover:bg-[#00E0C7]/20 transition-colors">
                  <Code2 className="w-3 h-3 mr-2" />
                  Simulate Smart Contract
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded text-[#94A3B8] hover:text-[#F5F7FA] ml-auto transition-colors">
                  <Download className="w-3 h-3" /> Export to PDF
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Input Area */}
      <div className="mt-4">
        {/* Suggestion Chips */}
        <div className="flex space-x-2 overflow-x-auto pb-3 scrollbar-hide">
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#121A24] text-xs text-[#94A3B8] hover:text-[#00C2FF] hover:border-[#00C2FF]/50 transition-colors">
            Compare Dubai vs Wyoming
          </button>
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#121A24] text-xs text-[#94A3B8] hover:text-[#00C2FF] hover:border-[#00C2FF]/50 transition-colors">
            Draft a 12-page lite paper
          </button>
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#121A24] text-xs text-[#94A3B8] hover:text-[#00C2FF] hover:border-[#00C2FF]/50 transition-colors">
            Design carbon credit token with insurance
          </button>
        </div>

        <div className="relative flex items-center bg-[#0B0F14] border border-[#334155] rounded-xl focus-within:border-[#00C2FF] focus-within:ring-1 focus-within:ring-[#00C2FF]/50 transition-all p-2 pr-4 shadow-lg">
          <button className="p-2 text-[#94A3B8] hover:text-[#00C2FF] transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <input 
            type="text" 
            placeholder="Instruct the AI Orchestrator... (e.g. 'Build me a carbon-backed token model')"
            className="flex-1 bg-transparent border-none text-sm text-[#F5F7FA] placeholder:text-[#475569] focus:outline-none focus:ring-0 px-2 leading-relaxed"
          />
          <div className="flex items-center space-x-2 ml-2">
             <button className="p-2 text-[#94A3B8] hover:text-[#F5F7FA] transition-colors hidden sm:block">
              <Mic className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00C2FF] to-[#00E0C7] flex items-center justify-center text-[#0B0F14] hover:opacity-90 shadow-[0_0_10px_rgba(0,194,255,0.3)] transition-all transform hover:scale-105">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
