import { siteData } from '../data/content';
import { Code2, Link, Mail, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 px-6 sm:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-16 items-start">
        <div>
          <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50">
            Let's connect<span className="text-amber-700 dark:text-amber-500">.</span>
          </h2>
        </div>
        <div>
          <p className="text-[15px] leading-[1.8] text-stone-600 dark:text-stone-400 mb-6">
            I'm open to new opportunities, interesting problems, and good conversations about software.
            Feel free to reach out — I'll get back to you promptly.
          </p>

          {/* Contact cards */}
          <div className="space-y-2.5">
            <a
              href={`mailto:${siteData.email}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors">
                <Mail size={17} className="text-stone-500 dark:text-stone-400 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600">Email</p>
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">{siteData.email}</p>
              </div>
              <ArrowUpRight size={16} className="text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors shrink-0" />
            </a>

            <a
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors">
                <Code2 size={17} className="text-stone-500 dark:text-stone-400 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600">GitHub</p>
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">github.com/gnaneswartunga</p>
              </div>
              <ArrowUpRight size={16} className="text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors shrink-0" />
            </a>

            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors">
                <Link size={17} className="text-stone-500 dark:text-stone-400 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600">LinkedIn</p>
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">linkedin.com/in/gnaneswartunga</p>
              </div>
              <ArrowUpRight size={16} className="text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
