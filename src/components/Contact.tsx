import { siteData } from '../data/content';
import { Mail, ArrowUpRight, FileText, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const contactCards = [
    {
      title: 'Resume',
      value: `View & Download ${siteData.name.split(' ')[0]}'s Resume (PDF)`,
      href: siteData.resume,
      icon: FileText,
      actionText: 'Download PDF',
      isPrimary: true,
    },
    {
      title: 'Email',
      value: siteData.email,
      href: `mailto:${siteData.email}`,
      icon: Mail,
      actionText: 'Send Email',
    },
    {
      title: 'Phone',
      value: siteData.phone,
      href: `tel:${siteData.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      actionText: 'Call',
    },
    {
      title: 'GitHub',
      value: 'github.com/tungagnaneswar',
      href: siteData.github,
      icon: GithubIcon,
      actionText: 'View Profile',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/gnaneswartunga',
      href: siteData.linkedin,
      icon: LinkedinIcon,
      actionText: 'Connect',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-6 sm:px-8 max-w-[1400px] mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-3xl mb-12">
        <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
          Contact
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 dark:text-stone-50 mb-4">
          Let's connect<span className="text-amber-700 dark:text-amber-500">.</span>
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
          I'm currently open to Java Backend and Full Stack Engineering opportunities where I can contribute, learn, and grow with a strong engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactCards.map((card, i) => {
          const Icon = card.icon;
          const isExternal = !card.href.startsWith('mailto:') && !card.href.startsWith('tel:');

          return (
            <a
              key={i}
              href={card.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`group bento-card p-7 sm:p-8 flex flex-col justify-between card-hover transition-all duration-300 min-h-[170px] ${
                card.isPrimary ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 group-hover:scale-105 transition-transform shrink-0">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1">
                  {card.actionText}
                  <ArrowUpRight size={15} />
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-stone-400 dark:text-stone-500 mb-1">
                  {card.title}
                </h3>
                <p className="font-medium text-stone-900 dark:text-stone-100 text-base sm:text-lg truncate group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {card.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
