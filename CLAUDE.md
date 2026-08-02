# Effuse Labs

The corporate website for Effuse Labs — the firm behind Lumina and future
products. It is the thing other work points at as "the company that built this".

Effuse Labs builds industry-specific software (vertical SaaS) for small
businesses, and sets up and supports self-hosted open-source software for
businesses that would rather own their tools than rent them. The site has to be
credible to a prospective client, and it has to be a working example of the
accessibility it claims to care about.

## Stack

Next.js 16 App Router · React 19 · TypeScript strict · Tailwind v4 · ESLint 9
(flat config) · Prettier · Playwright · Vercel. **Node 22.**

## Commands

```bash
npm run dev            # dev server
npm run build          # production build — must pass before any commit
npm run type-check     # tsc
npm run lint           # eslint (NOT `next lint` — removed in Next 16)
npm run format:check   # prettier
npm run check:tokens   # design token guard — see Non-negotiable 1
npm run test:e2e       # Playwright
```

## Architecture

- `app/` — routes. Server components by default; `'use client'` only where
  there is genuine interactivity.
- `components/ui/` — primitives (Button, Card, Typography, Grid, Container).
  `components/layout/` — shell. `components/sections/` — page sections.
  `components/product/` — the product page template.
- `content/` — all site copy and configuration, typed. Nav, footer, contact
  details and social links live in `content/site.ts`.
- `lib/design/tokens.ts` — every colour, gradient, radius, shadow and font.
- `scripts/check-design-tokens.mjs` — enforces the token rules.
- `e2e/` — Playwright. `ROUTES` in `e2e/routes.ts` is the route inventory; add
  a route there and both the smoke checks and the visual baselines apply to it
  automatically. It sits outside `*.spec.ts` because Playwright refuses to let
  one test file import another.

## Non-negotiables

Each of these is here because it already went wrong in this repo.

1. **One design token source.** Every colour, gradient, radius, shadow and font
   lives in `lib/design/tokens.ts`. `tailwind.config.ts` imports it and never
   restates a value. **No raw hex outside `lib/design/`** — in `.tsx`, import
   the token; in CSS, use `theme()`.

   Colour had drifted across `tailwind.config.ts`, `app/globals.css` and
   per-component class strings, and the three disagreed. Twenty-nine utilities
   referenced tokens that were never defined — `text-light-grey`,
   `bg-brand-gold`, `border-medium-grey`. Tailwind emits nothing for an unknown
   token and reports no error, so these failed silently and stayed broken for
   months: the skip-to-content link rendered with no background at all, `Card`
   borders never rendered, and `SectionContainer background="light"` produced a
   white section. `npm run check:tokens` now fails the build on all of it.

2. **Every link resolves to a route that exists.** No `href` to an anchor or
   path that is not real, and no CTA without an `href`.

   The site shipped with `#waitlist` on three pages (no such element), a
   "Get Started" and a "Schedule Demo" button with no `href` and no `onClick`
   at all, six footer anchors pointing at IDs on no page, and three footer
   links to `/privacy`, `/terms` and `/accessibility` that were hard 404s. A
   visitor had no way to make contact except a `mailto:`.

3. **No secrets at import time.** Never construct a credential-checking client
   at module scope. Resolve it lazily on first use.

   The sibling Lumina repo records being bitten by this three times — the
   production build breaks wherever the secret is absent, including CI. This
   repo has its own version: the Sanity client was built at module scope with a
   fallback project id of `demo`, and every page render awaited a fetch
   against it.

4. **No `any`.** Especially not as a function return type. It is an ESLint
   error here, not a warning.

5. **Accessibility is the product, not a checklist.** The firm sells
   accessibility; the site cannot fail it. Every dark surface meets WCAG AA —
   `contrastPairs` in `tokens.ts` is asserted by `check:tokens`. All motion is
   gated on `lib/hooks/usePrefersReducedMotion.ts` — reuse that hook rather
   than adding a second mechanism. Interactive elements keep their native
   semantics: a link is an `<a>` or `next/link`, not a `<div role="button">`.

