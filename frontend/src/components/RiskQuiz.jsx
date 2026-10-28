import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldQuestion, ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { RISK_QUESTIONS, RISK_RESULTS } from "@/data/content";
import { SectionHeading } from "./Reveal";
import { scrollToSection } from "./Navbar";

export const RiskQuiz = () => {
  const [stage, setStage] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const start = () => {
    setStage("quiz");
    setCurrent(0);
    setScore(0);
  };

  const answer = (points) => {
    const next = score + points;
    if (current + 1 < RISK_QUESTIONS.length) {
      setScore(next);
      setCurrent(current + 1);
    } else {
      setScore(next);
      setStage("result");
    }
  };

  const level = score <= 3 ? "low" : score <= 6 ? "mid" : "high";
  const result = RISK_RESULTS[level];
  const progress = stage === "quiz" ? ((current + 1) / RISK_QUESTIONS.length) * 100 : stage === "result" ? 100 : 0;

  const goContact = () => {
    window.dispatchEvent(new CustomEvent("ciber:service", { detail: result.service }));
    scrollToSection("#contacto");
  };

  return (
    <section id="simulador" data-testid="risk-quiz-section" className="relative bg-[#071725] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(98,231,239,0.08) 0%, rgba(7,23,37,0) 55%)" }} />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          testId="risk-quiz-heading"
          kicker="Simulador de riesgo"
          title="¿En qué punto está la seguridad de tu empresa?"
          description="Cinco preguntas, dos minutos y una recomendación honesta: sin registro, sin letra pequeña."
        />

        <div className="bg-[#102B49] border border-[#62E7EF]/20 rounded-2xl p-7 sm:p-10 min-h-[320px] flex flex-col justify-center" data-testid="risk-quiz-card">
          {stage !== "intro" && (
            <div className="mb-8">
              <div className="flex justify-between text-[11px] font-mono-cyber text-[#5C7D99] mb-2">
                <span data-testid="risk-quiz-progress-label">
                  {stage === "result" ? "Completado" : `Pregunta ${current + 1} de ${RISK_QUESTIONS.length}`}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-[#0A1128] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#62E7EF]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  data-testid="risk-quiz-progress-bar"
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-center"
                data-testid="risk-quiz-intro"
              >
                <ShieldQuestion size={44} className="mx-auto text-[#62E7EF]" />
                <h3 className="font-heading mt-5 text-2xl font-semibold text-[#EEFBFF]">Mide tu exposición real</h3>
                <p className="mt-3 text-sm sm:text-base text-[#A3C3D9] leading-relaxed max-w-lg mx-auto">
                  Responde sobre formación, copias de seguridad, accesos y planes de respuesta. Al terminar sabrás tu nivel de riesgo y qué servicio encaja contigo.
                </p>
                <button
                  data-testid="risk-quiz-start-button"
                  onClick={start}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-8 py-3.5 hover:bg-[#7DE1E2] hover:shadow-[0_0_28px_rgba(98,231,239,0.4)] transition-all duration-300 group"
                >
                  Empezar el test
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            )}

            {stage === "quiz" && (
              <motion.div
                key={`q-${current}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                data-testid={`risk-quiz-question-${current}`}
              >
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#EEFBFF] leading-snug">
                  {RISK_QUESTIONS[current].q}
                </h3>
                <div className="mt-6 flex flex-col gap-3">
                  {RISK_QUESTIONS[current].options.map((o, i) => (
                    <button
                      key={i}
                      data-testid={`risk-quiz-option-${current}-${i}`}
                      onClick={() => answer(o.points)}
                      className="text-left text-sm sm:text-base text-[#A3C3D9] bg-[#0A1128] border border-[#62E7EF]/15 rounded-xl px-5 py-4 hover:border-[#62E7EF] hover:text-[#EEFBFF] hover:bg-[#62E7EF]/5 transition-all duration-300"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
                data-testid="risk-quiz-result"
              >
                <span
                  className="inline-block font-mono-cyber text-xs uppercase tracking-[0.25em] border rounded-full px-4 py-1.5"
                  style={{ color: result.color, borderColor: `${result.color}66`, background: `${result.color}14` }}
                  data-testid="risk-quiz-level"
                >
                  {result.label}
                </span>
                <h3 className="font-heading mt-5 text-2xl font-semibold text-[#EEFBFF]">
                  Servicio recomendado: <span style={{ color: result.color }}>{result.service}</span>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#A3C3D9] leading-relaxed max-w-xl mx-auto" data-testid="risk-quiz-result-text">
                  {result.text}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    data-testid="risk-quiz-contact-cta"
                    onClick={goContact}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#071725] bg-[#62E7EF] rounded-full px-7 py-3.5 hover:bg-[#7DE1E2] hover:shadow-[0_0_28px_rgba(98,231,239,0.4)] transition-all duration-300"
                  >
                    <CheckCircle2 size={16} /> Solicitar este servicio
                  </button>
                  <button
                    data-testid="risk-quiz-restart-button"
                    onClick={start}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#EEFBFF] border border-[#62E7EF]/40 rounded-full px-7 py-3.5 hover:border-[#62E7EF] hover:bg-[#62E7EF]/10 transition-all duration-300"
                  >
                    <RotateCcw size={15} /> Repetir test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
