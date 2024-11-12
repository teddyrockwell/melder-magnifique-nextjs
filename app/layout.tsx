import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Main } from "@/components/craft";
import { Nav } from "@/components/nav/nav";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// import Icon from "@/public/icon.svg";
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
              <Balancer><span className="font-bold italic text-xl tracking-wide text-yellow-500">{`"${metadata.description}"`}</span></Balancer>
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
