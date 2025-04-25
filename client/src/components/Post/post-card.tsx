import { Post } from '@/types/post';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const link = `/blogs/${post.slug}`;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
      <div className="relative overflow-hidden h-60">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          loading="eager"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <ul className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.tags.map((tag) => (
              <li
                key={tag.id}
                className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full hover:bg-white transition-colors"
              >
                <a href={`/tags/${tag.slug}`}>#{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-5 gap-3">
        <Link href={link} className="group-hover:text-blue-600 transition duration-300 mb-1">
          <h2 className="font-serif text-xl font-bold line-clamp-2">{post.title}</h2>
        </Link>
        
        <div className="flex items-center gap-2 font-mono text-sm text-gray-500">
          <time dateTime={post.publishedAt.toString()}>{formattedDate}</time>
          {post.authors && post.authors.length > 0 && (
            <>
              <span className="mx-1">·</span>
              <p>{post.authors[0].name}</p>
            </>
          )}
        </div>
        
        <p className="text-gray-600 line-clamp-3 flex-grow text-sm">{post.description}</p>
        
        <Link 
          href={link} 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 mt-2 font-medium text-sm w-fit"
        >
          <span>Read full article</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            ></path>
          </svg>
        </Link>
      </div>
    </li>
  );
}

export default PostCard;