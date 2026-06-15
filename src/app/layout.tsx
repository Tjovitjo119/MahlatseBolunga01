import type { Metadata, Viewport } from "next";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AskBolungaAI } from "@/components/chat/ask-bolunga-ai";
import { siteConfig } from "@/constants/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bolungasystems",
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
  icons: {
    icon: [
      {
        url: "/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png",
        type: "image/png",
      },
    ],
    shortcut: "/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png",
    apple: "/image/bf7c1a562f1d8a6d86b517a9412b1a5ce8a2d7d6.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        {/* Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#F7941D] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-bold"
        >
          Skip to main content
        </a>

        <AnnouncementBar />
        <Navbar />
        <main id="main-content" className="w-full flex-grow">
          {children}
        </main>
        <Footer />
        <AskBolungaAI />
      </body>
    </html>
  );
}
