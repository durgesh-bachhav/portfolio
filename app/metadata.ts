// metadata.ts
import type { Metadata, Viewport } from "next";
import { DATA } from "@/data/resume";
import { siteConfig } from "@/lib/site";

// Additional keywords
export const metadataKeywords = [
    "Blog",
    "React",
    "MagicUI Blog",
    "MagicUI Blog Template",
    "MagicUI Blog Template Next.js",
    "MagicUI Blog Template Tailwind",
    "MagicUI Blog Template Shadcn",
    "Next.js Blog",
    "React Blog",
    "Web Development",
    "Tutorials",
    "MDX Blog",
    "Modern Blog Template",
];

// Viewport settings
export const viewport: Viewport = {
    themeColor: "black",
};

// Combined unified metadata
export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),

    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },

    description: siteConfig.description || DATA.description,

    keywords: metadataKeywords,

    authors: [
        {
            name: "Durgesh Bachhav",
            url: "https://durgeshbachhav.vercel.app",
        },
    ],

    creator: "Durgesh Bachhav",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url || DATA.url,
        title: siteConfig.name || DATA.name,
        description: siteConfig.description || DATA.description,
        siteName: siteConfig.name || DATA.name,
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.name || DATA.name,
        description: siteConfig.description || DATA.description,
        creator: "@durgesh_bachhav",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    verification: {
        google: "",
        yandex: "",
    },
};
