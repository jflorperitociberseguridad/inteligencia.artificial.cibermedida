import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LEGAL_PAGES } from "@/data/content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LegalPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const page = LEGAL_PAGES[slug];

  if (!page) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="bg-[#071725] min-h-screen" data-testid="legal-page">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            data-testid="legal-back-link"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-[#A3C3D9] hover:text-[#62E7EF] transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={15} /> Volver al inicio
          </motion.button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#62E7EF]">{page.updated}</span>
            <h1 className="font-heading mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#EEFBFF]" data-testid="legal-title">
              {page.title}
            </h1>
            <div className="mt-10 space-y-6" data-testid="legal-body">
              {page.blocks.map((b, i) =>
                b.type === "h3" ? (
                  <h2 key={i} className="font-heading text-xl font-semibold text-[#62E7EF] pt-4">
                    {b.text}
                  </h2>
                ) : (
                  <p key={i} className="text-base text-[#A3C3D9] leading-relaxed">
                    {b.text}
                  </p>
                )
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
