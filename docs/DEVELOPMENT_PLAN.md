# Effuse Labs Website: Development Plan & Execution Guide

**Version:** 2.0
**Date:** July 29, 2025
**Project:** `effuse.io` Corporate Website
**Owner:** Jeremy Shields

## 1. Project Overview & Core Objectives

This document outlines the development plan for the Effuse Labs corporate website. The primary goal is to create a performant, visually premium, and accessible marketing website that effectively communicates the company's mission and promotes its flagship product, Lumina.

### Core Objectives:

- To build a website that embodies the brand archetypes of **The Sage & The Creator**.
- To communicate the primary tagline: "Intelligent Software for Small Business Growth".
- To create a user experience that elicits feelings of relief, confidence, and empowerment.
- To ensure the final product meets **WCAG AA** accessibility standards, a core value of the company founder.
- To build a foundation that is scalable and easily updatable by the project owner.

## 2. Technology Stack & Configuration

The project will be built using the following technologies. All development will be containerized using Docker.

### 2.1. Framework: Next.js 14

- **Purpose:** Primary framework for building the user interface with React. We will leverage Static Site Generation (SSG) for optimal performance.
- **Initialization:**
  ```bash
  npx create-next-app@latest effuse-website --typescript --tailwind --eslint
  ```
  _Select `App Router` when prompted._

### 2.2. Styling: Tailwind CSS

- **Purpose:** A utility-first CSS framework for rapid, consistent styling.
- **Configuration (`tailwind.config.ts`):** The configuration file must be updated to reflect the brand style guide.

  ```javascript
  import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'off-black': '#1D1D21',
          'medium-grey': '#808285',
          'light-grey': '#F1F3F5',
          'brand-gold': '#FFD25A',
          'brand-teal-dark': '#0B2B33',
          'brand-teal-light': '#22C5C3',
        },
        fontFamily: {
           sans: ['Inter', 'sans-serif'],
           mono: ['IBM Plex Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  export default config
  ```

### 2.3. Animation & 3D Graphics

- **Animation:** **Framer Motion** (`npm install framer-motion`). To be used for subtle page transitions and interactive element feedback that align with the "fluid shapes" imagery style.
- **3D Graphics:** **React Three Fiber** (`npm install @react-three/fiber @react-three/drei three`). To be used for creating the abstract "flow" graphic in the hero section, as seen in the mockup.

### 2.4. Headless CMS: Sanity.io

- **Purpose:** To manage all website content, allowing for easy updates without code changes. Sanity's flexibility allows us to create custom content models that perfectly match the site's design and messaging pillars.
- **Installation (for the AI):** The development AI will need to install the official client libraries to connect the Next.js app to Sanity.
  ```bash
  npm install next-sanity @sanity/client
  ```

### 2.5. Accessibility Linter

- **Purpose:** To enforce accessibility best practices during development, aligning with the core brand value of Accessibility.
- **Installation:**
  ```bash
  npm install eslint-plugin-jsx-a11y --save-dev
  ```
- **Configuration (`.eslintrc.json`):** Add `plugin:jsx-a11y/recommended` to the `extends` array.

## 3. Project Structure

The project will follow a standard Next.js App Router structure with an emphasis on component-based architecture.

effuse-website/
├── app/
│ ├── layout.tsx # Root layout, includes and
│ ├── page.tsx # Homepage content
│ └── globals.css # Global styles
├── components/
│ ├── ui/ # Reusable UI elements (Button, etc.)
│ ├── layout/ # Layout components (Navbar, Footer, etc.)
│ └── sections/ # Page-specific sections (Hero, Features, etc.)
├── public/ # Static assets (images, fonts, logos)
├── lib/ # Helper functions, utility code
└── ... # Other config files (tailwind, next, etc.)

## 4. Development Environment Setup

### 4.1. Local Development Environment

**Prerequisites:**

- Node.js 18.0.0 or higher
- npm or yarn package manager
- Git with SSH keys configured
- Docker Desktop (optional, for containerized development)
- VS Code with recommended extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier - Code formatter
  - Auto Rename Tag

**Environment Variables:**
Create `.env.local` file with:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=

# Environment
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4.2. Docker Development Environment

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**docker-compose.yml:**

