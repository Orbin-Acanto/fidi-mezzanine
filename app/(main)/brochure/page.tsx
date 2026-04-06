import type { Metadata } from "next";
import Link from "next/link";
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

const brochureHighlights = [
  "6,300 square feet of event space across six distinct rooms",
  "Corporate events, weddings, milestone celebrations, and private parties",
  "Full-service planning with catering, decor, staging, and production support",
  "Floor plans, venue imagery, and event setup inspiration",
  "Prime Financial District location at 55 Broadway in Manhattan",
];

export default function BrochurePage() {
  return (
    <main className="bg-[#f7f4ee]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mt-[5rem] border-b border-[#d9d1c3] bg-[#f7f4ee] py-14 md:mt-[6.5rem] md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:items-start">
            <div className="max-w-3xl">
              <p className="font-heading inline-block border border-[#c6a55b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
                Venue Brochure
              </p>
              <h1 className="font-heading mt-5 text-3xl font-semibold uppercase tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
                Explore the FiDi Mezzanine Event Brochure
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Browse our venue brochure for a closer look at FiDi Mezzanine,
                a full-service Manhattan event space at 55 Broadway built for
                corporate events, weddings, private parties, and milestone
                celebrations.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f5a52]">
                This page gives Google and visitors a clear overview of what
                the brochure includes, while the interactive viewer below lets
                you flip through the full brochure online or open the PDF
                directly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading inline-flex min-h-[54px] items-center justify-center border border-[#c6a55b] bg-[#c6a55b] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b89345]"
                >
                  Open PDF Brochure
                </a>
                <Link
                  href="/#contact"
                  className="font-heading inline-flex min-h-[54px] items-center justify-center border border-[#c6a55b] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#c6a55b] transition hover:bg-[#c6a55b] hover:text-white"
                >
                  Ask About Availability
                </Link>
              </div>
            </div>

            <aside className="border border-[#d9d1c3] bg-white p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-[#111111]">
                What You&apos;ll Find Inside
              </h2>
              <ul className="mt-5 space-y-4">
                {brochureHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-[#c6a55b]" />
                    <span className="text-sm leading-6 text-[#333333] md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[#d9d1c3] pt-6 text-sm leading-6 text-[#5f5a52]">
                Looking for layouts too? You can also review our{" "}
                <Link href="/floor-plans" className="text-[#111111] underline underline-offset-4">
                  floor plans
                </Link>{" "}
                for room-by-room planning details.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2d2d2d] bg-neutral-900 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-tight">
            Interactive Brochure Viewer
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            Flip through the FiDi Mezzanine brochure online to preview the
            venue, event setups, and planning inspiration before reaching out
            to our team.
          </p>
        </div>
      </section>

      <BrochureClient />
    </main>
  );
}
