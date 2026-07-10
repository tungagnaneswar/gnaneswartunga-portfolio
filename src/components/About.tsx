import { about } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { Code2, BookOpen, MapPin, Award } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="about" ref={ref} className="py-20 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
          About
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 dark:text-stone-50">
          A bit about me<span className="text-amber-700 dark:text-amber-500">.</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4"
      >
        {/* Main Bio Card */}
        <motion.div variants={item} className="bento-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.8] text-stone-700 dark:text-stone-300">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Small Facts Cards */}
        <motion.div variants={item} className="bento-card p-6 flex flex-col justify-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
            <Code2 size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-500">Experience</p>
            <p className="text-lg font-serif text-stone-900 dark:text-stone-100 mt-1">1+ Year Full-Stack</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bento-card p-6 flex flex-col justify-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-500">Base</p>
            <p className="text-lg font-serif text-stone-900 dark:text-stone-100 mt-1">Hyderabad, India</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bento-card p-6 flex flex-col justify-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-500">Education</p>
            <p className="text-lg font-serif text-stone-900 dark:text-stone-100 mt-1">B.Tech, IT</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bento-card p-6 flex flex-col justify-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
            <Award size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-500">Certifications</p>
            <p className="text-lg font-serif text-stone-900 dark:text-stone-100 mt-1">Azure Data & Java FS</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
