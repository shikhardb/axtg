"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Sparkles } from "lucide-react";

const TICKER_ITEMS = [
  { symbol: "BTC", price: "$64,230.50", change: "+2.4%" },
  { symbol: "ETH", price: "$3,450.80", change: "+1.2%" },
  { symbol: "SOL", price: "$145.20", change: "-0.8%" },
  { symbol: "GOLD", price: "$2,340.10", change: "+0.5%" },
  { symbol: "OTC: AXTG", price: "$1.24", change: "+5.2%", highlight: true },
];

export function TopTicker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 bg-[#0B0F14] border-b border-[#1E293B]"></div>;

  return (
    <div className="h-10 bg-[#0B0F14] border-b border-[#1E293B] flex items-center justify-between px-4 text-xs font-mono text-[#94A3B8] overflow-hidden whitespace-nowrap">
      <div className="flex items-center space-x-8 animate-marquee">
        {TICKER_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span className={item.highlight ? "text-[#00C2FF] font-bold" : "text-[#F5F7FA]"}>
              {item.symbol}
            </span>
            <span>{item.price}</span>
            <span
              className={
                item.change.startsWith("+") ? "text-[#00E0C7]" : "text-[#FF5C6C]"
              }
            >
              {item.change}
            </span>
          </div>
        ))}
        {/* Duplicate for infinite marquee effect */}
        {TICKER_ITEMS.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center space-x-2 lg:hidden">
            <span className={item.highlight ? "text-[#00C2FF] font-bold" : "text-[#F5F7FA]"}>
              {item.symbol}
            </span>
            <span>{item.price}</span>
            <span
              className={
                item.change.startsWith("+") ? "text-[#00E0C7]" : "text-[#FF5C6C]"
              }
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center pl-4 border-l border-[#1E293B] bg-[#0B0F14] z-10">
        <Sparkles className="w-3 h-3 text-[#D4A64A] mr-2" />
        <span className="text-[#D4A64A]">AI Insight: Market risk neutral / bullish</span>
      </div>
    </div>
  );
}
