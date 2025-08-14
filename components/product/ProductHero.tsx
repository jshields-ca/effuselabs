import React from 'react'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { H1, H2, Text, Button } from '@/components/ui'
import { LightweightAnimatedContainer as Animated } from '@/components/ui/LightweightAnimatedContainer'

export interface ProductHeroProps {
  id?: string
  logoSrc?: string
  logoAlt?: string
  productName?: string
  headline: string
  subheadline?: string
  primaryCtaLabel: string
  primaryCtaHref: string
  background?: 'light' | 'dark'
  accentGradient?: { from: string; to: string }
}

const ProductHero: React.FC<ProductHeroProps> = ({
  id = 'product-hero',
  logoSrc,
  logoAlt = 'Product logo',
  productName,
  headline,
  subheadline,
  primaryCtaLabel,
  primaryCtaHref,
  background = 'light',
  accentGradient,
}) => {
  const isDark = background === 'dark'

  return (
    <SectionContainer id={id} background={isDark ? 'dark' : 'white'} padding="lg">
      {accentGradient ? (
        <div
          className="-mt-6 -mb-8 -mx-0 h-1.5 rounded-t-lg"
          style={{ background: `linear-gradient(90deg, ${accentGradient.from}, ${accentGradient.to})` }}
          aria-hidden
        />
      ) : null}

      <Animated animation="slideUp">
        <div className="max-w-5xl mx-auto text-center">
          {logoSrc ? (
            <div className="mb-6 flex justify-center">
              {/* decorative product logo; alt is provided for screen readers */}
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-12 w-auto"
              />
            </div>
          ) : null}

          {productName ? (
            <H2 className={isDark ? 'text-white mb-2' : 'mb-2'}>{productName}</H2>
          ) : null}

          <H1 className={isDark ? 'text-white mb-4' : 'mb-4'}>{headline}</H1>

          {subheadline ? (
            <Text className={isDark ? 'text-light-grey mb-8 max-w-3xl mx-auto' : 'text-medium-grey mb-8 max-w-3xl mx-auto'}>
              {subheadline}
            </Text>
          ) : null}

          <div className="flex justify-center">
            <Button
              variant={isDark ? 'primary' : 'primary'}
              size="lg"
              href={primaryCtaHref}
            >
              {primaryCtaLabel}
            </Button>
          </div>
        </div>
      </Animated>
    </SectionContainer>
  )
}

export default ProductHero


