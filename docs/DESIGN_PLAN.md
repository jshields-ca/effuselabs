# Design plan — stage 5

Written before any code, and critiqued before any code. The previous stage
built a design _system_ and stopped there; the result was a competent dark
theme that looked like every other competent dark theme. This document is the
attempt to make a specific thing instead.

---

## The subject

**Who this is for.** A small-business owner — a salon owner, a barber, a
service operator — who has been sold software before and been let down by it.
They are not technical, they are busy, and they are sceptical. Secondarily, a
technical evaluator who needs to believe the firm can actually build.

**What the page has to do.** One thing: convince that owner this firm
understands their problem well enough to be worth a single conversation.

**What is characteristic about this firm**, in its own words and materials:

- The name is _effundere_ — "to pour out". Not a metaphor bolted on afterwards;
  it is the company's own account of itself.
- The logo is a slate-to-teal shell peeling back to reveal a golden core.
  Protection opening to show what is inside.
- The founder is a federally-recognized person with a disability, and the firm
  exists because badly designed software builds barriers. Accessibility here is
  autobiography, not positioning.
- It is in Winnipeg, where winters are long and dark, and where light is not a
  neutral design abstraction but something you notice the absence of.

The design should come out of that list. Nothing below is chosen because it is
currently fashionable.

---

## Type

| Role    | Face                               | Why this one                                                                                                                                                                                                       |
| ------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Display | **Bricolage Grotesque**            | A variable grotesk with real character in its letterforms — not a neutral default — but built for interfaces, not editorial. Reads as a technically credible software company, which a warm serif alone did not.   |
| Body    | **Public Sans**                    | Drawn for the US design system with legibility as the brief. A firm that sells accessibility should set its body copy in something designed for reading, not in whatever the display face's sibling happens to be. |
| Utility | **Public Sans**, wide-tracked caps | Eyebrows, labels, metadata. One family, used differently, rather than a third download.                                                                                                                            |

Inter is gone. It is the default typeface of nearly every generated site, and
using it for both display and body is most of why the last pass read as
templated.

**Revision, after seeing it live:** the first version of this plan chose
Fraunces, a warm serif, arguing that warmth mattered given the founder's story
and the accessibility mission. Built and rendered across two real pages, it
read as editorial and boutique rather than as a software company — closer to
a design studio's site than a vertical-SaaS vendor's. The audience section
above still holds: the sceptical small-business owner and the technical
evaluator both need to believe competence, and Fraunces was spending its
whole effect on warmth at competence's expense.

The fix is not to drop warmth — it's to stop asking the display face to
carry it alone. `parchment` and `ember` already do that work in color.
Bricolage Grotesque is display-only, at large sizes. Public Sans carries
everything a person actually reads at length.

---

## Colour

Extending the existing brand rather than replacing it, per the decision taken
before this plan.

| Name        | Value     | Role                                                           |
| ----------- | --------- | -------------------------------------------------------------- |
| `ink`       | `#12151B` | The canvas. Everything sits on this.                           |
| `slate`     | `#2E3440` | Brand slate. Raised surfaces and controls.                     |
| `teal`      | `#22C5C3` | The shell's lit edge. Links, focus, the cool half of the pour. |
| `gold`      | `#FFD25A` | The core. The spark. Never a large fill.                       |
| `parchment` | `#EDE8DF` | **New.** A warm off-white for body copy on dark.               |
| `ember`     | `#B4531F` | **New.** A deep warm tone for shadow and depth beneath gold.   |

`parchment` is the quiet but important addition. Body text is currently
`#F1F3F5`, a cool grey, and cool grey on a cool dark canvas beside a warm serif
is what makes a dark theme feel clinical. Warming the text a few degrees costs
nothing and changes the whole temperature of the page.

`ember` gives the gold somewhere to fall off to, so light has depth instead of
sitting flat on the surface.

Both were measured before being written into this plan rather than after:

