import React from 'react'
import { cn } from '@/lib/utils'

interface BaseElementProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  as?: React.ElementType
}

interface CardProps extends BaseElementProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outline'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

interface CardHeaderProps extends BaseElementProps {
  children: React.ReactNode
}

interface CardContentProps extends BaseElementProps {
  children: React.ReactNode
}

interface CardFooterProps extends BaseElementProps {
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'default',
      padding = 'md',
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        'bg-white border border-effuse-light-grey hover:shadow-brand-light hover:border-effuse-teal/20 hover:scale-[1.02] transition-all duration-300',
      elevated:
        'bg-white shadow-lg border border-effuse-light-grey hover:shadow-brand-medium hover:shadow-teal-glow hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300',
      outline:
        'bg-transparent border-2 border-effuse-teal hover:border-effuse-teal hover:shadow-teal-glow hover:bg-effuse-teal/5 transition-all duration-300',
    }

    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    }

    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn(
        'rounded-lg transition-all duration-300 cursor-pointer group',
        variants[variant],
        paddings[padding],
        className
      ),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn('mb-4', className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn('mb-4', className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn('mt-4 pt-4 border-t border-effuse-light-grey', className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
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
