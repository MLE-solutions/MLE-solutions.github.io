import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    partner: z.string(),
    linktitle: z.string(),
    title: z.string(),
    subtitle: z.string(),
    highlights: z.array(z.string()),
    images: z.array(z.string()),
    challenge: z.string().optional(),
    outcome: z.string(),
    caseNumber: z.number().optional(),
  }),
});

export const collections = {
  projects,
};
