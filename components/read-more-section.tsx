/* eslint-disable @next/next/no-img-element */
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import GridSection from "@/components/grid-section";
import Link from "next/link";

const mdxSource = createMDXSource(docs, meta);
const blogSource = loader({
  baseUrl: "/blog",
  source: { files: mdxSource.files() },
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

interface ReadMoreSectionProps {
  currentSlug: string[];
  currentTags?: string[];
}

export function ReadMoreSection({
  currentSlug,
  currentTags = [],
}: ReadMoreSectionProps) {
  const allPages = blogSource.getPages() as BlogPage[];

  const currentUrl = `/blog/${currentSlug.join("/")}`;

  const otherPosts = allPages
    .filter((page) => page.url !== currentUrl)
    .map((page) => {
      const tagOverlap = currentTags.filter((tag) =>
        page.data.tags?.includes(tag)
      ).length;

      return {
        ...page,
        relevanceScore: tagOverlap,
        date: new Date(page.data.date),
      };
    })
    .sort((a, b) => {
      if (a.relevanceScore !== b.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.date.getTime() - a.date.getTime();
    })
    .slice(0, 3);

  if (otherPosts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-[#e2d6c5] dark:border-[#3a332a] p-0">
      <div className="p-6 lg:p-10">
        <h2 className="text-2xl font-bold font-mono mb-8">Read more</h2>

        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => {
            const formattedDate = formatDate(post.date);

            return (
              <Link
                key={post.url}
                href={post.url}
                className="group block"
              >
                <GridSection className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
                    {post.data.thumbnail && (
                      <div className="flex-shrink-0 col-span-1 lg:col-span-4">
                        <div className="relative w-full h-full">
                          <img
                            src={post.data.thumbnail}
                            alt={post.data.title}
                            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          />
                        </div>
                      </div>
                    )}
                    <div className="space-y-2 flex-1 col-span-1 lg:col-span-8">
                      <h3 className="text-lg group-hover:underline underline-offset-4 font-semibold text-[#2b241d] dark:text-[#efe6d9] transition-colors line-clamp-2">
                        {post.data.title}
                      </h3>
                      <p className="text-sm text-[#6f5f4d] dark:text-[#b7a48f] line-clamp-3 group-hover:underline underline-offset-4">
                        {post.data.description}
                      </p>
                      <time className="block text-xs font-medium text-[#7a6a58] dark:text-[#b7a48f]">
                        {formattedDate}
                      </time>
                    </div>
                  </div>
                </GridSection>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
