# Deployment Guide - The Mezzanine Website

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest & Free)

Vercel is made by the Next.js team and offers the best performance and easiest deployment.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   
3. **Done!** Your site is live at `your-project.vercel.app`

4. **Add Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings > Domains
   - Add `www.fidimezzanine.com`
   - Follow DNS instructions

**Advantages:**
- ✅ Free hosting
- ✅ Automatic deployments on push
- ✅ Built-in CDN
- ✅ SSL certificate included
- ✅ Preview deployments for branches

---

### Option 2: Netlify

Similar to Vercel, great for Next.js sites.

#### Steps:

1. Push code to GitHub (same as Vercel)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

**Advantages:**
- ✅ Free hosting
- ✅ Easy deployment
- ✅ Form handling built-in

---

### Option 3: Custom VPS (DigitalOcean, AWS, etc.)

For full control over your hosting environment.

#### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx as reverse proxy

#### Steps:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload files to server**
   ```bash
   rsync -avz --exclude 'node_modules' ./ user@your-server:/var/www/mezzanine/
   ```

3. **SSH into server and install dependencies**
   ```bash
   ssh user@your-server
   cd /var/www/mezzanine
   npm install --production
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "mezzanine" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name fidimezzanine.com www.fidimezzanine.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d fidimezzanine.com -d www.fidimezzanine.com
   ```

---

### Option 4: Docker Deployment

For containerized deployment.

#### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### docker-compose.yml:

```yaml
version: '3.8'

services:
  mezzanine:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

#### Deploy:

```bash
docker-compose up -d
```

---

## 🔒 SSL/HTTPS Setup

### For Vercel/Netlify:
SSL is automatic and included free.

### For Custom Server:
Use Let's Encrypt (free):

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d fidimezzanine.com -d www.fidimezzanine.com
```

---

## 🌐 Domain Setup

### DNS Records (for fidimezzanine.com):

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Custom Server:**
```
Type: A
Name: @
Value: YOUR_SERVER_IP

Type: A
Name: www
Value: YOUR_SERVER_IP
```

---

## 📊 Performance Optimization

### Before Deploy:

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Add proper sizes to Next.js Image components

2. **Enable ISR (Incremental Static Regeneration)**
   ```typescript
   // In page.tsx
   export const revalidate = 3600; // Revalidate every hour
   ```

3. **Add Analytics**
   - Google Analytics
   - Vercel Analytics (if using Vercel)

---

## 🔍 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display properly
- [ ] Contact form submits to Zoho
- [ ] Mobile responsive on all pages
- [ ] All links work
- [ ] SEO meta tags correct
- [ ] SSL certificate active (HTTPS)
- [ ] Domain configured correctly
- [ ] Google Analytics tracking
- [ ] Google Search Console submitted
- [ ] Sitemap submitted

---

## 🐛 Troubleshooting

### Build fails with TypeScript errors:
```bash
npm run build
# Fix errors shown in output
```

### Images not loading in production:
- Make sure images are in `/public/images/`
- Check image paths in `siteConfig.ts`
- Rebuild and redeploy

### Form not submitting:
- Check Zoho form configuration
- Verify reCAPTCHA site key
- Check browser console for errors

---

## 📞 Support

For deployment issues, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- Your hosting provider's documentation

---

## ✅ Recommended: Vercel

For The Mezzanine website, we recommend **Vercel** because:
- Zero configuration needed
- Automatic SSL
- Global CDN
- Preview deployments
- Free tier is generous
- Made by Next.js team
