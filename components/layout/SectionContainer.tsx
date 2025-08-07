import React from 'react'
import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'light' | 'dark' | 'gradient'
  id?: string
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  as: Component = 'section',
  size = 'lg',
  padding = 'lg',
  background = 'white',
  id
}) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-24'
  }

  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-light-grey',
    dark: 'bg-slate-grey text-white',
    gradient: 'bg-gradient-to-b from-light-grey to-white'
  }

  return (
    <Component
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <Container size={size}>
        {children}
      </Container>
    </Component>
  )
}