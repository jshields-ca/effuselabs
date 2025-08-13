<div align="center">

# 🚀 Effuse Labs

### *Intelligent Software for Small Business Growth*

[![Version](https://img.shields.io/badge/version-0.5.0-blue?style=for-the-badge)](./CHANGELOG.md)
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

**Sprint 4:** ✅ COMPLETED • 100/98 Lighthouse • Sprint 5 in progress (monitoring, analytics, content)

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

```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
# Optional: SANITY_READ_TOKEN=... (private dataset)
```



## Commands

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

<!-- Docker development removed: not used in current workflow -->

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
- **Project README** *(this file)*: Setup, workflow, and troubleshooting
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)**: Three-environment pipeline setup
- **[CHANGELOG](./CHANGELOG.md)**: Complete project history and version tracking

## Deployment

- **Development**: http://localhost:3000
- **Preview**: Auto-deployed on feature branches (Vercel)
- **Production**: https://effuse.io (v0.4.1 - Lighthouse 81)

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
[![Email](https://img.shields.io/badge/📧_Contact-hello@effuse.io-blue?style=flat&labelColor=black)](mailto:hello@effuse.io)
[![Location](https://img.shields.io/badge/📍_Location-Winnipeg,_MB-green?style=flat&labelColor=black)](https://maps.app.goo.gl/winnipeg)

### 🛠️ Development & Support

[![GitHub Issues](https://img.shields.io/badge/🐛_Issues-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/issues)
[![GitHub Discussions](https://img.shields.io/badge/💬_Discussions-GitHub-black?style=flat&logo=github)](https://github.com/effuselabs/effuse-website/discussions)
[![Linear](https://img.shields.io/badge/📋_Project-Linear-5E6AD2?style=flat&logo=linear)](https://linear.app/scootr-ca/project/effuseio-7194bedc3fdf)

</div>

---

<div align="center">
<sup>© 2025 Effuse Labs • Intelligent Software for Small Business Growth</sup>
</div>

For detailed project updates and release history, see our [**CHANGELOG**](./CHANGELOG.md) and [**Development Status Dashboard**](./docs/DEVELOPMENT_STATUS.md).

<!-- Version roadmap moved to Development Status dashboard to avoid duplication -->

---

<!-- Metrics moved to Development Status dashboard; keep links here: -->
[![Production](https://img.shields.io/badge/🚀_Production-effuse.io-success?style=for-the-badge)](https://effuse.io)
[![Preview](https://img.shields.io/badge/🧪_Preview-vercel-orange?style=for-the-badge)](https://effuselabs.vercel.app)

---

<!-- Removed demo/screenshots and extra quick start to keep concise. -->

<!-- Development workflow diagram removed. -->

<!-- Workflow diagram removed -->

<!-- Deployment command block removed (Vercel auto-deploys on push). -->

<!-- Deployment commands and platform bullets removed (auto on push) -->

<!-- Troubleshooting removed; keep README concise. -->

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

---
