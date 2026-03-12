

import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { BlogCard } from "@/components/blog-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

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

export async function FeaturedBlogs() {
    const rawPages = blogSource.getPages() as unknown;
    const allPages = Array.isArray(rawPages)
        ? (rawPages as BlogPage[])
        : rawPages instanceof Map
            ? (Array.from(rawPages.values()) as BlogPage[])
            : rawPages && typeof (rawPages as { [Symbol.iterator]?: unknown })[Symbol.iterator] === "function"
                ? (Array.from(rawPages as Iterable<BlogPage>) as BlogPage[])
                : [];

    // Sort by date (newest first)
    const sortedBlogs = allPages.sort((a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        return dateB - dateA;
    });

    // Get only featured blogs or top 4 latest blogs
    const featuredBlogs = sortedBlogs
        .filter((blog) => blog.data.featured)
        .slice(0, 4);

    // If no featured blogs, show top 4 latest
    const displayBlogs =
        featuredBlogs.length > 0 ? featuredBlogs : sortedBlogs.slice(0, 4);
    const safeDisplayBlogs = Array.isArray(displayBlogs) ? displayBlogs : [];

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-mono">Featured Articles</h2>
                    <p className="text-sm text-[#6f5f4d] dark:text-[#b7a48f] max-w-2xl">
                        Practical notes on engineering systems, product work, and modern
                        web development.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400"
                >
                    View all articles
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="w-full">
                <Suspense fallback={<div className="text-sm text-[#6f5f4d] dark:text-[#b7a48f]">Loading articles...</div>}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {safeDisplayBlogs.map((blog) => {
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
            </div>
        </div>
    );
}
