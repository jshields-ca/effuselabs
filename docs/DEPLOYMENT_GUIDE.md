# Deployment Guide: Vercel Multi-Environment Pipeline

## 🏗️ Environment Architecture

We use Vercel's modern deployment pipeline with automatic staging via preview deployments:

```
Development (Local) → Preview (Auto-staging) → Production (Vercel)
```

| Environment | Purpose | URL | Trigger |
|-------------|---------|-----|---------|
| **Development** | Local development & testing | `http://localhost:3000` | `npm run dev` |
| **Preview (Staging)** | QA, client preview, integration testing | `https://effuselabs-git-[branch].vercel.app` | Any branch push/PR |
| **Production** | Live site for end users | `https://effuse.io` | Push to `main` branch |

## 🌟 Vercel Advantages Over Railway

**Automatic Staging:**
- ✅ **Every branch gets a preview URL** - no manual staging deploys
- ✅ **Pull Request previews** - stakeholders can review before merge
- ✅ **Branch isolation** - test features independently

**Performance:**
- ✅ **Global Edge Network** - faster loading worldwide
- ✅ **Automatic optimizations** - images, fonts, code splitting
- ✅ **Built for Next.js** - zero configuration needed

**Developer Experience:**
- ✅ **Instant deployments** - 30 seconds vs 5+ minutes
- ✅ **Real-time collaboration** - share preview links instantly
- ✅ **Better debugging** - detailed build logs and error reporting

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

### ⚡ **Optimized Local Development**

**Recommended: Direct Next.js Development**
```bash
# Start development server (fast hot reload)
npm run dev
# → http://localhost:3000 (instant reload on file changes)

# Build and test production locally (when needed)
npm run build
npm run start
```

**Benefits of Direct Next.js:**
- ⚡ **Faster Hot Reload**: 200-500ms vs 2-5s with Docker
- 🐛 **Better Debugging**: Direct Node.js debugging, IDE integration
- 💾 **Lower Resource Usage**: No Docker Desktop overhead
- 🎯 **Simpler Workflow**: Just `npm run dev` and start coding

**Docker Alternative (Optional):**
```bash
# Only use when testing exact production environment
docker build -t effuse-website .
docker run -p 3000:3000 effuse-website
```

Docker is available but **not recommended for daily development** due to slower hot reload and added complexity.

### 🪟 **Windows-Specific Setup**

If you encounter `"npm is not recognized"` errors on Windows, use the provided helper scripts:

**Quick Solution:**
```bash
# Option 1: Double-click this file in your project folder
start-dev-simple.bat

# Option 2: Run in PowerShell for interactive setup
.\setup-dev-environment.ps1
```

**Manual PATH Fix:**
```powershell
# Add Node.js and npm to current session PATH
$env:PATH = "C:\Users\[YourUsername]\AppData\Roaming\npm;C:\Program Files\nodejs;" + $env:PATH

# Verify installation
node --version  # Should show v24.5.0 or similar
npm --version   # Should show v11.4.2 or similar

# Start development server
npm run dev
```

**Troubleshooting Steps:**
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

## 🚀 Vercel Deployment Workflow

### Modern Git Workflow with Automatic Staging

```bash
# 1. Feature Development (Local)
git checkout -b feature/new-component
# ... develop and test locally on localhost:3000
npm run dev

# 2. Automatic Preview Deployment
git push origin feature/new-component
# ✨ Vercel automatically creates preview URL:
# https://effuselabs-git-feature-new-component.vercel.app

# 3. Create Pull Request & Share Preview
# GitHub PR will show Vercel preview link automatically
# Share with stakeholders for review

# 4. Automatic Production Deployment
git checkout main
git merge feature/new-component
git push origin main
# ✨ Vercel automatically deploys to production:
# https://effuse.io
```

### No Environment Switching Needed!

**With Vercel:**
- 🔄 **Automatic preview deployments** for every branch
- 🔄 **Automatic production deployments** on main branch push  
- 🔄 **No manual commands** - just push your code
- 🔄 **Environment variables** managed in Vercel dashboard

### Testing Strategy

| Environment | Testing Focus |
|-------------|---------------|
| **Development** | Unit tests, component development, rapid iteration |
| **Preview (Auto-staging)** | Integration testing, QA review, client feedback |
| **Production** | Performance monitoring, user analytics, stability |

## Vercel Deployment Steps

### 1. Initial Vercel Setup

1. **Create Vercel account** at [vercel.com](https://vercel.com)
2. **Connect GitHub account** for seamless integration
3. **Import repository** - select your `effuselabs` repo
4. **Deploy** - Vercel auto-detects Next.js settings

### 2. Environment Variables in Vercel

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

## Custom Domain Setup (effuse.io)

### 1. Configure Domain in Vercel

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add custom domain**: `effuse.io`
3. **Add www subdomain**: `www.effuse.io` (optional)
4. **Vercel provides DNS instructions**

### 2. Update DNS Settings

**Option A: Use Vercel Nameservers (Recommended)**
- Point your domain's nameservers to Vercel
- Vercel manages all DNS automatically
- Includes SSL, CDN, and performance optimizations

**Option B: CNAME/A Records**
- Keep your current DNS provider
- Add CNAME record: `effuse.io` → `cname.vercel-dns.com`
- Add A record: `effuse.io` → Vercel's IP addresses

### 3. SSL Certificate

- ✅ **Automatic SSL** - Vercel provisions and renews certificates
- ✅ **HTTPS redirect** - HTTP automatically redirects to HTTPS
- ✅ **HSTS headers** - Security headers included automatically

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