| Pair                    | Ratio   |                 |
| ----------------------- | ------- | --------------- |
| `parchment` on `ink`    | 14.98:1 | AAA             |
| `parchment` on `base`   | 13.84:1 | AAA             |
| `parchment` on `raised` | 12.10:1 | AAA             |
| `parchment` on `slate`  | 10.23:1 | AAA             |
| `ember` on `ink`        | 3.65:1  | large text only |
| `gold` on `ember`       | 3.48:1  | large text only |

**`ember` is therefore not a text colour.** It is for shadow, glow falloff and
edge light beneath gold, and it must never carry body copy. That constraint is
written here because the honest time to find it is now, not after it has been
used in six places.

**The white sections go.** Depth comes from elevation inside the dark — surface
lightness, hairline borders, light spill — not from cutting to a white plate.
Cutting to white is what makes the current site feel like two sites stapled
together.

---

## The signature element: the pour

One bold thing, and everything else quiet around it.

Between sections, light **pours** from one into the next. It is a structural
divider that carries the brand's own idea, and it is the thing a visitor
remembers. It is not decoration bolted on: it encodes something true — one
section giving way to the next — which is exactly what a divider is for.

**Revision, after the first version shipped.** The original design staged
this as a parting curtain: two ribbons peeled apart around a soft wash filling
the gap, echoing the logo's shell-peels-back-to-reveal-a-core shape directly.
It took five rounds of real cross-engine bugs to actually render correctly
everywhere (`feGaussianBlur`, and every SVG filter primitive, composites in a
different, engine-inconsistent colour space by spec default — see
`components/ui/Pour.tsx`'s doc comment and `docs/ROADMAP.md` for the full
history). Once confirmed working, a design-committee comparison pass explored
whether a different treatment could carry the same idea without that
inherited risk. It could: the current version — "the bead" — stages pouring
as a single event instead of a curtain.

```
   ─────────────────·─────────────────     ← the seam, always present
              )  )  ( (                    ← the ripple, teal, widening
                  ◆                        ← the bead: teal shell, gold core
```

One drop of light gathers at the seam between two sections and sends a ripple
out along the full width. The seam (a hairline) is constant; `openness` grows
the bead and brightens/widens the ripple, so the divider still reads as more
"arrived" further down the page — nearly a pinprick near the top, a wide,
bright ripple by the closing call to action. The bead's own fill is teal
above, gold below — shell, then core, the same order `EffuseMark`'s two-tone
split uses — so the brand hierarchy still holds even though the shape is a
drop rather than a traced silhouette.

It is also deliberately the leaner of the two treatments compared: line work
(a hairline, four ring outlines, one bead) rather than a filled atmospheric
wash, and zero SVG filter primitives — the specific class of bug the first
version spent five rounds fixing does not apply here at all, by construction
rather than by caution.

Everything else — cards, buttons, nav — stays disciplined and plain so this
device is the only thing shouting.

---

## Layout

The current page is seven centred stacks in a column. Section order and content
stay; the rhythm does not.

**Hero — the thesis.** Asymmetric, copy pinned left. The display line set in
Fraunces at a genuinely large optical size, with the core mark bleeding light
behind the first line rather than sitting in a corner. No eyebrow-plus-two-
buttons template: one primary action, one quiet secondary, and the firm's
location as a small honest detail.

```
┌──────────────────────────────────────────────┐
│  ·  ·   light pooling from upper left        │
│                                              │
│  Intelligent software                        │
│  for small business        ◜◝  core mark     │
│  growth.                   ◟◞  bleeding      │
│                                              │
│  body copy, measured, ~60ch                  │
│                                              │
│  [ Start a conversation ]   See our work     │
│  Effuse Labs · Winnipeg, Manitoba            │
└──────────────────────────────────────────────┘
```

**Philosophy — offset, unnumbered.** The 1 / 2 / 3 markers go. Nothing about
these three principles is sequential, and numbering them claims an order that
does not exist. Instead each principle is offset from the last, so the eye
steps down the page rather than scanning a list, with a hairline rule and a
short true label — "Accessibility", "Performance", "Longevity" — carrying the
information the numbers pretended to.

