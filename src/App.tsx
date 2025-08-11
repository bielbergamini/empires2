import React, { useRef, useState } from "react";
import SiteNavbar from "./components/SiteNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import PortfolioModal from "./components/PortfolioModal";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Budget from "./components/Budget";

export default function App() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const sobreRef = useRef<HTMLDivElement | null>(null);
  const orcamentoRef = useRef<HTMLDivElement | null>(null);
  const servicosRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const contatoRef = useRef<HTMLDivElement | null>(null);

  const [showPortfolio, setShowPortfolio] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="text-light">
      <SiteNavbar
        onNavigate={(section) => {
          if (section === "inicio") scrollTo(inicioRef);
          if (section === "sobre") scrollTo(sobreRef);
          if (section === "servicos") scrollTo(servicosRef);
          if (section === "faq") scrollTo(faqRef);
          if (section === "contato") scrollTo(contatoRef);
          if (section === "portfolio") setShowPortfolio(true);
        }}
      />

      <div ref={inicioRef}>
        <Hero />
      </div>
      <div ref={sobreRef}>
        <About />
      </div>
      <div ref={orcamentoRef}>
        <Budget />
      </div>
      <div ref={servicosRef}>
        <Services />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={contatoRef}>
        <Contact />
      </div>

      <Footer />

      <PortfolioModal
        show={showPortfolio}
        onHide={() => setShowPortfolio(false)}
      />
    </div>
  );
}
