import { cookies, headers } from 'next/headers';

export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';

const messagesRecord: Record<Locale, () => Promise<Record<string, string>>> = {
  nl: () => import('@/messages/nl.json').then((mod) => mod.default),
  en: () => import('@/messages/en.json').then((mod) => mod.default)
};

export async function getMessages(locale: Locale) {
  return messagesRecord[locale]();
}

export function isLocale(value: string | undefined): value is Locale {
  return value ? (locales as readonly string[]).includes(value) : false;
}

export function getRequestLocale(): Locale {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }
  const headerLocale = headers().get('accept-language')?.split(',')[0].split('-')[0];
  if (isLocale(headerLocale)) {
    return headerLocale;
  }
  return defaultLocale;
}

export function persistLocale(locale: Locale) {
  cookies().set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
}
