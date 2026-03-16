"use client";

import { motion } from "framer-motion";
import { Coins, Layers, ShieldCheck, FileText } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Create a Token",
    description: "Launch ERC-20, ERC-3643, NFTs",
    icon: Coins,
    color: "text-[#D4A64A]",
  },
  {
    title: "Structure an Asset",
    description: "Build equity, carbon-backed assets",
    icon: Layers,
    color: "text-[#00C2FF]",
  },
  {
    title: "Run Compliance",
    description: "Automate KYC/AML screening",
    icon: ShieldCheck,
    color: "text-[#00E0C7]",
  },
  {
    title: "Generate Documents",
    description: "Draft tokenomics and memos",
    icon: FileText,
    color: "text-[#F5F7FA]",
  },
];

export function CapabilityCards() {
  return (
    <section className="pb-16 pt-0 bg-[#0A0F15] relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-[#121A24] to-[#0A0F15] border border-[#1E293B] p-4 rounded-xl cursor-pointer hover:border-[#00C2FF]/50 transition-colors duration-300 flex items-center space-x-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] bg-[#1A2332] flex items-center justify-center shrink-0 border border-[#334155]">
                <cap.icon className={`w-5 h-5 ${cap.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F7FA]">{cap.title}</h3>
                <p className="text-[10px] text-[#94A3B8] leading-snug tracking-wide truncate">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
