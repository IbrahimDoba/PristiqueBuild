import { PageContainer } from "@/components/layout/page-container";
import PostCard from "@/components/blog/post-card";
import { getPosts } from "@/lib/marble/queries";
import { Fragment } from "react";
import { Metadata } from "next";
import { CategoryFilters } from "@/components/blog/filters";

export const metadata: Metadata = {
  title: "Blog | Pristiq Build",
  description:
    "Your source for insights on modular construction, sustainable building, and architectural innovation.",
};

export default async function BlogPage() {
  const data = await getPosts();
  if (!data || !data.posts) return <div>No posts yet</div>;

  return (
    <PageContainer className="py-10 lg:py-20">
      <section className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-2 text-sm font-medium text-gray-600">Blog</h1>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Insights on Modular Construction & Modern Building
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore the latest trends in modular construction, sustainable
          building practices, and innovative architectural designs from the
          Pristiq Build team.
        </p>
      </section>
      <section className="mb-16">
        <CategoryFilters />
      </section>
      <section>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard post={post} />
            </Fragment>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
