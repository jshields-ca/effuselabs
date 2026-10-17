import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

/**
 * Automated accessibility scan — axe-core, on every route, against the
 * production build.
 *
 * Accessibility is what Effuse Labs sells, so the site is held to a scanner
 * rather than to good intentions. The bespoke checks beside this one
 * (rendered-contrast, mobile-layout, check:tokens) each catch a failure this
 * repo has actually had; axe covers the much wider set nobody has hit yet —
 * names on controls and links, labels on form fields, landmark and heading
 * structure, ARIA used correctly, image alternatives, language, and more.
 *
 * Scope is WCAG 2.0, 2.1 and 2.2 at levels A and AA — the standard the
 * accessibility statement at /accessibility commits to — plus axe's
 * best-practice rules, which are not WCAG failures on their own but are the
 * things an auditor would flag. Any violation fails, at any impact level:
 * "minor" for axe is still a barrier for someone.
 *
 * What a scanner can't judge — whether alt text is *meaningful*, whether
 * focus order makes sense, whether a screen reader announces things in a
 * useful order — still needs a person. Passing this is the floor, not the
 * claim.
 *
 * Reduced motion is forced so `Reveal`'s scroll-driven fade has settled;
 * otherwise axe measures contrast mid-animation on content below the fold.
 */
const TAGS = [
  'wcag2a',
  'wcag2aa',
  'wcag21a',
  'wcag21aa',
  'wcag22aa',
  'best-practice',
]

for (const route of ROUTES) {
  test.describe(`${route.name} — accessibility scan`, () => {
    test('has no axe violations', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route.path)
      await page.evaluate(() => document.fonts.ready)

      const { violations } = await new AxeBuilder({ page })
        .withTags(TAGS)
        .analyze()

      const report = violations.flatMap(v =>
        v.nodes.map(
          node =>
            `[${v.impact}] ${v.id}: ${v.help}\n      at ${node.target.join(' ')}\n      ${node.failureSummary?.replace(/\n/g, '\n      ') ?? ''}`
        )
      )

      expect(
        report,
        `axe violations on ${route.path}:\n  ${report.join('\n  ')}\n`
      ).toEqual([])
    })
  })
}
