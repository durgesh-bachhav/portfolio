import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
export { metadata, viewport } from "@/app/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SiteNav />
          {children}
          <Navbar />
          <Footer /> */}
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            {/* <Footer /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
