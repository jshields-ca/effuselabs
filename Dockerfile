# Use nginx to serve static export
FROM node:20-bullseye-slim AS builder

ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_CMS_DURING_BUILD=1
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

# Production nginx image
FROM nginx:alpine

# Copy static files to nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Create a startup script that configures nginx with Railway's PORT
COPY <<'EOF' /start.sh
#!/bin/sh
export PORT=${PORT:-80}
cat > /etc/nginx/conf.d/default.conf <<NGINXEOF
server {
    listen $PORT;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
NGINXEOF

exec nginx -g "daemon off;"
EOF

RUN chmod +x /start.sh

EXPOSE $PORT
CMD ["/start.sh"]