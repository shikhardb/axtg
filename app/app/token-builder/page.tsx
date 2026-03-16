"use client";

import { useState } from "react";
import { CheckCircle, Shield, Network, Zap, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { id: 1, name: "Asset Type" },
  { id: 2, name: "Jurisdiction" },
  { id: 3, name: "Supply Model" },
  { id: 4, name: "Tokenomics & Rights" }
];

const ASSET_TYPES = [
  { id: "utility", name: "Utility Token", icon: Zap },
  { id: "native", name: "Native Token", icon: Network },
  { id: "stablecoin", name: "Stablecoin", icon: Shield },
  { id: "rwa", name: "RWA Token", icon: Settings2 }
];

export default function TokenBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-4">
        <h1 className="text-xl font-bold font-heading text-[#F5F7FA]">Token Builder</h1>
        <div className="flex items-center space-x-2">
           <button className="text-xs text-[#94A3B8] flex items-center bg-[#1A2332] border border-[#334155] px-3 py-1.5 rounded">
             Restart / Clear Data
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Wizard Tabs based on image UI */}
          <div className="flex space-x-2 bg-[#0D141C] p-2 rounded-xl border border-[#1E293B] overflow-x-auto scrollbar-hide">
            {STEPS.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex-1 min-w-[120px] px-4 py-2 text-xs font-semibold rounded-lg flex items-center transition-colors ${
                  currentStep === step.id 
                    ? "bg-[#1E293B] text-[#F5F7FA] shadow"
                    : "text-[#94A3B8] hover:bg-[#1A2332]"
                }`}
              >
                <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 text-[10px] ${currentStep >= step.id ? 'bg-[#00C2FF] text-[#0A0F15]' : 'bg-[#334155] text-[#94A3B8]'}`}>
                  {step.id}
                </div>
                {step.name}
              </button>
            ))}
          </div>

          {/* Asset Selection Area */}
          <div className="bg-gradient-to-b from-[#121A24] to-[#0A0F15] border border-[#1E293B] rounded-xl p-8 min-h-[400px] flex flex-col justify-center items-center shadow-lg relative overflow-hidden">
             {/* Bottom glow effect typical for the image shown */}
             <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#00C2FF] opacity-10 filter blur-[80px]" />
             
             <div className="w-full max-w-2xl relative z-10 text-center">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-8">Select Your Asset Type</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {ASSET_TYPES.map(type => (
                    <motion.div
                      key={type.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedAsset(type.id)}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all border-y border-x ${
                        selectedAsset === type.id 
                          ? 'bg-[#1E293B] border-[#00C2FF] shadow-[0_0_15px_rgba(0,194,255,0.2)]'
                          : 'bg-[#121A24] border-[#1E293B] hover:border-[#334155]'
                      }`}
                    >
                       <type.icon className={`w-8 h-8 mb-4 ${selectedAsset === type.id ? 'text-[#00C2FF]' : 'text-[#94A3B8]'}`} />
                       <span className="text-xs font-semibold text-[#F5F7FA]">{type.name}</span>
                       {selectedAsset === type.id && (
                         <div className="mt-3 w-4 h-4 rounded-full bg-[#00C2FF] flex items-center justify-center">
                           <CheckCircle className="w-3 h-3 text-[#0B0F14]" />
                         </div>
                       )}
                    </motion.div>
                  ))}
                </div>

                <button className="px-10 py-3 bg-gradient-to-r from-[#00C2FF] to-[#0088FF] text-[#F5F7FA] text-sm font-semibold rounded-lg shadow-[0_0_15px_rgba(0,194,255,0.4)] hover:opacity-90 transition-opacity">
                   Next Option
                </button>
             </div>
          </div>
        </div>

        {/* Right Token Summary Panel */}
        <div className="lg:col-span-1 bg-[#0D141C] border border-[#1E293B] rounded-xl p-5 shadow-lg flex flex-col h-full">
           <h3 className="text-sm font-bold text-[#F5F7FA] border-b border-[#1E293B] pb-4 mb-4">Token Summary</h3>
           
           <div className="space-y-4 flex-1">
             {[
               { label: "Token name", value: "Utility Token" },
               { label: "Token symbol", value: "UTL" },
               { label: "Total Supply", value: "1M" },
               { label: "Decimals", value: "18" },
               { label: "Jurisdiction", value: "BVI" },
               { label: "AML Required", value: "Yes" },
             ].map((item, idx) => (
               <div key={idx} className="flex justify-between items-center">
                 <span className="text-xs text-[#94A3B8]">{item.label}</span>
                 <span className="text-xs font-semibold text-[#00E0C7] bg-[#00E0C7]/10 px-2 py-0.5 rounded border border-[#00E0C7]/20">
                   {item.value}
                 </span>
               </div>
             ))}
           </div>
           
           <div className="border-t border-[#1E293B] pt-4 flex justify-between items-center text-xs">
              <span className="text-[#94A3B8]">Est. Gas Cost</span>
              <span className="text-[#F5F7FA] font-mono">$40.00</span>
           </div>
        </div>
      </div>
    </div>
  );
}
