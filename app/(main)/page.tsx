import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import SpacesSection from '@/components/SpacesSection';
import VideoSection from '@/components/VideoSection';
import FeatureSection from '@/components/FeatureSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/hero-poster.jpg" fetchPriority="high" />
      <h1 className="sr-only">
        FiDi Mezzanine: Financial District Event Venue at 55 Broadway, Manhattan
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
