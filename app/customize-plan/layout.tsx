import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Floor Plan Designer',
  description:
    'Plan your event layout at FiDi Mezzanine. Arrange seating and furniture across six rooms at 55 Broadway and export your floor plan as a PDF.',
  keywords:
    'FiDi Mezzanine event planner, customize floor plan NYC, interactive event planner Manhattan, venue layout tool, event design tool, floor plan designer Financial District, PDF floor plan export, seating arrangement tool, event planning NYC, customize venue layout, Manhattan event planner tool, venue visualization tool, 55 Broadway event planner',
  openGraph: {
    title: 'Customize Your Event Plan | FiDi Mezzanine NYC Interactive Tool',
    description:
      'Design your event layout with our interactive floor plan tool. Customize seating, visualize your setup across six rooms, and export your plan as PDF for your Manhattan event at 55 Broadway.',
    url: 'https://www.fidimezzanine.com/customize-plan',
    siteName: 'FiDi Mezzanine NYC',
    images: [
      {
        url: 'https://www.fidimezzanine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FiDi Mezzanine event venue Manhattan at 55 Broadway',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customize Event Plan | FiDi Mezzanine NYC',
    description:
      'Design your event with our interactive floor plan tool. Customize layouts across six rooms and export your plan as PDF.',
    images: ['https://www.fidimezzanine.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fidimezzanine.com/customize-plan',
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York City',
    'geo.position': '40.7074;-74.0126',
    ICBM: '40.7074, -74.0126',
  },
};

export default function CustomizePlanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'FiDi Mezzanine Event Floor Plan Designer',
            description:
              'Interactive floor plan designer for planning event layouts at FiDi Mezzanine, 55 Broadway, Manhattan, with PDF export.',
            url: 'https://www.fidimezzanine.com/customize-plan',
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            featureList: [
              'Drag and drop tables, seating, bars and staging',
              'Add decor, catering stations and AV equipment',
              'Add event details to the plan',
              'Export as PDF, PNG, SVG or JSON',
            ],
            provider: { '@id': 'https://www.fidimezzanine.com/#business' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.fidimezzanine.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Customize Plan',
                item: 'https://www.fidimezzanine.com/customize-plan',
              },
            ],
          }),
        }}
      />
      <h1 className="sr-only">Event Floor Plan Designer for FiDi Mezzanine</h1>
      {children}
    </>
  );
}
