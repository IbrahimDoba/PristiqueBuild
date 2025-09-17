import { PageContainer } from "@/components/layout/page-container";
import PostCard from "@/components/blog/post-card";
import { getCategories, getPostsByCategory } from "@/lib/marble/queries";
import { Metadata } from "next";
import { Fragment } from "react";
import { CategoryFilters } from "@/components/blog/filters";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCategories();
  const category = data?.categories?.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: `${category.name} | Pristiq Build Blog`,
    description: `Explore articles on ${category.name} and the latest trends in modular construction.`,
  };
}

export async function generateStaticParams() {
  const data = await getCategories();
  if (!data || !data.categories) return [];

  return data.categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const data = await getPostsByCategory(slug);

  if (!data || !data.posts || data.posts.length === 0) {
    return (
      <PageContainer className="py-10 text-center lg:py-20">
        <p>No posts found in this category.</p>
      </PageContainer>
    );
  }

  const categoryName = data.posts[0].category.name;

  return (
    <PageContainer className="py-10 lg:py-20">
      <section className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-2 text-sm font-medium text-gray-600">Blog</h1>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {categoryName ? `${categoryName}` : "Category"}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore our latest articles and insights on{" "}
          {categoryName ? categoryName.toLowerCase() : "this category"} in the
          field of modular construction.
        </p>
      </section>
      <section className="mb-16">
        <CategoryFilters activeSlug={slug} />
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
