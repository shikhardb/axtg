"use client";

import { motion } from "framer-motion";
import { Lightbulb, Network, Search, FileText, Play, Rocket, Activity } from "lucide-react";

const STEPS = [
  { id: 1, name: "Idea", icon: Lightbulb },
  { id: 2, name: "Structure", icon: Network },
  { id: 3, name: "Analyze", icon: Search },
  { id: 4, name: "Generate", icon: FileText },
  { id: 5, name: "Simulate", icon: Play },
  { id: 6, name: "Deploy", icon: Rocket },
  { id: 7, name: "Monitor", icon: Activity },
];

export function WorkflowVisualizer() {
  return (
    <section className="py-32 bg-[#121A24] border-t border-[#1E293B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#F5F7FA]">
            From Concept to On-Chain in Minutes
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
            A continuous, AI-assisted lifecycle for launching and managing institutional digital assets. Every stage opens a dedicated workspace.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#1E293B] via-[#00C2FF] to-[#1E293B]" />

          <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-8 md:space-y-0">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0B0F14] border-2 border-[#1E293B] flex items-center justify-center relative group-hover:border-[#00E0C7] group-hover:shadow-[0_0_20px_rgba(0,224,199,0.3)] transition-all duration-300">
                  <step.icon className="w-8 h-8 text-[#94A3B8] group-hover:text-[#00C2FF] transition-colors" />
                  
                  {/* Glowing dot for active state simulation */}
                  <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#00C2FF] border-2 border-[#0B0F14] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-semibold text-[#F5F7FA] group-hover:text-[#00C2FF] transition-colors">
                    {step.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-6 py-3 rounded-md border border-[#00C2FF]/30 text-[#00C2FF] font-medium hover:bg-[#00C2FF]/10 transition-colors">
            Explore Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
