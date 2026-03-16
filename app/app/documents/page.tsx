"use client";

import { motion } from "framer-motion";
import { FileText, Download, Play, Search, Link as LinkIcon } from "lucide-react";

const TEMPLATES = [
  { name: "White Paper Template", type: "Technical", popularity: "High" },
  { name: "Lite Paper / Teaser", type: "Marketing", popularity: "High" },
  { name: "Tokenomics Memo", type: "Financial", popularity: "Medium" },
  { name: "Investor Deck", type: "Pitch", popularity: "High" },
  { name: "MOU Draft", type: "Legal", popularity: "Medium" },
  { name: "AML/KYC Policy starter", type: "Compliance", popularity: "Low" }
];

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-heading text-[#F5F7FA] mb-2 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-[#FF5C6C]" />
            Document Generator
          </h1>
          <p className="text-[#94A3B8]">AI-powered drafting for technical, compliance, and legal frameworks.</p>
        </div>
        <div className="hidden sm:block">
           <div className="relative">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
             <input type="text" placeholder="Search templates..." className="pl-9 pr-4 py-2 bg-[#121A24] border border-[#1E293B] rounded-lg text-sm text-[#F5F7FA] focus:outline-none focus:border-[#00C2FF] transition-colors" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((doc, idx) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#0B0F14] border border-[#1E293B] rounded-xl p-6 hover:border-[#FF5C6C]/50 cursor-pointer group transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5C6C]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#FF5C6C]" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#94A3B8] bg-[#121A24] px-2 py-1 rounded">
                {doc.type}
              </span>
            </div>
            <h3 className="font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#FF5C6C] transition-colors">{doc.name}</h3>
            <p className="text-xs text-[#94A3B8] mb-6">Connects to your project data context to auto-fill core mechanics and tokenomcs.</p>
            
            <div className="flex space-x-2">
               <button className="flex-1 flex justify-center items-center py-2 bg-[#121A24] text-[#F5F7FA] text-xs font-semibold rounded hover:bg-[#1E293B] transition-colors border border-[#1E293B]">
                 <Play className="w-3 h-3 mr-2" /> Start Draft
               </button>
               <button className="px-3 py-2 bg-[#121A24] text-[#94A3B8] text-xs rounded hover:bg-[#1E293B] hover:text-[#00C2FF] transition-colors border border-[#1E293B]">
                 <LinkIcon className="w-3 h-3" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Generated Archive */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-[#F5F7FA] mb-6">Archive</h2>
        <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-8 flex flex-col items-center justify-center text-center">
           <Download className="w-10 h-10 text-[#94A3B8] opacity-50 mb-4" />
           <p className="text-[#94A3B8] font-medium">No documents generated yet.</p>
           <p className="text-sm text-[#475569] mt-1 mb-4">Draft a document above to see it appear here.</p>
        </div>
      </div>
    </div>
  );
}
