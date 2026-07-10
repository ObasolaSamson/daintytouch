"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// TODO: Replace placeholder images with real portfolio images.
// Real Dainty Touch portfolio images live in /public/portfolio.
const GALLERY_IMAGES = [
  { src: "/portfolio/work-1.png", alt: "Royal blue and gold gele bridal glam" },
  { src: "/portfolio/work-2.png", alt: "White gown bridal soft glam" },
  { src: "/portfolio/work-3.png", alt: "White and burgundy gele glam" },
  { src: "/portfolio/work-4.png", alt: "White lace and coral beads bridal look" },
  { src: "/portfolio/work-5.png", alt: "Green and gold traditional glam" },
  { src: "/portfolio/work-6.png", alt: "Burnt orange gele bold glam" },
  { src: "/portfolio/work-7.png", alt: "Burgundy and gold aso-oke glam" },
  { src: "/portfolio/work-8.png", alt: "Black and gold sequin gele glam" },
  { src: "/portfolio/work-9.png", alt: "Gold and orange striped gele glam" },
  { src: "/portfolio/work-10.png", alt: "Soft pink glam with sleek hair" },
  { src: "/portfolio/work-11.png", alt: "Burgundy gele with white lace glam" },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  // Duplicate the list so the marquee can loop seamlessly.
  const track = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id="work" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-5xl font-semibold tracking-wide text-charcoal">
            My Work
          </h2>
          <p className="mt-4 text-charcoal/70">A glimpse of the magic.</p>
        </div>
      </div>

      {/* Single-line auto-sliding carousel. Pauses on hover; click to enlarge. */}
      <div className="group relative w-full overflow-hidden pb-20">
        {/* soft fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {track.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i % GALLERY_IMAGES.length)}
              aria-label={`Open ${image.alt} in lightbox`}
              className="block h-96 w-72 shrink-0 overflow-hidden rounded-2xl border border-blush-100 shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blush-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={GALLERY_IMAGES.map((image) => ({ src: image.src, alt: image.alt }))}
      />
    </section>
  );
}
