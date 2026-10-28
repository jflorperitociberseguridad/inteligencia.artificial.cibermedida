import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatsStrip } from "@/components/StatsStrip";
import { NewsSection } from "@/components/NewsSection";
import { WhatIs } from "@/components/WhatIs";
import { Services } from "@/components/Services";
import { Ethics } from "@/components/Ethics";
import { IncidentGuide } from "@/components/IncidentGuide";
import { Ecosystem } from "@/components/Ecosystem";
import { Pillars } from "@/components/Pillars";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="bg-[#071725] min-h-screen" data-testid="cibermedida-app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatsStrip />
        <NewsSection />
        <WhatIs />
        <Services />
        <Ethics />
        <IncidentGuide />
        <Ecosystem />
        <Pillars />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#102B49",
            border: "1px solid rgba(98,231,239,0.3)",
            color: "#EEFBFF",
          },
        }}
      />
    </div>
  );
}

export default App;
