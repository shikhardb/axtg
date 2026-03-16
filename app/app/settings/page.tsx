"use client";

import { Settings, User, Key, Bell, CreditCard, ExternalLink } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-6 shadow-sm mb-6">
        <div>
           <h1 className="text-2xl font-bold font-heading text-[#F5F7FA] flex items-center mb-1">
             <Settings className="w-6 h-6 mr-3 text-[#94A3B8]" />
             Account Settings
           </h1>
           <p className="text-sm text-[#94A3B8]">Manage your profile, API keys, and workspace preferences.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
         {/* Settings Sidebar */}
         <div className="w-full md:w-64 shrink-0 space-y-2">
            <button className="w-full flex items-center text-sm font-semibold px-4 py-3 rounded-lg bg-[#1E293B] text-[#00C2FF] transition-colors border-l-4 border-[#00C2FF]">
              <User className="w-4 h-4 mr-3" /> Profile & Org
            </button>
            <button className="w-full flex items-center text-sm font-medium px-4 py-3 rounded-lg text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA] transition-colors border-l-4 border-transparent">
              <Key className="w-4 h-4 mr-3" /> API Keys & Access
            </button>
            <button className="w-full flex items-center text-sm font-medium px-4 py-3 rounded-lg text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA] transition-colors border-l-4 border-transparent">
              <Bell className="w-4 h-4 mr-3" /> Notifications
            </button>
            <button className="w-full flex items-center text-sm font-medium px-4 py-3 rounded-lg text-[#94A3B8] hover:bg-[#121A24] hover:text-[#F5F7FA] transition-colors border-l-4 border-transparent">
              <CreditCard className="w-4 h-4 mr-3" /> Billing
            </button>
         </div>

         {/* Content Area */}
         <div className="flex-1 space-y-8">
            
            {/* Org Info */}
            <div className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-6 shadow-sm">
               <h3 className="text-md font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-3">Organization Details</h3>
               
               <div className="space-y-5">
                 <div className="flex flex-col sm:flex-row gap-4">
                   <div className="flex-1 space-y-2">
                     <label className="text-xs font-semibold text-[#94A3B8] uppercase">Organization Name</label>
                     <input type="text" className="w-full bg-[#0B0F14] border border-[#334155] rounded-xl px-4 py-2.5 text-[#F5F7FA] focus:outline-none focus:border-[#00C2FF]" defaultValue="Acme Capital Group" />
                   </div>
                   <div className="flex-1 space-y-2">
                     <label className="text-xs font-semibold text-[#94A3B8] uppercase">Jurisdiction</label>
                     <select className="w-full bg-[#0B0F14] border border-[#334155] rounded-xl px-4 py-2.5 text-[#F5F7FA] focus:outline-none focus:border-[#00C2FF]">
                       <option>United States - Delaware</option>
                       <option>British Virgin Islands</option>
                       <option>Cayman Islands</option>
                     </select>
                   </div>
                 </div>
                 
                 <div className="pt-2">
                   <button className="px-4 py-2 bg-[#1E293B] border border-[#334155] text-[#F5F7FA] text-sm font-medium rounded hover:bg-[#334155] transition-colors">Save Changes</button>
                 </div>
               </div>
            </div>

            {/* Admin Users */}
            <div className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-6 shadow-sm">
               <h3 className="text-md font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-3">Team Members (3/10)</h3>
               
               <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-[#0B0F14] border border-[#1E293B] rounded-lg">
                    <div>
                      <div className="text-sm font-bold text-[#F5F7FA]">Admin User</div>
                      <div className="text-xs text-[#94A3B8]">admin@acmecapital.com</div>
                    </div>
                    <div className="text-xs bg-[#00E0C7]/10 text-[#00E0C7] px-2 py-1 rounded font-bold uppercase">Owner</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0D141C] border border-[#1E293B] rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-[#F5F7FA]">Jane Smith</div>
                      <div className="text-xs text-[#94A3B8]">jane@acmecapital.com</div>
                    </div>
                    <div className="text-xs bg-[#1E293B] text-[#94A3B8] px-2 py-1 rounded font-bold uppercase">Developer</div>
                  </div>
               </div>
               
               <button className="w-full py-2.5 border border-dashed border-[#334155] rounded-lg text-sm font-medium text-[#00C2FF] hover:bg-[#00C2FF]/5 transition-colors">
                 + Invite Team Member
               </button>
            </div>

            {/* Integrations Mock */}
            <div className="bg-[#121A24] border border-[#1E293B] rounded-2xl p-6 shadow-sm">
               <h3 className="text-md font-bold text-[#F5F7FA] mb-6 flex items-center border-b border-[#1E293B] pb-3">Wallet & Provider Integrations</h3>
               
               <div className="space-y-4 text-sm">
                 <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-[#F5F7FA]">Fireblocks Custody Network</div>
                      <div className="text-xs text-[#94A3B8]">Connected to vault ID #99214</div>
                    </div>
                    <button className="text-[#FF5C6C] font-medium text-xs border border-[#FF5C6C]/20 bg-[#FF5C6C]/5 px-3 py-1.5 rounded">Disconnect</button>
                 </div>
                 <div className="flex justify-between items-center pt-4 border-t border-[#1E293B]">
                    <div>
                      <div className="font-semibold text-[#F5F7FA]">SumSub (KYC/AML)</div>
                      <div className="text-xs text-[#94A3B8]">Identity verification webhook inactive</div>
                    </div>
                    <button className="text-[#00C2FF] font-medium text-xs border border-[#00C2FF]/20 bg-[#00C2FF]/10 px-3 py-1.5 rounded flex items-center">Connect <ExternalLink className="w-3 h-3 ml-1" /></button>
                 </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
