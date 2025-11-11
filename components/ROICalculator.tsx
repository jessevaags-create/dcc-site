'use client';

import { useMemo, useState } from 'react';

import { Input } from '@/components/ui/input';
import { calculateRoi } from '@/lib/roi';

export function ROICalculator() {
  const [cocktails, setCocktails] = useState(120);
  const [seconds, setSeconds] = useState(45);
  const [rate, setRate] = useState(22);

  const result = useMemo(() => {
    return calculateRoi({ cocktailsPerNight: cocktails, secondsPerCocktail: seconds, staffHourlyRate: rate });
  }, [cocktails, seconds, rate]);

  return (
    <div className="rounded-[32px] border border-white/10 bg-black/60 p-8">
      <h3 className="font-serif text-3xl">ROI-calculator</h3>
      <p className="mt-2 text-sm text-white/60">Bereken directe tijd- en loonsbesparing met Dutch Cocktail Club.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <label className="text-sm text-white/70">
          Cocktails per avond
          <Input
            type="number"
            min={10}
            value={cocktails}
            onChange={(event) => setCocktails(Number(event.target.value))}
            className="mt-2"
          />
        </label>
        <label className="text-sm text-white/70">
          Seconden per cocktail (shake/stir)
          <Input
            type="number"
            min={10}
            value={seconds}
            onChange={(event) => setSeconds(Number(event.target.value))}
            className="mt-2"
          />
        </label>
        <label className="text-sm text-white/70">
          Uurloon personeel (€)
          <Input
            type="number"
            min={10}
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
            className="mt-2"
          />
        </label>
      </div>
      <div className="mt-8 grid gap-4 text-center md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Uren per maand</p>
          <p className="mt-2 font-serif text-4xl">{result.hoursPerMonthSaved}u</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Besparing / maand</p>
          <p className="mt-2 font-serif text-4xl">€{result.monthlySavings.toLocaleString('nl-NL')}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Besparing / jaar</p>
          <p className="mt-2 font-serif text-4xl">€{result.annualSavings.toLocaleString('nl-NL')}</p>
        </div>
      </div>
    </div>
  );
}
