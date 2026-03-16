"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";

export default function MarketsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading text-[#F5F7FA] mb-2 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-[#00E0C7]" />
            Market Intelligence
          </h1>
          <p className="text-[#94A3B8]">Real-time analytics and institutional-grade charting.</p>
        </div>
        
        {/* View Toggles */}
        <div className="hidden lg:flex p-1 bg-[#121A24] rounded-lg border border-[#1E293B]">
          <button className="px-4 py-1.5 text-xs font-semibold bg-[#1E293B] text-[#F5F7FA] rounded shadow-sm">Institutional</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F5F7FA]">Founder</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F5F7FA]">Treasury</button>
        </div>
      </div>

      {/* Hero Chart Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-96 bg-[#0B0F14] border border-[#1E293B] rounded-xl flex flex-col justify-between p-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: "linear-gradient(#00C2FF 1px, transparent 1px), linear-gradient(to right, #00C2FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)"
        }}></div>

        <div className="relative z-10 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl font-bold text-[#F5F7FA] font-heading">AXTG</span>
              <span className="text-xs text-[#94A3B8] bg-[#121A24] px-2 py-1 rounded border border-[#1E293B]">OTC Markets</span>
            </div>
            <div className="text-3xl font-mono text-[#F5F7FA]">$1.24 <span className="text-lg text-[#00E0C7]">+5.2%</span></div>
          </div>
          <div className="flex space-x-2">
            {["1D", "1W", "1M", "YTD", "1Y"].map(period => (
              <button key={period} className={`text-xs px-2 py-1 rounded ${period === "1W" ? "bg-[#1E293B] text-[#F5F7FA]" : "text-[#94A3B8] hover:bg-[#121A24]"}`}>
                {period}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 h-32 flex items-end w-full">
           {/* Fake SVG Chart area */}
           <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M0 100 L0 50 L10 40 L20 60 L30 30 L40 45 L50 20 L60 35 L70 10 L80 25 L90 5 L100 0 L100 100 Z" fill="url(#gradient)" opacity="0.2" />
             <path d="M0 50 L10 40 L20 60 L30 30 L40 45 L50 20 L60 35 L70 10 L80 25 L90 5 L100 0" fill="none" stroke="#00C2FF" strokeWidth="2" vectorEffect="non-scaling-stroke" />
             <defs>
               <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#00C2FF" stopOpacity="1" />
                 <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
               </linearGradient>
             </defs>
           </svg>
        </div>
      </motion.div>

      {/* Mini Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { ticker: "BTC", price: "$64,230.50", change: "+2.4%", up: true },
          { ticker: "ETH", price: "$3,450.80", change: "-1.2%", up: false },
          { ticker: "SOL", price: "$145.20", change: "+5.1%", up: true },
        ].map(asset => (
          <div key={asset.ticker} className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 hover:border-[#00C2FF]/50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#F5F7FA]">{asset.ticker}</span>
              <Eye className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00C2FF] transition-colors" />
            </div>
            <div className="text-xl font-mono text-[#F5F7FA]">{asset.price}</div>
            <div className={`text-sm flex items-center mt-2 ${asset.up ? "text-[#00E0C7]" : "text-[#FF5C6C]"}`}>
              {asset.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
              {asset.change}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
