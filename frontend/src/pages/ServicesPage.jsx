import { useNavigate } from "react-router-dom";
import { Cpu, Bot, Workflow, GraduationCap, Shield, Activity, ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Navbar, goToContact } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading, Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/content";

const ICONS = {
  cpu: Cpu,
  bot: Bot,
  workflow: Workflow,
  graduation: GraduationCap,
  shield: Shield,
  activity: Activity,
};

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#14163C] min-h-screen" data-testid="services-page">
      <Seo
        title="Servicios de IA y Ciberseguridad | Cibermedida"
        description="Consultoría e implantación de IA, agentes conversacionales, automatización de procesos, formación en IA, gobierno del dato y SOC 24/7."
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            testId="services-heading"
            kicker="Servicios"
            title="De la idea al agente en producción"
            description="Un catálogo modular centrado en inteligencia artificial: contrata una consultoría puntual o delega en nosotros la transformación completa, siempre sobre una base segura."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal key={s.title} delay={i * 0.07}>
                  <button
                    data-testid={`service-card-${i}`}
                    onClick={() => goToContact(navigate, s.title)}
                    className="card-glow group w-full text-left h-full bg-[#242764] border border-[#3FE0F2]/15 rounded-2xl p-7 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#3FE0F2]/10 border border-[#3FE0F2]/25 flex items-center justify-center text-[#3FE0F2] group-hover:bg-[#3FE0F2]/20 group-hover:shadow-[0_0_20px_rgba(63,224,242,0.3)] transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <h2 className="font-heading mt-5 text-lg font-semibold text-[#EEFBFF] group-hover:text-[#3FE0F2] transition-colors duration-300">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm text-[#B9C3EC] leading-relaxed flex-1">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D86C2] group-hover:text-[#3FE0F2] transition-colors duration-300">
                      Solicitar información
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
