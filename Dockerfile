# Use Node.js 20 on Debian slim for stable Next/SWC glibc binaries
FROM node:20-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
ENV NEXT_DISABLE_SWC_WORKER=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_CMS_DURING_BUILD=1
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs || true
RUN adduser --system --uid 1001 nextjs || true

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Start the application
CMD ["node", "server.js"]