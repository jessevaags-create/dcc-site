import { cache } from 'react';
import { z } from 'zod';

import { env } from '@/lib/env';
import { getSanityClient } from '@/sanity/client';
import { seedCaseStudies, seedCocktails, seedFaq, seedPosts, seedTeam, seedTestimonials } from '@/sanity/seed';
import { caseStudySchema, cocktailSchema, faqSchema, postSchema, teamMemberSchema, testimonialSchema } from '@/sanity/types';

const client = getSanityClient();
const isConfigured = Boolean(env.SANITY_PROJECT_ID && env.SANITY_PROJECT_ID !== 'demo');

const cocktailArray = z.array(cocktailSchema);
const testimonialArray = z.array(testimonialSchema);
const postArray = z.array(postSchema);
const caseArray = z.array(caseStudySchema);
const teamArray = z.array(teamMemberSchema);
const faqArray = z.array(faqSchema);

async function fetchOrFallback<T>(params: { query: string; schema: z.ZodSchema<T>; fallback: T }) {
  if (!isConfigured) {
    return params.fallback;
  }
  try {
    const data = await client.fetch(params.query, {});
    return params.schema.parse(data);
  } catch (error) {
    console.warn('Sanity fetch failed, fallback to seed', error);
    return params.fallback;
  }
}

export const getCocktails = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "cocktail"] | order(title asc){
      _id, title, slug, heroImage, gallery, summary, tasteProfile, strength, abv,
      serveTemp, glassType, allergens, ingredients, howToServe, isAlcoholFree, shopifyProductHandle
    }`,
    schema: cocktailArray,
    fallback: seedCocktails
  });
});

export const getCocktailBySlug = cache(async (slug: string) => {
  const data = await fetchOrFallback({
    query: `*[_type == "cocktail" && slug.current == $slug][0]{
      _id, title, slug, heroImage, gallery, summary, tasteProfile, strength, abv,
      serveTemp, glassType, allergens, ingredients, howToServe, isAlcoholFree, shopifyProductHandle
    }`,
    schema: cocktailSchema.nullable(),
    fallback: seedCocktails.find((cocktail) => cocktail.slug.current === slug) ?? null
  });
  return data;
});

export const getTestimonials = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "testimonial"]{ _id, quote, author, role, logo }`,
    schema: testimonialArray,
    fallback: seedTestimonials
  });
});

export const getCaseStudies = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "caseStudy"]{ _id, title, metrics, body, logo, hero }`,
    schema: caseArray,
    fallback: seedCaseStudies
  });
});

export const getPosts = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "post"] | order(publishedAt desc){ _id, title, slug, excerpt, coverImage, body, tags, publishedAt }`,
    schema: postArray,
    fallback: seedPosts
  });
});

export const getPostBySlug = cache(async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug.current === slug) ?? null;
});

export const getTeam = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "teamMember"]{ _id, name, role, photo, bio }`,
    schema: teamArray,
    fallback: seedTeam
  });
});

export const getFaq = cache(async () => {
  return fetchOrFallback({
    query: `*[_type == "faq"]{ _id, question, answer, category }`,
    schema: faqArray,
    fallback: seedFaq
  });
});
