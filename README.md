# The Skyward Signal

A clean, minimal publication built with [Astro](https://astro.build) and
deployed to GitHub Pages.

Live site: https://kestes60.github.io/theskywardsignal/

## Publishing a new article

1. Create a new `.md` file in `src/content/blog/` — the file name becomes the
   URL (e.g. `my-story.md` → `/theskywardsignal/blog/my-story/`).
2. Start the file with front-matter between `---` lines:

   ```markdown
   ---
   title: 'Your headline here'
   description: 'One sentence shown on the homepage list.'
   pubDate: 2026-07-04
   ---

   Write your article here in Markdown.
   ```

3. Save. The article automatically becomes its own page and appears at the top
   of the homepage (articles are sorted newest-first by `pubDate`).

## Running it locally

```bash
npm install      # one time, installs Astro
npm run dev      # preview at http://localhost:4321/theskywardsignal/
npm run build    # produce the static site in dist/
```

## How it deploys

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which
builds the site and publishes it to GitHub Pages. In the repository settings,
set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

## Project layout

- `src/content/blog/` — your articles (one Markdown file each)
- `src/pages/index.astro` — the homepage list (auto-generated, no edits needed)
- `src/pages/blog/[...slug].astro` — turns each article into a page
- `src/layouts/` — shared page and article templates
- `src/styles/global.css` — all styling
- `astro.config.mjs` — GitHub Pages `site` + `base` settings