6. **Internal navigation uses `next/link`.** Every internal link was a raw
   `<a>`, so each click was a full page reload with no prefetch.

7. **Don't leave TODOs in place of implementation.** Either build it or don't
   merge it.

8. **Brand hierarchy.** Effuse Labs owns slate → teal, with gold as the spark
   of insight. Lumina owns gold → coral. A product's palette never becomes the
   firm's.

   `AccentBar` used to default to `variant='lumina'`, so the parent brand
   rendered in its product's colours. That is fine with one product and
   incoherent with two — nothing would distinguish Effuse Labs from Lumina, or
   from whatever ships next. It now defaults to `effuse`; use `lumina` only in
   Lumina's own context.

## Testing

- `e2e/smoke.spec.ts` runs against a **production build**, not `next dev`. The
  defects this project needs caught — dead links, unstyled elements, missing
  routes — only reproduce in the output that ships.
- Add new routes to `ROUTES` in `e2e/routes.ts` rather than writing new
  per-route tests.
- `e2e/visual.spec.ts` holds screenshot baselines, taken with reduced motion
  forced so they are deterministic. An intentional visual change fails it by
  design: look at the diff image, confirm it is what you meant, then
  `npm run test:e2e -- --update-snapshots`. Updating baselines without reading
  the diff turns the check into a formality.
- Chromium is preinstalled in some sandboxes. If `@playwright/test` expects a
  different build, set `PLAYWRIGHT_CHROMIUM_PATH` rather than running
  `playwright install`.

## How to know you're done

```bash
npm run type-check && npm run lint && npm run format:check && \
  npm run check:tokens && npm run build && npm run test:e2e
```

All six green. Nothing is complete because it was written — only because that
command passes. This project stalled once already on documentation that
reported a finished, high-performing site while the code underneath had dead
CTAs and sixty broken utility classes.

## Conventions

- **One branch per pull request**, named for the change. Conventional commits.
  Never commit to `main` directly.
- Small batches. A long-lived branch means a huge PR, conflicts against a
  moving `main`, and no feedback until the end.
- Commit messages carry the _reasoning_, not just the change — what was wrong,
  why the fix is shaped this way. They are the durable record.
- Prefer functional, declarative code. Check `components/ui/` and `content/`
  before writing a new module.
- **If the same correction comes up twice, add a lint rule or a test instead of
  writing it down.** Enforcement beats documentation — `check:tokens` exists
  because of this rule.

## Gotchas

- **`next lint` was removed in Next 16.** Use `eslint` directly.
- **`eslint-config-next` v16 ships native flat config.** Do not wrap it in
  `FlatCompat` (fails with "Converting circular structure to JSON"), and do not
  re-register its plugins — it already provides `react`, `react-hooks`,
  `import`, `jsx-a11y` and `@typescript-eslint`, and flat config rejects a
  redefined plugin.
- **Tailwind v4 `@apply` resolves only registered utilities.** A class declared
  inside `@layer utilities` is not one. Use `@utility` for custom utilities that
  need to be `@apply`-able.
- **Turbopack writes CSS to `.next/static/chunks/`**, not `.next/static/css/`.
  Tooling that assumes the old path silently finds nothing.
- **Unlayered CSS beats Tailwind utilities in v4.** Tailwind v4 puts utilities
  in cascade layers, and an unlayered rule wins over a layered one regardless
  of specificity. A bare `* { padding: 0 }` in `globals.css` therefore killed
  every spacing utility on the site, and a `.font-inter { font-weight: 700 }`
  beat the `font-normal` beside it in the same class string. Both were harmless
  under v3. Anything added to `globals.css` goes in `@layer base` or
  `@utility`.
- **Clear `.next` after deleting a route.** `tsconfig.json` includes
  `.next/types/**`, so stale generated types fail `type-check` on a route that
  no longer exists.
