import type { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Card({ children, as: Component = 'div', className }: CardProps) {
  const Comp = Component as any;
  return <Comp className={cn('rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur', className)}>{children}</Comp>;
}
