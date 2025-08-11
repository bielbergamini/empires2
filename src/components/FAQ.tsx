import { useEffect, useRef, useState } from "react";
import "../styles/faq.css";

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  { q: "Como funciona a consultoria da Empires?", a: "Começamos com um diagnóstico do momento da sua empresa, definimos metas claras, estratégia e um cronograma objetivo. Acompanhamos com rituais semanais e análise de métricas para evoluir rápido." },
  { q: "Em quanto tempo vejo resultados?", a: "Conteúdos saem entre 2 e 7 dias úteis (dependendo da complexidade). Mídia paga costuma apresentar sinais nas primeiras semanas — e escalamos conforme o ROI." },
  { q: "Vocês cuidam das redes sociais no dia a dia?", a: "Sim. Operamos calendário editorial, criação de posts, community management e relatórios com insights práticos para ajustes de rota." },
  { q: "Como funciona o cancelamento?", a: "Pode ser solicitado a qualquer momento com 7 dias de antecedência do fim do mês. Em cancelamento antecipado há uma taxa simbólica prevista em contrato." }
];

function FAQItem({
  i, q, a, isOpen, onToggle
}: {
  i: number; q: string; a: string; isOpen: boolean; onToggle: (i: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    el.style.overflow = "hidden";
    el.style.height = isOpen ? "auto" : "0px";
  }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    cleanupRef.current?.();

    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "height") return;
      if (isOpen) el.style.height = "auto";
      el.removeEventListener("transitionend", onEnd);
    };
    cleanupRef.current = () => el.removeEventListener("transitionend", onEnd);

    if (isOpen) {
      const target = el.scrollHeight;
      requestAnimationFrame(() => {
        el.style.transition = "height .28s ease";
        el.style.height = target + "px";
        el.addEventListener("transitionend", onEnd);
      });
    } else {
      const current = el.scrollHeight;
      el.style.transition = "none";
      el.style.height = current + "px";
      requestAnimationFrame(() => {
        el.style.transition = "height .24s ease";
        el.style.height = "0px";
        el.addEventListener("transitionend", onEnd);
      });
    }

    return () => cleanupRef.current?.();
  }, [isOpen]);

  return (
    <div className={`faqItem ${isOpen ? "open" : ""}`}>
      <button
        id={`faq-q-${i}`}
        className="faqQuestion"
        aria-expanded={isOpen}
        aria-controls={`faq-a-${i}`}
        onClick={() => onToggle(i)}
      >
        <span className="faqQText">{q}</span>
        <span className="faqIcon" aria-hidden="true" />
      </button>

      <div
        id={`faq-a-${i}`}
        role="region"
        aria-labelledby={`faq-q-${i}`}
        className="faqAnswer"
        ref={panelRef}
      >
        <div className="faqInner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set<number>();
      if (!prev.has(i)) next.add(i);
      return next;
    });

  const left = ITEMS.filter((_, idx) => idx % 2 === 0);
  const right = ITEMS.filter((_, idx) => idx % 2 === 1);

  return (
    <section className="faqSection section-isolated" id="faq">
      {/* camada anti-banding */}
      <span aria-hidden className="faqNoise" />

      {/* SLAB central isolado */}
      <div className="faqSlab">
        <header className="faqHeader">
          <span className="faqKicker">FAQ</span>
          <h2 className="faqTitle">Perguntas frequentes</h2>
          <p className="faqSubtitle">Entenda nosso processo, prazos e como impulsionamos sua marca.</p>
        </header>

        <div className="faqGrid">
          <div className="faqCol">
            {left.map((it, idx) => {
              const originalIndex = idx * 2;
              return (
                <FAQItem
                  key={originalIndex}
                  i={originalIndex}
                  q={it.q}
                  a={it.a}
                  isOpen={open.has(originalIndex)}
                  onToggle={toggle}
                />
              );
            })}
          </div>

          <div className="faqCol">
            {right.map((it, idx) => {
              const originalIndex = idx * 2 + 1;
              return (
                <FAQItem
                  key={originalIndex}
                  i={originalIndex}
                  q={it.q}
                  a={it.a}
                  isOpen={open.has(originalIndex)}
                  onToggle={toggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
