"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", target: "home" },
  { label: "Invitation", target: "invitation" },
  { label: "Celebrations", target: "celebrations" },
  { label: "Gallery", target: "gallery" },
  { label: "Family", target: "family" },
  { label: "Venue", target: "venue" },
  { label: "RSVP", target: "rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`site-nav ${scrolled ? "is-scrolled" : ""}`}
      data-testid="site-navbar"
    >
      <button className="nav-brand" onClick={() => go("home")} data-testid="nav-brand">
        <span className="nav-brand-om">ॐ</span>
        <span className="nav-brand-names">Rishabh &amp; Ritul</span>
      </button>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.target}>
            <button onClick={() => go(l.target)} data-testid={`nav-link-${l.target}`}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        data-testid="nav-toggle"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <ul className="nav-mobile" data-testid="nav-mobile-menu">
          {links.map((l) => (
            <li key={l.target}>
              <button
                onClick={() => go(l.target)}
                data-testid={`nav-mobile-link-${l.target}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
