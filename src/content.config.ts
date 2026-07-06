import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A "collection" is a group of content files that share the same shape.
// Here we point Astro at src/content/blog and tell it: every .md file in
// there is a published article. The `schema` lists the pieces of info each
// article's front-matter must contain (title, description, publish date).
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Tie-breaker for posts that share a pubDate. Higher = newer, so it sorts
    // above others from the same day. Optional: posts without it fall back to 0.
    pubOrder: z.number().optional(),
  }),
});

export const collections = { blog };
