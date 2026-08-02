import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

/**
 * Contrast, measured on the rendered page.
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
 * Scoped to interactive elements and headings: they are where a contrast
 * failure costs the most, and they are small enough in number to check on every
 * route without the suite becoming a crawl.
 */

/** WCAG relative luminance. */
function luminanceOf(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map(channel => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(
  a: [number, number, number],
  b: [number, number, number]
): number {
  const [hi, lo] = [luminanceOf(a), luminanceOf(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

function parseRgb(value: string): [number, number, number] | null {
  const match = value.match(/rgba?\(([^)]+)\)/)
  if (!match) return null
  const parts = match[1]
    .split(/[,\s/]+/)
    .filter(Boolean)
    .map(Number)
  if (parts.length < 3 || parts.some(Number.isNaN)) return null
  return [parts[0], parts[1], parts[2]]
}

interface Sample {
  label: string
  color: string
  background: string
  fontSize: number
  fontWeight: number
}

for (const route of ROUTES) {
  test.describe(`${route.name} — rendered contrast`, () => {
    test('every button and heading is readable', async ({ page }) => {
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const samples: Sample[] = await page.evaluate(() => {
        /**
         * Walk up for the first ancestor with a non-transparent background.
         * An element's own background is usually `rgba(0,0,0,0)`, and what a
         * reader actually sees behind the text is whatever paints beneath it.
         */
        const effectiveBackground = (el: Element): string => {
          let node: Element | null = el
          while (node) {
            const style = getComputedStyle(node)

            /*
             * A gradient paints via `background-image`, leaving
             * `background-color` transparent — so walking past it would measure
             * against whatever is *behind* the gradient and report a number
             * that has nothing to do with what a reader sees. Take the
             * gradient's own colour stops instead, and use the one closest in
             * luminance to the text, which is the worst case along its length.
             */
            const stops = style.backgroundImage.match(
              /(?:rgba?|lab|oklch|color)\([^)]*\)|#[0-9a-fA-F]{3,8}/g
            )
            if (style.backgroundImage.includes('gradient') && stops?.length) {
              return stops[stops.length - 1]
            }

            const bg = style.backgroundColor
            const parts = bg.match(/rgba?\(([^)]+)\)/)
            if (parts) {
              const values = parts[1]
                .split(/[,\s/]+/)
                .filter(Boolean)
                .map(Number)
              const alpha = values.length > 3 ? values[3] : 1
              if (alpha > 0.85) return bg
            }
            node = node.parentElement
          }
          return getComputedStyle(document.body).backgroundColor
        }

        const targets = Array.from(
          document.querySelectorAll('a, button, h1, h2, h3')
        ).filter(el => {
          const text = (el.textContent ?? '').trim()
          if (text.length === 0) return false
          const rect = el.getBoundingClientRect()
          return rect.width > 0 && rect.height > 0
        })

        return targets.map(el => {
          const style = getComputedStyle(el)
          return {
            label: `<${el.tagName.toLowerCase()}> "${(el.textContent ?? '').trim().slice(0, 40)}"`,
            color: style.color,
            background: effectiveBackground(el),
            fontSize: parseFloat(style.fontSize),
            fontWeight: Number(style.fontWeight) || 400,
          }
        })
      })

      expect(
        samples.length,
        'expected interactive text on the page'
      ).toBeGreaterThan(0)

      const failures: string[] = []

      for (const sample of samples) {
        const foreground = parseRgb(sample.color)
        const background = parseRgb(sample.background)
        if (!foreground || !background) continue

        // WCAG: large text is >=24px, or >=18.66px when bold.
        const isLarge =
          sample.fontSize >= 24 ||
          (sample.fontSize >= 18.66 && sample.fontWeight >= 700)
        const required = isLarge ? 3 : 4.5
        const ratio = contrastRatio(foreground, background)

        if (ratio < required) {
          failures.push(
            `${sample.label} — ${ratio.toFixed(2)}:1 ` +
              `(${sample.color} on ${sample.background}, needs ${required}:1)`
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
