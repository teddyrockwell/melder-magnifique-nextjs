"use client";

import * as React from "react";
import { Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:text-yellow-500 text-black border-2 border-black border-opacity-25 dark:border-white dark:border-opacity-25">
          <Sun size={20} strokeWidth={2} absoluteStrokeWidth className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size={20} strokeWidth={2} absoluteStrokeWidth className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="font-bold text-base flex justify-between align-middle items-center ">
          Light
          {theme === "light" && <Check className="h-4 w-4 text-black font-black  dark:text-yellow-500" strokeWidth={4} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="font-bold text-base flex justify-between align-middle items-center ">
          Dark
          {theme === "dark" && <Check className="h-4 w-4 text-black font-black  dark:text-yellow-500" strokeWidth={4} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="font-bold text-base flex justify-between align-middle items-center ">
          System
          {theme === "system" && <Check className="h-4 w-4 text-black font-black dark:text-yellow-500" strokeWidth={4} />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
