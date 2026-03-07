import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "../metadata";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: metadataKeywords,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mb-14">
            {children}
        </div>
    );
}
