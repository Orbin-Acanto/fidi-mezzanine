import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customize Your Event Plan | FiDi Mezzanine NYC Interactive Floor Plan Designer',
  description:
    'Design your perfect event at FiDi Mezzanine with our interactive floor plan customization tool. Arrange seating, plan layouts, visualize your setup across our six rooms, and export your custom event plan as PDF. Free event planning tool for Manhattan corporate events, weddings, and private celebrations at 55 Broadway.',
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
            name: 'FiDi Mezzanine Event Plan Customization Tool',
            description:
              'Interactive floor plan designer for customizing event layouts at FiDi Mezzanine, 55 Broadway Manhattan, with PDF export capability.',
            url: 'https://www.fidimezzanine.com/customize-plan',
            applicationCategory: 'Event Planning Tool',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            featureList: [
              'Interactive floor plan customization',
              'Seating arrangement designer',
              'Layout visualization across six rooms',
              'PDF export of custom plans',
              'Main Bar layout options',
              'Dining Room configuration',
              'Conference Room setup',
              'Full venue layout planning',
            ],
            provider: {
              '@type': 'EventVenue',
              name: 'FiDi Mezzanine',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '55 Broadway',
                addressLocality: 'New York',
                addressRegion: 'NY',
                postalCode: '10006',
                addressCountry: 'US',
              },
              telephone: '+12129715353',
              email: 'info@mmeink.com',
            },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Customize Your Event Plan',
            description:
              'Interactive event planning tool for customizing floor plans and exporting layouts for FiDi Mezzanine events at 55 Broadway, Manhattan.',
            url: 'https://www.fidimezzanine.com/customize-plan',
            isPartOf: {
              '@type': 'WebSite',
              name: 'FiDi Mezzanine NYC',
              url: 'https://www.fidimezzanine.com',
            },
            about: {
              '@type': 'EventVenue',
              name: 'FiDi Mezzanine',
            },
            potentialAction: {
              '@type': 'CreateAction',
              name: 'Customize Event Floor Plan',
              description:
                'Create and customize event floor plan with seating arrangements and layout options for FiDi Mezzanine',
              result: {
                '@type': 'DigitalDocument',
                name: 'Custom Event Floor Plan PDF',
                encodingFormat: 'application/pdf',
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'FiDi Mezzanine Floor Plan Customization Tool',
            applicationCategory: 'DesignApplication',
            description:
              'Interactive tool for designing custom event layouts at FiDi Mezzanine with real-time visualization and PDF export. Plan corporate events, weddings, and private parties at 55 Broadway, Manhattan.',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            featureList: [
              'Drag-and-drop floor plan designer',
              'Customize seating arrangements',
              'Visualize event layout in real-time',
              'Export customized plans as PDF',
              'Multiple venue space options across six rooms',
              'Capacity calculations up to 400 guests',
            ],
            provider: {
              '@type': 'Organization',
              name: 'FiDi Mezzanine',
              url: 'https://www.fidimezzanine.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Customize Your Event Floor Plan at FiDi Mezzanine',
            description:
              'Step-by-step guide to using the FiDi Mezzanine floor plan customization tool at 55 Broadway, Manhattan.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Select a Room',
                text: 'Choose from six available rooms including the Main Bar, Dining Room, Conference Room, Reading Room, Lobby, or Meeting Room.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Customize Layout',
                text: 'Arrange seating, tables, and event elements using the interactive designer to fit your corporate event, wedding, or private party.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Visualize Setup',
                text: 'Preview your custom event layout in real-time and adjust for up to 400 guests.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Export PDF',
                text: 'Download your customized FiDi Mezzanine floor plan as a PDF to share with your event team.',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
