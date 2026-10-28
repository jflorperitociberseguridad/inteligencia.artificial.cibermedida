import { ArrowUpRight } from "lucide-react";
import { ECOSYSTEM, CERTS } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

export const Ecosystem = () => (
  <section id="ecosistema" data-testid="ecosystem-section" className="relative bg-[#0A1128] py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeading
        testId="ecosystem-heading"
        kicker="Ecosistema"
        title="Un ecosistema para proteger, formar y transformar"
        description="Proyectos propios que cubren el ciclo completo de la transformación digital: del aula a la firma certificada."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ECOSYSTEM.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div
              data-testid={`ecosystem-card-${i}`}
              className="card-glow group h-full bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl p-7"
            >
              <span className="font-mono-cyber text-[10px] uppercase tracking-[0.2em] text-[#62E7EF] border border-[#62E7EF]/30 rounded-full px-3 py-1">
                {p.tag}
              </span>
              <h3 className="font-heading mt-4 text-lg font-semibold text-[#EEFBFF] flex items-center gap-2 group-hover:text-[#62E7EF] transition-colors duration-300">
                {p.name}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="mt-2 text-sm text-[#A3C3D9] leading-relaxed">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#62E7EF]/10 pt-10" data-testid="certs-strip">
          <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#5C7D99]">
            Marcos y referencias
          </span>
          {CERTS.map((c) => (
            <span key={c} className="font-heading text-sm font-semibold uppercase tracking-wider text-[#A3C3D9]/70">
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
