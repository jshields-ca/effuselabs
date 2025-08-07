'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'reveal' | 'emerge'
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
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  },
  reveal: {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  },
  emerge: {
    hidden: { opacity: 0, scale: 0.8, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
  }
}

const AnimatedContainer = React.forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ 
    children, 
    className, 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.8,
    stagger = 0.15,
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
          ease: [0.22, 1, 0.36, 1], // More dramatic easing curve
          type: "spring",
          damping: 25,
          stiffness: 120
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
    duration = 0.8,
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
          ease: [0.22, 1, 0.36, 1], // More dramatic easing curve
          type: "spring",
          damping: 25,
          stiffness: 120
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