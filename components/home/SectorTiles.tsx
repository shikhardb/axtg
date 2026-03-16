"use client";

import { motion } from "framer-motion";

const SECTORS = [
  "Carbon Credits",
  "Stablecoins",
  "OTC Public Company Digital Asset Strategy",
  "RWA Tokenization",
  "DeFi Infrastructure",
  "Institutional Wallet & Treasury",
  "NFT / IP Monetization",
  "AI-linked Digital Assets",
];

export function SectorTiles() {
  return (
    <section className="py-24 bg-[#0B0F14] border-t border-[#1E293B] relative overflow-hidden">
      {/* Aesthetic glowing background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#00C2FF] rounded-[100%] mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold font-heading mb-4 text-[#F5F7FA]">
            Purpose-Built for Every Asset Class
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            Whether you're structuring traditional securities, utility tokens, or complex decentralized finance protocols, AXTG AI provides tailored workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SECTORS.map((sector, idx) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass p-6 rounded-xl border border-[#1E293B] hover:border-[#00C2FF]/50 transition-colors flex items-center justify-center text-center group cursor-pointer"
            >
              <span className="text-sm font-medium text-[#94A3B8] group-hover:text-[#F5F7FA] transition-colors">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
