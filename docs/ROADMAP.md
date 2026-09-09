# Roadmap

**Status:** the initial MVP is built. All seven stages below are complete —
every route responds, every internal link resolves to somewhere real, the
two real lines of business both have pages, and the full gate
(`type-check`, `lint`, `format:check`, `check:tokens`, `build`, the complete
Playwright suite) is green. `/privacy` and `/terms` are no longer marked
draft — Jeremy reviewed the language and approved it as live copy, not a
placeholder. LinkedIn, Twitter/X and Bluesky are now real, confirmed URLs
too — no social placeholders left. What's left is explicitly not code: real
copywriting in Jeremy's own words for `/about` and `/services`, and the
`jeremyshields.ca` redirect this session can't reach. See "Known
outstanding" for the complete, current
list. Last updated 8 September 2026.

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

|     |                                                   | Status      |
| --- | ------------------------------------------------- | ----------- |
| 1   | CI, Playwright smoke suite, Node pinned           | ✅ merged   |
| 2   | Stack upgrade, dead code removed, design tokens   | ✅ merged   |
| 3   | Documentation reset                               | ✅ merged   |
| 4   | Design **system** — surfaces, type scale, a11y    | ✅ merged   |
| 5   | Design **identity** — the distinctive visual pass | ✅ complete |
| 6   | Information architecture, content, contact        | ✅ complete |
| 7   | SEO, deployment hardening                         | ✅ complete |

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

### 5 — Design identity ✅

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
- The homepage's second business line: "Solutions" was Lumina pitched
  twice, rewritten in place to actually describe self-hosting/open-source
  support — see the content-and-component-correctness entry below.
- The real Lumina logo, replacing the Lightbulb icon placeholder.
- The founder statement is full-bleed now, matching `docs/DESIGN_PLAN.md`'s
  layout section — and the fake signature squiggle is actually gone. It
  had been recorded as removed here once already while still live in the
  code; that gap between what this document claimed and what the code did
  is exactly the failure mode this whole audit exists to catch, so it's
  worth naming rather than quietly fixing. The real signature (Jeremy's
  pick, from five auto-extracted candidates) is wired in.
- The philosophy blocks are offset and unnumbered now, matching
  `docs/DESIGN_PLAN.md`'s layout section — real labels (Accessibility,
  Performance, Longevity) carry the information the numbers pretended to.

Stage 5 is functionally complete. Still open, not blocking:

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
- ~~The 15+ near-duplicated `isDark ? 'parchment' : 'off-black'` ternaries
  across `PainSolutionSection`, `FeatureBreakdownSection`, `PricingSection`
  and `ProductHero`~~ — **closed.** The mechanical `'light'`-variant removal
  above (stage 5) collapsed every one of these to its always-dark branch
  rather than leaving the conditional in place with one arm dead; there is
  no live ternary of this shape left in any of the four. Jeremy asked about
  this directly after a mobile read-through and a fifth instance turned up
  under the same question: `FinalCTASection`'s `background: 'light' | 'dark'
