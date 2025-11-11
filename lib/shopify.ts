interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description?: string;
  featuredImage?: { url: string };
  priceRange?: { minVariantPrice: { amount: string; currencyCode: string } };
}

const fallbackProducts: ShopifyProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    title: 'Espresso Martini Pack',
    handle: 'espresso-martini-pack',
    description: '12 x 200ml flessen, ready-to-serve.',
    featuredImage: { url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187' },
    priceRange: { minVariantPrice: { amount: '89.00', currencyCode: 'EUR' } }
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Event Pack 10L',
    handle: 'event-pack-10l',
    description: 'Bag-in-box 10 liter, ideaal voor events.',
    featuredImage: { url: 'https://images.unsplash.com/photo-1468465226960-8899e992537c' },
    priceRange: { minVariantPrice: { amount: '249.00', currencyCode: 'EUR' } }
  }
];

export async function fetchShopProducts() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  if (!domain || !token) {
    return { connected: false, products: fallbackProducts };
  }
  const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: `{
        products(first: 12) {
          edges {
            node {
              id
              title
              handle
              description
              featuredImage { url }
              priceRangeV2 { minVariantPrice { amount currencyCode } }
            }
          }
        }
      }`
    })
  });
  if (!response.ok) {
    return { connected: false, products: fallbackProducts };
  }
  const json = await response.json();
  const products = json?.data?.products?.edges?.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    handle: edge.node.handle,
    description: edge.node.description,
    featuredImage: edge.node.featuredImage,
    priceRange: edge.node.priceRangeV2
  }));
  return { connected: true, products };
}

export async function fetchShopProduct(handle: string) {
  const { products } = await fetchShopProducts();
  return products.find((product) => product.handle === handle);
}
