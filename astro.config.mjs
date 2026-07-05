// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the root of the custom domain theskywardsignal.com.
// - `site` is the full public URL; it keeps canonical links and the sitemap correct.
// - No `base` is set, so it defaults to '/' (the site root). A base prefix would
//   double up the path on a root-served custom domain and break internal links.
export default defineConfig({
  site: 'https://theskywardsignal.com',
});
