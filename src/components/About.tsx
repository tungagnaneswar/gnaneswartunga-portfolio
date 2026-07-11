import { about } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-16 px-6 sm:px-8 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-24 items-start">
        <div className="max-w-3xl">
          <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
            About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 dark:text-stone-50 mb-12">
            A bit about me<span className="text-amber-700 dark:text-amber-500">.</span>
          </h2>

          <div
            className={`relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700 ring-4 ring-[#fafaf9] dark:ring-[#0a0a0a]" />
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">Background</h3>
              <p className="text-[16px] md:text-lg leading-[1.8] text-stone-700 dark:text-stone-300">
                {about.paragraphs[1]}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700 ring-4 ring-[#fafaf9] dark:ring-[#0a0a0a]" />
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">Current Role</h3>
              <p className="text-[16px] md:text-lg leading-[1.8] text-stone-700 dark:text-stone-300">
                {about.paragraphs[0]}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-amber-500 ring-4 ring-[#fafaf9] dark:ring-[#0a0a0a]" />
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">Focus Areas</h3>
              <p className="text-[16px] md:text-lg leading-[1.8] text-stone-700 dark:text-stone-300">
                {about.paragraphs[2]}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Sidebar */}
        <div 
          className={`lg:sticky lg:top-32 pt-2 lg:pt-24 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[11px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-6">Milestones</p>
          <div className="space-y-6">
            {[
              { year: '2020–2024', event: 'B.Tech Information Technology' },
              { year: '2024–2025', event: 'Java Full Stack Training @ KodNest' },
              { year: '2025–Present', event: 'Full Stack Engineer @ eArbor' },
              { year: 'Present', event: 'Building Gnanadhan', isHighlight: true }
            ].map((milestone, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-widest text-stone-400 dark:text-stone-500">
                  {milestone.year}
                </span>
                <span className={`text-[16px] ${milestone.isHighlight ? 'text-amber-700 dark:text-amber-500 font-medium' : 'text-stone-700 dark:text-stone-300'}`}>
                  {milestone.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
