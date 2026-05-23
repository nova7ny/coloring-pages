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

# 5. Install Project Dependencies
echo "Installing project dependencies..."
npm install

# 6. Generate Prisma client
echo "Generating Prisma Client..."
npx prisma generate

# 7. Compile the Next.js Production Build
echo "Building the Next.js production site..."
npm run build

# 8. Configure Nginx Server Blocks
echo "Configuring Nginx reverse proxy..."
sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
server {
    listen 80;
    server_name 2.24.121.71;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 9. Test and Restart Nginx
echo "Restarting Nginx..."
sudo nginx -t
sudo systemctl restart nginx

# 10. Start Next.js with PM2 process manager
echo "Starting the Next.js application server under PM2..."
pm2 delete coloring-pages 2>/dev/null || true
pm2 start npm --name "coloring-pages" -- start
pm2 save

echo "=== VPS Deployment Successfully Completed! ==="
echo "You can now visit your website at: http://2.24.121.71"
