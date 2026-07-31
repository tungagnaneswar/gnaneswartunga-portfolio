import { siteData } from "../data/content.ts"

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800/60 py-8 px-6 sm:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-md text-stone-600 dark:text-stone-300">
          Designed & Developed by <a href={siteData.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
            {siteData.name}
          </a>
        </p>
        <p className="hidden sm:block text-md text-stone-600 dark:text-stone-300">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
