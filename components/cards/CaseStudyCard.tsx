interface CaseStudyCardProps {
  title: string;
  body: string;
  metrics?: Array<{ label: string; value: string }>;
  logo?: string;
}

export function CaseStudyCard({ title, body, metrics, logo }: CaseStudyCardProps) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">Case</p>
      <h3 className="font-serif text-3xl">{title}</h3>
      <p className="mt-3 text-sm text-white/70">{body}</p>
      {metrics ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{metric.label}</p>
              <p className="mt-1 text-2xl text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      ) : null}
      {logo ? <p className="mt-4 text-sm text-white/60">{logo}</p> : null}
    </div>
  );
}
