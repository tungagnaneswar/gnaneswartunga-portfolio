import { projects } from '../data/content';
import type { Project } from '../data/content';
import { Code2, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

/* ─── Case Study — amber-bordered aside ────────────────────────────────── */
function CaseStudyBlock({ caseStudy }: { caseStudy: NonNullable<Project['caseStudy']> }) {
  return (
    <div className="mt-5 pl-4 border-l-2 border-amber-500/30 dark:border-amber-500/20 space-y-3">
      <div>
        <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-500 dark:text-stone-500 mb-1.5">
          Why I built this
        </h4>
        <p className="text-[14.5px] text-stone-600 dark:text-stone-400 leading-[1.7]">
          {caseStudy.why}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-500 dark:text-stone-500 mb-1.5">
          Technical Challenge
        </h4>
        <p className="text-[14.5px] text-stone-600 dark:text-stone-400 leading-[1.7]">
          {caseStudy.challenge}
        </p>
      </div>
      <div>
        <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-500 dark:text-stone-500 mb-1.5">
          Key Learnings
        </h4>
        <p className="text-[14.5px] text-stone-600 dark:text-stone-400 leading-[1.7]">
          {caseStudy.learned}
        </p>
      </div>
    </div>
  );
}

/* ─── Project Links ────────────────────────────────────────────────────── */
function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

  return (
    <div className="flex items-center gap-5 mt-5 pt-4 border-t border-stone-100 dark:border-stone-800/60">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source on GitHub`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          <Code2 size={14} />
          Source
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      )}
    </div>
  );
}

/* ─── Featured Project — full-width hero treatment ─────────────────────── */
function FeaturedProject({ project }: { project: Project }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <motion.article
      ref={ref}
      className={`card-hover group relative py-6 px-8 sm:py-8 sm:px-10 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 mb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Project number watermark */}
      <span className="project-number absolute top-6 right-8 sm:right-10 font-serif text-[5rem] sm:text-[7rem] leading-none font-medium text-stone-100 dark:text-stone-800/50 select-none pointer-events-none">
        {project.number}
      </span>

      <div className="relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.15em] uppercase text-stone-500 dark:text-stone-400 mb-4">
          <span>{project.badge === 'PROFESSIONAL' ? '💼' : '🔬'}</span>
          {project.badge}
        </span>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-stone-50 leading-snug mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base leading-[1.7] text-stone-600 dark:text-stone-400 max-w-3xl mb-5">
          {project.description}
        </p>

        {/* Features — always visible */}
        {project.features && (
          <div className="mb-5">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-3">
              {project.badge === 'PROFESSIONAL' ? 'Responsibilities & Contributions' : 'Key Features'}
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="text-[14.5px] sm:text-[15.5px] text-stone-600 dark:text-stone-400 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-amber-500/60 dark:text-amber-500/40 mt-[6px] text-[6px]">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Case Study — inline */}
        {project.caseStudy && <CaseStudyBlock caseStudy={project.caseStudy} />}

        {/* Tags — pill chips */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ─── Project Card — grid item ─────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <motion.article
      ref={ref}
      className={`card-hover group relative flex flex-col p-7 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project number watermark */}
      <span className="project-number absolute top-5 right-6 font-serif text-[4rem] sm:text-[5rem] leading-none font-medium text-stone-100 dark:text-stone-800/50 select-none pointer-events-none">
        {project.number}
      </span>

      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 self-start text-[9px] font-bold tracking-[0.15em] uppercase text-stone-500 dark:text-stone-400 mb-3">
          <span>{project.badge === 'PROFESSIONAL' ? '💼' : '🔬'}</span>
          {project.badge}
        </span>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900 dark:text-stone-50 leading-snug mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
          {project.title}
        </h3>

        {/* Special label for Milk Manager */}
        {project.title === 'Milk Manager' && (
          <p className="text-[11px] font-medium tracking-wide text-amber-600/90 dark:text-amber-500/80 mb-3">
            Built for a real family business.
          </p>
        )}

        {/* Description */}
        <p className="text-[15.5px] leading-[1.7] text-stone-600 dark:text-stone-400 mb-5">
          {project.description}
        </p>

        {/* Features — always visible */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-2">
              {project.badge === 'PROFESSIONAL' ? 'Contributions' : 'Key Features'}
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="text-[14px] sm:text-[14.5px] text-stone-600 dark:text-stone-400 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-amber-500/60 dark:text-amber-500/40 mt-[5px] text-[5px]">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Case Study — inline */}
        {project.caseStudy && <CaseStudyBlock caseStudy={project.caseStudy} />}

        {/* Tags — pill chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ─── Main Section ─────────────────────────────────────────────────────── */
export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const featuredProject = projects.find(p => p.featured);
  const remainingProjects = projects.filter(p => p !== featuredProject);

  return (
    <section id="projects" className="py-12 px-6 sm:px-8 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div
        ref={ref}
        className={`mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="section-label text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-3">
          Projects
        </p>
        <h2 className="font-serif section-heading text-stone-900 dark:text-stone-50">
          Selected work<span className="text-amber-700 dark:text-amber-500">.</span>
        </h2>
      </div>

      {/* Featured — full-width */}
      {featuredProject && <FeaturedProject project={featuredProject} />}

      {/* Remaining — 2-col grid on desktop, 1-col on mobile */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {remainingProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

    </section>
  );
}
