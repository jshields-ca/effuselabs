# Product Page Template System

The Product Page Template System provides a comprehensive set of reusable components for creating consistent, accessible product pages across the Effuse Labs website.

## Overview

The system consists of:

- **ProductPageTemplate**: Main layout component
- **ProductHero**: Hero section with branding and CTA
- **PainSolutionSection**: Problem/solution comparison
- **FeatureBreakdownSection**: Feature showcase with multiple variants
- **PricingSection**: Pricing tiers or placeholder content
- **FinalCTASection**: Call-to-action with multiple backgrounds

## Components

### ProductPageTemplate

Main layout wrapper that provides consistent structure for product pages.

```tsx
import ProductPageTemplate from '@/components/product/ProductPageTemplate'
;<ProductPageTemplate
  hero={{
    productName: 'Product Name',
    headline: 'Main value proposition',
    subheadline: 'Supporting description',
    primaryCtaLabel: 'Get Started',
    primaryCtaHref: '/signup',
    background: 'light',
    accentGradient: { from: '#FFD25A', to: '#FF7F50' },
  }}
>
  {/* Additional sections as children */}
</ProductPageTemplate>
```

### ProductHero

Hero section with optional logo, headlines, and CTA.

**Props:**

- `logoSrc?: string` - Product logo URL
- `productName?: string` - Product name (H2)
- `headline: string` - Main headline (H1)
- `subheadline?: string` - Supporting text
- `primaryCtaLabel: string` - CTA button text
- `primaryCtaHref: string` - CTA link
- `background?: 'light' | 'dark'` - Theme variant
- `accentGradient?: { from: string; to: string }` - Top accent bar

### PainSolutionSection

Presents a problem/solution comparison with optional benefits.

**Props:**

- `problem: { heading: string; description: string; icon?: string }`
- `solution: { heading: string; description: string; icon?: string }`
- `bullets?: string[]` - Benefits list
- `background?: 'light' | 'dark'`

### FeatureBreakdownSection

Showcases product features in grid or checklist format.

**Props:**

- `items: FeatureItem[]` - Array of features with icon, title, description
- `variant?: 'grid' | 'checklist'` - Layout style
- `screenshotSrc?: string` - Optional product screenshot
- `background?: 'light' | 'dark'`

### PricingSection

Displays pricing tiers or placeholder content.

**Props:**

- `tiers?: PricingTier[]` - Pricing tier data
- `placeholder?: { heading: string; description: string; ctaLabel?: string; ctaHref?: string }`
- `background?: 'light' | 'dark'`

### FinalCTASection

Final call-to-action with primary and optional secondary buttons.

**Props:**

- `heading?: string` - CTA headline
- `description?: string` - Supporting text
- `primaryCta: { label: string; href: string }`
- `secondaryCta?: { label: string; href: string }`
- `background?: 'light' | 'dark' | 'gradient'`

## Accessibility Features

- **WCAG AA Compliant**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Focus Management**: Visible focus indicators with proper contrast

## Responsive Design

- **Mobile-First**: Optimized for mobile devices first
- **Breakpoint System**: Consistent responsive behavior across all components
- **Touch-Friendly**: Appropriately sized touch targets
- **Performance**: Optimized images with Next.js Image component

## Usage Examples

See live examples:

- [Lumina Product Page](/products/lumina) - Salon management platform
- [SilentLedger Product Page](/products/silentledger) - Privacy-focused financial management

## Technical Notes

- All components use TypeScript for type safety
- Consistent with existing design system (Typography, Button, Card components)
- Animation integration via LightweightAnimatedContainer
- Themeable via background props and CSS custom properties
