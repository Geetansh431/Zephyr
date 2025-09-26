# 🎮 Zephyr - Enter the Metagame Layer

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://zephyr-red-gamma.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?logo=greensock)](https://greensock.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

> **A premium, award-worthy gaming website showcasing the future of interactive entertainment**

Enter the Metagame Layer with Zephyr - an immersive web experience that transforms gaming into a unified Play Economy. This cutting-edge website showcases four revolutionary gaming products through cinematic animations, interactive videos, and seamless user experiences.

## ✨ Features

### 🎬 **Immersive Experience**
- **Full-Screen Video Backgrounds** - Cinematic video experiences throughout
- **Interactive Hero Section** - Dynamic video carousel with hover transitions
- **Scroll-Based Animations** - GSAP-powered animations triggered by scroll
- **Auto-Playing Audio** - Immersive background music with user controls
- **Smooth Transitions** - Seamless section-to-section navigation

### 🚀 **Performance Optimized**
- **Code Splitting** - Intelligent lazy loading for optimal performance
- **Video Optimization** - Smart preloading and metadata optimization
- **Font Optimization** - Preloaded custom fonts with zero layout shift
- **Bundle Optimization** - Multi-chunk architecture for better caching
- **SEO Enhanced** - Complete meta tags for social sharing

### 🎯 **Gaming Products Showcase**
- **Radiant** - Cross-platform metagame app
- **Zigma** - Anime and gaming-inspired NFT collection
- **Nexus** - Gamified social hub for Web3 communities  
- **Azul** - Cross-world AI Agent for enhanced gameplay

### 📱 **Mobile-First Design**
- **Responsive Layout** - Optimized for all device sizes
- **Touch Interactions** - Mobile-friendly hover effects
- **Performance Focused** - Efficient loading for mobile connections

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern functional components with hooks
- **Vite 5.4.10** - Lightning-fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features

### **Styling & Design**
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Custom Fonts** - Zentry, General Sans, Robert, Circular Web
- **CSS Animations** - Custom keyframes and transitions

### **Animation & Interactions**
- **GSAP 3.12.5** - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animation triggers
- **ScrollToPlugin** - Smooth scroll navigation
- **@gsap/react 2.1.1** - React integration for GSAP

### **Media & Assets**
- **Video Assets** - MP4 format for cross-browser compatibility
- **Image Optimization** - WebP format for smaller file sizes
- **Audio Integration** - MP3 background music with controls
- **Icon Library** - React Icons (Font Awesome, etc.)

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Enhanced development experience
  
## 📁 Project Structure

```
src/
├── Components/           # React components
│   ├── Hero.jsx          # Interactive hero section
│   ├── About.jsx         # About section with animations
│   ├── Features.jsx      # Product showcase (Bento grid)
│   ├── Story.jsx         # Floating image story section
│   ├── Contact.jsx       # Contact form
│   ├── Footer.jsx        # Video background footer
│   ├── Navbar.jsx        # Navigation with audio controls
│   ├── Button.jsx        # Reusable button component
│   ├── AnimatedTitle.jsx # Animated text component
│   └── VideoPreview.jsx  # Video preview component
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles and utilities

public/
├── fonts/                # Custom font files (.woff2)
├── img/                  # Images and graphics (.webp, .png)
├── videos/               # Video assets (.mp4)
└── audio/                # Background music (.mp3)
```

## ⚡ Performance Optimizations

### **Code Splitting Strategy**
```javascript
// Lazy loading for better performance
const About = lazy(() => import("./Components/About.jsx"));
const Features = lazy(() => import("./Components/Features.jsx"));
// ... other components
```

### **Bundle Analysis**
- **react-vendor**: 140.87 KB (React core libraries)
- **gsap-vendor**: 70.87 KB (Animation libraries)  
- **index**: 54.66 KB (Application code)
- **component chunks**: 0.9-7.3 KB each (Individual features)

### **Asset Optimization**
- **Video Preloading** - Smart metadata preloading for smooth playback
- **Font Preloading** - Critical fonts loaded immediately
- **Image Optimization** - WebP format with fallbacks
- **Compression** - Gzip compression enabled

### **SEO & Social Media**
```html
<!-- Complete Open Graph implementation -->
<meta property="og:title" content="Zephyr - Enter the Metagame Layer" />
<meta property="og:description" content="Enter the Metagame Layer with Zephyr..." />
<meta property="og:image" content="/img/about.webp" />

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary_large_image" />
<!-- ... more meta tags -->
```


## 🚀 Live Demo

Experience Zephyr in action: **[zephyr-red-gamma.vercel.app](https://zephyr-red-gamma.vercel.app/)**

---

<div align="center">

**Built with ❤️ for the future of gaming**

*Enter the Metagame Layer • Unleash the Play Economy*

</div>
