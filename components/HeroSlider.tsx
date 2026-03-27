"use client";

import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}
        <video
          src="/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading mb-6 uppercase tracking-wide"
          >
            Welcome to The FiDi Mezzanine
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl tracking-wider mb-4"
          >
            A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            FiDi&apos;s most stylish event venue, 6,300 sq ft of industrial-chic
            design
            <br />
            on 55 Broadway, crafted for unforgettable experiences.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center text-white">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/75" />
          </motion.div>
          <span className="text-xs mt-2 tracking-wider">SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}
