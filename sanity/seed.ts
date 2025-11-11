export const seedCocktails = [
  {
    _id: 'cocktail-espresso-martini',
    title: 'Espresso Martini',
    slug: { current: 'espresso-martini' },
    heroImage: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
    gallery: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836'],
    summary: 'Romig, intens en klaar in seconden.',
    tasteProfile: ['romig', 'koffie', 'rich'],
    strength: 'high',
    abv: 14,
    serveTemp: '4°C',
    glassType: 'Coupe',
    allergens: ['noten'],
    ingredients: ['Vodka', 'Cold Brew', 'Vanille'],
    howToServe: 'Koel serveren, kort shaken en strainen. Garneer met 3 koffiebonen.',
    isAlcoholFree: false,
    shopifyProductHandle: 'espresso-martini-pack'
  },
  {
    _id: 'cocktail-mojito',
    title: 'Mojito Classico',
    slug: { current: 'mojito-classico' },
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    gallery: ['https://images.unsplash.com/photo-1470337458703-46ad1756a187'],
    summary: 'Fris, citrus en mint-forward.',
    tasteProfile: ['fris', 'citrus', 'mint'],
    strength: 'medium',
    abv: 10,
    serveTemp: 'On the rocks',
    glassType: 'Highball',
    allergens: [],
    ingredients: ['Rum', 'Limoen', 'Munt', 'Soda'],
    howToServe: 'Glas vullen met crushed ice, product schenken, top met soda.',
    isAlcoholFree: false,
    shopifyProductHandle: 'mojito-classico-pack'
  },
  {
    _id: 'cocktail-pina-colada',
    title: 'Piña Colada',
    slug: { current: 'pina-colada' },
    heroImage: 'https://images.unsplash.com/photo-1497534446932-c925b458314e',
    gallery: [],
    summary: 'Tropisch romig met ananas.',
    tasteProfile: ['romig', 'fruitig'],
    strength: 'medium',
    abv: 12,
    serveTemp: '4°C',
    glassType: 'Hurricane',
    allergens: ['lactose'],
    ingredients: ['Rum', 'Kokos', 'Ananas'],
    howToServe: 'Shake met ijs en strain in gekoeld glas.',
    isAlcoholFree: false,
    shopifyProductHandle: 'pina-colada-pack'
  },
  {
    _id: 'cocktail-virgin-mule',
    title: 'Virgin Mule 0.0%',
    slug: { current: 'virgin-mule' },
    heroImage: 'https://images.unsplash.com/photo-1514361892635-6e122620eaff',
    summary: 'Gember, limoen en zero proof.',
    tasteProfile: ['fris', 'spicy'],
    strength: 'low',
    abv: 0,
    serveTemp: 'On the rocks',
    glassType: 'Copper mug',
    allergens: [],
    ingredients: ['Gemberbier', 'Limoen', 'Botanical mix'],
    howToServe: 'Schenk over ijs, afwerken met munt.',
    isAlcoholFree: true
  }
];

export const seedTestimonials = [
  {
    _id: 'testimonial-w-hotel',
    quote: 'DCC halveerde onze wachttijd aan de bar en verhoogde NPS met 18 punten.',
    author: 'Eva van Wely',
    role: 'Food & Beverage Director, W Amsterdam'
  },
  {
    _id: 'testimonial-lowlands',
    quote: 'Voor 20k bezoekers hebben we nu consistente cocktails zonder extra staff.',
    author: 'Bas Jansen',
    role: 'Producer Lowlands'
  }
];

export const seedCaseStudies = [
  {
    _id: 'case-botanica',
    title: 'Botanica Rooftop',
    metrics: [
      { label: 'Serve tijd', value: '-62%' },
      { label: 'Staff kosten', value: '-€3.2k / maand' }
    ],
    body: 'Botanica verving 6 cocktails door DCC en draaide 30% meer omzet per uur.',
    logo: 'Botanica',
    hero: 'https://images.unsplash.com/photo-1468465226960-8899e992537c'
  }
];

export const seedPosts = [
  {
    _id: 'post-shelf-life',
    title: 'Shelf life & logistiek voor premium RTD',
    slug: { current: 'shelf-life-logistiek' },
    excerpt: 'Zo haal je maximale marge uit ready-to-serve cocktails voor events.',
    coverImage: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44',
    body: 'Opslag bij 4°C houdt smaak perfect. Werk met bag-in-box voor volume events.',
    tags: ['logistiek', 'events'],
    publishedAt: '2024-06-01'
  },
  {
    _id: 'post-menu-design',
    title: 'Menu design dat converteert',
    slug: { current: 'menu-design' },
    excerpt: 'Zo positioneer je premium cocktails richting gasten.',
    coverImage: 'https://images.unsplash.com/photo-1468465226960-8899e992537c',
    body: 'Gebruik storytelling + staff training. Voorzie tasting-notes en upsell flights.',
    tags: ['horeca'],
    publishedAt: '2024-05-12'
  }
];

export const seedTeam = [
  { _id: 'team-1', name: 'Lena Vermeer', role: 'Founder & Head of Taste', photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39', bio: 'Ex cocktailbar Tales & Spirits.' },
  { _id: 'team-2', name: 'Ravi Fernandes', role: 'Operations', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d', bio: 'Ex Heineken logistics lead.' }
];

export const seedFaq = [
  { _id: 'faq-1', question: 'Hoe lang is de houdbaarheid?', answer: 'Ongeopend 9 maanden gekoeld. Geopend 5 dagen.', category: 'product' },
  { _id: 'faq-2', question: 'Beschikbaar in 0.0%?', answer: 'Ja, Virgin Mule en Paloma 0.0%.', category: 'mocktails' }
];
