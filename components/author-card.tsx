/* eslint-disable @next/next/no-img-element */
import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-start gap-2", className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="rounded-full w-8 h-8 border border-[#e2d6c5] dark:border-[#3a332a] object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm tracking-tight text-balance font-semibold text-[#2b241d] dark:text-[#efe6d9]">
          {author.name}
        </h3>
        <p className="text-xs text-[#6f5f4d] dark:text-[#b7a48f] text-balance">
          {author.position}
        </p>
      </div>
    </div>
  );
}
