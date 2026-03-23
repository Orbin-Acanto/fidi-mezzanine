'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="video" ref={containerRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div style={{ y, opacity }} className="relative aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1077986468?h=1cd3a876d4"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Content */}
          <AnimatedSection className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Step Inside</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
              </span>
              <br />
              The Mezzanine
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The moment you arrive, the space makes an impression. Floor-to-ceiling windows, sleek
              bleacher-style seating, designer lounge furniture, and chandeliers come together to
              create a backdrop that is polished, versatile, and genuinely unlike anything else in
              the Financial District.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
