import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { NEWS, NEWS_CATEGORIES } from "@/data/content";
import { SectionHeading } from "./Reveal";

const CATEGORY_STYLES = {
  Normativa: "text-[#62E7EF] border-[#62E7EF]/40 bg-[#62E7EF]/10",
  Amenazas: "text-[#FF6B6B] border-[#FF4D4D]/40 bg-[#FF4D4D]/10",
  "Guías": "text-[#06D6A0] border-[#06D6A0]/40 bg-[#06D6A0]/10",
  Noticias: "text-[#A3C3D9] border-[#A3C3D9]/30 bg-[#A3C3D9]/10",
};

export const NewsSection = () => {
  const [filter, setFilter] = useState("Todo");
  const navigate = useNavigate();
  const visible = filter === "Todo" ? NEWS : NEWS.filter((n) => n.category === filter);

  return (
    <section id="actualidad" data-testid="news-section" className="relative bg-[#071725] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          testId="news-heading"
          kicker="Actualidad"
          title="Inteligencia de amenazas y normativa, en claro"
          description="Análisis breves y accionables sobre lo que está cambiando en la ciberseguridad española y europea."
        />

        <div className="flex flex-wrap gap-2 mb-10" data-testid="news-filters">
          {NEWS_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`news-filter-${c.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setFilter(c)}
              className={`text-xs font-mono-cyber uppercase tracking-wider rounded-full px-4 py-2 border transition-all duration-300 ${
                filter === c
                  ? "bg-[#62E7EF] text-[#071725] border-[#62E7EF] font-semibold"
                  : "text-[#A3C3D9] border-[#62E7EF]/20 hover:border-[#62E7EF]/60 hover:text-[#EEFBFF]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((n, i) => (
              <motion.article
                layout
                key={n.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-glow group relative bg-[#102B49] border border-[#62E7EF]/15 rounded-2xl overflow-hidden cursor-pointer"
                data-testid={`news-card-${n.id}`}
                onClick={() => navigate(`/noticias/${n.id}`)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B49] to-transparent" />
                  <span className={`absolute top-4 left-4 text-[10px] font-mono-cyber uppercase tracking-wider border rounded-full px-3 py-1 backdrop-blur-sm ${CATEGORY_STYLES[n.category]}`}>
                    {n.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-[#5C7D99] font-mono-cyber mb-3">
                    <span>{n.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {n.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#EEFBFF] leading-snug group-hover:text-[#62E7EF] transition-colors duration-300">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#A3C3D9] leading-relaxed line-clamp-3">{n.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#62E7EF]">
                    Leer análisis
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
