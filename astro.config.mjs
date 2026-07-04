// @ts-check
import { defineConfig } from 'astro/config';

// The site is served at https://kestes60.github.io/theskywardsignal/
// - `site` is your GitHub Pages domain (the user/org part only).
// - `base` is the sub-folder your project lives in on that domain.
// Astro uses these two values to build correct links and asset URLs.
export default defineConfig({
  site: 'https://kestes60.github.io',
  base: '/theskywardsignal',
});
