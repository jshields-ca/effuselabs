import { expect, test, type ConsoleMessage } from '@playwright/test'

/**
 * Every route the site serves. Add to this list when a route is added — the
 * checks below then apply to it automatically.
 */
export const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/products/lumina', name: 'Lumina product page' },
  { path: '/products/silentledger', name: 'SilentLedger product page' },
] as const

/**
 * Browser console noise that is not the site's fault. Keep this list short and
 * justified — every entry is a check we are choosing not to perform.
 */
const IGNORED_CONSOLE_PATTERNS = [
  // @vercel/analytics and @vercel/speed-insights load their scripts from
  // /_vercel/*, which is injected by Vercel's edge and does not exist anywhere
  // else. Both 404 when running locally or in CI, which is expected.
  /\/_vercel\/(insights|speed-insights)\//,
]

/**
 * A failed subresource logs a generic "Failed to load resource: ... 404"
 * message — the offending URL appears only in the message's location, not its
 * text. Both have to be checked or the filter silently matches nothing.
 */
function isRealError(message: ConsoleMessage): boolean {
  if (message.type() !== 'error') return false
  const haystack = `${message.text()} ${message.location().url}`
  return !IGNORED_CONSOLE_PATTERNS.some(pattern => pattern.test(haystack))
}

for (const route of ROUTES) {
  test.describe(`${route.name} (${route.path})`, () => {
    test('responds 200', async ({ page }) => {
      const response = await page.goto(route.path)
      expect(response, `no response for ${route.path}`).not.toBeNull()
      expect(response!.status()).toBe(200)
    })

    test('renders exactly one h1 with visible text', async ({ page }) => {
      await page.goto(route.path)
      const headings = page.locator('h1')

      // More than one h1 is a document-outline defect; zero means the page
      // rendered nothing meaningful.
      await expect(headings).toHaveCount(1)
      await expect(headings.first()).toBeVisible()
      expect(
        (await headings.first().innerText()).trim().length
      ).toBeGreaterThan(0)
    })

    test('logs no console errors and throws no uncaught exceptions', async ({
      page,
    }) => {
      const consoleErrors: string[] = []
      const pageErrors: string[] = []

      page.on('console', message => {
        if (isRealError(message)) consoleErrors.push(message.text())
      })
      page.on('pageerror', error => pageErrors.push(error.message))

      await page.goto(route.path)
      await page.waitForLoadState('networkidle')

      expect(pageErrors, 'uncaught exceptions').toEqual([])
      expect(consoleErrors, 'console errors').toEqual([])
    })

    test('has a non-empty title and meta description', async ({ page }) => {
      await page.goto(route.path)

      expect((await page.title()).trim().length).toBeGreaterThan(0)

      const description = page.locator('meta[name="description"]')
      await expect(description).toHaveCount(1)
      const content = await description.getAttribute('content')
      expect(content?.trim().length ?? 0).toBeGreaterThan(0)
    })
  })
}

test('unknown routes return 404', async ({ page }) => {
  const response = await page.goto('/this-route-does-not-exist')
  expect(response!.status()).toBe(404)
})
