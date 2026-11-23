import type { Metadata } from "next";
import FloorPlansContent from "@/components/FloorPlansContent";

export const metadata: Metadata = {
  title: "Event Venue Floor Plan",
  description:
    "See the FiDi Mezzanine floor plan: 6,300 sq ft across six rooms at 55 Broadway, Manhattan, for corporate events, weddings and private parties.",
  keywords: [
    "event venue floor plan Manhattan",
    "FiDi Mezzanine layout",
    "venue layout NYC",
    "event space floor plan Financial District",
    "party venue layout Manhattan",
    "corporate event space layout NYC",
    "wedding venue floor plan New York",
    "55 Broadway event venue",
  ],
  alternates: {
    canonical: "https://www.fidimezzanine.com/floor-plans",
  },
  openGraph: {
    title: "Event Venue Floor Plan | FiDi Mezzanine NYC",
    description:
      "View the floor plan of FiDi Mezzanine, Manhattan's premier event venue at 55 Broadway. 6,300 sq ft across 6 rooms for corporate events, weddings and private parties.",
    url: "https://www.fidimezzanine.com/floor-plans",
    images: [
      {
        url: "https://www.fidimezzanine.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FiDi Mezzanine floor plan, Manhattan event venue at 55 Broadway",
      },
    ],
    siteName: "FiDi Mezzanine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Venue Floor Plan | FiDi Mezzanine NYC",
    description:
      "See the FiDi Mezzanine floor plan: 6,300 sq ft across six rooms at 55 Broadway in Manhattan.",
    images: ["https://www.fidimezzanine.com/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.fidimezzanine.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Floor Plans",
      "item": "https://www.fidimezzanine.com/floor-plans",
    },
  ],
};

export default function FloorPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FloorPlansContent />
    </>
  );
}
