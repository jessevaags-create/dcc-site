interface StatProps {
  label: string;
  value: string;
  helper?: string;
}

export function Stat({ label, value, helper }: StatProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
      <p className="mt-2 font-serif text-4xl text-white">{value}</p>
      {helper ? <p className="mt-1 text-sm text-white/60">{helper}</p> : null}
    </div>
  );
}
