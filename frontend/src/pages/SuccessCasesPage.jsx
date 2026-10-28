import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, PenTool, Rocket, HeartHandshake } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { CASE_STUDIES, PROCESS_STEPS } from "@/data/content";

const PROCESS_ICONS = [Search, PenTool, Rocket, HeartHandshake];

const FeaturedCase = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Reveal>
      <div
        ref={ref}
        data-testid="case-featured"
        className="relative grid lg:grid-cols-2 bg-[#102B49] border border-[#62E7EF]/20 rounded-2xl overflow-hidden"
      >
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            style={{ y: imgY }}
            className="w-full h-full object-cover scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#102B49]/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102B49] to-transparent lg:hidden" />
        </div>
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono-cyber text-[10px] uppercase tracking-[0.2em] text-[#071725] bg-[#62E7EF] rounded-full px-3 py-1 font-semibold">
              Caso destacado
            </span>
            <span className="font-mono-cyber text-[10px] uppercase tracking-[0.2em] text-[#62E7EF] border border-[#62E7EF]/30 rounded-full px-3 py-1">
              {item.sector}
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#EEFBFF] leading-tight">{item.name}</h2>
          <p className="mt-4 text-sm sm:text-base text-[#A3C3D9] leading-relaxed">{item.challenge}</p>
          <p className="mt-3 text-sm sm:text-base text-[#A3C3D9] leading-relaxed">{item.solution}</p>
          <div className="mt-6 border-l-2 border-[#06D6A0] pl-4">
            <p className="text-sm text-[#EEFBFF] leading-relaxed italic">{item.result}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.stack.map((t) => (
              <span key={t} className="text-[11px] font-mono-cyber text-[#5C7D99] bg-[#0A1128] border border-[#62E7EF]/10 rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default function SuccessCasesPage() {
  const navigate = useNavigate();
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <div className="bg-[#071725] min-h-screen" data-testid="cases-page">
      <Seo
        title="Casos de Éxito | Proyectos de IA en Producción | Cibermedida"
        description="Proyectos reales de Cibermedida en producción: aula virtual, chatbot conversacional, firma digital, turismo inteligente y generación de contenidos con IA."
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            testId="cases-heading"
            kicker="Casos de éxito"
            title="Proyectos de IA que ya están en producción"
            description="No hablamos de promesas: estos son productos reales del ecosistema Cibermedida, funcionando hoy para organizaciones reales."
          />

          <FeaturedCase item={featured} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div
                  data-testid={`case-card-${i}`}
                  className="card-glow group h-full bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B49] to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-mono-cyber uppercase tracking-wider text-[#62E7EF] border border-[#62E7EF]/40 bg-[#071725]/70 backdrop-blur-sm rounded-full px-3 py-1">
                      {c.sector}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-semibold text-[#EEFBFF] group-hover:text-[#62E7EF] transition-colors duration-300">
                      {c.name}
                    </h3>
                    <p className="mt-3 text-sm text-[#A3C3D9] leading-relaxed flex-1">{c.challenge}</p>
                    <div className="mt-4 border-l-2 border-[#06D6A0] pl-3">
                      <p className="text-xs text-[#EEFBFF] leading-relaxed italic">{c.result}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.stack.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono-cyber text-[#5C7D99] bg-[#0A1128] rounded-full px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-28">
            <SectionHeading
              testId="process-heading"
              kicker="Cómo trabajamos"
              title="De la primera reunión al proyecto en marcha"
              description="Todos estos casos siguieron el mismo método: cuatro fases, sin sorpresas."
            />
            <div className="relative">
              <div className="absolute top-6 left-6 lg:left-0 lg:right-0 lg:top-6 bottom-6 lg:bottom-auto w-px lg:w-auto lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-[#62E7EF]/50 via-[#62E7EF]/20 to-transparent" />
              <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
                {PROCESS_STEPS.map((s, i) => {
                  const Icon = PROCESS_ICONS[i];
                  return (
                    <Reveal key={s.step} delay={i * 0.1}>
                      <div data-testid={`process-step-${i}`} className="relative pl-16 lg:pl-0 lg:pt-16">
                        <div className="absolute left-0 top-0 lg:left-0 lg:top-0 w-12 h-12 rounded-full bg-[#102B49] border border-[#62E7EF]/40 flex items-center justify-center text-[#62E7EF] z-10 shadow-[0_0_20px_rgba(98,231,239,0.2)]">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono-cyber text-xs text-[#5C7D99] tracking-[0.2em]">{s.step}</span>
                        <h3 className="font-heading mt-2 text-lg font-semibold text-[#EEFBFF]">{s.title}</h3>
                        <p className="mt-2 text-sm text-[#A3C3D9] leading-relaxed">{s.text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

          <Reveal delay={0.1} className="mt-24">
            <div className="relative bg-[#102B49] border border-[#62E7EF]/20 rounded-2xl p-10 sm:p-14 text-center overflow-hidden" data-testid="cases-cta">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(98,231,239,0.12) 0%, rgba(16,43,73,0) 65%)" }} />
              <h2 className="relative font-heading text-2xl sm:text-3xl font-semibold text-[#EEFBFF] leading-tight">
                Tu organización puede ser el próximo caso
              </h2>
              <p className="relative mt-4 text-base text-[#A3C3D9] max-w-xl mx-auto leading-relaxed">
                Cuéntanos qué proceso te consume más tiempo y te mostramos cómo lo resolvería un proyecto como estos.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <button
                  data-testid="cases-cta-button"
                  onClick={() => goToContact(navigate, "Consultoría e implantación de IA")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-8 py-4 hover:bg-[#7DE1E2] hover:shadow-[0_0_32px_rgba(98,231,239,0.45)] transition-all duration-300 group"
                >
                  Contar mi proyecto
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <Link
                  to="/ecosistema"
                  data-testid="cases-ecosystem-link"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#EEFBFF] border border-[#62E7EF]/40 rounded-full px-8 py-4 hover:border-[#62E7EF] hover:bg-[#62E7EF]/10 transition-all duration-300"
                >
                  Ver el ecosistema
                  <ArrowUpRight size={16} className="text-[#62E7EF]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
