import { experience } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 px-6 sm:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-16 items-start">
        <div>
          <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50">
            Where I've worked<span className="text-amber-700 dark:text-amber-500">.</span>
          </h2>
        </div>
        <div className="space-y-6">
          {experience.map(job => (
            <div key={job.company} className="relative p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-stone-500 dark:text-stone-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-50">{job.company}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                    {job.role}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-stone-400 dark:text-stone-600">{job.period}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                    <span className="text-xs font-medium text-stone-400 dark:text-stone-600">{job.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5 pl-14">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 flex gap-2.5">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-amber-600/60 dark:bg-amber-500/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
