import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { HOME_FEATURES, IMAGES } from "@/data/content";
import { SectionHeading, Reveal } from "./Reveal";

const FeatureRow = ({ f, i }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const flip = i % 2 === 1;

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center" data-testid={`feature-row-${i}`}>
      <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden border border-[#3FE0F2]/20 h-[340px]">
          <motion.img
            src={IMAGES[f.image]}
            alt={f.title}
            style={{ y: imgY }}
            className="w-full h-full object-cover scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#14163C]/70 via-transparent to-[#3FE0F2]/10" />
          <div className="absolute bottom-5 left-5 font-mono-cyber text-[11px] uppercase tracking-[0.2em] text-[#3FE0F2] bg-[#14163C]/80 backdrop-blur-sm border border-[#3FE0F2]/30 rounded-full px-4 py-2">
            {f.kicker}
          </div>
        </div>
        <div className={`absolute -bottom-4 ${flip ? "-left-4 border-l-2 border-bl-3xl rounded-bl-3xl" : "-right-4 border-r-2 border-br-3xl rounded-br-3xl"} w-24 h-24 border-b-2 border-[#3FE0F2]/40 pointer-events-none`} />
      </Reveal>

      <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
        <span className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#3FE0F2]">{f.kicker}</span>
        <h3 className="font-heading mt-3 text-2xl sm:text-3xl font-semibold text-[#EEFBFF] leading-tight">{f.title}</h3>
        <p className="mt-4 text-base text-[#B9C3EC] leading-relaxed">{f.text}</p>
        <ul className="mt-6 space-y-3">
          {f.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-[#B9C3EC]">
              <CheckCircle2 size={17} className="text-[#06D6A0] shrink-0 mt-0.5" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
};

export const Features = () => (
  <section data-testid="features-section" className="relative bg-[#1B1E4E] py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeading
        testId="features-heading"
        kicker="La IA en la práctica"
        title="Tres formas concretas en las que la IA trabaja para ti"
        description="Nada de humo: estas son las capacidades que implantamos una y otra vez, con resultados que se pueden medir."
      />
      <div className="flex flex-col gap-24">
        {HOME_FEATURES.map((f, i) => (
          <FeatureRow key={f.kicker} f={f} i={i} />
        ))}
      </div>
    </div>
  </section>
);
