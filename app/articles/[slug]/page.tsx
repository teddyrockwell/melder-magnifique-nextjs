import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

import { Section, Container, Article, Main } from "@/components/craft";
import { Metadata } from "next";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <Section>
      <Container>
        <h1>
          <Balancer>
            <span className="text-black dark:text-yellow-500 font-black"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </Balancer>
        </h1>

        <div className="flex justify-between items-center gap-4 text-sm mb-4">
          <h5>
            Published <span className="text-black dark:text-white font-bold text-base"> {date}</span> by{" "}
            {author.name && (
              <span >
                <a className="text-black text-opacity-0 hover:text-opacity-100 dark:text-white dark:text-opacity-80 dark:hover:text-opacity-100 dark:hover:decoration-yellow-500 font-bold text-lg" href={`/articles/?author=${author.id}`}>{author.name}</a>{" "}
              </span>
            )}
          </h5>
          <Link
            href={`/articles/?category=${category.id}`}
            className={cn(badgeVariants({ variant: "outline" }), "not-prose", "hover:border-opacity-100 border border-black border-opacity-25 rounded-md dark:border-white dark:border-opacity-25 dark:hover:border-opacity-100 hover:underline decoration-wavy decoration-yellow-500")}
          >
            {category.name}
          </Link>
        </div>
        <div className="h-96 my-12 md:h-[560px] overflow-hidden flex items-center justify-center border border-opacity-25 border-black dark:border-white dark:border-opacity-25 rounded-lg bg-accent/25">
          <Image
            className="h-full w-full object-contain"
            src={featuredMedia.source_url}
            alt={post.title.rendered}
            width={featuredMedia.media_details.width}
            height={featuredMedia.media_details.height}
          />
        </div>
        <Article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </Section>
  );
}
