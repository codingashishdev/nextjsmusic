# Deployment

## Vercel (recommended)

1. Push your repository to GitHub.
2. Go to Vercel and import the repository.
3. Framework preset: Next.js (App Router). No environment variables needed.
4. Build command: `next build` (Vercel auto-detects).
5. Output: Next.js default. 
6. After deploy, add a custom domain if desired.

## Self-host (Node server)

Requirements: Node 18.17+ or 20+.

```bash
npm ci
npm run build
npm start
```

The app will serve on port 3000 by default.

## Static optimization

Most pages are statically optimized. If you later add dynamic routes or data fetching, confirm caching and revalidation strategies in Next.js docs.

## Next steps
- Add an OG image per route using the Next.js metadata API.
- Enable image optimization by migrating catalog images to `next/image`.
