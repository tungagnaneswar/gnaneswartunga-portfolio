import { siteData } from '../data/content';
import { Code2, Link, FileText, ArrowDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Magnetic Button Wrapper
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Magnetic strength
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

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
      className="relative min-h-[90vh] flex items-center px-6 sm:px-8 pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center w-full">
        {/* Left — text content */}
        <div className="order-2 md:order-1">
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/40 backdrop-blur-md"
          >
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-wide uppercase text-stone-500 dark:text-stone-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Cinematic Text Reveal */}
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="font-serif text-[3rem] sm:text-6xl md:text-[4rem] leading-[1.05] text-stone-900 dark:text-stone-50 mb-4 overflow-hidden flex flex-wrap"
          >
            {titleChars.map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block relative">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <motion.span variants={letter} className="text-amber-700 dark:text-amber-500">.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-6"
          >
            {siteData.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg mb-10"
          >
            {siteData.pitch}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="flex flex-wrap gap-4 items-center"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium hover:bg-amber-700 dark:hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-stone-900/10 dark:shadow-none"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </a>
            </Magnetic>
            
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors duration-300 bg-white/50 dark:bg-stone-900/50 backdrop-blur"
              >
                Get in Touch
              </a>
            </Magnetic>

            <div className="flex items-center gap-2 ml-2">
              <Magnetic>
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <Code2 size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <Link size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={siteData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <FileText size={18} />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <Magnetic>
            <div className="relative group p-4">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden ring-1 ring-stone-200 dark:ring-stone-800 transition-all duration-700 group-hover:ring-amber-500/50 shadow-2xl shadow-stone-900/5 dark:shadow-none">
                <img
                  src="/profile.jpeg"
                  alt={`Portrait of ${siteData.name}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] dark:hidden"
                />
                <img
                  src="/whiteshirt-profile.jpeg"
                  alt={`Portrait of ${siteData.name}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] hidden dark:block"
                />
              </div>
              {/* Decorative accent corner */}
              <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-amber-500/50 rounded-br-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-stone-300 dark:border-stone-700 rounded-tl-[2rem] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            </div>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-stone-400 dark:text-stone-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
