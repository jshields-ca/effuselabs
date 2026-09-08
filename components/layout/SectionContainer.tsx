import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import React from 'react'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'deep' | 'base' | 'raised' | 'white' | 'light' | 'gradient'
  id?: string
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  as: Component = 'section',
  size = 'lg',
  padding = 'lg',
  background = 'white',
  id,
}) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-24',
  }

  /*
   * The site is dark-first: `deep` and `base` are the default canvas, and the
   * light surfaces are for sections carrying real reading copy. Each dark
   * option sets its own foreground so a section can never end up with dark text
   * on a dark surface — which is exactly what happened when `dark` was a single
   * override applied on top of light defaults.
   */
  const backgroundClasses = {
    deep: 'bg-surface-deep text-effuse-parchment',
    base: 'bg-surface-base text-effuse-parchment',
    raised: 'bg-surface-raised text-effuse-parchment',
    white: 'bg-white text-effuse-off-black',
    light: 'bg-effuse-light-grey text-effuse-off-black',
    gradient:
      'bg-gradient-to-b from-surface-deep to-surface-base text-effuse-parchment',
  }

  const props: React.HTMLAttributes<HTMLElement> = {
    className: cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    ),
    ...(id ? { id } : {}),
  }

  return (
    <Component {...props}>
      <Container size={size}>{children}</Container>
    </Component>
  )
}
