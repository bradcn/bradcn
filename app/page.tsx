import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-auto min-h-auto flex-col items-center justify-center text-center px-2 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Bradcn Inc.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Bradcn Inc. is a vast library or software system delivering UI components, CSS, themes, templates and many more 
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Read Docs
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Blogs
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> npm i bradcn@latest
      </span>
    </div>
  );
}