| 'gradient'` prop had the identical shape (every call site passes
  `'gradient'`; the other two branches were dead), missed in the original
  pass because it wasn't one of the four named components. Collapsed the
  same way. What legitimately remains is not a ternary but plain
  repetition — many components separately write literal
  `text-effuse-parchment` classes rather than inheriting colour from
  `Typography.tsx` as its own contract intends. That's a real style-guide
  question (should color really come from the surface, enforced by a lint
  rule, rather than by convention?) but it cannot silently render off-brand
  output the way a stray `isDark` branch can, so it's noted rather than
  scheduled.

### 6 — Information architecture and content ✅

Real routes landed for `/about`, `/services`, `/privacy`, `/terms` and
`/accessibility` — every one of them was either a dead anchor scrolling to a
section that didn't exist, or a footer link removed rather than left as a 404. Nav "Solutions" is "Services" now and points at the real route; "About"
joined it. The homepage contact section has a structured form
(`components/sections/ContactForm.tsx`) instead of a bare "email us" button
— it builds a proper `mailto:` from the fields rather than faking a backend
this repo has no credentials to build honestly.

All five new routes are in `e2e/routes.ts`, so smoke checks, contrast checks
and visual baselines cover them the same as every existing route — this is
exactly how a real defect got caught during the pass: `/about` shipped with
zero `<h1>` elements (the page title was set as an `H2`) until the per-route
heading-outline check in `smoke.spec.ts` failed on it.

Copy on all five routes is draft, per the placeholder-content policy — see
"Known outstanding" below for what that means concretely (real copywriting,
the legal pages' final language, real social URLs).

The `jeremyshields.ca` redirect itself is still separate work, out of reach
from this session — but `/services` now exists and is worth linking to,
which was the blocker on that redirect making sense.

### 7 — SEO and deployment ✅

`robots.ts`, a complete sitemap, per-route Open Graph images, structured data,
and a tightened Content Security Policy.

---

## Known outstanding

Things currently wrong or unfinished on the working branch, listed rather
than hidden. FPO markers (see the MVP policy above) belong here too, once
stage 6 starts placing them.

**Still open, stage 5:**

- The philosophy section still carries numbered 1/2/3 markers rather than the
  offset, unnumbered layout `docs/DESIGN_PLAN.md` describes. Not yet built.
  (The founder statement's own layout work is done — see below.)
- Motion is under review after live feedback that the original restrained
  approach reads as under-designed rather than disciplined. A design-committee
  pass (proposal + independent critique) ran before anything shipped; almost
  none of the proposed flourishes survived the critique. Two did:
  - The mobile menu's open/close transition — **built.**
  - Native page cross-fades between routes, via the browser's
    `document.startViewTransition()` — **not built.** The critique's
    preferred version (Next's own `experimental.viewTransition` flag,
    wired through React's `ViewTransition` component) needs React's
    experimental/canary channel; this repo runs stable React 19, which does
    not export it. The fallback — hand-wrapping `router.push` in
    `startViewTransition` directly — is exactly the version the critique
    flagged as needing "real load-bearing browser testing" before shipping,
    and this pass didn't have the room to do that properly. Left for a
    dedicated pass rather than shipped half-verified.
    Anything bolder than either, per the committee, should spend its budget on
    the Pour rather than open new independent effects.
- No illustration system yet, and no SVG logo; `public/` currently holds only
  PNGs.
- Jeremy asked whether the site's icons (plain `lucide-react` glyphs in a
  teal-ring badge, used everywhere — feature lists, "How we build," pricing
  checkmarks) read as generic, and whether custom iconography is worth
  pursuing. Recommendation, not yet actioned: leave the library alone, but
  it's real design debt alongside the missing illustration system above —
  both are "we borrowed a stock visual vocabulary and never gave it a
  distinct treatment." A full bespoke icon set is a real investment (every
  icon across every section, redrawn and maintained) for a component that's
  support cast, not the lead — the Pour is what should look unmistakably
  Effuse Labs, and it just got the redesign to earn that. A cheaper
  middle path exists if a second opinion wants it: keep `lucide-react` for
  the glyphs themselves but restyle the badge that holds them (the brand
  gradient as a ring or fill instead of flat teal-tint, a shape other than a
  plain rounded square) so the _frame_ is distinctly Effuse Labs even where
  the glyph inside it is a common one. Bringing this to Jeremy rather than
  just picking one: it's a cost/reward call across the whole site, not a
  single component fix.
- ~~A real signature for the founder statement~~ — **done.** Jeremy's chosen
  candidate needed re-deskewing: the first pass leveled the _letters_ by eye
  (44°) and left the underline flourish still running diagonally through
  the name, which Jeremy correctly read as "sideways" on a real device. A
  Hough-transform line fit on the ink pixels found the true angle of the
  long straight underline stroke itself (64.25°) rather than guessing from
  the cursive letterforms, which are a much noisier signal — rotating to
  that angle leveled both the underline _and_ the text in the same pass.
  Re-rendered larger in `FounderStatementSection` (`h-16` → `h-24`/`h-28`).
- ~~Two Pour dividers around the founder statement rendered with visible
  jagged diagonal fragments on Jeremy's real mobile device~~ — superseded by
  a full shape redesign, see below. The immediate fix (removing
  `vector-effect="non-scaling-stroke"`, a suspected cross-engine rendering
  ambiguity with `preserveAspectRatio="none"`'s non-uniform scaling) is
  still in place but is no longer the interesting change: Jeremy's follow-up
  feedback ("these just look like glowing lines... I don't get the sense of
  flow, or liquid, or effuse") asked for more than a bugfix, and a filled
  shape has no stroke width to scale unevenly in the first place, so the
  whole bug class no longer applies regardless.
- ~~`Pour` reading as static glowing lines rather than a pour~~ — **done,**
  after a design-committee pass (proposal + independent critique) on this
  one component. The shell and core are now filled, tapered ribbons —
  near-invisible for most of their length, gathering into a wide mouth right
  at the opening, the way a stream thickens as it nears where it spills —
  rather than uniform-width strokes. Considered and cut: a single continuous
  ribbon spanning the whole divider (loses the "shell parting to reveal
  light" idea this component exists to encode) and a droplet/dash-travel
  animation on top of the shape change (a second animated layer, cut for
  restraint — the shape fix reads as flow on its own, and this component
  just shipped one cross-browser animation scare already). Ambient drift on
  the glow divs is unchanged; no new motion was added.
- ~~Hard-edged rectangle where the Pour's ambient glow meets the flat canvas
  around it~~ — took two attempts. Both glow divs are deliberately oversized
  (h-[260%]/h-[90%]) so the wash bleeds softly, relying on the container's
  `overflow-hidden` to clip them back down — but each radial-gradient's own
  fade-to-transparent is sized relative to its own oversized box, so at the
  point the parent actually clipped it, the gradient was often still well
  short of fully transparent, drawing a visible seam. Only obvious on a wide
  desktop screen, where there's enough flat canvas on either side for it to
  show up against. First fix wrapped both glow divs in a `mask-image`d
  sibling sized to the real container; that closed the gap in this
  environment's Chromium, but Jeremy still saw a seam on his own machine
  after it shipped — masking a blurred, absolutely-positioned layer is
  exactly the kind of cross-browser edge case this component already got
  burned by once (the vector-effect/preserveAspectRatio bug above), so
  rather than keep tuning a mask blind, the second pass drops clipping and
  masking entirely: no `overflow-hidden`, no mask, the glow divs simply
  bleed into the sections immediately above and below. A CSS blur has no
  hard edge of its own — it fades to imperceptible well within a few
  multiples of its blur radius with nothing needing to cut it off, and
  those neighbouring sections are the same dark canvas the wash already
  sits on, so there is nothing for a visible boundary to form against, in
  any engine. Confirmed no bleed-through onto neighbouring section content
  either — the gradient's own falloff completes well before it would
  reach far enough to be visible over adjacent text.

**Fixed since the last update** (kept here briefly so the record shows the
finding, not just the current clean state):

- ~~`/services` only named four categories, each with one example~~ — Jeremy
  asked for the page to convey real breadth: there's a mature, stable
  self-hosted option for far more than file storage, chat, CRM and
  analytics. New `ToolShowcaseSection` (`components/sections/
