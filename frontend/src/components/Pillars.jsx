import { Award, BookOpen, Zap } from "lucide-react";
import { PILLARS, IMAGES } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

const PILLAR_ICONS = [Award, BookOpen, Zap];

export const Pillars = () => (
  <section data-testid="pillars-section" className="relative bg-[#14163C] py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.cables} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.07]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#14163C] via-transparent to-[#14163C]" />
    </div>
    <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeading
        testId="pillars-heading"
        kicker="Cibermedida"
        title="Tu referencia en inteligencia artificial y ciberseguridad"
        description="Aplicar, proteger y formar: hacemos útil y segura una tecnología que ya redefine cómo trabajan las organizaciones."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {PILLARS.map((p, i) => {
          const Icon = PILLAR_ICONS[i];
          return (
            <Reveal key={p.title} delay={i * 0.1}>
              <div data-testid={`pillar-card-${i}`} className="card-glow h-full bg-[#242764]/80 backdrop-blur-sm border border-[#3FE0F2]/15 rounded-2xl p-8">
                <Icon size={26} className="text-[#3FE0F2]" />
                <h3 className="font-heading mt-5 text-xl font-semibold text-[#EEFBFF]">{p.title}</h3>
                <p className="mt-3 text-sm text-[#B9C3EC] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
