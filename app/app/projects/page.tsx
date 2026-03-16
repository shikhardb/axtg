"use client";

import { FolderKanban, Plus, MoreVertical, Play, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  { id: "proj_1", name: "Alpha Utility Token", type: "ERC-20", network: "Ethereum Mainnet", status: "Deployed", date: "Oct 12, 2024", color: "text-[#00E0C7]", bg: "bg-[#00E0C7]/10" },
  { id: "proj_2", name: "EU Carbon Fund SPV", type: "ERC-3643", network: "Polygon", status: "Drafting", date: "Oct 24, 2024", color: "text-[#D4A64A]", bg: "bg-[#D4A64A]/10" },
  { id: "proj_3", name: "Treasury Yield Note", type: "ERC-4626", network: "Arbitrum", status: "Review", date: "Nov 02, 2024", color: "text-[#00C2FF]", bg: "bg-[#00C2FF]/10" },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-6 shadow-sm">
        <div>
           <h1 className="text-2xl font-bold font-heading text-[#F5F7FA] flex items-center mb-1">
             <FolderKanban className="w-6 h-6 mr-3 text-[#00C2FF]" />
             My Projects
           </h1>
           <p className="text-sm text-[#94A3B8]">Manage your digital asset deployments and token structures.</p>
        </div>
        <Link href="/app/token-builder">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#00C2FF] to-[#0088FF] text-[#F5F7FA] font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4 mr-2" /> New Project
          </button>
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex flex-col justify-center">
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Total Managed</div>
            <div className="text-3xl font-mono text-[#F5F7FA]">3 <span className="text-sm text-[#00E0C7]">Active</span></div>
         </div>
         <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex flex-col justify-center">
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Total Locked Value (TVL)</div>
            <div className="text-3xl font-mono text-[#F5F7FA]">$1.2M</div>
         </div>
         <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex flex-col justify-center">
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold mb-2">Network Usage</div>
            <div className="flex space-x-2">
               <span className="text-xs bg-[#1E293B] text-[#94A3B8] px-2 py-1 rounded">Ethereum: 1</span>
               <span className="text-xs bg-[#1E293B] text-[#94A3B8] px-2 py-1 rounded">Polygon: 1</span>
               <span className="text-xs bg-[#1E293B] text-[#94A3B8] px-2 py-1 rounded">Arbitrum: 1</span>
            </div>
         </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {PROJECTS.map((proj) => (
            <div key={proj.id} className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-6 hover:border-[#334155] transition-colors relative group shadow-md flex flex-col justify-between min-h-[220px]">
               <div className="flex justify-between items-start mb-4">
                  <div className={`text-xs px-2 py-1 rounded font-bold uppercase tracking-wider ${proj.color} ${proj.bg} border border-current/20`}>
                    {proj.status}
                  </div>
                  <button className="text-[#94A3B8] hover:text-[#F5F7FA] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="mb-6 flex-1">
                 <h3 className="text-xl font-bold text-[#F5F7FA] mb-1">{proj.name}</h3>
                 <div className="text-xs text-[#94A3B8] font-mono mb-4">{proj.type} • {proj.network}</div>
                 
                 <div className="flex items-center text-xs text-[#475569]">
                   <Clock className="w-3 h-3 mr-1" /> Last updated: {proj.date}
                 </div>
               </div>

               <div className="border-t border-[#1E293B] pt-4 flex justify-between items-center">
                 {proj.status === "Deployed" ? (
                    <button className="text-xs flex items-center text-[#94A3B8] hover:text-[#00C2FF] transition-colors font-medium">
                       <CheckCircle2 className="w-4 h-4 mr-1" /> View Dashboard
                    </button>
                 ) : (
                    <button className="text-xs flex items-center text-[#94A3B8] hover:text-[#D4A64A] transition-colors font-medium cursor-pointer">
                       <Play className="w-4 h-4 mr-1" /> Resume Builder
                    </button>
                 )}
               </div>
            </div>
         ))}
         
         <Link href="/app/token-builder" className="bg-[#0B0F14] border-2 border-dashed border-[#1E293B] rounded-2xl p-6 hover:border-[#00C2FF]/50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer min-h-[220px] group">
            <div className="w-12 h-12 rounded-full bg-[#1A2332] flex items-center justify-center mb-4 text-[#94A3B8] group-hover:text-[#00C2FF] group-hover:bg-[#00C2FF]/10 transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7FA] mb-1">Create New Asset</h3>
            <p className="text-xs text-[#94A3B8]">Start a new tokenization workflow</p>
         </Link>
      </div>

    </div>
  );
}
