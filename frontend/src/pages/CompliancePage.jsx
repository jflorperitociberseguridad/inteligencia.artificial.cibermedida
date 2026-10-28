import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { COMPLIANCE_ITEMS, IMAGES } from "@/data/content";

export default function CompliancePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#14163C] min-h-screen" data-testid="compliance-page">
      <Seo
        title="Cumplimiento Normativo: AI Act, RGPD, ENS y NIS2 | Cibermedida"
        description="Despliega inteligencia artificial con garantías: clasificación de sistemas según el AI Act, protección de datos, Esquema Nacional de Seguridad y NIS2."
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3">
              <SectionHeading
                testId="compliance-heading"
                kicker="Cumplimiento"
                title="IA que se puede demostrar: normativa y gobernanza"
                description="Cumplir no es coleccionar certificados: es poder demostrar, con evidencias, que tu organización usa la IA de forma responsable. Acompañamos en los marcos que exigen clientes, administraciones y reguladores."
              />
              <div className="grid sm:grid-cols-2 gap-5">
                {COMPLIANCE_ITEMS.map((c, i) => (
                  <Reveal key={c.code} delay={i * 0.07}>
                    <div
                      data-testid={`compliance-card-${i}`}
                      className="card-glow h-full bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <CheckCircle2 size={18} className="text-[#06D6A0]" />
                        <span className="font-mono-cyber text-xs uppercase tracking-[0.2em] text-[#3FE0F2]">{c.code}</span>
                      </div>
                      <h2 className="font-heading text-base font-semibold text-[#EEFBFF]">{c.title}</h2>
                      <p className="mt-2 text-sm text-[#B9C3EC] leading-relaxed">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2} className="mt-10">
                <button
                  data-testid="compliance-cta"
                  onClick={() => goToContact(navigate, "IA segura y gobierno del dato")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-8 py-3.5 hover:bg-[#7FEBF8] hover:shadow-[0_0_28px_rgba(63,224,242,0.4)] transition-all duration-300 group"
                >
                  Evaluar mi cumplimiento
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-2 lg:sticky lg:top-28" delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden border border-[#3FE0F2]/20" data-testid="compliance-image-frame">
                <img src={IMAGES.analyst} alt="Especialista revisando evidencias de cumplimiento" className="w-full h-[520px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14163C] via-[#14163C]/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-7">
                  <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#3FE0F2]">Principio rector</span>
                  <p className="mt-2 font-heading text-xl font-semibold text-[#EEFBFF] leading-snug">
                    La confianza en la IA se construye con transparencia: cada sistema que desplegamos deja evidencia auditable.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
