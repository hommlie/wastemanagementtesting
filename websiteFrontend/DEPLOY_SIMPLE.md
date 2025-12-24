# Simple Email Integration Setup

## What You Have

✅ **Frontend Form** - HomeScreen component that collects: name, phone, email  
✅ **Backend API** - Node.js server that sends emails via Gmail  
✅ **Environment Variables** - Configured for localhost (dev) and production

---

## For Local Testing (Your Machine)

### 1. Make sure backend is running:
```bash
cd server
npm install
node index.js
```
✅ You'll see: `Email server listening on http://localhost:4000`

### 2. Make sure frontend is running:
```bash
npm run dev
```
✅ Visit: http://localhost:5174 (or 5173)

### 3. Test the form:
- Fill in: Name, Phone, Email
- Click "Send"
- ✅ Email should arrive at `solutions@hommlie.com`

---

## For VPS Deployment

When you deploy to your VPS (ecospherewm.com), here's what needs to happen:

### **Step 1: Deploy Backend (on VPS)**

```bash
# On your VPS, create folder
mkdir -p /var/www/ecosphere/server
cd /var/www/ecosphere/server

# Copy your server files here (from: c:\...\websiteFrontend\server\)
# Files needed:
# - index.js
# - package.json
# - package-lock.json
```

### **Step 2: Install & Configure Backend (on VPS)**

```bash
# Install npm packages
npm install

# Create .env file with your email credentials
cat > .env << 'EOF'
EMAIL=solutions@hommlie.com
EMAIL_PASSWORD=Hommlie.Solutions@11222
EMAIL_APP_PASSWORD=qwja rohf maxd lbmb
PORT=4000
EOF

# Test it runs
node index.js
# Should show: Email server listening on http://localhost:4000
```

### **Step 3: Keep Backend Running (on VPS)**

Use PM2 to auto-restart:
```bash
npm install -g pm2
pm2 start index.js --name "ecosphere-email"
pm2 startup
pm2 save
```

### **Step 4: Deploy Frontend (on Your Machine)**

```bash
# Build production version
npm run build

# This creates a "dist" folder with your website

# Upload to VPS:
# scp -r dist/* user@ecospherewm.com:/var/www/ecosphere/frontend/
```

### **Step 5: Connect Frontend to Backend (IMPORTANT)**

Your website will be at: `https://ecospherewm.com`  
Your backend will be at: `https://ecospherewm.com:4000` (or routed via Nginx)

The frontend needs to know where to send form data. This is already configured:

**`.env.production`** (already has):
```
VITE_API_URL=https://www.ecospherewm.com/api
```

**On your VPS**, make sure:**
- Backend runs on port 4000
- Nginx/Apache routes `/api` requests to `localhost:4000` (you or your server team handles this)

---

## How It Works

```
Customer fills form on https://ecospherewm.com
        ↓
Clicks "Send" button
        ↓
Frontend POSTs to: https://www.ecospherewm.com/api/send-email
        ↓
VPS receives request at backend (port 4000)
        ↓
Backend reads .env credentials
        ↓
Sends email via Gmail to solutions@hommlie.com
        ↓
Customer sees "Request sent successfully!"
```

---

## That's It!

Once deployed:
1. ✅ Customer enters details
2. ✅ Clicks "Send"
3. ✅ Email arrives in your inbox

No Nginx config needed on your end if your hosting provides it.

---

## Troubleshooting on VPS

**Check if backend is running:**
```bash
pm2 list
```

**Check backend logs:**
```bash
pm2 logs ecosphere-email
```

**Test API directly:**
```bash
curl -X POST https://www.ecospherewm.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"123","email":"test@test.com"}'
```

**Check if email credentials work:**
- Verify `.env` file exists in `/var/www/ecosphere/server/.env`
- Make sure app password is correct (not regular Gmail password)

---

## Files to Deploy

**Backend (to VPS `/var/www/ecosphere/server/`):**
- index.js
- package.json
- package-lock.json
- .env (create on VPS with your credentials)

**Frontend (to VPS `/var/www/ecosphere/frontend/`):**
- Everything in your `dist/` folder (after `npm run build`)

