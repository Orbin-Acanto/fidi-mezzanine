import type { Metadata } from "next";
import { Montserrat, Gilda_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import siteConfig from "@/config/siteConfig";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: {
    template: "%s | FiDi Mezzanine NYC",
    default: siteConfig.seo.title,
  },
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
        url: "https://www.fidimezzanine.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FiDi Mezzanine, Manhattan event venue at 55 Broadway New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["https://www.fidimezzanine.com/og-image.jpg"],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PNJMGZL35D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PNJMGZL35D');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "EventVenue"],
              "@id": "https://www.fidimezzanine.com/#business",
              name: "FiDi Mezzanine",
              description:
                "FiDi Mezzanine is Manhattan's premier full-service event venue at 55 Broadway in New York's Financial District. Hosting corporate events, weddings, private parties and milestone celebrations for up to 400 guests.",
              url: "https://www.fidimezzanine.com",
              telephone: "+12129715353",
              email: "info@mmeink.com",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "55 Broadway",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10006",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7074,
                longitude: -74.0126,
              },
              image: "https://www.fidimezzanine.com/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/fidimezzanine/",
                "https://www.facebook.com/themezzaninenyc",
              ],
              maximumAttendeeCapacity: 400,
              floorSize: {
                "@type": "QuantitativeValue",
                value: 6300,
                unitCode: "FTK",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Full Service Catering",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Event Production and Staging",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Decor Services",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Private Bar",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Meeting Rooms",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Floor to Ceiling Windows",
                  value: true,
                },
              ],
              hasMap:
                "https://maps.google.com/?q=55+Broadway+New+York+NY+10006",
              containsPlace: [
                { "@type": "Room", name: "Main Bar" },
                { "@type": "Room", name: "Lobby" },
                { "@type": "Room", name: "Reading Room" },
                { "@type": "Room", name: "Conference Room" },
                { "@type": "Room", name: "Dining Room" },
                { "@type": "Room", name: "Meeting Room" },
              ],
            }),
          }}
        />
      </head>
      <body className={gildaDisplay.className}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
