

# Verdant & Co. Landscape Studio — Landing Page

## Brand & Setup
- Load **Playfair Display** (headings) + **DM Sans** (body) from Google Fonts
- Color palette: Forest green `#1A3C2E`, Gold `#C9A96E`, Off-white `#F7F4EF`
- Add `react-compare-slider` and `react-hook-form` as dependencies
- Custom CSS scroll-triggered fade-up animations via IntersectionObserver hook
- Alternating section backgrounds for visual rhythm

## Sections (13 total)

### 1. Announcement Bar
Gold background, dismissible banner about spring booking

### 2. Sticky Navigation
Logo left, anchor links center (Services, Our Work, Reviews, FAQ), gold CTA button right. Frosted glass blur on scroll. Mobile hamburger with CTA pinned at drawer bottom

### 3. Hero
Full-viewport with curated Unsplash garden background + dark overlay. Staggered fade-in: headline → subheadline → CTA button + microcopy. Trust badge row below (rating, licensed, serving Austin since 2013, response time)

### 4. Before/After Slider
Dark green background. `react-compare-slider` with two contrasting landscape images. Project caption on the After side

### 5. Services Grid
6 service cards in responsive grid (2-col desktop, horizontal scroll mobile). Each with full-bleed image, icon, name, benefit. Hover: darken + description slide-up. All cards link to #estimate

### 6. Meet the Team
Founder bio (Marco Rivera) with portrait + crew photo. Stats row: 500+ Projects · 10 Years · 5-Star Rated

### 7. Project Gallery
Masonry grid of 6–8 curated landscape photos with hover captions (service · neighborhood · days)

### 8. Google Reviews
Google logo + 5 stars + "127 Austin homeowners trust Verdant & Co." 4 review cards with quotes, names, neighborhoods

### 9. FAQ
Dark green background, gold accordion icons. 6 questions with warm, detailed answers

### 10. Estimate Form (#estimate)
3-step form with progress bar using React Hook Form:
- Step 1: Service selection (pill multi-select)
- Step 2: Address/neighborhood text input
- Step 3: Name + phone + submit
Console log on submit, warm success message

### 11. Local Proof Band
Static Google Maps iframe (Austin, TX) + neighborhood pill tags

### 12. Footer
Logo, tagline, service links, contact info, license badge, copyright

### 13. Sticky Mobile CTA Bar
Appears on mobile after scrolling past hero, fixed to bottom, links to #estimate

