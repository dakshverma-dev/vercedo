# Vercedo – Automate the Impossible

<div align="center">
  <h3>Premium AI Automation Platform</h3>
  <p>Next-gen futuristic website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion</p>
</div>

---

## ✨ Features

- **Next.js 14 + App Router** – Modern React framework with server-side rendering and API routes
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling with custom glassmorphism design
- **Framer Motion** – Fluid animations and micro-interactions
- **React Three Fiber** – Interactive 3D AI robot on the hero section
- **next-seo** – Complete SEO optimization
- **Resend API** – Email integration for contact form
- **Responsive Design** – Mobile-first approach
- **VerceBot** – Floating AI chatbot assistant

---

## 🎨 Design System

**Colors:**
- Obsidian: `#090a10` (Background)
- Midnight: `#020617` (Sections)
- Cobalt: `#1f6feb` (Primary accent)
- Aurora: `#7dd3fc` (Highlights)
- Platinum: `#e2e8f0` (Text)

**Typography:**
- Display: Archivo
- Body: Space Grotesk

**Visual Elements:**
- Glassmorphism cards
- Animated gradients
- Glow effects and borders
- Grid patterns
- Micro-interactions

---

## 📦 Project Structure

```
vercedo-ai/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing & individual posts
│   ├── contact/           # Contact page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── providers/         # Context providers
│   ├── three/             # 3D components (React Three Fiber)
│   └── ui/                # UI components (NavBar, Footer, VerceBot, etc.)
├── sections/              # Page-specific sections
│   ├── home/              # Home page sections
│   ├── features/          # Features page sections
│   ├── about/             # About page sections
│   ├── pricing/           # Pricing page sections
│   ├── contact/           # Contact page sections
│   ├── blog/              # Blog sections
│   └── shared/            # Shared sections (CTA, etc.)
├── lib/                   # Utility functions and data
│   ├── data.ts            # Static content and data
│   ├── posts.ts           # Blog posts data
│   ├── utils.ts           # Utility functions
│   └── validators.ts      # Zod schemas
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vercedo/vercedo-ai.git
   cd vercedo-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your API keys:
   - `RESEND_API_KEY`: Get from [resend.com](https://resend.com)
   - `CONTACT_RECIPIENT_EMAIL`: Your contact form recipient email

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

---

## 📄 Pages Overview

### Home (`/`)
- Hero section with 3D AI robot (React Three Fiber)
- Highlights section showcasing key benefits
- Feature showcase cards
- CTA section

### Features (`/features`)
- Feature hero
- Feature matrix with detailed capabilities
- CTA section

### About (`/about`)
- About hero
- Mission statements (Vision, Mission, Philosophy)
- AI philosophy pillars
- CTA section

### Pricing (`/pricing`)
- Pricing hero
- Three pricing plans: Aurora, Nebula, Singularity
- CTA section

### Contact (`/contact`)
- Contact hero with channels
- Contact form with validation (Zod)
- Email integration (Resend API)

### Blog (`/blog`)
- Blog listing with featured posts
- Individual blog post pages (dynamic routes)
- Ready for CMS integration (Contentful, Sanity, MDX)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Three Fiber** | 3D graphics |
| **@react-three/drei** | Three.js helpers |
| **Zod** | Form validation |
| **Resend** | Email API |
| **next-seo** | SEO optimization |
| **React Icons** | Icon library |

---

## 🎯 Key Components

### NavBar
Animated navigation bar with scroll detection, mobile menu, and active link highlighting.

### Footer
Multi-column footer with social links, company info, and legal links.

### VerceBot
Floating AI chatbot assistant with animated appearance, suggestions, and chat interface.

### AIRobotCanvas
Interactive 3D holographic robot built with React Three Fiber, featuring orbiting rings and energy orbs.

### LoadingScreen
Animated loading screen with rotating elements.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables
   - Deploy

### Environment Variables for Production

Add these in Vercel dashboard:
- `RESEND_API_KEY`
- `CONTACT_RECIPIENT_EMAIL`

---

## 📝 Customization Guide

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  midnight: '#020617',
  cobalt: '#1f6feb',
  // ... add your colors
}
```

### Modify Content
Edit static content in `lib/data.ts`:
- Navigation links
- Hero highlights
- Feature cards
- Pricing plans
- Contact channels

### Add Blog Posts
Update `lib/posts.ts` with new entries or integrate with a CMS.

### Customize Animations
Adjust Framer Motion variants in section components.

---

## 🧩 Extending the Project

### Add a New Page

1. Create page file: `app/your-page/page.tsx`
2. Create sections: `sections/your-page/`
3. Add to navigation: `lib/data.ts` (navLinks)
4. Add metadata for SEO

### Integrate CMS for Blog

Recommended options:
- **Contentful** – Headless CMS with GraphQL
- **Sanity** – Real-time CMS with structured content
- **MDX** – Markdown with React components

### Add Authentication

Consider:
- **NextAuth.js** – Authentication for Next.js
- **Clerk** – Complete user management
- **Supabase Auth** – Open-source authentication

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for LCP, FID, CLS
- **Image Optimization:** Automatic with Next.js Image component
- **Code Splitting:** Automatic with Next.js App Router

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Inspired by [rapidxai.com](https://rapidxai.com/) for structure
- Aesthetic inspired by [x.ai](https://x.ai/)
- Built with modern web technologies

---

## 📞 Support

For questions or support:
- **Email:** support@vercedo.ai
- **Discord:** [Join our community](https://discord.gg/vercedo)
- **Twitter:** [@vercedo](https://twitter.com/vercedo)

---

<div align="center">
  <p>Built with ❤️ by the Vercedo team</p>
  <p><strong>Automate the Impossible</strong></p>
</div>
