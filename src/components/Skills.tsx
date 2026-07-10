import { skills } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Cloud, Cpu } from 'lucide-react';

const icons = [Code, Server, Globe, Database, Cloud, Cpu];

export function Skills() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
          Skills
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 dark:text-stone-50">
          Technical toolkit<span className="text-amber-700 dark:text-amber-500">.</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {skills.map((group, idx) => {
          const Icon = icons[idx % icons.length];
          // Make the first and last items span 2 columns for a Bento look
          const isWide = idx === 0 || idx === 5;
          
          return (
            <motion.div
              key={group.category}
              variants={item}
              className={`bento-card p-6 flex flex-col gap-4 ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500">
                  <Icon size={16} />
                </div>
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700/50 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
