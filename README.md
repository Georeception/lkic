# Lenny Kivuti Innovation Centre website

Public website for LKIC's research, real estate, ICT and Geomaps, agriventures, and outreach programmes.

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer

## Local development

```bash
npm ci
npm start
```

The Vite development server opens at `http://localhost:5173`.

## Verification

```bash
npm test
npm run build
npm run preview
```

GitHub Actions runs the tests, production build and production-dependency audit for every pull request and pushes to `main`.

## Environment variables

Copy `.env.example` to `.env.local` when local overrides are needed.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | Recommended in production | Origin used for canonical and social metadata |
| `VITE_GA_MEASUREMENT_ID` | No | Enables GA4 page views and Web Vitals; analytics stays disabled when omitted |

Never commit `.env.local` or credentials.

## Content editing and future CMS integration

Public organisation details, navigation, and route metadata live in `src/data/siteContent.js`. Real-estate listings live in `src/data/propertiesData.jsx`. These modules form a small content boundary so a future CMS adapter can replace the local exports without rewriting page components.

When editing content:

1. Keep navigation paths unique and add matching route metadata.
2. Use descriptive alternative text for meaningful images.
3. Optimise photographs as WebP and videos as web-ready MP4 before adding them to `public/images`.
4. Update `public/sitemap.xml` when a public top-level route changes.
5. Run the test and build commands before publishing.

## Deployment

Create a production build with `npm run build` and deploy the generated `dist` directory. `public/_redirects` and `public/_headers` configure SPA routing, security headers and caching on Netlify-compatible hosts. `vercel.json` provides the equivalent configuration for Vercel.

Set `VITE_SITE_URL=https://lkic.africa` during the production build. Add `VITE_GA_MEASUREMENT_ID` only after the site's analytics and privacy requirements have been approved.

After deployment, verify that a direct request to `/about` returns the application, HTTPS is enforced, the security headers are present and the sitemap is available at `/sitemap.xml`.

## Repository workflow

- Develop changes on a feature branch.
- Keep commits focused and review the production build locally.
- Open a pull request into `main` and wait for the CI workflow to pass.
- Do not commit generated `dist` output.
