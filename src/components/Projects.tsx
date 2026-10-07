import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Eye, CheckCircle2 } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            05. Engineering Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            Key Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Real software and web applications independently designed, developed, and deployed end-to-end.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  
                  {/* Subtle category overlay */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Tech stack metadata (clean unboxed text with separators) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.technologies.map((tech, i) => (
                      <span key={tech} className="inline-flex items-center">
                        {i > 0 && <span className="text-slate-300 dark:text-slate-700 mr-2" aria-hidden="true">·</span>}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <ul className="space-y-2">
                      {project.points.slice(0, 3).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
