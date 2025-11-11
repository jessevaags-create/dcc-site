import { notFound } from 'next/navigation';

import { BlogPost } from '@/components/blog/BlogPost';
import { getPostBySlug, getPosts } from '@/lib/sanity';
import { articleJsonLd } from '@/lib/seo';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  const jsonLd = articleJsonLd({
    headline: post.title,
    description: post.excerpt ?? '',
    datePublished: post.publishedAt ?? new Date().toISOString(),
    author: 'Dutch Cocktail Club'
  });
  return (
    <div className="mx-auto max-w-4xl px-4">
      <BlogPost title={post.title} body={post.body ?? ''} publishedAt={post.publishedAt} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
