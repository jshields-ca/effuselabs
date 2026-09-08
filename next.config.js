/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async headers() {
    return [
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            /*
             * Scoped to what this site actually loads: `next/font` self-hosts
             * Google Fonts (so no external font-src is needed). Analytics is
             * self-hosted Umami at analytics.sctr.tech (see app/layout.tsx) —
             * both the pageview script and the session-replay recorder load
             * from and report to that origin, so it's on script-src and
             * connect-src. `unsafe-inline` on style-src stays because Next
             * inlines critical CSS and this repo has no nonce plumbing yet —
             * the safer version of that is stage-7 follow-up work, not this
             * pass.
             */
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://analytics.sctr.tech",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              "connect-src 'self' https://analytics.sctr.tech wss://analytics.sctr.tech",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

/*
 * Removed in the Next 16 upgrade:
 *
 * - A hand-rolled `webpack.optimization.splitChunks` override that forced every
 *   node_modules module into a single `vendors` chunk. It defeated Next's own
 *   framework chunking and meant any dependency change invalidated the whole
 *   chunk's cache. Next 16 uses Turbopack by default, where the hook does not
 *   run at all.
 * - An empty `experimental` block and an empty `rewrites()`.
 * - Three "Three.js removed" comments about code deleted long ago.
 * - `env: { NEXT_TELEMETRY_DISABLED: '1' }`. That is a build-time flag, not
 *   application config; it belongs in the environment, and CI sets it there.
 */
