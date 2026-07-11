import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { siteData } from '../data/content';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from './Magnetic';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-stone-200/60 dark:border-stone-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between" aria-label="Primary navigation">
        {/* Wordmark */}
        <Magnetic strength={0.1}>
          <a
            href="#hero"
            className="font-serif text-2xl text-stone-900 dark:text-stone-50 tracking-tight hover:opacity-70 transition-opacity"
            data-cursor="navbar"
          >
            {siteData.nickname}
            <span className="text-amber-700 dark:text-amber-500">.</span>
          </a>
        </Magnetic>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.href}>
              <Magnetic strength={0.1}>
                <a
                  href={link.href}
                  data-cursor="navbar"
                  className="link-hover text-[13px] font-medium tracking-wide uppercase text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors duration-200 inline-block px-1 py-1"
                >
                  {link.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Magnetic strength={0.1}>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              data-cursor="button"
            >
              {menuOpen ? (
                <X size={16} className="text-stone-600 dark:text-stone-300" />
              ) : (
                <Menu size={16} className="text-stone-600 dark:text-stone-300" />
              )}
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-stone-50/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-stone-200/60 dark:border-stone-800/60 px-6 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-2.5 text-[15px] font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
