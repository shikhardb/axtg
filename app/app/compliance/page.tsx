"use client";

import { ShieldAlert, FileSearch, Scale, Fingerprint, PieChart } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Bar matching image */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-4 gap-4">
        <h1 className="text-xl font-bold font-heading text-[#F5F7FA]">Compliance Lab</h1>
        
        <div className="flex space-x-2 bg-[#1A2332] p-1 rounded-lg border border-[#334155]">
          <button className="px-4 py-1.5 text-xs font-semibold bg-[#1E293B] text-[#00C2FF] rounded shadow border border-[#334155]">Jurisdiction Risk</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F5F7FA]">NYC / State Tokens</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F5F7FA]">Compliance Rules</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex items-center justify-between group hover:border-[#334155] transition-colors cursor-pointer shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <Fingerprint className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F7FA] mb-1">KYC / AML Checks</h3>
                <p className="text-[11px] text-[#94A3B8]">Ready to scan identities against global watchlists. Sub-screening systems active.</p>
              </div>
            </div>
            <button className="text-xs bg-[#1A2332] border border-[#334155] text-[#94A3B8] px-3 py-1.5 rounded hover:text-[#F5F7FA]">Scan Identity</button>
          </div>

          <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex items-center justify-between group hover:border-[#334155] transition-colors cursor-pointer shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F7FA] mb-1">Legal & Licensing Review</h3>
                <p className="text-[11px] text-[#94A3B8]">Ensure your asset structure complies with selected SEC rules and EU MiCA frameworks.</p>
              </div>
            </div>
            <button className="text-xs bg-[#1A2332] border border-[#334155] text-[#94A3B8] px-3 py-1.5 rounded hover:text-[#F5F7FA]">Review Status</button>
          </div>

          <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-5 flex items-center justify-between group hover:border-[#334155] transition-colors cursor-pointer shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F7FA] mb-1">Sanctions Screening</h3>
                <p className="text-[11px] text-[#94A3B8]">Prevent blocked wallets and jurisdictions from interacting with your token.</p>
              </div>
            </div>
            <button className="text-xs bg-[#1A2332] border border-[#334155] text-[#94A3B8] px-3 py-1.5 rounded hover:text-[#F5F7FA]">Update Blocklist</button>
          </div>
        </div>

        {/* Right Side Status Panel */}
        <div className="lg:col-span-1 bg-[#0D141C] border border-[#1E293B] rounded-xl p-6 shadow-lg h-full flex flex-col">
          <h3 className="text-sm font-bold text-[#F5F7FA] mb-6 flex justify-between items-center">
            Compliance Status
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </h3>
          
          <div className="flex justify-center mb-8 relative">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
               {/* Background Circle */}
               <circle cx="50" cy="50" r="40" stroke="#1E293B" strokeWidth="12" fill="none" />
               {/* Multi-colored Gauge (Blue, Green, Yellow, Orange) representing safe to risk */}
               <circle cx="50" cy="50" r="40" stroke="url(#compliance-gradient)" strokeWidth="12" fill="none" strokeDasharray="180 250" strokeLinecap="round" />
               <defs>
                 <linearGradient id="compliance-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#00C2FF" />
                   <stop offset="50%" stopColor="#00E0C7" />
                   <stop offset="100%" stopColor="#D4A64A" />
                 </linearGradient>
               </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-2">
              <span className="text-5xl font-bold font-heading text-[#00E0C7]">A</span>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-end border-t border-[#1E293B] pt-4">
             <div className="flex items-center space-x-3 text-xs text-[#94A3B8]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Passed KYC standards</span>
             </div>
             <div className="flex items-center space-x-3 text-xs text-[#94A3B8]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Sanctions APIs clear</span>
             </div>
             <div className="flex items-center space-x-3 text-xs text-[#94A3B8]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Jurisdiction risks cleared</span>
             </div>
             <div className="flex items-center space-x-3 text-xs text-[#94A3B8]">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Disclosure pending review</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
