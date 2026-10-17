import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

/**
 * Contrast, measured on the rendered page — every piece of visible text.
 *
 * `npm run check:tokens` already asserts WCAG AA across every pair in
 * `contrastPairs`. It passed the entire time the primary call to action was
 * rendering near-white text on gold at roughly 1.6:1, and it was not wrong to:
 * it checks the pairs we *declare*, and the declared pair — off-black on gold,
 * 8.69:1 — was correct.
 *
 * What broke was which classes survived to the browser. `cn()` runs
 * tailwind-merge, which did not recognise the custom type scale and silently
 * dropped `text-effuse-off-black` as a duplicate colour alongside
 * `text-body-lg`. The button then inherited its section's light grey.
 *
 * A declared-pair check cannot see that. This one reads the computed colours
 * off real elements, so it fails on any path that produces unreadable text —
 * a class-merge bug, a bad override at a call site, or a colour someone simply
 * got wrong.
 *
 * WHY IT CHECKS ALL TEXT, AND HOW IT READS COLOUR
 * This used to check only links, buttons and h1–h3, and to parse colours with
 * an `rgb()` regex that skipped anything it couldn't read. Tailwind v4 compiles
 * opacity modifiers (`text-effuse-parchment/70`) to `color-mix()`, which the
 * browser reports as `lab(… / 0.7)` — so every semi-transparent colour on the
 * site, exactly the colours most likely to fail, was skipped without a word,
 * and the alpha that does reach `rgba()` was dropped. Body copy wasn't checked
 * at all.
 *
 * Now every element with its own visible text is sampled, plus form
 * placeholders. Colours are normalised through a canvas, so any CSS colour
 * syntax resolves to sRGB with its alpha; semi-transparent text and
 * backgrounds are composited over what actually paints beneath them; and a
 * colour that still can't be resolved fails the test rather than vanishing.
 *
 * Reduced motion is forced so `Reveal`'s scroll-driven fade has settled —
 * mid-fade opacity measures an animation frame, not the design.
 */

type Rgba = [number, number, number, number]

interface Sample {
  label: string
  /** Text colour, already composited over its effective opacity. */
  color: Rgba | null
  /** Every colour the text might sit on — several for a gradient. */
  backgrounds: (Rgba | null)[]
  fontSize: number
  fontWeight: number
}

