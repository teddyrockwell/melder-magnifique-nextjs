// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`

import querystring from 'query-string';

import {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
} from './wordpress.d';

// Basic Auth
const username = process.env.WORDPRESS_USERNAME;
const password = process.env.WORDPRESS_PASSWORD;

// WordPress Config

const baseUrl = process.env.WORDPRESS_URL;

// Helper function to create the API URL with query parameters
function getUrl(path: string, query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : '';
  return `${baseUrl}${path}${params ? `?${params}` : ''}`;
}

// Helper function for fetching with Basic Auth
async function fetchWithAuth(url: string): Promise<Response> {
  const authString = Buffer.from(`${username}:${password}`).toString('base64');
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${authString}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response; // Return the full Response object so individual functions can call .json()
}

// WordPress Functions

export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
}): Promise<Post[]> {
  const url = getUrl('/wp-json/wp/v2/posts', {
    author: filterParams?.author,
    tags: filterParams?.tag,
    categories: filterParams?.category,
  });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostById(id: number): Promise<Post> {
  const url = getUrl(`/wp-json/wp/v2/posts/${id}`);
  const response = await fetchWithAuth(url);
  const post: Post = await response.json();
  return post;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const url = getUrl('/wp-json/wp/v2/posts', { slug });
  const response = await fetchWithAuth(url);
  const post: Post[] = await response.json();
  return post[0];
}

export async function getAllCategories(): Promise<Category[]> {
  const url = getUrl('/wp-json/wp/v2/categories');
  const response = await fetchWithAuth(url);
  const categories: Category[] = await response.json();
  return categories;
}

export async function getCategoryById(id: number): Promise<Category> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
  const response = await fetchWithAuth(url);
  const category: Category = await response.json();
  return category;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = getUrl('/wp-json/wp/v2/categories', { slug });
  const response = await fetchWithAuth(url);
  const category: Category[] = await response.json();
  return category[0];
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  const url = getUrl('/wp-json/wp/v2/posts', { categories: categoryId });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  const url = getUrl('/wp-json/wp/v2/posts', { tags: tagId });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  const url = getUrl('/wp-json/wp/v2/tags', { post: postId });
  const response = await fetchWithAuth(url);
  const tags: Tag[] = await response.json();
  return tags;
}

export async function getAllTags(): Promise<Tag[]> {
  const url = getUrl('/wp-json/wp/v2/tags');
  const response = await fetchWithAuth(url);
  const tags: Tag[] = await response.json();
  return tags;
}

export async function getTagById(id: number): Promise<Tag> {
  const url = getUrl(`/wp-json/wp/v2/tags/${id}`);
  const response = await fetchWithAuth(url);
  const tag: Tag = await response.json();
  return tag;
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const url = getUrl('/wp-json/wp/v2/tags', { slug });
  const response = await fetchWithAuth(url);
  const tag: Tag[] = await response.json();
  return tag[0];
}

export async function getAllPages(): Promise<Page[]> {
  const url = getUrl('/wp-json/wp/v2/pages');
  const response = await fetchWithAuth(url);
  const pages: Page[] = await response.json();
  return pages;
}

export async function getPageById(id: number): Promise<Page> {
  const url = getUrl(`/wp-json/wp/v2/pages/${id}`);
  const response = await fetchWithAuth(url);
  const page: Page = await response.json();
  return page;
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const url = getUrl('/wp-json/wp/v2/pages', { slug });
  const response = await fetchWithAuth(url);
  const page: Page[] = await response.json();
  return page[0];
}

export async function getAllAuthors(): Promise<Author[]> {
  const url = getUrl('/wp-json/wp/v2/users');
  const response = await fetchWithAuth(url);
  const authors: Author[] = await response.json();
  return authors;
}

export async function getAuthorById(id: number): Promise<Author> {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`);
  const response = await fetchWithAuth(url);
  const author: Author = await response.json();
  return author;
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const url = getUrl('/wp-json/wp/v2/users', { slug });
  const response = await fetchWithAuth(url);
  const author: Author[] = await response.json();
  return author[0];
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  const url = getUrl('/wp-json/wp/v2/posts', { author: authorId });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  const url = getUrl('/wp-json/wp/v2/posts', { author: author.id });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  const url = getUrl('/wp-json/wp/v2/posts', { categories: category.id });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  const url = getUrl('/wp-json/wp/v2/posts', { tags: tag.id });
  const response = await fetchWithAuth(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);
  const response = await fetchWithAuth(url);
  const featuredMedia: FeaturedMedia = await response.json();
  return featuredMedia;
}
