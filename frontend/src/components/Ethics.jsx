import { CheckCircle2 } from "lucide-react";
import { COMPLIANCE_ITEMS, IMAGES } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

export const Ethics = () => (
  <section id="cumplimiento" data-testid="ethics-section" className="relative bg-[#0A1128] py-24 sm:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-5 gap-14 items-start">
        <div className="lg:col-span-3">
          <SectionHeading
            testId="ethics-heading"
            kicker="Ética y cumplimiento"
            title="Gobernanza y normativa: la seguridad que se puede demostrar"
            description="Cumplir no es coleccionar certificados: es poder demostrar, con evidencias, que tu organización gestiona el riesgo de forma responsable. Acompañamos en los marcos que exigen clientes, administraciones y reguladores."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {COMPLIANCE_ITEMS.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.07}>
                <div
                  data-testid={`compliance-card-${i}`}
                  className="card-glow h-full bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle2 size={18} className="text-[#06D6A0]" />
                    <span className="font-mono-cyber text-xs uppercase tracking-[0.2em] text-[#62E7EF]">{c.code}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-[#EEFBFF]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#A3C3D9] leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-2 lg:sticky lg:top-28" delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden border border-[#62E7EF]/20" data-testid="ethics-image-frame">
            <img src={IMAGES.analyst} alt="Analista revisando evidencias de seguridad" className="w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071725] via-[#071725]/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7">
              <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#62E7EF]">Principio rector</span>
              <p className="mt-2 font-heading text-xl font-semibold text-[#EEFBFF] leading-snug">
                La confianza se construye con transparencia: cada control que implantamos deja evidencia auditable.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
