'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  delay?: number
  duration?: number
  stagger?: number
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }
}

const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.6,
    stagger = 0.1,
    ...props 
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={animations[animation]}
        transition={{
          duration,
          delay,
          staggerChildren: stagger,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

const AnimatedItem = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.6,
    ...props 
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={animations[animation]}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedContainer.displayName = 'AnimatedContainer'
AnimatedItem.displayName = 'AnimatedItem'

export { AnimatedContainer, AnimatedItem }
export type { AnimatedContainerProps }