"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StructureSection from "@/components/StructureSection";
import SolutionsSection from "@/components/SolutionsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ClientsSection from "@/components/ClientsSection";
import CasesSection from "@/components/CasesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// const Gear3D = dynamic(() => import("@/components/Gear3D"), { ssr: false });

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      return lenis;
    };
    
    let lenisInstance: any;
    initLenis().then((lenis) => { lenisInstance = lenis; });

    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <main className="relative bg-dark min-h-screen text-white overflow-hidden font-sans selection:bg-accent selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        {/* <Gear3D /> */}
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <StructureSection />
        <SolutionsSection />
        <DifferentialsSection />
        <CasesSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
