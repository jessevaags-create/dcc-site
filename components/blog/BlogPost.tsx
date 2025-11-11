import type { PortableTextBlock } from '@sanity/types';

interface BlogPostProps {
  title: string;
  body: PortableTextBlock[] | string;
  coverImage?: string;
  publishedAt?: string;
}

export function BlogPost({ title, body, publishedAt }: BlogPostProps) {
  return (
    <article className="prose prose-invert max-w-3xl">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          {publishedAt ? new Date(publishedAt).toLocaleDateString('nl-NL') : 'Nieuw'}
        </p>
        <h1 className="font-serif text-4xl">{title}</h1>
      </header>
      <section className="mt-6 space-y-4 text-white/80">
        {typeof body === 'string'
          ? body.split('\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          : body.map((block) => (
              <p key={(block as any)._key}>{(block as any).children?.map((child: any) => child.text).join(' ')}</p>
            ))}
      </section>
    </article>
  );
}
