/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: false },
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
