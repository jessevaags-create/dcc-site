import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CTAProps {
  kicker?: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTA({ kicker, title, description, primary, secondary }: CTAProps) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-black/90 via-black/70 to-[#1a1a1a] p-8 shadow-[0_0_40px_rgba(196,122,58,0.2)]">
      {kicker ? <p className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">{kicker}</p> : null}
      <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-serif text-3xl text-white">{title}</h3>
          <p className="mt-2 max-w-2xl text-white/70">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primary.href}>
              {primary.label}
              <ArrowUpRight className="ml-2" size={18} />
            </Link>
          </Button>
          {secondary ? (
            <Button asChild variant="secondary" size="lg">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
