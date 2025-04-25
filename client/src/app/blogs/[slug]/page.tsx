import Container from "@/components/Post/container";
import Prose from "@/components/Post/prose";
import { getPosts, getSinglePost } from "@/lib/query";
import { siteConfig } from "@/lib/siteConfig";
import { Post } from "@/types/post";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const url = process.env.MARBLE_API_URL;
  const key = process.env.MARBLE_WORKSPACE_KEY;

  // read route params
  const slug = (await params).slug;

  // fetch data
  const res = await fetch(`${url}/${key}/posts/${slug}`);
  const data = await res.json();
  const post: Post = data.post;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL(siteConfig.url),
    title: post.title,
    description: post.description,
    twitter: {
      title: `${post.title}`,
      description: `${post.description || siteConfig.description}`,
      card: "summary_large_image",
      site: `${siteConfig.url}/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: "1200",
          height: "630",
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    openGraph: {
      type: "article",
      siteName: "",
      images: [
        {
          url: post.coverImage,
          width: "1200",
          height: "630",
          alt: post.title,
        },
        ...previousImages,
      ],
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [...post.authors.map((author) => author.name)],
    },
  };
}

export async function generateStaticParams() {
  const res = await getPosts();
  const posts = res?.posts;
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const res = await getSinglePost(slug);
  const data = res?.post;
  if (!data) return notFound();

  const formattedDate = new Date(data.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Container className="min-h-[calc(100vh-100px)] py-14">
      <section className="space-y-6 lg:space-y-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl text-center">
            {data.title}
          </h1>
          <time dateTime={data.publishedAt.toString()}>{formattedDate}</time>
          <div className="flex items-center gap-2">
            <Image
              src={data.authors[0].image}
              alt={data.authors[0].name}
              width={36}
              height={36}
              loading="eager"
              className="aspect-square shrink-0 size-8 rounded-full"
            />
            <p className="text-muted-foreground">{data.authors[0].name}</p>
          </div>
        </div>
        <div className="relative min-h-[360px] md:min-h-[400px] lg:min-h-[430px]">
          <Image
            src={data.coverImage}
            alt={data.title}
            loading="eager"
            fill
            className="object-cover size-full max-sm:max-h-[360px]"
          />
        </div>
        <Prose html={data.content} />
      </section>
    </Container>
  );
}

export default Page;
