# Roadmap

**Status:** rebuilding. Last updated 2 August 2026.

This site was built through 2025 across a mix of AI coding tools and left
untouched for about a year. In August 2026 it went through a full audit. This
document records what that found and what remains — publicly, because a firm
selling technical judgement should be willing to show its own.

---

## What the audit found

The documentation described a finished, high-performing site. The code did not
match it.

**Roughly sixty Tailwind utility classes referenced colour tokens that were
never defined.** Tailwind emits nothing for an unknown token and reports no
error, so every one of these failed silently and had been broken for months:

- The skip-to-content link rendered with **no background and no text colour** —
  an accessibility affordance that was completely unusable, on a site whose
  stated values lead with accessibility.
- `Card` borders never rendered.
- Sections meant to alternate background tone were all white.
- The footer's copyright divider never appeared.

**A visitor had no way to make contact except a `mailto:` link.** The hero call
to action pointed at `#waitlist`, which existed nowhere. The homepage's "Get
Started" and "Schedule Demo" buttons had no `href` and no click handler at all.
Six footer links pointed at anchors on no page; three more pointed at
`/privacy`, `/terms` and `/accessibility`, which were hard 404s.

**A CMS integration existed three times over, two of them already disabled.**
The live one built its client at module scope with a fallback project id of
`demo` and performed a network fetch on every single page render, against a
project that does not exist. It always failed and always fell back to
hardcoded defaults.

**There was no CI and nothing protecting the default branch.** `npm test` was
`echo "No tests yet" && exit 0`. A build could break, a link could die, and
nothing would say so.

**The documentation actively misled.** A status dashboard reported Lighthouse
scores measured against components that had since been deleted. A code review
document analysed two components that no longer existed. The README carried a
badge claiming "Lighthouse 100 / 98" and, seventy lines further down, a line
reading "Lighthouse 81".

The through-line is that **written code was being treated as finished work**.
Nothing checked whether it was true.

---

## Approach

Six pull requests, each small enough to review, landing in dependency order.

Every automated check ships in the same pull request as the fix that makes it
pass. A gate that lands red teaches everyone to ignore it.

|     |                                                 | Status         |
| --- | ----------------------------------------------- | -------------- |
| 1   | CI, Playwright smoke suite, Node pinned         | ✅ merged      |
| 2   | Stack upgrade, dead code removed, design tokens | ✅ merged      |
| 3   | Documentation reset                             | ← you are here |
| 4   | Visual identity system                          |                |
| 5   | Information architecture, content, contact      |                |
| 6   | SEO, deployment hardening                       |                |

### 1 — Quality gates ✅

GitHub Actions running type-check, lint, format and build, plus a Playwright
suite asserting per route: 200 response, exactly one visible `h1`, no console
errors, non-empty title and meta description. It runs against a **production
build**, because the defects this project needs caught only reproduce in the
output that ships.

### 2 — Stack and tokens ✅

Next 14 → 16, React 18 → 19, Tailwind 3 → 4, ESLint 8 → 9. The dead CMS
integrations, an unused 205-line component, and a discontinued second product
were removed — about 18,700 lines net.

Every colour now lives in `lib/design/tokens.ts`, with `npm run check:tokens`
failing the build on a phantom class, a raw hex outside that file, or a colour
pair below WCAG AA.

The stricter linting that came with the upgrade surfaced three real bugs that
had been invisible: a hook calling `setState` synchronously inside an effect
(forcing a re-render on every mount), a component typing its props as `any`,
and the navbar logo triggering a full page reload instead of client navigation.

### 3 — Documentation reset ← current

This document, `CLAUDE.md`, a rewritten README, and a licence that separates
freely reusable source code from the brand and copy that are not. Four stale
planning documents removed.

### 4 — Visual identity

The current styling is not merely dated, it is structurally incoherent. The
corporate accent bar is built from Lumina's gradient — the parent firm renders
in its product's colours, which stops working the moment a second product
exists. Two typefaces are downloaded on every page and effectively unused.
There is no type scale; the homepage alone makes eighteen separate size
decisions. Emoji carry the entire visual language.

The direction follows the name. _Effundere_ means "to pour out", and the logo
is a slate-to-teal shell peeling back to reveal a golden core — so the site
treats **light as its medium**: a dark canvas, gold and teal as emitted light
rather than flat fills, and grain over gradients so they read as atmosphere.

That also settles the brand hierarchy the logo already implies:

|             | Owns                                 |
| ----------- | ------------------------------------ |
| Effuse Labs | slate → teal, with gold as the spark |
| Lumina      | gold → coral                         |

Constraints, so "striking" does not quietly cost accessibility: every dark
surface meets WCAG AA, all motion is removable via `prefers-reduced-motion`,
the luminous work is CSS and SVG rather than WebGL, and a Lighthouse budget in
CI is the arbiter. An effect that cannot clear those does not ship.

### 5 — Information architecture and content

Real routes for `/about`, `/services`, `/contact` and the legal pages, and a
working contact form — replacing every dead call to action. Gated by a test
asserting that every internal link resolves to a route that exists, plus `axe`
accessibility scanning per route and a Lighthouse budget.

### 6 — SEO and deployment

`robots.ts`, a complete sitemap, per-route Open Graph images, structured data,
and a tightened Content Security Policy.

---

## Known outstanding

Things currently wrong on the live site, listed rather than hidden:

- Several calls to action still point at `#waitlist`, which does not exist.
  Fixed in 5.
- There is no contact form. Fixed in 5.
- Product features and personas are illustrated with emoji. Fixed in 4.
- `/privacy`, `/terms` and `/accessibility` do not exist. The footer links to
  them were removed rather than left as 404s; the pages arrive in 5.
- The social profile links in the footer have never been verified to exist.