```yaml
version: '3.8'
services:
  effuse-website:
    build:
      context: .
      target: dev
    ports:
      - '3000:3000'
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

## 5. Sprint-Based Development Plan

### Sprint 1: Project Setup & Environment Configuration (Week 1)

**Duration:** 5 days
**Goal:** Establish development foundation and environment

**Tasks:**

1. **Repository & Environment Setup**
   - Initialize Next.js 14 project with TypeScript
   - Configure Git repository and branching strategy
   - Set up development environment (local & Docker)
   - Configure VS Code workspace settings

2. **Tailwind CSS Configuration**
   - Install and configure Tailwind CSS
   - Implement custom brand colors and typography
   - Set up utility classes for spacing and layout
   - Create base component styles

3. **Linting & Quality Assurance**
   - Configure ESLint with accessibility rules
   - Set up Prettier for code formatting
   - Install and configure accessibility linter
   - Create pre-commit hooks for code quality

4. **CI/CD Pipeline Setup**
   - Configure Railway deployment
   - Set up preview environments for PRs
   - Create production deployment pipeline
   - Configure environment variables

**Deliverables:**

- Functional Next.js application
- Configured development environment
- Working CI/CD pipeline
- Code quality tools configured

### Sprint 2: Core Infrastructure & UI Foundation (Week 2)

**Duration:** 5 days
**Goal:** Build reusable UI components and layout foundation

**Tasks:**

1. **UI Component Library**
   - Create Button component with variants
   - Implement Typography system
   - Build Card and Container components
   - Create responsive Grid system

2. **Layout Foundation**
   - Implement root layout structure
   - Create responsive breakpoint system
   - Set up global styles and CSS variables
   - Implement dark/light theme foundation

3. **Animation Framework**
   - Install and configure Framer Motion
   - Create reusable animation components
   - Implement page transition system
   - Set up hover and interaction animations

4. **Asset Management**
   - Optimize and implement brand logos
   - Set up image optimization pipeline
   - Configure font loading strategy
   - Create icon component system

**Deliverables:**

- Complete UI component library
- Responsive layout system
- Animation framework
- Optimized asset pipeline

### Sprint 3: Layout Components & Navigation (Week 3)

**Duration:** 5 days
**Goal:** Implement site navigation and layout components

**Tasks:**

1. **Navigation System**
   - Build responsive Navbar component
   - Implement mobile menu with animations
   - Create navigation state management
   - Add sticky header behavior

2. **Footer Component**
   - Design and implement site footer
   - Add social media links
   - Include company information
   - Implement responsive footer layout

3. **Layout Components**
   - Create page wrapper components
   - Implement section containers
   - Build breadcrumb navigation
   - Add skip navigation links for accessibility

4. **Responsive Design**
   - Implement mobile-first design approach
   - Test across all device breakpoints
   - Optimize touch interactions
   - Ensure proper contrast ratios

**Deliverables:**

- Complete navigation system
- Responsive layout components
- Footer with social links
- Mobile-optimized design

### Sprint 4: Hero Section & 3D Graphics (Week 4)

**Duration:** 7 days
**Goal:** Create engaging hero section with 3D visual elements

**Tasks:**

1. **Hero Section Layout**
   - Design hero section component structure
   - Implement responsive typography
   - Add call-to-action buttons
   - Create background gradient system

2. **3D Graphics Integration**
   - Install React Three Fiber and dependencies
   - Create abstract teal wave graphic
   - Implement interactive 3D elements
   - Optimize 3D performance for mobile

3. **Hero Content Management**
   - Connect hero content to Sanity CMS
   - Create dynamic content fields
   - Implement content preview
   - Add content validation

4. **Performance Optimization**
   - Implement lazy loading for 3D components
   - Optimize bundle size and loading
   - Add performance monitoring
   - Test load times across devices

**Deliverables:**

- Interactive hero section
- 3D graphics implementation
- CMS-managed content
- Performance-optimized loading

### Sprint 5: Feature Sections & Content (Week 5)

**Duration:** 7 days
**Goal:** Build feature sections and content areas

**Tasks:**

1. **Dark Feature Section**
   - Implement "Interang Cuftrath" section
   - Create two-column responsive layout
   - Add feature highlight components
   - Implement background styling

2. **Light Feature Section**
   - Build "Onad Dumige" section
   - Create grid layout for feature blocks
   - Add abstract teal block graphics
   - Implement section animations

3. **Content Components**
   - Create reusable content blocks
   - Build testimonial components
   - Implement call-to-action sections
   - Add image gallery components

4. **Interactive Elements**
   - Add hover effects and micro-interactions
   - Implement scroll-triggered animations
   - Create progress indicators
   - Add interactive feature demos

**Deliverables:**

- Complete feature sections
- Interactive content components
- Smooth page animations
- Engaging user interactions

### Sprint 6: CMS Integration & Content Management (Week 6)

**Duration:** 5 days
**Goal:** Implement headless CMS and content management

**Tasks:**

1. **Sanity.io Setup**
   - Configure Sanity project and datasets
   - Create content schemas for all components
   - Set up Sanity Studio
   - Configure content preview

2. **Content Integration**
   - Connect all components to CMS
   - Implement dynamic content fetching
   - Add content validation and error handling
   - Create content migration scripts

3. **Content Management Features**
   - Build content editor interface
   - Implement draft/publish workflow
   - Add content versioning
   - Create content backup system

4. **SEO & Meta Data**
   - Implement dynamic meta tags
   - Add Open Graph integration
   - Create XML sitemap generation
   - Set up analytics tracking

**Deliverables:**

- Fully integrated CMS
- Content management workflow
- SEO optimization
- Analytics implementation

### Sprint 7: Accessibility & Testing (Week 7)

**Duration:** 5 days
**Goal:** Ensure WCAG AA compliance and comprehensive testing

**Tasks:**

1. **Accessibility Implementation**
   - Audit all components for WCAG AA compliance
   - Implement proper ARIA labels and roles
   - Add keyboard navigation support
   - Create screen reader optimizations

2. **Testing Framework**
   - Set up Jest and React Testing Library
   - Write unit tests for all components
   - Implement integration tests
   - Add end-to-end testing with Playwright

3. **Performance Testing**
   - Conduct Lighthouse audits
   - Optimize Core Web Vitals
   - Test loading performance
   - Implement performance monitoring

4. **Cross-Browser Testing**
   - Test across major browsers
   - Validate mobile responsiveness
   - Check accessibility tools compatibility
   - Fix browser-specific issues

**Deliverables:**

- WCAG AA compliant website
- Comprehensive test suite
- Performance optimization
- Cross-browser compatibility

### Sprint 8: Deployment & Launch Preparation (Week 8)

**Duration:** 5 days
**Goal:** Prepare for production launch and monitoring

**Tasks:**

1. **Production Deployment**
   - Configure production environment
   - Set up domain and SSL certificates
   - Implement CDN and caching strategies
   - Configure monitoring and logging

2. **Documentation**
   - Create deployment documentation
   - Write content management guides
   - Document component library
   - Create maintenance procedures

3. **Launch Preparation**
   - Conduct final testing and QA
   - Prepare launch checklist
   - Set up analytics and monitoring
   - Create backup and recovery procedures

4. **Post-Launch Support**
   - Monitor site performance
   - Track user analytics
   - Address any launch issues
   - Plan future iterations

**Deliverables:**

- Production-ready website
- Complete documentation
- Monitoring and analytics
- Launch support plan

## 6. Component Development Plan

The website will be broken down into the following components, based on the provided high-fidelity mockup.

1.  **`Button` Component (`/components/ui/Button.tsx`)**
    - **Description:** A reusable button component with variants.
    - **Props:** `variant` ('primary', 'secondary'), `href`, `children`.
    - **Styling:**
      - **Primary:** Solid Gold (`#FFD25A`) background with Off-Black (`#1D1D21`) text, used for interactive accents on the Effuse Labs brand.
      - **Secondary:** No background, with a Solid Gold border and text.

