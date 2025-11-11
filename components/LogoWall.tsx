interface LogoProps {
  name: string;
}

interface Props {
  items: LogoProps[];
}

export function LogoWall({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-[32px] border border-white/10 bg-black/40 p-8 sm:grid-cols-3 md:grid-cols-5">
      {items.map((logo) => (
        <div key={logo.name} className="flex items-center justify-center text-sm uppercase tracking-[0.3em] text-white/50">
          {logo.name}
        </div>
      ))}
    </div>
  );
}
