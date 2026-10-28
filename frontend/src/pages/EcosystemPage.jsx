import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { ECOSYSTEM, CERTS } from "@/data/content";

export default function EcosystemPage() {
  return (
    <div className="bg-[#14163C] min-h-screen" data-testid="ecosystem-page">
      <Seo
        title="Ecosistema Cibermedida | Proyectos de IA y Transformación Digital"
        description="Aula Virtual, Signados, Markitplace, Consulting, Turismo y chatbot conversacional: proyectos propios que cubren el ciclo completo de la transformación digital."
      />
      <Navbar />
      <main className="pt-32 pb-24">
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
                  className="card-glow group h-full bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-7"
                >
                  <span className="font-mono-cyber text-[10px] uppercase tracking-[0.2em] text-[#3FE0F2] border border-[#3FE0F2]/30 rounded-full px-3 py-1">
                    {p.tag}
                  </span>
                  <h2 className="font-heading mt-4 text-lg font-semibold text-[#EEFBFF] flex items-center gap-2 group-hover:text-[#3FE0F2] transition-colors duration-300">
                    {p.name}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h2>
                  <p className="mt-2 text-sm text-[#B9C3EC] leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-14">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#3FE0F2]/10 pt-10" data-testid="certs-strip">
              <span className="font-mono-cyber text-[11px] uppercase tracking-[0.25em] text-[#7D86C2]">
                Marcos y referencias
              </span>
              {CERTS.map((c) => (
                <span key={c} className="font-heading text-sm font-semibold uppercase tracking-wider text-[#B9C3EC]/70">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
