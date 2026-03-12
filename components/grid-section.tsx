import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

interface GridSectionProps {
  children: React.ReactNode;
  className?: string;
  markersClassName?: string;
}

export default function GridSection({
  children,
  className = "",
  markersClassName = "",
}: GridSectionProps) {
  return (
    <div
      className={cn(
        "relative border border-[#e2d6c5] dark:border-[#3a332a]",
        className
      )}
    >
      <Plus
        aria-hidden
        className={cn(
          "absolute -top-2.5 -left-2.5 h-4 w-4 text-[#b9a892] dark:text-[#6d5f4f] pointer-events-none",
          markersClassName
        )}
      />
      <Plus
        aria-hidden
        className={cn(
          "absolute -top-2.5 -right-2.5 h-4 w-4 text-[#b9a892] dark:text-[#6d5f4f] pointer-events-none",
          markersClassName
        )}
      />
      <Plus
        aria-hidden
        className={cn(
          "absolute -bottom-2.5 -left-2.5 h-4 w-4 text-[#b9a892] dark:text-[#6d5f4f] pointer-events-none",
          markersClassName
        )}
      />
      <Plus
        aria-hidden
        className={cn(
          "absolute -bottom-2.5 -right-2.5 h-4 w-4 text-[#b9a892] dark:text-[#6d5f4f] pointer-events-none",
          markersClassName
        )}
      />
      {children}
    </div>
  );
}
