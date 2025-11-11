import { z } from 'zod';

export const imageSchema = z.string().url().or(
  z.object({ asset: z.object({ _ref: z.string(), _type: z.literal('reference') }) })
);

export const cocktailSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({ current: z.string() }),
  heroImage: z.string().optional(),
  gallery: z.array(z.string()).optional(),
  summary: z.string().optional(),
  tasteProfile: z.array(z.string()).optional(),
  strength: z.enum(['low', 'medium', 'high']),
  abv: z.number(),
  serveTemp: z.string().optional(),
  glassType: z.string().optional(),
  allergens: z.array(z.string()).optional(),
  ingredients: z.array(z.string()).optional(),
  howToServe: z.string().optional(),
  isAlcoholFree: z.boolean().optional(),
  shopifyProductHandle: z.string().optional()
});

export type Cocktail = z.infer<typeof cocktailSchema>;

export const testimonialSchema = z.object({
  _id: z.string(),
  quote: z.string(),
  author: z.string(),
  role: z.string().optional(),
  logo: z.string().optional()
});
export type Testimonial = z.infer<typeof testimonialSchema>;

export const postSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({ current: z.string() }),
  excerpt: z.string().optional(),
  coverImage: z.string().optional(),
  body: z.union([z.string(), z.array(z.any())]).optional(),
  tags: z.array(z.string()).optional(),
  publishedAt: z.string().optional()
});
export type Post = z.infer<typeof postSchema>;

export const caseStudySchema = z.object({
  _id: z.string(),
  title: z.string(),
  metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  body: z.string().optional(),
  logo: z.string().optional(),
  hero: z.string().optional()
});
export type CaseStudy = z.infer<typeof caseStudySchema>;

export const teamMemberSchema = z.object({
  _id: z.string(),
  name: z.string(),
  role: z.string(),
  photo: z.string().optional(),
  bio: z.string().optional()
});
export type TeamMember = z.infer<typeof teamMemberSchema>;

export const faqSchema = z.object({
  _id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string().optional()
});
export type Faq = z.infer<typeof faqSchema>;
