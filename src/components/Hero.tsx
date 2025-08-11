import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useRef } from "react";
import "../styles/hero.css";
import logoGif from "../assets/logos/empires_agency_letter_float2.gif";

type Props = { secondary?: boolean };

export default function Hero({ secondary }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -1;
      card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${y * 8}deg)`;
    };

    const onLeave = () => {
      card.style.transform = "none";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className={secondary ? "hero-2" : "hero-1"} aria-label="Seção principal">
      <Container className="hero-container">
        <Row className="align-items-center g-4 g-lg-5">
          {/* No mobile a logo vem primeiro para impacto visual; no desktop o texto fica à esquerda */}
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 0 }} className="text-center text-lg-start">
            <p className="hero-eyebrow mb-2">Impulsione os resultados do seu negócio</p>
            <h1 className="hero-heading mb-0">
              Marketing, Criatividade e Posicionamento Digital para{" "}
              <span className="focus shiny">TRIPLICAR</span> seu crescimento.
            </h1>
          </Col>

          <Col xs={{ span: 12, order: 0 }} lg={{ span: 6, order: 1 }} className="d-flex justify-content-center justify-content-lg-end">
            <Card className="logo-card shadow-0" ref={cardRef} aria-hidden="true">
              <Card.Body className="p-0 d-flex align-items-center justify-content-center">
                <img
                  src={logoGif}
                  alt="Empires Agency"
                  className="hero-logo img-fluid"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
