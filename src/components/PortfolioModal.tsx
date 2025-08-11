import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles/portfolio-modal.css";

type Props = { show: boolean; onHide: () => void };

// Carrega as imagens automaticamente (Vite)
const files = import.meta.glob("/src/assets/portfolio/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const pages: string[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

// Se preferir a pasta public, comente o bloco acima e use:
// const pages = Array.from({ length: 9 }, (_, i) => `/static/portfolio/pagina_${i + 1}.png`);

export default function PortfolioModal({ show, onHide }: Props) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  // Fecha o zoom com ESC
  useEffect(() => {
    if (!zoomSrc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomSrc]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      scrollable
      size="xl"
      dialogClassName="portfolio-dialog"
      contentClassName="portfolio-content"
      backdropClassName="portfolio-backdrop"
    >
      <Modal.Header closeButton className="portfolio-header">
        <Modal.Title className="portfolio-title">Nosso Portfólio</Modal.Title>
      </Modal.Header>

      <Modal.Body className="portfolio-body">
        <div className="portfolio-pages">
          {pages.map((src, i) => (
            <figure className="portfolio-page" key={src}>
              <img
                src={src}
                alt={`Página ${i + 1}`}
                className="portfolio-img"
                loading="lazy"
                draggable={false}
                onClick={() => setZoomSrc(src)}
              />
              <figcaption className="visually-hidden">{`Página ${i + 1}`}</figcaption>
            </figure>
          ))}
        </div>

        {/* Overlay de zoom (aparece quando zoomSrc != null) */}
        <div
          className={`pm-zoom ${zoomSrc ? "show" : ""}`}
          onClick={() => setZoomSrc(null)}
        >
          {zoomSrc && (
            <img
              src={zoomSrc}
              alt="Zoom"
              className="pm-zoom-img"
              draggable={false}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
