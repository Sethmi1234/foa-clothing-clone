# FOA Clothing Clone

A static e-commerce frontend clone of [foaclothing.com](https://foaclothing.com/) — a Sri Lankan sports and lifestyle brand. Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.2.9 (App Router) |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Framer Motion | ^12.40.0 |
| ESLint | ^9 |

## Features

- **Full homepage** with 8 sections: Hero slideshow, New Collection carousel, Category grid, Shop the Look, Collection showcase, Best Sellers tabs, Iron Island promo, and Footer
- **Product catalog** with 40+ products across men's, women's, and accessories categories
- **Shopping cart** with localStorage persistence, drawer UI, quantity controls, and order notes
- **Wishlist** with localStorage persistence and drawer UI
- **Authentication** (simulated) with login/register and localStorage persistence
- **Currency selector** with localStorage persistence
- **Search overlay** with predictive search
- **Responsive design** — desktop (1440px+) and mobile (375px) layouts
- **Animations** — hero fade transitions, scroll reveals, stagger effects, hover interactions
- **Mega menu navigation** with dropdown columns and promotional images
- **Product filters** by category, color, size, and collection
- **Checkout flow** with shipping info, order summary, and payment forms
- **Image validation** — detects and filters broken Shopify CDN images

## Project Structure

```
foa-clothing-clone/
├── public/                      # Static assets (SVG icons)
├── scripts/
│   ├── check-images.mjs         # Validate product images on CDN
│   └── export-bad-images.mjs    # Export broken image URLs
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout with providers
│   │   ├── page.tsx             # Homepage (8 sections)
│   │   ├── globals.css          # Tailwind v4 + custom CSS
│   │   ├── account/             # Login/register pages
│   │   ├── cart/                # Cart page
│   │   ├── checkout/            # Checkout page
│   │   ├── collections/         # Collection listing pages
│   │   └── products/            # Product detail pages
│   ├── components/
│   │   ├── cart/                # Cart drawer, cart item
│   │   ├── checkout/            # Checkout form components
│   │   ├── collections/         # Collection filters, grid, sort
│   │   ├── e-voucher/           # Gift card components
│   │   ├── icons/               # SVG icon components
│   │   ├── layout/              # SiteShell, Header, Footer, AnnouncementBar
│   │   ├── products/            # ProductCard, ProductGrid, Carousel
│   │   ├── search/              # Search overlay
│   │   ├── sections/            # Hero, CategoryGrid, BestSellers, etc.
│   │   ├── shared/              # Shared components
│   │   ├── ui/                  # Buttons, inputs, badges, spinners
│   │   └── wishlist/            # Wishlist drawer
│   ├── config/
│   │   └── site.ts              # Site configuration
│   ├── context/                 # React state providers
│   │   ├── AuthContext.tsx       # Authentication state
│   │   ├── CartContext.tsx       # Shopping cart state
│   │   ├── CurrencyContext.tsx   # Currency selection
│   │   ├── SearchContext.tsx     # Search overlay state
│   │   └── WishlistContext.tsx   # Wishlist state
│   ├── data/                    # Static/mock data
│   │   ├── collections.ts       # 40+ products (full catalog)
│   │   ├── mockData.ts          # Homepage data (heroes, sections, footer)
│   │   ├── navigation.ts        # Mega menu structure
│   │   ├── currencies.ts        # Currency options
│   │   ├── eVoucher.ts          # Gift card data
│   │   ├── faq.ts               # FAQ content
│   │   └── invalidImages.ts     # Known broken image URLs
│   ├── hooks/                   # Custom React hooks
│   │   ├── useCart.ts
│   │   ├── useMobileMenu.ts
│   │   ├── useProductCarousel.ts
│   │   ├── useScroll.ts
│   │   └── useWindowSize.ts
│   ├── lib/                     # Utility libraries
│   │   ├── animations.ts        # Framer Motion variants
│   │   ├── cart.ts              # Cart math (line ID, count, subtotal)
│   │   ├── collections.ts       # Collection filtering
│   │   ├── constants.ts         # App constants
│   │   ├── helpers.ts           # Helper functions
│   │   ├── images.ts            # Shopify CDN URL helpers + validation
│   │   ├── productImages.ts     # Image sanitization
│   │   ├── products.ts          # Product query functions
│   │   ├── search.ts            # Search logic
│   │   └── utils.ts             # General utilities
│   └── types/                   # TypeScript type definitions
│       ├── index.ts             # Core types (Product, CartItem, HeroSlide, etc.)
│       └── navigation.ts        # Navigation types (NavItem, NavColumn, etc.)
├── add_sizes.ts                 # Utility script
├── parse.js                     # Utility script
├── ANALYSIS.md                  # UI analysis of target site
├── AGENTS.md                    # AI agent instructions
├── CLAUDE.md                    # AI assistant instructions
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS (Tailwind v4)
├── tsconfig.json                # TypeScript configuration
└── eslint.config.mjs            # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# or
yarn install

# or
pnpm install

# or
bun install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Homepage Sections

The homepage (`src/app/page.tsx`) is composed of 8 vertical sections:

1. **HeroSlideshow** — Full-width hero with 3 slides, fade transitions, 5s autoplay
2. **New Collection** — Product carousel with section title + CTA link
3. **Category Grid** — 3-column grid (Mens / Womens / Accessories)
4. **Shop the Look** — Full-width lifestyle image with hotspot pins
5. **Collection Showcase** — Interactive background swap on hover (Embroidery / Linen / Core 24/7)
6. **Best Sellers** — Tabbed product grid (Tees / Denim / Bags / Accessories)
7. **Iron Island** — Full-width event promo with CTA
8. **Footer** — Newsletter signup, link columns, social icons, payment methods

## State Management

The app uses React Context for all state management:

| Provider | Purpose | Persistence |
|----------|---------|-------------|
| `AuthProvider` | User login/register/logout | localStorage (`foa-auth-user`) |
| `CartProvider` | Cart items, drawer, order note, terms | localStorage (`foa-cart-items`) |
| `CurrencyProvider` | Selected currency | localStorage (`selected_currency`) |
| `SearchProvider` | Search overlay open/close | In-memory |
| `WishlistProvider` | Wishlist items and drawer | localStorage (`foa-wishlist`) |

## Data Architecture

All product and content data is **static mock data** (no backend API). Products are stored in `src/data/collections.ts` and images are served from Shopify's CDN (`foaclothing.com/cdn/shop/files/...`).

### Image URL Utilities

Located in `src/lib/images.ts`:

- `shopImage(filename, width)` — Builds a Shopify CDN product image URL
- `shopCollectionImage(filename, width)` — Builds a Shopify CDN collection image URL
- `isInvalidImageUrl(url)` — Checks against a known list of broken images
- `resolveImageUrl(url, fallback)` — Returns fallback if image is invalid
- `pickFirstValidImage(candidates, fallback)` — Finds the first valid image from an array

## Animations

Uses **Framer Motion** for animations:

| Animation | Location |
|-----------|----------|
| Fade crossfade | Hero slideshow |
| Text reveal with stagger | Hero headings |
| Image hover swap | Product cards |
| Fade up on scroll | Section titles |
| Stagger children | Product grids |
| Scale on hover | Buttons, category tiles |
| Background crossfade | Collection showcase |

## Responsive Design

- **Desktop (1440px+)** — Full navigation, 4-column product grid, 3-column category grid
- **Mobile (375px)** — Hamburger menu, horizontal product scroll, stacked categories
- Hero uses separate mobile/desktop images
- Typography scales down on smaller screens

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `check-images.mjs` | `node scripts/check-images.mjs` | Validate product images on Shopify CDN |
| `export-bad-images.mjs` | `node scripts/export-bad-images.mjs` | Export list of broken image URLs |
| `add_sizes.ts` | `npx tsx add_sizes.ts` | Add size arrays to product data |
| `parse.js` | `node parse.js` | Parse product data |

## Image Validation

The project includes automatic image validation that checks product images against a known list of broken Shopify CDN URLs (`src/data/invalidImages.ts`). Invalid images are replaced with a default fallback image.

## License

This is a clone project for educational purposes. All product images and branding belong to FOA Clothing.