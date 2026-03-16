"use client";

import { motion } from "framer-motion";
import { TrendingUp, FileText, Download, User, ArrowUpRight } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-16 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <TrendingUp className="w-12 h-12 text-[#94A3B8] mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#F5F7FA]">
            Investor Relations
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-8">
             AXTG (OTC) is bridging traditional capital markets with compliant, AI-driven digital asset infrastructure.
          </p>

          <div className="bg-[#121A24] border border-[#334155] rounded-xl p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 shadow-2xl">
            <div className="text-left">
               <div className="text-[10px] font-bold text-[#00C2FF] uppercase tracking-widest mb-1">Stock Quote</div>
               <div className="text-3xl font-heading font-bold text-[#F5F7FA]">AXTG</div>
            </div>
            <div className="w-px h-12 bg-[#1E293B] hidden sm:block" />
            <div className="text-left">
               <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Price</div>
               <div className="text-3xl font-mono text-[#F5F7FA]">$1.24 <span className="text-sm text-[#00E0C7]">+0.06 (5.2%)</span></div>
            </div>
            <div className="w-px h-12 bg-[#1E293B] hidden sm:block" />
            <div className="text-left">
               <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Volume</div>
               <div className="text-xl font-mono text-[#F5F7FA]">1.2M</div>
            </div>
          </div>
          <div className="text-xs text-[#475569] mt-4">Data delayed by 15 minutes.</div>
        </div>
      </section>

      {/* Financials & SEC Filings */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <h2 className="text-2xl font-bold font-heading text-[#F5F7FA] mb-8 border-b border-[#1E293B] pb-4">Financial Reports & Filings</h2>
         
         <div className="space-y-4">
           {[
             { name: "Q3 2024 Quarterly Report", date: "Nov 15, 2024", type: "10-Q" },
             { name: "Annual Report 2023", date: "Mar 01, 2024", type: "10-K" },
             { name: "Current Report: Product Launch", date: "Oct 22, 2024", type: "8-K" },
           ].map((report, idx) => (
             <div key={idx} className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-[#121A24] transition-colors cursor-pointer group">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="w-10 h-10 rounded bg-[#1E293B] flex items-center justify-center mr-4 shrink-0">
                    <FileText className="w-5 h-5 text-[#94A3B8]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#F5F7FA] group-hover:text-[#00C2FF] transition-colors">{report.name}</div>
                    <div className="text-xs text-[#94A3B8] font-mono">{report.date} • Form {report.type}</div>
                  </div>
                </div>
                <button className="flex items-center text-sm font-medium text-[#00C2FF] bg-[#00C2FF]/10 px-4 py-2 rounded hover:bg-[#00C2FF]/20 transition-colors shrink-0">
                   <Download className="w-4 h-4 mr-2" /> Download PDF
                </button>
             </div>
           ))}
         </div>
      </section>

      {/* Leadership */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <h2 className="text-2xl font-bold font-heading text-[#F5F7FA] mb-8 border-b border-[#1E293B] pb-4">Leadership</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {[
             { name: "John Doe", title: "Chief Executive Officer" },
             { name: "Jane Smith", title: "Chief Technology Officer" },
             { name: "Michael Chang", title: "Chief Financial Officer" },
           ].map((exec, idx) => (
             <div key={idx} className="bg-[#0D141C] border border-[#1E293B] rounded-2xl p-6 text-center shadow-lg">
                <div className="w-20 h-20 rounded-full bg-[#1A2332] mx-auto mb-4 flex items-center justify-center border-2 border-[#334155]">
                  <User className="w-8 h-8 text-[#94A3B8]" />
                </div>
                <h3 className="font-bold text-[#F5F7FA]">{exec.name}</h3>
                <p className="text-xs text-[#00C2FF] mt-1">{exec.title}</p>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
}
