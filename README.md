# PortfolioNova

PortfolioNova is a premium reusable portfolio template built with Next.js 15, React, TypeScript, Tailwind CSS, shadcn-style components, and Framer Motion.

## Features

- Premium multi-page portfolio structure
- Centralized content in `src/data/portfolio-config.ts`
- Demo personas for UI/UX designer, full stack developer, and agency/studio
- Project filtering with dynamic project detail pages
- Services, resume, testimonials, FAQ, contact, blog, and case study pages
- Light and dark mode with a clean, modern visual system
- SEO-ready metadata, sitemap, robots, and OG image structure
- Responsive layouts and polished empty/loading states

## Getting started

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Customize content

Most customization happens in one file:

- `src/data/portfolio-config.ts`

Update these areas there:

- `activePersona`: switch the demo between `designer`, `developer`, and `agency`
- `personas`: replace name, role, bio, skills, tools, services, projects, articles, testimonials, and FAQ content
- `theme.accents`: adjust accent gradients
- `homepage`: toggle optional sections and featured project count
- `seo`: update global site metadata

## Replace images

Project thumbnails and galleries currently use local SVG demo assets in:

- `public/images/projects`

Swap them with your own PNG, JPG, WebP, or SVG files and update the matching paths in `src/data/portfolio-config.ts`.

## Resume download

The resume button currently points to a demo text file:

- `public/resume/portfolio-nova-resume.txt`

Replace it with your own PDF, then update `resumeFile` in `src/data/portfolio-config.ts`.

## Theme and design tweaks

Adjust design tokens in:

- `src/app/globals.css` for CSS color variables
- `tailwind.config.ts` for shadows, radii, fonts, and utility extensions

## Form integration

The contact form is UI-only by default.

To connect it, update:

- `src/components/contact-form.tsx`

You can wire it to a Next.js server action, Formspree, Resend, EmailJS, or your own backend.

## Deploy to Vercel

1. Push the repo to GitHub
2. Import it into Vercel
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy

## Suggested next upgrades

- Add CMS support for blog posts or projects
- Connect the contact form to an email workflow
- Add localized content or multiple theme presets
- Introduce a testimonials carousel or project card variants