import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-wide',
        variant === 'default' ? 'bg-white/10 text-white' : 'border border-white/20 text-white/70',
        className
      )}
    >
      {children}
    </span>
  );
}
