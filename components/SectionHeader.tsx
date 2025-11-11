interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ kicker, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} space-y-3`}>
      {kicker ? <p className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">{kicker}</p> : null}
      <h2 className="font-serif text-4xl text-white">{title}</h2>
      {description ? <p className="text-white/70">{description}</p> : null}
    </div>
  );
}
