'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HatchingCoreBackgroundProps {
  className?: string
}

const HatchingCoreBackground: React.FC<HatchingCoreBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Enhanced background gradient with subtle pulsing */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-grey via-off-black to-brand-teal-dark"
        animate={{
          background: [
            "linear-gradient(to bottom right, #64748b, #1a1a1a, #0f4c4a)",
            "linear-gradient(to bottom right, #64748b, #1a1a1a, #0d3d3b)",
            "linear-gradient(to bottom right, #64748b, #1a1a1a, #0f4c4a)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Multi-layered flowing background shapes */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ opacity: 0.6 }}
        >
          <defs>
            {/* Enhanced teal flowing gradient with pulsing */}
            <linearGradient id="teal-flow-organic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#22C5C3" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#22C5C3" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#22C5C3" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22C5C3" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Enhanced grey flowing gradient */}
            <linearGradient id="grey-flow-organic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B7280" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#6B7280" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#6B7280" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#6B7280" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6B7280" stopOpacity="0.3" />
            </linearGradient>
            
            {/* Enhanced glow filter with rippling effect */}
            <filter id="organic-glow">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Ripple distortion filter */}
            <filter id="ripple-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="turbulence"/>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          
          {/* Primary flowing teal shapes with organic motion */}
          <motion.path
            d="M -300,300 C -100,250 100,200 300,250 S 500,300 700,350 S 900,400 1100,450 S 1300,500 1500,550"
            fill="none"
            stroke="url(#teal-flow-organic)"
            strokeWidth="45"
            strokeLinecap="round"
            filter="url(#organic-glow)"
            initial={{ pathLength: 0, opacity: 0.7 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.7, 0.9, 0.7],
              strokeWidth: [45, 55, 45]
            }}
            transition={{
              pathLength: { duration: 12, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              strokeWidth: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Secondary teal shapes with different timing */}
          <motion.path
            d="M -200,500 C 0,450 200,400 400,450 S 600,500 800,550 S 1000,600 1200,650 S 1400,700 1600,750"
            fill="none"
            stroke="url(#teal-flow-organic)"
            strokeWidth="35"
            strokeLinecap="round"
            filter="url(#organic-glow)"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.6, 0.8, 0.6],
              strokeWidth: [35, 45, 35]
            }}
            transition={{
              pathLength: { duration: 15, ease: "easeInOut", delay: 3 },
              opacity: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
              strokeWidth: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
          
          {/* Tertiary teal shapes for depth */}
          <motion.path
            d="M -150,200 C 50,150 250,100 450,150 S 650,200 850,250 S 1050,300 1250,350 S 1450,400 1650,450"
            fill="none"
            stroke="url(#teal-flow-organic)"
            strokeWidth="25"
            strokeLinecap="round"
            filter="url(#organic-glow)"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.5, 0.7, 0.5],
              strokeWidth: [25, 35, 25]
            }}
            transition={{
              pathLength: { duration: 18, ease: "easeInOut", delay: 6 },
              opacity: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 },
              strokeWidth: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }
            }}
          />
          
          {/* Organic grey shapes with rippling effect */}
          <motion.path
            d="M -100,400 C 100,350 300,300 500,350 S 700,400 900,450 S 1100,500 1300,550 S 1500,600 1700,650"
            fill="none"
            stroke="url(#grey-flow-organic)"
            strokeWidth="40"
            strokeLinecap="round"
            filter="url(#organic-glow) url(#ripple-distortion)"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.5, 0.7, 0.5],
              strokeWidth: [40, 50, 40]
            }}
            transition={{
              pathLength: { duration: 14, ease: "easeInOut", delay: 2 },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 },
              strokeWidth: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />
          
          {/* Additional grey layer for complexity */}
          <motion.path
            d="M -50,600 C 150,550 350,500 550,550 S 750,600 950,650 S 1150,700 1350,750 S 1550,800 1750,850"
            fill="none"
            stroke="url(#grey-flow-organic)"
            strokeWidth="30"
            strokeLinecap="round"
            filter="url(#organic-glow)"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.4, 0.6, 0.4],
              strokeWidth: [30, 40, 30]
            }}
            transition={{
              pathLength: { duration: 16, ease: "easeInOut", delay: 5 },
              opacity: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 },
              strokeWidth: { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }
            }}
          />
        </svg>
      </div>
      
      {/* Enhanced Hatching Core Icon with dramatic reveal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer shell with dramatic peeling and distortion */}
          <motion.div
            className="absolute inset-0"
            initial={{ rotateZ: 0, scale: 1, filter: "blur(0px)" }}
            animate={{ 
              rotateZ: [0, -25, -15, 0],
              scale: [1, 1.3, 1.1, 1],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="shell-gradient-dramatic" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#6B7280" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#22C5C3" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#6B7280" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22C5C3" stopOpacity="0.9" />
                </linearGradient>
                <filter id="shell-glow-dramatic">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="ripple-shell">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence"/>
                  <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
              </defs>
              
              {/* Shell shape with dramatic peeling animation */}
              <motion.path
                d="M 70,25 Q 85,40 95,55 Q 105,70 95,85 Q 85,95 70,95 Q 55,95 45,85 Q 35,70 45,55 Q 55,40 70,25"
                fill="url(#shell-gradient-dramatic)"
                filter="url(#shell-glow-dramatic) url(#ripple-shell)"
                initial={{ pathLength: 0, opacity: 0.9, scale: 1 }}
                animate={{ 
                  pathLength: 1,
                  opacity: [0.9, 0.6, 0.8, 0.9],
                  scale: [1, 1.1, 0.95, 1]
                }}
                transition={{
                  pathLength: { duration: 2.5, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </svg>
          </motion.div>
          
          {/* Light ray effect emanating from the core */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-80 h-80 bg-gradient-to-r from-yellow-400/20 via-orange-400/30 to-yellow-400/20 rounded-full blur-sm" />
          </motion.div>
          
          {/* Golden orb with enhanced radiance */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ 
              scale: [0.6, 1.2, 1],
              opacity: [0.5, 1, 0.95]
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              {/* Enhanced core glow with pulsing */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                style={{
                  width: '70px',
                  height: '70px',
                  filter: 'blur(12px)',
                  opacity: 0.7
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Secondary glow layer */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300"
                style={{
                  width: '60px',
                  height: '60px',
                  filter: 'blur(8px)',
                  opacity: 0.8
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Core sphere with enhanced shadow */}
              <div 
                className="rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 shadow-2xl"
                style={{
                  width: '60px',
                  height: '60px',
                  boxShadow: '0 0 30px rgba(255, 193, 7, 0.8), 0 0 60px rgba(255, 193, 7, 0.4)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced floating particles with organic motion */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-brand-teal-light rounded-full opacity-40"
            style={{
              left: `${15 + i * 7}%`,
              top: `${25 + (i % 4) * 15}%`
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0],
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Subtle energy ripples */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute inset-0 border border-brand-teal-light/20 rounded-full"
            style={{
              margin: `${50 + i * 100}px`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default HatchingCoreBackground
