# 🚀 Deployment Guide – Vercedo AI

This guide covers deploying the Vercedo AI website to production using **Vercel** (recommended) and other platforms.

---

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Git repository (GitHub, GitLab, or Bitbucket)
- Resend API key ([Get from resend.com](https://resend.com))

---

## 🎯 Deploy to Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Step 1: Push to Git

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click **"New Project"**
4. Import your repository

### Step 3: Configure Project

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `.` (default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)

### Step 4: Add Environment Variables

In the Vercel project settings, add:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `RESEND_API_KEY` | `your_resend_api_key` | API key from Resend |
| `CONTACT_RECIPIENT_EMAIL` | `founders@vercedo.ai` | Contact form recipient |

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Visit your live site at `your-project.vercel.app`

### Step 6: Custom Domain (Optional)

1. Go to **Project Settings → Domains**
2. Add your custom domain (e.g., `vercedo.ai`)
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## 🌐 Deploy to Netlify

### Step 1: Push to Git

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git repository

### Step 3: Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `.next`

### Step 4: Environment Variables

In Netlify site settings, add:
- `RESEND_API_KEY`
- `CONTACT_RECIPIENT_EMAIL`

### Step 5: Deploy

Click **"Deploy site"** and wait for deployment to complete.

---

## ☁️ Deploy to AWS Amplify

### Step 1: Push to Git

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 2: Create Amplify App

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Connect your Git repository

### Step 3: Configure Build

Amplify auto-detects Next.js. Verify build settings:
- **Build command:** `npm run build`
- **Output directory:** `.next`

### Step 4: Environment Variables

Add in Amplify console:
- `RESEND_API_KEY`
- `CONTACT_RECIPIENT_EMAIL`

### Step 5: Deploy

Click **"Save and deploy"**

---

## 🐳 Deploy with Docker

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM node:18-alpine AS runner
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
CMD ["node", "server.js"]
```

### Step 2: Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
```

### Step 3: Build and Run

```bash
docker build -t vercedo-ai .
docker run -p 3000:3000 -e RESEND_API_KEY=your_key -e CONTACT_RECIPIENT_EMAIL=email@example.com vercedo-ai
```

---

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Where to Get |
|---------|-------------|--------------|
| `RESEND_API_KEY` | Email API key | [resend.com](https://resend.com) |
| `CONTACT_RECIPIENT_EMAIL` | Contact form recipient | Your email |

### Optional Variables

| Variable | Description | Default |
|---------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site URL for SEO | `https://vercedo.ai` |

---

## ✅ Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form submission works
- [ ] Check mobile responsiveness
- [ ] Test 3D robot interaction on hero section
- [ ] Verify VerceBot chatbot appears
- [ ] Test navigation and routing
- [ ] Check SEO meta tags (view source)
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify custom domain and SSL (if applicable)

---

## 🛠️ Troubleshooting

### Build Fails

**Issue:** Build fails with TypeScript errors

**Solution:**
```bash
npm run lint
npm run build
```
Fix any errors before deploying.

---

### Contact Form Not Working

**Issue:** Contact form submissions fail

**Solution:**
1. Verify `RESEND_API_KEY` is set
2. Check `CONTACT_RECIPIENT_EMAIL` is valid
3. Verify API key has permission to send emails
4. Check browser console for errors

---

### 3D Robot Not Rendering

**Issue:** Hero section 3D robot doesn't appear

**Solution:**
1. Verify `three` is in `transpilePackages` in `next.config.js`
2. Check browser console for WebGL errors
3. Test on a different device/browser

---

### Images Not Loading

**Issue:** Images return 404

**Solution:**
1. Verify images are in `/public` directory
2. Check image paths start with `/` (e.g., `/og-image.svg`)
3. Clear build cache and rebuild

---

## 📊 Performance Optimization

### Image Optimization

Use Next.js `Image` component:
```tsx
import Image from 'next/image'

<Image 
  src="/hero-image.jpg" 
  width={800} 
  height={600} 
  alt="Description"
  priority // for above-the-fold images
/>
```

### Font Optimization

Fonts are already optimized using Google Fonts with `display=swap`.

### Bundle Size Analysis

```bash
npm run build
```

Check `.next/analyze` for bundle size reports.

---

## 🔒 Security Best Practices

1. **Never commit `.env` files** – Use `.env.local` for local development
2. **Use environment variables** for all secrets
3. **Enable HTTPS** – Automatic on Vercel/Netlify
4. **Set security headers** in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
      ]
    }
  ]
}
```

---

## 📈 Monitoring & Analytics

### Add Google Analytics

1. Create GA4 property
2. Add tracking code to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In <head> or <body>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics

Enable in Vercel dashboard:
1. Go to **Project Settings**
2. Click **Analytics**
3. Enable **Web Analytics**

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

Both Vercel and Netlify automatically deploy when you push to main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
# Automatically triggers deployment
```

### Preview Deployments

- **Vercel:** Every PR gets a preview URL
- **Netlify:** Deploy previews for all branches

---

## 🎉 You're Live!

Your Vercedo AI site is now deployed and ready to automate the impossible.

**Next Steps:**
- Set up custom domain
- Configure email domain for Resend
- Add analytics
- Monitor performance
- Gather user feedback

---

For support, visit: [support@vercedo.ai](mailto:support@vercedo.ai)
