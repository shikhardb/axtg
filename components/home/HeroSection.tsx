"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, ShieldCheck, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 pb-12 overflow-hidden bg-[#0A0F15]">
      {/* Background 3D Grid & Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2FF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00E0C7] rounded-full mix-blend-screen filter blur-[128px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6 text-[#F5F7FA] font-bold text-3xl font-heading tracking-wide">
                 <span className="w-5 h-5 rounded-sm bg-gradient-to-tr from-[#00C2FF] to-[#00E0C7] shrink-0 transform rotate-45" />
                 <span>AXTG <span className="text-[#00C2FF]">AI</span></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6 leading-tight text-[#F5F7FA]">
                Build, Structure, Tokenize,<br/>and Scale Digital Assets
              </h1>
              <p className="text-sm md:text-base text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#00C2FF] to-[#0088FF] text-[#F5F7FA] font-semibold flex items-center justify-center hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(0,194,255,0.4)]">
                  Launch App
                </button>
                <button className="px-6 py-3 rounded-md bg-transparent border border-[#334155] text-[#F5F7FA] font-medium hover:bg-[#1E293B] transition-colors shadow-sm">
                  Explore AI Agents
                </button>
                <button className="px-6 py-3 rounded-md bg-transparent border border-[#334155] text-[#F5F7FA] font-medium hover:bg-[#1E293B] transition-colors hidden sm:block shadow-sm">
                  View Markets
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Panel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0D141C] border-2 border-[#1E293B] rounded-2xl p-6 relative overflow-hidden shadow-2xl"
            >
              {/* Fake UI elements to simulate the dashboard graphic in the image */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
                     <div className="w-3 h-3 rounded-full bg-green-500" />
                   </div>
                   <div className="h-6 w-32 bg-[#1E293B] rounded-md" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="h-24 bg-gradient-to-br from-[#121A24] to-[#1E293B] border border-[#334155] rounded-xl p-3 flex flex-col justify-between">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded bg-[#D4A64A]" />
                       <div className="h-4 w-12 bg-[#334155] rounded" />
                     </div>
                     <div className="h-2 w-full bg-[#334155] rounded" />
                   </div>
                   <div className="h-24 bg-gradient-to-br from-[#121A24] to-[#1E293B] border border-[#334155] rounded-xl p-3 flex flex-col justify-between">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 rounded bg-[#00E0C7]" />
                       <div className="h-4 w-12 bg-[#334155] rounded" />
                     </div>
                     <div className="h-2 w-full bg-[#334155] rounded" />
                   </div>
                </div>

                <div className="h-32 bg-gradient-to-br from-[#121A24] to-[#1E293B] border border-[#334155] rounded-xl p-4 flex items-end">
                   <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <path d="M0 100 L0 80 L20 60 L40 70 L60 30 L80 40 L100 10 L100 100 Z" fill="rgba(0,194,255,0.2)" />
                     <path d="M0 80 L20 60 L40 70 L60 30 L80 40 L100 10" fill="none" stroke="#00C2FF" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                   </svg>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
