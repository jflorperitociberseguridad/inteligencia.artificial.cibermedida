import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import "@/App.css";
import HomePage from "@/pages/HomePage";
import WhatIsPage from "@/pages/WhatIsPage";
import ServicesPage from "@/pages/ServicesPage";
import SuccessCasesPage from "@/pages/SuccessCasesPage";
import CompliancePage from "@/pages/CompliancePage";
import GuidePage from "@/pages/GuidePage";
import EcosystemPage from "@/pages/EcosystemPage";
import ContactPage from "@/pages/ContactPage";
import LegalPage from "@/pages/LegalPage";
import { ChatWidget } from "@/components/ChatWidget";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inteligencia-artificial" element={<WhatIsPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/casos-de-exito" element={<SuccessCasesPage />} />
            <Route path="/cumplimiento" element={<CompliancePage />} />
            <Route path="/guia-de-incidentes" element={<GuidePage />} />
            <Route path="/ecosistema" element={<EcosystemPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      <ChatWidget />
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
