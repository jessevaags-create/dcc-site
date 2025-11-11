interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  items: Step[];
}

export function Steps({ items }: StepsProps) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {items.map((step, index) => (
        <li key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Stap {index + 1}</span>
          <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
          <p className="mt-2 text-sm text-white/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
