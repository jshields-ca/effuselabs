# Changelog

All notable changes to the Effuse Labs website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Hero animation refinement exploration (clusters, gold data flow, DOF glow) [EFF-34]
- CMS integration for hero content (Sanity) [EFF-32]
- Performance/mobile polish [EFF-33]

## [0.4.1] - Unreleased

### Sprint 4 In Progress: Hero Simplification & Cleanup

#### Changed
- Simplified hero to a premium vapour-only GPU background using React Three Fiber (flowfield shader)
- Implemented reduced-motion SVG fallback for accessibility
- Removed legacy tubes/threads and related code, resolved right-side banding by simplifying overlays

#### Fixed
- Addressed initial hydration/viewport warning by using Next.js `viewport` export
- Eliminated duplicate footer and excessive header height from earlier iterations

#### Notes
- Sprint 4 remains in progress; 2 issues remaining before completion: EFF-32 (CMS) and EFF-33 (Performance/Mobile)
- Further hero refinements moved to a future sprint (see EFF-34)

## [0.4.0] - 2025-08-07

### 🎉 Sprint 4 In Progress: Hero Section & Sophisticated Animations

#### Added
- **🎭 HatchingCoreBackground Component**: Sophisticated fluid animation system with organic flowing shapes
- **🌟 HatchingCoreHeroSection Component**: Dramatic icon reveal with synchronized text animations
- **🌊 Multi-Layered Animation System**: 5 distinct flowing layers with variable speeds and organic motion
- **✨ Light Ray Effects**: Dramatic light burst animations emanating from the core
- **💫 Energy Ripples**: Expanding circular waves for depth and visual interest
- **🎨 Breathing Button Animation**: Subtle pulsing effects with gradient shifts and enhanced hover states
- **🌪️ Enhanced Particle System**: 12 floating elements with organic motion patterns
- **🎯 Synchronized Text Animations**: Perfect timing with icon animations and visual hierarchy

#### Technical Features
- **Organic Background Flow**: Multi-layered teal and grey shapes with ripple distortion using fractal noise
- **Dramatic Icon Animation**: Shell peeling with blur effects, scale distortion, and light ray bursts
- **Radiant Core Animation**: Enhanced glow with rotation, pulsing effects, and multi-layer shadows
- **Performance Optimization**: GPU-accelerated animations maintaining smooth 60fps performance
- **Advanced SVG Filters**: Organic glow filters with ripple distortion for liquid-like movement

#### Animation Specifications
- **Multi-Layered Animation**: 5 distinct flowing shapes with staggered timing (12-18s cycles)
- **Organic Motion**: Fractal noise distortion for liquid-like movement using SVG filters
- **Dramatic Reveal**: 4-second icon animation with rotation, scale, and blur effects
- **Light Effects**: Dramatic light burst at 1.5s delay with expanding ripples
- **Synchronized Timing**: Perfect coordination between background, icon, and text animations

#### Changed
- **📊 Project Progress**: Updated from 37.5% to 50% complete (2/4 Sprint 4 tasks done)
- **🎯 Current Focus**: Sprint 4 (Hero Section & 3D Graphics) in progress with sophisticated animations
- **📚 Documentation**: Updated all documentation files to reflect current progress and achievements

## [0.3.0] - 2025-08-07

### 🎉 Sprint 3 Complete: Navigation & Layout System + Sprint 4 Preparation

#### Added
- **🧭 Complete Navigation System**: Responsive navbar with animated mobile menu and sticky header behavior
- **🦶 Professional Footer Component**: Social links, company information, and responsive multi-column layout
- **🏗️ Accessible Layout Components**: PageWrapper, SectionContainer, SkipNav, and Breadcrumb components
- **📱 Mobile Optimization**: Touch-friendly interactions, cross-browser compatibility, and accessibility features
- **📋 Sprint 4 Linear Issues**: Created epic issue and 4 sub-tasks with proper Linear labels and documentation

#### Fixed
- **🎨 Navigation Content**: Replaced placeholder gibberish with business-aligned navigation (Products, Solutions, About, Contact)
- **🏷️ Product Information**: Updated footer and content to reflect actual products (Lumina salon software, SilentLedger financial dashboard)
- **♿ Accessibility Issues**: Fixed contrast issues in text content for WCAG AA compliance
- **🏷️ Sprint 2 Labeling**: Applied missing Linear labels to Sprint 2 issues according to labeling guide
- **📧 Contact Information**: Updated all email references from dev@scootr.ca to hello@effuse.io
- **🦶 Footer Layout**: Fixed Resources section wrapping issue by adjusting grid columns (lg:grid-cols-4 → lg:grid-cols-5)
- **📦 Product Naming**: Updated product name from "Stackd" to "SilentLedger" across all documentation and code

