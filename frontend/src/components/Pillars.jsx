import { Award, BookOpen, Zap } from "lucide-react";
import { PILLARS, IMAGES } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

const PILLAR_ICONS = [Award, BookOpen, Zap];

export const Pillars = () => (
  <section data-testid="pillars-section" className="relative bg-[#071725] py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.cables} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.07]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071725] via-transparent to-[#071725]" />
    </div>
    <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeading
        testId="pillars-heading"
        kicker="Cibermedida"
        title="Tu referencia en ciberseguridad y transformación digital"
        description="Informar, proteger y formar: hacemos comprensible una transformación que ya redefine cómo trabajan las organizaciones."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {PILLARS.map((p, i) => {
          const Icon = PILLAR_ICONS[i];
          return (
            <Reveal key={p.title} delay={i * 0.1}>
              <div data-testid={`pillar-card-${i}`} className="card-glow h-full bg-[#102B49]/80 backdrop-blur-sm border border-[#62E7EF]/15 rounded-2xl p-8">
                <Icon size={26} className="text-[#62E7EF]" />
                <h3 className="font-heading mt-5 text-xl font-semibold text-[#EEFBFF]">{p.title}</h3>
                <p className="mt-3 text-sm text-[#A3C3D9] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
