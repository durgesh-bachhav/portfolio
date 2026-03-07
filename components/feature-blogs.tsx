

import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { BlogCard } from "@/components/blog-card";
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

const blogSource = loader({
    baseUrl: "/blog",
    source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export async function FeaturedBlogs() {
    const allPages = blogSource.getPages() as BlogPage[];

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
    const displayBlogs = featuredBlogs.length > 0 ? featuredBlogs : sortedBlogs.slice(0, 4);

    return (
        <section className="py-4 md:py-6 lg:py-8 px-6 lg:px-0">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
                            Featured Articles
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl text-center">
                            Explore in-depth guides, tutorials, and insights about web development, Next.js, and modern technologies.
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="max-w-4xl mx-auto w-full px-6 lg:px-0">
                    <Suspense fallback={<div>Loading articles...</div>}>
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative overflow-hidden border-x border-border ${displayBlogs.length < 4 ? "border-b" : "border-b-0"
                                }`}
                        >
                            {displayBlogs.map((blog) => {
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
                                        showRightBorder={displayBlogs.length < 3}
                                    />
                                );
                            })}
                        </div>
                    </Suspense>
                </div>
            </div>
        </section>
    );
}