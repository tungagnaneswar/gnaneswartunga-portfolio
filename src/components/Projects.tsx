import { projects } from '../data/content';
import type { Project } from '../data/content';
import { Code2, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`card-hover group relative flex flex-col gap-3 p-5 rounded-xl border bg-white dark:bg-stone-900/50 ${
        project.featured
          ? 'border-l-2 border-l-amber-600/50 dark:border-l-amber-500/40 border-t-stone-200 dark:border-t-stone-800 border-r-stone-200 dark:border-r-stone-800 border-b-stone-200 dark:border-b-stone-800'
          : 'border-stone-200 dark:border-stone-800'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms`, transitionDuration: '700ms' }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg text-stone-900 dark:text-stone-50 leading-snug">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 text-[9px] font-bold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-stone-100 dark:border-stone-800/60">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source on GitHub`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          <Code2 size={13} />
          Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="ml-auto w-7 h-7 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-600 group-hover:text-stone-700 dark:group-hover:text-stone-300 group-hover:bg-stone-100 dark:group-hover:bg-stone-800 transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-16 px-6 sm:px-8 max-w-6xl mx-auto">
      <div
        ref={ref}
        className={`mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
          Projects
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-50">
          Selected work<span className="text-amber-700 dark:text-amber-500">.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
