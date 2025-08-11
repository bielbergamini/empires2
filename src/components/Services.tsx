// Services.tsx
import { useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaBullhorn, FaBullseye, FaInstagram, FaVideo } from "react-icons/fa";
import "../styles/services.css";

const services = [
  { title: "Estratégia de Marketing", text: "Planejamento, funil e metas claras para cada etapa da jornada.", icon: FaBullseye, tags: ["Planejamento", "Funil", "Metas"] },
  { title: "Tráfego Pago", text: "Campanhas Meta/Google com foco em conversão e crescimento.", icon: FaBullhorn, tags: ["Conversão", "Leads", "Performance"] },
  { title: "Social Media", text: "Gestão de redes: calendário, conteúdo e engajamento diário.", icon: FaInstagram, tags: ["Calendário", "Posts", "Engajamento"] },
  { title: "Produção de Conteúdo", text: "Roteiro, gravação e edição de vídeos e criativos.", icon: FaVideo, tags: ["Reels", "Scripts", "Edição"] },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section servicesX" id="servicos" aria-label="Serviços">
      {/* camada anti-banding */}
      <span aria-hidden className="servicesX-noise" />
      {/* blobs decorativos (bem sutis) */}
      <div className="servicesX-blob servicesX-blob-a" aria-hidden="true" />
      <div className="servicesX-blob servicesX-blob-b" aria-hidden="true" />

      <Container>
        <div className="text-center mb-5 reveal" style={{ transitionDelay: "60ms" }}>
          <span className="badgeX">Serviços</span>
          <h2 className="section-title mt-3">Soluções de Marketing que aceleram resultados</h2>
          <p className="servicesX-subtitle">
            Do posicionamento ao desempenho: tudo que sua marca precisa para atrair, converter e fidelizar.
          </p>
        </div>

        <Row xs={1} sm={2} lg={4} className="g-4">
          {services.map(({ title, text, icon: Icon, tags }, i) => (
            <Col key={title} className="reveal" style={{ transitionDelay: `${120 + i * 60}ms` }}>
              <Card as="article" className="servicesX-card h-100">
                <div className="servicesX-ring" />
                <Card.Body className="servicesX-body">
                  <div className="servicesX-icon float-y" aria-hidden="true">
                    <Icon />
                  </div>
                  <Card.Title className="servicesX-title">{title}</Card.Title>
                  <Card.Text className="servicesX-text">{text}</Card.Text>
                  <div className="servicesX-tags mt-auto">
                    {tags.map((t) => (
                      <Badge key={t} bg="secondary" className="servicesX-chip">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="servicesX-ctaWrap text-center reveal" style={{ transitionDelay: "1200ms" }}>
          <a href="#contato" className="servicesX-ctaBtn" role="button">
            Falar com a equipe <span className="arrow">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
