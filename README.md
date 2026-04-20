# Mobile Store

A single-page e-commerce storefront for browsing mobile devices and accessories, viewing product details, and completing a checkout flow.

The project is built with React + TypeScript and uses Redux Toolkit with persisted client state for cart and catalog UX continuity.

## Live Demo

- Production: [https://mobile-store-gold.vercel.app/](https://mobile-store-gold.vercel.app/)

## What This App Includes

- Category-based catalog with `6` categories:
  - `Iphone`
  - `IPad`
  - `Android Smartphones`
  - `Accessories`
  - `IMac`
  - `Apple Watch`
- In-code product dataset with `101` products total.
- Category page features:
  - multi-select filtering (model, storage, color, type where applicable)
  - price range filtering
  - popularity sorting
  - pagination
- Product details page with:
  - color/model switching
  - add-to-cart with quantity controls
  - review form validation
- Cart/checkout experience with:
  - quantity updates
  - auto-calculated totals
  - delivery type selection
  - customer form validation
- Persisted Redux state (`redux-persist`) to keep cart/state across reloads.
- Route-level lazy loading and SEO metadata via `react-helmet-async`.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite 5
- **Routing:** `react-router-dom` (lazy routes)
- **State management:** Redux Toolkit + React Redux
- **Persistence:** `redux-persist`
- **Forms/validation:** Formik + Yup
- **Styling:** SCSS
- **Build-time assets:** `vite-plugin-image-optimizer`, `vite-plugin-static-copy`
- **Analytics:** `@vercel/analytics`

## Getting Started

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm or yarn

### Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn
```

### Run in Development

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The app starts on the default Vite dev server URL shown in your terminal.

## Available Scripts

- `npm run dev` / `yarn dev` - start development server.
- `npm run build` / `yarn build` - type-check and build production assets.
- `npm run preview` / `yarn preview` - preview the latest build.
- `npm run lint` / `yarn lint` - run ESLint.
- `npm run build:dev` / `yarn build:dev` - build with `public/robots.dev.txt`.
- `npm run build:prod` / `yarn build:prod` - build with `public/robots.prod.txt`.
- `npm run preview:prod` / `yarn preview:prod` - production robots build + preview.

## Project Structure

```text
mobile-store/
  src/
    components/      # UI components and feature sections
    pages/           # Route pages
    store/           # Redux store, reducers, selectors, slices
    styles/          # SCSS architecture (abstracts/components/layout/pages)
    helper/          # Filtering/sorting/validation helper utilities
    types/           # Shared TypeScript types
  public/
    fonts/           # Static font assets copied at build time
    robots.dev.txt
    robots.prod.txt
```

## Architecture Notes

- Product catalog data is currently local and initialized from `src/components/Category/constants.ts`.
- The router is configured in `src/App.tsx` with lazy-loaded pages.
- Redux store is configured in `src/store/index.ts` and wrapped with `PersistGate` in `src/main.tsx`.
- Forms across home/product/checkout use Formik + Yup validation schemas.

## Known Limitations and Next Improvements

Current implementation works well for demo/storefront UX, but for production scaling consider:

- Moving product data from hardcoded constants to an API or CMS.
- Adding unit/integration/end-to-end tests (no test suite is currently configured).
- Introducing environment-based configuration for public URLs/SEO values.
- Normalizing and deduplicating parts of the static product dataset.

## Deployment

The app is suitable for static hosting (Vercel/Netlify or similar) after running:

```bash
npm run build
```

Then serve the generated `dist` output.
