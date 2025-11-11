import type { MetadataRoute } from 'next';

import { getCocktails, getPosts } from '@/lib/sanity';

const baseUrl = 'https://www.dutchcocktailclub.example';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cocktails = await getCocktails();
  const posts = await getPosts();
  const staticRoutes = ['/', '/cocktails', '/horeca', '/events', '/mocktails', '/over-ons', '/blog', '/contact', '/partner-worden', '/shop', '/proefbox'];

  const pages = [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...cocktails.map((cocktail) => ({ url: `${baseUrl}/cocktails/${cocktail.slug.current}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${baseUrl}/blog/${post.slug.current}`, lastModified: new Date(post.publishedAt ?? Date.now()) }))
  ];

  return pages;
}
