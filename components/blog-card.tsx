import GridSection from "@/components/grid-section";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}

export function BlogCard({
  url,
  title,
  description,
  date,
  thumbnail,
}: BlogCardProps) {
  return (
    <Link href={url} className="block h-full group">
      <GridSection className="h-full p-6">
        <div className="flex h-full flex-col gap-4">
          {thumbnail && (
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2b241d] dark:text-[#efe6d9] group-hover:underline underline-offset-4">
              {title}
            </h3>
            <p className="text-sm text-[#6f5f4d] dark:text-[#b7a48f]">
              {description}
            </p>
            <time className="block text-xs font-medium text-[#7a6a58] dark:text-[#b7a48f]">
              {date}
            </time>
          </div>
        </div>
      </GridSection>
    </Link>
  );
}
