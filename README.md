# 🚀 Vinicius Guterres - Portfolio Website

> A modern, bilingual full-stack developer portfolio showcasing projects and skills with cutting-edge web technologies.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/vinicius-dev/portfolio)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.11-black.svg)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

[🌐 **Live Demo**](https://your-portfolio-url.com) | [📖 **Documentation**](#-getting-started) | [🐛 **Report Bug**](https://github.com/vinicius-dev/portfolio/issues)

---

## 📋 About The Project

This is a modern, professional portfolio website built to showcase my expertise as a full-stack developer. The site demonstrates proficiency in React, Next.js, TypeScript, and modern web development practices while providing an engaging user experience across multiple languages and devices.

**Key Highlights:**
- **Bilingual Experience**: Seamless English/Portuguese-BR support with persistent language preferences
- **Modern Architecture**: Built with Next.js 14 App Router for optimal performance and SEO
- **Professional Design**: Clean, responsive interface with smooth animations and accessibility features
- **Developer-Focused**: Comprehensive testing suite and clean code architecture

**Target Audience:** Recruiters, potential clients, fellow developers, and anyone interested in modern web development practices.

---

## ✨ Key Features

- 🌐 **Bilingual Support** - Complete English/Portuguese-BR localization with cookie persistence
- 🎨 **Modern Design** - Responsive, dark-themed UI with Tailwind CSS and custom animations
- ⚡ **Performance Optimized** - Server-side rendering with Next.js 14+ App Router
- 🧪 **Comprehensive Testing** - Jest and React Testing Library with 90%+ coverage
- 🎭 **Smooth Animations** - Framer Motion powered micro-interactions and transitions
- 📱 **Mobile-First** - Fully responsive design optimized for all screen sizes
- ♿ **Accessibility-Focused** - ARIA labels, semantic HTML, and keyboard navigation
- 🚀 **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- 🔧 **Developer Experience** - TypeScript, ESLint, Prettier, and modern tooling

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.11 | React framework with App Router |
| **React** | 18+ | UI library with hooks and context |
| **TypeScript** | 5+ | Type-safe JavaScript development |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **Framer Motion** | 12.23.14 | Animation and gesture library |
| **React Icons** | 5.5.0 | Icon component library |

### Backend & Database
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web application framework |
| **PostgreSQL** | Primary database |
| **Vercel Analytics** | Performance monitoring |

### Testing & Quality
| Technology | Purpose |
|------------|---------|
| **Jest** | JavaScript testing framework |
| **React Testing Library** | React component testing |
| **@testing-library/jest-dom** | Custom Jest matchers |
| **@testing-library/user-event** | User interaction simulation |
| **@swc/jest** | Fast TypeScript/JavaScript compiler |

### DevOps & Tools
| Technology | Purpose |
|------------|---------|
| **Git & GitHub** | Version control and collaboration |
| **Vercel** | Deployment and hosting platform |
| **ESLint** | Code linting and formatting |
| **PostCSS** | CSS processing and optimization |
| **SWC** | Fast compilation and bundling |

---

## 🏗️ Architecture

### App Router Pattern
This project leverages Next.js 14's App Router for modern React development:
- **File-based routing** with `app/` directory structure
- **Server Components** by default for optimal performance
- **Client Components** with `'use client'` directive when needed
- **Layout nesting** for consistent UI across pages

### Component Architecture
Following atomic design principles with a component-driven approach:
```
src/app/components/
├── sections/          # Page sections (Hero, About, Projects)
├── __tests__/         # Component test files
├── Header.tsx         # Navigation component
└── LanguageToggle.tsx # Language switcher
```

### State Management
- **Context API** for global language state management
- **Local Storage** for persistent language preferences
- **React Hooks** for component-level state

### Data Flow
```
User Interaction → Context Provider → Component State → UI Update
     ↓
Local Storage ← Language Preference ← Context Update
```

### Key Directories
```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React Context providers
│   ├── lib/           # Utility functions and data
│   ├── types/         # TypeScript type definitions
│   └── config/        # Application configuration
├── public/            # Static assets
└── __tests__/         # Test files
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vinicius-dev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |

---

## 🧪 Testing

This project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Test Coverage Areas:**
- Component rendering and behavior
- User interactions and state changes
- Context provider functionality
- Accessibility compliance
- Local storage persistence

---

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

---

## 🌐 Internationalization

The site supports two languages with automatic detection and persistence:
- **English (en-us)** - Default language
- **Portuguese-BR (pt-br)** - Brazilian Portuguese

Language preferences are stored in localStorage and persist across sessions.

---

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Configure build settings** (automatically detected)
3. **Deploy** with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vinicius-dev/portfolio)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Vinicius Guterres** - Full-Stack Developer

- 🌐 **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)
- 💼 **LinkedIn**: [linkedin.com/in/vinicius-guterres](https://linkedin.com/in/vinicius-guterres)
- 🐙 **GitHub**: [github.com/vinicius-dev](https://github.com/vinicius-dev)
- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Vercel](https://vercel.com/) for seamless deployment

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Vinicius Guterres](https://github.com/vinicius-dev)

</div>