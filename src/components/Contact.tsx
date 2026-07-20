import { siteData } from '../data/content';
import { Code2, Link, Mail, ArrowUpRight, FileText, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const contactLinks = [
    {
      href: siteData.resume,
      icon: FileText,
      label: 'Resume',
      value: `View & Download ${siteData.nickname.split(" ")[0]}'s Resume (PDF)`,
      isSpecial: true,
    },
    {
      href: `mailto:${siteData.email}`,
      icon: Mail,
      label: 'Email',
      value: siteData.email,
    },
    {
      href: `tel:${siteData.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      label: 'Phone',
      value: siteData.phone,
    },
    {
      href: siteData.github,
      icon: Code2,
      label: 'GitHub',
      value: 'github.com/gnaneswartunga',
    },
    {
      href: siteData.linkedin,
      icon: Link,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gnaneswartunga',
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 px-6 sm:px-8 max-w-[1400px] mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-16 items-start">
        <div>
          <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50 mb-10">
            Let's connect<span className="text-amber-700 dark:text-amber-500">.</span>
          </h2>
          
          <div className="hidden md:block">
            <p className="text-[11px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-4">Available For</p>
            <ul className="space-y-3">
              {[
                "Backend Engineer Roles",
                "Full Stack Engineer Roles",
                "Freelance Projects",
                "Open Source Collaboration"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <span className="text-[10px]">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-[1.8] text-stone-600 dark:text-stone-400 mb-6">
            I'm always happy to discuss backend engineering, interesting products and opportunities where I can continue growing as an engineer.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const isExternal = !link.href.startsWith('mailto:') && !link.href.startsWith('tel:');

              if (link.isSpecial) {
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 sm:col-span-2 group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 card-hover border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/20 hover:border-stone-300 dark:hover:border-stone-700"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700/50">
                      <Icon size={17} className="transition-colors text-amber-600/90 dark:text-amber-500/90 group-hover:text-amber-700 dark:group-hover:text-amber-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-500">{link.label}</p>
                      <p className="font-medium truncate text-[14.5px] text-stone-900 dark:text-stone-100">{link.value}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-stone-400 dark:text-stone-600 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors shrink-0" />
                  </a>
                );
              }

              return (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 transition-colors bg-stone-100 dark:bg-stone-800">
                    <Icon size={17} className="transition-colors text-stone-600 dark:text-stone-300 group-hover:text-amber-700 dark:group-hover:text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600">{link.label}</p>
                    <p className="font-medium truncate text-sm text-stone-800 dark:text-stone-200 select-text">{link.value}</p>
                  </div>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="p-2 -mr-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors shrink-0 flex items-center justify-center"
                    aria-label={`Open ${link.label}`}
                  >
                    <ArrowUpRight size={16} className="text-stone-400 dark:text-stone-600 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

