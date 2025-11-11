import { describe, expect, it } from 'vitest';

import { calculateRoi } from '@/lib/roi';

describe('calculateRoi', () => {
  it('calculates hours and savings', () => {
    const result = calculateRoi({ cocktailsPerNight: 100, secondsPerCocktail: 45, staffHourlyRate: 20, nightsPerMonth: 20 });
    expect(result.hoursPerMonthSaved).toBeCloseTo((100 * 45 * 20) / 3600, 1);
    expect(result.monthlySavings).toBe(Math.round(((100 * 45 * 20) / 3600) * 20));
    expect(result.annualSavings).toBe(result.monthlySavings * 12);
  });

  it('defaults nights per month when missing', () => {
    const result = calculateRoi({ cocktailsPerNight: 50, secondsPerCocktail: 30, staffHourlyRate: 25 });
    expect(result.hoursPerMonthSaved).toBeGreaterThan(0);
  });
});
