import { Radar, Activity, Scale, GraduationCap, Fingerprint, Cpu, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";
import { scrollToSection } from "./Navbar";

const ICONS = {
  radar: Radar,
  activity: Activity,
  scale: Scale,
  graduation: GraduationCap,
  fingerprint: Fingerprint,
  cpu: Cpu,
};

export const Services = () => (
  <section id="servicios" data-testid="services-section" className="relative bg-[#071725] py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeading
        testId="services-heading"
        kicker="Servicios"
        title="Protección, análisis y gestión avanzada de la seguridad digital"
        description="Un catálogo modular: contrata una auditoría puntual o delega la seguridad completa de tu organización."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <button
                data-testid={`service-card-${i}`}
                onClick={() => scrollToSection("#contacto")}
                className="card-glow group w-full text-left h-full bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl p-7 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#62E7EF]/10 border border-[#62E7EF]/25 flex items-center justify-center text-[#62E7EF] group-hover:bg-[#62E7EF]/20 group-hover:shadow-[0_0_20px_rgba(98,231,239,0.3)] transition-all duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-[#EEFBFF] group-hover:text-[#62E7EF] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[#A3C3D9] leading-relaxed flex-1">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C7D99] group-hover:text-[#62E7EF] transition-colors duration-300">
                  Solicitar información
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
