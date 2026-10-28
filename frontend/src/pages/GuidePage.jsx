import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Siren } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { INCIDENT_STEPS } from "@/data/content";

export default function GuidePage() {
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-[#071725] min-h-screen" data-testid="guide-page">
      <Seo
        title="Guía Práctica ante Incidentes de Seguridad | Cibermedida"
        description="Qué hacer en las primeras horas de un ciberataque: contención, preservación de evidencias, notificación a la AEPD en 72 horas y recuperación."
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHeading
              testId="incident-heading"
              kicker="Guía práctica"
              title="Qué hacer en las primeras horas de un incidente"
              description="Un protocolo claro marca la diferencia entre un susto y una crisis. Estos cuatro pasos ordenan la respuesta de cualquier organización."
            />
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-[#FF4D4D]/10 to-transparent border border-[#FF4D4D]/30 rounded-2xl p-7" data-testid="incident-emergency-card">
                <div className="flex items-center gap-3 mb-3">
                  <Siren size={22} className="text-[#FF6B6B]" />
                  <h2 className="font-heading text-lg font-semibold text-[#EEFBFF]">¿Sospechas de una brecha ahora mismo?</h2>
                </div>
                <p className="text-sm text-[#A3C3D9] leading-relaxed">
                  No apagues los equipos ni borres nada. Cuéntanos qué está ocurriendo y un especialista te indicará los primeros pasos de contención.
                </p>
                <button
                  data-testid="incident-emergency-cta"
                  onClick={() => goToContact(navigate, "He sufrido un ciberataque")}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#FF6B6B] rounded-full px-6 py-3 hover:bg-[#FF8585] transition-all duration-300"
                >
                  Reportar incidente
                </button>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4" data-testid="incident-accordion">
            {INCIDENT_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.07}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    open === i ? "bg-[#102B49] border-[#62E7EF]/40" : "bg-[#102B49]/50 border-[#62E7EF]/15 hover:border-[#62E7EF]/30"
                  }`}
                  data-testid={`incident-step-${i}`}
                >
                  <button
                    data-testid={`incident-step-toggle-${i}`}
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full flex items-center gap-5 p-6 text-left"
                  >
                    <span className={`font-mono-cyber text-sm font-medium ${open === i ? "text-[#62E7EF]" : "text-[#5C7D99]"}`}>
                      {s.step}
                    </span>
                    <span className="font-heading flex-1 text-base sm:text-lg font-semibold text-[#EEFBFF]">{s.title}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#62E7EF] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 pl-[4.25rem] text-sm text-[#A3C3D9] leading-relaxed" data-testid={`incident-step-body-${i}`}>
                          {s.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
