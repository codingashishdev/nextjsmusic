# Music School – Next.js App

An interactive music education site built with Next.js App Router, TypeScript, and Tailwind CSS. It showcases a modern landing page, a courses catalog powered by JSON data, animated UI primitives (3D cards, spotlight, hover menus, marquee testimonials), and responsive, accessible design.

- Live demo: add-your-link-here
- Tech: Next.js 15, React 19, TypeScript, Tailwind CSS v4, ESLint 9

## Highlights (ready for your resume)

- Built a responsive Next.js App Router site with TypeScript and Tailwind CSS v4.
- Implemented animated UI: spotlight/pointer highlights, 3D parallax cards, marquee testimonials, hover menus, wavy backgrounds.
- Structured components for reuse; data-driven UI from a JSON catalog (`src/data/courses.json`).
- Clean architecture with server + client components, zero server state, and static optimization.

## Features

- Hero with spotlight and pointer highlight CTA
- Featured Courses section sourced from JSON
- Courses page with 3D card depth and hover interactions
- Testimonials with infinite moving cards (marquee)
- Upcoming Webinars with hover-effect cards
- Instructors section over animated wavy background with tooltips
- Accessible, responsive layout with a fixed, interactive navbar and footer

See detailed docs in `docs/`:
- `docs/architecture.md` – app structure, data flow, styling, and UI primitives
- `docs/components.md` – component-by-component reference with props and usage
- `docs/data-model.md` – course schema and how to extend content
- `docs/deployment.md` – deploy on Vercel or self-host

## Project structure

```
src/
	app/
		layout.tsx          # Root layout + Navbar
		page.tsx            # Landing page (hero, featured, testimonials, etc.)
		courses/page.tsx    # Courses catalog (3D cards)
		contact/page.tsx    # Contact page (animated background)
	components/
		ui/                 # Reusable animated primitives (3D card, spotlight, etc.)
		*.tsx               # Page sections: Hero, FeaturedCourses, Instructors, etc.
	data/
		courses.json        # Source of truth for course catalog
lib/
	utils.ts              # Utilities (e.g., className merging)
public/
	courses/*.jpg         # Course images used by the catalog
```

## Getting started

Prerequisites:
- Node.js 18.17+ (or 20+)
- npm 9+

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build and run in production mode:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

Open http://localhost:3000 to view the app.

## Configuration

This project doesn’t require environment variables. Content is read from `src/data/courses.json`. Images are served from `public/courses`.

## Data model (courses)

Course entries live in `src/data/courses.json` with the following shape:

```json
{
	"id": 1,
	"title": "Guitar Fundamentals",
	"slug": "guitar-fundamentals",
	"description": "Learn the basics of playing guitar...",
	"price": 99.99,
	"instructor": "John Doe",
	"isFeatured": true,
	"image": "/courses/guitar.jpg"
}
```

Add a new course by appending an object to the `courses` array and placing the referenced image in `public/courses`.

## Deployment

The app is optimized for deployment on Vercel (recommended):
1) Push to GitHub
2) Import the repo on Vercel
3) Framework preset: Next.js (App Router)

Alternatively, use any Node host:

```bash
npm run build
npm start
```

More details in `docs/deployment.md`.

## Accessibility and performance

- Semantic headings and descriptive alt text on images
- Tailwind-first responsive design
- Static assets served from `public/`
- Next steps: migrate catalog images to `next/image` for automatic optimization

## Screenshots

Add screenshots in `docs/images/` and embed them here. For example:

![Landing](docs/images/landing.png)
![Courses](docs/images/courses.png)

## License

No license specified.

