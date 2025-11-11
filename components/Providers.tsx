'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import type { AnalyticsConfig } from '@/lib/analytics';
import { Toaster } from '@/components/ui/toaster';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
  analyticsConfig: AnalyticsConfig;
}

export function Providers({ children, locale, messages, analyticsConfig }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Amsterdam">
      <AnalyticsProvider config={analyticsConfig}>{children}</AnalyticsProvider>
      <Toaster />
    </NextIntlClientProvider>
  );
}
