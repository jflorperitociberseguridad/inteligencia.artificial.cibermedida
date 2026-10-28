import { Seo } from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="bg-[#14163C] min-h-screen" data-testid="contact-page">
      <Seo
        title="Contacto | Cibermedida"
        description="Solicita información sobre consultoría de IA, agentes conversacionales, automatización, formación o ciberseguridad. Respuesta priorizada si has sufrido un ataque."
      />
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
