# CodeInca Agency Website - Frontend Only

This is the frontend-only version of the CodeInca agency website. It includes all the React components, animations, and UI elements but without the backend server.

## Features

- 🎨 Modern, responsive design with dark/light theme toggle
- ✨ Rich animated illustrations and interactive elements
- 📱 Mobile-first responsive design
- 🎯 Comprehensive pages: Home, Services, About, Blog, FAQ, Contact, Reviews
- 🎭 Framer Motion animations and smooth transitions
- 🎪 Interactive background elements and floating particles
- 🔧 Built with React 18, TypeScript, and Tailwind CSS
- 🎨 Shadcn/ui component library
- 📊 TanStack Query for state management

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone or download this frontend folder
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Shadcn/ui base components
│   ├── AnimatedIllustrations.tsx
│   ├── FloatingParticles.tsx
│   ├── AnimatedHero.tsx
│   ├── InteractiveBackground.tsx
│   └── ...
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Reviews.tsx
├── hooks/            # Custom React hooks
├── lib/              # Utilities and configurations
├── shared/           # Shared types and schemas
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles and theme
```

## Key Components

- **AnimatedIllustrations**: SVG-based animated icons and illustrations
- **FloatingParticles**: Background particle effects
- **AnimatedHero**: Typing animation for hero sections
- **InteractiveBackground**: Interactive grid and glowing orbs
- **Theme Provider**: Dark/light theme management
- **Navigation**: Responsive header with mobile menu

## Customization

### Theme Colors
Edit the CSS variables in `src/index.css` to customize the color scheme.

### Content
For a functional website, you'll need to connect this frontend to a backend API or use a headless CMS for:
- Blog posts
- FAQ content
- Contact form submissions
- Reviews/testimonials

### Animations
All animations are built with Framer Motion and can be customized in the respective component files.

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations
- **Radix UI** - Accessible component primitives
- **TanStack Query** - Data fetching and state management
- **Wouter** - Lightweight routing
- **Lucide React** - Icon library

## Notes

This frontend is designed to work with a REST API backend. The original project included a full Express.js backend with:
- Blog post management
- FAQ management  
- Contact form handling
- Review system

To make this frontend functional, you'll need to implement these API endpoints or connect to a headless CMS service.