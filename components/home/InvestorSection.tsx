"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Handshake, Landmark, Newspaper } from "lucide-react";

export function InvestorSection() {
  return (
    <section className="py-24 bg-[#0B0F14] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - OTC Widget & Corporate Summary */}
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6 text-[#F5F7FA]">
              Backed by Public Markets. Built for Institutions.
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              AXTG AI is developed by a publicly traded entity focused on bridging traditional finance and compliant digital asset infrastructure.
            </p>
            
            {/* OTC Mock Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-[#1E293B] mb-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs text-[#94A3B8] font-mono tracking-widest uppercase mb-1">OTC Markets Group</div>
                  <div className="text-3xl font-bold font-heading text-[#F5F7FA]">AXTG</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono text-[#F5F7FA]">$1.24</div>
                  <div className="text-sm text-[#00E0C7] flex items-center justify-end">
                    +0.06 (5.2%) <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#94A3B8] border-t border-[#1E293B] pt-4 mt-4">
                <span>Vol: 1.2M</span>
                <span>Mkt Cap: $48M</span>
                <span>Delayed 15m</span>
              </div>
            </motion.div>
            
            <a href="/investors" className="text-[#00C2FF] font-medium flex items-center hover:opacity-80 transition-opacity">
              Visit Corporate Investor Portal <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Right Column - Corporate Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center mb-4">
                <Newspaper className="w-5 h-5 text-[#D4A64A]" />
              </div>
              <h3 className="text-[#F5F7FA] font-semibold mb-2">Latest News</h3>
              <p className="text-sm text-[#94A3B8]">
                AXTG announces launch of Next-Gen AI Document Generator for RWA Issuers.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl border border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center mb-4">
                <Handshake className="w-5 h-5 text-[#00E0C7]" />
              </div>
              <h3 className="text-[#F5F7FA] font-semibold mb-2">Partnerships</h3>
              <p className="text-sm text-[#94A3B8]">
                New strategic integration with leading MPC wallet infrastructure provider.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl border border-[#1E293B] sm:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5 text-[#00C2FF]" />
              </div>
              <h3 className="text-[#F5F7FA] font-semibold mb-2">Regulatory Focus</h3>
              <p className="text-sm text-[#94A3B8]">
                Our platform is designed from the ground up to support multi-jurisdictional compliance frameworks, offering structured issuance tools for Wyoming, FINMA, MAS, and MiCA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
