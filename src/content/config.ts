import { defineCollection, z } from "astro:content";

const template1 = defineCollection({
  schema: z.object({
    title: z.string(),
    body: z.string(),
  }),
});

export const collections = {
  template1,
};
