import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Siren } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/content";

export const scrollToSection = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -72 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const goToContact = (navigate, service) => {
  if (service) sessionStorage.setItem("ciber_service", service);
  navigate("/contacto");
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || location.pathname !== "/";

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#14163C]/85 backdrop-blur-xl border-b border-[#3FE0F2]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <Link
          to="/"
          data-testid="navbar-logo-link"
          className="flex items-center group"
        >
          <Logo size={46} />
        </Link>

        <nav className="hidden lg:flex items-center gap-5" data-testid="navbar-links">
          {NAV_LINKS.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.to.slice(1)}`}
                className={`text-[13px] transition-colors duration-300 ${
                  active ? "text-[#3FE0F2] font-semibold" : "text-[#B9C3EC] hover:text-[#3FE0F2]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-emergency-cta"
            onClick={() => goToContact(navigate, "He sufrido un ciberataque")}
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono-cyber uppercase tracking-wider text-[#FF6B6B] border border-[#FF4D4D]/40 rounded-full px-4 py-2 hover:bg-[#FF4D4D]/10 hover:border-[#FF4D4D]/70 transition-all duration-300"
          >
            <Siren size={14} />
            ¿Ataque en curso?
          </button>
          <button
            data-testid="nav-contact-cta"
            onClick={() => goToContact(navigate)}
            className="hidden md:inline-flex items-center text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-5 py-2.5 hover:bg-[#7FEBF8] hover:shadow-[0_0_24px_rgba(63,224,242,0.4)] transition-all duration-300"
          >
            Solicitar información
          </button>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#EEFBFF] p-2"
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#1B1E4E] border-b border-[#3FE0F2]/20"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-mobile-link-${l.to.slice(1)}`}
                  className={`text-base transition-colors ${
                    location.pathname === l.to ? "text-[#3FE0F2] font-semibold" : "text-[#B9C3EC] hover:text-[#3FE0F2]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <button
                data-testid="nav-mobile-contact-cta"
                onClick={() => goToContact(navigate)}
                className="mt-2 text-sm font-semibold text-[#14163C] bg-[#3FE0F2] rounded-full px-5 py-3 text-center"
              >
                Solicitar información
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
