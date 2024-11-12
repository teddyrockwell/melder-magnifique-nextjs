import { getAllCategories } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Categories",
    description: "Browse all categories on the site.",
  };
}

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <Section>
      <Container className="py-0 pt-0 sm:pt-0 md:pt-0">
        <BackButton />
        <h2 className="mt-8 sm:mt-7 mb-8 sm:mb-7"><span className="font-black text-3xl dark:text-yellow-500">All Categories</span></h2>
        <div className="grid text-center">
          {categories.map((category: any) => (
            <Link className="text-lg font-bold text-black decoration-black dark:text-white tracking-wider dark:decoration-white hover:decoration-yellow-500 hover:text-yellow-500 leading-normal py-2 mb-4 mx-auto w-80 hover:decoration-wavy dark:hover:decoration-wavy dark:hover:decoration-yellow-500 border-2 border-black border-opacity-25 hover:border-opacity-100 dark:border-opacity-25 dark:hover:border-opacity-100 dark:border-white rounded-md" key={category.id} href={`/articles/?category=${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
