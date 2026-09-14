"use client";

import { useEffect } from "react";

/**
 * Reliable scroll-reveal: adds `.is-visible` to any `[data-reveal]` element
 * when it enters the viewport. Pure IntersectionObserver — no animation library.
 * Includes a safety fallback so content is never permanently hidden.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Safety net: reveal everything after 2.5s no matter what.
    const t = setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
