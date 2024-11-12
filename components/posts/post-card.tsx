import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";

import {
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

export default async function PostCard({ post }: { post: Post }) {
  const media = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <Link
      href={`/articles/${post.slug}`}
      className={cn(
        "border-2 border-black dark:border-white dark:border-opacity-25 border-opacity-25 p-4 hover:bg-accent/5 dark:hover:bg-accent/5 rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:border-opacity-100 dark:hover:border-opacity-100 dark:hover:border-white   transition-all"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border border-black dark:border-white dark:border-opacity-20 border-opacity-20 dark:group-hover:border-opacity-50 group-hover:border-opacity-50 flex items-center justify-center">
          <Image
            className="h-full w-full object-contain"
            src={media.source_url}
            alt={post.title.rendered}
            width={400}
            height={200}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          className="text-lg font-bold group-hover:underline decoration-yellow-500 underline-offset-4 decoration-wavy dark:decoration-white transition-all dark:text-yellow-500 text-black"
        ></div>
        <div
          className="text-sm dark:group-hover:text-white group-hover:text-black"
          dangerouslySetInnerHTML={{
            __html:
              post.excerpt.rendered.split(" ").slice(0, 12).join(" ").trim() +
              "...",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <hr className="bg-black bg-opacity-20 dark:group-hover:bg-opacity-50 group-hover:bg-opacity-50 h-0.5  dark:bg-white dark:bg-opacity-20" />
        <div className="flex justify-between items-center text-xs">
          {category.name !== "Uncategorized" ? (<p className="text-black dark:text-white font-bold">{category.name}</p>) : (<p className="text-black dark:text-white font-bold">{""}</p>)
          }
          <p className="text-black dark:text-white font-medium">{date}</p>
        </div>
      </div>
    </Link>
  );
}
