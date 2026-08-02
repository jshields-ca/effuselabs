import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

/**
 * Visual regression.
 *
 * This suite exists because of two defects that shipped to production and were
 * invisible to every other check in this repository. Both came from the
 * Tailwind v4 upgrade, and both lived in `app/globals.css` as rules sitting
 * outside any cascade layer — which in v4 beat Tailwind's own utilities
 * regardless of specificity:
 *
 *   * { padding: 0; margin: 0 }        killed every padding and margin
 *                                      utility. `px-4` computed to 0px.
 *   .font-inter { font-weight: 700 }   beat `font-normal` in the same class
 *                                      string. All body text rendered bold.
 *
 * Type-check passed. Lint passed. `check:tokens` passed. The smoke suite
 * passed — it asserts an `h1` renders, and one did, edge to edge and bold.
 * Nothing caught either until someone screenshotted the built page.
 *
 * So: screenshots, per route, at both viewports.
 *
 * WHY THE VIEWPORT AND NOT THE FULL PAGE
 *
 * These began as `fullPage` captures and were unusable across machines. Font
 * rasterisation differs subtly between this sandbox and GitHub's runner, and
 * over a 7,000px page those differences accumulated into a 24px height
 * difference — which fails as a size mismatch no matter how loose the pixel
 * tolerance is.
 *
 * Capturing the viewport instead fixes the output dimensions, so the
 * comparison comes down to pixels rather than layout arithmetic. It also
 * concentrates the check on what matters most: the first screen is where the
 * luminous field, the type scale, the nav and the primary call to action all
 * appear, and it is the thing a visitor judges the firm on.
 *
 * The rest of the page is not unguarded — the two named assertions at the
 * bottom of this file run against the whole document.
 *
 * DETERMINISM
 *
 * These run on their own Playwright projects (`visual-desktop`,
 * `visual-mobile`) rather than the functional ones, for a single reason:
 * `deviceScaleFactor: 1`. The `mobile` project emulates a Pixel 7 at DPR
 * 2.625, and at a fractional scale every glyph lands on sub-pixel boundaries,
 * so each machine's rasteriser rounds differently. That alone made the mobile
 * comparison about twice as noisy as desktop. See playwright.config.ts.
 *
 * `prefers-reduced-motion: reduce` is forced for every test here. That freezes
 * the luminous field's drift and skips all entrance and scroll-reveal
 * animation, so a screenshot captures one fixed state rather than whatever
 * frame the animation happened to be on. It also means these baselines assert
 * the reduced-motion rendering is correct — which is the rendering that has to
 * work, not a nice-to-have.
 *
 * UPDATING BASELINES
 *
 * A intentional visual change fails this suite by design. Review the diff
 * image the reporter emits, confirm the change is what you meant, then:
 *
 *   npm run test:e2e -- --update-snapshots
 *
 * Never update baselines without looking at the diff. That converts this from
 * a check into a formality.
 */
for (const route of ROUTES) {
  test.describe(route.name, () => {
    test('matches its visual baseline', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route.path)

      // Fonts settle after first paint; a screenshot taken before they load
      // captures fallback metrics and diffs against everything.
      await page.evaluate(() => document.fonts.ready)

      // Lazy images below the fold never decode without this, so the baseline
      // would bake in whichever ones happened to win the race.
      await page.evaluate(async () => {
        await new Promise<void>(resolve => {
          let y = 0
          const step = () => {
            window.scrollTo(0, y)
            y += window.innerHeight
            if (y < document.body.scrollHeight) requestAnimationFrame(step)
            else {
              window.scrollTo(0, 0)
              requestAnimationFrame(() => resolve())
            }
          }
          step()
        })
      })

      // Back to the top: the scroll above left the page at the bottom.
      await page.evaluate(() => window.scrollTo(0, 0))

      await expect(page).toHaveScreenshot(`${route.name}.png`, {
        // Residual glyph antialiasing differs a little between machines even
        // at DPR 1. Loose enough to absorb that; tight enough that a colour
        // change, a font-weight change or a missing background still fails,
        // because those move far more than 2% of a viewport.
        maxDiffPixelRatio: 0.02,
        animations: 'disabled',
      })
    })
  })
}

/**
 * A direct assertion on the two regressions above, independent of any
 * baseline image.
 *
 * The screenshots would catch a recurrence, but only as "something moved" — a
 * reviewer would still have to work out what. These name the failure, so a
 * future breakage reports itself as "horizontal padding is 0px" rather than as
 * a diff to squint at. They also keep working before any baseline exists.
 */
test.describe('cascade-layer regressions', () => {
  test('Tailwind spacing utilities are not overridden', async ({ page }) => {
    await page.goto('/')

    const paddingLeft = await page.evaluate(() => {
      const probe = document.createElement('div')
      probe.className = 'px-4'
      document.body.appendChild(probe)
      const value = getComputedStyle(probe).paddingLeft
      probe.remove()
      return value
    })

    expect(
      paddingLeft,
      'px-4 must emit real padding. A zero here means an unlayered rule is ' +
        'beating Tailwind utilities again — check app/globals.css.'
    ).not.toBe('0px')
  })

  test('body text is not forced bold', async ({ page }) => {
    await page.goto('/')

    const weights = await page.evaluate(() =>
      Array.from(document.querySelectorAll('p'))
        .filter(p => (p.textContent ?? '').trim().length > 40)
        .map(p => Number(getComputedStyle(p).fontWeight))
    )

    expect(
      weights.length,
      'expected some body copy on the page'
    ).toBeGreaterThan(0)
    expect(
      Math.max(...weights),
      'body paragraphs must not render at 700. An unlayered font-weight rule ' +
        'overriding font-normal is how this broke before.'
    ).toBeLessThan(600)
  })
})