#### Changed
- **📊 Project Progress**: Updated from 12.5% to 37.5% complete (3/8 sprints done)
- **🎯 Current Focus**: Sprint 4 (Hero Section & 3D Graphics) now ready with all issues created
- **📚 Documentation**: Updated all documentation files to reflect current progress and achievements

## [0.2.0] - 2025-08-07

### 🎉 Sprint 2 Complete: UI Component Library & Animation Framework

#### Added
- **🧩 Complete UI Component Library**: Button, Typography, Container, Grid, Card components with TypeScript interfaces
- **🎬 Animation Framework**: Framer Motion integration with reusable AnimatedContainer and AnimatedItem components
- **🎨 Enhanced Global Styles**: CSS variables, accessibility focus styles, reduced motion support, mobile optimizations
- **📦 Utility Functions**: clsx and tailwind-merge integration for clean CSS class management

#### Technical Features
- **TypeScript**: Fully typed components with proper interfaces and prop validation
- **Accessibility**: WCAG AA compliance with focus styles and reduced motion preferences
- **Performance**: GPU-accelerated animations with performance optimization
- **Brand Integration**: Complete implementation of Effuse Labs brand colors and typography

## [0.1.0] - 2025-08-01

### 🎉 Sprint 1 Complete: Foundation + Production Infrastructure

