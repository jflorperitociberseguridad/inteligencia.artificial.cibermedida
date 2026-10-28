import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/content";

export const Footer = () => (
  <footer data-testid="main-footer" className="bg-[#14163C] border-t border-[#3FE0F2]/15 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-12">
      <div>
        <Logo size={52} />
        <p className="mt-4 text-sm text-[#7D86C2] leading-relaxed max-w-xs">
          Inteligencia artificial, ciberseguridad y transformación digital para empresas, centros formativos y administraciones públicas.
        </p>
      </div>
      <div>
        <h3 className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#3FE0F2] mb-5">Secciones</h3>
        <nav className="flex flex-col gap-3" data-testid="footer-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`footer-link-${l.to.slice(1)}`}
              className="text-sm text-[#B9C3EC] hover:text-[#3FE0F2] transition-colors duration-300 w-fit"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            data-testid="footer-link-contacto"
            className="text-sm text-[#B9C3EC] hover:text-[#3FE0F2] transition-colors duration-300 w-fit"
          >
            Contacto
          </Link>
        </nav>
      </div>
      <div>
        <h3 className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#3FE0F2] mb-5">Contacto</h3>
        <div className="flex flex-col gap-3 text-sm text-[#B9C3EC]">
          <span className="flex items-center gap-2.5">
            <MapPin size={15} className="text-[#3FE0F2]" /> Cantabria · España
          </span>
          <a href="mailto:jfloradmin@cibermedida.es" data-testid="footer-email-link" className="flex items-center gap-2.5 hover:text-[#3FE0F2] transition-colors duration-300 w-fit">
            <Mail size={15} className="text-[#3FE0F2]" /> jfloradmin@cibermedida.es
          </a>
        </div>
        <div className="flex gap-5 mt-6 text-xs text-[#7D86C2]">
          <Link to="/legal/aviso-legal" data-testid="footer-legal-link" className="hover:text-[#3FE0F2] transition-colors">Aviso legal</Link>
          <Link to="/legal/politica-privacidad" data-testid="footer-privacy-link" className="hover:text-[#3FE0F2] transition-colors">Política de privacidad</Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-[#3FE0F2]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-xs text-[#7D86C2]" data-testid="footer-copyright">
        © 2026 Cibermedida. Todos los derechos reservados.
      </span>
      <span className="font-mono-cyber text-[10px] uppercase tracking-[0.25em] text-[#7D86C2]">
        IA · Proteger · Formar · Transformar
      </span>
    </div>
  </footer>
);
