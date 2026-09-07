import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

/**
 * Mobile layout invariants.
 *
 * These replace the mobile screenshot comparison, and they are arguably the
 * better check: each one names the property it protects, so a failure reads as
 * a sentence rather than as a diff image to interpret. None of them can drift
 * with the machine's font rasteriser.
 *
 * Every assertion here corresponds to something that has actually broken on
 * this site.
 *
 * Bound to the `visual-mobile` project in playwright.config.ts, which is why
 * there is no viewport check in the file itself.
 */
for (const route of ROUTES) {
  test.describe(`${route.name} — mobile layout invariants`, () => {
    test('does not scroll horizontally', async ({ page }) => {
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }))

      // The classic mobile failure, and one this site is newly exposed to: the
      // luminous field is sized in viewport units and deliberately positioned
      // off-canvas, so a missing `overflow-hidden` would push the page sideways.
      expect(
        overflow.scrollWidth,
        `the page is ${overflow.scrollWidth - overflow.clientWidth}px wider ` +
          'than the viewport — something is overflowing horizontally'
      ).toBeLessThanOrEqual(overflow.clientWidth)
    })

    test('keeps content clear of the viewport edges', async ({ page }) => {
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const headingLeft = await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        return h1 ? h1.getBoundingClientRect().left : -1
      })

      // This is the padding regression, stated as a layout fact rather than as
      // a computed style: with `* { padding: 0 }` overriding the utilities, the
      // h1 sat at x=0, hard against the edge of the screen.
      expect(headingLeft, 'expected an h1 on the page').toBeGreaterThan(-1)
      expect(
        headingLeft,
        'the main heading is touching the left edge of the viewport'
      ).toBeGreaterThanOrEqual(12)
    })

    test('renders the heading at a display size, not a fallback', async ({
      page,
    }) => {
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const { fontSize, fontFamily } = await page.evaluate(() => {
        const h1 = document.querySelector('h1') as HTMLElement
        const style = getComputedStyle(h1)
        return {
          fontSize: parseFloat(style.fontSize),
          fontFamily: style.fontFamily,
        }
      })

      // The fluid type scale is a clamp(); if it failed to apply, the h1 would
      // fall back to the browser default of 32px at this width.
      expect(
        fontSize,
        `h1 is ${fontSize}px — the fluid type scale does not appear to be applied`
      ).toBeGreaterThan(36)

      expect(
        fontFamily,
        'h1 is not rendering in Bricolage Grotesque — the next/font display variable is not reaching it'
      ).toContain('Bricolage')
    })

    test('renders the dark canvas', async ({ page }) => {
      await page.goto(route.path)

      const bodyBackground = await page.evaluate(
        () => getComputedStyle(document.body).backgroundColor
      )

      // #12151B. A white body here means the surface tokens stopped resolving —
      // the same silent-failure mode as the phantom classes that started all
      // this.
      expect(
        bodyBackground,
        'the body background is not the deep canvas — surface tokens may not be resolving'
      ).toBe('rgb(18, 21, 27)')
    })
  })
}
