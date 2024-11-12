'use client';

import "@/app/globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainMenu } from "@/menu.config";

import { Flame } from "lucide-react";

import IconBlackTrans from "@/public/icon-black-transparent.png";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';


import { cn } from "@/lib/utils";

export const Nav = ({ className, children, id }: NavProps) => {
  const pathname = usePathname();

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
            {Object.entries(mainMenu).map(([key, href]) => {
              const isActive = pathname === href || (pathname.includes(href) && href !== '/');
              return (
                <Button
                  key={href}
                  asChild
                  variant="ghost"
                  className={cn(
                    "font-extrabold",
                    "text-xl",
                    isActive ? "text-yellow-500 hover:text-yellow-500 dark:text-yellow-500" : "text-muted-foreground"
                  )}
                  size="default"
                >
                  <Link href={href}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </Button>
              );
            })}
          </div>

          <Button asChild className="hidden sm:flex">
            <Link href="/" className="flex items-center content-center justify-center gap-2 text-center align-middle dark:hover:bg-yellow-500 dark:hover:text-white hover:bg-yellow-500">
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