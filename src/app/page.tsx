import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollCanvas from "@/components/ScrollCanvas";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import CTASection from "@/components/CTASection";
import DataFlowBackground from "@/components/DataFlowBackground";

export default function Home() {
    return (
        <main className="relative">
            <DataFlowBackground />
            <Navbar />
            <Hero />
            <ScrollCanvas />
            <ProjectsGrid />
            <ProcessSection />
            <ProofSection />
            <CTASection />
        </main>
    );
}
