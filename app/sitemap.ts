import { MetadataRoute } from "next";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

const mdxSource = createMDXSource(docs, meta);
const blogSource = loader({
  baseUrl: "/blog",
  source: { files: mdxSource.files() },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://durgeshbachhav.vercel.app";

  const blogPages = blogSource.getPages();
  const blogEntries: MetadataRoute.Sitemap = blogPages.map((page) => {
    const date = new Date(page.data.date);
    return {
      url: `${baseUrl}/blog/${page.data.slug ?? page.file.path.replace(".mdx", "")}`,
      lastModified: date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
