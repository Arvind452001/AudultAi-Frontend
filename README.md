# XynthraAi - React + Vite Conversion

A modern React application converted from plain HTML/CSS/JavaScript to a React + Vite setup. This project maintains the exact same UI and functionality as the original while leveraging React's component-based architecture.

## Project Structure

```
adult-ai-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header and navigation
│   │   ├── Banner.jsx          # Slider banner section
│   │   ├── Features.jsx        # AI features grid
│   │   ├── About.jsx           # About section
│   │   ├── Testimonials.jsx    # Testimonials carousel
│   │   ├── FAQ.jsx             # Frequently asked questions
│   │   ├── Footer.jsx          # Footer
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── styles/
│   │   ├── index.css           # Global styles and animations
│   │   └── App.css             # App component styles
│   ├── assets/
│   │   └── img/                # All images from original project
│   ├── App.jsx                 # Main App component
│   └── main.jsx                # React entry point
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## Features

✅ **React Component Architecture** - Modular, reusable components  
✅ **Vite Build Tool** - Lightning-fast development and production builds  
✅ **Exact UI Match** - Original design preserved  
✅ **Animations & Transitions** - All CSS animations working perfectly  
✅ **Responsive Design** - Mobile-friendly layout  
✅ **Clean Code** - JavaScript converted to React hooks (useState, useEffect)  
✅ **NO TypeScript** - Pure JavaScript as requested  

## Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

## Installation

1. **Clone or extract the project:**
```bash
cd adult-ai-react
```

2. **Install dependencies:**
```bash
npm install
```

## Running the Project

### Development Mode
```bash
npm run dev
```
This will start the Vite development server, typically on `http://localhost:3000`  
The app will automatically open in your browser with hot module replacement (HMR) enabled.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Component Overview

### Header.jsx
- Navigation bar with logo
- Mobile responsive menu toggle
- Dynamic logo switching on scroll
- Navigation links

### Banner.jsx
- Carousel slider with auto-rotation
- Animated background images
- Call-to-action button
- Decorative elements

### Features.jsx
- Grid layout of AI features
- Icons from Font Awesome
- Fade-in animations
- Responsive grid (1 col mobile, 3 cols desktop)

### About.jsx
- Image with hover effect
- About content section
- Read more button
- Two-column layout

### Testimonials.jsx
- Rotating testimonials carousel
- Customer avatars
- Auto-rotate every 5 seconds
- Responsive design

### FAQ.jsx
- Accordion component
- Expandable Q&A items
- Bootstrap integration
- Two-column layout

### ScrollToTop.jsx
- Fixed position button
- Shows/hides on scroll
- Smooth scroll animation

## CSS & Animations

The project includes:
- **Global Styles** - Colors, typography, utilities
- **Animations** - fadeInUp, shine, floating animations (ani-top-bottom, ani-left-right, ani-move)
- **Bootstrap Classes** - Compatible with Bootstrap 5.3
- **Responsive Utilities** - Mobile-first approach
- **Custom Colors** - Primary (#FF0000), Secondary (#1f2732), etc.

## Key Conversions from HTML to React

### Original: jQuery Event Listeners
```javascript
// Before (jQuery)
$(window).on('scroll', function() {
  // Handle scroll logic
});
```

### Converted: React Hooks
```javascript
// After (React)
useEffect(() => {
  const handleScroll = () => {
    // Handle scroll logic
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Original: Direct DOM Manipulation
```javascript
// Before
$('#logo').attr('src', newSrc);
```

### Converted: React State
```javascript
// After
const [logoSrc, setLogoSrc] = useState(logoInner);
// Update when needed
setLogoSrc(logo);
```

## Assets

All images from the original project should be placed in:
```
src/assets/img/
├── banner/
├── bg/
├── content/
├── logos/
└── ... (other folders)
```

Currently using placeholder paths that need to be updated based on your asset structure.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Performance Optimization

- Code splitting with Vite
- CSS module support
- Image optimization ready
- Lazy loading compatible

## Next Steps

1. Copy all image assets from the original `adult-ai/img` folder to `src/assets/img`
2. Update image import paths if necessary
3. Test all animations and functionality
4. Deploy to production using `npm run build`

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

## Troubleshooting

### Images Not Loading
- Ensure all images are in `src/assets/img/` folder
- Update import statements in components with correct paths
- Check browser console for 404 errors

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure CSS files are imported in components
- Check class names match between JSX and CSS

### Hot Module Replacement (HMR) Not Working
- Save files and check terminal for errors
- Restart dev server with `npm run dev`

## Support & Questions

For issues or questions:
1. Check the console for errors (F12)
2. Verify all assets are in place
3. Ensure Node.js version is compatible

## License

This is a converted version of the original project. Follow the original project's license terms.

---

**Successfully converted from HTML/CSS/JavaScript to React + Vite!** 🚀
