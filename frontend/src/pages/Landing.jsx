import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatsStrip } from "@/components/StatsStrip";
import { NewsSection } from "@/components/NewsSection";
import { WhatIs } from "@/components/WhatIs";
import { Services } from "@/components/Services";
import { Ethics } from "@/components/Ethics";
import { IncidentGuide } from "@/components/IncidentGuide";
import { RiskQuiz } from "@/components/RiskQuiz";
import { Ecosystem } from "@/components/Ecosystem";
import { Pillars } from "@/components/Pillars";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { scrollToSection } from "@/components/Navbar";

export default function Landing() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const t = setTimeout(() => {
        scrollToSection(target);
        navigate(location.pathname, { replace: true, state: {} });
      }, 350);
      return () => clearTimeout(t);
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <div data-testid="landing-page">
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
        <RiskQuiz />
        <Ecosystem />
        <Pillars />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
