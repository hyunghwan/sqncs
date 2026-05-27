"use client";

import InteractiveSurfers from "@/components/InteractiveSurfers";
import WaveCursor from "@/components/WaveCursor";
import { ExternalLink, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Diced OS",
    href: "https://dicedos.com/",
    description:
      "Bakery operations software for inventory, recipes, invoice intake, and food-cost control.",
  },
  {
    name: "Rental Ledger Sheets",
    href: "https://rentalledgersheets.com/",
    description:
      "Rental books in Google Sheets: keep your current bank or card, review mixed spending by property, and send a clean CPA export.",
  },
  {
    name: "Downmark",
    href: "https://downmark.sqncs.com/",
    github: "https://github.com/hyunghwan/downmark",
    description:
      "A tiny Markdown editor for opening one `.md` file, editing in Rich or Raw mode, and saving plain Markdown back.",
  },
  {
    name: "Glenmoor Story",
    href: "https://glenmoorstory.sqncs.com/",
    github: "https://github.com/hyunghwan/glenmoor-story",
    description:
      "A browser-first tactical RPG demo built around one handcrafted isometric battle and deterministic SRPG rules.",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-12 sm:py-16">
      <WaveCursor />
      <InteractiveSurfers />

      {/* Content Layer */}
      <div className="z-10 flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 text-center">
        {/* Bouncy Title */}
        <motion.h1 
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-chewy text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
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

        {/* Projects */}
        <motion.section
          className="grid w-full max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4"
          aria-label="Projects"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group flex min-h-48 flex-col rounded-[2rem] border-4 border-white/40 bg-white/20 p-5 text-left shadow-[0_12px_0_rgba(3,105,161,0.32),0_20px_36px_rgba(0,0,0,0.16)] backdrop-blur-md transition-colors hover:bg-white/30"
              whileHover={{ y: -8, rotate: index % 2 === 1 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 text-white drop-shadow-[2px_2px_0_rgba(3,105,161,0.9)]"
              >
                <h2 className="font-chewy text-3xl leading-tight">
                  {project.name}
                </h2>
                <ExternalLink className="mt-1 h-6 w-6 shrink-0 stroke-[3px] text-yellow-200 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <p className="mt-4 flex-1 font-fredoka text-base font-semibold leading-relaxed text-white drop-shadow-[1px_1px_0_rgba(3,105,161,0.85)] sm:text-lg">
                {project.description}
              </p>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border-b-4 border-slate-700 bg-slate-900/85 px-4 py-2 font-fredoka text-sm font-bold text-white shadow-[0_0_0_4px_rgba(255,255,255,0.18)] transition-all hover:bg-slate-800 hover:shadow-[0_0_0_7px_rgba(255,255,255,0.24)] active:translate-y-1 active:border-b-2"
                >
                  <Github className="h-4 w-4 stroke-[3px]" />
                  GitHub
                </a>
              ) : (
                <span className="mt-5 inline-flex w-fit rounded-full border-b-4 border-yellow-600 bg-yellow-300 px-4 py-2 font-fredoka text-sm font-bold text-sky-950 shadow-[0_0_0_4px_rgba(255,255,255,0.18)]">
                  Live product
                </span>
              )}
            </motion.article>
          ))}
        </motion.section>

        {/* Fun CTA Button - Patrick Pink */}
        <motion.a
          href="mailto:hello@sqncs.com"
          className="group relative flex items-center gap-4 rounded-full border-b-8 border-pink-600 bg-pink-400 px-10 py-5 font-chewy text-2xl tracking-wide text-white shadow-[0_0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:shadow-[0_0_0_16px_rgba(255,255,255,0.4)] active:scale-95 sm:px-12 sm:py-6 sm:text-3xl"
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
      <div className="z-10 mt-8 text-lg font-fredoka font-medium tracking-wider text-white/70">
        Est. 2022 • Pacific
      </div>
    </main>
  );
}
