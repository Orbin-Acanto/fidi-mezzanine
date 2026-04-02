"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="video"
      ref={containerRef}
      className="py-16 md:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div style={{ y, opacity }} className="relative aspect-video">
            <video
              src="/Video.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </motion.div>

          {/* Content */}
          <AnimatedSection className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 uppercase tracking-wide">
              <span className="relative inline-block">
                <span className="relative z-10">See the Space</span>
              </span>
              <br />
              That Changes Everything
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The moment you walk in, you understand why FiDi Mezzanine is the
              event venue Manhattan has been talking about. Floor to ceiling
              windows pour light into a space filled with designer lounge
              furniture, striking chandeliers, and sleek bleacher style seating.
              It is polished and warm, flexible and impressive, and unlike
              anything else available for rent in New York City. This is where
              corporate events become legendary, and weddings become timeless.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
