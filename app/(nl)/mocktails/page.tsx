import { CTA } from '@/components/CTA';
import { Section } from '@/components/layout/Section';
import { CocktailCard } from '@/components/cards/CocktailCard';
import { getCocktails } from '@/lib/sanity';

export const metadata = {
  title: 'Mocktails 0.0%',
  description: 'Zero proof cocktails zonder concessies op smaak.'
};

export default async function MocktailsPage() {
  const cocktails = await getCocktails();
  const mocktails = cocktails.filter((cocktail) => cocktail.isAlcoholFree);

  return (
    <div className="space-y-16">
      <Section kicker="0.0%" title="Mocktails met complexiteit" description="Botanical layers, spice en mouthfeel zonder alcohol.">
        {mocktails.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {mocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail._id}
                slug={cocktail.slug.current}
                title={cocktail.title}
                image={cocktail.heroImage ?? 'https://images.unsplash.com/photo-1514361892635-6e122620eaff'}
                tasteProfile={cocktail.tasteProfile ?? []}
                abv={cocktail.abv}
                strength={cocktail.strength as 'low' | 'medium' | 'high'}
              />
            ))}
          </div>
        ) : (
          <p className="text-white/60">Mocktail assortiment volgt snel.</p>
        )}
      </Section>
      <Section>
        <CTA
          kicker="Proef"
          title="Zero proof flight"
          description="Wij sturen een flight van 3 mocktails zodat je crew direct kan testen."
          primary={{ label: 'Vraag flight aan', href: '/contact' }}
          secondary={{ label: 'Shop mocktails', href: '/shop' }}
        />
      </Section>
    </div>
  );
}
