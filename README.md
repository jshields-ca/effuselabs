# 🚀 Effuse Labs

## _Intelligent Software for Small Business Growth_

[![Version](https://img.shields.io/badge/version-0.5.3+-blue?style=for-the-badge)](./CHANGELOG.md)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%20desktop%20%7C%2098%20mobile-orange?style=for-the-badge)](https://web.dev/lighthouse/)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat&logo=node.js)](https://nodejs.org/)
[![ESLint](https://img.shields.io/badge/ESLint-enabled-4B32C3?style=flat&logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%20AA-green?style=flat)](https://www.w3.org/WAI/WCAG2AA-Conformance)

[![Website](https://img.shields.io/badge/🌐_Production-effuse.io-FF6B6B?style=flat)](https://effuse.io)
[![Staging](https://img.shields.io/badge/🧪_Preview-vercel.app-orange?style=flat)](https://effuselabs.vercel.app)
[![Documentation](https://img.shields.io/badge/📚_Docs-complete-blue?style=flat)](./docs/)

---

**Sprint 6:** 🔄 IN PROGRESS • Component Polish ✅ • Typography Enhancement next • 100/98 Lighthouse maintained

</div>

## Contents

- Quick start
- Environment
- Commands
- Documentation
- Deployment

---

Effuse Labs is a modern technology company based in Winnipeg, Manitoba, dedicated to building intelligent, industry-specific software (Vertical SaaS) for underserved small and medium-sized businesses across North America. Our mission is to pour out a continuous stream of innovative ideas, elegant code, and intelligent solutions that democratize the power of data for local businesses.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment

Create `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
# Optional: SANITY_READ_TOKEN=... (private dataset)
```

## Commands

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- VS Code (recommended IDE with extension support)
- Docker (optional, for containerized development)

**VS Code Setup:** This project includes optimized VS Code configuration with recommended extensions for the best development experience.

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

4. **Run development server**

   ```bash
   npm run dev      # start dev server
   npm run build    # production build
   npm run start    # run production server
   npm run lint     # lint code
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Windows PATH Fix (if needed)**

   If you get "npm is not recognized" errors, fix PATH for the current PowerShell session:

   ```powershell
   $env:PATH = "$env:USERPROFILE\AppData\Roaming\npm;C:\\Program Files\\nodejs;" + $env:PATH
   npm run dev
   ```

### ⚡ **Optimized Development Workflow**

#### Recommended: Direct Next.js (Fastest)

```bash
npm run dev     # Start with hot reload → http://localhost:3000
npm run build   # Test production build locally
npm run start   # Test production server locally
```

#### Why Direct Next.js?

- ⚡ Faster hot reload (200-500ms vs 2-5s)
- 🐛 Better debugging and IDE integration
- 💾 Lower resource usage
- 🎯 Simpler daily workflow

<!-- Docker development removed: not used in current workflow -->

## 💻 Development Workflow

### 🚀 VS Code Setup (Recommended)

This project is optimized for **Visual Studio Code** with a comprehensive extension setup:

#### **Essential Extensions (Auto-Installed)**

When you open this workspace, VS Code will prompt you to install our recommended extensions:

- **Core Development**: Tailwind CSS IntelliSense, ES7+ React/Redux snippets, Prettier, ESLint
- **Project Management**: Linear integration, GitLens for enhanced Git workflows
- **Quality Assurance**: axe Accessibility Linter (WCAG AA), WebHint performance analysis
- **AI & Productivity**: GitHub Copilot, Copilot Chat
- **Documentation**: Markdown All-in-One, Markdown Lint

#### **Optimized Settings**

Our `.vscode/settings.json` includes:

- **Performance optimization** for large Next.js projects
- **Auto-formatting** on save with Prettier
- **ESLint integration** with accessibility rules
- **Tailwind IntelliSense** for your brand colors and utilities
- **Linear integration** for issue management

#### **Getting Started**

1. Open the project in VS Code
2. Accept the prompt to install recommended extensions
3. Extensions will auto-configure with project settings
4. Start coding with enhanced IntelliSense and quality tools!

### Brand Color System

Effuse Labs uses a comprehensive brand color system for consistent, premium UI styling. All colors are available as Tailwind classes and documented here for reference.

#### Effuse Labs Core Palette

| Name         | Hex     | Tailwind Class             | Usage                        |
| ------------ | ------- | -------------------------- | ---------------------------- |
| Slate Grey   | #2E3440 | effuse-slate               | Backgrounds, text, surfaces  |
| Effuse Teal  | #22C5C3 | effuse-teal                | Accents, buttons, highlights |
| Lumina Gold  | #FFD25A | effuse-gold, lumina-gold   | Accents, CTAs, highlights    |
| Effuse Coral | #FF7A5A | effuse-coral, lumina-coral | Secondary accent, gradients  |
| Off-Black    | #1D1D21 | effuse-off-black           | Text, backgrounds            |
| Medium Grey  | #808285 | effuse-medium-grey         | Text, surfaces               |
| Light Grey   | #F1F3F5 | effuse-light-grey          | Backgrounds, surfaces        |
| White        | #FFFFFF | effuse-white               | Backgrounds, text            |

#### Gradients

| Name                  | Tailwind Class  | Example Usage                                                      |
| --------------------- | --------------- | ------------------------------------------------------------------ |
| Effuse Gradient       | effuse-gradient | bg-gradient-to-r from-[var(--tw-gradient-stops)]                   |
| Lumina Gradient       | lumina-gradient | bg-gradient-to-r from-lumina-gradient-start to-lumina-gradient-end |
| SilentLedger Gradient | sl-gradient     | bg-gradient-to-r from-sl-blue to-sl-red                            |

#### Lumina Product Palette

| Name      | Hex     | Tailwind Class | Usage                       |
| --------- | ------- | -------------- | --------------------------- |
| Gold      | #FFD25A | lumina-gold    | Primary actions, highlights |
| Coral     | #FF7A5A | lumina-coral   | Secondary accent, gradients |
| Deep Teal | #0B2B33 | lumina-teal    | Backgrounds, accents        |

#### SilentLedger Palette

| Name             | Hex     | Tailwind Class | Usage                  |
| ---------------- | ------- | -------------- | ---------------------- |
| Dark BG          | #100B00 | sl-bg-dark     | Dark mode backgrounds  |
| Light BG         | #fcfcfc | sl-bg-light    | Light mode backgrounds |
| Primary Red      | #ff2525 | sl-red         | Primary actions        |
| Secondary Blue   | #1600e8 | sl-blue        | Secondary accents      |
| Data Viz Purple  | #630ca7 | sl-purple      | Data visualization     |
| Data Viz Magenta | #b11866 | sl-magenta     | Data visualization     |

#### Usage Guidelines

- Use Effuse Labs palette for all site-wide backgrounds, navigation, and footers.
- Use Lumina palette and gradients for Lumina product pages and CTAs.
- Use SilentLedger palette for SilentLedger product pages, actions, and data visualizations.
- Gradients are recommended for hero backgrounds, section dividers, and premium accents.
- Maintain accessibility by testing color contrast and using visible focus states.

For full details and best practices, see [docs/BRAND_COLOR_SYSTEM.md](./docs/BRAND_COLOR_SYSTEM.md) and [docs/BRAND_STYLEGUIDE.md](./docs/BRAND_STYLEGUIDE.md).

### Project Structure

```text
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
└── tailwind.config.ts     # Tailwind configuration
```

### Branch Strategy

- **Development**: Feature branches from `main`
- **Naming**: Follow Linear ticket format (e.g., `feat/LIN-1-setup-project`)
- **Commits**: Small, atomic commits with clear messages
- **Pull Requests**: Required for all changes to `main`

### Key Commands

```bash
npm run dev
npm run build && npm run start
npm run lint && npm run type-check
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

<!-- Contributing section removed: solo developer + AI workflow -->

## 📚 Documentation

### Project Management

- **[Development Status Dashboard](./docs/DEVELOPMENT_STATUS.md)**: Sprint progress and issue tracking
- **[Linear Labeling Guide](./docs/LINEAR_LABELING_GUIDE.md)**: Project management methodology and label system
- **[Development Plan](./docs/DEVELOPMENT_PLAN.md)**: Technical roadmap and sprint architecture

### Business & Brand

- **[Business Overview](./docs/BUSINESS_OVERVIEW.md)**: Company mission and product details
- **[Brand Style Guide](./docs/BRAND_STYLEGUIDE.md)**: Visual identity and brand guidelines

### Development Setup

- **Project README** _(this file)_: Setup, workflow, and troubleshooting
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)**: Three-environment pipeline setup
- **[CHANGELOG](./CHANGELOG.md)**: Complete project history and version tracking

## Deployment

- **Development**: <http://localhost:3000>
- **Preview**: Auto-deployed on feature branches (Vercel)
- **Production**: <https://effuse.io> (v0.4.1 - Lighthouse 81)

### Environment Variables

Required environment variables are documented in `.env.example`. Production environment uses:

- `NEXT_PUBLIC_SITE_URL=https://effuse.io`
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

Contact the development team for access to production credentials.

## 👥 Contributors

### 🚀 Core Team

| Role                  | Developer      | GitHub                                         | Contributions                         |
| --------------------- | -------------- | ---------------------------------------------- | ------------------------------------- |
| **🎯 Project Lead**   | Jeremy Shields | [@jshields-ca](https://github.com/jshields-ca) | Architecture, Strategy, Business      |
| **🤖 AI Development** | AI Assistant   | -                                              | Implementation, Documentation, DevOps |

---

## 📞 Contact & Support

### 🏢 Company Information

**[Effuse Labs](https://effuse.io)** • Winnipeg, Manitoba, Canada 🇨🇦

[![Website](https://img.shields.io/badge/🌐_Website-effuse.io-FF6B6B?style=flat&labelColor=black)](https://effuse.io)
[![Email](https://img.shields.io/badge/📧_Contact-hello@effuse.io-blue?style=flat&labelColor=black)](mailto:hello@effuse.io)
[![Location](https://img.shields.io/badge/📍_Location-Winnipeg,_MB-green?style=flat&labelColor=black)](https://maps.app.goo.gl/winnipeg)

### 🛠️ Development & Support

[![GitHub Issues](https://img.shields.io/badge/🐛_Issues-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/issues)
[![GitHub Discussions](https://img.shields.io/badge/💬_Discussions-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/discussions)
[![Linear](https://img.shields.io/badge/📋_Project-Linear-5E6AD2?style=flat&logo=linear)](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)

---

© 2025 Effuse Labs • Intelligent Software for Small Business Growth

For detailed project updates and release history, see our [**CHANGELOG**](./CHANGELOG.md) and [**Development Status Dashboard**](./docs/DEVELOPMENT_STATUS.md).
