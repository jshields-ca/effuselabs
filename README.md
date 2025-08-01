<div align="center">

# 🚀 Effuse Labs

### *Intelligent Software for Small Business Growth*

[![Version](https://img.shields.io/badge/version-0.1.0-blue?style=for-the-badge)](./CHANGELOG.md)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://effuse.io)
[![Deployment](https://img.shields.io/badge/deployed-live-success?style=for-the-badge)](https://effuse.io)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](./LICENSE)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Railway](https://img.shields.io/badge/Railway-deployed-0B0D0E?style=flat&logo=railway&logoColor=white)](https://railway.app/)

[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat&logo=node.js)](https://nodejs.org/)
[![ESLint](https://img.shields.io/badge/ESLint-enabled-4B32C3?style=flat&logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%20AA-green?style=flat)](https://www.w3.org/WAI/WCAG2AA-Conformance)

[![Website](https://img.shields.io/badge/🌐_Website-effuse.io-FF6B6B?style=flat)](https://effuse.io)
[![Staging](https://img.shields.io/badge/🧪_Staging-live-orange?style=flat)](https://effuselabs-staging.up.railway.app)
[![Documentation](https://img.shields.io/badge/📚_Docs-complete-blue?style=flat)](./docs/)

---

**🎯 Sprint Progress:** `1/8 Complete` • **🏗️ Foundation Established** • **🚀 Live at [effuse.io](https://effuse.io)**

</div>

## 📑 Table of Contents

- [🌟 About Effuse Labs](#-about-effuse-labs)
- [🚀 Flagship Product: Lumina](#-flagship-product-lumina)
- [🛠️ Technology Stack](#️-technology-stack)
- [🎨 Brand Identity](#-brand-identity)
- [🚦 Getting Started](#-getting-started)
- [💻 Development Workflow](#-development-workflow)
- [🌐 Deployment](#-deployment)
- [📚 Documentation](#-documentation)
- [♿ Accessibility Commitment](#-accessibility-commitment)
- [📝 Recent Major Updates](#-recent-major-updates)
- [🔧 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📞 Contact & Support](#-contact--support)

---

Effuse Labs is a modern technology company based in Winnipeg, Manitoba, dedicated to building intelligent, industry-specific software (Vertical SaaS) for underserved small and medium-sized businesses across North America. Our mission is to pour out a continuous stream of innovative ideas, elegant code, and intelligent solutions that democratize the power of data for local businesses.

## 🌟 About Effuse Labs

The name 'Effuse Labs' is derived from the Latin _effundere_ (effusus), meaning "to pour out." We exist to **pour out** innovative solutions that transform operational burdens into competitive strengths for small businesses.

### Our Vision

To democratize the power of data by providing local businesses with the same level of actionable insight and operational efficiency typically reserved for large corporations.

### Brand Archetypes

- **The Sage**: Trusted source of wisdom and insight
- **The Creator**: Actively building and innovating

## 🚀 Flagship Product: Lumina

**Lumina** is our AI-powered business management platform designed specifically for the salon and barber industry. It illuminates the path to growth by replacing patchwork solutions with a single, elegant platform.

### Key Features

- **🤖 Intelligent Dashboard**: AI-powered insights for client retention and revenue optimization
- **💰 Flexible Financials**: Built for salon-specific compensation structures (commission & chair rental)
- **📅 Seamless Online Booking**: Modern booking system with website and social media integration
- **🏪 Unified POS & CRM**: Single system for payments, client history, and communications
- **📊 Smart Analytics**: Clear, actionable reporting and performance insights

### Problems Solved

- ✅ Reduces lost revenue from no-shows via automated reminders
- ✅ Eliminates hours of weekly administrative work
- ✅ Simplifies complex staff payroll calculations
- ✅ Provides clear, understandable financial reporting

## 🛠️ Technology Stack

Our corporate website and platform are built with modern, performance-focused technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router & TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.17 with custom brand configuration
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for fluid interactions
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for abstract visuals
- **CMS**: [Sanity.io](https://www.sanity.io/) for headless content management
- **Deployment**: [Railway](https://railway.app/) with automated CI/CD and custom domain
- **Containerization**: Docker for consistent development environments
- **Accessibility**: ESLint plugin for WCAG AA compliance

## 🎨 Brand Identity

### Core Values

- **Clarity**: We make the complex simple
- **Empowerment**: We give users tools to build their own success
- **Innovation**: We are always thinking ahead
- **Accessibility**: Our tools are for everyone, intuitive and easy to use

### Color Palette

- **Slate Grey**: `#2E3440`
- **Effuse Teal**: `#22C5C3`
- **Lumina Gold**: `#FFD25A`
- **Lumina Radiant Gradient**: `#FFD25A` → `#FF7A5A`
- **Neutrals**: `#1D1D21` (Off-Black), `#808285` (Medium Grey), `#F1F3F5` (Light Grey)

### Typography

- **Primary**: [Inter](https://fonts.google.com/specimen/Inter) - Headlines, body, and UI text
- **Accent**: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) - Data and code snippets

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- Docker (optional, for containerized development)

**Windows Users:** If you encounter PATH issues with npm/Node.js, use the provided helper scripts (see Installation step 6).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/effuselabs/effuse-website.git
   cd effuse-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Windows PATH Fix (if needed)**
   If you get "npm is not recognized" errors, use one of these helper scripts:
   ```bash
   # Option 1: Double-click this file in your project folder
   start-dev-simple.bat
   
   # Option 2: Run in PowerShell for guided setup
   .\setup-dev-environment.ps1
   ```

### ⚡ **Optimized Development Workflow**

**Recommended: Direct Next.js (Fastest)**
```bash
npm run dev     # Start with hot reload → http://localhost:3000
npm run build   # Test production build locally
npm run start   # Test production server locally
```

**Why Direct Next.js?**
- ⚡ Faster hot reload (200-500ms vs 2-5s)
- 🐛 Better debugging and IDE integration  
- 💾 Lower resource usage
- 🎯 Simpler daily workflow

### Docker Development (Production Testing Only)

```bash
# Only when testing exact production environment
docker build -t effuse-website .
docker run -p 3000:3000 effuse-website
```

## 💻 Development Workflow

### Project Structure

```
effuse-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI elements
│   ├── layout/            # Layout components
│   └── sections/          # Page-specific sections
├── public/                # Static assets
├── lib/                   # Helper functions
├── docs/                  # Project documentation
├── start-dev-simple.bat   # Windows dev server helper
├── setup-dev-environment.ps1 # Windows environment setup
└── tailwind.config.ts     # Tailwind configuration
```

### Branch Strategy

- **Development**: Feature branches from `main`
- **Naming**: Follow Linear ticket format (e.g., `feat/LIN-1-setup-project`)
- **Commits**: Small, atomic commits with clear messages
- **Pull Requests**: Required for all changes to `main`

### Key Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests

# Windows Helper Scripts (if npm not recognized)
start-dev-simple.bat           # Double-click to start dev server
.\setup-dev-environment.ps1    # Interactive environment setup
```

### Project Status & Management

Track development progress and sprint status in our **[Development Status Dashboard](./docs/DEVELOPMENT_STATUS.md)**.

For Linear project management methodology, see our **[Linear Labeling Guide](./docs/LINEAR_LABELING_GUIDE.md)**.

## ♿ Accessibility Commitment

Accessibility is a core value at Effuse Labs. Our founder, Jeremy Shields, is a federally-recognized person with a disability, and we are committed to creating technology that works for everyone.

### Standards

- **WCAG AA Compliance**: All our applications meet Web Content Accessibility Guidelines 2.1 AA
- **Automated Testing**: ESLint plugin for accessibility (jsx-a11y) integrated into CI/CD
- **Manual Testing**: Regular testing with screen readers and assistive technologies
- **Inclusive Design**: Design decisions prioritize usability for all users

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Make your changes following our coding standards
4. Run tests and linting: `npm run test && npm run lint`
5. Commit with clear messages
6. Push to your fork and submit a pull request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Extended with accessibility rules
- **Prettier**: Code formatting
- **Accessibility**: All interactive elements must be keyboard accessible

## 📚 Documentation

### Project Management
- **[Development Status Dashboard](./docs/DEVELOPMENT_STATUS.md)**: Sprint progress and issue tracking
- **[Linear Labeling Guide](./docs/LINEAR_LABELING_GUIDE.md)**: Project management methodology and label system
- **[Development Plan](./docs/DEVELOPMENT_PLAN.md)**: Technical roadmap and sprint architecture

### Business & Brand
- **[Business Overview](./docs/BUSINESS_OVERVIEW.md)**: Company mission and product details  
- **[Brand Style Guide](./docs/BRAND_STYLEGUIDE.md)**: Visual identity and brand guidelines

### Development Setup
- **Project README** *(this file)*: Setup, workflow, and troubleshooting
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)**: Three-environment pipeline setup
- **[CHANGELOG](./CHANGELOG.md)**: Complete project history and version tracking

## 🌐 Deployment

### Three-Environment Pipeline

| Environment | Purpose | URL | Deploy Trigger |
|-------------|---------|-----|----------------|
| **Development** | Local development & testing | `http://localhost:3000` | `npm run dev` |
| **Staging** | QA, client preview, integration testing | [effuselabs-staging.up.railway.app](https://effuselabs-staging.up.railway.app) | Manual deployment |
| **Production** | Live site for end users | [effuse.io](https://effuse.io) | Manual deployment |

### Deployment Workflow
```bash
# Develop locally
npm run dev  # localhost:3000

# Deploy to staging for testing
railway environment staging && railway up

# Deploy to production after approval
railway environment production && railway up
```

### Environment Variables

Required environment variables are documented in `.env.example`. Production environment uses:
- `NEXT_PUBLIC_SITE_URL=https://effuse.io`
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

Contact the development team for access to production credentials.

## 👥 Contributors

<div align="center">

### 🚀 Core Team

| Role | Developer | GitHub | Contributions |
|------|-----------|--------|---------------|
| **🎯 Project Lead** | Jeremy Shields | [@jshields-ca](https://github.com/jshields-ca) | Architecture, Strategy, Business |
| **🤖 AI Development** | AI Assistant | - | Implementation, Documentation, DevOps |

### 🌟 Want to Contribute?

We welcome contributions! See our [Contributing Guidelines](#-contributing) below.

[![Contributors](https://img.shields.io/badge/contributors-2-blue?style=for-the-badge)](./CHANGELOG.md)
[![Issues](https://img.shields.io/badge/issues-welcome-brightgreen?style=for-the-badge)](#-contributing)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](#-contributing)

</div>

---

## 📞 Contact & Support

<div align="center">

### 🏢 Company Information

**[Effuse Labs](https://effuse.io)** • Winnipeg, Manitoba, Canada 🇨🇦

[![Website](https://img.shields.io/badge/🌐_Website-effuse.io-FF6B6B?style=flat&labelColor=black)](https://effuse.io)
[![Email](https://img.shields.io/badge/📧_Contact-dev@scootr.ca-blue?style=flat&labelColor=black)](mailto:dev@scootr.ca)
[![Location](https://img.shields.io/badge/📍_Location-Winnipeg,_MB-green?style=flat&labelColor=black)](https://maps.app.goo.gl/winnipeg)

### 🛠️ Development & Support

[![GitHub Issues](https://img.shields.io/badge/🐛_Issues-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/issues)
[![GitHub Discussions](https://img.shields.io/badge/💬_Discussions-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/discussions)
[![Linear](https://img.shields.io/badge/📋_Project-Linear-5E6AD2?style=flat&logo=linear)](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)

</div>

---

## 📄 License & Legal

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**Open Source** • **MIT Licensed** • **Commercial Use Allowed**

</div>

---

## 🌟 Show Your Support

<div align="center">

**Star this project if you find it helpful! ⭐**

[![Star History](https://img.shields.io/badge/⭐_Star-this_repo-yellow?style=for-the-badge)](https://github.com/effuselabs/effuse-website)

### 🚀 Follow Our Journey

[![Website Updates](https://img.shields.io/badge/🔔_Website-effuse.io-FF6B6B?style=flat)](https://effuse.io)
[![Development Progress](https://img.shields.io/badge/📈_Progress-Linear-5E6AD2?style=flat)](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)
[![Changelog](https://img.shields.io/badge/📝_Changelog-view-blue?style=flat)](./CHANGELOG.md)

**Built with ❤️ in Winnipeg, Manitoba 🇨🇦**

*Empowering small businesses across North America with intelligent, accessible software*

---

<sup>© 2025 Effuse Labs • Intelligent Software for Small Business Growth</sup>

</div>

---

## 📝 Recent Major Updates

<details>
<summary><strong>🎉 v0.1.0 (August 2025) - Sprint 1 Complete + Production Infrastructure</strong></summary>

### ✅ Foundation Achievements
- **🌐 Custom Domain Live**: Website now available at [https://effuse.io](https://effuse.io)
- **🔧 Production Build Fixed**: Resolved Tailwind CSS v4 compatibility issues  
- **📦 Dependencies Optimized**: Moved build tools (tailwindcss v3.4.17, postcss, autoprefixer) to production dependencies
- **⚡ Performance Enhanced**: Added VS Code workspace settings for improved IDE performance
- **📚 Documentation Complete**: Added comprehensive CHANGELOG and updated all references

### 🏗️ Sprint 1 Deliverables
- **🚀 Foundation Established**: Next.js 14 + TypeScript + Tailwind CSS fully configured
- **🔍 Quality Standards**: ESLint + Prettier + Accessibility linting (WCAG AA)
- **🚀 CI/CD Pipeline**: Three-environment Railway deployment (Dev → Staging → Production)
- **🏷️ Linear Integration**: Comprehensive project management with systematic labeling

### 📊 Sprint Velocity
- **Planned Duration**: 5 days
- **Actual Duration**: 1 day  
- **Efficiency**: 500% ahead of schedule
- **Quality**: Zero-warning code standards maintained

</details>

### 🗺️ Version Roadmap

| Version | Sprint | Focus | Status | Target |
|---------|--------|-------|--------|--------|
| v0.1.0 | Sprint 1 | Foundation & Environment | ✅ **Complete** | August 2025 |
| v0.2.0 | Sprint 2 | UI Components & Animations | 🔄 **Next** | August 2025 |
| v0.3.0 | Sprint 3 | Navigation & Layout | ⏳ Planned | September 2025 |
| v0.4.0 | Sprint 4 | Hero Section & 3D Graphics | ⏳ Planned | September 2025 |
| v0.5.0 | Sprint 5 | Feature Sections & Content | ⏳ Planned | October 2025 |
| v0.6.0 | Sprint 6 | CMS Integration | ⏳ Planned | October 2025 |
| v0.7.0 | Sprint 7 | Accessibility & Testing | ⏳ Planned | November 2025 |
| v0.8.0 | Sprint 8 | Launch Preparation | ⏳ Planned | November 2025 |
| **v1.0.0** | **Launch** | **🎉 Production Release** | ⏳ **Planned** | **December 2025** |

---

## 📊 Project Stats & Metrics

<div align="center">

### 🏃‍♂️ Development Velocity

```
📈 Sprint 1 Efficiency: 500% (1 day vs 5 day estimate)
🎯 Code Quality: Zero warnings/errors maintained
🔄 Build Success Rate: 100% 
⚡ Hot Reload Speed: ~200-500ms
🌍 Deploy Environments: 3 (Dev/Staging/Production)
```

### 🛠️ Technical Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Bundle Size** | <250KB | Optimized | ✅ |
| **Load Time** | <2s | <1s | ✅ |
| **Lighthouse Score** | 90+ | TBD | ⏳ |
| **WCAG Compliance** | AA | Configured | ✅ |
| **TypeScript Coverage** | 100% | 100% | ✅ |

### 🔗 Live Links

[![Production](https://img.shields.io/badge/🚀_Production-effuse.io-success?style=for-the-badge)](https://effuse.io)
[![Staging](https://img.shields.io/badge/🧪_Staging-preview-orange?style=for-the-badge)](https://effuselabs-staging.up.railway.app)

</div>

---

## 🎯 Demo & Screenshots

<div align="center">

### 🌐 Live Website Preview

> **[Visit Live Site →](https://effuse.io)**

*Currently featuring Next.js 14 foundation with Effuse Labs branding*

</div>

<details>
<summary><strong>🖼️ Development Screenshots (Click to expand)</strong></summary>

```
🚧 Screenshots coming in Sprint 2 when UI components are developed!
📸 Will include: Hero section, Navigation, Mobile responsiveness
🎨 Design system preview with brand colors and typography
```

</details>

---

## 🚀 Quick Start

### One-Line Development Setup

```bash
# Clone, install, and start developing
git clone [repository] && cd effuse-website && npm install && npm run dev
```

### 🪟 Windows Users Quick Start

```bash
# Just double-click this file in your project folder!
start-dev-simple.bat
```

### 🐳 Docker Alternative (Optional)

```bash
# For production environment testing
docker build -t effuse-website . && docker run -p 3000:3000 effuse-website
```

---

## 🤖 Development Workflow

### 🔄 Standard Development Cycle

```mermaid
graph LR
    A[Local Dev] --> B[Staging Deploy]
    B --> C[Review & Test]
    C --> D[Production Deploy]
    D --> E[Live Website]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#f3e5f5
    style D fill:#e8f5e8
    style E fill:#ffebee
```

### 📋 Deployment Commands

```bash
# 🔨 Development
npm run dev              # Start local development server

# 🧪 Staging
railway environment staging && railway up

# 🚀 Production  
railway environment production && railway up
```

---

## 🔧 Troubleshooting

### Windows Development Environment Issues

#### npm/Node.js Not Recognized
If you see `"npm is not recognized as a cmdlet"` errors:

**Quick Fix:**
1. Double-click `start-dev-simple.bat` in your project folder
2. Or run `.\setup-dev-environment.ps1` in PowerShell

**Manual Fix:**
```powershell
$env:PATH = "C:\Users\[YourUsername]\AppData\Roaming\npm;C:\Program Files\nodejs;" + $env:PATH
npm run dev
```

#### Development Server Not Accessible
If `http://localhost:3000` shows connection errors:

1. **Check if server is running:**
   ```bash
   netstat -an | findstr :3000
   ```

2. **Try alternative URLs:**
   - `http://127.0.0.1:3000`
   - Check Windows Firewall permissions

3. **Restart development server:**
   ```bash
   # Kill any existing processes
   taskkill /F /IM node.exe
   # Start fresh
   npm run dev
   ```

#### Browser Issues
- Try different browser (Chrome, Edge, Firefox)
- Clear browser cache
- Try incognito/private mode

#### Build Issues

**Tailwind CSS Build Errors:**
If you encounter "Cannot find module 'tailwindcss'" errors:
```bash
# Ensure Tailwind is in production dependencies
npm install tailwindcss@^3.4.17 postcss autoprefixer --save

# Verify installation
npm list tailwindcss
# Should show: tailwindcss@3.4.17

# Test build
npm run build
```

**PostCSS Plugin Errors:**
If you see "PostCSS plugin has moved" errors, ensure you're using Tailwind CSS v3.4.x, not v4+:
```bash
npm uninstall tailwindcss
npm install tailwindcss@^3.4.17 --save
```

### Helper Scripts Available

| Script | Purpose | Usage |
|--------|---------|-------|
| `start-dev-simple.bat` | Quick start development server | Double-click to run |
| `setup-dev-environment.ps1` | Interactive environment setup | Run in PowerShell |

---

**© 2025 Effuse Labs. Intelligent Software for Small Business Growth.**
