'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LiquidFlowBackgroundProps {
  className?: string
}

const LiquidFlowBackground: React.FC<LiquidFlowBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Enhanced Background with Subtle Effects */}
      <div className="absolute inset-0">
        {/* Fixed gradient overlay - removed curve */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-grey/50 via-off-black/30 to-brand-teal-dark/40" />
        
        {/* Enhanced light sources */}
        <div className="absolute inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            className="w-full h-full"
            style={{ opacity: 0.6 }}
          >
            <defs>
              {/* Enhanced light source gradients */}
              <radialGradient id="teal-light-source" cx="20%" cy="20%" r="60%">
                <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#22C5C3" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22C5C3" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="gold-light-source" cx="80%" cy="80%" r="60%">
                <stop offset="0%" stopColor="#FFD25A" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FFD25A" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FFD25A" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="subtle-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22C5C3" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Enhanced light sources */}
            <circle cx="200" cy="150" r="200" fill="url(#teal-light-source)" />
            <circle cx="1000" cy="650" r="200" fill="url(#gold-light-source)" />
            
            {/* Subtle background orbs */}
            {[...Array(4)].map((_, i) => (
              <motion.circle
                key={`bg-orb-${i}`}
                cx={300 + i * 300}
                cy={200 + (i % 2) * 400}
                r={100 + i * 30}
                fill="url(#subtle-glow)"
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1.3, 0.8]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  delay: i * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* 3D Liquid Flow Streams */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ opacity: 1 }}
        >
          <defs>
            {/* 3D Liquid gradients for streams */}
            <linearGradient id="teal-liquid-3d" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C5C3" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#22C5C3" stopOpacity="1" />
              <stop offset="75%" stopColor="#22C5C3" stopOpacity="1" />
              <stop offset="100%" stopColor="#22C5C3" stopOpacity="0.6" />
            </linearGradient>
            
            <linearGradient id="gold-liquid-3d" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD25A" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#FFD25A" stopOpacity="1" />
              <stop offset="75%" stopColor="#FFD25A" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFD25A" stopOpacity="0.6" />
            </linearGradient>
            
            {/* 3D glow filter */}
            <filter id="liquid-glow-3d">
              <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Drop shadow for 3D effect */}
            <filter id="drop-shadow-3d">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Bottom streams - starting at actual edge */}
          <motion.path
            d="M -100,750 C 50,700 150,650 300,600 S 450,500 600,450 S 750,350 900,300 S 1050,200 1200,150 S 1350,100 1500,50"
            fill="none"
            stroke="url(#teal-liquid-3d)"
            strokeWidth="35"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: [1, 1.4, 1],
              strokeWidth: [35, 50, 35],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M -100,800 C 100,750 200,700 350,650 S 500,550 650,500 S 800,400 950,350 S 1100,250 1250,200 S 1400,150 1550,100"
            fill="none"
            stroke="url(#gold-liquid-3d)"
            strokeWidth="30"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 0.9 }}
            animate={{ 
              opacity: [0.9, 1.3, 0.9],
              strokeWidth: [30, 45, 30],
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              delay: 2,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M -50,700 C 150,650 250,600 400,550 S 550,450 700,400 S 850,300 1000,250 S 1150,150 1300,100 S 1450,50 1600,0"
            fill="none"
            stroke="url(#teal-liquid-3d)"
            strokeWidth="25"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 0.8 }}
            animate={{ 
              opacity: [0.8, 1.2, 0.8],
              strokeWidth: [25, 40, 25],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              delay: 4,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M -50,750 C 200,700 300,650 450,600 S 600,500 750,450 S 900,350 1050,300 S 1200,200 1350,150 S 1500,100 1650,50"
            fill="none"
            stroke="url(#gold-liquid-3d)"
            strokeWidth="20"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 0.7 }}
            animate={{ 
              opacity: [0.7, 1.1, 0.7],
              strokeWidth: [20, 35, 20],
              scale: [1, 1.01, 1]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              delay: 6,
              ease: "easeInOut"
            }}
          />
          
          {/* Upper streams - positioned above, from lower middle left to top edge */}
          <motion.path
            d="M 200,600 C 350,550 450,500 600,450 S 750,350 900,300 S 1050,200 1200,150 S 1350,100 1500,50 S 1650,0 1800,-50"
            fill="none"
            stroke="url(#teal-liquid-3d)"
            strokeWidth="28"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 0.8 }}
            animate={{ 
              opacity: [0.8, 1.3, 0.8],
              strokeWidth: [28, 42, 28],
              scale: [1, 1.04, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M 250,650 C 400,600 500,550 650,500 S 800,400 950,350 S 1100,250 1250,200 S 1400,150 1550,100 S 1700,50 1850,0"
            fill="none"
            stroke="url(#gold-liquid-3d)"
            strokeWidth="22"
            strokeLinecap="round"
            filter="url(#liquid-glow-3d) url(#drop-shadow-3d)"
            initial={{ opacity: 0.7 }}
            animate={{ 
              opacity: [0.7, 1.2, 0.7],
              strokeWidth: [22, 37, 22],
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              delay: 3,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </div>
  )
}

export default LiquidFlowBackground
