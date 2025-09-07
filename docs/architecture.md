# Architecture

This project is a statically optimized Next.js App Router site that renders an interactive landing and catalog experience with client components for animations and server components for layout/stitching.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint 9

## App layout and routing

- `src/app/layout.tsx` – root layout, shared fonts (Geist), global CSS, and `Navbar`.
- `src/app/page.tsx` – landing page composed of section components: `HeroSection`, `FeaturedCourses`, `WhyChooseUs`, `TestimonialCards`, `UpcomingWebinars`, `Instructors`, and `Footer`.
- `src/app/courses/page.tsx` – catalog view reading from `src/data/courses.json`.
- `src/app/contact/page.tsx` – static contact page with animated background.

Pages are mostly static and fetch no server data. This allows for fast builds and edge-friendly static output.

## Components

- Presentation sections live in `src/components/*`.
- Reusable animated primitives live in `src/components/ui/*` (3D cards, spotlight, hover menus, marquee, wavy backgrounds, etc.).
- Utilities live in `src/lib/utils.ts` (e.g., `cn` helper).

### Client vs server

- Most animation-heavy components are marked `'use client'` and render on the client for interactivity.
- Layout and some section composition can render on the server by default.

## Styling system

Tailwind CSS v4 is used with utility-first classes and a small `globals.css` for base styles. The design emphasizes:
- Contrast and readability on dark backgrounds
- Responsive spacing and typography
- Focus-visible rings for accessible interactions

## Data flow

- Courses are sourced from `src/data/courses.json`.
- `FeaturedCourses` filters by `isFeatured`.
- `src/app/courses/page.tsx` maps through all courses and renders 3D cards.

## Assets

- Course images live in `public/courses` and are referenced by relative path in the JSON.
- Consider migrating to `next/image` for built-in optimization.

## Extensibility

- Add new pages under `src/app/<route>/page.tsx`.
- Create new sections in `src/components` and compose them in `src/app/page.tsx`.
- Add new UI primitives in `src/components/ui` and keep styles co-located.

## Known improvements (nice to have)

- Replace `<img>` with `next/image` in the catalog for performance.
- Add course detail dynamic route `src/app/courses/[slug]/page.tsx` using the existing JSON data.
- Add unit tests for utils and smoke tests for pages (Playwright).
- Add SEO metadata per page and Open Graph images.
