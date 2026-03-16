"use client";

import { Layers, PieChart as PieChartIcon, Target, Users, Settings } from "lucide-react";

export default function StructuringPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-6 shadow-sm">
        <div>
           <h1 className="text-2xl font-bold font-heading text-[#F5F7FA] flex items-center mb-1">
             <Layers className="w-6 h-6 mr-3 text-[#D4A64A]" />
             Asset Structuring
           </h1>
           <p className="text-sm text-[#94A3B8]">Define cap tables, vesting schedules, and legal wrappers before execution.</p>
        </div>
        <div className="flex space-x-3">
           <button className="px-4 py-2 border border-[#334155] text-[#94A3B8] font-medium rounded-lg hover:text-[#F5F7FA] hover:bg-[#121A24] transition-colors text-sm">
             Export PDF Memo
           </button>
           <button className="px-4 py-2 bg-gradient-to-r from-[#D4A64A] to-[#F59E0B] text-[#0A0F15] font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm">
             Send to Smart Contract Studio
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Main Config Area */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* Cap Table Breakdown */}
            <div className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-6 shadow-md">
               <h2 className="text-lg font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-4">
                 <PieChartIcon className="w-5 h-5 mr-2 text-[#00C2FF]" /> Cap Table Distribution
               </h2>
               
               <div className="space-y-4">
                 {[
                   { name: "Treasury / Protocol", pct: 40, color: "bg-[#00C2FF]" },
                   { name: "Team & Founders", pct: 20, color: "bg-[#00E0C7]" },
                   { name: "Private Sale Investors", pct: 15, color: "bg-[#D4A64A]" },
                   { name: "Public Sale / Liquidity", pct: 25, color: "bg-[#FF5C6C]" },
                 ].map((alloc, idx) => (
                   <div key={idx} className="flex items-center">
                     <div className="w-48 text-sm font-medium text-[#c] text-[#F5F7FA] truncate">{alloc.name}</div>
                     <div className="flex-1 mx-4 bg-[#0B0F14] h-3 rounded-full overflow-hidden border border-[#1E293B]">
                        <div className={`h-full ${alloc.color} rounded-full`} style={{ width: `${alloc.pct}%` }} />
                     </div>
                     <div className="w-12 text-right text-sm font-mono text-[#94A3B8]">{alloc.pct}%</div>
                   </div>
                 ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-[#1E293B] flex justify-between items-center">
                 <div className="text-sm font-medium text-[#94A3B8]">Total Supply Model: Fixed</div>
                 <div className="text-xl font-mono text-[#F5F7FA]">1,000,000,000 <span className="text-xs text-[#00E0C7]">Max</span></div>
               </div>
            </div>

            {/* Vesting Rules */}
            <div className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-6 shadow-md">
               <h2 className="text-lg font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-4">
                 <Target className="w-5 h-5 mr-2 text-[#00E0C7]" /> Vesting & Lockups
               </h2>
               
               <div className="bg-[#0B0F14] border border-[#1E293B] rounded-xl p-4 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden">
                 <div className="text-center z-10">
                   <Users className="w-8 h-8 text-[#334155] mx-auto mb-3" />
                   <div className="text-sm text-[#94A3B8]">Select a cohort from the cap table to define lockup/cliff logic.</div>
                   <button className="mt-4 px-4 py-1.5 text-xs text-[#00C2FF] border border-[#00C2FF]/30 rounded bg-[#00C2FF]/10 hover:bg-[#00C2FF]/20 transition-colors">Configure Team Vesting</button>
                 </div>
                 {/* Decorative background graph */}
                 <div className="absolute inset-0 opacity-[0.03] flex items-end">
                   <svg className="w-full h-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L0 50 L10 50 L10 40 L20 40 L20 30 L30 30 L30 20 L100 20 L100 100 Z" fill="#F5F7FA" />
                   </svg>
                 </div>
               </div>
            </div>

         </div>

         {/* Right Sidebar: Legal Structure */}
         <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-6 shadow-md min-h-[400px]">
               <h2 className="text-lg font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-4">
                 <Settings className="w-5 h-5 mr-2 text-[#94A3B8]" /> Legal Entity Wrapper
               </h2>
               
               <div className="space-y-4">
                 <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">Entity Type</label>
                 <select className="w-full bg-[#121A24] border border-[#334155] rounded-xl px-4 py-3 text-[#F5F7FA] text-sm focus:outline-none focus:border-[#00E0C7]">
                   <option>BVI Special Purpose Vehicle (SPV)</option>
                   <option>Wyoming DAO LLC</option>
                   <option>Cayman Islands Foundation</option>
                   <option>Delaware C-Corp</option>
                 </select>
               </div>
               
               <div className="mt-6 space-y-4">
                 <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">Rights Assigned to Token</label>
                 
                 <label className="flex items-center space-x-3 cursor-pointer">
                   <input type="checkbox" defaultChecked className="form-checkbox bg-[#121A24] border-[#334155] text-[#00E0C7] rounded w-4 h-4" />
                   <span className="text-sm text-[#F5F7FA]">Voting Rights / Governance</span>
                 </label>
                 <label className="flex items-center space-x-3 cursor-pointer">
                   <input type="checkbox" defaultChecked className="form-checkbox bg-[#121A24] border-[#334155] text-[#00E0C7] rounded w-4 h-4" />
                   <span className="text-sm text-[#F5F7FA]">Dividend / Profit Share</span>
                 </label>
                 <label className="flex items-center space-x-3 cursor-pointer">
                   <input type="checkbox" className="form-checkbox bg-[#121A24] border-[#334155] text-[#00E0C7] rounded w-4 h-4" />
                   <span className="text-sm text-[#F5F7FA]">Redemption Rights (RWA)</span>
                 </label>
               </div>
               
               <div className="mt-8 bg-[#D4A64A]/10 border border-[#D4A64A]/30 rounded-xl p-4 text-xs text-[#D4A64A] leading-relaxed">
                 <span className="font-bold">Compliance Note:</span> Selected structure classification implies strict KYC/AML on-chain checks. The Document Agent will draft offerings conforming to SEC Reg D.
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}
