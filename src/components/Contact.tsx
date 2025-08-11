import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaCalendarCheck } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section contactX" id="contato">
      <div className="contactX-blob contactX-blob-a" aria-hidden="true" />
      <div className="contactX-blob contactX-blob-b" aria-hidden="true" />

      <Container>
        <div className="text-center mb-5 reveal" style={{ transitionDelay: "60ms" }}>
          <span className="badgeX">Fale com a Empires</span>
          <h2 className="section-title mt-3">Vamos acelerar seus resultados?</h2>
          <p className="contactX-subtitle">
            Atendimento rápido e humano. Escolha o canal que preferir e fale direto com a equipe.
          </p>
        </div>

        <Row xs={1} md={3} className="g-4">
          <Col className="reveal" style={{ transitionDelay: "120ms" }}>
            <a className="contactX-link" href="mailto:empiresagency00@gmail.com" aria-label="Enviar e-mail">
              <Card className="contactX-card">
                <div className="contactX-ring" />
                <Card.Body className="text-center">
                  <div className="contactX-icon float-y"><FaEnvelope /></div>
                  <h3 className="h6 mb-1">E-mail</h3>
                  <p className="mb-0 opacity-75">empiresagency00@gmail.com</p>
                  <small className="opacity-50">Retorno em até 1 dia útil</small>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col className="reveal" style={{ transitionDelay: "220ms" }}>
            <a
              className="contactX-link"
              href="https://wa.me/5516992221549?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp"
            >
              <Card className="contactX-card">
                <div className="contactX-ring" />
                <Card.Body className="text-center">
                  <div className="contactX-icon float-y"><FaWhatsapp /></div>
                  <h3 className="h6 mb-1">WhatsApp</h3>
                  <p className="mb-0 opacity-75">(16) 99222-1549</p>
                  <small className="opacity-50">Horário comercial</small>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col className="reveal" style={{ transitionDelay: "320ms" }}>
            <a
              className="contactX-link"
              href="https://www.instagram.com/empiresagencia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram"
            >
              <Card className="contactX-card">
                <div className="contactX-ring" />
                <Card.Body className="text-center">
                  <div className="contactX-icon float-y"><FaInstagram /></div>
                  <h3 className="h6 mb-1">Instagram</h3>
                  <p className="mb-0 opacity-75">@empiresagencia</p>
                  <small className="opacity-50">Conteúdos e novidades</small>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        {/* CTA dentro da MESMA sessão Contato */}
        <div className="reveal contactX-ctaWrap" style={{ transitionDelay: "420ms" }}>
          <a
            className="contactX-ctaLink"
            href="https://calendly.com/agendaempires"
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar uma reunião"
          >
            <Card className="contactX-ctaCard">
              <div className="contactX-ctaRing" />
              <Card.Body className="text-center">
                <div className="contactX-ctaIcon"><FaCalendarCheck /></div>
                <h3 className="h5 mb-2">Agendar uma reunião</h3>
                <p className="mb-0 opacity-75">
                  Escolha o melhor horário e fale direto com a nossa equipe.
                </p>
              </Card.Body>
            </Card>
          </a>
        </div>

        <div className="contactX-foot text-center reveal" style={{ transitionDelay: "520ms" }}>
          <p className="opacity-75 mt-4">Segunda a sexta • 09h às 18h (BRT)</p>
        </div>
      </Container>
    </section>
  );
}
