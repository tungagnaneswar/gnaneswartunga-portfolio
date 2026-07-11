import { skills } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Cloud, Cpu, Star, Layers, Sparkles } from 'lucide-react';

const icons = [Star, Layers, Sparkles];

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
    <section id="skills" ref={ref} className="py-20 px-6 sm:px-8 max-w-[1400px] mx-auto">
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skills.map((group, idx) => {
          const Icon = icons[idx % icons.length];
          
          return (
            <motion.div
              key={group.category}
              variants={item}
              className="bento-card p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500">
                  <Icon size={18} />
                </div>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100">
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
