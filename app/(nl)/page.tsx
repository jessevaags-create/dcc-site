<section className="hero">
  <h1>Premium ready-to-serve cocktails voor horeca, events & liefhebbers</h1>
  <p>Bar-kwaliteit in 10 seconden. Smaakprofielen ontwikkeld door award-winning bartenders.</p>
  <div style={{display:'flex',gap:12,marginTop:16}}>
    <a className="btn btn-primary" href="/proefbox">Proefbox aanvragen</a>
    <a className="btn" href="/horeca">Voor Horeca</a>
  </div>
</section>

import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { HeroVideo } from '@/components/HeroVideo';
import { BlogList } from '@/components/blog/BlogList';
import { Section } from '@/components/layout/Section';
import { LogoWall } from '@/components/LogoWall';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CocktailCard } from '@/components/cards/CocktailCard';
import { Button } from '@/components/ui/button';
import { Stat } from '@/components/data/Stat';
import { getPosts, getTestimonials, getCocktails } from '@/lib/sanity';
import { organizationJsonLd } from '@/lib/seo';

export const revalidate = 3600;

export default async function HomePage() {
  const [cocktails, testimonials, posts] = await Promise.all([getCocktails(), getTestimonials(), getPosts()]);
  const heroCocktails = cocktails.slice(0, 3);
  const orgJson = organizationJsonLd({
    name: 'Dutch Cocktail Club',
    url: 'https://www.dutchcocktailclub.example',
    logo: 'https://www.dutchcocktailclub.example/logo.png',
    sameAs: ['https://www.instagram.com/dutchcocktailclub']
  });

  return (
    <div className="space-y-16">
      <section className="mx-auto max-w-6xl px-4">
        <HeroVideo
          videoSrc="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          poster="https://images.unsplash.com/photo-1470337458703-46ad1756a187"
          title="Premium ready-to-serve cocktails voor horeca, events en liefhebbers"
          subtitle="Bar-kwaliteit in 10 seconden. Smaakprofielen ontwikkeld door award-winning bartenders."
          cta={
            <>
              <Button asChild size="lg">
                <Link href="/contact">Plan tasting</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/shop">Bekijk shop</Link>
              </Button>
            </>
          }
        />
      </section>

      <Section kicker="Selectie" title="Onze favorieten">
        <div className="grid gap-6 md:grid-cols-3">
          {heroCocktails.map((cocktail) => (
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
      </Section>

      <Section kicker="Voor wie" title="B2B en B2C flows" description="Schaalbare service voor horeca/events en consumenten">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Horeca & events</p>
            <h3 className="mt-3 font-serif text-3xl">Operational excellence</h3>
            <p className="mt-2 text-white/70">Standardiseer je cocktailprogramma met 60% minder wachttijd.</p>
            <Button asChild className="mt-4">
              <Link href="/horeca">Naar horeca</Link>
            </Button>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Shop & samples</p>
            <h3 className="mt-3 font-serif text-3xl">Thuisbeleving</h3>
            <p className="mt-2 text-white/70">Bestel limited releases, proefboxen en mocktails.</p>
            <Button asChild variant="secondary" className="mt-4">
              <Link href="/shop">Bekijk shop</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section kicker="Vertrouwd door" title="Bars & merken" centered>
        <LogoWall items={[{ name: 'Lowlands' }, { name: 'W Hotels' }, { name: 'Awakenings' }, { name: 'FARM' }, { name: 'Het Scheepvaart' }]} />
      </Section>
      <Section kicker="Impact" title="Operational stats">
        <div className="grid gap-6 md:grid-cols-3">
          <Stat label="Serve tijd" value="-60%" helper="vs shaken cocktails" />
          <Stat label="Consistentie" value="99.5%" helper="QC batches" />
          <Stat label="Shelf life" value="9 mnd" helper="gekoeld" />
        </div>
      </Section>

      <Section kicker="Bewijs" title="Fans spreken">
        <TestimonialCarousel items={testimonials} />
      </Section>

      <Section kicker="Academy" title="Laatste artikelen">
        <BlogList
          posts={posts.slice(0, 2).map((post) => ({
            slug: post.slug.current,
            title: post.title,
            excerpt: post.excerpt ?? '',
            publishedAt: post.publishedAt
          }))}
        />
      </Section>

      <Section>
        <CTA
          kicker="Samples"
          title="Proef Dutch Cocktail Club"
          description="Vraag een tasting of proefbox aan en ervaar onze signatuur pours."
          primary={{ label: 'Plan tasting', href: '/contact' }}
          secondary={{ label: 'Bekijk proefbox', href: '/proefbox' }}
        />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
      />
    </div>
  );
}
<section>
  <h3>Vertrouwd door</h3>
  <div className="grid-logos">
    <img src="/logos/lowlands.svg" alt="Lowlands" />
    <img src="/logos/w-hotels.svg" alt="W Hotels" />
    <img src="/logos/awakenings.svg" alt="Awakenings" />
    <img src="/logos/farm.svg" alt="FARM" />
    <img src="/logos/het-scheepvaart.svg" alt="Het Scheepvaart" />
    <img src="/logos/custom.svg" alt="Partner" />
  </div>
</section>
