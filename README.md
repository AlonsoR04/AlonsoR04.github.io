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

## Editing content

| What | Where |
|---|---|
| Hero, About, contact links, CV paths (EN/ES) | `src/i18n/ui.ts` |
| ChurnAnchor case study and other projects | `src/data/projects.ts` |
| Skills, languages and interests | `src/data/skills.ts` |
| Photos and video poster | `src/assets/` (strip EXIF/GPS metadata before adding photos) |

Every text exists in English and Spanish; update both.

### Updating the CVs

Replace the PDFs in `public/assets/docs/`, keeping the file names so existing links keep working:

- `cv_alonso_rios_guerra_eng.pdf` — downloaded from the English site
- `cv_alonso_rios_guerra_esp.pdf` — downloaded from the Spanish site

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages. Pull requests only run the build.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
