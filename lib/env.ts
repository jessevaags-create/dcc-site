import { z } from 'zod';

const serverEnvSchema = z.object({
  SANITY_PROJECT_ID: z.string().default(''),
  SANITY_DATASET: z.string().default('production'),
  SANITY_API_VERSION: z.string().default('2025-11-01'),
  SANITY_READ_TOKEN: z.string().optional(),
  SHOPIFY_STORE_DOMAIN: z.string().default(''),
  SHOPIFY_STOREFRONT_TOKEN: z.string().default(''),
  GA_MEASUREMENT_ID: z.string().default(''),
  FACEBOOK_PIXEL_ID: z.string().default(''),
  HOTJAR_ID: z.string().default('')
});

const parsed = serverEnvSchema.parse({
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  SANITY_DATASET: process.env.SANITY_DATASET,
  SANITY_API_VERSION: process.env.SANITY_API_VERSION,
  SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
  SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
  SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN,
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
  HOTJAR_ID: process.env.HOTJAR_ID
});

export const env = parsed;

export const analyticsEnv = {
  gaMeasurementId: parsed.GA_MEASUREMENT_ID,
  metaPixelId: parsed.FACEBOOK_PIXEL_ID,
  hotjarId: parsed.HOTJAR_ID
};
