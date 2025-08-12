/** @type {import('next').NextConfig} */
const nextConfig = {
  // Restore standard Next.js configuration for Vercel
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  images: { 
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Optimize CSS loading for critical path
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
    ]
  },
  experimental: {
    // Three.js packages removed for performance optimization
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Three.js modular imports removed - no longer using Three.js
  webpack: (config, { dev, isServer }) => {
    // Optimize chunks for better TBT
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },

          // Three.js chunk removed - no longer using Three.js
        },
      }
    }
    return config
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
}

module.exports = nextConfig
