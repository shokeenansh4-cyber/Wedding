"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?w=1100&q=80",
    alt: "The couple on a tree-lined path",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1600685890506-593fdf55949b?w=1100&q=80",
    alt: "Bride in red bridal attire with gold jewellery",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?w=1100&q=80",
    alt: "The couple beside the river",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1599462616558-2b75fd26a283?w=1100&q=80",
    alt: "A tender moment in red and cream",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1665960213508-48f07086d49c?w=1100&q=80",
    alt: "The couple in traditional attire",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1633104502402-014fa785a0ef?w=1100&q=80",
    alt: "Haldi ceremony joy",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1771992230380-bc023f41771e?w=1100&q=80",
    alt: "Intricate mehndi on the bride's hands",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1699764681875-dd04ce36b1c3?w=1100&q=80",
    alt: "Marigold wedding blooms",
    span: "wide",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () =>
    setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length));
  const next = () =>
    setActive((a) => (a === null ? a : (a + 1) % images.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="gallery-section" data-testid="gallery-section">
      <div className="gallery-content">
        <p className="section-kicker" data-reveal>
          MOMENTS WE TREASURE
        </p>
        <h2 className="section-title" data-reveal style={{ ["--d" as string]: "0.1s" }}>
          Our Story in Frames
        </h2>
        <div className="section-divider" data-reveal style={{ ["--d" as string]: "0.2s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`gallery-item ${img.span}`}
              onClick={() => setActive(i)}
              data-reveal="scale"
              style={{ ["--d" as string]: `${(i % 4) * 0.06}s` }}
              data-testid={`gallery-item-${i}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-item-frame" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={close} data-testid="gallery-lightbox">
          <button
            className="lightbox-close"
            onClick={close}
            aria-label="Close"
            data-testid="lightbox-close"
          >
            <X size={26} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            data-testid="lightbox-prev"
          >
            <ChevronLeft size={30} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={active}
            src={images[active].src}
            alt={images[active].alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
            data-testid="lightbox-image"
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            data-testid="lightbox-next"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
