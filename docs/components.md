# Components Reference

A quick reference for the main components in this project and how they fit together. Import paths are relative to `src/components` unless otherwise noted.

## Page sections

- `Navbar` – fixed top navigation using `ui/navbar-menu` with hoverable submenus and active state management.
- `HeroSection` – spotlight background + pointer-highlight CTA. Links to `/courses`.
- `FeaturedCourses` – reads `src/data/courses.json`, filters `isFeatured`, renders `ui/background-gradient` cards with title/description/CTA.
- `WhyChooseUs` – narrative content rendered with `ui/sticky-scroll-reveal` for progressive reveal on scroll.
- `TestimonialCards` – marquee/infinite moving cards using `ui/infinite-moving-cards`.
- `UpcomingWebinars` – static featured webinars rendered via `ui/card-hover-effect` with links.
- `Instructors` – `ui/wavy-background` section with `ui/animated-tooltip` for profile bubbles.
- `Footer` – 4-column footer with links and contact info.

## UI primitives (selected)

- `ui/3d-card` – `CardContainer`, `CardBody`, `CardItem` implementing a layered parallax/3D hover effect.
- `ui/Spotlight` – radial animated light sweep used in `HeroSection`.
- `ui/pointer-highlight` – highlights text near pointer movement.
- `ui/navbar-menu` – composable menu, items, and hovered link components used in `Navbar`.
- `ui/infinite-moving-cards` – marquee text/cards with configurable speed and direction.
- `ui/card-hover-effect` – grid items with interactive hover states.
- `ui/wavy-background` – animated canvas/SVG background waves.
- `ui/background-gradient` – gradient container used for featured course cards.

## Data

- `src/data/courses.json` – source of truth for the catalog.
  - Keys: `id`, `title`, `slug`, `description`, `price`, `instructor`, `isFeatured`, `image`.

## Usage patterns

- Client components are declared with `'use client'` at the top when they rely on state, effects, or browser-only APIs.
- Composition: app pages import sections from `components` and UI from `components/ui`.
- Styling: Tailwind classes co-located in JSX for fast iteration.

## Adding a new section

1) Create a new file under `src/components/NewSection.tsx`.
2) Compose UI primitives from `components/ui`.
3) Add the section import and JSX to `src/app/page.tsx`.

## Adding a course detail page (suggested)

- Create a dynamic route at `src/app/courses/[slug]/page.tsx`.
- Read from `src/data/courses.json` and find by `slug`.
- Render details and a CTA.
