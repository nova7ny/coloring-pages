#!/bin/bash
set -e

echo "=== Starting Coloring Pages VPS Deployment ==="

# 1. Ensure basic system packages are up-to-date
echo "Updating packages..."
sudo apt-get update -y

# 2. Install Node.js (v20.x) if not already present
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing Node.js v20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed: $(node -v)"
fi

# 3. Install Nginx if not already present
if ! command -v nginx &> /dev/null; then
    echo "Nginx not found. Installing Nginx..."
    sudo apt-get install -y nginx
else
    echo "Nginx is already installed."
fi

# 4. Install PM2 globally if not already present
if ! command -v pm2 &> /dev/null; then
    echo "PM2 not found. Installing PM2 globally..."
    sudo npm install -g pm2
else
    echo "PM2 is already installed."
fi

# 5. Install Certbot if not already present
if ! command -v certbot &> /dev/null; then
    echo "Certbot not found. Installing Certbot..."
    sudo apt-get install -y certbot python3-certbot-nginx
else
    echo "Certbot is already installed."
fi

# 6. Install Project Dependencies
echo "Installing project dependencies..."
npm install

# 7. Generate Prisma client
echo "Generating Prisma Client..."
npx prisma generate

# 8. Compile the Next.js Production Build
echo "Building the Next.js production site..."
npm run build

# 9. Configure Nginx — HTTP redirect + HTTPS with Let's Encrypt
echo "Configuring Nginx (HTTP -> HTTPS redirect + SSL reverse proxy)..."

CERT_DIR="/etc/letsencrypt/live/coloringpalace.cloud"

if [ -d "$CERT_DIR" ]; then
    # SSL certificates exist — write the full secure config
    echo "  SSL certificates found. Writing HTTPS config..."
    sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
# Redirect all HTTP traffic to HTTPS
server {
    listen 80;
    server_name coloringpalace.cloud www.coloringpalace.cloud;
    return 301 https://\$host\$request_uri;
}

# HTTPS — proxy to Next.js with SSL and security headers
server {
    listen 443 ssl;
    server_name coloringpalace.cloud www.coloringpalace.cloud;

    ssl_certificate     $CERT_DIR/fullchain.pem;
    ssl_certificate_key $CERT_DIR/privkey.pem;

    # Modern SSL settings
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options            "SAMEORIGIN"                          always;
    add_header X-Content-Type-Options     "nosniff"                             always;
    add_header Referrer-Policy            "strict-origin-when-cross-origin"     always;

    # Allow large file uploads (e.g. images)
    client_max_body_size 20M;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade    \$http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host       \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
else
    # No certificates yet — write plain HTTP config so the site still works
    # Run: sudo certbot --nginx -d coloringpalace.cloud -d www.coloringpalace.cloud
    echo "  WARNING: SSL certificates not found at $CERT_DIR."
    echo "  Writing HTTP-only config. Run Certbot to enable HTTPS:"
    echo "    sudo certbot --nginx -d coloringpalace.cloud -d www.coloringpalace.cloud"
    sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
server {
    listen 80;
    server_name coloringpalace.cloud www.coloringpalace.cloud;

    client_max_body_size 20M;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade    \$http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host       \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
fi

# 10. Test and Restart Nginx
echo "Testing and restarting Nginx..."
sudo nginx -t
sudo systemctl restart nginx

# 11. Start Next.js with PM2 process manager
echo "Starting the Next.js application server under PM2..."
pm2 delete coloring-pages 2>/dev/null || true
pm2 start npm --name "coloring-pages" -- start
pm2 save

echo ""
echo "=== VPS Deployment Successfully Completed! ==="
echo "Visit your secure website at: https://coloringpalace.cloud"