/** WCAG relative luminance. */
function luminanceOf([r8, g8, b8]: Rgba): number {
  const [r, g, b] = [r8, g8, b8].map(channel => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(a: Rgba, b: Rgba): number {
  const [hi, lo] = [luminanceOf(a), luminanceOf(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/** Source-over: `top` painted onto an opaque `bottom`. */
function over(top: Rgba, bottom: Rgba): Rgba {
  const a = top[3]
  return [
    top[0] * a + bottom[0] * (1 - a),
    top[1] * a + bottom[1] * (1 - a),
    top[2] * a + bottom[2] * (1 - a),
    1,
  ]
}

const fmt = ([r, g, b, a]: Rgba) =>
  `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a.toFixed(2)})`

for (const route of ROUTES) {
  test.describe(`${route.name} — rendered contrast`, () => {
    test('all visible text is readable', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const samples: Sample[] = await page.evaluate(() => {
        type Rgba = [number, number, number, number]

        /*
         * The browser's own colour parser, via a 1×1 canvas: handles rgb(),
         * lab(), oklab(), color-mix() and anything else CSS accepts, and
         * returns sRGB plus alpha. Painting a sentinel first is how an
         * unparseable value is detected — an invalid fillStyle is ignored.
         */
        const ctx = document.createElement('canvas').getContext('2d', {
          willReadFrequently: true,
        })!
        const toRgba = (css: string): Rgba | null => {
          for (const sentinel of ['#010203', '#fefdfc']) {
            ctx.clearRect(0, 0, 1, 1)
            ctx.fillStyle = sentinel
            ctx.fillStyle = css
            if (ctx.fillStyle === sentinel && css !== sentinel) {
              // Unchanged against both sentinels means CSS rejected it.
              continue
            }
            ctx.fillRect(0, 0, 1, 1)
            const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
            return [r, g, b, a / 255]
          }
          return null
        }

        const over = (top: Rgba, bottom: Rgba): Rgba => {
          const a = top[3]
          return [
            top[0] * a + bottom[0] * (1 - a),
            top[1] * a + bottom[1] * (1 - a),
            top[2] * a + bottom[2] * (1 - a),
            1,
          ]
        }

        const pageBase =
          toRgba(getComputedStyle(document.body).backgroundColor) ??
          ([255, 255, 255, 1] as Rgba)
        const opaquePageBase: Rgba =
          pageBase[3] >= 1 ? pageBase : over(pageBase, [255, 255, 255, 1])

        /*
         * What paints behind `el`: walk up collecting background layers until
         * one is opaque, then composite them bottom-up. A gradient paints via
         * `background-image` with a transparent `background-color`, so its
         * colour stops are taken instead — each one a candidate, and the
         * caller keeps the worst.
         */
        const backgroundsBehind = (el: Element): (Rgba | null)[] => {
          const layers: Rgba[] = []
          let base: (Rgba | null)[] = [opaquePageBase]
          let node: Element | null = el
          while (node) {
            const style = getComputedStyle(node)
            if (style.backgroundImage.includes('gradient')) {
              const stops =
                style.backgroundImage.match(
                  /(?:rgba?|lab|oklab|lch|oklch|color|hsla?)\([^)]*\)|#[0-9a-fA-F]{3,8}/g
                ) ?? []
              if (stops.length) {
                base = stops.map(stop => {
                  const c = toRgba(stop)
                  return c ? over(c, opaquePageBase) : null
                })
                break
              }
            }
            const bg = toRgba(style.backgroundColor)
            if (bg && bg[3] > 0) {
              if (bg[3] >= 1) {
                base = [bg]
                break
              }
              layers.push(bg)
            }
            node = node.parentElement
          }
          return base.map(b =>
            b ? layers.reduceRight<Rgba>((acc, l) => over(l, acc), b) : null
          )
        }

        /** Product of `opacity` from `el` up to the root. */
        const cumulativeOpacity = (el: Element): number => {
          let o = 1
          for (let n: Element | null = el; n; n = n.parentElement) {
            o *= parseFloat(getComputedStyle(n).opacity) || 0
          }
          return o
        }

        const isVisible = (el: Element): boolean => {
          const rect = el.getBoundingClientRect()
          // ≤1px catches `sr-only` text, which is never painted.
          if (rect.width <= 1 || rect.height <= 1) return false
          const style = getComputedStyle(el)
          if (style.visibility === 'hidden' || style.display === 'none')
            return false
          return cumulativeOpacity(el) > 0
        }

        const hasOwnText = (el: Element): boolean =>
          Array.from(el.childNodes).some(
            n =>
              n.nodeType === Node.TEXT_NODE &&
              (n.textContent ?? '').trim().length > 0
          )

        const describe = (el: Element, text: string) =>
          `<${el.tagName.toLowerCase()}> "${text.trim().replace(/\s+/g, ' ').slice(0, 50)}"`

        const samples: {
          label: string
          color: Rgba | null
          backgrounds: (Rgba | null)[]
          fontSize: number
          fontWeight: number
        }[] = []

        for (const el of Array.from(document.body.querySelectorAll('*'))) {
          if (el.closest('svg, script, style, noscript')) continue
          // WCAG 1.4.3 exempts text in inactive (disabled) controls.
          if (el.closest(':disabled')) continue

          const style = getComputedStyle(el)
          const opacity = cumulativeOpacity(el)

          if (hasOwnText(el) && isVisible(el)) {
            const c = toRgba(style.color)
            samples.push({
              label: describe(el, el.textContent ?? ''),
              color: c ? [c[0], c[1], c[2], c[3] * opacity] : null,
              backgrounds: backgroundsBehind(el),
              fontSize: parseFloat(style.fontSize),
              fontWeight: Number(style.fontWeight) || 400,
            })
          }

          const placeholder = el.getAttribute('placeholder')
          if (
            placeholder &&
            (el instanceof HTMLInputElement ||
              el instanceof HTMLTextAreaElement) &&
            isVisible(el)
          ) {
            const ph = getComputedStyle(el, '::placeholder')
            const c = toRgba(ph.color)
            samples.push({
              label: `placeholder of <${el.tagName.toLowerCase()}> "${placeholder.slice(0, 40)}"`,
              color: c ? [c[0], c[1], c[2], c[3] * opacity] : null,
              backgrounds: backgroundsBehind(el),
              fontSize: parseFloat(ph.fontSize),
              fontWeight: Number(ph.fontWeight) || 400,
            })
          }
        }

        return samples
      })

      expect(
        samples.length,
        'expected visible text on the page'
      ).toBeGreaterThan(0)

      const failures: string[] = []

      for (const sample of samples) {
        if (!sample.color || sample.backgrounds.some(b => b === null)) {
          failures.push(`${sample.label} — colour could not be resolved`)
          continue
        }

        // WCAG: large text is >=24px, or >=18.66px when bold.
        const isLarge =
          sample.fontSize >= 24 ||
          (sample.fontSize >= 18.66 && sample.fontWeight >= 700)
        const required = isLarge ? 3 : 4.5

        let worst = Infinity
        let worstBg: Rgba | null = null
        let worstFg: Rgba | null = null
        for (const bg of sample.backgrounds as Rgba[]) {
          const fg = over(sample.color, bg)
          const ratio = contrastRatio(fg, bg)
          if (ratio < worst) {
            worst = ratio
            worstBg = bg
            worstFg = fg
          }
        }

        if (worst < required) {
          failures.push(
            `${sample.label} — ${worst.toFixed(2)}:1 ` +
              `(${fmt(worstFg!)} on ${fmt(worstBg!)}, needs ${required}:1)`
          )
        }
      }

      expect(
        failures,
        `unreadable text on ${route.path}:\n  ${failures.join('\n  ')}\n`
      ).toEqual([])
    })
  })
}
