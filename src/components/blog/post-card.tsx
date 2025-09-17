import { Post } from "@/lib/marble/types";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const link = `/blog/${post.slug}`;
  const formattedDate = new Date(
    post.publishedAt.toString(),
  ).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <li className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
      <Link href={link} className="relative block h-60 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          loading="eager"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <time dateTime={post.publishedAt.toString()}>{formattedDate}</time>
          {post.category && (
            <>
              <span className="mx-1">·</span>
              <Link
                href={`/blog/category/${post.category.slug}`}
              >
                {post.category.name}
              </Link>
            </>
          )}
        </div>
        <h2 className="mb-2 line-clamp-2 text-xl">
          <Link href={link}>
            {post.title}
          </Link>
        </h2>

        <p className="mb-6 line-clamp-3 flex-grow text-sm text-gray-600">
          {post.description}
        </p>

        {post.authors && post.authors.length > 0 && (
          <div className="flex items-center gap-3">
            <Image
              src={post.authors[0].image}
              alt={post.authors[0].name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{post.authors[0].name}</p>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default PostCard;
