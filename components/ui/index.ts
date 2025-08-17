// UI Component Library
export { Button } from './Button'
export type { ButtonProps } from './Button'

export { Code, H1, H2, H3, H4, H5, H6, Lead, Small, Text } from './Typography'
export type { TypographyProps } from './Typography'

export { Container } from './Container'
export type { ContainerProps } from './Container'

export { Grid, GridItem } from './Grid'
export type { GridItemProps, GridProps } from './Grid'

export { Card, CardContent, CardFooter, CardHeader } from './Card'
export type {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
} from './Card'

export { SectionDivider } from './SectionDivider'
export type { SectionDividerProps } from './SectionDivider'

export { AccentBar } from './AccentBar'
export type { AccentBarProps } from './AccentBar'

// AnimatedContainer and FluidParallaxBackground removed - use LightweightAnimatedContainer instead
export {
  LightweightAnimatedContainer,
  LightweightAnimatedItem,
} from './LightweightAnimatedContainer'

// Staggered animation component for micro-interactions
export { default as StaggeredAnimation } from './StaggeredAnimation'

// Enhanced Link component with brand animations
export { default as EnhancedLink } from './EnhancedLink'
export type { EnhancedLinkProps } from './EnhancedLink'

// Scroll indicator with gradient progress
export { default as ScrollIndicator } from './ScrollIndicator'
export type { ScrollIndicatorProps } from './ScrollIndicator'
