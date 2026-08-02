import { defineConfig, devices } from '@playwright/test'

const PORT = Number(process.env.PORT ?? 3000)
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? `http://127.0.0.1:${PORT}`

/**
 * Some sandboxes ship a preinstalled Chromium whose build number does not match
 * the one this @playwright/test version expects. Setting
 * PLAYWRIGHT_CHROMIUM_PATH points Playwright at that binary instead of the one
 * it would download. Leave it unset — as CI does — and Playwright resolves its
 * own managed browser normally.
 */
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined
const launchOptions = executablePath ? { executablePath } : {}

/**
 * The suite runs against a production build, not `next dev`. The bugs this
 * project needs caught — dead links, unstyled elements, missing routes — are
 * ones that only reproduce in the output that actually ships.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    /*
     * Functional checks run on realistic device profiles, including Pixel 7's
     * actual deviceScaleFactor of 2.625.
     */
    {
      name: 'chromium',
      testMatch: /(smoke|rendered-contrast)\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], launchOptions },
    },
    {
      name: 'mobile',
      testMatch: /(smoke|rendered-contrast)\.spec\.ts/,
      use: { ...devices['Pixel 7'], launchOptions },
    },

    /*
     * Visual baselines run on their own profiles, and the difference that
     * matters is `deviceScaleFactor: 1`.
     *
     * Pixel 7 emulates a DPR of 2.625. At a fractional scale every glyph lands
     * on sub-pixel boundaries, so each machine's rasteriser rounds differently
     * and the noise floor between two environments rises sharply — the mobile
     * comparison was consistently twice as noisy as desktop for this reason
     * alone. At DPR 1 the geometry is integral and the same page renders
     * near-identically across machines.
     *
     * Screenshot comparison ended up desktop-only. At 390px wide the same
     * absolute amount of glyph antialiasing is a far larger proportion of a
     * much smaller image, and three attempts at making it reproducible across
     * machines did not hold. `visual-mobile` therefore runs
     * `mobile-layout.spec.ts` — deterministic layout assertions that cannot
     * drift with the rasteriser — rather than pixel comparison.
     */
    {
      name: 'visual-desktop',
      testMatch: /visual\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
        deviceScaleFactor: 1,
        launchOptions,
      },
    },
    {
      name: 'visual-mobile',
      testMatch: /mobile-layout\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: true,
        launchOptions,
      },
    },
  ],

  // Reuse a server if one is already up locally; CI always starts its own.
  webServer: {
    command: 'npm run start',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
