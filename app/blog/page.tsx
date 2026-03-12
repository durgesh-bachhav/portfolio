import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { BlogCard } from "@/components/blog-card";
import { TagFilter } from "@/components/tag-filter";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import GridSection from "@/components/grid-section";

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

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>;
}) {
    const resolvedSearchParams = await searchParams;
    const rawPages = blogSource.getPages() as unknown;
    const allPages = Array.isArray(rawPages)
        ? (rawPages as BlogPage[])
        : rawPages instanceof Map
            ? (Array.from(rawPages.values()) as BlogPage[])
            : rawPages && typeof (rawPages as { [Symbol.iterator]?: unknown })[Symbol.iterator] === "function"
                ? (Array.from(rawPages as Iterable<BlogPage>) as BlogPage[])
                : [];

    const sortedBlogs = [...allPages].sort((a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        return dateB - dateA;
    });

    const normalizeTags = (tags: unknown): string[] => {
        if (Array.isArray(tags)) {
            return tags.filter((tag): tag is string => typeof tag === "string");
        }
        if (typeof tags === "string" && tags.length > 0) {
            return [tags];
        }
        return [];
    };

    const allTags = [
        "All",
        ...Array.from(
            new Set(sortedBlogs.flatMap((blog) => normalizeTags(blog.data.tags)))
        ).sort(),
    ];

    const selectedTag = resolvedSearchParams.tag || "All";
    const filteredBlogs =
        selectedTag === "All"
            ? sortedBlogs
            : sortedBlogs.filter((blog) =>
                normalizeTags(blog.data.tags).includes(selectedTag)
            );

    const safeFilteredBlogs = Array.isArray(filteredBlogs)
        ? filteredBlogs
        : [];
    const safeAllTags = Array.isArray(allTags) ? allTags : ["All"];

    const tagCounts = allTags.reduce((acc, tag) => {
        if (tag === "All") {
            acc[tag] = sortedBlogs.length;
        } else {
            acc[tag] = sortedBlogs.filter((blog) =>
                normalizeTags(blog.data.tags).includes(tag)
            ).length;
        }
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="min-h-screen bg-[#f8f2e8] dark:bg-[#1c1a16] text-[#2b241d] dark:text-[#efe6d9] relative">
            <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
                <FlickeringGrid
                    className="absolute top-0 left-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#b9a892"
                    maxOpacity={0.2}
                    flickerChance={0.05}
                />
            </div>
            <div className="relative z-10">
                <div className="max-w-5xl mx-auto px-4 border-x border-[#e2d6c5] dark:border-[#3a332a]">
                    <section className="border-b border-[#e2d6c5] dark:border-[#3a332a]">
                        <GridSection className="py-16 px-8 space-y-6">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-4xl md:text-5xl tracking-tight font-mono">
                                    Blog
                                </h1>
                                <p className="text-sm md:text-base text-[#6f5f4d] dark:text-[#b7a48f]">
                                    Notes, guides, and technical write-ups.
                                </p>
                            </div>
                            {safeAllTags.length > 0 && (
                                <TagFilter
                                    tags={safeAllTags}
                                    selectedTag={selectedTag}
                                    tagCounts={tagCounts}
                                />
                            )}
                        </GridSection>
                    </section>
                    <section className="py-12">
                        <Suspense fallback={<div className="text-sm text-[#6f5f4d] dark:text-[#b7a48f]">Loading articles...</div>}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {safeFilteredBlogs.map((blog) => {
                                    const date = new Date(blog.data.date);
                                    const formattedDate = formatDate(date);

                                    return (
                                        <BlogCard
                                            key={blog.url}
                                            url={blog.url}
                                            title={blog.data.title}
                                            description={blog.data.description}
                                            date={formattedDate}
                                            thumbnail={blog.data.thumbnail}
                                        />
                                    );
                                })}
                            </div>
                        </Suspense>
                    </section>
                </div>
            </div>
        </div>
    );
}
