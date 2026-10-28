import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

export const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section data-testid="faq-section" className="relative bg-[#14163C] py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          testId="faq-heading"
          kicker="Preguntas frecuentes"
          title="Lo que todo el mundo pregunta antes de empezar"
          description="Respuestas directas, sin tecnicismos ni letra pequeña."
        />
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <div
                data-testid={`faq-item-${i}`}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  open === i ? "bg-[#242764] border-[#3FE0F2]/40" : "bg-[#242764]/50 border-[#3FE0F2]/15 hover:border-[#3FE0F2]/30"
                }`}
              >
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <span className="font-heading flex-1 text-base sm:text-lg font-semibold text-[#EEFBFF]">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#3FE0F2] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm sm:text-base text-[#B9C3EC] leading-relaxed" data-testid={`faq-answer-${i}`}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
