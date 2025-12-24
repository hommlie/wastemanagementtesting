# Email Integration Deployment Guide

## Local Testing Setup (localhost)

### 1. Create `.env.local` in frontend folder:
```
VITE_API_URL=http://localhost:4000
```

### 2. Start the backend server:
```bash
cd server
npm install
node index.js
# Server runs on http://localhost:4000
```

### 3. Start the frontend:
```bash
npm run dev
# Frontend runs on http://localhost:5173 or 5174
```

### 4. Optional: Use Nginx for local testing
```bash
# Copy nginx config
cp server/nginx.conf.local /etc/nginx/sites-available/ecosphere-local

# Enable site
sudo ln -s /etc/nginx/sites-available/ecosphere-local /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

Access at `http://localhost` instead of `http://localhost:5174`

---

## Production Deployment (ecospherewm.com)

### 1. On your server, set up the directory structure:
```bash
mkdir -p /var/www/ecosphere/{frontend,server}
```

### 2. Deploy backend:
```bash
# Copy server files
scp -r server/* user@ecospherewm.com:/var/www/ecosphere/server/

# SSH into server
ssh user@ecospherewm.com
cd /var/www/ecosphere/server

# Install dependencies
npm install

# Create .env with your email credentials
cat > .env << EOF
EMAIL=solutions@hommlie.com
EMAIL_PASSWORD=Hommlie.Solutions@11222
EMAIL_APP_PASSWORD=qwja rohf maxd lbmb
EOF
```

### 3. Keep Node.js running with PM2:
```bash
npm install -g pm2
pm2 start /var/www/ecosphere/server/index.js --name "ecosphere-email"
pm2 startup
pm2 save
# Server now auto-restarts on reboot
```

### 4. Deploy frontend (build and deploy):
```bash
# Locally, build the production version
npm run build

# Upload dist folder to server
scp -r dist/* user@ecospherewm.com:/var/www/ecosphere/frontend/dist/
```

### 5. Set up Nginx reverse proxy:
```bash
# On your server
sudo cp server/nginx.conf.production /etc/nginx/sites-available/ecosphere

# Enable site
sudo ln -s /etc/nginx/sites-available/ecosphere /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### 6. Set up SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d ecospherewm.com -d www.ecospherewm.com
# Certbot will auto-renew the certificate
```

---

## Verification Checklist

- [ ] Frontend `.env.production` has `VITE_API_URL=https://www.ecospherewm.com/api`
- [ ] Backend `.env` has email credentials in `/var/www/ecosphere/server/`
- [ ] Node.js server is running (check: `pm2 list`)
- [ ] Nginx is running and config is valid (`sudo nginx -t`)
- [ ] Frontend built and deployed to `/var/www/ecosphere/frontend/dist/`
- [ ] SSL certificate installed (check: https://www.ecospherewm.com)
- [ ] Form submission test: Fill form → Check server logs → Verify email received

---

## Common Issues & Solutions

**Issue:** 404 errors on form submission
- **Solution:** Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Verify Node.js server is running: `pm2 list`

**Issue:** SSL certificate not found
- **Solution:** Run Let's Encrypt: `sudo certbot certonly --nginx -d ecospherewm.com`

**Issue:** CORS errors in browser console
- **Solution:** Check backend CORS settings in `server/index.js` (already configured)

**Issue:** Emails not sending
- **Solution:** Check backend logs: `pm2 logs ecosphere-email`
- Verify Gmail app password is correct in `.env`

---

## Quick Deployment Script (Optional)

Save as `deploy.sh` and run with `bash deploy.sh`:

```bash
#!/bin/bash
set -e

echo "Building frontend..."
npm run build

echo "Deploying frontend..."
scp -r dist/* user@ecospherewm.com:/var/www/ecosphere/frontend/dist/

echo "Restarting backend..."
ssh user@ecospherewm.com "pm2 restart ecosphere-email"

echo "✅ Deployment complete!"
```

