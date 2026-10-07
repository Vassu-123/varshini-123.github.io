import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ExperienceProps {
  onOpenResumeModal: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenResumeModal }) => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              04. Practical Engineering Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
              Experience & Internship Candidacy
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              B.Tech Computer Science student actively seeking Software Developer and Full Stack Developer internship opportunities.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mt-1 justify-end">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Deliverables & Highlights */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Responsibilities & Focus Areas:
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies / Skills Acquired */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Technologies & Skills Practiced:</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {item.skillsAcquired.map((tech, tIdx) => (
                    <span key={tIdx} className="inline-flex items-center">
                      {tIdx > 0 && <span className="text-slate-300 dark:text-slate-700 mr-3" aria-hidden="true">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Callout Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-200/60 dark:border-blue-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Seeking Summer / Pre-Placement Internship Opportunities</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Passionate about joining software engineering teams to solve real-world problems with scalable code, responsive UI, and database systems.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shrink-0"
          >
            Contact for Opportunities
          </a>
        </div>

      </div>
    </section>
  );
};
