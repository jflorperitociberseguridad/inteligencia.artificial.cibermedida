import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2, ShieldCheck } from "lucide-react";
import { SERVICE_OPTIONS } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY = { name: "", company: "", phone: "", email: "", service: "", message: "" };

const inputCls =
  "w-full bg-[#0A1128] border border-[#62E7EF]/20 rounded-xl px-4 py-3 text-sm text-[#EEFBFF] placeholder:text-[#5C7D99] focus:outline-none focus:border-[#62E7EF] focus:ring-1 focus:ring-[#62E7EF]/40 transition-all duration-300";

export const ContactSection = () => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const preselected = sessionStorage.getItem("ciber_service");
    if (preselected) {
      setForm((f) => ({ ...f, service: preselected }));
      sessionStorage.removeItem("ciber_service");
    }
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        company: form.company || null,
        phone: form.phone || null,
        service: form.service || null,
        message: form.message,
      });
      toast.success("Solicitud enviada", {
        description: "Hemos recibido tu mensaje. Te contactaremos lo antes posible.",
      });
      setForm(EMPTY);
    } catch (err) {
      toast.error("No se pudo enviar", {
        description: "Inténtalo de nuevo en unos minutos o escríbenos por email.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="relative bg-[#0A1128] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(98,231,239,0.1) 0%, rgba(10,17,40,0) 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading
            testId="contact-heading"
            kicker="Contacto directo"
            title="Solicita información o una evaluación inicial"
            description="Cuéntanos qué quieres conseguir con la IA y te proponemos los primeros pasos, sin compromiso. Si has sufrido un ataque, indícalo en el mensaje y priorizaremos tu solicitud."
          />
          <Reveal delay={0.1}>
            <div className="flex items-start gap-4 bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl p-6" data-testid="contact-assurance-card">
              <ShieldCheck size={24} className="text-[#06D6A0] shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading text-base font-semibold text-[#EEFBFF]">Confidencialidad garantizada</h2>
                <p className="mt-1 text-sm text-[#A3C3D9] leading-relaxed">
                  Toda la información que compartas se trata con confidencialidad y conforme al RGPD. Nunca te pediremos contraseñas ni datos bancarios por email.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="bg-[#102B49] border border-[#62E7EF]/20 rounded-2xl p-7 sm:p-9 flex flex-col gap-4" data-testid="contact-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required minLength={2} data-testid="contact-name-input" placeholder="Nombre *" value={form.name} onChange={set("name")} className={inputCls} />
              <input data-testid="contact-company-input" placeholder="Empresa" value={form.company} onChange={set("company")} className={inputCls} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="email" data-testid="contact-email-input" placeholder="Correo electrónico *" value={form.email} onChange={set("email")} className={inputCls} />
              <input data-testid="contact-phone-input" placeholder="Teléfono" value={form.phone} onChange={set("phone")} className={inputCls} />
            </div>
            <select
              data-testid="contact-service-select"
              value={form.service}
              onChange={set("service")}
              className={`${inputCls} appearance-none ${form.service ? "" : "text-[#5C7D99]"}`}
            >
              <option value="" disabled>Tipo de servicio</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <textarea
              required
              minLength={10}
              rows={5}
              data-testid="contact-message-input"
              placeholder="Cuéntanos qué necesitas *"
              value={form.message}
              onChange={set("message")}
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              disabled={sending}
              data-testid="contact-submit-button"
              className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-7 py-3.5 hover:bg-[#7DE1E2] hover:shadow-[0_0_32px_rgba(98,231,239,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Enviando…" : "Enviar solicitud"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
