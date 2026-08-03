# Interview Prep Kit

A self-contained interview prep site with two separate tracks:

- **Product** — case studies, frameworks, interview experiences, handbooks and
  resources for PM interviews (ported from PM School, BITSoM, ISB BTC, IITK and
  IIMC materials).
- **Consulting** — starter case-interview frameworks and resources, with real
  casebooks to be added over time.

Built with Vite + React + TypeScript. Fonts are self-hosted via `@fontsource`
and all handbook PDFs are served from this site, so the built site has no
runtime dependency on any external host.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.
