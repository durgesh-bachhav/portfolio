"use client";

import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@/components/ui/drawer";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
}

export function TagFilter({ tags, selectedTag, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const safeTags = Array.isArray(tags) ? tags : [];

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== "All") {
      params.set("tag", tag);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const DesktopTagFilter = () => (
    <div className="hidden md:flex flex-wrap gap-2">
      {safeTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`h-8 flex items-center px-1 pl-3 cursor-pointer border text-sm transition-colors ${
            selectedTag === tag
              ? "border-orange-600 bg-[#f1e6d5] text-orange-700 dark:bg-[#2a241d] dark:text-orange-400"
              : "border-[#e2d6c5] text-[#6f5f4d] hover:bg-[#f1e6d5] dark:border-[#3a332a] dark:text-[#b7a48f] dark:hover:bg-[#2a241d]"
          }`}
        >
          <span>{tag}</span>
          {tagCounts?.[tag] && (
            <span
              className={`ml-2 text-xs border h-6 min-w-6 font-medium flex items-center justify-center ${
                selectedTag === tag
                  ? "border-[#e2d6c5] bg-[#f8f2e8] text-orange-700 dark:border-[#3a332a] dark:bg-[#1c1a16] dark:text-orange-400"
                  : "border-[#e2d6c5] text-[#6f5f4d] dark:border-[#3a332a] dark:text-[#b7a48f]"
              }`}
            >
              {tagCounts[tag]}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  const MobileTagFilter = () => (
    <Drawer>
    <DrawerTrigger className="md:hidden w-full flex items-center justify-between px-4 py-2 border border-[#e2d6c5] dark:border-[#3a332a] hover:bg-[#f1e6d5] dark:hover:bg-[#2a241d] transition-colors">
      <span className="capitalize text-sm font-medium text-[#6f5f4d] dark:text-[#b7a48f]">
        {selectedTag}
      </span>
      <ChevronDown className="h-4 w-4" />
    </DrawerTrigger>

      <DrawerContent className="md:hidden">
        <DrawerHeader>
          <h3 className="font-semibold text-sm">Select Category</h3>
        </DrawerHeader>

        <DrawerBody>
          <div className="space-y-2">
            {safeTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="w-full flex items-center justify-between font-medium cursor-pointer text-sm transition-colors"
              >
                <span
                  className={`w-full flex items-center justify-between font-medium cursor-pointer text-sm transition-colors ${
                    selectedTag === tag
                      ? "underline underline-offset-4 text-orange-600 dark:text-orange-400"
                      : "text-[#6f5f4d] dark:text-[#b7a48f]"
                  }`}
                >
                  {tag}
                </span>
                {tagCounts?.[tag] && (
                  <span className="flex-shrink-0 ml-2 border border-[#e2d6c5] dark:border-[#3a332a] h-6 min-w-6 flex items-center justify-center text-xs text-[#6f5f4d] dark:text-[#b7a48f]">
                    {tagCounts[tag]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <DesktopTagFilter />
      <MobileTagFilter />
    </>
  );
}
