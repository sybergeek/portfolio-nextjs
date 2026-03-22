# Portfolio Improvement Plan

This document tracks the ordered improvements for the portfolio codebase.

## Execution Order

### 1. Reduce unnecessary client-side JavaScript
- [ ] Remove `"use client"` from route pages that do not need full client rendering.
- [ ] Keep Framer Motion only in small client components instead of entire pages.
- [ ] Re-check the production build and compare first-load JS after the split.

Why first:
This is the largest performance bottleneck in the current app and should reduce hydration work and bundle size across all routes.

### 2. Fix App Router metadata usage
- [ ] Replace `next/head` usage in `app/layout.tsx` and route pages with `metadata` or `generateMetadata`.
- [ ] Add meaningful titles, descriptions, and social metadata for each page.
- [ ] Verify the final head output through a production build.

Why second:
The current metadata approach is legacy-style and should be corrected before expanding content or polishing SEO.

### 3. Repair theme initialization and dark mode behavior
- [ ] Refactor the theme hook to avoid the empty initial state.
- [ ] Prevent incorrect `localStorage` writes during first render.
- [ ] Remove debug logging and validate no theme flash occurs on load.

Why third:
This is a contained fix with direct UX impact and should be addressed before broader UI refactors.

### 4. Make the layout responsive
- [x] Replace rigid spacing like `p-32` and `px-32` with responsive spacing.
- [x] Rework hero, navbar, grids, and large headings for mobile and tablet breakpoints.
- [x] Review fixed-position elements like the hire-me badge for small screens.

Why fourth:
The current layout is desktop-first and likely breaks down on smaller viewports.

### 5. Convert repeated page content into typed data
- [ ] Move projects and articles into typed data structures.
- [ ] Replace repeated JSX blocks with mapped components.
- [ ] Remove placeholder `/` links and use real destinations.

Why fifth:
This improves maintainability and makes future content updates much safer.

### 6. Tighten TypeScript usage
- [ ] Replace pervasive `any` props with explicit types.
- [ ] Type shared components first, then route-specific components.
- [ ] Re-run type checking after each batch of replacements.

Why sixth:
This supports safer refactoring after the larger structural changes above.

### 7. Finish production hardening
- [ ] Install `sharp` for production image optimization.
- [ ] Upgrade Next.js to a patched version that removes known vulnerabilities.
- [ ] Refresh Browserslist data and re-run the production build.

Why seventh:
These are important production improvements, but they are lower risk once the rendering and layout changes are stable.

## Validation Checklist
- [ ] `npm run build` passes
- [ ] No unexpected hydration warnings
- [ ] Lower first-load JS on content pages
- [ ] Mobile layout works cleanly
- [ ] Dark mode works without flicker
- [ ] No placeholder project or article links remain

## Notes
- Current build succeeds, but shared first-load JS is high for a mostly static portfolio.
- The current app is a good fit for mostly server-rendered pages with small interactive islands.