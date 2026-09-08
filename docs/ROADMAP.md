# Roadmap

**Status:** building toward a full MVP. Last updated 7 September 2026.

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

## Building to a full MVP with placeholder content

The build does not stall waiting for final copy or real photography. Every
route and section gets built, styled, made accessible and (per stage 5)
animated to the standard set below, using **draft copy and FPO ("for
placement only") imagery** wherever the real thing isn't ready yet — the same
principle already applied to the founder's signature: no fake mark standing
in for something real, but a clearly-labelled placeholder is not the same
thing as a fake.

Two rules keep that from quietly becoming permanent, which is exactly how
this site ended up with a `#waitlist` link nobody could find:

- **Every placeholder is marked at the point of use** — `{/* FPO: ... */}` for
  imagery, and draft copy is written to sound like copy rather than lorem
  ipsum, but is not treated as final. `git grep -n "FPO:"` is always the true
  list.
- **Every marked placeholder is also listed in "Known outstanding" below.**
  Landing on the working branch is fine; calling the site launch-ready with
  the FPO list non-empty is not — that gate is stage 7.

## Approach

Six pull requests, each small enough to review, landing in dependency order.

Every automated check ships in the same pull request as the fix that makes it
pass. A gate that lands red teaches everyone to ignore it.

|     |                                                   | Status         |
| --- | ------------------------------------------------- | -------------- |
| 1   | CI, Playwright smoke suite, Node pinned           | ✅ merged      |
| 2   | Stack upgrade, dead code removed, design tokens   | ✅ merged      |
| 3   | Documentation reset                               | ✅ merged      |
| 4   | Design **system** — surfaces, type scale, a11y    | ✅ merged      |
| 5   | Design **identity** — the distinctive visual pass | ← you are here |
| 6   | Information architecture, content, contact        |                |
| 7   | SEO, deployment hardening                         |                |

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

### 3 — Documentation reset ✅

This document, `CLAUDE.md`, a rewritten README, and a licence that separates
freely reusable source code from the brand and copy that are not. Four stale
planning documents removed.

### 4 — Design system ✅

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

**What this stage is not.** It builds the _system_ — surfaces, a fluid type
scale, an icon set, contrast enforced in CI. That is necessary and it is not
the same thing as a visual identity. Reviewed on a real device, the result read
as a competent dark theme rather than a distinctive one, for reasons that are
specific rather than vague:

- **Inter everywhere, and no display face at all.** Inter is the default
  typeface of nearly every generated site; personality lives in type pairing
  and there was none.
- **The hero is the template answer** — eyebrow, large headline, subheading,
  two buttons — rather than opening with the most characteristic thing about
  the firm.
- **Structure that does not encode information.** The philosophy principles
  carry numbered 1/2/3 markers although nothing about them is sequential;
  eyebrows are a plain gradient rule that means nothing.
- **No signature element, and no aesthetic risk taken anywhere.**

### 5 — Design identity ← current

The distinctive pass, and the one that decides whether the site is memorable.
Worked in two passes, plan then critique, before any code, written down in
`docs/DESIGN_PLAN.md` rather than decided ad hoc in a pull request:

**Pass one — a written design plan.** A display and body pairing chosen for
this firm specifically; four to six named colours; layout sketches per section;
and one named signature element that the site is remembered for.

**Pass two — critique the plan before building.** Anything that reads as a
generic default rather than a specific choice gets revised or cut.

**Pass three, added after the first live review — critique the built result
against a real device, not just the plan.** A plan can survive its own
critique and still be wrong once rendered: the first type pairing (Fraunces,
a warm serif) read as sound on paper and as an editorial-studio site once
built and screenshotted, working against the credibility a vertical-SaaS firm
needs. Replaced with Bricolage Grotesque; the reasoning for both the original
choice and the reversal is kept in `docs/DESIGN_PLAN.md` rather than erased,
because the wrong-first-time record is exactly what stops the same mistake
recurring.

Done in this stage so far:

- Type: Bricolage Grotesque (display) + Public Sans (body), replacing Inter
  everywhere and then replacing Fraunces once it proved wrong live.
- Colour: `parchment` and `ember` added, carrying the warmth the type pairing
  no longer has to.
- The white sections are gone — Products and Solutions on the homepage, and
  the entire `/products/lumina` page, now sit on the dark elevation ramp
  instead of cutting to a white plate.
- The Pour: a signature divider between sections, deriving from the
  company's own name (_effundere_, "to pour out") rather than a decorative
  default.
- Two live non-negotiable violations found while doing the above and fixed
  alongside it: the `#waitlist` dead anchors, and cross-page nav links
  (`#contact` etc.) that only resolved from the homepage.

Still open in this stage:

- **Layout**: the offset, unnumbered philosophy blocks and the full-bleed
  founder statement from `docs/DESIGN_PLAN.md` are designed but not built.
- **Motion and interaction.** The original plan was deliberately restrained —
  "extra animation is what makes a design feel generated" — on the theory
  that a firm selling accessibility should not lean on motion. Direct
  feedback after seeing the built site live is that it now reads as _too_
  restrained: not modern or animated enough for what this firm is trying to
  be. That's a real reconsideration, not a rejection of the accessibility
  constraint — `prefers-reduced-motion` stays absolute regardless of how much
  motion ships for everyone else. Being run the same way the type reversal
  was: a design-committee pass (two independent takes — one arguing for
  bolder, more contemporary motion; one critiquing that proposal for
  gimmickry, performance and credibility cost) rather than one person's
  unchallenged judgment, with the result folded back into
  `docs/DESIGN_PLAN.md`'s Motion section before anything is built.
- The illustration system and an SVG logo; `public/` currently holds only
  PNGs.

The accessibility constraints above are not relaxed for any of it.

**Content and component correctness pass (design-committee reviewed).**
A second committee pass — full-site audit, then an independent critique of
that audit — reviewed content, information architecture, layout, and
component quality with no restrictions ("everything is changeable"). The
headline finding, confirmed by both agents independently: the site
represents only one of Effuse Labs' two real lines of business. Lumina
(the open-source, self-hostable vertical SaaS for salons/barbershops) has
a whole page and two homepage sections; the self-hosting/open-source
consulting line — setting up and supporting self-hosted OSS generally, for
businesses that would rather own their tools than rent them — appears in
exactly two places on the entire site (a hero eyebrow tag and one clause
in the contact paragraph).

The critique pass also caught the first pass reaching too far for an MVP —
a full new section, route, and nav rename is stage-6 scope, not this pass
— and sharpened what's genuinely a live defect versus what's a copy-quality
question for the real copywriting pass later. Landing now, scoped down:

- `FinalCTASection`'s defaults are a dead-CTA landmine of the exact shape
  CLAUDE.md's non-negotiable #2 already names twice (`#waitlist`): a
  default `description` claiming customers Lumina doesn't have yet, and a
  default `primaryCta` pointing at `#signup`, which exists nowhere. Neither
  current call site uses the defaults, but nothing stops a future one.
  Made both required — no default to fall back on.
- The `<meta description>` — the one piece of copy a search engine or an
  LLM actually reads to summarize the company — claimed Lumina "transforms
  salon and barber operations" in the present tense, before Lumina has
  launched, and described only one of two business lines. Fixed to be
  honest about both.
- The Lumina product page never once said Lumina is open-source, AGPL, or
  self-hostable — no licence, no repo link — while its pricing section read
  as ordinary closed SaaS ("exclusive early-bird pricing"). For the
  technical evaluator DESIGN_PLAN.md names as this site's secondary
  audience, that's the single largest missing credibility signal on the
  page. Added one factual sentence, not a section redesign.
- The homepage's "Solutions" section wasn't a second offering — it was
  Lumina, pitched a second time under a vaguer header, immediately after
  the section that already pitched it. Rewritten in place (same component,
  same slot, no new route or nav change) to actually describe the
  self-hosting/OSS-consulting line, marked as draft per the placeholder
  policy above, CTA pointed at the real `/#contact` rather than a `/services`
  route that doesn't exist yet.
- A handful of drive-by fixes surfaced along the way, bundled into the same
  small pass rather than each getting its own cycle: a dead ternary
  (`ProductHero.tsx`, both branches of a variant conditional returned the
  same value), a comment referencing a `DynamicHeroSection` that doesn't
  exist anywhere in the repo, `HeroSection` missing from the sections
  barrel export, and an unused `SectionDivider` component with zero
  consumers now that `Pour` replaced it.
- The `'light'` background variant was quietly still the _default_ on four
  components (`PainSolutionSection`, `FeatureBreakdownSection`,
  `PricingSection`, `ProductHero`), even though nothing calls it today —
  exactly the kind of dormant option that resurrects the white-section
  defect the moment a future call site omits the prop. Removed the option
  from the type entirely rather than trusting convention to avoid it.

**Deferred to stage 6, deliberately** (the critique pass's case: this is
real IA work, bigger than an MVP correctness pass, and copy is explicitly
out of scope until then per `DESIGN_PLAN.md`):

- A real `/services` route and an `/about` "how we build" page — nothing
  today shows a visitor the engineering discipline this repo actually
  practices (WCAG AA gated in CI, a design-token guard, a production-build
  Playwright suite).
- Renaming the nav label "Solutions" → "Services" — only once `/services`
  is a real destination; renaming it sooner repeats the exact "promise a
  destination that isn't there" pattern non-negotiable #2 exists to catch.
- Full real copywriting for both business lines, including verifying
  whether `github.com/effuselabs` (currently flagged in `content/site.ts`
  as unverified) is real and, if so, surfacing it somewhere more load-bearing
  than a footer icon.
- The 15+ near-duplicated `isDark ? 'parchment' : 'off-black'` ternaries
  across the same four components, which re-implement a colour decision
  `Typography.tsx` already documents as the surface's job, not the
  component's. Real debt, not urgent — nothing is visibly broken today —
  and it touches visual output across several components, so it goes
  through visual-baseline review deliberately rather than riding along with
  a content fix.

### 6 — Information architecture and content

Real routes for `/about`, `/services`, `/contact` and the legal pages, and a
working contact form — replacing every dead call to action. Gated by a test
asserting that every internal link resolves to a route that exists, plus `axe`
accessibility scanning per route and a Lighthouse budget.

This is also where the site needs to be a real destination rather than a
placeholder for the other end of a planned redirect: `jeremyshields.ca`'s
"available for work" self-hosting/DevOps block is meant to point here instead
of standing on its own. That repository isn't in reach from this session, so
the redirect itself is separate work — but `/services` (or wherever that
offer lands) needs to exist and be worth linking to before that redirect
makes sense.

### 7 — SEO and deployment

`robots.ts`, a complete sitemap, per-route Open Graph images, structured data,
and a tightened Content Security Policy.

---

## Known outstanding

Things currently wrong or unfinished on the working branch, listed rather
than hidden. FPO markers (see the MVP policy above) belong here too, once
stage 6 starts placing them.

**Still open, stage 5:**

- The philosophy section still carries numbered 1/2/3 markers and the founder
  statement is still a two-column grid rather than the offset/full-bleed
  layout `docs/DESIGN_PLAN.md` describes. Not yet built.
- Motion is under review after live feedback that the original restrained
  approach reads as under-designed rather than disciplined. A design-committee
  pass (proposal + independent critique) is running before anything ships, so
  the result is argued rather than asserted.
- The founder statement has no signature or portrait. The decorative squiggle
  that stood in for one was not a signature at all, and was removed rather
  than left to imply something untrue. It stays empty until a real signature
  arrives — that is a deliberate absence, not an oversight.
- No illustration system yet, and no SVG logo; `public/` currently holds only
  PNGs.

**Fixed since the last update** (kept here briefly so the record shows the
finding, not just the current clean state):

- ~~Sections cut from dark to pure white~~ — Products and Solutions on the
  homepage and the entire `/products/lumina` page now sit on the dark
  elevation ramp.
- ~~`#waitlist` dead anchors~~ — three of them, on the Lumina product page,
  the same defect this document already named as having shipped once before.
  Replaced with real `/#contact` links and copy that doesn't promise a list
  that doesn't exist.
- ~~Cross-page nav links broken from any page but home~~ — `#contact` etc.
  only resolved from the homepage; now `/products/lumina` is a second real
  route, this broke silently. Found while fixing the above, not separately
  reported.
- ~~Fraunces read as editorial rather than technical~~ — replaced with
  Bricolage Grotesque; see stage 5.

**Still open, stage 6:**

- There is no contact form; the homepage CTA is a `mailto:`.
- `/privacy`, `/terms` and `/accessibility` do not exist. The footer links to
  them were removed rather than left as 404s; the pages arrive here.
- `/services` (or equivalent) doesn't exist yet, and is the landing point for
  the planned `jeremyshields.ca` redirect — see stage 6 above.
- The social profile links in the footer have never been verified to exist.

**Stage 7:**

- Visual baselines are compared on desktop only. Mobile is covered by layout
  assertions instead, because cross-machine glyph rendering made pixel
  comparison unreliable at that width. Pinning CI to the official Playwright
  container would fix it properly.
