/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "border-t border-[#e2d6c5] dark:border-[#3a332a] bg-[#f1e6d5]/60 dark:bg-[#241f19]/60 p-3",
          className
        )}
      >
        <div className="flex items-center gap-3">
          <img
            src="/magicui-logo.png"
            alt="Durgesh Bachhav"
            className="w-8 h-8 object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#2b241d] dark:text-[#efe6d9] truncate">
              Try Cursify
            </p>
            <p className="text-xs text-[#6f5f4d] dark:text-[#b7a48f] truncate">
              Beautiful design system
            </p>
          </div>
          <a
            href="#"
            className="text-xs text-orange-600 dark:text-orange-400 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Learn more
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border border-[#e2d6c5] dark:border-[#3a332a] p-4 bg-[#f8f2e8] dark:bg-[#1c1a16]",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/cursify.png"
          alt="Durgesh Bachhav"
          className="w-full h-40 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter text-[#2b241d] dark:text-[#efe6d9]">
            Try Cursify
          </h3>
          <p className="text-sm text-[#6f5f4d] dark:text-[#b7a48f]">
            Cursify is a cursor animation library for building beautiful and
            and engaging cursor animations for your web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
