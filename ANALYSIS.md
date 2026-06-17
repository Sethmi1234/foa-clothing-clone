# FOA Clothing — UI Analysis

Target: [foaclothing.com](https://foaclothing.com/)

## Layout Structure

The homepage is built as a vertical stack of Shopify sections:

1. **Announcement bar** — black marquee with delivery/shipping messages
2. **Header** — transparent over hero, becomes solid white on scroll
3. **Hero slideshow** — 3 full-width slides with fade transitions (5s autoplay)
4. **New Collection** — product carousel with section title + CTA link
5. **Category grid** — 3-column Mens / Womens / Accessories
6. **Shop the Look** — full-width lifestyle image with hotspot pins
7. **Collection showcase** — interactive background swap on hover (Embroidery / Linen / Core 24/7)
8. **Best Sellers** — tabbed product grid (Tees / Denim / Bags / Accessories)
9. **Iron Island promo** — full-width hero with event CTA
10. **Footer** — newsletter, links, payment icons

Spacing uses generous vertical padding (`section-spacing`) between blocks. Max content width is ~1440px with edge-to-edge heroes.

## Typography

- **Font:** Prompt (Google Fonts) — clean geometric sans-serif
- **Navigation:** 11px, uppercase, medium weight, wide letter-spacing
- **Section headings:** 24–32px, bold, uppercase, thick black underline
- **Hero headings:** 48–72px, semibold, uppercase, white
- **Product titles:** 14px, semibold, uppercase
- **Body/secondary:** 13–14px, gray (#8e8e8e) for installment info

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Black | `#151515` | Text, buttons, announcement bar |
| White | `#ffffff` | Backgrounds, hero text |
| Red | `#e00000` | Sale links, promotional accents |
| Gray | `#8e8e8e` | Secondary text, installment info |

## Components Identified

- AnnouncementBar (marquee)
- Navbar with mega menu dropdown
- HeroSlideshow with dots
- ProductCard (image hover swap, wishlist heart, color swatches, ADD TO CART)
- SectionTitle (underlined heading + subtitle + link)
- CategoryGrid (image tiles with labels)
- CollectionShowcase (outline/solid text toggle on hover)
- BestSellers (category tabs)
- Footer (newsletter form, link columns)
- FloatingActions (currency selector, back-to-top)

## Animations

| Animation | Where | Implementation |
|-----------|-------|----------------|
| Marquee scroll | Announcement bar | CSS `@keyframes marquee` |
| Fade crossfade | Hero slides | Framer Motion `AnimatePresence` |
| Text reveal | Hero headings | `heroTextReveal` variant with stagger |
| Image hover swap | Product cards | CSS opacity transition |
| Mega menu | Navbar | Fade + slide down on hover |
| Scroll header | Navbar | Transparent → white background |
| Stagger children | Product grids | `staggerContainer` variant |
| Fade up on scroll | Section titles | `whileInView` + `fadeUp` |
| Background swap | Collection showcase | Crossfade on hover |
| Scale on hover | Buttons, categories | Framer Motion `whileHover` |

## Responsive Behavior

- **Desktop (1440px+):** Full nav, 4-column product grid, 3-column category grid
- **Mobile (375px):** Hamburger menu, horizontal product scroll, stacked categories
- Hero uses separate mobile/desktop images
- Typography scales down on smaller screens

## Technical Notes

- Built on Shopify with custom web components (`<slide-show>`, `<featured-collection-list>`)
- Uses Flickity for carousels, lazy-loaded images from CDN
- CSS variables for header height (`--header-offset: 41px`, `--header-height: 99px`)
- Global uppercase settings via body classes (`navigation-uppercase-true`, etc.)
