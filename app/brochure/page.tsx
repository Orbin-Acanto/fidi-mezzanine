import type { Metadata } from "next";
import BrochureClient from "./BrochureClient";

export const metadata: Metadata = {
  title: "Venue Brochure",
  description:
    "Browse the FiDi Mezzanine venue brochure. Discover our full-service event space at 55 Broadway in Manhattan's Financial District. Corporate events, weddings, and private parties in New York City.",
  keywords: [
    "event venue brochure Manhattan",
    "FiDi Mezzanine brochure",
    "venue information NYC",
    "event space Manhattan Financial District",
    "corporate event venue NYC brochure",
    "wedding venue brochure New York",
  ],
  alternates: {
    canonical: "https://www.fidimezzanine.com/brochure",
  },
  openGraph: {
    title: "Venue Brochure | FiDi Mezzanine NYC",
    description:
      "Browse the FiDi Mezzanine venue brochure. Full-service event space at 55 Broadway, Manhattan. Corporate events, weddings and private parties for up to 400 guests.",
    url: "https://www.fidimezzanine.com/brochure",
    images: [
      {
        url: "https://www.fidimezzanine.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FiDi Mezzanine venue brochure, Manhattan event space at 55 Broadway",
      },
    ],
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
      "name": "Venue Brochure",
      "item": "https://www.fidimezzanine.com/brochure",
    },
  ],
};

export default function BrochurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BrochureClient />
    </>
  );
}
