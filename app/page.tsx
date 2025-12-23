"use client";

import InteractiveSurfers from "@/components/InteractiveSurfers";
import WaveCursor from "@/components/WaveCursor";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <WaveCursor />
      <InteractiveSurfers />

      {/* Content Layer */}
      <div className="z-10 flex flex-col items-center gap-8 text-center px-4">
        {/* Bouncy Title */}
        <motion.h1 
          className="text-8xl md:text-9xl lg:text-[10rem] font-chewy text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
          style={{ 
            textShadow: "6px 6px 0px #b45309", /* Darker orange/brown outline for contrast (Porous look) */
            WebkitTextStroke: "2px #b45309"
          }} 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          sqncs studio
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-2xl md:text-4xl font-fredoka font-bold text-white max-w-3xl leading-relaxed drop-shadow-lg"
          style={{ textShadow: "3px 3px 0px #0369a1" /* Ocean Blue darker shadow */ }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          A software studio situated around the Pacific Ocean.
        </motion.p>

        {/* Fun CTA Button - Patrick Pink */}
        <motion.a
          href="mailto:hello@sqncs.com"
          className="mt-10 group relative px-12 py-6 rounded-full bg-pink-400 text-white font-chewy text-3xl tracking-wide shadow-[0_0_0_8px_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_16px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-4 active:scale-95 border-b-8 border-pink-600"
          whileHover={{ scale: 1.1, rotate: -3 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Get in touch</span>
          <Mail className="w-8 h-8 stroke-[3px]" />
        </motion.a>
      </div>
          
      {/* Footer */}
      <div className="absolute bottom-8 text-lg font-fredoka font-medium text-white/70 tracking-wider">
        Est. 2022 • Pacific
      </div>
    </main>
  );
}
