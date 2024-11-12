import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Section, Container } from "@/components/craft";
import PostCard from "@/components/posts/post-card";
import FilterPosts from "./filter";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { author, tag, category, page: pageParam } = searchParams;
  const posts = await getAllPosts({ author, tag, category });
  const authors = await getAllAuthors();
  const tags = await getAllTags();
  const categories = await getAllCategories();

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <Section>
      <Container>
        <h1><span className="font-black dark:text-white text-yellow-500">Articles</span></h1>
        <FilterPosts
          authors={authors}
          tags={tags}
          categories={categories}
          selectedAuthor={author}
          selectedTag={tag}
          selectedCategory={category}
        />

        {paginatedPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4 z-0">
            {paginatedPosts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="h-24 w-full border-2 rounded-lg bg-accent/25 flex items-center justify-center border-black dark:border-white dark:border-opacity-25 border-opacity-50">
            <p className="font-black text-xl text-black dark:text-white">No Articles Found</p>
          </div>
        )}

        <div className="mt-8 not-prose">
          <Pagination>
            <PaginationContent className="flex justify-evenly">
              <PaginationItem>
                <PaginationPrevious
                  className={page === 1 ? "pointer-events-none text-muted text-base font-bold" : "text-base font-bold"}
                  href={`/articles?page=${Math.max(page - 1, 1)}${category ? `&category=${category}` : ""
                    }${author ? `&author=${author}` : ""}${tag ? `&tag=${tag}` : ""
                    }`}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`/articles?page=${page}`}>
                  <span className="text-base font-bold">{page}</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className={
                    page === totalPages ? "pointer-events-none text-muted text-base font-bold" : "text-base font-bold"
                  }
                  href={`/articles?page=${Math.min(page + 1, totalPages)}${category ? `&category=${category}` : ""
                    }${author ? `&author=${author}` : ""}${tag ? `&tag=${tag}` : ""
                    }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Container>
    </Section>
  );
}
