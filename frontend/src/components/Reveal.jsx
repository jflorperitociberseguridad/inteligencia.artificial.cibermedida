import { motion } from "framer-motion";

export const SectionHeading = ({ kicker, title, description, testId }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="max-w-3xl mb-12"
    data-testid={testId}
  >
    <span className="font-mono-cyber text-xs uppercase tracking-[0.25em] text-[#3FE0F2]">{kicker}</span>
    <h2 className="font-heading mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#EEFBFF] leading-tight">
      {title}
    </h2>
    {description && <p className="mt-4 text-base text-[#B9C3EC] leading-relaxed">{description}</p>}
  </motion.div>
);

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
