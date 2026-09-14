import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";

import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

/* Body/base font — Space Grotesk, bound to --font-sans (applied as `font-sans`
 * on <html>). Everything that isn't a heading inherits this. */
export const metadata: Metadata = {
  // pins every relative/OG url to the .dev origin so nothing canonicalises back to .site
  metadataBase: new URL(config.site),
  alternates: { canonical: "./" },
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="font-sans"
      suppressHydrationWarning
    >
      <head>
        {/* The Spline runtime lazy-loads its wasm from unpkg; warm the
            connection early so the 3D scene starts faster. */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
