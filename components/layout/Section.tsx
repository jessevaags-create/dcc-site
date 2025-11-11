import type { ReactNode } from 'react';

interface SectionProps {
  kicker?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  children: ReactNode;
  className?: string;
}

export function Section({ kicker, title, description, centered, children, className }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 ${className ?? ''}`}>
      {(kicker || title || description) && (
        <div className={`${centered ? 'text-center' : ''} mb-10`}>
          {kicker ? <p className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">{kicker}</p> : null}
          {title ? <h2 className="font-serif text-4xl text-white">{title}</h2> : null}
          {description ? <p className="mt-2 max-w-2xl text-white/70">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
