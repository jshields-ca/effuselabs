/** @type {import('next').NextConfig} */
const nextConfig = {
  // Restore standard Next.js configuration for Vercel
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  images: { 
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
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
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: 'motion',
            priority: 20,
            chunks: 'all',
          },
          three: {
            test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
            name: 'three',
            priority: 20,
            chunks: 'all',
          },
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
