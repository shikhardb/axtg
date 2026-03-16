"use client";

import { Activity, Coins, Wallet, BarChart2, PlusCircle, ArrowRight, TrendingUp, ShieldAlert } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      
      {/* Top Header matching mockup */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-4">
        <h1 className="text-xl font-bold font-heading text-[#F5F7FA] flex items-center">
          <Activity className="w-5 h-5 mr-3 text-[#00E0C7]" />
          Dashboard
        </h1>
        <div className="flex space-x-4">
           <div className="text-xs bg-[#121A24] border border-[#1E293B] rounded px-3 py-1 text-[#94A3B8]">Network: Online</div>
           <div className="text-xs bg-[#121A24] border border-[#1E293B] rounded px-3 py-1 text-[#94A3B8]">Account Settings</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Top Summary Widgets spanning full width horizontally */}
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
           <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex justify-between items-center shadow-md">
             <div>
               <div className="text-[11px] text-[#94A3B8] uppercase font-semibold tracking-wider mb-1">Token Overview</div>
               <div className="text-2xl font-bold text-[#F5F7FA]">4 Active</div>
             </div>
             <div className="w-12 h-12 bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
               <Coins className="w-6 h-6 text-blue-500" />
             </div>
           </div>
           
           <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex justify-between items-center shadow-md">
             <div>
               <div className="text-[11px] text-[#94A3B8] uppercase font-semibold tracking-wider mb-1">Treasury Value</div>
               <div className="text-2xl font-bold text-[#F5F7FA] font-mono">$18,311<span className="text-sm text-[#00E0C7]">.00</span></div>
             </div>
             <div className="w-12 h-12 bg-[#00E0C7]/10 rounded-lg border border-[#00E0C7]/20 flex items-center justify-center">
               <span className="font-bold text-[#00E0C7]">USDT</span>
             </div>
           </div>

           <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex justify-between items-center shadow-md">
             <div>
               <div className="text-[11px] text-[#94A3B8] uppercase font-semibold tracking-wider mb-1">Reserve Holdings</div>
               <div className="text-2xl font-bold text-[#F5F7FA] font-mono">37.2 <span className="text-sm text-[#D4A64A]">ETH</span></div>
             </div>
             <div className="w-12 h-12 bg-[#D4A64A]/10 rounded-lg border border-[#D4A64A]/20 flex items-center justify-center">
               <Wallet className="w-6 h-6 text-[#D4A64A]" />
             </div>
           </div>
        </div>

        {/* Content Section: 3 Columns */}
        {/* Col 1: Token List & Mini Stats */}
        <div className="col-span-1 md:col-span-3 space-y-6">
           <div className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-5 shadow-lg relative overflow-hidden h-40 flex items-center justify-center flex-col text-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.1)_0%,transparent_100%)]" />
             <div className="w-12 h-12 bg-[#121A24] border border-[#334155] rounded-xl flex items-center justify-center transform rotate-45 mb-4 z-10 shadow-[0_0_15px_rgba(0,194,255,0.3)]">
               <Coins className="w-5 h-5 text-[#00C2FF] -rotate-45" />
             </div>
             <h3 className="text-sm font-bold text-[#F5F7FA] z-10">Alpha Token</h3>
             <p className="text-[10px] text-[#94A3B8] z-10">Utility Class • Live</p>
           </div>

           <div className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-5 shadow-lg">
             <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4 border-b border-[#1E293B] pb-2">Recent Metrics</h4>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center text-[#94A3B8]"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"/> Holders</span>
                  <span className="font-mono text-[#F5F7FA]">1,204</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center text-[#94A3B8]"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] mr-2"/> Transfer Vol</span>
                  <span className="font-mono text-[#F5F7FA]">$45k</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center text-[#94A3B8]"><div className="w-1.5 h-1.5 rounded-full bg-[#00E0C7] mr-2"/> Market Cap</span>
                  <span className="font-mono text-[#F5F7FA]">$1.2M</span>
                </div>
             </div>
           </div>
        </div>

        {/* Col 2: Charts Area */}
        <div className="col-span-1 md:col-span-6 space-y-6">
           {/* Chart 1 */}
           <div className="bg-[#0B0F14] border border-[#1E293B] rounded-xl p-5 shadow-lg min-h-[220px] flex flex-col">
              <h3 className="text-sm font-bold text-[#F5F7FA] mb-4">Market Overview</h3>
              <div className="flex-1 relative border border-[#1E293B] rounded-lg bg-[#121A24] overflow-hidden flex items-end">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 100 L0 60 L10 50 L20 65 L30 40 L40 55 L50 25 L60 30 L70 15 L80 40 L90 5 L100 20 L100 100 Z" fill="rgba(0,224,199,0.1)" />
                  <path d="M0 60 L10 50 L20 65 L30 40 L40 55 L50 25 L60 30 L70 15 L80 40 L90 5 L100 20" fill="none" stroke="#00E0C7" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
           </div>
           
           {/* Chart 2 */}
           <div className="bg-[#0B0F14] border border-[#1E293B] rounded-xl p-5 shadow-lg min-h-[220px] flex flex-col">
              <h3 className="text-sm font-bold text-[#F5F7FA] mb-4">Volume Overview</h3>
              <div className="flex-1 relative border border-[#1E293B] rounded-lg bg-[#121A24] overflow-hidden flex items-end">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 100 L0 80 L15 75 L30 85 L45 60 L60 70 L75 40 L90 60 L100 30 L100 100 Z" fill="rgba(0,194,255,0.1)" />
                  <path d="M0 80 L15 75 L30 85 L45 60 L60 70 L75 40 L90 60 L100 30" fill="none" stroke="#00C2FF" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
           </div>
        </div>

        {/* Col 3: Quick Actions & Status */}
        <div className="col-span-1 md:col-span-3 space-y-6">
           <div className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-5 shadow-lg">
             <h4 className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4 border-b border-[#1E293B] pb-2 text-right">Rapid Actions</h4>
             <div className="space-y-2">
               <button className="w-full bg-[#121A24] hover:bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex justify-between items-center transition-colors">
                 <span className="text-xs text-[#94A3B8] font-medium">Mint Assets</span>
                 <PlusCircle className="w-4 h-4 text-[#00C2FF]" />
               </button>
               <button className="w-full bg-[#121A24] hover:bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex justify-between items-center transition-colors">
                 <span className="text-xs text-[#94A3B8] font-medium">Transfer Balances</span>
                 <ArrowRight className="w-4 h-4 text-[#D4A64A]" />
               </button>
               <button className="w-full bg-[#121A24] hover:bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex justify-between items-center transition-colors">
                 <span className="text-xs text-[#94A3B8] font-medium">Compliance Review</span>
                 <ShieldAlert className="w-4 h-4 text-[#FF5C6C]" />
               </button>
               <button className="w-full bg-[#121A24] hover:bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex justify-between items-center transition-colors">
                 <span className="text-xs text-[#94A3B8] font-medium">Yield Strategy</span>
                 <TrendingUp className="w-4 h-4 text-[#00E0C7]" />
               </button>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
