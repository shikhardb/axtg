import { Sidebar } from "@/components/workspace/Sidebar";
import { RightPanel } from "@/components/workspace/RightPanel";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#0B0F14] min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 lg:p-10 max-w-5xl mx-auto">
          {children}
        </main>
      </div>
      
      {/* Contextual AI Right Panel */}
      <RightPanel />
    </div>
  );
}
