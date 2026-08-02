# Effuse Labs

**Intelligent software for small business growth.**

[effuse.io](https://effuse.io) · Winnipeg, Manitoba

Effuse Labs builds industry-specific software — vertical SaaS — for the small
businesses that larger vendors overlook, and sets up and supports self-hosted
open-source tools for people who would rather own their software than rent it.

The name comes from the Latin _effundere_, "to pour out".

This repository is the firm's website. It is public because Effuse Labs works
with open-source software for a living, and it would be strange to do that from
behind a closed repository.

## What's here

|              |                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| **Products** | [Lumina](https://effuse.io/products/lumina) — booking, clients, staff and financials for salons and barbershops |
| **Services** | Vertical SaaS development · self-hosted and open-source setup and support                                       |
| **Contact**  | [hello@effuse.io](mailto:hello@effuse.io)                                                                       |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Playwright ·
Vercel. Node 22.

Content lives in `content/` as typed TypeScript rather than in a CMS. There is
one editor of this site, and that editor writes TypeScript.

## Quick start

```bash
npm ci
npm run dev      # http://localhost:3000
```

No environment variables are required to run the site locally.

## Commands

```bash
npm run dev            # dev server
npm run build          # production build
npm run start          # serve the production build

npm run type-check     # tsc
npm run lint           # eslint
npm run format         # prettier --write
npm run check:tokens   # design token guard (see below)
npm run test:e2e       # Playwright, against a production build
```

CI runs all of them on every pull request. All six must pass before merge.

## Layout

```
app/                    routes (App Router)
components/
  ui/                   primitives — Button, Card, Typography, Grid
  layout/               Navbar, Footer, PageWrapper, SkipNav
  sections/             page sections
  product/              product page template
content/                all site copy and configuration, typed
lib/design/tokens.ts    every colour, gradient, radius, shadow, font
scripts/                repo guards
e2e/                    Playwright
```

## Design tokens

Every colour, gradient, radius, shadow and font is declared in
`lib/design/tokens.ts` and nowhere else. `tailwind.config.ts` imports that file
rather than restating values, and there is no raw hex anywhere outside it.

`npm run check:tokens` enforces this. It fails the build on a Tailwind class
whose token does not exist, on a raw hex outside `lib/design/`, and on any
declared foreground/background pair that drops below WCAG AA contrast.

That last check is not decoration. Accessibility is something this business
claims about itself, so the site is held to it mechanically rather than by
good intentions.

## Accessibility

Effuse Labs was founded by Jeremy Shields, a federally-recognized person with a
disability, and the accessibility of what we build is a first-order concern
rather than a compliance exercise.

For this site that means: WCAG AA contrast on every declared colour pair,
asserted in CI; all motion gated on `prefers-reduced-motion`; native semantics
on interactive elements; `jsx-a11y` linting; and automated `axe` scanning per
route (landing with the content work — see the roadmap).

If you hit an accessibility barrier on effuse.io, mail
[hello@effuse.io](mailto:hello@effuse.io) and it will be treated as a bug.

## Status

The site is being rebuilt from an earlier draft. `docs/ROADMAP.md` describes
what the audit found, what has landed, and what is still outstanding — in
particular, several calls to action on the current site do not yet go anywhere,
which the content work addresses.

## Licence

Source code is MIT — see [LICENSE](./LICENSE).

The Effuse Labs brand, the logo and icon assets in `public/`, and the written
site copy in `content/` are **not** covered by it. See [NOTICE](./NOTICE) for
what that means in practice; the short version is that you are welcome to the
code and should use your own name and words.

## Documentation

- [ROADMAP](./docs/ROADMAP.md) — audit findings and what's next
- [Brand style guide](./docs/EFFUSELABS_BRAND_STYLEGUIDE.md)
- [Brand colour system](./docs/BRAND_COLOR_SYSTEM.md)
- [Deployment](./docs/DEPLOYMENT_GUIDE.md)
- [CLAUDE.md](./CLAUDE.md) — working rules for this repository
