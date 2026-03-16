"use client";

import { Code2, Terminal, ShieldAlert, Zap, Rocket, CheckCircle } from "lucide-react";

const DEMO_CODE = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AlphaToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable {
    constructor(address initialOwner)
        ERC20("Alpha Utility", "ALPH")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // AXTG-AI Injected: Jurisdiction/Compliance Lock checks will be hooked here
    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, value);
    }
}`;

export default function ContractsPage() {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-10rem)] flex flex-col space-y-4">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-[#0D141C] border border-[#1E293B] rounded-xl p-4 shadow-sm shrink-0">
        <div className="flex items-center space-x-4">
           <Code2 className="w-5 h-5 text-[#FF5C6C]" />
           <h1 className="text-lg font-bold font-heading text-[#F5F7FA]">Smart Contract Studio</h1>
           <span className="text-xs font-mono bg-[#1E293B] text-[#94A3B8] px-2 py-0.5 rounded">AlphaToken.sol</span>
        </div>
        <div className="flex space-x-3 items-center">
           <div className="text-xs flex items-center text-green-500 bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20 mr-2">
             <CheckCircle className="w-3 h-3 mr-1" /> Compiled (solc 0.8.20)
           </div>
           <button className="flex items-center px-4 py-2 bg-gradient-to-r from-[#FF5C6C] to-[#E11D48] text-[#0A0F15] font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm">
             <Rocket className="w-4 h-4 mr-2" /> Deploy to Network
           </button>
        </div>
      </div>

      <div className="flex flex-1 gap-4 min-h-0">
         {/* IDE Area */}
         <div className="flex-1 bg-[#121A24] border border-[#1E293B] rounded-xl flex flex-col overflow-hidden shadow-md">
            <div className="flex bg-[#0D141C] border-b border-[#1E293B] px-4 py-2 text-xs font-mono text-[#94A3B8]">
               <div className="px-3 py-1 bg-[#1E293B] text-[#F5F7FA] rounded border border-[#334155] border-b-transparent relative top-[9px]">AlphaToken.sol</div>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-[#0A0F15] text-sm font-mono text-[#00E0C7]">
<pre className="whitespace-pre-wrap leading-relaxed"><code dangerouslySetInnerHTML={{ __html: DEMO_CODE.replace(/contract AlphaToken|ERC20Pausable|Ownable/g, '<span class="text-[#D4A64A]">$&</span>').replace(/\b(function|pragma|import|contract|constructor|public|internal|override|super)\b/g, '<span class="text-[#FF5C6C]">$&</span>').replace(/uint256|address|string/g, '<span class="text-[#00C2FF]">$&</span>') }} /></pre>
            </div>
         </div>

         {/* Sidebar Tools */}
         <div className="w-80 flex flex-col space-y-4 shrink-0 overflow-y-auto">
            
            {/* AI Security Audit */}
            <div className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-4 shadow-md">
               <h3 className="text-sm font-bold text-[#F5F7FA] mb-4 flex items-center border-b border-[#1E293B] pb-2">
                 <ShieldAlert className="w-4 h-4 mr-2 text-green-500" /> AI Audit Report
               </h3>
               <div className="space-y-3">
                 <div className="flex justify-between items-center bg-[#1A2332] border border-green-500/20 px-3 py-2 rounded">
                   <span className="text-xs text-[#94A3B8]">Reentrancy Analysis</span>
                   <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 rounded font-bold uppercase tracking-wider">Pass</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#1A2332] border border-green-500/20 px-3 py-2 rounded">
                   <span className="text-xs text-[#94A3B8]">Access Control Gen</span>
                   <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 rounded font-bold uppercase tracking-wider">Pass</span>
                 </div>
                 <div className="flex justify-between items-center bg-[#1A2332] border border-yellow-500/20 px-3 py-2 rounded">
                   <span className="text-xs text-[#94A3B8]">Gas Optimization</span>
                   <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-1.5 rounded font-bold uppercase tracking-wider">Warn</span>
                 </div>
                 <div className="text-[10px] text-[#94A3B8] leading-snug mt-2 text-center italic">
                   "Minting total supply to msg.sender is secure but consider deploying via a Multi-Sig factory to avoid single point of failure."
                 </div>
               </div>
            </div>

            {/* Deployment Config */}
            <div className="bg-[#0D141C] border border-[#1E293B] rounded-xl p-4 shadow-md flex-1 flex flex-col">
               <h3 className="text-sm font-bold text-[#F5F7FA] mb-4 flex items-center border-b border-[#1E293B] pb-2">
                 <Zap className="w-4 h-4 mr-2 text-[#00E0C7]" /> Configuration
               </h3>
               <div className="space-y-4 flex-1">
                 <div>
                   <label className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1 block">Target Network</label>
                   <select className="w-full bg-[#1A2332] border border-[#334155] rounded text-[#F5F7FA] text-xs px-2 py-2 focus:outline-none focus:border-[#00E0C7]">
                     <option>Ethereum Sepolia (Testnet)</option>
                     <option>Ethereum Mainnet</option>
                     <option>Polygon zkEVM</option>
                   </select>
                 </div>
                 <div>
                   <label className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mb-1 block">Constructor: initialOwner</label>
                   <input type="text" placeholder="0x..." className="w-full bg-[#1A2332] border border-[#334155] rounded text-[#00E0C7] font-mono text-xs px-2 py-2 focus:outline-none focus:border-[#00E0C7]" defaultValue="0xConnectedWallet..." />
                 </div>
               </div>
               
               {/* Terminal Mock Built-in */}
               <div className="mt-4 bg-[#0A0F15] border border-[#1E293B] rounded p-3 h-24 overflow-auto">
                 <div className="text-[10px] text-[#334155] font-mono flex items-center mb-1 border-b border-[#1E293B] pb-1"><Terminal className="w-3 h-3 mr-1" /> Compiler Output</div>
                 <div className="text-[10px] text-green-500 font-mono mt-1">&gt; Solc 0.8.20 compilation OK.</div>
                 <div className="text-[10px] text-[#94A3B8] font-mono">&gt; Bytecode size: 2.1kb</div>
                 <div className="text-[10px] text-[#94A3B8] font-mono">&gt; Ready for deployment.</div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
