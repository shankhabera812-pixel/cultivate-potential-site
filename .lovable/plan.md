

# Complete Phases 4-8: Verdant & Co. Landing Page

All remaining sections to finish the full single-page site. 10 new components, updates to `Index.tsx` and the checklist.

---

## Phase 4: Team & Gallery

### `MeetTheTeam.tsx`
- Dark green bg with cursor-following gradient
- Founder card: portrait (Unsplash), name "Marco Rivera", title "Founder & Lead Designer", short bio paragraph
- Crew photo (Unsplash group/team shot) beside or below
- 3 animated stat counters that count up on scroll (reuse same IntersectionObserver pattern from Hero):
  - **500+** Projects Completed
  - **10** Years in Austin
  - **5.0** Star Average Rating
- Gold accent numbers, scroll-reveal on the section

### `ProjectGallery.tsx`
- Cream bg, heading "Our Work"
- CSS-grid masonry layout (varying row spans): 6-8 Unsplash landscape photos
- Hover overlay: project type + Austin neighborhood name (Tarrytown, Zilker, South Congress, Mueller, Barton Hills, East Austin, Westlake, Clarksville)
- Staggered reveal on cards

---

## Phase 5: Reviews & FAQ

### `Reviews.tsx`
- Dark green bg with cursor gradient
- Header: Google "G" icon + 5 gold stars + "127 Austin homeowners trust Verdant & Co."
- 4 review cards in a 2x2 grid (1-col mobile):
  - Reviewer name, neighborhood, star rating, quote text
  - One card has a video play overlay icon (non-functional, decorative)
- Staggered reveal on cards

### `FAQ.tsx`
- Cream bg section
- Heading: "Frequently Asked Questions"
- Radix Accordion with 6 Q&As, gold chevron icons:
  1. What areas do you serve?
  2. How much does landscaping cost? (includes "$2,500–$15,000" transparent pricing)
  3. How long does a typical project take?
  4. Do you offer financing?
  5. Are you licensed and insured?
  6. What's included in the free estimate?
- Warm, conversational tone in answers

---

## Phase 6: Estimate Form & Post-Form

### `EstimateForm.tsx`
- Dark green bg with cursor gradient
- Heading: "Get Your Free Estimate"
- Subtext with pulse-dot: "3 slots remaining for April"
- Phone link: "Prefer to talk? Call (512) 555-0147"
- 3-step form with progress bar (React Hook Form):
  - **Step 1**: Service selection — 6 pill-style toggles (same services list)
  - **Step 2**: Address / neighborhood text input
  - **Step 3**: Name + phone + submit
- Micro-interactions: checkmark icon on completed steps, smooth progress bar fill, green success states
- On submit: `console.log(data)` + success message ("We'll call you within 2 hours!")
- Uses `Progress` component for the step indicator

### `WhatHappensNext.tsx`
- Still on dark green bg, below form
- "What Happens Next?" heading
- 3-step horizontal timeline (vertical on mobile):
  1. Phone icon — "We call within 2 hours"
  2. MapPin icon — "Free on-site walkthrough"
  3. Hammer icon — "Work begins in days"
- Gold accent connectors between steps

---

## Phase 7: Footer & Sticky Elements

### `LocalProofBand.tsx`
- Cream bg
- Static Google Maps iframe centered on Austin, TX (no API key needed — use embed URL)
- Row of neighborhood pill tags below: Tarrytown, South Congress, Zilker, Mueller, Barton Hills, East Austin, Westlake, Clarksville

### `Footer.tsx`
- Dark green bg
- 3-column layout (stacks on mobile):
  - Col 1: "Verdant & Co." logo + tagline
  - Col 2: Service links (all → #estimate)
  - Col 3: Contact info (phone, email, Austin TX)
- License badge: "Licensed & Insured · TICL #12345"
- Copyright line

### `StickyMobileCTA.tsx`
- Fixed bottom bar, mobile only (`md:hidden`), appears after scrolling past hero
- Uses IntersectionObserver on hero to toggle visibility
- CTA text evolves based on scroll position:
  - Default: "Get a free estimate →"
  - Past reviews: "Join 127 happy homeowners →"
- Links to `#estimate`

### `ExitIntentBanner.tsx`
- Desktop only (`hidden md:block`)
- Detects cursor leaving viewport top (`mouseleave` on document)
- Slides down from top: "Before you go — grab your free estimate. Most homeowners save 20% booking this month."
- Gold CTA button + dismiss X
- Shows only once per session (sessionStorage flag)

---

## Phase 8: Assembly & Polish

### Update `Index.tsx`
- Replace all placeholder sections with real components
- Full section order with `SectionDivider` between each:
  1. AnnouncementBar → Navbar → Hero
  2. Divider → AsSeenIn
  3. Divider → BeforeAfterSlider
  4. Divider → ServicesGrid
  5. Divider → MeetTheTeam
  6. Divider → ProjectGallery
  7. Divider → Reviews
  8. Divider → FAQ
  9. Divider → EstimateForm + WhatHappensNext
  10. Divider → LocalProofBand
  11. Footer (no divider after — it's the end)
  12. StickyMobileCTA + ExitIntentBanner (fixed/overlay)

### SEO & Accessibility
- Add JSON-LD `LocalBusiness` schema in `index.html`
- Ensure single `<h1>` (hero), proper heading hierarchy
- Alt text on all images
- Focus-visible states on interactive elements
- Verify color contrast on all text

### Checklist
- Mark all Phase 4–8 items complete in `IMPLEMENTATION_LANDSCAPE1.md`

---

## Files to Create
`MeetTheTeam.tsx`, `ProjectGallery.tsx`, `Reviews.tsx`, `FAQ.tsx`, `EstimateForm.tsx`, `WhatHappensNext.tsx`, `LocalProofBand.tsx`, `Footer.tsx`, `StickyMobileCTA.tsx`, `ExitIntentBanner.tsx`

## Files to Modify
`Index.tsx`, `index.html` (JSON-LD), `IMPLEMENTATION_LANDSCAPE1.md`

