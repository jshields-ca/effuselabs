# Deployment Guide: Three-Environment Railway Pipeline

## 🏗️ Environment Architecture

We use a professional three-environment deployment pipeline:

```
Development (Local) → Staging (Railway) → Production (Railway)
```

| Environment | Purpose | URL |
|-------------|---------|-----|
| **Development** | Local development & testing | `http://localhost:3000` |
| **Staging** | QA, client preview, integration testing | `https://effuselabs-staging.up.railway.app` |
| **Production** | Live site for end users | `https://effuse.io` |

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

### Staging Environment (Railway)
```bash
NODE_ENV=staging
NEXT_PUBLIC_SITE_URL=https://effuselabs-staging.up.railway.app
NEXT_TELEMETRY_DISABLED=1
```

### Production Environment (Railway)
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://effuse.io
NEXT_TELEMETRY_DISABLED=1
```

## 🚀 Deployment Workflow

### Recommended Git Workflow

```bash
# 1. Feature Development (Local)
git checkout -b feature/new-component
# ... develop and test locally on localhost:3000
npm run dev

# 2. Deploy to Staging for QA
git push origin feature/new-component
# Manually deploy to staging for testing:
railway environment staging
railway up

# 3. Share staging link for review
# https://effuselabs-staging.up.railway.app

# 4. After approval, merge to main
git checkout main
git merge feature/new-component
git push origin main
# Deploy to production:
railway environment production
railway up
```

### Environment Switching

```bash
# Switch to staging environment
railway environment staging
railway status    # Verify you're in staging
railway up        # Deploy to staging

# Switch to production environment  
railway environment production
railway status    # Verify you're in production
railway up        # Deploy to production
```

### Testing Strategy

| Environment | Testing Focus |
|-------------|---------------|
| **Development** | Unit tests, component development, rapid iteration |
| **Staging** | Integration testing, QA review, client feedback |
| **Production** | Performance monitoring, user analytics, stability |

## Railway Deployment Steps

### 1. Initial Railway Setup

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize Railway project:
   ```bash
   railway init
   ```

4. Link to your Railway project:
   ```bash
   railway link
   ```

### 2. Environment Variables in Railway

Set the following environment variables in Railway dashboard:

**Production Environment:**
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://your-domain.railway.app`
- `NEXT_TELEMETRY_DISABLED=1`

**Future Variables (Sprint 6):**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

### 3. Automatic Deployments

Railway automatically deploys when you push to your main branch. Configuration is handled by:
- `railway.toml` - Railway-specific configuration
- `Dockerfile` - Container configuration for production builds

### 4. Preview Environments

Railway automatically creates preview environments for pull requests when connected to GitHub.

## Manual Deployment Commands

```bash
# Deploy current branch
railway up

# Deploy specific service
railway up --service frontend

# Check deployment status
railway status

# View logs
railway logs
```

## Health Checks

The application includes health check configuration in `railway.toml`:
- Path: `/`
- Timeout: 100 seconds
- Restart policy: On failure (max 3 retries)

## Domain Configuration

1. In Railway dashboard, go to your service
2. Navigate to Settings > Domains
3. Add your custom domain or use the provided Railway domain
4. Update `NEXT_PUBLIC_SITE_URL` environment variable accordingly