interface OrganizationJSONLD {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface ProductJSONLD {
  name: string;
  description: string;
  image: string;
  sku?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability?: string;
  };
}

interface ArticleJSONLD {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  description: string;
}

export const organizationJsonLd = (data: OrganizationJSONLD) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  ...data
});

export const productJsonLd = (data: ProductJSONLD) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  ...data,
  offers: data.offers
    ? {
        '@type': 'Offer',
        priceCurrency: data.offers.priceCurrency,
        price: data.offers.price,
        availability: data.offers.availability || 'https://schema.org/InStock'
      }
    : undefined
});

export const articleJsonLd = (data: ArticleJSONLD) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  ...data
});
