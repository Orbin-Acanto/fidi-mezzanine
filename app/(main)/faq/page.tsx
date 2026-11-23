import type { Metadata } from "next";
import Link from "next/link";

const url = "https://www.fidimezzanine.com/faq";
const description =
  "Answers about FiDi Mezzanine, a Financial District event venue at 55 Broadway: capacity, rooms, catering, bar, subway access, event types and booking.";

export const metadata: Metadata = {
  title: "Financial District Event Venue FAQ",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Financial District Event Venue FAQ | FiDi Mezzanine NYC",
    description,
    url,
    images: [
      {
        url: "https://www.fidimezzanine.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FiDi Mezzanine event venue at 55 Broadway, Financial District",
      },
    ],
    siteName: "FiDi Mezzanine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial District Event Venue FAQ | FiDi Mezzanine NYC",
    description,
    images: ["https://www.fidimezzanine.com/og-image.jpg"],
  },
};

type Faq = { q: string; a: string; link?: { href: string; label: string } };

const groups: { topic: string; faqs: Faq[] }[] = [
  {
    topic: "Capacity and Spaces",
    faqs: [
      {
        q: "How many guests can FiDi Mezzanine hold?",
        a: "FiDi Mezzanine holds up to 400 guests for a standing reception. For a seated dinner it holds 200 guests with a dance floor or 300 without one. The venue covers 6,300 square feet at 55 Broadway.",
        link: { href: "/floor-plans", label: "See the floor plan" },
      },
      {
        q: "What spaces does the venue have?",
        a: "The venue has four event rooms: the Reading Room, Conference Room, Dining Room and Meeting Room. The Lobby and Main Bar are shared areas that connect them. Rooms can be used on their own or together, so the layout can fit your event.",
        link: { href: "/#rooms", label: "View the rooms" },
      },
      {
        q: "What does the space look like?",
        a: "FiDi Mezzanine is an industrial chic space with floor to ceiling windows, designer lounge furniture, chandeliers and bleacher style seating. It also has private call booths and two multi-person bathrooms.",
        link: { href: "/brochure", label: "Browse the brochure" },
      },
      {
        q: "Can I see the floor plan before I book?",
        a: "Yes, the full floor plan is on the Floor Plans page. You can view it online or download it as a PDF.",
        link: { href: "/floor-plans", label: "Open the floor plans" },
      },
      {
        q: "Can I plan my own layout online?",
        a: "Yes, the online floor plan designer lets you place tables, seating, bars, staging, decor and catering stations. You can export your plan as a PDF, PNG, SVG or JSON file to share with your team. The designer needs a screen at least 768 pixels wide, so use a tablet or computer.",
        link: { href: "/customize-plan", label: "Open the floor plan designer" },
      },
    ],
  },
  {
    topic: "Catering, Bar and Production",
    faqs: [
      {
        q: "Does FiDi Mezzanine provide catering?",
        a: "Yes, catering is provided in house. The venue has its own kitchen, and the catering is handled by the same MMEink team that runs your event.",
      },
      {
        q: "Can we bring our own caterer?",
        a: "Yes, outside caterers are allowed at FiDi Mezzanine. Let the team know when you book so they can plan the setup with your caterer.",
      },
      {
        q: "Are kosher and other dietary options available?",
        a: "Yes, kosher and other dietary options are available. Tell the team about your guests' needs when you plan the menu.",
      },
      {
        q: "Is there a bar at the venue?",
        a: "Yes, the venue has a Main Bar and offers in-house bar service.",
        link: { href: "/#rooms", label: "See the Main Bar" },
      },
      {
        q: "What services are included with the venue?",
        a: "FiDi Mezzanine is a full service venue: catering, bar service, decor, staging, production and event coordination are all handled in house. You work with one team, the MMEink team, from start to finish instead of coordinating separate vendors.",
      },
      {
        q: "Does the venue have sound and AV?",
        a: "Yes, the venue has surround sound audio. Staging and production for your event are handled by the in-house team.",
      },
    ],
  },
  {
    topic: "Event Types",
    faqs: [
      {
        q: "What kinds of events does FiDi Mezzanine host?",
        a: "FiDi Mezzanine hosts corporate events, weddings, private parties and milestone celebrations. That includes conferences, product launches, company galas, wedding ceremonies and receptions, birthdays, anniversaries, and film and TV shoots.",
        link: { href: "/#about", label: "See event types" },
      },
      {
        q: "Can I host a wedding at FiDi Mezzanine?",
        a: "Yes, FiDi Mezzanine hosts wedding ceremonies and receptions. Catering, bar, decor, staging and coordination are handled in house, for up to 400 guests standing, or 200 seated with a dance floor or 300 seated without one.",
      },
      {
        q: "Is FiDi Mezzanine a good fit for corporate events?",
        a: "Yes, the venue hosts conferences, product launches, company parties and corporate galas. Along with the larger event spaces it has a Conference Room, a Meeting Room and private call booths.",
      },
      {
        q: "Can I book the venue for a birthday or private party?",
        a: "Yes, FiDi Mezzanine hosts birthday parties, anniversaries and other private celebrations. Parties can be up to 400 guests standing, or 200 seated with a dance floor or 300 seated without one.",
      },
      {
        q: "Is the venue available for film and TV shoots?",
        a: "Yes, FiDi Mezzanine is available for film and TV shoots. Productions use its industrial character, floor to ceiling windows and designer interiors as a Manhattan location.",
      },
    ],
  },
  {
    topic: "Location and Getting Here",
    faqs: [
      {
        q: "Where is FiDi Mezzanine?",
        a: "FiDi Mezzanine is at 55 Broadway, New York, NY 10006, in Manhattan's Financial District. It is steps from Wall Street and close to the New York Stock Exchange, Bowling Green and Battery Park.",
        link: { href: "/#contact", label: "See the map" },
      },
      {
        q: "Which subway stations are closest?",
        a: "The closest subway stations are Bowling Green (4/5 trains) and Wall Street (2/3 and 4/5 trains). Rector Street (1 and R trains) is also nearby.",
      },
      {
        q: "Is there parking?",
        a: "Yes, parking is available for guests. Ask the team for details when you book.",
      },
      {
        q: "Is the venue wheelchair accessible?",
        a: "Yes, the venue is wheelchair accessible with elevator access. Share any accessibility needs with the team in advance.",
      },
    ],
  },
  {
    topic: "Booking",
    faqs: [
      {
        q: "How do I book FiDi Mezzanine?",
        a: "Contact the team by phone at 877.885.0705, by email at info@fidimezzanine.com, or through the contact form on the website. The team will reply with availability and next steps.",
        link: { href: "/#contact", label: "Go to the contact form" },
      },
      {
        q: "Can I tour the venue before booking?",
        a: "Yes, you can schedule a tour with the team. You can also review the floor plan and brochure online first.",
        link: { href: "/floor-plans", label: "See the floor plan" },
      },
      {
        q: "How much does it cost to rent FiDi Mezzanine?",
        a: "Pricing is not listed on the website. Contact the team with your date, guest count and event type to request pricing.",
        link: { href: "/#contact", label: "Request pricing" },
      },
      {
        q: "Where can I find the venue brochure?",
        a: "The brochure is on the Brochure page. You can flip through it online or open the PDF.",
        link: { href: "/brochure", label: "Open the brochure" },
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) =>
    g.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fidimezzanine.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: url },
  ],
};

export default function FaqPage() {
  return (
    <div className="bg-[#f7f4ee]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mt-[5rem] border-b border-[#d9d1c3] py-14 md:mt-[6.5rem] md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="font-heading inline-block border border-[#c6a55b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c6a55b]">
            FAQ
          </p>
          <h1 className="font-heading mt-5 text-3xl font-semibold uppercase tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
            Financial District Event Venue FAQ
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Answers to common questions about FiDi Mezzanine, an event venue at
            55 Broadway in Manhattan&apos;s Financial District. Can&apos;t find
            what you need? Call 877.885.0705 or email info@fidimezzanine.com.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {groups.map((group) => (
          <section key={group.topic}>
            <h2 className="font-heading border-b border-[#c6a55b] pb-3 text-xl font-semibold uppercase tracking-tight text-[#111111] md:text-2xl">
              {group.topic}
            </h2>
            <div className="divide-y divide-[#d9d1c3] border-b border-[#d9d1c3] bg-white">
              {group.faqs.map((faq) => (
                <div key={faq.q} className="px-5 py-6 md:px-8">
                  <h3 className="font-heading text-lg font-semibold text-[#111111]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#5f5a52]">{faq.a}</p>
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      className="mt-3 inline-block text-sm text-[#111111] underline underline-offset-4 hover:text-[#c6a55b]"
                    >
                      {faq.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-[#d9d1c3] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-[#111111] sm:text-2xl md:text-3xl">
            Ready to Plan Your Event?
          </h2>
          <p className="mt-4 text-sm text-[#5f5a52] sm:text-base md:text-lg">
            Tell us about your event and the FiDi Mezzanine team will get back
            to you with availability.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/floor-plans" className="btn-primary">
              View Floor Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
