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
│   └── useScrollReveal.ts              # IntersectionObserver hook for fade-up animations
├── components/
│   ├── AnnouncementBar.tsx             # Section 1
│   ├── Navbar.tsx                      # Section 2 (sticky nav + mobile drawer)
│   ├── Hero.tsx                        # Section 3 (hero + trust badges + count-up)
│   ├── BeforeAfterSlider.tsx           # Section 4
│   ├── SectionDivider.tsx             # Curved/angled SVG dividers between sections
│   ├── ServicesGrid.tsx                # Section 5
│   ├── ServiceCard.tsx                 # Individual service card
│   ├── AsSeenIn.tsx                    # Enhancement: logo bar
│   ├── MeetTheTeam.tsx                 # Section 6 (+ animated stats)
│   ├── ProjectGallery.tsx              # Section 7 (masonry + neighborhood captions)
│   ├── Reviews.tsx                     # Section 8 (+ video testimonial card)
│   ├── FAQ.tsx                         # Section 9 (+ price transparency)
│   ├── EstimateForm.tsx                # Section 10 (3-step + micro-interactions)
│   ├── WhatHappensNext.tsx             # Enhancement: post-form timeline
│   ├── LocalProofBand.tsx              # Section 11
│   ├── Footer.tsx                      # Section 12
│   ├── StickyMobileCTA.tsx             # Section 13 (+ evolving copy)
│   └── ExitIntentBanner.tsx            # Enhancement: desktop exit-intent nudge
├── pages/
│   └── Index.tsx                       # Assembles all sections
└── index.css                           # Design tokens, animations, fonts
```

---

## Enhancement Integration Map

| # | Enhancement | Integrated Into |
|---|-------------|-----------------|
| 1 | Animated count-up social proof | **Hero** — "Trusted by 500+ Austin homeowners" with number animation |
| 2 | Video testimonial embed | **Reviews** — one card has play overlay linking to embedded video |
| 3 | "As seen in" logo bar | **AsSeenIn** — new section between Hero and Before/After |
| 4 | Real-time availability indicator | **EstimateForm** — "3 slots remaining for April" with pulse dot |
| 5 | Evolving sticky CTA copy | **StickyMobileCTA** — copy changes based on scroll position |
| 6 | Exit-intent nudge | **ExitIntentBanner** — desktop-only banner on cursor leave |
| 7 | Form micro-interactions | **EstimateForm** — checkmarks, smooth progress bar fills, green states |
| 8 | "Call us instead" link | **EstimateForm** — phone link beside form header |
| 9 | Parallax depth on hero | **Hero** — CSS `background-attachment: fixed` or transform-based parallax |
| 10 | Cursor-following gradient | **Dark sections** (Before/After, FAQ) — CSS radial gradient on mousemove |
| 11 | Staggered card reveals | **ServicesGrid, Reviews** — cascading delay on scroll-reveal |
| 12 | Number animations | **MeetTheTeam** — 500+, 10 Years, 5-Star count up on scroll |
| 13 | Curved section dividers | **SectionDivider** — SVG wave/curve between alternating bg sections |
| 14 | Transparent price range in FAQ | **FAQ** — answer includes "Most projects range $2,500–$15,000" |
| 15 | "What happens next" timeline | **WhatHappensNext** — 3-step post-form reassurance section |
| 16 | Neighborhood-specific proof | **ProjectGallery** — captions with Austin neighborhood names |

---

## Build Checklist

### Phase 0: Foundation
- [x] Update `index.html` — add Google Fonts (Playfair Display + DM Sans), meta title/description, favicon
- [x] Update `src/index.css` — HSL design tokens, font-face declarations, fade-up keyframes, utility classes
- [x] Update `tailwind.config.ts` — extend with brand colors (forest, gold, cream), font families, custom animations
- [x] Install `react-compare-slider` dependency
- [x] Create `useScrollReveal.ts` hook (IntersectionObserver, adds `.revealed` class)

### Phase 1: Navigation Shell
- [x] **Section 1 — AnnouncementBar**: Gold banner, spring booking message, dismiss button (X), stores dismissed state
- [x] **Section 2 — Navbar**: Logo left, anchor links center (Services, Our Work, Reviews, FAQ), gold CTA right. Frosted glass `backdrop-blur` on scroll. Mobile: hamburger → drawer with links + CTA pinned at bottom

### Phase 2: Hero & First Impression
- [ ] **Section 3 — Hero**: Full-viewport, Unsplash garden bg + dark overlay, staggered CSS fade-in (headline → subheadline → CTA + microcopy)
- [ ] **Hero trust badges**: Star rating, licensed/insured, "Serving Austin since 2013", "<2hr response time"
- [ ] **Enhancement #1**: Animated count-up "Trusted by 500+ Austin homeowners" in hero
- [ ] **Enhancement #9**: Parallax depth effect on hero background
- [ ] **SectionDivider** component: Curved SVG divider (Enhancement #13)

### Phase 3: Social Proof & Services
- [ ] **Enhancement #3 — AsSeenIn**: Logo bar (Austin Monthly, Houzz, Nextdoor, BBB) between Hero and Before/After
- [ ] **Section 4 — BeforeAfterSlider**: Dark green bg, `react-compare-slider`, two landscape images, project caption
- [ ] **Enhancement #10**: Cursor-following radial gradient on dark sections (Before/After, FAQ)
- [ ] **Section 5 — ServicesGrid**: 6 cards, responsive 2-col desktop / horizontal scroll mobile
- [ ] **ServiceCard**: Full-bleed image, icon, name, benefit line. Hover: darken + description slide-up. Links to #estimate
- [ ] **Enhancement #11**: Staggered reveal delays on service cards

### Phase 4: Team & Gallery
- [ ] **Section 6 — MeetTheTeam**: Founder bio (Marco Rivera), portrait placeholder, crew photo placeholder
- [ ] **Enhancement #12**: Animated stat counters (500+ Projects · 10 Years · 5-Star) count up on scroll
- [ ] **Section 7 — ProjectGallery**: Masonry grid, 6–8 landscape photos (Unsplash), hover captions
- [ ] **Enhancement #16**: Captions include Austin neighborhoods (Tarrytown, South Congress, Zilker, etc.)

### Phase 5: Reviews & FAQ
- [ ] **Section 8 — Reviews**: Google logo + 5 stars + "127 Austin homeowners trust Verdant & Co." 4 review cards
- [ ] **Enhancement #2**: One review card has video testimonial play overlay
- [ ] **Enhancement #11**: Staggered reveal on review cards
- [ ] **Section 9 — FAQ**: Dark green bg, gold accordion icons, 6 Q&As with warm answers
- [ ] **Enhancement #14**: One FAQ answer includes transparent price range ($2,500–$15,000)

### Phase 6: Estimate Form & Post-Form
- [ ] **Section 10 — EstimateForm**: 3-step form with progress bar (React Hook Form)
  - [ ] Step 1: Service selection (pill multi-select)
  - [ ] Step 2: Address / neighborhood text input
  - [ ] Step 3: Name + phone + submit button
  - [ ] Console.log on submit + warm success toast/message
- [ ] **Enhancement #4**: "3 slots remaining for April" with pulse dot near form
- [ ] **Enhancement #7**: Form micro-interactions (checkmarks on step complete, smooth progress fill, green states)
- [ ] **Enhancement #8**: "Prefer to talk? Call (512) 555-0147" phone link beside form
- [ ] **Enhancement #15 — WhatHappensNext**: 3-step timeline below form (We call within 2 hrs → Free on-site walkthrough → Work begins in days)

### Phase 7: Footer & Sticky Elements
- [ ] **Section 11 — LocalProofBand**: Static Google Maps iframe (Austin, TX) + neighborhood pill tags
- [ ] **Section 12 — Footer**: Logo, tagline, service links column, contact info, license badge, copyright
- [ ] **Section 13 — StickyMobileCTA**: Appears after scrolling past hero, fixed bottom bar, links to #estimate
- [ ] **Enhancement #5**: CTA copy evolves by scroll context ("Get a free estimate →" / "Join 127 happy homeowners →")
- [ ] **Enhancement #6 — ExitIntentBanner**: Desktop-only, subtle banner when cursor nears top of viewport

### Phase 8: Assembly & Polish
- [ ] Assemble all sections in `Index.tsx` in correct order with alternating backgrounds
- [ ] Insert `SectionDivider` between each section transition
- [ ] Verify all CTAs/buttons/links point to `#estimate`
- [ ] Responsive audit: mobile, tablet, desktop
- [ ] Scroll-reveal animations firing correctly on all sections
- [ ] Smooth scroll behavior for anchor links
- [ ] Accessibility: semantic HTML, alt text, focus states, color contrast
- [ ] SEO: single H1, meta tags, JSON-LD LocalBusiness schema

---

## Section Order (Final)

1. Announcement Bar (gold bg)
2. Sticky Navbar (transparent → frosted)
3. Hero (full viewport, dark overlay)
4. *Curved divider*
5. As Seen In (off-white bg)
6. *Curved divider*
7. Before/After Slider (dark green bg)
8. *Curved divider*
9. Services Grid (off-white bg)
10. *Curved divider*
11. Meet the Team (dark green bg)
12. *Curved divider*
13. Project Gallery (off-white bg)
14. *Curved divider*
15. Reviews (dark green bg)
16. *Curved divider*
17. FAQ (off-white bg)
18. *Curved divider*
19. Estimate Form + What Happens Next (dark green bg)
20. *Curved divider*
21. Local Proof Band (off-white bg)
22. Footer (dark green bg)
23. Sticky Mobile CTA (fixed, mobile only)
24. Exit-Intent Banner (fixed, desktop only)

---

## Notes

- **Images**: All images sourced from Unsplash via direct URLs — no API key needed
- **Form backend**: Console.log only (no server integration yet)
- **Animations**: CSS-only via IntersectionObserver — no Framer Motion
- **Every CTA on the page points to `#estimate`**
- **Mobile-first responsive throughout**
