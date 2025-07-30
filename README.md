# Effuse Labs
## Intelligent Software for Small Business Growth

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Accessibility](https://img.shields.io/badge/accessibility-WCAG%20AA-green)
![Deploy](https://img.shields.io/badge/deploy-Railway-purple)

Effuse Labs is a modern technology company based in Winnipeg, Manitoba, dedicated to building intelligent, industry-specific software (Vertical SaaS) for underserved small and medium-sized businesses across North America. Our mission is to pour out a continuous stream of innovative ideas, elegant code, and intelligent solutions that democratize the power of data for local businesses.

## 🌟 About Effuse Labs

The name 'Effuse Labs' is derived from the Latin *effundere* (effusus), meaning "to pour out." We exist to **pour out** innovative solutions that transform operational burdens into competitive strengths for small businesses.

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
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom brand configuration
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for fluid interactions
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for abstract visuals
- **CMS**: [Sanity.io](https://www.sanity.io/) for headless content management
- **Deployment**: [Railway](https://railway.app/) with automated CI/CD
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

### Docker Development (Optional)
```bash
# Build and run with Docker
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
```

### Project Status
Track development progress and sprint status in our **[Development Status Dashboard](./docs/DEVELOPMENT_STATUS.md)**.

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

- **[Business Overview](./docs/BUSINESS_OVERVIEW.md)**: Company mission and product details
- **[Development Plan](./docs/DEVELOPMENT_PLAN.md)**: Technical roadmap and architecture
- **[Development Status](./docs/DEVELOPMENT_STATUS.md)**: Sprint progress and issue tracking
- **[Brand Style Guide](./docs/BRAND_STYLEGUIDE.md)**: Visual identity and brand guidelines

## 🌐 Deployment

### Environments
- **Development**: Local development server
- **Preview**: Automatic deployment on PR creation (Railway)
- **Production**: Automatic deployment on merge to `main` (Railway)

### Environment Variables
Required environment variables are documented in `.env.example`. Contact the development team for access to production credentials.

## 📞 Contact & Support

### Company Information
- **Website**: [effuse.io](https://effuse.io) *(under development)*
- **Location**: Winnipeg, Manitoba, Canada
- **Founder**: Jeremy Shields

### Development Team
- **Technical Lead**: Jeremy Shields
- **Email**: dev@scootr.ca
- **GitHub**: [@jshields-ca](https://github.com/jshields-ca)

### Support
- **Issues**: [GitHub Issues](https://github.com/effuselabs/effuse-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/effuselabs/effuse-website/discussions)
- **Linear**: Internal project management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love in Winnipeg, Manitoba 🇨🇦
- Committed to empowering small businesses across North America
- Dedicated to creating accessible, intelligent software for everyone

---

**© 2025 Effuse Labs. Intelligent Software for Small Business Growth.**
