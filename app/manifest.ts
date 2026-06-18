import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Durgesh Bachhav - Full Stack Developer Portfolio",
    short_name: "Durgesh Bachhav",
    description:
      "Full Stack MERN Developer portfolio showcasing scalable SaaS, FinTech, E-commerce, and Web3 applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f2e8",
    theme_color: "#f97316",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
