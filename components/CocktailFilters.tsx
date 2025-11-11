'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const tasteOptions = ['fris', 'fruitig', 'bitter', 'romig'];
const strengthOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
];
const occasionOptions = ['aperitief', 'event', 'late night'];

export function CocktailFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const activeTaste = searchParams.get('taste');
  const activeStrength = searchParams.get('strength');
  const activeOccasion = searchParams.get('occasion');

  return (
    <div className="rounded-[32px] border border-white/10 bg-black/50 p-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Smaak</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tasteOptions.map((taste) => (
              <button
                key={taste}
                type="button"
                onClick={() => updateParam('taste', taste)}
                className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                  activeTaste === taste ? 'bg-white text-black' : 'bg-white/5 text-white/70'
                }`}
              >
                {taste}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Sterkte</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {strengthOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateParam('strength', option.value)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeStrength === option.value ? 'bg-[#C47A3A] text-black' : 'bg-white/5 text-white/70'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Occasion</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {occasionOptions.map((occasion) => (
              <button
                key={occasion}
                type="button"
                onClick={() => updateParam('occasion', occasion)}
                className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                  activeOccasion === occasion ? 'bg-white text-black' : 'bg-white/5 text-white/70'
                }`}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
