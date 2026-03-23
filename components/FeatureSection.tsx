'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-0 md:py-0 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content */}
        <div className="order-2 lg:order-1 flex items-center">
          <AnimatedSection className="p-8 md:p-16 lg:p-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">FiDi&apos;s Newest:</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
              </span>
              <br />
              A Fresh Standard for Downtown Events
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located at 55 Broadway in the heart of the Financial District, The Mezzanine is
              FiDi&apos;s most stylish event venue. Spanning over 6,300 square feet across four
              rooms, it sets a new standard for downtown events with industrial-chic design, full
              in-house production capabilities, and dedicated event management from MMEink.
            </p>
          </AnimatedSection>
        </div>

        {/* Image with Parallax */}
        <div className="order-1 lg:order-2 relative h-96 lg:h-auto overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="https://placehold.co/1200x800/1a1a1a/d2b371?text=The+Mezzanine+Interior"
              alt="The Mezzanine Interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