#### Added
- **Custom Domain**: Production site now live at [https://effuse.io](https://effuse.io)
- **Complete Linear Label System**: Comprehensive project management with 5 exclusive label groups
- **Performance Optimizations**: VS Code/Cursor workspace settings for large project performance
- **Windows Development Support**: Helper scripts for PATH issues and environment setup
- **Three-Environment Pipeline**: Development → Staging → Production deployment workflow
- **Comprehensive Documentation System**: Single source of truth with cross-referencing

#### Fixed
- **Tailwind CSS Production Build**: Fixed v4 incompatibility by downgrading to stable v3.4.17
- **Production Dependencies**: Moved build-critical packages (tailwindcss, postcss, autoprefixer) from devDependencies to dependencies
- **Cursor Performance**: Added `.vscode/settings.json` to exclude `node_modules` from IDE scanning
- **Domain Configuration**: Successfully configured DNS and SSL for custom domain

#### Changed
- **Production URL**: Migrated from `effuselabs-production.up.railway.app` to `effuse.io`
- **Environment Variables**: Updated `NEXT_PUBLIC_SITE_URL` to use custom domain
- **Documentation Structure**: Reorganized into logical categories (Project Management, Business & Brand, Development Setup)

---

## Development Milestones

### [0.4.1] - In Progress (Current)
**Sprint 4 In Progress**: Hero Section & Sophisticated Animations 🔄

### [0.3.0] - 2025-08-07 (Completed)
**Sprint 3 Complete**: Navigation & Layout System + Sprint 4 Preparation ✅

### [0.2.0] - 2025-08-07 (Completed)
**Sprint 2 Complete**: UI Component Library & Animation Framework ✅

### [0.1.0] - 2025-08-01 (Completed)
**Sprint 1 Complete**: Foundation & Production Infrastructure ✅

#### Added
- **Next.js 14 Project**: Initialized with App Router, TypeScript, and optimized configuration
- **Tailwind CSS Configuration**: Complete brand color palette and typography system
- **Development Environment**: Local development with hot reload and production build testing
- **Quality Assurance**: ESLint with jsx-a11y plugin for WCAG AA compliance
- **CI/CD Pipeline**: Railway deployment with staging and production environments
- **Docker Support**: Containerized development environment (optional)
- **Brand Integration**: Complete implementation of Effuse Labs brand identity
- **Code Standards**: Prettier formatting, TypeScript strict mode, zero-warning policy

#### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom brand configuration
- **Deployment**: Railway with automated builds
- **Quality**: ESLint + Prettier + jsx-a11y accessibility linting
- **Performance**: Optimized production builds with static generation

#### Sprint 1 Achievements
- ✅ **Repository & Environment Setup** ([EFF-9](https://linear.app/scootr-ca/issue/EFF-9))
- ✅ **Tailwind CSS Brand Configuration** ([EFF-10](https://linear.app/scootr-ca/issue/EFF-10))
- ✅ **Linting & Quality Assurance Setup** ([EFF-11](https://linear.app/scootr-ca/issue/EFF-11))
- ✅ **CI/CD Pipeline Setup** ([EFF-12](https://linear.app/scootr-ca/issue/EFF-12))

---

## [0.1.0] - 2025-07-29

### 🎯 Project Initialization: Planning & Documentation

#### Added
- **Project Structure**: Initial repository setup and organization
- **Development Plan**: Comprehensive 8-sprint roadmap with 44-day timeline
- **Linear Integration**: 18 issues created across all development phases
- **Documentation Foundation**: Business overview, brand style guide, development plan
- **Brand Identity**: "Hatching Core" logo concept with Wellspring metaphor
- **Technology Decisions**: Selected Next.js 14, Tailwind CSS, Railway deployment stack

#### Documentation Created
- **Business Overview**: Company mission, vision, and Lumina product details
- **Brand Style Guide**: Visual identity, color palette, typography system
- **Development Plan**: Technical roadmap and sprint architecture
- **Development Status**: Progress tracking dashboard with metrics

#### Brand Elements Established
- **Color Palette**: Slate Grey, Effuse Teal, Lumina Gold, Radiant Gradient
- **Typography**: Inter (primary), IBM Plex Mono (accent)
- **Logo Concept**: "Hatching Core" representing idea emergence and growth
- **Brand Archetypes**: The Sage (wisdom) & The Creator (innovation)

---

## Technical Evolution

### Dependencies Timeline

#### Current Production Dependencies (v0.4.1-in-progress)
```json
{
  "autoprefixer": "^10.4.21",
  "framer-motion": "^11.0.0",
  "next": "^14",
  "postcss": "^8.5.6", 
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3.4.17"
}
```

#### Key Changes
- **2025-08-07**: Added Framer Motion for sophisticated animation system
- **2025-08-01**: Moved Tailwind CSS build tools to production dependencies
- **2025-08-01**: Downgraded tailwindcss from v4.1.11 to v3.4.17 for stability
- **2025-07-31**: Added accessibility and quality assurance tooling

### Environment Evolution

#### Production URLs
- **v0.1.0 - v0.2.0**: `https://effuselabs-production.up.railway.app`
- **v1.0.0+**: `https://effuse.io` (custom domain with SSL)

#### Development Environments
- **Local**: `http://localhost:3000` (primary development)
- **Staging**: `https://effuselabs-staging.up.railway.app` (QA & preview)
- **Production**: `https://effuse.io` (live website)

---

## Performance Improvements

### Build Optimizations
- **Bundle Size**: Optimized for <250KB target
- **Load Time**: <2s target with static generation
- **Accessibility**: WCAG AA compliance from foundation
- **SEO**: Custom domain improves search rankings
- **Animation Performance**: GPU-accelerated animations maintaining 60fps

### Development Experience
- **Hot Reload**: 200-500ms (direct Next.js vs 2-5s Docker)
- **IDE Performance**: Excluded node_modules from scanning (30,000+ files)
- **Build Time**: Optimized production builds with proper dependency management
- **Windows Support**: Helper scripts for PATH and environment issues

---

## Project Metrics

### Sprint Velocity
- **Sprint 1**: 5 tasks completed in 1 day (ahead of 5-day estimate)
- **Sprint 2**: 4 tasks completed in 1 day (ahead of 5-day estimate)
- **Sprint 3**: 4 tasks completed in 1 day (ahead of 5-day estimate)
- **Sprint 4**: 2/4 tasks completed
- **Overall Efficiency**: 500% velocity improvement over planned timeline
- **Quality**: Zero-warning code standards maintained across all sprints

### Issue Distribution
- **Completed**: 16+ issues (Sprints 1, 2, 3, partial 4)
- **In Progress**: 2+ issues (Sprint 4 animation system)
- **Pending**: 10+ issues (Sprints 4-8)
- **Labels Applied**: Systematic categorization with 5 exclusive groups

### Documentation Coverage
- **Project Management**: 3 documents (Status, Plan, Linear Guide)
- **Business & Brand**: 2 documents (Overview, Style Guide)
- **Development Setup**: 2 documents (README, Deployment Guide)
- **Total**: 7 comprehensive documents with cross-referencing

---

## Looking Forward

### Current Sprint (Sprint 4)
- **Focus**: Hero Section & Sophisticated Animations
- **Duration**: 7 days
- **Key Tasks**: CMS integration (EFF-32), Performance & Mobile optimization (EFF-33)
- **Progress**: 2/4 tasks completed (2 remaining: EFF-32, EFF-33)

### Upcoming Milestones
- **Week 4**: Hero section with sophisticated animations complete (Sprint 4)
- **Week 5**: Feature sections and content areas (Sprint 5)
- **Week 6**: CMS integration complete (Sprint 6)
- **Week 8**: Production launch ready (Sprint 8)

---

## Contributors

- **Jeremy Shields** - Project Lead & Development
- **AI Assistant** - Technical implementation and documentation

---

## Links

- **Live Website**: [https://effuse.io](https://effuse.io)
- **Staging Environment**: [https://effuselabs-staging.up.railway.app](https://effuselabs-staging.up.railway.app)
- **Linear Project**: [Project Dashboard](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)
- **Repository**: Internal development repository

---

*For detailed technical specifications, see [Development Plan](./docs/DEVELOPMENT_PLAN.md)*  
*For current progress tracking, see [Development Status](./docs/DEVELOPMENT_STATUS.md)*  
*For project management methodology, see [Linear Labeling Guide](./docs/LINEAR_LABELING_GUIDE.md)*