# Brand colour system

**The authoritative values live in [`lib/design/tokens.ts`](../lib/design/tokens.ts).**
This document explains the system; it does not restate the values.

That distinction matters. This file used to carry full hex tables, and they
drifted from the code: it documented `lumina-success`, `lumina-warning`,
`lumina-error` and `lumina-light-neutral` as Tailwind classes that had never
been added, alongside a complete palette for a product that no longer exists. A
second copy of a value is a value that will eventually disagree with the first.

## Hierarchy

The logo encodes it — a slate-to-teal shell peeling back to reveal a golden
core:

|                 | Owns         | Role                                            |
| --------------- | ------------ | ----------------------------------------------- |
| **Effuse Labs** | slate → teal | the shell; the firm itself                      |
|                 | gold         | the core — the spark of insight, used sparingly |
| **Lumina**      | gold → coral | the product's own identity                      |

A product's palette never becomes the firm's. Future products get their own
accent inside the same slate/teal parent frame.

This rule exists because it was broken: the corporate `AccentBar` defaults to
Lumina's gradient, so the parent brand currently renders in its product's
colours. That is corrected in the visual identity work.

## Using colour

- **In `.tsx`** — use a Tailwind class (`text-effuse-teal`, `bg-effuse-slate`),
  or import from `lib/design/tokens.ts` where a value is genuinely needed in
  JavaScript.
- **In CSS** — use `theme('colors.effuse-teal')`.
- **Never a raw hex outside `lib/design/`.** `npm run check:tokens` fails the
  build on one.

Tailwind class names are generated from the token file by
`tailwind.config.ts`. Adding a colour means adding it to the token file first —
anything else produces a class that emits no CSS at all, silently, which is how
sixty broken utilities survived in this repository for months.

## Contrast

`contrastPairs` in the token file lists every foreground/background combination
the site relies on, and `npm run check:tokens` asserts each against WCAG AA —
4.5:1 for body text, 3:1 for large text. A regression fails CI rather than
becoming a future accessibility audit.

`prohibitedPairs` records combinations that look tempting and fail. Three worth
knowing:

- **White on teal** is about 1.9:1. Teal is a surface for _dark_ text — slate
  on teal reaches roughly 6:1.
- **White on gold** is worse. Gold is the spark: a small accent, or a
  background for slate text.
- **Medium grey on white** is about 3.5:1 — large text only, never body copy.
  It was previously the default colour of the `Text` component.

## Related

- [Effuse Labs brand style guide](./EFFUSELABS_BRAND_STYLEGUIDE.md) — logo,
  typography, voice, imagery
- [Lumina product style guide](./LUMINA_PRODUCT_STYLEGUIDE.md)
