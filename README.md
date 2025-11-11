# Dutch Cocktail Club Webapp

Cinematic marketing + commerce site for Dutch Cocktail Club built with Next.js 14 (App Router) and TypeScript. The project includes Sanity content scaffolding, Shopify Storefront fallback data, shadcn/ui components, Tailwind styling, analytics gating, and automated tests.

## Tech stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS + custom cinematic design tokens
- shadcn/ui components, lucide-react icons, Framer Motion micro-interactions
- next-intl scaffold (NL default, EN optional)
- Sanity v3 schemas & seed data for cocktails, posts, testimonials, cases, FAQ, team
- Shopify Storefront API integration with graceful fallback data
- GA4, Meta Pixel & Hotjar via consented `AnalyticsProvider`
- ESLint, Prettier, Vitest unit tests, Playwright smoke tests

## Getting started
```bash
pnpm i
pnpm dev
```
Visit `http://localhost:3000`.

### Environment variables
Copy `.env.example` → `.env.local` and provide real credentials when ready:
```
SANITY_PROJECT_ID=xxxx
SANITY_DATASET=production
SANITY_API_VERSION=2025-11-01
SHOPIFY_STORE_DOMAIN=xxxx.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=shpat_xxx
GA_MEASUREMENT_ID=G-XXXX
FACEBOOK_PIXEL_ID=XXXX
HOTJAR_ID=XXXX
```
Missing keys trigger safe mock data + warning banners.

### Core scripts
| Purpose | Command |
| --- | --- |
| Install deps | `pnpm i` |
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Lint | `pnpm lint` |
| Unit tests (Vitest) | `pnpm test:unit` |
| Playwright smoke tests | `pnpm test:e2e` |
| Full test suite | `pnpm test` |

## Testing & quality
- **Vitest** (`tests/unit/roi-calculator.test.ts`) guards ROI logic.
- **Playwright** (`tests/e2e/smoke.spec.ts`) asserts hero render, cocktail filters, lead-form validation, and shop availability.
- ESLint/Prettier enforce code quality. Tailwind + Next best practices keep JS payload low.

## Content & integrations
- `/sanity/schemas` defines all document types plus a seed dataset used when env vars are missing.
- `lib/sanity.ts` fetches GROQ data with caching + Zod validation before React components consume it.
- `lib/shopify.ts` calls Storefront GraphQL; fallback dataset keeps `/shop` + cocktail PDP buttons working offline.
- Forms post to `/api/lead` where payloads are validated (ready to forward to HubSpot/Pipedrive as shown in the comments).

## Accessibility & performance
- WCAG-friendly focus states, keyboard-ready nav, filters, accordions, and forms.
- JSON-LD for Organization (home), Product (shop & cocktail detail), Article (blog detail), plus sitemap/robots files ready for Vercel.
- HeroVideo respects `prefers-reduced-motion` and swaps to poster imagery when motion is disabled.
- Lighthouse budget targets (≤250KB JS, LCP/TTI under 2.5s) enforced via lightweight components, lazy media, and consented analytics loading.

## Deployment
Vercel-ready (static + server routes). Remember to set the environment variables in Vercel, connect Sanity + Shopify, and optionally enable the optional EN locale by adding translated content.
