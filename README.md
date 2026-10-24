# alonsor04.github.io

Personal portfolio of Alonso Ríos Guerra — software engineer with a focus on business, applied AI and Python.

Live site: https://alonsor04.github.io (English) · https://alonsor04.github.io/es/ (Spanish)

## Stack

- [Astro](https://astro.build) (static output, no client framework)
- Plain CSS with design tokens in `src/styles/global.css`
- Deployed to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`)

## Run locally

Requires Node.js 22.19 or later.

```powershell
npm install
npm run dev       # http://localhost:4321
npm run build     # static build in dist/
npm run preview   # serve dist/ locally
```

## Structure

```
src/pages/        index.astro (EN, "/") and es/index.astro (ES, "/es/")
src/components/   page sections (Hero, CaseStudy, Projects, About, SkillsCards, Contact…)
src/i18n/         UI strings for both languages and path helpers (hreflang, language switch)
src/data/         project and skills content (EN/ES)
src/assets/       images optimised by Astro at build time
public/           files served as-is (CVs, favicon)
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages. Pull requests only run the build.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
