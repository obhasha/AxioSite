# Axio Tech Landing Page

A modern, responsive landing page built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with animated wave
│   ├── FromIdeaToScale.jsx # Three pillar section
│   ├── WhyAxio.jsx         # Company description & client types
│   ├── EngagementModels.jsx # Service models
│   ├── Team.jsx            # Team members section
│   ├── Contact.jsx         # Contact information
│   └── Footer.jsx          # Footer with social links
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles

```

## Features

- Responsive design for all screen sizes
- Modern gradient effects and animations
- Smooth scroll navigation
- Professional UI/UX
- Easy to maintain component structure
- Optimized for performance

## Customization

### Colors

Update theme colors in `tailwind.config.js`:

```javascript
colors: {
  'axio-dark': '#0a0e27',
  'axio-navy': '#1a1f3a',
  'axio-pink': '#ff4d8f',
  'axio-purple': '#b64dff',
}
```

### Content

All content is located in individual component files in the `src/components/` directory. Simply edit the JSX to update text, images, or layout.

## Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder will contain the production-ready files that can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## License

© 2025 AXIO. All rights reserved.

