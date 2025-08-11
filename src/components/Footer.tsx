import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";
import logoPng from "../assets/logos/logo_empires_agency.png";

export default function Footer() {
  return (
    <footer className="footerX" id="rodape">
      <div className="footerX-bg" aria-hidden="true" />
      <Container>
        {/* Topo: logo, slogan, redes */}
        <Row className="g-4 align-items-center footerX-top">
          <Col md="auto">
            <img
              src={logoPng}
              alt="Empires Agency"
              className="footerX-logo"
              loading="lazy"
            />
          </Col>
          <Col className="text-center">
            <p className="footerX-slogan">
              Impulsionando marcas com estratégia, criatividade e eficiência.
            </p>
          </Col>
          <Col md="auto" className="footerX-social">
            <a
              href="https://www.instagram.com/empiresagencia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5516992221549?text=Ol%C3%A1!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:empiresagency00@gmail.com"
              aria-label="E-mail"
              title="E-mail"
            >
              <FaEnvelope />
            </a>
          </Col>
        </Row>

        {/* Grid de links/contato/atendimento */}
        <Row className="g-4 footerX-grid">
          <Col xs={12} md={4}>
            <h3 className="footerX-title">Navegação</h3>
            <ul className="footerX-links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </Col>

          <Col xs={12} md={4}>
            <h3 className="footerX-title">Contato</h3>
            <ul className="footerX-list">
              <li><span>empiresagency00@gmail.com</span></li>
              <li><span>(16) 99222-1549</span></li>
              <li>
                <span className="fi fi-br fis flag round" aria-hidden="true"></span>
                <span>Brasil</span>

              </li>
            </ul>
          </Col>

          <Col xs={12} md={4}>
            <h3 className="footerX-title">Atendimento</h3>
            <ul className="footerX-list">
              <li><span>Segunda a Sexta</span></li>
              <li><span>09h às 18h (BRT)</span></li>
            </ul>
          </Col>
        </Row>

        {/* Rodapé inferior */}
        <Row className="footerX-bottom text-center">
          <Col xs="12">
            <small className="opacity-75">
              © 2025 Empires Agency. Todos os direitos reservados.
            </small>
          </Col>
          <Col xs="12" className="mt-2">
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
