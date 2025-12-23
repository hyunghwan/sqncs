"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SurferLogo() {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Wave Splash Effect (Background) */}
      <motion.div
        className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 blur-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{
          scale: 1.5,
          opacity: 0.6,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
      />
      
      {/* Another layer for depth */}
      <motion.div
         className="absolute inset-0 bg-blue-500 rounded-full opacity-0 blur-2xl"
         initial={{ scale: 0.8, opacity: 0 }}
         whileHover={{
           scale: 1.8,
           opacity: 0.4,
           transition: { duration: 0.7, delay: 0.1 },
         }}
      />

      {/* Spinning Logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10, // Adjust speed (seconds per rotation)
          ease: "linear",
        }}
        className="relative z-10 w-48 h-48 md:w-64 md:h-64"
      >
        <Image
          src="/logo.png"
          alt="Surfer Logo"
          fill
          className="object-contain" // Preserves aspect ratio
          priority
        />
      </motion.div>
    </div>
  );
}
