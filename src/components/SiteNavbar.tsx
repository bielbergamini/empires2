import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import "../styles/navbar.css";
import crownPng from "../assets/logos/logo_empires_agency.png"; 

type Props = {
  onNavigate: (
    section:
      | "inicio"
      | "sobre"
      | "orcamento"
      | "servicos"
      | "faq"
      | "contato"
      | "portfolio"
  ) => void;
};

export default function SiteNavbar({ onNavigate }: Props) {
  const [show, setShow] = useState(false);
  const id = "nav-offcanvas";

  const go = (section: Parameters<Props["onNavigate"]>[0]) => {
    onNavigate(section);
    setShow(false);
  };

  return (
    <Navbar expand="lg" fixed="top" className="empires-navbar">
      <Container fluid className="px-2 px-lg-3">
        <Navbar.Brand
          role="button"
          onClick={() => go("inicio")}
          className="d-flex align-items-center"
        >
          <img
            src={crownPng}
            alt="Empires Agency"
            height={60}
            className="brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls={id}
          className="toggler"
          onClick={() => setShow(true)}
        />

        <Navbar.Offcanvas
          id={id}
          show={show}
          onHide={() => setShow(false)}
          placement="end"
          backdrop
          scroll
          className="empires-offcanvas"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-lg-center gap-lg-2 nav-links">
              <Nav.Link className="nav-link" onClick={() => go("inicio")}>
                Início
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={() => go("sobre")}>
                Sobre
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={() => go("servicos")}>
                Serviços
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={() => go("faq")}>
                FAQ
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={() => go("contato")}>
                Contato
              </Nav.Link>
              <Nav.Link className="nav-link" onClick={() => go("portfolio")}>
                Portfólio
              </Nav.Link>

              {/* Botão que rola até Contato */}
              <Button
                size="sm"
                className="btn-gradient ms-lg-2 w-100 w-lg-auto"
                onClick={() => go("contato")}
              >
                Fale Conosco
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
