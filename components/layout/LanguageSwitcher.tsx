'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

const locales: Array<'nl' | 'en'> = ['nl', 'en'];

export function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale: 'nl' | 'en') => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
      window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/20 px-2 py-1 text-xs">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={locale === loc}
          onClick={() => handleChange(loc)}
          className={`rounded-full px-3 py-1 uppercase tracking-widest ${locale === loc ? 'bg-white text-black' : 'text-white/70'} ${isPending ? 'opacity-70' : ''}`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
