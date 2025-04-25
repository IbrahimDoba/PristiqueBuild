import Container from '@/components/Post/container';
import PostCard from '@/components/Post/post-card';
import { getPosts } from '@/lib/query';
import { Fragment } from 'react';
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const posts = await getPosts();
  if (!posts || !posts.posts.length) return (
    <div className="flex items-center justify-center min-h-[60vh] text-lg text-gray-600">
      No posts available yet. Check back soon!
    </div>
  );
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and stories from our team, exploring the latest trends and innovations.
          </p>
        </div>
        <Container className="py-4">
          <ul className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {posts.posts.map((post) => (
              <Fragment key={post.id}>
                <PostCard post={post} />
              </Fragment>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}