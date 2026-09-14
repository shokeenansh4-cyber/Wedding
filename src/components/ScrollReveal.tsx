"use client";

import { useEffect } from "react";

/**
 * Reliable scroll-reveal: adds `.is-visible` to any `[data-reveal]` element
 * when it enters the viewport. Uses IntersectionObserver + a MutationObserver
 * so elements that mount later (e.g. after client-side state resolves) are
 * still revealed. A safety net force-reveals everything shortly after mount.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
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

    const observed = new WeakSet<Element>();

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    scan();

    // Catch elements that mount after the initial scan (async state, etc.)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: reveal everything (fresh query) after 2.5s no matter what.
    const t = setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
    }, 2500);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
