import { siteData } from '../data/content';
import { Code2, Link, FileText, ArrowDown, ChevronRight, MapPin, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const titleChars = siteData.name.split('');

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center px-6 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 max-w-[1400px] mx-auto"
    >
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-20 items-center w-full">
        {/* Left — text content */}
        <div className="order-1 md:order-1">
          {/* Cinematic Text Reveal */}
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="hero-heading font-serif leading-[1.05] text-stone-900 dark:text-stone-50 mb-5 overflow-hidden flex flex-wrap"
          >
            {titleChars.map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block relative">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Profile image — mobile only, appears right after heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden flex justify-center mb-6"
          >
            <div className="relative group p-3">
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-[2rem] overflow-hidden ring-1 ring-stone-200 dark:ring-stone-800 shadow-xl shadow-stone-900/5 dark:shadow-none">
                <img
                  src="/profile.jpeg"
                  alt={`Portrait of ${siteData.nickname}`}
                  className="w-full h-full object-cover dark:hidden"
                />
                <img
                  src="/whiteshirt-profile.jpeg"
                  alt={`Portrait of ${siteData.nickname}`}
                  className="w-full h-full object-cover hidden dark:block"
                />
              </div>
              {/* Meta labels — mobile */}
              <div className="mt-4 flex flex-col items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-500 font-medium">
                  <MapPin size={10} className="text-stone-400 dark:text-stone-600" />
                  Hyderabad, India
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-500 font-medium">
                  <Target size={10} className="text-amber-600 dark:text-amber-500" />
                  Open to Bengaluru Opportunities
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-base md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl mb-8 md:mb-10"
          >
            {siteData.title}
          </motion.p>

          {/* Meta Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="flex flex-wrap gap-2.5 mb-8 md:mb-10 max-w-2xl"
          >
            {[
              "1+ Years Experience",
              "10+ Projects Built",
              "Building Gnanadhan"
            ].map((meta, i) => (
              <span key={i} className="px-3.5 py-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 backdrop-blur text-xs font-medium tracking-wide text-stone-600 dark:text-stone-400">
                {meta}
              </span>
            ))}
          </motion.div>

          {/* Current Focus */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mb-8 md:mb-10"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-4">Current Focus</p>
            <ul className="space-y-3">
              {['Java Internals', 'System Design', 'Distributed Systems'].map((focus, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[15px] text-stone-600 dark:text-stone-400">
                  <ChevronRight size={15} className="text-amber-600 dark:text-amber-500/70" />
                  {focus}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="flex flex-wrap gap-4 items-center"
          >
            <Magnetic strength={0.1}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium hover:bg-amber-700 dark:hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-stone-900/10 dark:shadow-none"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </a>
            </Magnetic>
            
            <Magnetic strength={0.1}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors duration-300 bg-white/50 dark:bg-stone-900/50 backdrop-blur"
              >
                Get in Touch
              </a>
            </Magnetic>

            <div className="flex items-center gap-2 ml-2">
              <Magnetic strength={0.1}>
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  data-cursor="tooltip"
                  data-cursor-text="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <Code2 size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  data-cursor="tooltip"
                  data-cursor-text="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <Link size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a
                  href={siteData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                  data-cursor="tooltip"
                  data-cursor-text="Resume"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <FileText size={18} />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right — profile photo (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex order-2 justify-center md:justify-end"
        >
          <Magnetic strength={0.05}>
            <div className="relative group p-4">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden ring-1 ring-stone-200 dark:ring-stone-800 transition-all duration-700 group-hover:ring-amber-500/50 shadow-2xl shadow-stone-900/5 dark:shadow-none">
                <img
                  src="/profile.jpeg"
                  alt={`Portrait of ${siteData.nickname}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] dark:hidden"
                />
                <img
                  src="/whiteshirt-profile.jpeg"
                  alt={`Portrait of ${siteData.nickname}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] hidden dark:block"
                />
              </div>
              {/* Decorative accent corners */}
              <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-amber-500/50 rounded-br-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-stone-300 dark:border-stone-700 rounded-tl-[2rem] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />

              {/* Meta labels — desktop, below image */}
              <div className="mt-5 flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-500 font-medium tracking-wide">
                  <MapPin size={11} className="text-stone-400 dark:text-stone-600" />
                  Hyderabad, India
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-500/80 font-medium tracking-wide">
                  <Target size={11} />
                  Open to Bengaluru Opportunities
                </span>
              </div>
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
