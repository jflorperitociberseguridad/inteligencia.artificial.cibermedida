import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { NEWS } from "@/data/content";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CATEGORY_STYLES = {
  Normativa: "text-[#62E7EF] border-[#62E7EF]/40 bg-[#62E7EF]/10",
  Amenazas: "text-[#FF6B6B] border-[#FF4D4D]/40 bg-[#FF4D4D]/10",
  "Guías": "text-[#06D6A0] border-[#06D6A0]/40 bg-[#06D6A0]/10",
  Noticias: "text-[#A3C3D9] border-[#A3C3D9]/30 bg-[#A3C3D9]/10",
};

export default function NewsArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = NEWS.find((n) => n.id === Number(id));

  if (!article) {
    return (
      <div className="bg-[#071725] min-h-screen" data-testid="article-not-found">
        <Navbar />
        <div className="max-w-3xl mx-auto px-5 pt-40 pb-24 text-center">
          <h1 className="font-heading text-3xl font-bold text-[#EEFBFF]">Artículo no encontrado</h1>
          <button
            data-testid="article-notfound-back"
            onClick={() => navigate("/", { state: { scrollTo: "#actualidad" } })}
            className="mt-8 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-6 py-3"
          >
            Volver a actualidad
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const share = async () => {
    const url = window.location.href;
    const data = { title: article.title, text: article.excerpt, url };
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch (e) {
        if (e?.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Enlace copiado", { description: "Pégalo donde quieras compartirlo." });
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  return (
    <div className="bg-[#071725] min-h-screen" data-testid="article-page">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            data-testid="article-back-link"
            onClick={() => navigate("/", { state: { scrollTo: "#actualidad" } })}
            className="inline-flex items-center gap-2 text-sm text-[#A3C3D9] hover:text-[#62E7EF] transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={15} /> Volver a actualidad
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-[10px] font-mono-cyber uppercase tracking-wider border rounded-full px-3 py-1 ${CATEGORY_STYLES[article.category]}`} data-testid="article-category">
                {article.category}
              </span>
              <span className="text-xs text-[#5C7D99] font-mono-cyber">{article.date}</span>
              <span className="flex items-center gap-1 text-xs text-[#5C7D99] font-mono-cyber">
                <Clock size={11} /> {article.readTime}
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EEFBFF] leading-tight" data-testid="article-title">
              {article.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A3C3D9] leading-relaxed" data-testid="article-excerpt">
              {article.excerpt}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl mx-auto px-5 sm:px-8 mt-10"
        >
          <div className="rounded-2xl overflow-hidden border border-[#62E7EF]/20" data-testid="article-hero-image">
            <img src={article.image} alt={article.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
            data-testid="article-body"
          >
            {article.body.map((b, i) =>
              b.type === "h3" ? (
                <h2 key={i} className="font-heading text-xl sm:text-2xl font-semibold text-[#EEFBFF] pt-4">
                  {b.text}
                </h2>
              ) : (
                <p key={i} className="text-base text-[#A3C3D9] leading-relaxed">
                  {b.text}
                </p>
              )
            )}
          </motion.article>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#62E7EF]/15 pt-8">
            <button
              data-testid="article-share-button"
              onClick={share}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#EEFBFF] border border-[#62E7EF]/40 rounded-full px-6 py-3 hover:border-[#62E7EF] hover:bg-[#62E7EF]/10 transition-all duration-300"
            >
              <Share2 size={15} className="text-[#62E7EF]" /> Compartir artículo
            </button>
            <button
              data-testid="article-cta"
              onClick={() => navigate("/", { state: { scrollTo: "#contacto" } })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-6 py-3 hover:bg-[#7DE1E2] transition-all duration-300 group"
            >
              Hablar con un especialista
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
