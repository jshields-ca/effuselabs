import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outline'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  as?: keyof JSX.IntrinsicElements
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'default', padding = 'md', as: Component = 'div', ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-light-grey',
      elevated: 'bg-white shadow-lg border border-light-grey',
      outline: 'bg-transparent border-2 border-brand-teal-light'
    }
    
    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
    
    return (
      <Component
        ref={ref}
        className={cn(
          'rounded-lg transition-all duration-200',
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mb-4',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mb-4',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mt-4 pt-4 border-t border-light-grey',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps }