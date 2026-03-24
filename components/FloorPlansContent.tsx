"use client";

import Image from "next/image";

const highlights = [
  "6,300 sq ft venue",
  "4 flexible rooms",
  "Up to 400 guests standing",
  "Designer interiors and lounge furniture",
  "Floor to ceiling windows",
  "Built for private and corporate events",
];

export default function FloorPlansContent() {
  return (
    <section className="bg-[#f7f4ee] py-24 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Preheader */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-[#111111] md:text-2xl">
            Discover the Mezzanine Experience
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f5a52] md:text-base">
            This section helps you get a quick preview of the layout, key specs,
            and download options before booking.
          </p>
        </div>

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="inline-block border border-[#c6a55b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
            Floor Plan
          </span>

          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-[#111111] md:text-5xl">
              Explore The Mezzanine Layout
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
              View the full venue layout, download the plan, and get a quick
              look at the space.
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
              className="mt-4 inline-flex min-h-[54px] w-full items-center justify-center gap-3 border border-[#c6a55b] bg-[#c6a55b] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b89345]"
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
                  Space Highlights
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                  Clean, flexible, event ready
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
                      <p className="text-sm leading-6 text-[#333333]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#d9d1c3] px-6 py-5 md:px-8">
                <p className="text-xs uppercase tracking-[0.18em] text-[#5f5a52]">
                  Lower Manhattan event venue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
