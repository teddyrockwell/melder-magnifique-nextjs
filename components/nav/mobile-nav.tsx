"use client";

// React and Next Imports
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";


// Utility Imports
import { Menu, ArrowRightSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { mainMenu, contentMenu } from "@/menu.config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 border-2 border-black border-opacity-25 dark:border-white dark:border-opacity-25 w-10 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <ArrowRightSquare className="mr-2 h-6 w-6" />
          <span className="text-yellow-500 text-xl font-black">Melder Magnifique</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg mt-6 font-extrabold dark:text-white">Menu</h3>
            <Separator className="dark:bg-white bg-black bg-opacity-75 dark:bg-opacity-75" />
            {Object.entries(mainMenu).map(([key, href]) => {
              const isActive = pathname === href || (pathname.includes(href) && href !== '/');
              return (
                <MobileLink key={key} href={href} className={cn(
                  "font-black",
                  "text-base",
                  isActive ? "text-yellow-500 hover:text-yellow-500 dark:text-yellow-500" : "text-muted-foreground"
                )} onOpenChange={setOpen}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </MobileLink>
              )
            })}
            <h3 className="text-lg pt-6 font-black dark:text-white">Blog Menu</h3>
            <Separator className="dark:bg-white bg-black bg-opacity-75 dark:bg-opacity-75" />
            {Object.entries(contentMenu).map(([key, href]) => {
              const isActive = pathname === href || (pathname.includes(href) && href !== '/');
              return (
                <MobileLink key={key} href={href} className={cn(
                  "font-black",
                  "text-base",
                  isActive ? "text-yellow-500 hover:text-yellow-500 dark:text-yellow-500" : "text-muted-foreground"
                )} onOpenChange={setOpen}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </MobileLink>
              )
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-lg", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
