# Netlify Deployment Guide

## Prerequisites
- GitHub account
- Netlify account (free)
- Your project pushed to GitHub

## Deployment Steps

### Method 1: Connect GitHub Repository (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your repository (`bajrang-port`)
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

### Method 2: Manual Deployment

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `build` folder to the deploy area

## Configuration Files

- `netlify.toml` - Contains build and deployment configuration
- `package.json` - Contains build scripts and dependencies

## Build Configuration

The project is configured with:
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18
- **SPA Redirects:** Configured for React Router

## Post-Deployment

After deployment:
1. Your site will be available at a random Netlify URL
2. You can customize the domain name in Netlify settings
3. Enable HTTPS (automatic with Netlify)
4. Set up custom domain if needed

## Troubleshooting

- **Build fails:** Check that all dependencies are in `package.json`
- **404 errors:** Ensure redirects are configured in `netlify.toml`
- **Environment variables:** Add them in Netlify dashboard under Site settings > Environment variables

## Automatic Deployments

With GitHub integration:
- Every push to main branch triggers automatic deployment
- Pull requests create preview deployments
- Build status is shown in GitHub commits