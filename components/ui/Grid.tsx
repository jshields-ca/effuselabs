import React from 'react'
import { cn } from '@/lib/utils'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  as?: React.ElementType
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'full'
  as?: React.ElementType
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      cols = 12,
      gap = 'md',
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
      6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-12',
    }

    const gapClasses = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }

    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn('grid', colClasses[cols], gapClasses[gap], className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, className, span = 1, as: Component = 'div', ...props }, ref) => {
    const spanClasses = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      12: 'col-span-12',
      full: 'col-span-full',
    }

    const componentProps: React.HTMLAttributes<HTMLDivElement> = {
      className: cn(spanClasses[span], className),
      ...props,
    }

    return (
      <Component ref={ref} {...componentProps}>
        {children}
      </Component>
    )
  }
)

Grid.displayName = 'Grid'
GridItem.displayName = 'GridItem'

export { Grid, GridItem }
export type { GridProps, GridItemProps }
