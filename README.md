# Portfolio (Next.js static export)

Static portfolio for Anton Bogatchenko using Next.js App Router, exported as static HTML for GitHub Pages.

## Scripts

- `npm run dev` – local dev server
- `npm run build` – build the app
- `npm run export` – static export to `out/`

## Deploy to GitHub Pages

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on push to `main`. Output directory is `out/`.

Custom domain is configured via `public/CNAME`; `.nojekyll` is present.

## Customize

- Update content in `src/app` pages: `about`, `works`, `contacts`.
- Edit global styles in `src/app/globals.css`.
