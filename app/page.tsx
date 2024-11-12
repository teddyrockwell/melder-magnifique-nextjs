// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { Star, Pen, Tag, Boxes, User } from "lucide-react";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container className="py-0">
        <ExampleJsx />
      </Container>
    </Section>
  );
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1 className="leading-tight text-center">
        <Balancer className="leading-tight text-center">
          Welcome to <span className="font-semibold dark:text-white">Melder Magnifique</span>, {" "}
          <br className="sm:hidden" />
          home of {" "}
          <br className="sm:hidden" />
          <span className="font-bold italic text-yellow-500">The Magnified.</span>
        </Balancer>
      </h1>
      <p className="pb-4 text-lg lg:text-xl leading-normal">
        <span className="font-extrabold dark:text-white">Melder Magnifique</span> is an archive of <span className="font-extrabold dark:text-white">unique insights</span>,  <span className="font-extrabold dark:text-white">resources</span>, and <span className="font-extrabold dark:text-white">tools</span> crafted to help you <span className="font-extrabold text-yellow-500">{`${'"Meld"'}`}</span> life in your own way.
      </p>
      <p className="pb-4 text-lg lg:text-xl leading-normal">
        From <span className="font-extrabold dark:text-white">self-improvement</span> to <span className="font-extrabold dark:text-white">personal finance</span>, <span className="font-extrabold dark:text-white">health & wellbeing</span>, and <span className="font-extrabold dark:text-white">philosophy</span>, our content empowers you to find <span className="font-extrabold dark:text-white">wisdom</span>, <span className="font-extrabold dark:text-white">knowledge</span>, <span className="font-extrabold dark:text-white">growth</span>, and <span className="font-extrabold dark:text-white">inspiration</span> to <span className="font-extrabold text-yellow-500">shape your path.</span>
      </p>
      <p className="pb-4 text-lg lg:text-xl leading-normal">
        Whether {`${"you're"}`} a member of <span className="font-extrabold italic mr-1 text-yellow-500">The Magnified</span> or simply visiting, {`${"you'll"}`} find ideas and reflections designed for <span className="font-extrabold dark:text-white">meaningful change</span> and <span className="font-extrabold dark:text-white">personal transformation.</span>
      </p>
      <p className="pb-4 text-lg lg:text-xl leading-normal">
        Dive in—and if {`${"you're"}`} ready, consider becoming part of <span className="font-extrabold italic mr-1 text-yellow-500">The Magnified</span>, {" "}  to connect with a community driven to live with purpose and intention.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border-2 h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.04] transition-all dark:text-white text-black dark:hover:text-yellow-500 hover:text-yellow-500 dark:hover:border-yellow-500 hover:border-black dark:border-white border-black border-opacity-25 dark:border-opacity-25"
          href="/articles"
        >
          <Pen size={50} strokeWidth={2} />
          <span>
            <span className="font-semibold text-2xl dark:text-white text-black">Articles</span>{" "}
            <span className="block text-lg text-muted-foreground font-bold">
              View all articles
            </span>
          </span>
        </Link>
        {/* <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link> */}
        <Link
          className="border-2 h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.04] transition-all dark:text-white text-black dark:hover:text-yellow-500 hover:text-yellow-500 dark:hover:border-yellow-500 hover:border-black dark:border-white border-black border-opacity-25 dark:border-opacity-25"
          href="/"
        >
          <Star size={50} strokeWidth={2} />
          <span>
            <span className="font-semibold text-2xl dark:text-white text-black">Featured Articles</span>{" "}
            <span className="block text-lg text-muted-foreground font-bold">
              View featured articles
            </span>
          </span>
        </Link>
        <Link
          className="border-2 h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.04] transition-all dark:text-white text-black dark:hover:text-yellow-500 hover:text-yellow-500 dark:hover:border-yellow-500 hover:border-black dark:border-white border-black border-opacity-25 dark:border-opacity-25"
          href="/articles/authors"
        >
          <User size={50} strokeWidth={2} />
          <span>
            <span className="font-semibold text-2xl dark:text-white text-black">Authors</span>{" "}
            <span className="block text-lg text-muted-foreground font-bold">
              View articles by author
            </span>
          </span>
        </Link>
        <Link
          className="border-2 h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.04] transition-all dark:text-white text-black dark:hover:text-yellow-500 hover:text-yellow-500 dark:hover:border-yellow-500 hover:border-black dark:border-white border-black border-opacity-25 dark:border-opacity-25"
          href="/articles/categories"
        >
          <Boxes size={50} strokeWidth={2} />
          <span>
            <span className="font-semibold text-2xl dark:text-white text-black">Categories</span>{" "}
            <span className="block text-lg text-muted-foreground font-bold">
              View articles by category
            </span>
          </span>
        </Link>
        <Link
          className="border-2 h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.04] transition-all dark:text-white text-black dark:hover:text-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-500 hover:border-black dark:border-white border-black border-opacity-25 dark:border-opacity-25"
          href="/articles/tags"
        >
          <Tag size={50} strokeWidth={2} />
          <span>
            <span className="font-semibold text-2xl dark:text-white text-black">Tags</span>{" "}
            <span className="block text-lg text-muted-foreground font-bold">
              View articles by tag
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
};
