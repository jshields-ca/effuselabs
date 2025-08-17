'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ScrollIndicatorProps {
  className?: string
  variant?: 'linear' | 'circular'
  color?: 'teal' | 'gold' | 'brand'
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className,
  variant = 'linear',
  color = 'teal'
}) => {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollPercent(Math.min(scrolled, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const colorStyles = {
    teal: 'from-effuse-teal to-effuse-teal/60',
    gold: 'from-effuse-gold to-lumina-gradient-end',
    brand: 'from-effuse-teal to-effuse-gold'
  }

  if (variant === 'circular') {
    return (
      <div className={cn('fixed top-4 right-4 z-50', className)}>
        <div className="relative w-12 h-12">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="stroke-effuse-slate/20"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeWidth="2"
              strokeDasharray="100, 100"
            />
            <path
              className={cn('stroke-2 transition-all duration-300', 
                color === 'teal' ? 'stroke-effuse-teal' : 
                color === 'gold' ? 'stroke-effuse-gold' : 
                'stroke-effuse-teal'
              )}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray={`${scrollPercent}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-effuse-off-black">
              {Math.round(scrollPercent)}%
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('fixed top-0 left-0 w-full h-1 z-50 bg-effuse-slate/10', className)}>
      <div
        className={cn(
          'h-full bg-gradient-to-r transition-all duration-150 ease-out',
          colorStyles[color]
        )}
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  )
}

export default ScrollIndicator
export type { ScrollIndicatorProps }
