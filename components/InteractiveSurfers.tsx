"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const SURFER_EMOJIS = ["🧽", "⭐️", "🦀", "🐙", "🍍", "🫧", "🐌", "🏄", "🏄‍♀️", "🏄‍♂️"];

const getRandomPos = () => Math.random() * 100;
const getRandomDelay = () => Math.random() * 5;
const getRandomDuration = () => 10 + Math.random() * 20;

export default function InteractiveSurfers() {
  const [surfers, setSurfers] = useState<Array<{ id: number; emoji: string; x: number; y: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate initial surfers
    const newSurfers = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      emoji: SURFER_EMOJIS[Math.floor(Math.random() * SURFER_EMOJIS.length)],
      x: getRandomPos(),
      y: getRandomPos(),
      duration: getRandomDuration(),
      delay: getRandomDelay(),
    }));
    setSurfers(newSurfers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {surfers.map((surfer) => (
        <Surfer key={surfer.id} {...surfer} />
      ))}
    </div>
  );
}

function Surfer({ emoji, x, y, duration, delay }: { emoji: string; x: number; y: number; duration: number; delay: number }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [
        `${x}vw`,
        `${Math.random() * 100}vw`,
        `${Math.random() * 100}vw`,
        `${x}vw`,
      ],
      y: [
        `${y}vh`,
        `${Math.random() * 100}vh`,
        `${Math.random() * 100}vh`,
        `${y}vh`,
      ],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      },
    });
  }, [controls, duration, delay, x, y]);

  return (
    <motion.div
      animate={controls}
      className="absolute text-6xl md:text-8xl select-none pointer-events-auto cursor-pointer hover:scale-125 transition-transform"
      whileHover={{ scale: 1.5, rotate: 360, transition: { duration: 0.5 } }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      style={{
        textShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      {emoji}
    </motion.div>
  );
}
