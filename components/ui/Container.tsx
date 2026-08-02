import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: React.ElementType
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { children, className, size = 'lg', as: Component = 'div', ...props },
    ref
  ) => {
    const sizes = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    }

    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
