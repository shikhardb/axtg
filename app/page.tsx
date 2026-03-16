import { HeroSection } from "@/components/home/HeroSection";
import { CapabilityCards } from "@/components/home/CapabilityCards";
import { AgentShowcase } from "@/components/home/AgentShowcase";
import { SectorTiles } from "@/components/home/SectorTiles";
import { WorkflowVisualizer } from "@/components/home/WorkflowVisualizer";
import { InvestorSection } from "@/components/home/InvestorSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilityCards />
      <AgentShowcase />
      <WorkflowVisualizer />
      <SectorTiles />
      <InvestorSection />
    </>
  );
}
