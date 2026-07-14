import { siteData } from "../data/content.ts"

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800/60 py-8 px-6 sm:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-md text-stone-600 dark:text-stone-300">
          Built with ❤️ by <a href={siteData.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
            {siteData.nickname}
          </a>
        </p>
        <p className="hidden sm:block text-md text-stone-600 dark:text-stone-300">
          © {new Date().getFullYear()} {siteData.nickname}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
