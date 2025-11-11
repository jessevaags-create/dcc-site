import { BlogList } from '@/components/blog/BlogList';
import { Section } from '@/components/layout/Section';
import { getPosts } from '@/lib/sanity';

export const metadata = {
  title: 'Blog',
  description: 'Academy artikelen over cocktails, operations en events.'
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <Section kicker="Academy" title="Insights">
      <BlogList
        posts={posts.map((post) => ({
          slug: post.slug.current,
          title: post.title,
          excerpt: post.excerpt ?? '',
          publishedAt: post.publishedAt
        }))}
      />
    </Section>
  );
}
