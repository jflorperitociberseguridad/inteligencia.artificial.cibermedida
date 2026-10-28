import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Logo } from "./Logo";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHIPS = [
  "¿Qué servicios ofrecéis?",
  "¿Trabajáis con administraciones públicas?",
  "He sufrido un ataque, ¿qué hago?",
];

const WELCOME = "Hola, soy el asistente de Cibermedida. Puedo resolver tus dudas sobre inteligencia artificial, ciberseguridad y nuestros servicios. ¿En qué te ayudo?";

const getSessionId = () => {
  let id = localStorage.getItem("ciber_chat_session");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("ciber_chat_session", id);
  }
  return id;
};

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || streaming) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: msg }, { role: "assistant", content: "" }]);
    setStreaming(true);
    try {
      const resp = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: getSessionId(), message: msg }),
      });
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") continue;
          try {
            const parsed = JSON.parse(payload);
            if (parsed.delta) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: copy[copy.length - 1].content + parsed.delta };
                return copy;
              });
            } else if (parsed.error) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: parsed.error };
                return copy;
              });
            }
          } catch { /* línea parcial */ }
        }
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: "No se pudo conectar con el asistente. Inténtalo de nuevo en unos minutos." };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  };

  return (
    <>
      <motion.button
        data-testid="chat-open-button"
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#62E7EF] text-[#071725] flex items-center justify-center shadow-[0_8px_30px_rgba(98,231,239,0.4)] hover:bg-[#7DE1E2] hover:scale-105 transition-all duration-300"
        aria-label="Abrir asistente"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm bg-[#102B49] border border-[#62E7EF]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "min(520px, 70vh)" }}
          >
            <div className="flex items-center gap-3 px-5 py-4 bg-[#0A1128] border-b border-[#62E7EF]/15">
              <Logo size={30} />
              <div className="flex-1">
                <p className="font-heading text-sm font-semibold text-[#EEFBFF]">Asistente Cibermedida</p>
                <p className="flex items-center gap-1.5 text-[11px] text-[#5C7D99]">
                  <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[#06D6A0]" />
                  En línea
                </p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" data-testid="chat-messages">
              {messages.map((m, i) => (
                <div
                  key={i}
                  data-testid={`chat-message-${m.role}-${i}`}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "ml-auto bg-[#62E7EF] text-[#071725] rounded-br-sm"
                      : "bg-[#0A1128] text-[#EEFBFF] border border-[#62E7EF]/15 rounded-bl-sm"
                  }`}
                >
                  {m.content || (streaming && i === messages.length - 1 ? "…" : "")}
                </div>
              ))}
              {messages.length === 1 && !streaming && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {CHIPS.map((c, i) => (
                    <button
                      key={c}
                      data-testid={`chat-chip-${i}`}
                      onClick={() => send(c)}
                      className="text-xs text-[#62E7EF] border border-[#62E7EF]/30 rounded-full px-3 py-1.5 hover:bg-[#62E7EF]/10 transition-colors duration-300"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 px-4 py-3 bg-[#0A1128] border-t border-[#62E7EF]/15"
            >
              <input
                data-testid="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta…"
                maxLength={1000}
                className="flex-1 bg-[#102B49] border border-[#62E7EF]/20 rounded-full px-4 py-2.5 text-sm text-[#EEFBFF] placeholder:text-[#5C7D99] focus:outline-none focus:border-[#62E7EF] transition-colors"
              />
              <button
                type="submit"
                data-testid="chat-send-button"
                disabled={streaming || !input.trim()}
                className="w-10 h-10 rounded-full bg-[#62E7EF] text-[#071725] flex items-center justify-center hover:bg-[#7DE1E2] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Enviar mensaje"
              >
                {streaming ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
