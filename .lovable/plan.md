

# Phase 0 + Phase 1 Implementation

## Phase 0: Foundation

### 1. `index.html`
- Add Google Fonts link: Playfair Display (400, 700) + DM Sans (400, 500, 700)
- Update title to "Verdant & Co. Landscape Studio — Austin, TX"
- Update meta description and OG tags for landscaping SEO

### 2. `src/index.css`
- Replace CSS variables with Verdant brand tokens (HSL):
  - `--forest`: 153 38% 17% (#1A3C2E)
  - `--gold`: 37 42% 60% (#C9A96E)  
  - `--cream`: 30 33% 95% (#F7F4EF)
- Map `--primary` to forest, `--accent` to gold, `--background` to cream
- Add `@keyframes fade-up` and `@keyframes fade-in` animations
- Add `.reveal` utility class (opacity 0 → 1, translateY)
- Set body font to DM Sans, heading utility for Playfair Display

### 3. `tailwind.config.ts`
- Add `forest`, `gold`, `cream` color tokens
- Add `fontFamily`: `heading: ['Playfair Display']`, `body: ['DM Sans']`
- Add `fade-up`, `fade-in` animation entries
- Add `pulse-dot` keyframe for availability indicator

### 4. Install `react-compare-slider`
- Add to package.json dependencies

### 5. `src/hooks/useScrollReveal.ts`
- IntersectionObserver hook that adds `.revealed` class when element enters viewport
- Returns a ref to attach to any element
- Configurable threshold and rootMargin

## Phase 1: Navigation Shell

### 6. `src/components/AnnouncementBar.tsx`
- Gold background bar with spring booking text
- Dismiss X button, stores dismissed state in `useState` (sessionStorage optional)
- Compact, centered text, DM Sans font

### 7. `src/components/Navbar.tsx`
- Sticky nav below announcement bar
- Logo text "Verdant & Co." (Playfair Display) left
- Anchor links center: Services, Our Work, Reviews, FAQ (smooth scroll)
- Gold CTA button right: "Get Your Free Estimate"
- On scroll: frosted glass effect (`backdrop-blur-md`, semi-transparent bg)
- Mobile: hamburger icon → sheet/drawer with links + CTA pinned at bottom
- All links point to `#estimate` or respective section anchors

### 8. Update `src/pages/Index.tsx`
- Import and render AnnouncementBar + Navbar
- Placeholder sections for remaining phases

### 9. Update `IMPLEMENTATION_LANDSCAPE1.md`
- Check off all Phase 0 and Phase 1 items

## Technical Notes
- No new routing needed — single page with anchor navigation
- `react-hook-form` already installed
- Will use shadcn Sheet component for mobile nav drawer
- Smooth scroll via `scroll-behavior: smooth` on `html`

