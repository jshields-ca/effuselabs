'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LiquidFlowProps {
  className?: string
  color?: string
  opacity?: number
  speed?: number
  size?: 'small' | 'medium' | 'large'
}

const LiquidFlow: React.FC<LiquidFlowProps> = ({
  className = '',
  color = '#22C5C3',
  opacity = 0.3,
  speed = 20,
  size = 'medium'
}) => {
  const sizeMap = {
    small: { width: 200, height: 100 },
    medium: { width: 400, height: 200 },
    large: { width: 600, height: 300 }
  }

  const { width, height } = sizeMap[size]



  // Create multiple flowing streams
  const createStreams = () => {
    const streams = []
    const streamCount = 3
    
    for (let i = 0; i < streamCount; i++) {
      const offset = (i / streamCount) * height
      const amplitude = (height / 6) * (1 - i * 0.2)
      const frequency = 3 + i * 2
      
      const points = []
      const segments = 25
      
      for (let j = 0; j <= segments; j++) {
        const x = (j / segments) * width
        const y = offset + Math.sin((j / segments) * Math.PI * frequency) * amplitude
        points.push(`${x},${y}`)
      }
      
      streams.push(points.join(' L '))
    }
    
    return streams
  }

  const streams = createStreams()

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id={`liquid-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="20%" stopColor={color} stopOpacity="0.8" />
            <stop offset="80%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          
          <filter id={`glow-${color}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {streams.map((stream, index) => (
          <motion.path
            key={index}
            d={`M ${stream}`}
            fill="none"
            stroke={`url(#liquid-gradient-${color})`}
            strokeWidth={3 + index * 2}
            strokeLinecap="round"
            filter={`url(#glow-${color})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 1, 0],
              x: [0, -width * 0.3]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Additional flowing particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={Math.random() * width}
            cy={Math.random() * height}
            r={2 + Math.random() * 3}
            fill={color}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: width + 50
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [-50, width + 50]
            }}
            transition={{
              duration: speed * 0.8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default LiquidFlow
