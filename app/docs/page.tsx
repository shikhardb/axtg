"use client";

import { FileText, Search, BookOpen, Code, Terminal, Boxes } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="bg-[#0A0F15] min-h-screen">
      
      {/* Search Header */}
      <section className="bg-[#0D141C] border-b border-[#1E293B] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold font-heading mb-6 text-[#F5F7FA]">AXTG Documentation</h1>
          <div className="relative max-w-2xl mx-auto">
             <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
             <input type="text" placeholder="Search guides, API references, or smart contracts..." className="w-full pl-12 pr-4 py-4 bg-[#121A24] border border-[#334155] rounded-xl text-[#F5F7FA] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF]/50 transition-all shadow-lg" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-12">
         
         {/* Left Navigation */}
         <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-4">Getting Started</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="#" className="text-[#00C2FF]">Introduction</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Quickstart Guide</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Architecture</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-4">Core Concepts</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Agents & Prompts</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Token Standards</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Compliance Engine</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-4">Developers</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">REST API Reference</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Smart Contract SDK</Link></li>
                <li><Link href="#" className="text-[#F5F7FA] hover:text-[#00C2FF]">Webhooks</Link></li>
              </ul>
            </div>
         </div>

         {/* Main Content Area Fake */}
         <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">Welcome to AXTG AI</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              The AXTG API and SDKs enable developers and institutions to programmatically tokenize assets, manage compliance, and access real-time market intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] cursor-pointer transition-colors group">
                  <BookOpen className="w-6 h-6 text-[#00C2FF] mb-4" />
                  <h3 className="font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#00C2FF] transition-colors">Platform Guides</h3>
                  <p className="text-xs text-[#94A3B8]">Learn how to use the AXTG Workspace GUI to deploy your first asset.</p>
               </div>
               <div className="bg-[#121A24] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] cursor-pointer transition-colors group">
                  <Code className="w-6 h-6 text-[#D4A64A] mb-4" />
                  <h3 className="font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#D4A64A] transition-colors">API Reference</h3>
                  <p className="text-xs text-[#94A3B8]">Detailed endpoints for integrating AXTG compliance and data into your app.</p>
               </div>
            </div>

            <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">Quickstart: Create a Token Intent</h3>
            <p className="text-[#94A3B8] text-sm mb-4">Send a natural language prompt to the Token Architect via API to generate a smart contract struct.</p>
            
            <div className="bg-[#0B0F14] border border-[#1E293B] rounded-xl p-4 mb-4 relative">
               <div className="absolute top-0 right-0 p-2 text-[10px] text-[#94A3B8] font-mono">bash</div>
<pre className="text-sm font-mono text-[#00E0C7] overflow-x-auto p-2">
<span className="text-[#FF5C6C]">curl</span> -X POST https://api.axtg.ai/v1/agents/architect \
  -H <span className="text-[#D4A64A]">"Authorization: Bearer YOUR_API_KEY"</span> \
  -H <span className="text-[#D4A64A]">"Content-Type: application/json"</span> \
  -d '{`{
    "prompt": "Create an ERC-20 utility token named Alpha with 1M supply",
    "network": "ethereum-sepolia"
  }`}'
</pre>
            </div>
         </div>

      </section>
    </div>
  );
}
