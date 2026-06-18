import type { Metadata, Viewport } from "next";
import { DATA } from "@/data/resume";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Durgesh Bachhav",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Developer",
    "Freelance Developer",
    "SaaS Developer",
    "FinTech Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Redis Developer",
    "Portfolio",
    "Developer Portfolio",
    "Nashik Developer",
    "India Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Web3",
    "Blockchain",
];

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8f2e8" },
        { media: "(prefers-color-scheme: dark)", color: "#1c1a16" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),

    title: {
        default: siteConfig.name,
        template: `%s | ${DATA.name}`,
    },

    description: siteConfig.description,

    keywords: metadataKeywords,

    authors: [
        {
            name: "Durgesh Bachhav",
            url: "https://durgeshbachhav.vercel.app",
        },
    ],

    creator: "Durgesh Bachhav",

    publisher: "Durgesh Bachhav",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: "Durgesh Bachhav Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Durgesh Bachhav - Full Stack Developer Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@durgeshbachhav",
        images: ["/og-image.png"],
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

    alternates: {
        canonical: siteConfig.url,
    },

    manifest: "/site.webmanifest",

    verification: {
        google: "",
        yandex: "",
    },

    category: "technology",
};
