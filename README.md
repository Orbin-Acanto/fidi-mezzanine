# The Mezzanine NYC - Event Venue Website

A modern, Next.js-based website for The Mezzanine event venue in Lower Manhattan's Financial District.

## 🎨 Design Features

- **Modern & Minimalistic**: Clean design with sharp edges, professional aesthetics
- **Golden Accent Color**: Primary color `#d2b371` used strategically throughout
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Parallax Effects**: Subtle parallax on hero images and feature sections
- **Mobile Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Comprehensive meta tags for NYC venue searches
- **TypeScript**: Fully typed codebase for better development experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Roboto, Old Standard TT, Zilla Slab)
- **Form**: Zoho CRM Integration

## 📁 Project Structure

```
fidimezzanine-website/
├── app/
│   ├── layout.tsx              # Root layout with SEO & fonts
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── floor-plans/
│       └── page.tsx            # Floor plans page
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer
│   ├── HeroSlider.tsx          # Hero slider with animations
│   ├── AboutSection.tsx        # About & event types
│   ├── SpacesSection.tsx       # Venue spaces grid
│   ├── VideoSection.tsx        # Video with parallax
│   ├── FeatureSection.tsx      # Feature with parallax image
│   ├── GallerySection.tsx      # Gallery with lightbox
│   ├── ContactSection.tsx      # Contact form (Zoho)
│   └── AnimatedSection.tsx     # Reusable animation wrapper
├── config/
│   └── siteConfig.ts           # Central configuration file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd fidimezzanine-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Updating Content

All content is managed through `/config/siteConfig.ts`. Update the following:

#### Venue Information
```typescript
venue: {
  name: "The Mezzanine",
  address: { ... },
  contact: { ... },
  capacity: { ... },
}
```

#### Hero Slider Images
```typescript
hero: {
  slides: [
    {
      id: 1,
      image: "your-image-url",
      title: "...",
      subtitle: "..."
    }
  ]
}
```

#### Event Types
```typescript
eventTypes: [
  {
    id: "corporate",
    title: "CORPORATE EVENTS",
    subtitle: "...",
    image: "your-image-url"
  }
]
```

#### Venue Spaces
```typescript
spaces: [
  {
    id: "main-bar",
    name: "Main Bar",
    image: "your-image-url"
  }
]
```

#### Gallery Images
```typescript
gallery: [
  {
    id: 0,
    src: "your-image-url",
    alt: "Description"
  }
]
```

### Replacing Placeholder Images

1. Add your images to `/public/images/` directory
2. Update the image paths in `siteConfig.ts`:

```typescript
// Change from:
image: "https://placehold.co/800x600/1a1a1a/d2b371?text=Main+Bar"

// To:
image: "/images/main-bar.jpg"
```

### SEO Configuration

Update SEO in `siteConfig.ts`:

```typescript
seo: {
  title: "Your Title",
  description: "Your Description",
  keywords: ["keyword1", "keyword2", ...]
}
```

### Zoho Form Integration

The contact form is already integrated with Zoho CRM. The form fields are in `/components/ContactSection.tsx`.

**Form IDs are configured for "The Mezzanine" - keep as is.**

## 🎨 Color Customization

Primary color is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#d2b371',        // Golden
  'primary-dark': '#b89952', // Darker golden
  'primary-light': '#e4ca9a', // Lighter golden
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js configuration
4. Deploy!

### Environment Variables

No environment variables required for basic functionality.

## 📱 Features Checklist

- ✅ Responsive navigation with mobile menu
- ✅ Auto-playing hero slider (5s intervals)
- ✅ Smooth scroll animations
- ✅ Parallax effects on images
- ✅ Interactive gallery with lightbox
- ✅ Zoho CRM contact form
- ✅ SEO optimized meta tags
- ✅ Google Fonts integration
- ✅ Sharp, modern design (no rounded borders)
- ✅ Floor plans page with separate route
- ✅ TypeScript throughout

## 🔧 Customization Guide

### Adding New Sections

1. Create component in `/components/YourSection.tsx`
2. Import and add to `/app/page.tsx`
3. Add scroll animations with `AnimatedSection` wrapper

### Modifying Animations

Animation settings are in individual components using Framer Motion:

```typescript
// Example: Adjust animation duration
transition={{ duration: 0.8, delay: 0.2 }}
```

### Changing Fonts

Update fonts in `/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

## 📞 Support

For questions or issues, contact the development team.

## 📄 License

© 2024 The Mezzanine NYC. All rights reserved.