2.  **`Navbar` Component (`/components/layout/Navbar.tsx`)**
    - **Description:** The main site navigation.
    - **Elements:**
      - Effuse Labs Logo (as an SVG).
      - Navigation links: "Intrise," "Contor," "Componens" (as per mockup).
      - Primary CTA Button: "Creoqaxs" (as per mockup).
    - **Styling:** Should be sticky or fixed on scroll. Clean and minimal design.

3.  **`HeroSection` Component (`/components/sections/HeroSection.tsx`)**
    - **Description:** The top-most section of the homepage.
    - **Elements:**
      - **H1 Title:** "Intelligent Software for Small Business Growth".
      - **CTA Button:** Primary variant.
      - **3D Graphic:** A placeholder `<div>` for the `react-three-fiber` canvas, which will render the abstract teal wave graphic shown in the mockup.

4.  **`DarkFeatureSection` Component (`/components/sections/DarkFeatureSection.tsx`)**
    - **Description:** The section with the heading "Interang Cuftrath".
    - **Styling:** Uses Off-Black (`#1D1D21`) as the background. Text is White (`#FFFFFF`).
    - **Layout:** A two-column layout. Left column contains a title, paragraph text, and a CTA button. Right column contains two sub-feature blocks.

5.  **`LightFeatureSection` Component (`/components/sections/LightFeatureSection.tsx`)**
    - **Description:** The section with the heading "Onad Dumige".
    - **Styling:** Uses White (`#FFFFFF`) as the background.
    - **Layout:** Two-column layout with text on the left and a grid of abstract teal blocks on the right, followed by two sub-feature blocks below.

6.  **`Footer` Component (`/components/layout/Footer.tsx`)**
    - **Description:** The site footer.
    - **Elements:** Should contain the Effuse Labs logo, copyright information (`© 2025 Effuse Labs`), and links to key pages and social media profiles.

## 7. Development Workflow & Rules

- **Branching:** All development must be done on a feature branch created from `main`. Branch names should correspond to Linear tickets (e.g., `feat/LIN-1-setup-project`).
- **Commits:** Commits should be small and atomic, with clear messages describing the change.
- **Pull Requests (PRs):** Once a feature is complete, a PR must be opened to merge into `main`. The PR description should detail the changes made.
- **Deployment:** PRs will trigger an automatic deployment to a preview environment on Railway. Merging to `main` will trigger a deployment to production. No manual deployments should be performed.

## 8. Quality Assurance Standards

### 8.1. Code Quality

- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Zero warnings policy
- **Prettier**: Consistent code formatting
- **Testing**: Minimum 80% code coverage

### 8.2. Performance Standards

- **Core Web Vitals**: All metrics in green zone
- **Lighthouse Score**: 90+ across all categories
- **Bundle Size**: Main bundle < 250KB gzipped
- **Load Time**: First meaningful paint < 2s

### 8.3. Accessibility Standards

- **WCAG AA**: Full compliance required
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: Proper ARIA implementation
- **Color Contrast**: Minimum 4.5:1 ratio

---

**End of Plan**
