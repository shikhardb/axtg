"use client";

import { Wallet, ArrowUpRight, ArrowDownRight, Server, Repeat, Send } from "lucide-react";

export default function TreasuryPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-6 shadow-sm">
        <div>
           <h1 className="text-2xl font-bold font-heading text-[#F5F7FA] flex items-center mb-1">
             <Wallet className="w-6 h-6 mr-3 text-[#D4A64A]" />
             Treasury Management
           </h1>
           <p className="text-sm text-[#94A3B8]">Manage multi-sig wallets, reserves, and protocol revenue.</p>
        </div>
        <div className="flex space-x-3 items-center">
           <div className="text-xs bg-[#1A2332] border border-[#334155] px-3 py-2 rounded text-[#94A3B8] flex items-center font-mono">
             <Server className="w-4 h-4 mr-2" /> Fireblocks Vault: Connected
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Total Balance Card */}
         <div className="bg-gradient-to-br from-[#121A24] to-[#0A0F15] border border-[#1E293B] rounded-2xl p-8 shadow-md lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="text-xs text-[#94A3B8] uppercase font-bold tracking-wider mb-2">Total Treasury Value</div>
              <div className="text-4xl font-mono text-[#F5F7FA] mb-4">$3,245,100<span className="text-lg text-[#00E0C7]">.50</span></div>
              <div className="flex items-center text-sm font-semibold text-[#00E0C7]">
                 <ArrowUpRight className="w-4 h-4 mr-1" /> +$12,400 (30d)
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full flex justify-center items-center px-4 py-3 bg-[#00E0C7] text-[#0A0F15] font-bold rounded-lg hover:bg-[#00E0C7]/90 transition-colors shadow-lg">
                 <Send className="w-4 h-4 mr-2" /> Disperse Funds
              </button>
              <button className="w-full flex justify-center items-center px-4 py-3 bg-[#1A2332] text-[#F5F7FA] font-medium rounded-lg border border-[#334155] hover:bg-[#1E293B] transition-colors">
                 <Repeat className="w-4 h-4 mr-2" /> Convert Assets
              </button>
            </div>
         </div>

         {/* Asset Allocation */}
         <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-6 shadow-md lg:col-span-2">
            <h2 className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wider flex items-center mb-6">Asset Allocation</h2>
            
            <div className="space-y-4">
               {[
                 { asset: "USDC", name: "USD Coin", amount: "2,000,000.00", value: "$2,000,000.00", pct: "61%", color: "bg-[#00C2FF]" },
                 { asset: "USDT", name: "Tether USD", amount: "500,000.00", value: "$500,105.00", pct: "15%", color: "bg-[#00E0C7]" },
                 { asset: "ETH", name: "Ethereum", amount: "215.4", value: "$743,306.90", pct: "23%", color: "bg-[#D4A64A]" },
                 { asset: "AXTG", name: "AXTG Native", amount: "15,000.00", value: "$1,688.60", pct: "1%", color: "bg-[#FF5C6C]" },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between p-4 bg-[#121A24] border border-[#1E293B] rounded-xl hover:border-[#334155] transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[#0A0F15] ${item.color}`}>{item.asset}</div>
                      <div>
                        <div className="font-bold text-[#F5F7FA]">{item.asset}</div>
                        <div className="text-xs text-[#94A3B8]">{item.name}</div>
                      </div>
                    </div>
                    
                    <div className="text-right flex-1 px-8 hidden sm:block">
                      <div className="w-full bg-[#0B0F14] h-1.5 rounded-full overflow-hidden border border-[#1E293B]">
                        <div className={`h-full ${item.color}`} style={{ width: item.pct }} />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono text-[#F5F7FA]">{item.amount}</div>
                      <div className="text-xs text-[#94A3B8] font-mono">{item.value}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Yield & Strategies Section */}
      <div className="bg-[#121A24] border border-[#1E293B] border-dashed rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden group hover:border-[#D4A64A]/50 transition-colors">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A64A] blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity" />
         <div className="relative z-10 mb-6 md:mb-0">
           <h3 className="text-xl font-bold font-heading text-[#F5F7FA] mb-2 flex items-center">
             Idle Treasury Generating 0% Yield.
           </h3>
           <p className="text-[#94A3B8] text-sm max-w-md">
             AXTG AI has detected $2.5M in idle stablecoin balances. You can deploy this capital into tokenized US Treasury Bills (T-Bills) or low-risk DeFi protocols to generate an estimated 4.5% APY.
           </p>
         </div>
         <div className="relative z-10 w-full md:w-auto text-center md:text-right">
            <div className="text-xs text-[#D4A64A] uppercase font-bold tracking-widest mb-2 border border-[#D4A64A]/20 bg-[#D4A64A]/10 px-3 py-1 rounded inline-block">Estimated ROI: +$112,500/year</div>
            <button className="w-full md:w-auto px-6 py-3 bg-[#0D141C] border border-[#D4A64A]/50 text-[#D4A64A] font-semibold rounded-lg hover:bg-[#D4A64A]/10 transition-colors shadow">
              Explore Yield Strategies
            </button>
         </div>
      </div>

    </div>
  );
}
