import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog - Technical Guides & Tutorials",
    template: "%s | Durgesh Bachhav",
  },
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
