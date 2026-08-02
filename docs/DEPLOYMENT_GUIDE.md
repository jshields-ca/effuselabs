# Deployment Guide: Vercel Multi-Environment Pipeline

## 🏗️ Environment Architecture

We use Vercel's modern deployment pipeline with automatic staging via preview deployments:

```text
Development (Local) → Preview (Auto-staging) → Production (Vercel)
```

| Environment           | Purpose                                 | URL                                          | Trigger               |
| --------------------- | --------------------------------------- | -------------------------------------------- | --------------------- |
| **Development**       | Local development & testing             | `http://localhost:3000`                      | `npm run dev`         |
| **Preview (Staging)** | QA, client preview, integration testing | `https://effuselabs-git-[branch].vercel.app` | Any branch push/PR    |
| **Production**        | Live site for end users                 | `https://effuse.io`                          | Push to `main` branch |

<!-- Removed platform comparison to streamline guide -->

## Environment Variables Setup

### Local Development (`.env.local`)

Create `.env.local` file in the project root:

```bash
# Environment Configuration
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS Configuration (to be added in Sprint 6)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Analytics Configuration (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### ⚡ Optimized Local Development

#### Recommended: Direct Next.js Development

```bash
# Start development server (fast hot reload)
npm run dev
# → http://localhost:3000 (instant reload on file changes)

# Build and test production locally (when needed)
npm run build
npm run start
```

<!-- Removed explanatory benefits list to keep concise -->

<!-- Removed Docker alternative; not used in current workflow -->

<!-- Windows-specific setup removed (covered in README if needed) -->

#### Troubleshooting Steps

1. **Server not accessible at localhost:3000:**

   ```bash
   # Check if port is in use
   netstat -an | findstr :3000

   # Kill existing processes if needed
   taskkill /F /IM node.exe

   # Try alternative URL
   # http://127.0.0.1:3000
   ```

2. **Windows Firewall issues:**
   - Allow Node.js through Windows Firewall when prompted
   - Try different browsers (Chrome, Edge, Firefox)
   - Check antivirus software isn't blocking localhost

### Preview Environment Variables (Vercel)

```bash
NODE_ENV=preview
NEXT_PUBLIC_SITE_URL=https://effuselabs-git-[branch].vercel.app
NEXT_TELEMETRY_DISABLED=1
```

### Production Environment Variables (Vercel)

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://effuse.io
NEXT_TELEMETRY_DISABLED=1
```

<!-- Removed verbose workflow; Vercel auto-deploys on push -->

### No Environment Switching Needed

**With Vercel:**

- 🔄 **Automatic preview deployments** for every branch
- 🔄 **Automatic production deployments** on main branch push
- 🔄 **No manual commands** - just push your code
- 🔄 **Environment variables** managed in Vercel dashboard

### Testing Strategy

| Environment                | Testing Focus                                      |
| -------------------------- | -------------------------------------------------- |
| **Development**            | Unit tests, component development, rapid iteration |
| **Preview (Auto-staging)** | Integration testing, QA review, client feedback    |
| **Production**             | Performance monitoring, user analytics, stability  |

<!-- Removed initial setup steps to reduce duplication with Vercel docs -->

## Environment Variables in Vercel

Set environment variables in **Vercel Dashboard > Project > Settings > Environment Variables**:

**Production Environment:**

- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://effuse.io`
- `NEXT_TELEMETRY_DISABLED=1`

**Preview Environment:**

- `NODE_ENV=preview`
- `NEXT_PUBLIC_SITE_URL=https://effuselabs-git-branch.vercel.app`
- `NEXT_TELEMETRY_DISABLED=1`

**Future Variables (Sprint 6):**

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

### 3. Automatic Deployments

**Vercel automatically handles all deployments:**

- ✅ **Push to any branch** → Preview deployment
- ✅ **Push to main branch** → Production deployment
- ✅ **Pull requests** → Preview comments with deployment links
- ✅ **Zero configuration** - just push to GitHub

### 4. Preview (Staging) Environments

**Every branch gets automatic staging:**

- 🌟 **Unique URL per branch**: `https://effuselabs-git-[branch].vercel.app`
- 🌟 **Pull request integration**: Preview links in PR comments
- 🌟 **Isolated testing**: Each feature branch has its own staging
- 🌟 **Instant updates**: New commits trigger automatic redeployment

<!-- Removed custom domain setup; domain already configured -->

### 3. SSL & Security Headers

- ✅ **Automatic SSL** - Vercel provisions and renews certificates
- ✅ **HTTPS redirect** - HTTP automatically redirects to HTTPS
- ✅ **HSTS headers** - Enforced via Next.js `headers()` in `next.config.js`

## Deployment Commands (Optional)

**Vercel CLI** (after `npm install -g vercel`):

```bash
# Login to Vercel
vercel login

# Deploy current branch to preview
vercel

# Deploy to production (main branch only)
vercel --prod

# Check deployment status
vercel list

# View deployment logs
vercel logs [deployment-url]
```

**Note:** CLI deployment is optional - GitHub integration handles everything automatically!

## Environment Variable Management

**Development (.env.local):**

```bash
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Vercel Dashboard Settings:**

- **Production**: Applied to `main` branch deployments
- **Preview**: Applied to all other branch deployments
- **Development**: For local development (not used by Vercel)
