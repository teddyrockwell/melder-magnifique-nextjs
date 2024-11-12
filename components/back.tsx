"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";



export default function BackButton() {
  const router = useRouter();

  return (
    <Button variant="default" size="sm" className="dark:hover:text-white hover:bg-yellow-500 dark:bg-yellow-500 text-white dark:text-white dark:hover:bg-black dark:hover:border-white dark:hover:border-opacity-25 dark:hover:border-2 dark:border-2 font-black tracking-wide pr-2 pl-1.5 flex items-center content-center justify-center text-center gap-0.5 align-middle group" onClick={() => router.back()}>
      <ArrowLeft size={20} absoluteStrokeWidth className="h-4 w-4 text-yellow-500 group-hover:text-black dark:text-black dark:group-hover:text-yellow-500" strokeWidth={3} />
      <span>
        Back
      </span>
    </Button>
  );
}
