'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FluidParallaxBackgroundProps {
  className?: string
}

// Two-layer fluid background with parallax motion per brand spec
const FluidParallaxBackground: React.FC<FluidParallaxBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`} aria-hidden="true">
      {/* Base background */}
      <div className="absolute inset-0 bg-off-black" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          {/* Teal layer gradient */}
          <linearGradient id="hero-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#22C5C3" stopOpacity="0.55" />
          </linearGradient>

          {/* Slate grey layer gradient */}
          <linearGradient id="hero-slate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B7280" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6B7280" stopOpacity="0.25" />
          </linearGradient>

          {/* Organic distortion */}
          <filter id="hero-distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="2" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Slate Grey Layer (back, slower, bottom-left ➜ top-right) */}
        <motion.path
          d="M 0 720 C 180 660 320 620 540 590 C 820 550 980 590 1220 560 C 1340 540 1440 500 1440 500 L 1440 900 L 0 900 Z"
          fill="url(#hero-slate)"
          filter="url(#hero-distort)"
          initial={{ x: -60, y: 0 }}
          animate={{ x: 60, y: 0 }}
          transition={{ duration: 26, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        {/* Teal Layer (front, faster, bottom-right ➜ top-left) */}
        <motion.path
          d="M 0 760 L 1440 900 L 1440 640 C 1260 600 1100 640 880 680 C 640 720 420 720 220 740 C 140 750 60 760 0 760 Z"
          fill="url(#hero-teal)"
          filter="url(#hero-distort)"
          initial={{ x: 120, y: 0 }}
          animate={{ x: -120, y: 0 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

export default FluidParallaxBackground


