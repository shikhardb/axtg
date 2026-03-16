"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, MessageSquare, FolderKanban, Coins, 
  Layers, ShieldAlert, Code2, FileText, LineChart, 
  Wallet, Settings, LogOut
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "AI Chat", href: "/app/chat", icon: MessageSquare },
  { name: "My Projects", href: "/app/projects", icon: FolderKanban },
  { name: "Token Builder", href: "/app/token-builder", icon: Coins },
  { name: "Asset Structuring", href: "/app/structuring", icon: Layers },
  { name: "Compliance Lab", href: "/app/compliance", icon: ShieldAlert },
  { name: "Smart Contract Studio", href: "/app/contracts", icon: Code2 },
  { name: "Documents", href: "/app/documents", icon: FileText },
  { name: "Market Intelligence", href: "/app/markets", icon: LineChart },
  { name: "Treasury", href: "/app/treasury", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#0B0F14] border-r border-[#1E293B] h-[calc(100vh-4rem)] flex flex-col pt-6 sticky top-16">
      <div className="flex-1 overflow-y-auto px-4 space-y-1">
        <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4 ml-2">Workspace</div>
        {SIDEBAR_ITEMS.slice(0, 3).map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? "bg-[#1E293B] text-[#00C2FF]" 
                  : "text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA]"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              {item.name}
            </Link>
          );
        })}

        <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4 mt-8 ml-2">Modules</div>
        {SIDEBAR_ITEMS.slice(3, 10).map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? "bg-[#1E293B] text-[#00C2FF]" 
                  : "text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA]"
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? "text-[#00E0C7]" : ""}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-[#1E293B] space-y-1">
        <Link
          href="/app/settings"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA] transition-colors"
        >
          <Settings className="w-5 h-5 mr-3 flex-shrink-0" />
          Settings
        </Link>
        <button
          className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-[#FF5C6C] hover:bg-[#FF5C6C]/10 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
