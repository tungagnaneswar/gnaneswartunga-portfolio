import { siteData } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800/60 py-8 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-stone-400 dark:text-stone-600">
          &copy; {year} {siteData.name}
        </p>
        <p className="text-xs text-stone-300 dark:text-stone-700 flex items-center gap-1.5">
          <span>Built with</span>
          <span className="font-medium text-stone-400 dark:text-stone-600">React</span>
          <span className="w-0.5 h-0.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          <span className="font-medium text-stone-400 dark:text-stone-600">TypeScript</span>
          <span className="w-0.5 h-0.5 rounded-full bg-stone-300 dark:bg-stone-700" />
          <span className="font-medium text-stone-400 dark:text-stone-600">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