ToolShowcaseSection.tsx`) is a 20-item logo wall spanning categories the
  four-category checklist doesn't touch at all — document archiving,
  password management, wikis, bookmarks, notes, project management, ERP,
  team chat, surveys, accounting, habit tracking, household inventory,
  personal finance, inventory management, kanban boards — closing with "if
  it's self-hostable, there's probably already a good answer for it."
  Icons come from the dashboard-icons project, fetched once into
  `public/icons/services/` rather than pulled from a third-party CDN at
  request time — this is the page making the case for owning your own
  infrastructure, so it shouldn't quietly depend on someone else's for its
  own images. Every tile sits on a light card regardless of the source
  logo's colours; several (Umami, Vaultwarden) are dark line-art that read
  as nearly invisible smudges directly on the dark canvas otherwise.
- ~~Footer used the single-colour mark~~ — swapped to `variant="twoTone"`
  now that it exists, per Jeremy's call once he saw the comparison.
- ~~Social links were confirmed-real but URLs were placeholders~~ —
  resolved, see the "Known outstanding" entry above for the specifics.
- ~~No downloadable brand assets outside the component code~~ — Jeremy
  asked for the icon as standalone files to keep for himself, not just as
  React source. Exported both `EffuseMark` variants as plain SVG and a
  high-resolution transparent PNG into `public/brand/`
  (`effuse-mark-mono.{svg,png}`, `effuse-mark-twotone.{svg,png}`) and sent
  them directly.
- ~~No LinkedIn cover or X header image, and the existing logo shows up on
  a white background on X~~ — built `public/brand/linkedin-cover.png`
  (1128×191) and `public/brand/x-header.png` (1500×500) from the same
  teal/gold radial-glow-on-dark language `LuminousField.tsx` already uses
  for the hero, tuned per aspect ratio rather than the same percentages
  naively reused — the first pass at each left a visible dead patch where
  the glows didn't actually overlap by their visible cores, not just their
  blur haze. No typography, per Jeremy's brief. Also composited the
  existing transparent `logo-800x800.png` onto a `surface.deep` background
  (`public/brand/logo-800x800-solid-bg.png`) for the X profile photo, since
  a transparent PNG there renders on white regardless of site theme.
- ~~No SVG mark; the only logo asset was a glossy 3D render~~ — Jeremy drew
  a flat droplet/flame silhouette (same idea as `public/logo-800x800.png`'s
  shell-around-a-core, but as one flat shape rather than something with
  gradients and specular highlights that turn to mud at small sizes).
  Traced it with `potrace` into a clean vector path
  (`components/ui/EffuseMark.tsx`, `fill="currentColor"`, same convention
  Footer.tsx's social icons already use) and placed it beside "Effuse Labs"
  in the footer heading, which is exactly where Jeremy suggested it. Held
  up cleanly checked down to 16px, so it's a real favicon candidate too —
  not done here, since swapping the actual favicon/apple-touch-icon set is
  a brand-identity call, not a footer decoration.
  Follow-up: measuring the source PNG's alpha mask row by row found that it
  isn't actually one continuous shape — it's two lobes (a small flame-tail
  and the main body) that stay separate until they merge into one rounded
  base about 90% of the way down, at a gap that sits at a nearly constant x
  the whole way. That's a real, already-there dividing line, not an
  invented one, so `EffuseMark` now takes a `variant="twoTone"` prop that
  traces each lobe separately (teal shell, gold flame) — the merged base
  encloses a real hole, landing close to the "shell around a core" idea the
  glossy logo renders explicitly. Not wired in anywhere by default; sent
  Jeremy a comparison at every size down to 16px for him to decide if/where
  it's used, per his "nice to have as an option" framing.
- ~~Privacy policy silent on Resend~~ — the "Third parties" section said,
  flatly, "we don't share your information with anyone else," which became
  false the moment real contact-form delivery went live through Resend.
  Named it alongside Vercel as a processor acting on Effuse Labs' behalf,
  scoped to only what it needs to deliver the message. Caught by Jeremy
  right after confirming the first real email landed — exactly the kind of
  gap that's obvious in hindsight and easy to miss when the code and the
  policy describing it are reviewed at different times.
- ~~No link to the Lumina repo on its own product page~~ — added a "View on
  GitHub" secondary CTA to `ProductHero` (a new optional
  `secondaryCtaLabel`/`secondaryCtaHref` pair, only rendered when both are
  supplied), pointing at `repos.lumina` — a small new export in
  `content/site.ts` alongside `socialLinks`, so any future page that wants
  to link the repo reads from one place rather than a hardcoded URL.
- ~~The founder's disability mentioned twice~~ — once in the founder
  statement on the homepage, again in `/about`'s "Why it exists" section.
  Jeremy asked for it once, not repeated across the site. The About page
  now speaks to the lived experience ("spent years working around software
  that wasn't built with him in mind") and points back at the founder
  statement for the fuller account, rather than restating the specific
  language a second time.
- ~~No concrete examples on `/services`, just category descriptions~~ —
  added a `for example:` link under each of the four
  `FeatureBreakdownSection` items (Nextcloud, Mattermost, ERPNext, Plausible
  Analytics), via a new optional `example` field on `FeatureItem`. Picked
  for being the most recognized, actively maintained project in each
  category — not an exhaustive list, and swappable if Jeremy prefers
  different flagships (Odoo Community instead of ERPNext, Umami instead of
  Plausible, etc. were the runners-up).
- ~~Footer repeated the same facts three times~~ — "Location: Winnipeg,
  Manitoba, Canada" and "Email: jeremy@effuse.io" sat in the Company Info
  column, duplicating the location in the bottom bar and the email already
  reachable via the homepage contact form and the Connect With Us icons.
  Removed both. The homepage contact section had its own redundant
  `contact.location` line below the "prefer email directly?" mailto — also
  removed. The bottom bar's location line is now sourced from
  `contact.location` directly (`Built with care in {contact.location}`)
  rather than a separately hardcoded string, so the fact lives in one place
  now that it isn't restated elsewhere.
- ~~The contact form only ever opened a mail client~~ — real delivery,
  gracefully degrading. `app/api/contact/route.ts` (new) sends via Resend's
  HTTP API when `RESEND_API_KEY` is set; `ContactForm.tsx` shows an inline
  "message sent" confirmation on success, and falls back to the same
  `mailto:` handoff it always used if the key isn't configured yet or the
  request fails for any reason — so nothing regresses in the meantime. The
  now-unnecessary "This opens your email app... nothing is sent until you
  do" helper text is gone, since the button does send something once
  configured. Provisioning the Resend account, verifying `effuse.io` as a
  sending domain, and setting `RESEND_API_KEY` in Vercel is Jeremy's action
  — adding a paid dependency or service isn't mine to decide silently, per
  CLAUDE.md — everything else is built and inert until then.
- ~~Stale `hello@effuse.io` in four places~~ — `app/products/lumina/page.tsx`'s
  secondary CTA, and three mentions in `README.md`/`NOTICE` — every one of
  them predating the real `jeremy@effuse.io` address Jeremy confirmed
  earlier this session. Same class of bug as the Sanity `demo` project ID
  non-negotiable #3 exists to warn about: a value that was never updated
  after the real one arrived.

- ~~Redundant back-to-back CTA blocks~~ — `/products/lumina` had a "Coming
  Soon" pricing placeholder immediately followed by a "Ready to transform
  your salon?" final CTA, both asking for the same `/#contact` click;
  `/services` had the identical pattern with "How engagements work." Jeremy
  flagged both after a mobile read-through. Folded each pair into the one
  `FinalCTASection` that already closes the page, moving the placeholder's
  factual content (Lumina is AGPL/self-hostable; services engagements have
  no fixed package) into that section's own description. `PricingSection`
  itself wasn't deleted — it still has a real `tiers` mode for whenever
  Lumina has actual pricing to show — it's just not wired into either route
  as a placeholder today.
