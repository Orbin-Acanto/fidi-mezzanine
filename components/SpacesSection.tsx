"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import siteConfig from "@/config/siteConfig";

export default function SpacesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatedSection id="rooms" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title font-heading uppercase tracking-wide">
            <span className="relative inline-block">
              <span className="relative z-10">Our Event</span>
            </span>{" "}
            Spaces
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Six distinct rooms across 6,300 square feet. Each space at FiDi
            Mezzanine is designed to work independently or together, giving you
            the flexibility to create the perfect layout for your corporate
            event, wedding, party, or private gathering in Manhattan.
          </p>
        </div>

        {/* Spaces Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteConfig.spaces.map((space) => (
            <motion.div
              key={space.id}
              variants={itemVariants}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <Image
                src={space.image}
                alt={`${space.name} event space at FiDi Mezzanine, 55 Broadway Manhattan NYC`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-0 transition-all duration-300">
                <h3 className="text-lg font-bold tracking-wider font-heading uppercase">
                  {space.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Internal CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/floor-plans"
            className="btn-primary"
          >
            View Full Floor Plans
          </Link>
          <Link
            href="/brochure"
            className="btn-primary"
          >
            Download Venue Brochure
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
