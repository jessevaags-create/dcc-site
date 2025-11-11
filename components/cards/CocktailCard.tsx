import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';

interface CocktailCardProps {
  slug: string;
  title: string;
  image: string;
  tasteProfile: string[];
  abv: number;
  strength: 'low' | 'medium' | 'high';
}

const strengthLabels: Record<CocktailCardProps['strength'], string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High'
};

export function CocktailCard({ slug, title, image, tasteProfile, abv, strength }: CocktailCardProps) {
  return (
    <Link
      href={`/cocktails/${slug}`}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 space-y-2">
          <Badge>{strengthLabels[strength]}</Badge>
          <Badge variant="outline">{abv}% ABV</Badge>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="font-serif text-2xl">{title}</h3>
        <p className="text-sm text-white/60">{tasteProfile.join(' • ')}</p>
      </div>
    </Link>
  );
}
