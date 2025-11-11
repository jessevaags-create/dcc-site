import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.dutchcocktailclub.example';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api']
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
