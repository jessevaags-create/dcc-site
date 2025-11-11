import Link from 'next/link';

interface BlogListProps {
  posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    publishedAt?: string;
  }>;
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return <p className="text-white/60">Nieuwe artikelen verschijnen spoedig.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-[#C47A3A]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('nl-NL') : 'Nieuw'}
          </p>
          <h3 className="mt-3 font-serif text-2xl">{post.title}</h3>
          <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center text-sm text-[#C47A3A]">Lees artikel →</span>
        </Link>
      ))}
    </div>
  );
}
