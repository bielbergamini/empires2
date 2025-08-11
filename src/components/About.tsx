import { Container, Row, Col } from "react-bootstrap";
import "../styles/about.css";
import illus from "../assets/images/marketing.png"; // ajuste o caminho se necessário

export default function About() {
  return (
    <section className="section aboutX" id="sobre" aria-label="Sobre nós">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h2 className="section-title">Sobre Nós</h2>
            <p className="aboutX-lead">
              Somos uma agência de Marketing e Publicidade focada em gerar resultados reais
              para empresas que desejam se destacar no mercado digital com autoridade,
              estratégia e posicionamento.
            </p>
            <p className="aboutX-text">
              Acreditamos na personalização de cada projeto. Utilizamos ferramentas modernas,
              criamos campanhas assertivas e atuamos com criatividade para transformar
              visibilidade em vendas e presença em reconhecimento.
            </p>
          </Col>

          <Col lg={6}>
            <figure className="aboutX-figure">
              <img src={illus} alt="Marketing Digital" loading="lazy" />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
