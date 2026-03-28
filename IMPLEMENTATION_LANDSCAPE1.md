# Verdant & Co. Landscape Studio — Implementation Plan

---

## Brand & Tech Stack

| Element | Value |
|---------|-------|
| **Fonts** | Playfair Display (headings) + DM Sans (body) via Google Fonts |
| **Primary** | `#1A3C2E` — Forest Green |
| **Accent** | `#C9A96E` — Warm Gold |
| **Background** | `#F7F4EF` — Off-white |
| **Framework** | React 18 + Vite + TypeScript |
| **Styling** | Tailwind CSS + CSS custom properties (HSL tokens) |
| **Animation** | CSS-only (IntersectionObserver fade-ups, CSS transitions) |
| **Forms** | React Hook Form |
| **Slider** | react-compare-slider |
| **Icons** | Lucide React |

---

## File Structure

```
src/
├── hooks/
│   └── useScrollReveal.ts
│   └── useCursorGradient.ts
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SectionDivider.tsx
│   ├── AsSeenIn.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── ServicesGrid.tsx
│   ├── ServiceCard.tsx
│   ├── MeetTheTeam.tsx
│   ├── ProjectGallery.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   ├── EstimateForm.tsx
│   ├── WhatHappensNext.tsx
│   ├── LocalProofBand.tsx
│   ├── Footer.tsx
│   ├── StickyMobileCTA.tsx
│   └── ExitIntentBanner.tsx
├── pages/
│   └── Index.tsx
└── index.css
```

---

## Build Checklist

### Phase 0: Foundation
- [x] Update `index.html` — Google Fonts, meta title/description, favicon
- [x] Update `src/index.css` — HSL design tokens, font-face, fade-up keyframes, utility classes
- [x] Update `tailwind.config.ts` — brand colors, font families, custom animations
- [x] Install `react-compare-slider` dependency
- [x] Create `useScrollReveal.ts` hook

### Phase 1: Navigation Shell
- [x] **AnnouncementBar**: Gold banner, spring booking message, dismiss button
- [x] **Navbar**: Logo, anchor links, gold CTA, frosted glass on scroll, mobile drawer

### Phase 2: Hero & First Impression
- [x] **Hero**: Full-viewport, Unsplash bg + dark overlay, staggered fade-in
- [x] **Hero trust badges**: Star rating, licensed/insured, serving since 2013, <2hr response
- [x] **Animated count-up**: "Trusted by 500+ Austin homeowners"
- [x] **Parallax**: `background-attachment: fixed`
- [x] **SectionDivider**: Curved SVG divider

### Phase 3: Social Proof & Services
- [x] **AsSeenIn**: Logo bar (Austin Monthly, Houzz, Nextdoor, BBB)
- [x] **BeforeAfterSlider**: react-compare-slider, dark green bg
- [x] **Cursor-following gradient**: useCursorGradient hook
- [x] **ServicesGrid**: 6 cards, responsive grid
- [x] **ServiceCard**: Image, icon, hover reveal, links to #estimate
- [x] **Staggered reveals**: Cascading delays on service cards

### Phase 4: Team & Gallery
- [x] **MeetTheTeam**: Founder bio (Marco Rivera), crew photo, cursor gradient
- [x] **Animated stat counters**: 500+ Projects, 10 Years, 5.0 Stars
- [x] **ProjectGallery**: Masonry grid, 8 landscape photos, hover captions
- [x] **Neighborhood captions**: Tarrytown, Zilker, South Congress, etc.

### Phase 5: Reviews & FAQ
- [x] **Reviews**: Google trust header, 5 stars, 4 review cards, video play overlay
- [x] **Staggered reveal**: On review cards
- [x] **FAQ**: Radix Accordion, 6 Q&As, gold accent icons
- [x] **Transparent pricing**: "$2,500–$15,000" in FAQ answer

### Phase 6: Estimate Form & Post-Form
- [x] **EstimateForm**: 3-step form with progress bar (React Hook Form)
- [x] Step 1: Service selection (pill toggles)
- [x] Step 2: Address / neighborhood input
- [x] Step 3: Name + phone + submit
- [x] Console.log on submit + success message
- [x] **Availability indicator**: "3 slots remaining for April" with pulse dot
- [x] **Form micro-interactions**: Checkmarks, progress fill, success states
- [x] **Phone link**: "Prefer to talk? Call (512) 555-0147"
- [x] **WhatHappensNext**: 3-step timeline (call → walkthrough → work begins)

### Phase 7: Footer & Sticky Elements
- [x] **LocalProofBand**: Google Maps iframe + neighborhood pill tags
- [x] **Footer**: Logo, tagline, service links, contact, license badge, copyright
- [x] **StickyMobileCTA**: Mobile-only, fixed bottom, evolving copy
- [x] **ExitIntentBanner**: Desktop-only, exit-intent, session-once

### Phase 8: Assembly & Polish
- [x] Assemble all sections in `Index.tsx` with dividers and alternating backgrounds
- [x] JSON-LD `LocalBusiness` schema in `index.html`
- [x] Single H1, semantic heading hierarchy
- [x] Alt text on all images
- [x] All CTAs point to `#estimate`
- [x] Smooth scroll behavior
- [x] Mobile-first responsive throughout

---

## ✅ ALL PHASES COMPLETE
