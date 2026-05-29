# AGENTS.md — Portfolio Architecture

## Project Overview

A premium Apple-inspired portfolio website for a professional Video Editor (Short Form, Long Form, VFX Compositor). Built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + Custom CSS |
| Animations | Framer Motion |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx            # HTML shell, head meta, Google Fonts link
    index.tsx             # Single page — composes all section components
  components/
    CustomCursor.tsx      # Dual-layer cursor (dot + follower ring, hidden on mobile)
    LoadingScreen.tsx     # Animated loading progress overlay (~1.8s)
    Navigation.tsx        # Fixed nav with scroll detection and mobile menu
    HeroSection.tsx       # Fullscreen hero with Canvas particle animation
    AboutSection.tsx      # Split layout + 4 skill cards
    PortfolioSection.tsx  # Filterable grid + video modal (AnimatePresence)
    ShowreelSection.tsx   # Cinematic video player with pulsing play button
    ServicesSection.tsx   # 6 glassmorphism service cards
    TestimonialsSection.tsx # Slider with 4 testimonials, dot + arrow controls
    ContactSection.tsx    # Form + WhatsApp/Email/Calendly CTAs
    Footer.tsx            # Minimal 3-column footer
  hooks/
    useInView.ts          # IntersectionObserver hook — fires once when 15% visible
  styles.css              # All custom CSS (glassmorphism, cursor, typography, animations)
```

## Key Conventions

- **Animation pattern**: Every section uses `useInView` + Framer Motion `initial/animate`. Sections reveal when 15% in viewport. Fires once (no re-trigger on scroll out).
- **Color palette**: Pure `#000` background, white/silver text, `rgba(255,255,255,0.04–0.08)` card surfaces. No color accents — black/white/silver only.
- **Typography**: Inter (Google Fonts). Custom CSS classes: `heading-display`, `heading-hero`, `heading-section`, `text-label` for consistent typographic scale.
- **Glassmorphism**: `.glass` / `.glass-light` CSS classes with `backdrop-filter: blur()` — applied to cards, nav, modals, and buttons.
- **Custom cursor**: `body { cursor: none }` globally; restored via `@media (max-width: 768px)`. Cursor hides on mobile.

## Non-Obvious Decisions

- Particle animation in HeroSection uses raw Canvas API (60 particles) rather than Framer Motion — better perf for continuous animation.
- LoadingScreen unmounts via `AnimatePresence` to avoid layout shift on reveal.
- Portfolio items use CSS `aspect-ratio: 16/10` for consistent thumbnails.
- Form submission is mocked (setTimeout) — wire to Netlify Forms or an API route for production.
- `useInView` returns `true` permanently once triggered — avoids re-animating on scroll back.

## Adding Real Video Content

Replace the placeholder divs in `ShowreelSection.tsx` and `PortfolioSection.tsx` modal with `<iframe>` (YouTube/Vimeo embed) or `<video>` elements. The modal backdrop click handler already closes the modal.

## Development Commands

```bash
npm run dev    # Dev server on :3000
npm run build  # Production build
```