- ~~Stale `mailto:hello@effuse.io` on the Lumina page~~ — every other mailto
  on the site already used `contact.email` (`jeremy@effuse.io`) from
  `content/site.ts`; this one call site didn't. Fixed while touching that
  section for the CTA merge above.
- ~~Developer jargon in `/about`'s "How we build" copy~~ — "a contrast check
  runs in CI," "fails the build," "declared colour pairs" spoke the
  vocabulary of this repository's tooling, not the small-business owner
  reading the page. No marketing-copy skill is currently enabled on this
  account to hand this to (checked; none was available to add either) — this
  was a manual pass. Each of the three "How we build" practices, plus the
  founder-section aside, now leads with the plain-language outcome first and
  keeps the specific, checkable claim as a supporting clause rather than the
  headline. `/accessibility` keeps its explicit "WCAG 2.1 Level AA" language
  unchanged — that page is closer to a compliance statement, where the
  precise standard name is the point.
- ~~Footer's "Built with care in Winnipeg, Manitoba" as its own centered line
  below the copyright~~ — Jeremy asked whether that was the best spot for
  it. Two full-width stacked lines gave it equal visual weight to the
  copyright notice, which is more attention than a location aside needs.
  Moved onto the same row as the copyright (opposite-justified on desktop,
  stacked centered on the narrow mobile width where there's no room for two
  columns) so it reads as one quiet line of small print instead of two.
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
- ~~The site represented only one of two business lines~~ — the homepage's
  "Solutions" section was Lumina pitched a second time; rewritten in place to
  describe self-hosting/open-source support, the site's actual second
  offering.
