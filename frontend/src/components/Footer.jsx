import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/content";
import { scrollToSection } from "./Navbar";

export const Footer = () => (
  <footer data-testid="main-footer" className="bg-[#071725] border-t border-[#62E7EF]/15 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-3">
          <Logo size={30} />
          <span className="font-heading font-bold text-lg text-[#EEFBFF]">Cibermedida</span>
        </div>
        <p className="mt-4 text-sm text-[#5C7D99] leading-relaxed max-w-xs">
          Ciberseguridad y transformación digital para empresas, centros formativos y administraciones públicas.
        </p>
      </div>
      <div>
        <h3 className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#62E7EF] mb-5">Secciones</h3>
        <nav className="flex flex-col gap-3" data-testid="footer-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`footer-link-${l.href.slice(1)}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(l.href); }}
              className="text-sm text-[#A3C3D9] hover:text-[#62E7EF] transition-colors duration-300 w-fit"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            data-testid="footer-link-contacto"
            onClick={(e) => { e.preventDefault(); scrollToSection("#contacto"); }}
            className="text-sm text-[#A3C3D9] hover:text-[#62E7EF] transition-colors duration-300 w-fit"
          >
            Contacto
          </a>
        </nav>
      </div>
      <div>
        <h3 className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#62E7EF] mb-5">Contacto</h3>
        <div className="flex flex-col gap-3 text-sm text-[#A3C3D9]">
          <span className="flex items-center gap-2.5">
            <MapPin size={15} className="text-[#62E7EF]" /> Cantabria · España
          </span>
          <a href="mailto:jfloradmin@cibermedida.es" data-testid="footer-email-link" className="flex items-center gap-2.5 hover:text-[#62E7EF] transition-colors duration-300 w-fit">
            <Mail size={15} className="text-[#62E7EF]" /> jfloradmin@cibermedida.es
          </a>
        </div>
        <div className="flex gap-5 mt-6 text-xs text-[#5C7D99]">
          <Link to="/legal/aviso-legal" data-testid="footer-legal-link" className="hover:text-[#62E7EF] transition-colors">Aviso legal</Link>
          <Link to="/legal/politica-privacidad" data-testid="footer-privacy-link" className="hover:text-[#62E7EF] transition-colors">Política de privacidad</Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-[#62E7EF]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-xs text-[#5C7D99]" data-testid="footer-copyright">
        © 2026 Cibermedida. Todos los derechos reservados.
      </span>
      <span className="font-mono-cyber text-[10px] uppercase tracking-[0.25em] text-[#5C7D99]">
        Proteger · Formar · Transformar
      </span>
    </div>
  </footer>
);
