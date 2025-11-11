import { notFound } from 'next/navigation';

import { CocktailFilters } from '@/components/CocktailFilters';
import { Section } from '@/components/layout/Section';
import { CocktailCard } from '@/components/cards/CocktailCard';
import { getCocktails } from '@/lib/sanity';

export const metadata = {
  title: 'Onze cocktails',
  description: 'Selectie van ready-to-serve cocktails met verschillende smaakprofielen.'
};

interface Props {
  searchParams?: Record<string, string | string[]>;
}

export default async function CocktailsPage({ searchParams }: Props) {
  const cocktails = await getCocktails();
  if (!cocktails.length) {
    notFound();
  }

  const normalize = (value?: string | string[]) => (Array.isArray(value) ? value[0] : value);
  const taste = normalize(searchParams?.taste);
  const strength = normalize(searchParams?.strength);
  const occasion = normalize(searchParams?.occasion);

  const filtered = cocktails.filter((cocktail) => {
    const matchTaste = taste ? cocktail.tasteProfile?.includes(taste) : true;
    const matchStrength = strength ? cocktail.strength === strength : true;
    const matchOccasion = occasion ? cocktail.summary?.toLowerCase().includes(occasion) : true;
    return matchTaste && matchStrength && matchOccasion;
  });

  return (
    <div className="space-y-10">
      <Section kicker="Collectie" title="Onze cocktails" description="Filter op smaak en occasion.">
        <CocktailFilters />
        {filtered.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {filtered.map((cocktail) => (
              <CocktailCard
                key={cocktail._id}
                slug={cocktail.slug.current}
                title={cocktail.title}
                image={cocktail.heroImage ?? 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'}
                tasteProfile={cocktail.tasteProfile ?? []}
                abv={cocktail.abv}
                strength={cocktail.strength as 'low' | 'medium' | 'high'}
              />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-white/60">Geen cocktails voor deze selectie.</p>
        )}
      </Section>
    </div>
  );
}
