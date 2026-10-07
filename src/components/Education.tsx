import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            03. Academic Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Consistently recognized for top-tier academic standing across school, intermediate, and university engineering education.
          </p>
        </div>

        {/* Education Timeline / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between relative group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
            >
              <div>
                {/* Header score & year */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.duration}</span>
                  </div>
                  
                  {/* Score without pill */}
                  <div className="text-right">
                    <span className="text-xs text-slate-400 dark:text-slate-500 block">{item.scoreType}</span>
                    <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5 mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.institution}</span>
                  </p>
                  {item.status && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      {item.status}
                    </p>
                  )}
                </div>

                {/* Coursework & Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Key Highlights:
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom metadata row */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/70 text-xs text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Verified Academic Record</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {item.scoreType === 'CGPA' ? 'Top Tier' : 'Distinction'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
