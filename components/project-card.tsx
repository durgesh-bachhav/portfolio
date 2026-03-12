import GridSection from "@/components/grid-section";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <GridSection className="h-full p-6">
      <div className="flex h-full flex-col gap-4">
        <Link href={href || "#"} className={className}>
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top"
            />
          )}
        </Link>
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="text-base font-bold font-mono text-[#2b241d] dark:text-[#efe6d9]">
              {title}
            </h3>
            <time className="text-xs text-[#7a6a58] dark:text-[#b7a48f]">
              {dates}
            </time>
            <div className="hidden text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          </div>
          <div className="text-sm text-[#6f5f4d] dark:text-[#b7a48f]">
            <Markdown>{description}</Markdown>
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className="border border-[#e2d6c5] px-2 py-0.5 text-xs text-[#6f5f4d] dark:border-[#3a332a] dark:text-[#b7a48f]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links.map((projectLink, idx) => (
              <Link
                href={projectLink.href}
                key={idx}
                target="_blank"
                className="text-xs font-medium text-orange-600 dark:text-orange-400"
              >
                {projectLink.type}
              </Link>
            ))}
          </div>
        )}
      </div>
    </GridSection>
  );
}
