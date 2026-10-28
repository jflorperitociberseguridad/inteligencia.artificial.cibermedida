import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS } from "@/data/content";

const Counter = ({ value, suffix, decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="font-heading text-3xl sm:text-4xl font-bold text-[#EEFBFF]">
      {display}
      <span className="text-[#3FE0F2]">{suffix}</span>
    </span>
  );
};

export const StatsStrip = () => (
  <section data-testid="stats-strip" className="relative bg-[#14163C] py-14 border-b border-[#3FE0F2]/10">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="flex flex-col gap-2"
          data-testid={`metric-${i}`}
        >
          <Counter value={m.value} suffix={m.suffix} decimals={m.decimals || 0} />
          <span className="text-sm text-[#7D86C2]">{m.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);