- ~~Lumina had no real logo, just a generic Lightbulb icon~~ — the real mark
  is wired into the homepage Products card and the Lumina hero.
- ~~The founder statement's squiggle was still live~~, despite an earlier
  version of this document claiming it had been removed. It hadn't — the
  claim was written before the fix, not after, and nobody caught the gap
  until this pass. Now actually gone, and the section is full-bleed per
  `docs/DESIGN_PLAN.md` rather than the two-column grid it sat in.
- ~~The mobile menu had no open/close transition at all~~ — fixed; see stage
  5's motion note above.
- ~~There was no contact form; the homepage CTA was a bare `mailto:`~~ —
  replaced with a structured form that builds a proper `mailto:` from the
  fields.
- ~~`/privacy`, `/terms` and `/accessibility` didn't exist~~ — real routes
  now, draft copy, restored to the footer.
- ~~`/about` and `/services` didn't exist~~ — real routes now; nav
  "Solutions" is "Services" and points at the real one.

**Still open, not blocking an MVP:**

- ~~`/privacy`, `/terms` and `/accessibility` marked draft, pending legal
  sign-off~~ — **resolved.** Jeremy reviewed the language on all three and
  approved it as live copy rather than a placeholder; the "Draft, not
  final" notice in `LegalPageLayout.tsx` is gone, and the one stray "once
  this draft becomes final" line in `/terms`'s Changes section is gone with
  it.
