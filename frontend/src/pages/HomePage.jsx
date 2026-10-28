import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatsStrip } from "@/components/StatsStrip";
import { RiskQuiz } from "@/components/RiskQuiz";
import { Pillars } from "@/components/Pillars";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { HOME_HIGHLIGHTS } from "@/data/content";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div data-testid="home-page">
      <Seo
        title="Cibermedida | Inteligencia Artificial y Ciberseguridad para Empresas"
        description="Cibermedida — Inteligencia artificial aplicada y segura: consultoría de IA, agentes conversacionales, automatización, formación y ciberseguridad para empresas y administraciones."
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatsStrip />

        <section data-testid="highlights-section" className="relative bg-[#14163C] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              testId="highlights-heading"
              kicker="Tres caminos"
              title="Entender, aplicar y cumplir: así trabajamos la IA"
              description="Toda organización llega en un momento distinto. Elige por dónde empezar."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {HOME_HIGHLIGHTS.map((h, i) => (
                <Reveal key={h.to} delay={i * 0.08}>
                  <Link
                    to={h.to}
                    data-testid={`highlight-card-${i}`}
                    className="card-glow group block h-full bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-8"
                  >
                    <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#3FE0F2]">{h.kicker}</span>
                    <h3 className="font-heading mt-4 text-xl font-semibold text-[#EEFBFF] group-hover:text-[#3FE0F2] transition-colors duration-300 leading-snug">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#B9C3EC] leading-relaxed">{h.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#3FE0F2]">
                      Explorar
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RiskQuiz />

        <section data-testid="home-cases-teaser" className="relative bg-[#1B1E4E] py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <Link
                to="/casos-de-exito"
                data-testid="home-cases-teaser-link"
                className="card-glow group flex flex-col sm:flex-row sm:items-center gap-6 bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-8 sm:p-10"
              >
                <div className="flex-1">
                  <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#3FE0F2]">Casos de éxito</span>
                  <h2 className="font-heading mt-3 text-2xl sm:text-3xl font-semibold text-[#EEFBFF] group-hover:text-[#3FE0F2] transition-colors duration-300 leading-tight">
                    Aula Virtual, chatbot conversacional, firma digital y más: proyectos reales en producción
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3FE0F2] shrink-0">
                  Ver los proyectos
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        <Pillars />

        <section data-testid="home-cta-banner" className="relative bg-[#1B1E4E] py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(63,224,242,0.12) 0%, rgba(27,30,78,0) 60%)" }} />
          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#EEFBFF] leading-tight">
                La IA ya está en tu sector. La pregunta es si la diriges tú.
              </h2>
              <p className="mt-4 text-base text-[#B9C3EC] leading-relaxed max-w-2xl mx-auto">
                Cuéntanos dónde pierde tiempo tu equipo y te proponemos el primer caso de uso, sin compromiso.
              </p>
              <button
                data-testid="home-cta-button"
                onClick={() => goToContact(navigate)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-8 py-4 hover:bg-[#7FEBF8] hover:shadow-[0_0_32px_rgba(63,224,242,0.45)] transition-all duration-300 group"
              >
                Empezar ahora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
