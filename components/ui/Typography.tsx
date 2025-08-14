import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

// Heading components
const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h1', ...props }, ref) => {
    const componentProps: React.HTMLAttributes<HTMLHeadingElement> = {
      className: cn(
        'text-4xl md:text-5xl lg:text-6xl font-bold text-off-black leading-tight tracking-tight',
        className
      ),
      ...props
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h2', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-semibold text-off-black leading-tight tracking-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-2xl md:text-3xl font-semibold text-off-black leading-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h4', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-xl md:text-2xl font-semibold text-off-black leading-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const H5 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h5', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-lg md:text-xl font-semibold text-off-black leading-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const H6 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, as: Component = 'h6', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-base md:text-lg font-semibold text-off-black leading-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

// Text components
const Text = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-base md:text-lg text-off-black leading-relaxed',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-lg md:text-xl text-medium-grey leading-relaxed font-light',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = 'small', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-sm text-medium-grey leading-relaxed',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

const Code = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = 'code', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-mono text-sm bg-light-grey px-2 py-1 rounded text-off-black',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

// Set display names
H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
H5.displayName = 'H5'
H6.displayName = 'H6'
Text.displayName = 'Text'
Lead.displayName = 'Lead'
Small.displayName = 'Small'
Code.displayName = 'Code'

export { H1, H2, H3, H4, H5, H6, Text, Lead, Small, Code }
export type { TypographyProps }