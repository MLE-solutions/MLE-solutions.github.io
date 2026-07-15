import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    partner: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    images: z.array(z.string()),

    challenge: z.string().optional(),
    technologies: z.array(z.string()),
    outcome: z.string().optional(),

    caseNumber: z.number().optional(),
  }),
});

export const collections = {
  projects,
};
