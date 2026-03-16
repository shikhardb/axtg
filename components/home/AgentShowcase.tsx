"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, ShieldCheck, FileText } from "lucide-react";

const AGENTS = [
  {
    role: "Token Architect Agent",
    description: "Designs token economics, supply models, and governance architecture.",
    icon: Bot,
    color: "from-[#F5F7FA] to-[#94A3B8]",
    glow: "bg-blue-300",
  },
  {
    role: "Compliance Agent",
    description: "Evaluates jurisdictional risk, KYC workflows, and issuance readiness.",
    icon: ShieldCheck,
    color: "from-[#00E0C7] to-[#00C2FF]",
    glow: "bg-[#00E0C7]",
  },
  {
    role: "Market Intelligence Agent",
    description: "Analyzes real-time market sentiment and token sector trends.",
    icon: LineChart,
    color: "from-[#D4A64A] to-[#F59E0B]",
    glow: "bg-[#D4A64A]",
  },
  {
    role: "Document Agent",
    description: "Generates whitepapers, term sheets, and investor decks on demand.",
    icon: FileText,
    color: "from-[#FF5C6C] to-[#EF4444]",
    glow: "bg-[#FF5C6C]",
  },
];

export function AgentShowcase() {
  return (
    <section className="py-24 bg-[#0A0F15] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading mb-12 text-[#F5F7FA]">
          AI Agents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((agent, idx) => (
            <motion.div
              key={agent.role}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-b from-[#121A24] to-[#0A0F15] border border-[#1E293B] hover:border-[#334155] rounded-2xl p-5 flex flex-col justify-between h-[340px] shadow-2xl group relative overflow-hidden"
            >
              {/* Top abstract graphic representation for each card */}
              <div className="h-32 rounded-xl mb-4 relative overflow-hidden bg-[#1A2332] border border-[#334155] flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
                 {/* Hexagon/Cube pseudo element */}
                 <div className="w-16 h-16 relative flex items-center justify-center">
                   <div className={`absolute inset-0 bg-gradient-to-tr ${agent.color} opacity-40 blur-md rounded-full`} />
                   <div className="w-12 h-12 bg-[#0B0F14] border border-[#334155] flex items-center justify-center transform rotate-45 rounded">
                     <agent.icon className={`w-6 h-6 transform -rotate-45 text-white shadow-sm`} />
                   </div>
                 </div>
                 {/* Specular highlight */}
                 <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-2 text-[#F5F7FA]">{agent.role}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{agent.description}</p>
              </div>
              
              <button className="w-full mt-4 py-2 text-xs font-semibold text-[#F5F7FA] bg-gradient-to-r from-[#122A40] to-[#0A4166] group-hover:from-[#00C2FF] group-hover:to-[#0088FF] rounded border border-[#1E3A5F] group-hover:border-[#00C2FF] transition-all shadow-md">
                Run Agent &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
