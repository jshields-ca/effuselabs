# Sanity CMS Integration

This directory contains the Sanity CMS integration for dynamic content management.

## Environment Variables

To enable Sanity CMS integration, add these environment variables to your `.env.local` file:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Features

- **Dynamic Hero Content**: Manage hero section content through Sanity CMS
- **Fallback Support**: Graceful degradation to default content when CMS is unavailable
- **TypeScript Support**: Fully typed schema definitions
- **Loading States**: Smooth loading experience with skeleton UI

## Content Types

### Hero Section (`heroSection`)

- `title`: Main headline text
- `subtitle`: Company/brand name  
- `description`: Supporting description text
- `primaryCtaText`: Primary call-to-action button text
- `secondaryCtaText`: Secondary call-to-action button text
- `primaryCtaHref`: Primary button link destination
- `secondaryCtaHref`: Secondary button link destination
- `backgroundSettings`: Optional 3D graphics configuration

## Usage

```tsx
import { DynamicHeroSection } from '@/components/sections'

export default function HomePage() {
  return (
    <div>
      <DynamicHeroSection />
      {/* Other content */}
    </div>
  )
}
```

## Development Mode

When Sanity CMS is not configured, the application automatically falls back to static default content, ensuring the site remains functional during development and testing.
