#!/bin/bash

# Deployment script for Vite React app

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output is in the 'dist' directory"
echo ""
echo "🎯 Next steps:"
echo "1. For GitHub Pages: Push to main branch (workflow will auto-deploy)"
echo "2. For Netlify: Connect your repository to Netlify"
echo "3. For Vercel: Connect your repository to Vercel"
echo "4. For other hosting: Upload the 'dist' folder to your hosting provider" 