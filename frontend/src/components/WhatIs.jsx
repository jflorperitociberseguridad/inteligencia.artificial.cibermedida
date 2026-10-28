import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES, CID_PILLARS } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

export const WhatIs = () => {
  const [active, setActive] = useState(CID_PILLARS[0].id);
  const pillar = CID_PILLARS.find((p) => p.id === active);

  return (
    <section id="que-es" data-testid="whatis-section" className="relative bg-[#0A1128] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-[#62E7EF]/20 scanline" data-testid="whatis-image-frame">
            <img src={IMAGES.serverRack} alt="Centro de datos monitorizado" className="w-full h-[420px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071725]/80 via-transparent to-[#62E7EF]/10" />
            <div className="absolute bottom-5 left-5 font-mono-cyber text-[11px] uppercase tracking-[0.2em] text-[#62E7EF] bg-[#071725]/80 backdrop-blur-sm border border-[#62E7EF]/30 rounded-full px-4 py-2">
              Monitorización continua
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#62E7EF]/40 rounded-br-3xl pointer-events-none" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            testId="whatis-heading"
            kicker="¿Qué es?"
            title="¿Qué es realmente la ciberseguridad organizacional?"
            description="No es un antivirus ni una suscripción: es la disciplina que protege cuatro propiedades esenciales de la información. Cuando una falla, el negocio entero se resiente."
          />
          <div className="flex flex-wrap gap-2 mb-6" data-testid="whatis-tabs">
            {CID_PILLARS.map((p) => (
              <button
                key={p.id}
                data-testid={`whatis-tab-${p.id}`}
                onClick={() => setActive(p.id)}
                className={`text-xs font-mono-cyber uppercase tracking-wider rounded-full px-4 py-2 border transition-all duration-300 ${
                  active === p.id
                    ? "bg-[#62E7EF] text-[#071725] border-[#62E7EF] font-semibold"
                    : "text-[#A3C3D9] border-[#62E7EF]/20 hover:border-[#62E7EF]/60"
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
              className="bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl p-7"
              data-testid="whatis-tab-panel"
            >
              <h3 className="font-heading text-xl font-medium text-[#62E7EF]">{pillar.title}</h3>
              <p className="mt-3 text-base text-[#A3C3D9] leading-relaxed">{pillar.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
