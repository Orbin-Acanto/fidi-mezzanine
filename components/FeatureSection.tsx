"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      className="py-0 md:py-0 bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content */}
        <div className="order-2 lg:order-1 flex items-center">
          <AnimatedSection className="p-8 md:p-16 lg:p-20">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 uppercase tracking-wide">
              <span className="relative inline-block">
                <span className="relative z-10">Manhattan&apos;s Most Exciting</span>
              </span>
              <br />New Event Venue
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located at 55 Broadway in the heart of Manhattan&apos;s Financial
              District, FiDi Mezzanine sets a new standard for event spaces in
              New York City. Spanning over 6,300 square feet across four
              beautifully designed rooms, this is the party venue, corporate
              event space, and wedding venue that Lower Manhattan has been
              waiting for. Full in-house production, catering, decor, and
              staging handled from start to finish by the MMEink team.
            </p>
          </AnimatedSection>
        </div>

        {/* Image with Parallax */}
        <div className="order-1 lg:order-2 relative h-96 lg:h-auto overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="/gallery/26.jpg"
              alt="FiDi Mezzanine interior event venue Manhattan Financial District"
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
