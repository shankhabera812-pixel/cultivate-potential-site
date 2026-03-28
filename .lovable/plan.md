

# Phase 2 + Phase 3 Implementation Plan

## Phase 2: Hero & First Impression

### 1. `src/components/Hero.tsx`
- Full-viewport section with curated Unsplash garden/landscape background image
- Dark overlay (bg-black/50) for text contrast
- Parallax effect via `background-attachment: fixed`
- Staggered CSS fade-in using animation-delay:
  - Headline: "Where your land meets its potential." (Playfair Display, large)
  - Subheadline: "Austin's premier landscape design & build studio"
  - Gold CTA button: "Get Your Free Estimate" → #estimate
  - Microcopy below CTA: "Free consultation · No obligation"
- Trust badge row below hero content: 4 badges with Lucide icons
  - Star icon + "5-Star Rated"
  - Shield icon + "Licensed & Insured"
  - MapPin icon + "Serving Austin Since 2013"
  - Clock icon + "<2hr Response Time"
- Animated count-up: "Trusted by 500+ Austin homeowners" — CSS counter animation or a simple `useEffect` interval that counts from 0 to 500

### 2. `src/components/SectionDivider.tsx`
- Reusable component with props: `fromColor` and `toColor`
- Renders an SVG with a curved/wave path
- Negative margin to overlap sections seamlessly
- Two variants: `curve` (default) and `wave`

## Phase 3: Social Proof & Services

### 3. `src/components/AsSeenIn.tsx`
- Cream background section
- "As Featured In" small heading
- Row of 4 styled text logos (Austin Monthly, Houzz, Nextdoor, BBB) in muted gray
- Uses scroll reveal for fade-up on enter

### 4. `src/components/BeforeAfterSlider.tsx`
- Dark green background section
- Section heading: "See the Transformation"
- `ReactCompareSlider` with two Unsplash landscape images (before: overgrown yard, after: manicured garden)
- Project caption on the after side: project type, neighborhood, timeline
- Uses `useScrollReveal` for entrance animation

### 5. `src/hooks/useCursorGradient.ts`
- Hook that tracks mouse position on a container ref
- Sets CSS custom properties (`--mouse-x`, `--mouse-y`) on the element
- Dark sections apply a radial gradient via CSS: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(201,169,110,0.08), transparent 50%)`

### 6. `src/components/ServicesGrid.tsx` + `src/components/ServiceCard.tsx`
- 6 service cards in a responsive grid (1-col mobile, 2-col tablet, 3-col desktop)
- Each ServiceCard:
  - Unsplash image as background
  - Lucide icon overlay
  - Service name + one-line benefit
  - Hover: image darkens, short description slides up
  - Entire card is a link to #estimate
- Services: Landscape Design, Hardscaping, Garden Installation, Irrigation Systems, Outdoor Lighting, Lawn Maintenance
- Container uses `.reveal-stagger` for cascading entrance delays

### 7. Update `src/pages/Index.tsx`
- Replace placeholder hero with `<Hero />`
- Add `<SectionDivider />` between each section
- Add `<AsSeenIn />` after hero divider
- Add `<BeforeAfterSlider />` after AsSeenIn
- Add `<ServicesGrid />` after BeforeAfter divider
- Keep remaining placeholders for Phase 4+

### 8. Update `IMPLEMENTATION_LANDSCAPE1.md`
- Check off all Phase 2 and Phase 3 items

## Files Created/Modified
- **Create**: `Hero.tsx`, `SectionDivider.tsx`, `AsSeenIn.tsx`, `BeforeAfterSlider.tsx`, `ServicesGrid.tsx`, `ServiceCard.tsx`, `useCursorGradient.ts`
- **Modify**: `Index.tsx`, `IMPLEMENTATION_LANDSCAPE1.md`

## Unsplash Images (direct URLs)
- Hero bg: lush Austin-style garden landscape
- Before/After: overgrown vs manicured yard pair
- Service cards: 6 distinct landscape/hardscape photos

