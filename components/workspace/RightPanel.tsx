"use client";

import { Sparkles, ArrowRight, Activity, AlertTriangle, FileCheck } from "lucide-react";

export function RightPanel() {
  return (
    <div className="w-72 bg-[#121A24] border-l border-[#1E293B] h-[calc(100vh-4rem)] overflow-y-auto p-4 hidden lg:block sticky top-16">
      <div className="flex items-center space-x-2 text-[#00C2FF] font-semibold mb-6">
        <Sparkles className="w-5 h-5" />
        <span>AI Assistant</span>
      </div>

      <div className="space-y-6">
        {/* Contextual Suggestion */}
        <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-4">
          <div className="text-xs text-[#94A3B8] font-mono mb-2">SUGGESTION</div>
          <p className="text-sm text-[#F5F7FA] mb-3">
            Your RWA token spec is missing jurisdiction details. Would you like me to map out Wyoming vs 
            BVI structuring?
          </p>
          <button className="text-xs text-[#00E0C7] flex items-center hover:opacity-80 transition-opacity">
            Run Comparison <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>

        {/* Task Status */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#F5F7FA]">Active Tasks</h3>
          
          <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#D4A64A] animate-pulse" />
              <span className="text-sm text-[#94A3B8]">Drafting WP...</span>
            </div>
            <span className="text-xs font-mono text-[#F5F7FA]">45%</span>
          </div>
          
          <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#00E0C7]" />
              <span className="text-sm text-[#94A3B8]">Tokenomics</span>
            </div>
            <span className="text-xs font-mono text-[#00E0C7]">Done</span>
          </div>
        </div>

        {/* Warnings & Risk */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#F5F7FA] flex items-center">
            <AlertTriangle className="w-4 h-4 text-[#FF5C6C] mr-2" /> 
            Risk Alerts
          </h3>
          
          <div className="bg-red-950/20 border border-[#FF5C6C]/30 rounded-lg p-3">
            <p className="text-xs text-[#FF5C6C] leading-relaxed">
              Caution: Stablecoin collateral logic does not strictly meet MiCA reserve thresholds in Draft V1.
            </p>
          </div>
        </div>

        {/* Exports */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#F5F7FA] flex items-center">
            <FileCheck className="w-4 h-4 text-[#94A3B8] mr-2" /> 
            Ready to Export
          </h3>
          
          <button className="w-full bg-[#1E293B] hover:bg-[#334155] border border-[#1E293B] rounded-lg p-3 text-left transition-colors group">
            <div className="text-sm text-[#F5F7FA] mb-1 group-hover:text-[#00C2FF] transition-colors">Term Sheet V1</div>
            <div className="text-xs text-[#94A3B8]">PDF • 1.2MB</div>
          </button>
        </div>
      </div>
    </div>
  );
}
