// import type { NextConfig } from "next";
// import { createMDX } from "fumadocs-mdx/next";

// const withMDX = createMDX();

// const nextConfig: NextConfig = {
//   transpilePackages: ["geist"],

// };

// export default withMDX(nextConfig);
import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withMDX(nextConfig);
