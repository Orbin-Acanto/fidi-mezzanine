import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import SpacesSection from '@/components/SpacesSection';
import VideoSection from '@/components/VideoSection';
import FeatureSection from '@/components/FeatureSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="-mt-18">
      <HeroSlider />
      <AboutSection />
      <SpacesSection />
      <VideoSection />
      <FeatureSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
