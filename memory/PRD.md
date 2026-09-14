# Rishabh & Ritul — Wedding Invitation Website

## Problem Statement
User owns a Next.js 16 wedding invitation site ("Rishabh & Ritul", 4 Dec 2026).
Ask: keep ALL info unchanged, greatly improve the UI, add wedding animations
(rose/flower petals), and build out the previously-empty sections.

## Tech Stack (IMPORTANT — non-standard)
- Next.js 16 (App Router, TypeScript) + React 19 + Tailwind v4, at repo ROOT `/app`.
- NOT create-react-app, NOT the FastAPI template. `/app/backend/server.py` is a
  placeholder only (health endpoint); the site needs no backend.

## Run / Build (READ THIS)
- Supervisor `frontend` program runs a PRODUCTION build via a proxy package.json at
  `/app/frontend/package.json` -> `cd /app && next start -p 3000 -H 0.0.0.0`.
- WHY production: Next 16 **dev (Turbopack)** needs an HMR websocket that returns 502
  through the preview ingress, which blocks hydration; and framer-motion/`motion`
  mount animations were stuck at opacity:0. Production build fixes both.
- Hot reload is OFF. After ANY code/CSS change you MUST rebuild:
    cd /app && ./node_modules/.bin/next build && sudo supervisorctl restart frontend

## Key Architecture Decisions
- Removed dependency on framer-motion/`motion` for entrances (buggy in this env).
- Entrances now: pure CSS keyframes + `ScrollReveal.tsx` (IntersectionObserver adds
  `.is-visible` to `[data-reveal]`, with a 2.5s safety net that force-reveals all).
- Fonts loaded via Google Fonts <link> in layout.tsx (Great Vibes, Cormorant
  Garamond, Montserrat, Playfair Display).
- All new styles live in `/app/src/app/enhancements.css` (imported after globals.css).

## Implemented (2026-06)
- Envelope intro (tap-to-open) -> full one-page site.
- Sections: Hero, Invitation, Countdown (live), Family (both families),
  Venue (QR), Footer. Global: FloatingPetals (rose/gold).
- Verified by testing agent: 100% frontend pass.

## Changes (2026-06, v2)
- REMOVED at user request: Celebrations/Events section, Gallery ("Our Story in
  Frames"), RSVP ("Will You Join Us"), Navbar (site is scroll-only now), and the
  MusicPlayer. Component files deleted: Events.tsx, Gallery.tsx, RSVP.tsx,
  Navbar.tsx, MusicPlayer.tsx.

## Wedding Info (must stay correct)
- Names: Rishabh & Ritul. Date: Friday 04 December 2026, 7:00 PM.
- Venue: Riwaaz Banquet & Party Lawn, Sector 07, Dwarka, New Delhi 110045.
- Families: Mrs. Kalyani Jha & Mr. Rakesh Roshan Jha; Mrs. Pragya Jha & Dr. Mithilesh K. Thakur.

## MOCKED / Placeholders
(RSVP, Music, Events, Gallery were removed in v2 — no longer applicable.)

## Backlog / Next
- P1: Optional enhancements the user may want later (photo slideshow, venue map
  embed, guest wishes wall).