```
┌──────────────────────────────────────────────┐
│  ACCESSIBILITY ─────                         │
│  Human-centred and accessible by default     │
│  ────────── copy ──────────                  │
│                                              │
│          PERFORMANCE ─────                   │
│          Built for peace of mind             │
│          ────────── copy ──────────          │
│                                              │
│                  LONGEVITY ─────             │
│                  Pragmatic and future-ready   │
│                  ────────── copy ──────────  │
└──────────────────────────────────────────────┘
```

**Founder statement — full bleed.** The one full-width moment on the page. Dark
plate, the statement set large in Fraunces, the real signature beneath it. This
is the most human thing the firm has to say and it currently sits in a
two-column grid next to a fake squiggle.

**Products — a specimen, not a card.** Lumina presented as an object on the
dark canvas: raised surface, its own gold-to-coral edge light, held at an angle
to the grid so it reads as a thing rather than a box. Lumina keeps its own
palette here; the firm's teal frames it.

**Solutions and contact.** Quiet. Elevation shifts rather than colour shifts.
The pour device is fully open by the contact section.

---

## Motion

Restrained, and all of it already gated on `prefers-reduced-motion`.

- The pour's light drifts slowly. It is the only ambient motion on the page.
- Section reveals stay as they are — CSS scroll-driven, visible by default.
- The arc opening as you scroll is the one scroll-linked effect. It is
  decorative and disappears entirely under reduced motion, leaving the arcs
  static and fully formed.

No hover flourishes beyond a colour or transform change. Extra animation is
what makes a design feel generated.

---

## Quality floors

Not features, and not mentioned on the site. They are simply true:

- Every pair still passes WCAG AA, enforced by `check:tokens` and by the
  rendered-contrast suite. `parchment` and `ember` get pairs before they get
  used.
- Keyboard focus visible on every interactive element against the dark canvas.
- Reduced motion removes all of it and leaves a page that looks deliberate
  rather than broken.
- The pour device is CSS and SVG. No WebGL, no canvas, no animation loop.

---

## Critique of this plan

Per the two-pass process: before building, ask of each element whether it is a
specific choice or a default that would suit any brief.

| Element                             | Verdict                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bricolage Grotesque + Public Sans   | **Specific, revised.** Fraunces was the first answer and it was wrong in practice — editorial, not technical. Bricolage keeps a real display face rather than falling back to Inter, while reading as software.                      |
| `parchment` and `ember`             | **Specific.** Both fix a named problem — cool text beside a warm face, and gold with nowhere to fall off to.                                                                                                                         |
| The pour divider                    | **Specific.** Derived from the company's name and mark, and it encodes real information. This is the risk, and it is the one worth taking.                                                                                           |
| Asymmetric hero                     | **Borderline.** Asymmetry is itself a fashion. Justified here only because the light enters from one side, so the composition follows the device rather than the trend. Keep, but do not add a second asymmetric flourish elsewhere. |
| Offset philosophy blocks            | **Keep, with care.** The offset must not break down on mobile into an indented mess. Vertical at small widths, offset from `md` up.                                                                                                  |
| Product "specimen" held at an angle | **Cut the angle.** A tilted card is a default of the last three years of landing pages, and it fights the discipline the rest of the page needs. Keep the raised surface and the edge light; drop the rotation.                      |
| Numbered principle markers          | **Cut**, as above.                                                                                                                                                                                                                   |
| Ambient drift on the pour           | **Keep, at low amplitude.** One ambient motion is atmosphere; two is a screensaver.                                                                                                                                                  |

The tilt is cut on the strength of this pass. That is what the pass is for.

---

## What this plan does not cover

Copy. Every headline and paragraph above is the current text, used as a
placeholder for layout. Rewriting it — including the services copy that does
not exist yet — is stage 6, and it is the part where the marketing plugin and
Jeremy's own words matter more than any of this.
