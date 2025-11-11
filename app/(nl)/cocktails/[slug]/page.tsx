import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { getCocktailBySlug, getCocktails } from '@/lib/sanity';
import { productJsonLd } from '@/lib/seo';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const cocktails = await getCocktails();
  return cocktails.map((cocktail) => ({ slug: cocktail.slug.current }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const cocktail = await getCocktailBySlug(params.slug);
  if (!cocktail) return {};
  return {
    title: cocktail.title,
    description: cocktail.summary
  };
}

export default async function CocktailDetailPage({ params }: { params: Params }) {
  const cocktail = await getCocktailBySlug(params.slug);
  if (!cocktail) {
    notFound();
  }

  const jsonLd = productJsonLd({
    name: cocktail.title,
    description: cocktail.summary ?? 'Signature cocktail',
    image: cocktail.heroImage ?? 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
    sku: cocktail.shopifyProductHandle,
    offers: cocktail.shopifyProductHandle
      ? {
          price: cocktail.abv * 2,
          priceCurrency: 'EUR'
        }
      : undefined
  });

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src={cocktail.heroImage ?? 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'}
            alt={cocktail.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cocktail</p>
          <h1 className="font-serif text-5xl">{cocktail.title}</h1>
          <p className="mt-4 text-white/70">{cocktail.summary}</p>
          <div className="mt-6 grid gap-3 text-sm text-white/60">
            <p>ABV: {cocktail.abv}%</p>
            <p>Serve: {cocktail.serveTemp}</p>
            <p>Glas: {cocktail.glassType}</p>
            <p>Allergenen: {cocktail.allergens?.join(', ') || 'n.v.t.'}</p>
          </div>
          <div className="mt-8 flex gap-4">
            {cocktail.shopifyProductHandle ? (
              <Button asChild>
                <a href={`https://shopify.com/${cocktail.shopifyProductHandle}`} target="_blank" rel="noreferrer">
                  Koop {cocktail.title}
                </a>
              </Button>
            ) : null}
            <Button asChild variant="secondary">
              <Link href="/contact">Vraag tasting</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
        <h2 className="font-serif text-3xl">Serve guide</h2>
        <p className="mt-3 text-sm text-white/70">{cocktail.howToServe}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
          {cocktail.ingredients?.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
