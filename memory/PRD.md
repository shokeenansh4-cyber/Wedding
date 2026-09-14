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
- Sections: Hero, Invitation, Countdown (live), Celebrations/Events (4 cards),
  Gallery (grid + lightbox), Family (both families), Venue (QR), RSVP, Footer.
- Global: Navbar (smooth-scroll + mobile menu), FloatingPetals (rose/gold),
  MusicPlayer (floating toggle).
- Verified by testing agent: 100% frontend pass.

## Wedding Info (must stay correct)
- Names: Rishabh & Ritul. Date: Friday 04 December 2026, 7:00 PM.
- Venue: Riwaaz Banquet & Party Lawn, Sector 07, Dwarka, New Delhi 110045.
- Families: Mrs. Kalyani Jha & Mr. Rakesh Roshan Jha; Mrs. Pragya Jha & Dr. Mithilesh K. Thakur.

## MOCKED / Placeholders
- RSVP submissions stored in browser localStorage only (NO backend persistence).
- Music track is an external SoundHelix sample MP3 (placeholder — user should replace).
- Ceremony dates/times for Mehndi/Haldi&Sangeet/Reception are tasteful placeholders
  (only the Wedding Ceremony 04 Dec 7:00 PM is confirmed) — user should edit in
  /app/src/components/Events.tsx.
- Gallery photos are Unsplash stock — replace with the couple's real photos.

## Backlog / Next
- P1: Real RSVP backend (persist responses).
- P2: Replace gallery stock photos + confirm ceremony schedule.
- P2: Self-host background music track.
