import { getCategories } from "@/lib/marble/queries";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

interface CategoryFiltersProps {
  activeSlug?: string;
}

export async function CategoryFilters({ activeSlug }: CategoryFiltersProps) {
  const data = await getCategories();
  const categories = data?.categories || [];

  const allCategoriesLink = "/blog";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Link
        href={allCategoriesLink}
        className={cn(
          "rounded-full border border-gray-200 px-4 py-2 text-sm font-medium transition-colors duration-200",
          !activeSlug
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100",
        )}
      >
        All categories
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.slug}`}
          className={cn(
            "rounded-full border border-gray-200 px-4 py-2 text-sm font-medium transition-colors duration-200",
            activeSlug === category.slug
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100",
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
