'use client';

import Script from 'next/script';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { hasAnalytics, type AnalyticsConfig } from '@/lib/analytics';

interface Props {
  children: ReactNode;
  config: AnalyticsConfig;
}

type ConsentState = 'unknown' | 'granted' | 'denied';

export function AnalyticsProvider({ children, config }: Props) {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    const stored = window.localStorage.getItem('dcc-consent') as ConsentState | null;
    if (stored) {
      setConsent(stored);
    } else if (!hasAnalytics(config)) {
      setConsent('denied');
    }
  }, [config]);

  const shouldLoad = consent === 'granted' && hasAnalytics(config);

  const bannerVisible = useMemo(() => {
    return consent === 'unknown' && hasAnalytics(config);
  }, [consent, config]);

  const handleConsent = (value: ConsentState) => {
    setConsent(value);
    window.localStorage.setItem('dcc-consent', value);
  };

  return (
    <>
      {children}
      {shouldLoad && config.gaMeasurementId ? (
        <>
          <Script
            id="ga-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-inline" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.gaMeasurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
      {shouldLoad && config.metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${config.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
      {shouldLoad && config.hotjarId ? (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${config.hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      ) : null}
      {bannerVisible ? (
        <div className="fixed bottom-6 left-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur">
          <p className="text-sm text-white/80">
            We gebruiken cookies voor analytics. Sta je meetdata toe?
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-white/30 px-4 py-2 text-sm"
              onClick={() => handleConsent('denied')}
            >
              Weiger
            </button>
            <button
              type="button"
              className="flex-1 rounded-full bg-[#C47A3A] px-4 py-2 text-sm text-black"
              onClick={() => handleConsent('granted')}
            >
              Akkoord
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