- `/about` and `/services` still carry draft copy that needs a real pass in
  Jeremy's own words — these are marketing/positioning copy, not legal
  text, so they weren't part of the sign-off above and aren't visibly
  flagged as draft on the page (per the placeholder-content policy, they
  read like real copy but shouldn't be treated as final).
- ~~LinkedIn, Twitter/X and Bluesky in the footer were confirmed-real
  accounts with placeholder URLs, not verified addresses~~ — **resolved.**
  All four social links (GitHub included) are now real, Jeremy-confirmed
  URLs: `linkedin.com/company/effuse-labs`, `x.com/effuselabs`,
  `bsky.app/profile/effuse.io`. `organizationJsonLd` in `app/layout.tsx`
  now lists LinkedIn and Twitter alongside GitHub in `sameAs`; Bluesky is
  deliberately left out of that structured-data claim until effuse.io's DNS
  is set up for domain verification (the handle is real, but not yet
  reliably resolvable by search engines as this account).
- The `jeremyshields.ca` redirect is separate work in a repository outside
  this session's reach — `/services` now exists and is worth linking to,
  which was the actual blocker.

**Stage 7:**

- Visual baselines are compared on desktop only. Mobile is covered by layout
  assertions instead, because cross-machine glyph rendering made pixel
  comparison unreliable at that width. Pinning CI to the official Playwright
  container would fix it properly.

**Post-MVP feedback round:**

- ~~The Pour dividers around the founder statement showed a hard, empty gap
  instead of continuous light~~ — **resolved, fifth attempt.**
  The first two fixes (a `mask-image` wrapper, then dropping clipping and
  masking entirely) both looked correct in this environment's Chromium and
  both still failed on Jeremy's own machine. This time he confirmed it on
  Windows 11 Firefox, on a hard-refreshed current preview deploy — ruling out
  caching or a stale build. Comparing his screenshot against renders taken
  here made the actual fault visible: the shell/core ribbons (SVG,
  `feGaussianBlur`) were rendering fine in his screenshot; the ambient wash
  that was supposed to bridge the gap between them (two oversized HTML
  `<div>`s, CSS `filter: blur()`) simply wasn't there. That div-based wash
  was the one piece of this component never confirmed to render the same way
  outside this sandbox — everything else in it was already proven, in his own
  screenshot, to work. Rather than patch the div technique a third time
  blind, it's gone: the wash is now two SVG `<ellipse>`s using the same
  `feGaussianBlur` technique the core glow already relies on, sized off
  `gapHalf` so they overlap the ribbons' own mouths instead of meeting them
  edge to edge. One rendering technology for the whole component now, not
  two — and the one kept is the one with actual cross-browser evidence
  behind it.

  Fourth attempt: the SVG rewrite above was progress, not a fix — Jeremy's
  next screenshots (same Windows 11 Firefox, at full width and resized
  narrower; uBlock disabled first, confirmed no difference) showed the wash
  actually rendering for the first time, but as a small, dim blob sitting
  alone in the centre, well short of the ribbons on either side. The same `gapHalf`-derived sizing that produces full,
  seamless coverage in every render taken in this environment produces a
  visibly smaller and fainter result on his machine — a real, reproducible
  gap between this sandbox's Chromium and his Firefox in how much of a
  blurred, low-opacity SVG gradient actually stays visible, not just whether
  it renders at all. Rather than chase the exact cause blind (still no
  Firefox available here to compare against directly), the shapes are now
  sized and coloured to be robust to that gap instead of tuned to look
  exactly right in Chromium: `washRx`/`bloomRx` roughly doubled (`gapHalf +
480` / `+ 260`, up from `+ 220` / `+ 90`), peak opacity raised on both
  gradients, the falloff point pushed from 70-72% out to 85% so more of each
  ellipse stays visible before fading, and both blur radii trimmed (18→12,
  10→7) so the blur softens the edge without diffusing the whole shape
  toward invisibility.

  Fifth attempt, and the first with an actual documented cause rather than
  another guess: Jeremy's next screenshot showed the wash bigger and
  brighter than before — real progress — but still visibly short of the
  ribbons on both sides, which ruled out "just needs to be bigger" as the
  whole story. Looked up
  rather than guessed this time: `feGaussianBlur`, and every SVG filter
  primitive, composites in **linearRGB** by default
  (`color-interpolation-filters`'s spec-defined initial value), while
  gradients and fills default to **sRGB**. MDN and the W3C's own SVG working
  group mail archive both document real historical disagreement between
  engines on exactly this class of colour-space default for filter
  primitives. That's a plausible, evidence-backed explanation for why the
  same numbers — same gradient stops, same blur radius — produced a
  dramatically different visible result in his Firefox than in this
  sandbox's Chromium, no matter how much the earlier attempts inflated size
  and opacity to compensate.

  Rather than pin the colour space and hope, the wash's blur filters are
  gone entirely: a multi-stop radial gradient is already smooth without one,
  so removing the filter removes the whole class of bug rather than trying
  to configure around it. `pour-glow`, the one blur this component still
  has a real use for (the core ribbon edges — a thin line needs a genuine
  blur to read as glowing, unlike the wash), now sets
  `color-interpolation-filters="sRGB"` explicitly instead of relying on a
  default two engines have disagreed about. Confirmed the wash still reads
  as soft rather than a hard-edged shape at every width checked here.

  **Confirmed fixed.** Jeremy sent two more screenshots after this shipped —
  one from Windows 11 Firefox (the original problem browser) showing a
  continuous, seamless band with no gap; then, unprompted, two from an
  iPhone confirming the same fix holds on iOS/WebKit and at mobile width,
  something never explicitly tested through any of the earlier four
  attempts. Three independent rendering engines (Chromium, Firefox/
  WebRender, WebKit) now agree, which is a meaningfully stronger claim than
  "looks right in this sandbox" ever was. The root cause was real:
  `feGaussianBlur`'s undocumented (to most authors) linearRGB default was
  producing a visibly different result across engines for the exact same
  markup, and removing the dependency on blur for the wash — rather than
  continuing to tune size and opacity against a browser this sandbox
  couldn't run — is what actually closed it.

  **Redesigned anyway, once confirmed working.** With the ribbon-and-wash
  version finally verified correct everywhere, Jeremy asked for a design
  committee to see whether a different treatment could carry the same brief
  without that inherited five-round history. Two exploratory concepts were
  built in isolated agent worktrees and rendered for direct comparison: a
  single continuous stream (one unbroken path, no gap to fail to meet by
  construction) and "the bead" — pouring staged as one drop of light landing
  on a hairline seam and rippling outward, rather than a curtain parting.
  Jeremy picked the bead. `components/ui/Pour.tsx` now ships that design;
  the ribbon-and-wash version and its full bug history live only in that
  file's own doc comment and in this document's history above. The
  replacement carries the lesson forward structurally, not just as caution:
  zero SVG filter primitives anywhere in the new component, so the specific
  `color-interpolation-filters` bug class that took five rounds to fix does
  not apply to it at all. `docs/DESIGN_PLAN.md`'s "signature element" section
  is updated to match.

- ~~The services page's "What we set up" checklist linked one named example
  per category (Nextcloud, Mattermost, ERPNext, Plausible)~~ — **resolved.**
  Those links became redundant once `ToolShowcaseSection` shipped below the
  checklist with twenty real, linked projects across categories; the
  `example` field was dead weight duplicating a section directly beneath it,
  so it was removed from `FeatureItem` entirely rather than left unused. The
  checklist's own subheading was retitled from a promise ("if it's
  self-hostable, we can probably run it") to a scope statement ("the core
  categories most businesses start with") so it doesn't restate what the
  showcase section says one heading later.
- ~~Analytics was `@vercel/analytics` + `@vercel/speed-insights`~~ —
  **resolved.** Both packages, their `<Analytics />`/`<SpeedInsights />`
  components, and the `vitals.vercel-insights.com` CSP entry are gone.
  `app/layout.tsx` now loads Jeremy's self-hosted Umami instance
  (`analytics.sctr.tech`) via two `next/script` tags: the pageview script
  and the session-replay/heatmap recorder. `next.config.js`'s CSP adds that
  origin to `script-src` and `connect-src` (`wss://` included on
  `connect-src` since the recorder's replay stream may use a WebSocket —
  this sandbox has no network route to `analytics.sctr.tech` to confirm
  that directly, so it's worth watching after deploy; drop it if Jeremy
  never sees a CSP violation for it). `app/privacy/page.tsx`'s "What this
  site collects," "How we use it" and "Third parties" sections were rewritten
  to name Umami specifically and disclose session replay and heatmap capture
  as what they are, not just "analytics." `e2e/smoke.spec.ts`'s console-error
  ignore-list (previously scoped to Vercel's `/_vercel/*` paths) now covers
  `analytics.sctr.tech` instead, on the same reasoning: a CI sandbox with no
  route to a self-hosted domain failing to load it is an environment gap, not
  a site defect. No new Vercel environment variable is needed — the
  `data-website-id` in the script tags is a public identifier, not a secret —
  but the project's own "Analytics" and "Speed Insights" toggles in the
  Vercel dashboard are separate from the removed npm packages and are worth
  turning off there too, since they're billing/feature flags Vercel controls
  independently of what the code ships.
