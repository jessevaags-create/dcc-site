import Image from 'next/image';

import { Section } from '@/components/layout/Section';
import { fetchShopProducts } from '@/lib/shopify';
import { productJsonLd } from '@/lib/seo';

export const metadata = {
  title: 'Shop',
  description: 'Bestel Dutch Cocktail Club blends via Shopify.'
};

export default async function ShopPage() {
  const { connected, products } = await fetchShopProducts();
  const jsonLdPayload = products.map((product) =>
    productJsonLd({
      name: product.title,
      description: product.description ?? '',
      image: product.featuredImage?.url ?? 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
      sku: product.handle,
      offers: product.priceRange?.minVariantPrice
        ? {
            price: Number(product.priceRange.minVariantPrice.amount),
            priceCurrency: product.priceRange.minVariantPrice.currencyCode
          }
        : undefined
    })
  );

  return (
    <Section kicker="Shop" title="Ready-to-serve" description="Direct naar Shopify checkout.">
      {!connected ? (
        <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-200">
          Connect Shopify via SHOPIFY_STORE_DOMAIN + token om live data te tonen. We tonen nu demo-producten.
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl">
              {product.featuredImage?.url ? (
                <Image
                  src={product.featuredImage.url}
                  alt={product.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl">{product.title}</h3>
                <p className="text-sm text-white/70">{product.description}</p>
              </div>
              <div className="text-right text-sm text-white/70">
                {product.priceRange?.minVariantPrice?.amount ? `€${product.priceRange.minVariantPrice.amount}` : 'Prijs via checkout'}
              </div>
            </div>
            <a
              href={`https://${process.env.SHOPIFY_STORE_DOMAIN || 'demo.myshopify.com'}/products/${product.handle}`}
              className="mt-4 inline-flex rounded-full bg-[#C47A3A] px-4 py-2 text-sm text-black"
            >
              Naar Shopify
            </a>
          </div>
        ))}
      </div>
      {jsonLdPayload.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Section>
  );
}
