/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import { Flame } from "lucide-react";

// import Icon from "@/public/icon.svg";
import IconBlackTrans from "@/public/icon-black-transparent.png";
import LogoBlackTrans from "@/public/logo-black-transparent.png";


import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Melder Magnifique",
  description:
    "Meld life in your own way.",
  metadataBase: new URL("https://meldermagnifique.com"),
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Melder Magnifique Icon</h2>
          <Image
            src={IconBlackTrans}
            alt="Melder Magnifique Icon"
            className="dark:invert"
            width={60}
            height={60}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-4">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" className="font-extrabold" size="default">
                <Link className="text-xl" href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>

          <Button asChild className="hidden sm:flex">
            <Link href="/" className="flex items-center content-center justify-center gap-2 text-center align-middle dark:hover:bg-yellow-500 hover:bg-yellow-500">
              <span className="font-black italic text-lg pt-0.5">Join The Magnified </span>
              <Flame size={20} strokeWidth={3} absoluteStrokeWidth />
            </Link>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose items-center">
            <Link href="/">
              <h3 className="sr-only">Melder Magnifique Logo</h3>
              <Image
                src={LogoBlackTrans}
                alt="Logo"
                width={120}
                height={120}
                className="hover:opacity-75 transition-all dark:invert"
              ></Image>
            </Link>
            <p className="text-lg font-medium">
              <Balancer><span className="font-bold italic text-xl tracking-wide text-yellow-500">"{metadata.description}"</span></Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <h5 className="font-extrabold text-xl dark:text-yellow-500">Website</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4 dark:text-white font-medium"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <h5 className="font-extrabold text-xl dark:text-yellow-500">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4 dark:text-white font-medium"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <p className="text-muted-foreground">
            © <a href="https://meldermagnifique.com">Melder Magnifique</a>. All rights reserved.
            2023-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
