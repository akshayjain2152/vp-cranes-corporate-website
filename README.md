# VP CRANES corporate website

A production-ready Next.js corporate site for VP CRANES, built with the App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Easy content updates

- **Business details, client names, services and gallery image names:** `data/site.ts`
- **Logo and favicon:** `public/images/logo.png`
- **Main page sections / form / map placeholder:** `components/site-shell.tsx`
- **Visual design:** `app/globals.css`

The field photography is sourced from the existing VP CRANES website to keep the initial launch aligned with the supplied reference. Replace any of the image URLs in `data/site.ts` with production photography whenever it becomes available. The map is intentionally a clear placeholder until the final Google Maps embed link is supplied.

## Deployment

The project is ready to import into Vercel or push directly to GitHub. Configure the production domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` if it changes from `https://www.vpcranes.com`.
