# Bolunga Systems - Homepage Documentation

> **Author:** Mahlatse (Developer 1)
> **Last Updated:** 2026-06-02
> **Project:** Bolunga Systems Website Redesign

---

## Overview

The homepage is built using a modular section-based architecture.  
Each section is its own component, and all content lives in `/src/data/home.ts`.

---

## File Structure

src/
├── app/
│ ├── layout.tsx # Root layout, metadata, viewport
│ └── page.tsx # Homepage route (calls HomePageContent)
│
├── components/
│ ├── layout/
│ │ ├── navbar.tsx # Top navigation
│ │ ├── footer.tsx # Site footer
│ │ └── announcement-bar.tsx
│ │
│ ├── navigation/
│ │ ├── nav-link.tsx # Reusable nav link with active state
│ │ └── mobile-nav.tsx # Mobile hamburger menu
│ │
│ ├── ui/
│ │ ├── button.tsx # Reusable button (5 variants)
│ │ ├── section.tsx # Section wrapper with backgrounds
│ │ ├── section-heading.tsx # Reusable section heading
│ │ ├── container.tsx # Max-width container
│ │ └── card.tsx # Generic card wrapper
│ │
│ └── sections/
│ ├── service-card.tsx # Service grid card
│ ├── project-card.tsx # Project showcase card
│ ├── stat-card.tsx # Impact stats card
│ ├── industry-card.tsx # Industry list card
│ ├── cta-block.tsx # Reusable CTA block
│ ├── home-page-content.tsx # Homepage assembly
│ │
│ └── home/
│ ├── hero-section.tsx
│ ├── about-section.tsx
│ ├── services-section.tsx
│ ├── industries-section.tsx
│ ├── projects-section.tsx
│ ├── impact-section.tsx
│ └── affiliations-section.tsx
│
├── constants/
│ └── site.ts # Site config (URLs, social, phone, email)
│
├── data/
│ └── home.ts # All homepage content data
│
└── lib/
└── utils.ts # cn() utility for class merging



---

## Homepage Section Order

1. **Hero** (carousel)
2. **About** (Who We Are)
3. **Services** (Core Ecosystem)
4. **Industries** (Industries We Transform)
5. **Projects** (Featured Projects)
6. **Impact** (Stats)
7. **Affiliations + CTA**

---

## How to Edit Content

### Change Hero Slides
Edit `src/data/home.ts` → `heroSlides` array

### Change Services
Edit `src/data/home.ts` → `homeServices` array  
Icons available: Briefcase, ShieldCheck, Radio, Brain, Database, Recycle

### Change Featured Projects
Edit `src/data/home.ts` → `featuredProjects` array

### Change Impact Stats
Edit `src/data/home.ts` → `impactStats` array

### Change Industries
Edit `src/data/home.ts` → `industries` array

### Change Company Pillars (Vision/Values/BBBEE)
Edit `src/data/home.ts` → `companyPillars` array

### Change Site-Wide Config
Edit `src/constants/site.ts`
- Phone, email, address
- Social media URLs
- Navigation menu
- Footer services list

---

## How to Use Shared Components

### Button
```tsx
<Button href="/contact" variant="primary" size="lg" arrow>
  Get Started
</Button>

Variants: primary, secondary, ghost, dark, outline
Sizes: sm, md, lg
Props: loading, loadingText, arrow, external

<SectionHeading
  title="My Title"
  accentWord="Accent"
  description="Optional description"
  align="center"
  theme="dark"
  size="lg"
/>

<Section background="white" id="my-section">
  {/* content */}
</Section>

<CtaBlock />  // uses defaults

<CtaBlock
  title="Custom title"
  description="Custom description"
  buttons={[
    { label: "Action", href: "/action", variant: "primary" }
  ]}
/>
