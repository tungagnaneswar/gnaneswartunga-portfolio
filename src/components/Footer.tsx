

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800/60 py-8 px-6 sm:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-stone-600 dark:text-stone-300">
          Designed & Built by Gnaneswar Tunga.
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
          Crafted with React, TypeScript and lots of coffee ☕
        </p>
      </div>
    </footer>
  );
}
