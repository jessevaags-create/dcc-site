import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  handle: string;
  image?: string;
  price?: string;
  currency?: string;
}

export function ProductCard({ title, handle, image, price, currency }: ProductCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
      <div className="relative h-56 w-full overflow-hidden rounded-3xl bg-black/40">
        {image ? <Image src={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /> : null}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl">{title}</h3>
          <p className="text-sm text-white/70">
            {price ? `${currency ?? 'EUR'} ${price}` : 'Prijs via Shopify'}
          </p>
        </div>
        <Link href={`https://checkout.shopify.com/${handle}`} className="text-sm text-[#C47A3A]">
          Koop →
        </Link>
      </div>
    </div>
  );
}
