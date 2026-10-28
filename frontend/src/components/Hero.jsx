import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { IMAGES } from "@/data/content";
import { scrollToSection, goToContact } from "./Navbar";

const LINES = [
  { text: "Inteligencia artificial", accent: false },
  { text: "aplicada y segura", accent: true },
  { text: "para tu organización", accent: false },
];

export const Hero = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden grain">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.hero}
          data-testid="hero-video"
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/media/hero-video-web.mp4" type="video/mp4" />
          <source src="/media/hero-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14163C]/70 via-[#14163C]/85 to-[#14163C]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(63,224,242,0.18) 0%, rgba(20,22,60,0) 70%), radial-gradient(ellipse at 15% 85%, rgba(168,124,255,0.16) 0%, rgba(20,22,60,0) 60%)" }} />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-[#06D6A0]" data-testid="hero-status-dot" />
          <span className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#3FE0F2]" data-testid="hero-status-text">
            IA en producción · SOC activo
          </span>
        </motion.div>

        <h1 className="font-heading font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#EEFBFF]" data-testid="hero-title">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${line.accent ? "text-[#3FE0F2] text-glow" : ""}`}
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
          className="mt-7 max-w-xl text-base sm:text-lg text-[#B9C3EC] leading-relaxed"
          data-testid="hero-subtitle"
        >
          Ayudamos a empresas, centros formativos y administraciones a adoptar la
          inteligencia artificial con retorno real: consultoría, agentes,
          automatización y formación, siempre sobre una base de ciberseguridad sólida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-cta-audit"
            onClick={() => goToContact(navigate, "Consultoría e implantación de IA")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-7 py-3.5 hover:bg-[#7FEBF8] hover:shadow-[0_0_32px_rgba(63,224,242,0.45)] transition-all duration-300 group"
          >
            Solicitar consultoría de IA
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            data-testid="hero-cta-guide"
            onClick={() => scrollToSection("#simulador")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#EEFBFF] border border-[#3FE0F2]/40 rounded-full px-7 py-3.5 hover:border-[#3FE0F2] hover:bg-[#3FE0F2]/10 transition-all duration-300"
          >
            <Sparkles size={16} className="text-[#3FE0F2]" />
            Hacer el test de madurez
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" data-testid="hero-scroll-hint">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#3FE0F2]/60 to-transparent"
        />
      </div>
    </section>
  );
};
