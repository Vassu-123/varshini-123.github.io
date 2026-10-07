import React from 'react';
import { Award, Clock, CheckCircle2, TrendingUp, Sparkles, BookCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CertificationsAchievements: React.FC = () => {
  const { academicAchievements, certifications } = portfolioData;

  return (
    <section className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic Achievements */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                06. Honors & Merits
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Academic Achievements
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Proven academic distinction sustained continuously across all levels of study.
              </p>
            </div>

            <div className="space-y-4">
              {academicAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500 shrink-0" />
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {item.organization} · {item.period}
                    </p>
                  </div>

                  {/* Clean unboxed score metric */}
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums block">
                      {item.metric}
                    </span>
                    <span className="text-xs text-slate-400">Score Achieved</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: In-Progress Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                07. Continuous Learning
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Certifications
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Active pursuit of industry-recognized credentials to expand practical capabilities.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <BookCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h3>
                    </div>
                    
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Curriculum focus: </span>
                    {cert.focus}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    "{cert.note}"
                  </p>
                </div>
              ))}

              {/* Note card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  Commitment to Transparency:
                </span>
                No unverified or fictitious certifications are listed. Verified course credentials and certificate IDs will be updated as completed.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
