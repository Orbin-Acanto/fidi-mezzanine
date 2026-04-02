import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import SpacesSection from '@/components/SpacesSection';
import VideoSection from '@/components/VideoSection';
import FeatureSection from '@/components/FeatureSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many guests can FiDi Mezzanine accommodate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FiDi Mezzanine accommodates up to 400 guests for standing receptions and 150 guests for seated dinners across 6,300 square feet at 55 Broadway in Manhattan."
      }
    },
    {
      "@type": "Question",
      "name": "What types of events does FiDi Mezzanine host?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FiDi Mezzanine hosts corporate events, conferences, product launches, company galas, weddings, wedding receptions, private parties, birthday celebrations, milestone anniversaries, and film and TV productions in Manhattan's Financial District."
      }
    },
    {
      "@type": "Question",
      "name": "Where is FiDi Mezzanine located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FiDi Mezzanine is located at 55 Broadway, New York, NY 10006, in the heart of Manhattan's Financial District, steps from Wall Street and Bowling Green subway stations."
      }
    },
    {
      "@type": "Question",
      "name": "Does FiDi Mezzanine provide catering and full event service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FiDi Mezzanine offers complete full-service event production including in-house catering, bar service, event decor, staging, and entertainment production. Everything is handled by the MMEink team so clients work with one team from start to finish."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book FiDi Mezzanine for a corporate event or wedding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact the FiDi Mezzanine team by phone at 212-971-5353 or by email at info@mmeink.com. You can also use the contact form on the website at fidimezzanine.com to request availability and pricing for your event."
      }
    },
    {
      "@type": "Question",
      "name": "Is FiDi Mezzanine a good venue for weddings in New York City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FiDi Mezzanine is one of New York City's top wedding venues, offering a stunning industrial-chic setting at 55 Broadway in Lower Manhattan. The venue provides full wedding services including catering, bar, decor, staging, and coordination for up to 400 guests."
      }
    },
    {
      "@type": "Question",
      "name": "What is the address of FiDi Mezzanine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FiDi Mezzanine is at 55 Broadway, New York, NY 10006. The venue is in the Financial District of Lower Manhattan, near Wall Street, accessible by subway at Bowling Green (4/5 trains) and Wall Street (2/3 trains)."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="sr-only">
        FiDi Mezzanine, Manhattan&apos;s Premier Event Venue at 55 Broadway, Financial District New York City
      </h1>
      <div className="-mt-18">
        <HeroSlider />
        <AboutSection />
        <SpacesSection />
        <VideoSection />
        <FeatureSection />
        <GallerySection />
        <ContactSection />
      </div>
    </>
  );
}
