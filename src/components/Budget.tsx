import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/budget.css";

export default function Budget() {
  // dispara animações ao entrar na viewport
  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#orcamento");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("in")),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section budgetX section-isolated" id="orcamento" aria-label="Orçamento">
      {/* camada anti-banding */}
      <span aria-hidden className="budgetX-noise" />

      {/* SLAB central isolado */}
      <div className="budgetX-slab">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <span className="badgeX">Orçamento</span>
              <h2 className="section-title mt-3">
                Impulsione seus resultados com estratégia e dados
              </h2>
              <p className="text-secondary mb-4">
                Planejamos e executamos campanhas orientadas a métricas. Veja o gráfico:
                crescimento consistente quando estratégia e criatividade andam juntas.
              </p>

              <a href="#contato" className="budgetX-cta" role="button">
                Solicitar Orçamento <span className="arrow">→</span>
              </a>
            </Col>

            <Col lg={6}>
              {/* Gráfico animado (SVG) */}
              <div className="budgetX-chartWrap">
                <svg
                  className="budgetX-chart"
                  viewBox="0 0 600 360"
                  aria-label="Gráfico de crescimento de resultados"
                >
                  <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="rgba(109,40,217,.22)" />
                      <stop offset="1" stopColor="rgba(59,130,246,.18)" />
                    </linearGradient>
                  </defs>

                  <rect x="0" y="0" width="600" height="360" fill="url(#bgGrad)" opacity="0.25" />

                  {/* linhas de grade */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1="40" x2="580" y1={60 + i * 50} y2={60 + i * 50} className="grid" />
                  ))}
                  <line x1="40" x2="40" y1="40" y2="320" className="axis" />
                  <line x1="40" x2="580" y1="320" y2="320" className="axis" />

                  {/* barras (sobem) */}
                  <g className="bars">
                    {[
                      { x: 100, h: 120 },
                      { x: 210, h: 165 },
                      { x: 320, h: 205 },
                      { x: 430, h: 250 },
                    ].map((b, i) => (
                      <rect
                        key={i}
                        x={b.x}
                        width="46"
                        y={320}
                        height="0"
                        style={{ ["--h" as any]: `${b.h}px`, ["--d" as any]: `${i * 120}ms` }}
                        className="bar"
                        rx="10"
                      />
                    ))}
                  </g>

                  {/* linha de tendência */}
                  <path
                    className="trend"
                    d="
                      M 60 290
                      C 140 270, 160 250, 200 230
                      S 300 190, 340 180
                      S 420 140, 520 110
                    "
                    fill="none"
                  />

                  {/* ponto/indicador */}
                  <circle className="dot" r="6" cx="520" cy="110" />
                  <text x="526" y="105" className="label">+90%</text>
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
