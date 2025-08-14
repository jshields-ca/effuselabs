import React from 'react'
import { PageWrapper, SectionContainer } from '@/components/layout'
import ProductHero, { ProductHeroProps } from './ProductHero'

export interface ProductPageTemplateProps {
  hero: ProductHeroProps
  children?: React.ReactNode // additional sections follow the hero
}

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ hero, children }) => {
  return (
    <PageWrapper>
      <ProductHero {...hero} />
      {/* Slot for subsequent sections (pain/solution, features, pricing, final CTA) */}
      {children ?? null}
      {/* Simple placeholder bottom spacing so footer isn’t tight on short pages */}
      <SectionContainer padding="md" background="white">
        <div aria-hidden className="h-4" />
      </SectionContainer>
    </PageWrapper>
  )
}

export default ProductPageTemplate


