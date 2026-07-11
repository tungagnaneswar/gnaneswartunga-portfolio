import { useState } from 'react';
import { projects, currentlyBuilding } from '../data/content';
import type { Project } from '../data/content';
import { Code2, ExternalLink, ArrowUpRight, ChevronDown, ImageIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

function ScreenshotPlaceholders({ project }: { project: Project }) {
  if (!project.screenshots || project.screenshots.length === 0) return null;

  return (
    <div className="mt-5 pt-5 border-t border-stone-100 dark:border-stone-800/60">
      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-stone-400 dark:text-stone-600 mb-3">Screenshots · Coming Soon</p>
      <div className="grid grid-cols-3 gap-2">
        {project.screenshots.map((shot) => (
          <div
            key={shot.label}
            className="group/shot relative aspect-video rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-dashed border-stone-200 dark:border-stone-700/60 flex flex-col items-center justify-center gap-1.5 overflow-hidden"
            title={shot.placeholder}
          >
            <ImageIcon size={14} className="text-stone-300 dark:text-stone-600 group-hover/shot:text-amber-500 transition-colors" />
            <span className="text-[9px] font-medium text-stone-400 dark:text-stone-600 text-center leading-tight px-1">
              {shot.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CurrentlyBuildingCard() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="border border-stone-200 dark:border-stone-800 rounded-xl p-6 md:p-8 bg-white dark:bg-stone-900/40 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start relative overflow-hidden">
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-lg">🚧</span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500">
              Currently Building
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-50 mb-3">
            {currentlyBuilding.title}
          </h3>
          <p className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
            {currentlyBuilding.description}
          </p>
        </div>
        
        <div className="flex flex-row md:flex-col gap-8 md:gap-4 text-sm w-full md:w-auto border-t md:border-t-0 md:border-l border-stone-100 dark:border-stone-800/60 pt-5 md:pt-0 md:pl-8 relative z-10 shrink-0">
          <div>
            <span className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-1.5">Status</span>
            <span className="inline-flex items-center gap-1.5 text-stone-800 dark:text-stone-300 font-medium text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              {currentlyBuilding.status}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-1.5">Target</span>
            <span className="text-stone-800 dark:text-stone-300 font-medium text-[13px]">{currentlyBuilding.target}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = project.caseStudy || project.features;

  return (
    <motion.article
      ref={ref}
      data-cursor="hover"
      onClick={() => hasDetails && setIsExpanded(!isExpanded)}
      className={`card-hover ${hasDetails ? 'cursor-pointer' : ''} group relative flex flex-col gap-4 p-7 rounded-xl border bg-white dark:bg-stone-900/50 h-full min-h-[340px] ${
        project.featured
          ? 'border-l-2 border-l-stone-300 dark:border-l-stone-600 border-t-stone-200 dark:border-t-stone-800 border-r-stone-200 dark:border-r-stone-800 border-b-stone-200 dark:border-b-stone-800'
          : 'border-stone-200 dark:border-stone-800'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms`, transitionDuration: '700ms' }}
      layout
    >
      <motion.div layout="position" className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 dark:text-stone-50 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="flex items-center gap-1.5 self-start text-[9px] font-bold tracking-[0.15em] uppercase text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded border border-stone-200 dark:border-stone-700">
            <span>{project.badge === 'PROFESSIONAL' ? '🏢' : '🏠'}</span> {project.badge}
          </span>
        </div>
        {hasDetails && (
          <ChevronDown
            size={18}
            className={`text-stone-400 dark:text-stone-600 transition-transform duration-300 shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
          />
        )}
      </motion.div>

      <motion.p layout="position" className="text-[15px] sm:text-[16px] leading-relaxed text-stone-600 dark:text-stone-400 flex-1 mt-1">
        {project.description}
      </motion.p>

      {/* Screenshots placeholders */}
      {!isExpanded && <ScreenshotPlaceholders project={project} />}

      <motion.div layout="position" className="flex flex-wrap gap-1.5 mt-1">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 rounded text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {isExpanded && hasDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 space-y-6 border-t border-stone-100 dark:border-stone-800/60 mt-3">
              {project.features && (
                <div>
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-2.5">
                    {project.badge === 'PROFESSIONAL' ? 'Responsibilities & Contributions' : 'Key Features'}
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-stone-600 dark:text-stone-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-amber-500/70 dark:text-amber-500/50 mt-[3px] text-xs">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.caseStudy && (
                <div className="space-y-5 pt-2">
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-1.5">Why I built this</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{project.caseStudy.why}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-1.5">The Problem</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{project.caseStudy.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-1.5">Technical Challenge</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{project.caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-stone-900 dark:text-stone-100 mb-1.5">Key Learnings</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{project.caseStudy.learned}</p>
                  </div>
                </div>
              )}

              {/* Screenshots in expanded state too */}
              <ScreenshotPlaceholders project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout="position" className="flex items-center gap-4 pt-4 mt-auto border-t border-stone-100 dark:border-stone-800/60">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors z-10 relative"
          >
            <Code2 size={13} />
            Source
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors z-10 relative"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        {(project.github || project.demo) && (
          <a
            href={project.demo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto w-7 h-7 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-600 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 z-10 relative"
          >
            <ArrowUpRight size={14} />
          </a>
        )}
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-12 px-6 sm:px-8 max-w-[1400px] mx-auto">
      <CurrentlyBuildingCard />
      
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
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {projects.filter(project => project.isActive).map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
