import { createClient } from '@sanity/client';

import { env } from '@/lib/env';

export function getSanityClient() {
  if (!env.SANITY_PROJECT_ID) {
    console.warn('SANITY_PROJECT_ID ontbreekt — val terug op mockdata.');
  }

  return createClient({
    projectId: env.SANITY_PROJECT_ID || 'demo',
    dataset: env.SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION,
    useCdn: true,
    token: env.SANITY_READ_TOKEN
  });
}
