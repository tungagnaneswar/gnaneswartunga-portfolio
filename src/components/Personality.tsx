import { useScrollReveal } from '../hooks/useScrollReveal';
import { Terminal, MapPin, Hammer, Crosshair, Coffee } from 'lucide-react';

export function Personality() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="personality" ref={ref} className="py-12 px-6 sm:px-8 max-w-[1400px] mx-auto border-t border-stone-200/50 dark:border-stone-800/50">
      <div
        className={`grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <div className="flex items-center gap-2 mb-6 text-stone-900 dark:text-stone-100">
            <Terminal size={18} className="text-amber-600 dark:text-amber-500" />
            <h3 className="font-serif text-2xl">Things I enjoy building</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Backend Systems",
              "Educational Products",
              "Developer Tools",
              "Distributed Systems"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[15px] text-stone-600 dark:text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-6">Currently</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-[15px] text-stone-600 dark:text-stone-400">
              <span className="shrink-0 mt-0.5 text-stone-400 dark:text-stone-500 text-lg leading-none">📍</span>
              <span>Hyderabad, India</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] text-stone-600 dark:text-stone-400">
              <span className="shrink-0 mt-0.5 text-stone-400 dark:text-stone-500 text-lg leading-none">🏗</span>
              <span>Building Gnanadhan</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] text-stone-600 dark:text-stone-400">
              <span className="shrink-0 mt-0.5 text-stone-400 dark:text-stone-500 text-lg leading-none">🎯</span>
              <span>Looking for opportunities in Bengaluru</span>
            </li>
            <li className="flex items-start gap-3 text-[15px] text-stone-600 dark:text-stone-400">
              <span className="shrink-0 mt-0.5 text-stone-400 dark:text-stone-500 text-lg leading-none">☕</span>
              <span>Learning System Design & Distributed Systems</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
