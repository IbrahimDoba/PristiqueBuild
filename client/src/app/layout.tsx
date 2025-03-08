import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Rubik, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navigation/navbar";
import { siteConfig } from "@/lib/siteConfig";
import { Analytics } from "@vercel/analytics/react"

// components
const rubik = Rubik({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });
const space= Space_Grotesk({subsets: ["latin"]});
// font source sans variable / source sands
const sourcesans = Source_Sans_3({weight: [ "200", "300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourcesans.className}>
      <Analytics/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
