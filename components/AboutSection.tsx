"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import siteConfig from "@/config/siteConfig";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <AnimatedSection id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              <span className="relative inline-block font-heading uppercase tracking-wide">
                <span className="relative z-10">{siteConfig.venue.name}</span>
                {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" /> */}
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
              {siteConfig.venue.tagline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-6"
          >
            Historic charm. Modern service. An intimate, flexible mezzanine
            venue for corporate meetings, launches and private celebrations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-gray-600 mb-6"
          >
            {siteConfig.venue.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-gray-600"
          >
            With over {siteConfig.venue.squareFeet.toLocaleString()} square feet
            across {siteConfig.venue.spaces} versatile spaces, The Mezzanine
            accommodates a wide range of premier events, from high-impact
            corporate conferences and product launches to private celebrations,
            milestone dinners, and cocktail receptions for up to{" "}
            {siteConfig.venue.capacity.max} guests.
          </motion.p>
        </div>

        {/* Event Types Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteConfig.eventTypes.map((eventType) => (
            <motion.div
              key={eventType.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={eventType.image}
                  alt={eventType.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-heading">
                <h3 className="text-lg font-bold tracking-wide mb-2">
                  {eventType.title}
                </h3>
                <p className="text-sm text-gray-200">{eventType.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
