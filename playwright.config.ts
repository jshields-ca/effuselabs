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
    { name: 'chromium', use: { ...devices['Desktop Chrome'], launchOptions } },
    { name: 'mobile', use: { ...devices['Pixel 7'], launchOptions } },
  ],

  // Reuse a server if one is already up locally; CI always starts its own.
  webServer: {
    command: 'npm run start',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
