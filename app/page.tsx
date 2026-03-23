import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import SpacesSection from '@/components/SpacesSection';
import VideoSection from '@/components/VideoSection';
import FeatureSection from '@/components/FeatureSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <SpacesSection />
        <VideoSection />
        <FeatureSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
