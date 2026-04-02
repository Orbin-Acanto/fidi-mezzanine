"use client";

import Image from "next/image";
import Link from "next/link";

const highlights = [
  "6,300 sq ft across 6 distinct rooms",
  "Up to 400 guests standing, 150 seated",
  "Full service catering, decor and staging",
  "Designer interiors and lounge furniture",
  "Floor to ceiling windows with natural light",
  "Corporate events, weddings and private parties",
  "55 Broadway, Financial District Manhattan",
];

export default function FloorPlansContent() {
  return (
    <>
      {/* Preheader */}
      <section className="bg-[#f7f4ee] py-20 md:py-24 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold uppercase tracking-tight text-[#111111] md:text-6xl">
              Explore FiDi Mezzanine
            </h2>
            <p className="mt-3 text-base leading-7 text-[#5f5a52] md:text-lg">
              Get a full picture of the layout before you book. 6,300 square
              feet of event space in Manhattan&apos;s Financial District, built
              for corporate events, weddings, private parties and everything in
              between.
            </p>
          </div>
        </div>
        {/* Gold separator */}
        <div className="mx-auto mt-12 flex items-center justify-center gap-4 px-4">
          <span className="h-px w-16 bg-[#c6a55b]/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#c6a55b]" />
          <span className="h-px w-16 bg-[#c6a55b]/40" />
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 pb-0 md:py-20 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 md:mb-10">
            <span className="font-heading inline-block border border-[#c6a55b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
              Floor Plan
            </span>

            <div className="mt-4 max-w-3xl">
              <h1 className="font-heading text-2xl font-semibold uppercase tracking-tight text-[#111111] md:text-4xl">
                FiDi Mezzanine Venue Floor Plan
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
                View the complete layout of our Manhattan event venue. Download
                the floor plan and see how our six rooms can be configured for
                your corporate event, wedding reception, or private party at 55
                Broadway.
              </p>
            </div>
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Image side */}
            <div className="lg:col-span-8">
              <div className="border border-[#d9d1c3] bg-white">
                <div className="relative aspect-[4/3] md:aspect-[16/11]">
                  <Image
                    src="/plan/Mezzanine Floor Plan.jpg"
                    alt="The Mezzanine Venue Floor Plan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-contain p-4 md:p-6"
                  />
                </div>
              </div>

              <a
                href="/plan/Mezzanine Floor Plan.pdf"
                download
                className="font-heading mt-4 inline-flex min-h-[54px] w-full items-center justify-center gap-3 border border-[#c6a55b] bg-[#c6a55b] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b89345]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
                  />
                </svg>
                Download Floor Plan PDF
              </a>
            </div>

            {/* Highlights side */}
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col border border-[#d9d1c3] bg-[#f4f0e7] text-[#111111]">
                <div className="border-b border-[#d9d1c3] px-6 py-6 md:px-8">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
                    Space Highlights
                  </p>
                  <h2 className="font-heading mt-3 text-xl font-semibold uppercase leading-tight md:text-2xl">
                    Flexible, Full Service, Event Ready
                  </h2>
                </div>

                <div className="flex-1 px-6 py-6 md:px-8">
                  <div className="space-y-0 border-t border-white/10">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-b border-[#d9d1c3] py-4"
                      >
                        <span className="mt-2 h-2 w-2 flex-shrink-0 bg-[#c6a55b]" />
                        <p className="text-sm leading-6 text-[#333333]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#d9d1c3] px-6 py-5 md:px-8">
                  <p className="font-heading text-xs uppercase tracking-[0.18em] text-[#5f5a52]">
                    FiDi Mezzanine, 55 Broadway, Manhattan NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7f4ee] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-tight text-[#111111] md:text-3xl">
            Ready to Book Your Manhattan Event?
          </h2>
          <p className="mt-4 text-[#5f5a52] md:text-lg">
            FiDi Mezzanine offers full-service corporate events, weddings, and
            private parties for up to 400 guests at 55 Broadway. Reach out to
            our team to check availability and start planning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/brochure" className="btn-primary">
              View Venue Brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
