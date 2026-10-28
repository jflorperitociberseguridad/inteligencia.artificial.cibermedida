import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/data/content";
import { scrollToSection } from "./Navbar";

const LINES = [
  { text: "Ciberseguridad", accent: false },
  { text: "y transformación digital", accent: true },
  { text: "para tu organización", accent: false },
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="inicio" ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden grain">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src={IMAGES.hero}
          alt="Infraestructura de red protegida"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071725]/70 via-[#071725]/85 to-[#071725]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(98,231,239,0.18) 0%, rgba(7,23,37,0) 70%)" }} />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-[#06D6A0]" data-testid="hero-status-dot" />
          <span className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#62E7EF]" data-testid="hero-status-text">
            Sistemas protegidos · SOC activo
          </span>
        </motion.div>

        <h1 className="font-heading font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#EEFBFF]" data-testid="hero-title">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${line.accent ? "text-[#62E7EF] text-glow" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-7 max-w-xl text-base sm:text-lg text-[#A3C3D9] leading-relaxed"
          data-testid="hero-subtitle"
        >
          La guía práctica de la seguridad digital en España: protegemos empresas,
          centros formativos y administraciones con auditoría, vigilancia continua
          y formación que convierte a las personas en la primera línea de defensa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-cta-audit"
            onClick={() => scrollToSection("#contacto")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-7 py-3.5 hover:bg-[#7DE1E2] hover:shadow-[0_0_32px_rgba(98,231,239,0.45)] transition-all duration-300 group"
          >
            Solicitar auditoría 360°
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            data-testid="hero-cta-guide"
            onClick={() => scrollToSection("#guia")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#EEFBFF] border border-[#62E7EF]/40 rounded-full px-7 py-3.5 hover:border-[#62E7EF] hover:bg-[#62E7EF]/10 transition-all duration-300"
          >
            <ShieldCheck size={16} className="text-[#62E7EF]" />
            Ver guía de incidentes
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" data-testid="hero-scroll-hint">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#62E7EF]/60 to-transparent"
        />
      </div>
    </section>
  );
};
