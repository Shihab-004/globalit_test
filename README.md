<div align="center">

# 🌐 Global IT Technology — Enterprise Website

**Technology That Keeps Your Business Moving.**

A production-grade, highly polished, responsive one-page website engineered for **Global IT Technology** — an Australian family-owned IT and telecommunications services company based in Melbourne.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-React-ff0055?style=flat-square&logo=framer)](https://motion.dev/)

</div>

---

## 📌 Overview

This repository contains the complete, production-ready marketing website for **Global IT Technology**. Built with modern frontend engineering practices, strict TypeScript, responsive layouts, and an art-directed agency design language.

- **Company Identity**: Australian family-owned IT & telecommunications provider with 20+ years of industry leadership.
- **Brand Palette**: Derived directly from the official company logo — Brand Blue (`#1a6db5`), Brand Green (`#3a9e6a`), and Dark Charcoal (`#252d3a`).
- **Core Focus**: Managed Services, Cloud Computing, Technical Maintenance, IT Procurement, Strategic Consultancy, and Cybersecurity.

---

## ✨ Key Features & Creative Highlights

- 🎯 **Supercharged Animated Cursor**:
  - The default browser cursor is cleanly hidden on desktop.
  - Features an instant, zero-lag precision target dot.
  - Smooth spring-physics follower ring that morphs dynamically when hovering over buttons, links, or text inputs.
  - Ambient backlight orb that casts soft luminous glow across sections.
  - Tactile click shockwave ripples on every mouse press.
  - Native touch compatibility on mobile/touchscreen devices.
- 🌐 **Custom Enterprise Network Hero**:
  - Bespoke interactive SVG network topology diagram.
  - Animated data packets traveling between cloud infrastructure, satellite nodes, and central operations.
  - Dynamic gradient typography and dual clear call-to-actions (CTAs).
- 📊 **Animated Trust Metrics**:
  - Highlights real company statistics with viewport-triggered `CountUp` animations:
    - **120+** Projects Completed
    - **175+** Satisfied Clients
    - **15** Experienced Staff
    - **9.1** Customer NPS
    - **100%** Client Satisfaction Rate
- 🛠️ **Interactive Bento Services**:
  - 6 service presentations featuring icon hover color swaps, gradient line reveals, and staggered entry animations.
- 💡 **Real-World Problem Solving**:
  - 8-card grid addressing common business pain points (ISP support, network downtime, Wi-Fi reliability, phone systems, CRM integration, hardware lifecycle).
- ⏱️ **Our 4-Step Process**:
  - Clear timeline showing how projects move from *Issue Definition* to *Problem Solving & Testing*.
  - Responsive horizontal desktop layout transitioning into a vertical connected line on mobile.
- 🏢 **About & Credibility Section**:
  - Narrative story highlighting the founder's 20 years of telecommunications experience, Melbourne roots, and ACMA-registered cabling certification.
- 📝 **Production-Ready Contact & Quote Form**:
  - Built with **React Hook Form** and **Zod** schema validation.
  - Accessible inline error feedback, loading spinners, and complete submission handling.
  - Supports automated email delivery (via Resend) with an honest direct-contact fallback when unconfigured.
- 📱 **Mobile-First Responsive Design**:
  - Pixel-perfect navigation with an animated hamburger drawer.
  - Seamless layout scaling across small mobile (320px–375px), tablets (768px), and wide monitors (1440px+).

---

## 🗂️ Project Structure

```text
globalit_test/
├── public/
│   ├── favicon.ico              # Website favicon
│   └── logo.webp                # Official Global IT Technology logo
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Serverless POST API for contact enquiries
│   │   ├── favicon.ico          # App router favicon
│   │   ├── globals.css          # Tailwind 4 @theme tokens & custom scrollbars
│   │   ├── layout.tsx           # Root layout (Inter + Plus Jakarta Sans fonts, SEO metadata)
│   │   └── page.tsx             # Main page composing all 10 sections
│   ├── components/
│   │   ├── ui/
│   │   │   └── animations.tsx   # Reusable Motion wrappers (FadeIn, StaggerContainer, CountUp)
│   │   ├── About.tsx            # Company history, founder quote & credentials
│   │   ├── AnimatedCursor.tsx   # Custom animated cursor with spring physics & shockwaves
│   │   ├── ContactForm.tsx      # RHF + Zod validated inquiry form
│   │   ├── Footer.tsx           # Multi-column footer with contact links & legal copyright
│   │   ├── Hero.tsx             # High-impact hero with bespoke animated network SVG
│   │   ├── Navigation.tsx       # Sticky navbar with mobile menu
│   │   ├── OurProcess.tsx       # 4-stage connected process timeline
│   │   ├── ProblemsWeSolve.tsx  # 8 common IT pain points with business outcomes
│   │   ├── Services.tsx         # 6 core service presentations in a bento grid
│   │   ├── TrustMetrics.tsx     # Dark metrics section with animated counters
│   │   └── WhyGlobalIT.tsx      # Core company differentiators & values
│   └── lib/
│       └── data.ts              # Single source of truth for all business copy & content
├── .env.example                 # Template for email service credentials
├── .gitignore                   # Standard git exclusions (node_modules, .next, etc.)
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # Strict TypeScript configuration
└── README.md                    # Project documentation
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (Node 20+ recommended)
- **npm**: `v9.0.0` or higher (or pnpm / yarn)
- **Git**

### 2. Clone the Repository
```bash
git clone git@github.com:Shihab-004/globalit_test.git
cd globalit_test
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** to view the live website.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js local development server on port 3000 with Turbopack. |
| `npm run build` | Compiles an optimized, production-ready build and prerenders static routes. |
| `npm run start` | Boots the compiled Next.js production server. |
| `npm run lint` | Runs ESLint to check for code quality and convention issues. |
| `npx tsc --noEmit` | Executes TypeScript type-checking across the entire codebase. |

---

## 📬 Contact Form & Email Integration

The enquiry form submits data to `/api/contact`. By default, if no email service is configured, it displays an honest fallback providing the company's direct phone number (`03 9070 8103`) and email (`info@globalit.technology`).

### Enabling Live Email Delivery (Resend)
1. Sign up for an API key at [resend.com](https://resend.com).
2. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
3. Populate the environment variables:
   ```env
   EMAIL_SERVICE=resend
   EMAIL_API_KEY=re_your_api_key_here
   EMAIL_USER=noreply@yourdomain.com
   EMAIL_TO=info@globalit.technology
   ```
4. Restart your development server. Submissions will now be dispatched directly to your inbox.

---

## ✏️ Updating Website Content

To modify company text, service offerings, or metrics without touching JSX components, simply edit:

📁 **[`src/lib/data.ts`](src/lib/data.ts)**

All business data is organized into typed constants:
- `COMPANY`: Name, address, phone numbers, email, and company description.
- `METRICS`: Client satisfaction statistics and project numbers.
- `SERVICES`: Titles, summaries, descriptions, and icon mappings for the 6 services.
- `PROBLEMS`: Common business IT pain points and resolutions.
- `PROCESS_STEPS`: The 4 documented development and delivery stages.
- `WHY_GLOBAL_IT`: Company background facts and differentiators.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and configures the build settings.
4. Add your environment variables under **Project Settings → Environment Variables**.
5. Click **Deploy**.

### Self-Hosted / Docker / VPS
Build and serve the standalone application on any Node.js server:
```bash
npm run build
npm run start
```
The application will listen on port `3000` (or `process.env.PORT`).

---

## ♿ Accessibility & Performance

- **WCAG AA Compliance**: High-contrast text colors tested against background surfaces.
- **Keyboard Navigation**: Focus outlines (`:focus-visible`) on all interactive buttons, links, and form fields.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` system settings.
- **SEO & Social Sharing**: Open Graph and Twitter Card tags configured with dynamic image metadata.
- **Core Web Vitals**: Built with zero cumulative layout shifts (CLS) and optimized Next.js font and image loaders.

---

## 📄 License & Attribution

All brand assets, company names, and intellectual property belong to **Global IT Technology**.  
Engineered with ❤️ for Australian business continuity.
