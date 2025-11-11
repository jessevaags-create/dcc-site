'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';

interface HeroVideoProps {
  videoSrc: string;
  poster: string;
  title: string;
  subtitle: string;
  cta?: ReactNode;
}

export function HeroVideo({ videoSrc, poster, title, subtitle, cta }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);
    const handler = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [shouldReduceMotion]);

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent" />
      {shouldReduceMotion ? (
        <Image src={poster} alt="Cocktails" fill priority sizes="100vw" className="object-cover" />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="relative z-20 p-10 md:p-16">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C47A3A]">Bar-kwaliteit in 10 sec</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        {cta ? <div className="mt-8 flex flex-wrap gap-4">{cta}</div> : null}
      </div>
    </div>
  );
}
