# Vinicius Guterres - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a bilingual system (English/Portuguese) and showcases full-stack development skills with smooth animations and a dark theme design.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Bilingual Support**: English and Portuguese (Brazil) language switching
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion for elegant micro-interactions
- **Dark Theme**: Professional dark color scheme with green accent colors
- **Performance Optimized**: Image optimization, lazy loading, and SEO-ready
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Type Safety**: Full TypeScript implementation with comprehensive interfaces

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Next.js 14** - Full-stack React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **React Icons** - Icon library

## 📁 Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Header.jsx      # Navigation header with social links
│   │   │   └── sections/       # Page sections
│   │   │       ├── Hero.tsx    # Landing section with profile
│   │   │       ├── About.tsx   # About section with tech stack
│   │   │       └── Projects.tsx # Projects showcase
│   │   ├── config/
│   │   │   └── settings.ts     # Configuration and constants
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx # Bilingual system context
│   │   ├── lib/
│   │   │   └── dictionary.ts   # Translation dictionaries
│   │   ├── types/
│   │   │   └── index.ts        # TypeScript type definitions
│   │   ├── fonts/              # Custom Geist fonts
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Main page component
│   └── public/                 # Static assets
│       ├── profile_img.png     # Profile image
│       ├── profile_img_pixel_art.png # Pixel art version
│       └── vinicius_guterres_CV.pdf # Resume
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ViniciusGuterres/vinicius-dev.git
   cd vinicius-dev/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Bilingual System

The portfolio supports both English and Portuguese (Brazil) languages:

- **Language Context**: React Context API for global language state
- **Dictionary System**: Centralized translation management
- **Type Safety**: TypeScript interfaces for translations
- **Dynamic Switching**: Runtime language switching capability

### Usage Example

```typescript
import { useLanguage } from '@/app/contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <button onClick={() => setLanguage('pt-br')}>
        Português
      </button>
    </div>
  );
}
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0a0a0a` (Dark background)
- **Accent**: `#68A063` (Green highlights)
- **Text**: `#ffffff` (Primary), `#gray-300` (Secondary)
- **Glass Effect**: `white/5` with backdrop blur

### Typography
- **Primary Font**: Geist Sans (Variable weight)
- **Monospace**: Geist Mono (Code snippets)

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Hover Effects**: Scale and glow effects on interactive elements
- **Scroll Animations**: Reveal animations on scroll

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

## 🔧 Configuration

### Social Links
Update social links in `src/app/config/settings.ts`:

```typescript
export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
};
```

### Translations
Add new translations in `src/app/lib/dictionary.ts`:

```typescript
export const dictionary = {
  'en': {
    section: {
      key: 'English text'
    }
  },
  'pt-br': {
    section: {
      key: 'Texto em português'
    }
  }
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository** if you found it helpful!

