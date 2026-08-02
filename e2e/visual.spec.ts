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
 * DETERMINISM
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

      await expect(page).toHaveScreenshot(`${route.name}.png`, {
        fullPage: true,
        // Sub-pixel text rendering differs slightly between machines even at
        // the same viewport. Small enough to catch a colour, weight or spacing
        // change; loose enough not to fail on antialiasing.
        maxDiffPixelRatio: 0.01,
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
