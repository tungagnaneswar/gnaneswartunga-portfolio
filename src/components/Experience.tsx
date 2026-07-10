import { experience, siteData } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 px-6 sm:px-8 max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
    >
      <div className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-16 items-start">
        <div className="md:sticky md:top-32 md:pr-8">
          <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 mb-6">
            Where I've worked<span className="text-amber-700 dark:text-amber-500">.</span>
          </h2>
          
          <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-8 hidden md:block">
            My professional background primarily involves full-stack development, with a strong focus on distributed backend systems and React-based user interfaces.
          </p>
          
          <a
            href={siteData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-stone-50 hover:text-amber-700 dark:hover:text-amber-500 transition-colors group"
          >
            <span className="border-b border-stone-300 dark:border-stone-700 group-hover:border-amber-500 transition-colors pb-0.5">
              View full resume
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 md:ml-4 mt-2 md:mt-0">
          {experience.map((job) => (
            <div key={job.company} className="relative pl-8 md:pl-10 pb-12 last:pb-0 group">
              {/* Track Dot Ring */}
              <div className="absolute -left-[11px] top-1.5 flex h-[21px] w-[21px] items-center justify-center rounded-full bg-white dark:bg-stone-950">
                <div className="h-[9px] w-[9px] rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-amber-500 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-300" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 dark:text-stone-50 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {job.company}
                </h3>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-stone-400 dark:text-stone-500 mt-1 sm:mt-0 uppercase">
                  {job.period}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">{job.role}</span>
                <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                <span className="text-sm text-stone-500 dark:text-stone-400">{job.location}</span>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 flex gap-3 items-start">
                    <span className="mt-[0.45rem] shrink-0 w-[4px] h-[4px] rounded-full bg-stone-300 dark:bg-stone-600 group-hover:bg-amber-500/50 transition-colors" />
                    <span>{bullet}</span>
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
