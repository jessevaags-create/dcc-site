export interface RoiInput {
  cocktailsPerNight: number;
  secondsPerCocktail: number;
  staffHourlyRate: number;
  nightsPerMonth?: number;
}

export interface RoiResult {
  hoursPerMonthSaved: number;
  monthlySavings: number;
  annualSavings: number;
}

const DEFAULT_NIGHTS = 25;

export function calculateRoi({ cocktailsPerNight, secondsPerCocktail, staffHourlyRate, nightsPerMonth = DEFAULT_NIGHTS }: RoiInput): RoiResult {
  const totalSeconds = cocktailsPerNight * secondsPerCocktail * nightsPerMonth;
  const hours = totalSeconds / 3600;
  const monthlySavings = hours * staffHourlyRate;
  return {
    hoursPerMonthSaved: Number(hours.toFixed(1)),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(monthlySavings * 12)
  };
}
