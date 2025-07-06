# Deployment Guide

This is a Vite React application. The Jekyll error you encountered is because the deployment platform was configured for Jekyll instead of a static site.

## Deployment Options

### 1. GitHub Pages
- The `.github/workflows/deploy.yml` file is configured for GitHub Pages
- Make sure GitHub Pages is enabled in your repository settings
- Set the source to "GitHub Actions" in the Pages settings

### 2. Netlify
- The `netlify.toml` file is configured for Netlify deployment
- Connect your repository to Netlify
- The build command is `npm run build`
- The publish directory is `dist`

### 3. Vercel
- The `vercel.json` file is configured for Vercel deployment
- Connect your repository to Vercel
- The framework is automatically detected as Vite

### 4. Other Static Hosting
- Build the project with `npm run build`
- Deploy the `dist` folder to your hosting provider
- Ensure the hosting provider supports single-page applications (SPA)

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Build Commands
```bash
npm install
npm run build
```

## Important Notes
- This is a React SPA (Single Page Application)
- Client-side routing is handled by React Router
- All routes should redirect to `index.html` for proper SPA behavior
- The build output is in the `dist` directory 