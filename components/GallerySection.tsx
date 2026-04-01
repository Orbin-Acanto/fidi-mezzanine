"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import siteConfig from "@/config/siteConfig";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedImage !== null)
      setSelectedImage((selectedImage + 1) % siteConfig.gallery.length);
  };

  const prevImage = () => {
    if (selectedImage !== null)
      setSelectedImage(
        (selectedImage - 1 + siteConfig.gallery.length) %
          siteConfig.gallery.length,
      );
  };

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  return (
    <AnimatedSection id="gallery" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="section-title font-heading uppercase tracking-wide">
          <span className="relative inline-block">
            <span className="relative z-10">Photo</span>
            {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" /> */}
          </span>{" "}
          Gallery
        </h2>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="columns-2 sm:columns-3 lg:columns-4 gap-1.5 sm:gap-2 px-1.5 sm:px-2"
      >
        {siteConfig.gallery.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className="relative group cursor-pointer overflow-hidden mb-1.5 sm:mb-2 break-inside-avoid"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={closeLightbox}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={siteConfig.gallery[selectedImage].src}
                alt={siteConfig.gallery[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
              {selectedImage + 1} / {siteConfig.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
