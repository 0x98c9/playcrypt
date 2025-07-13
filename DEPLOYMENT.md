# Cloudflare Pages Deployment Guide for Playcrypt.fun

This guide will help you deploy your Playcrypt.fun project to Cloudflare Pages.

## Prerequisites

1. A GitHub account with your project repository
2. A Cloudflare account (free tier is sufficient)
3. Your project should be committed and pushed to GitHub

## Method 1: Direct Upload (Quick Deployment)

### Step 1: Build the Project Locally
```bash
npm run build
```

### Step 2: Deploy to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Upload assets**
5. Upload the `out` folder (drag and drop or browse)
6. Set your project name (e.g., "playcrypt")
7. Click **Deploy site**

## Method 2: Git Integration (Recommended)

### Step 1: Connect Your Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Connect to Git**
5. Select your repository (playcrypt)

### Step 2: Configure Build Settings
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)
- **Node.js version**: `18` (set in Environment Variables)

### Step 3: Environment Variables (if needed)
Add these environment variables in the Cloudflare Pages settings:
- `NODE_VERSION`: `18`
- `NPM_VERSION`: `8` (optional)

### Step 4: Deploy
Click **Save and Deploy**

## Method 3: Automated GitHub Actions (Advanced)

If you want automated deployments, the GitHub Actions workflow has been set up in `.github/workflows/deploy.yml`.

### Setup Required Secrets:
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Getting Cloudflare Credentials:
1. **API Token**: Go to Cloudflare Dashboard → My Profile → API Tokens → Create Token
   - Use "Custom token" template
   - Permissions: `Zone:Zone:Read`, `Page:Page:Edit`
2. **Account ID**: Found in the right sidebar of your Cloudflare Dashboard

## Custom Domain Setup (Optional)

### Step 1: Add Custom Domain
1. In your Cloudflare Pages project
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `playcrypt.fun`)

### Step 2: Update DNS (if domain is not on Cloudflare)
If your domain is managed elsewhere, add these DNS records:
- **Type**: CNAME
- **Name**: @ (or your subdomain)
- **Value**: `your-project.pages.dev`

## Project Configuration

The project has been configured for optimal Cloudflare Pages deployment:

### Next.js Configuration (`next.config.ts`)
- ✅ Static export enabled (`output: 'export'`)
- ✅ Trailing slashes enabled
- ✅ Image optimization disabled (required for static export)

### Build Configuration
- ✅ Build command: `npm run build`
- ✅ Output directory: `out`
- ✅ Node.js 18 compatibility

### Security Headers (`_headers`)
- ✅ Security headers configured
- ✅ Static asset caching
- ✅ XSS protection

### Routing (`_redirects`)
- ✅ SPA routing handled
- ✅ Fallback to index.html

## Verification

After deployment, verify these features work:
- [ ] Homepage loads correctly
- [ ] All tool pages are accessible
- [ ] Client-side routing works
- [ ] Copy to clipboard functionality
- [ ] All interactive features work
- [ ] Mobile responsiveness

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version (should be 18)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **404 Errors on Page Refresh**
   - Verify `_redirects` file is in the `out` directory
   - Check SPA fallback configuration

3. **Assets Not Loading**
   - Verify asset paths are relative
   - Check `assetPrefix` in next.config.ts

4. **Slow Initial Load**
   - Enable Cloudflare's optimization features
   - Configure proper caching headers

## Performance Optimization

Enable these Cloudflare features for better performance:
- **Auto Minify**: HTML, CSS, JS
- **Brotli Compression**: Enable
- **Rocket Loader**: Enable (test first)
- **Image Optimization**: Enable

## Security

Recommended Cloudflare security settings:
- **Always Use HTTPS**: Enable
- **HSTS**: Enable
- **Security Level**: Medium
- **Bot Fight Mode**: Enable

## Monitoring

Monitor your deployment:
- **Analytics**: Enable in Cloudflare Pages
- **Real User Monitoring**: Available in Cloudflare
- **Core Web Vitals**: Monitor performance metrics

## Cost

Cloudflare Pages free tier includes:
- ✅ Unlimited static requests
- ✅ 500 builds per month
- ✅ 100 custom domains
- ✅ Global CDN
- ✅ DDoS protection

Your project should fit comfortably within these limits.

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npx serve out
```

Your Playcrypt.fun project is now ready for deployment! 🚀
