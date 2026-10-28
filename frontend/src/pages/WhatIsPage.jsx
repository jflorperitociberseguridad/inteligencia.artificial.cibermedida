import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { AI_PILLARS, AI_APPLICATIONS, IMAGES } from "@/data/content";

export default function WhatIsPage() {
  const [active, setActive] = useState(AI_PILLARS[0].id);
  const navigate = useNavigate();
  const pillar = AI_PILLARS.find((p) => p.id === active);

  return (
    <div className="bg-[#14163C] min-h-screen" data-testid="whatis-page">
      <Seo
        title="Qué es la Inteligencia Artificial | Cibermedida"
        description="IA generativa, agentes, analítica e IA segura explicados sin jerga, con aplicaciones reales para empresas, centros formativos y administraciones."
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#3FE0F2]/20 scanline" data-testid="whatis-image-frame">
                <img src={IMAGES.code} alt="Modelos de inteligencia artificial en funcionamiento" className="w-full h-[420px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#14163C]/80 via-transparent to-[#3FE0F2]/10" />
                <div className="absolute bottom-5 left-5 font-mono-cyber text-[11px] uppercase tracking-[0.2em] text-[#3FE0F2] bg-[#14163C]/80 backdrop-blur-sm border border-[#3FE0F2]/30 rounded-full px-4 py-2">
                  Modelos en producción
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#3FE0F2]/40 rounded-br-3xl pointer-events-none" />
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading
                testId="whatis-heading"
                kicker="Inteligencia Artificial"
                title="¿Qué es realmente la IA aplicada a una organización?"
                description="No es magia ni un chat de moda: son cuatro capacidades concretas que, bien gobernadas, transforman cómo trabaja tu equipo."
              />
              <div className="flex flex-wrap gap-2 mb-6" data-testid="whatis-tabs">
                {AI_PILLARS.map((p) => (
                  <button
                    key={p.id}
                    data-testid={`whatis-tab-${p.id}`}
                    onClick={() => setActive(p.id)}
                    className={`text-xs font-mono-cyber uppercase tracking-wider rounded-full px-4 py-2 border transition-all duration-300 ${
                      active === p.id
                        ? "bg-[#3FE0F2] text-[#14163C] border-[#3FE0F2] font-semibold"
                        : "text-[#B9C3EC] border-[#3FE0F2]/20 hover:border-[#3FE0F2]/60"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-7"
                  data-testid="whatis-tab-panel"
                >
                  <h2 className="font-heading text-xl font-medium text-[#3FE0F2]">{pillar.title}</h2>
                  <p className="mt-3 text-base text-[#B9C3EC] leading-relaxed">{pillar.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-24">
            <SectionHeading
              testId="whatis-applications-heading"
              kicker="Aplicaciones"
              title="La misma tecnología, tres realidades distintas"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {AI_APPLICATIONS.map((a, i) => (
                <Reveal key={a.sector} delay={i * 0.08}>
                  <div data-testid={`whatis-application-${i}`} className="card-glow h-full bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-7">
                    <h3 className="font-heading text-lg font-semibold text-[#EEFBFF]">{a.sector}</h3>
                    <p className="mt-3 text-sm text-[#B9C3EC] leading-relaxed">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15} className="mt-12 text-center">
              <button
                data-testid="whatis-cta"
                onClick={() => goToContact(navigate, "Consultoría e implantación de IA")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-8 py-3.5 hover:bg-[#7FEBF8] hover:shadow-[0_0_28px_rgba(63,224,242,0.4)] transition-all duration-300 group"
              >
                Descubrir mi caso de uso
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
