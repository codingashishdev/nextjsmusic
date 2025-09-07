# Data model

This app reads a single JSON file for the catalog: `src/data/courses.json`.

## Course

```
{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string // path under public/
}
```

### Notes
- `slug` is used to generate links like `/courses/<slug>`.
- `isFeatured` controls whether a course appears in the homepage `FeaturedCourses` section.
- `image` should point to files under `public/courses`.

### Editing content
- Update or append entries in `src/data/courses.json`.
- Ensure referenced images exist under `public/courses/`.
- Keep IDs unique and stable.

### Potential extensions
- Add `duration`, `level`, and `tags` to support filtering/sorting on the catalog page.
- Split data into multiple JSON files or move to a CMS (e.g., Contentlayer, Sanity) if scale grows.
