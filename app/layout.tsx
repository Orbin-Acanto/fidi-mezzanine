import type { Metadata } from "next";
import { Montserrat, Gilda_Display } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const gildaDisplay = Gilda_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gilda-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "MMEink" }],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "https://www.fidimezzanine.com",
    siteName: siteConfig.venue.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/1a1a1a/d2b371?text=The+Mezzanine+NYC",
        width: 1200,
        height: 630,
        alt: siteConfig.venue.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      "https://placehold.co/1200x630/1a1a1a/d2b371?text=The+Mezzanine+NYC",
    ],
  },
  alternates: {
    canonical: "https://www.fidimezzanine.com",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${gildaDisplay.variable}`}
    >
      <body className={gildaDisplay.className}>
        <Header />
        <main className="pt-18 min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
