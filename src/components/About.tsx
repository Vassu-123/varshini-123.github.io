import React from 'react';
import { CheckCircle2, Target, Award, Sparkles, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, profileBulletPoints, coreCompetencies } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            01. Background & Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            About Me
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Computer Science Engineering student with a strong academic foundation, hands-on full-stack development experience, and a structured approach to software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative & Profile Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Professional Summary</span>
              </h3>
              
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {personal.aboutMeBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Resume Key Highlights list */}
            <div className="bg-slate-50 dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Key Qualifications & Highlights</span>
              </h4>
              <ul className="space-y-3">
                {profileBulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Career Interests, Core Competencies & Strengths */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Competencies Box */}
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Core Competencies</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Verified skill competencies recognized in academic projects and coursework
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreCompetencies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career & Learning Interests */}
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Career & Learning Interests</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                    Full-Stack Web Development
                  </span>
                  Building responsive, accessible interfaces powered by structured backend logic and relational databases.
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                    Data Structures & Problem Solving
                  </span>
                  Strengthening algorithmic problem-solving in Java and Python for optimized computational complexity.
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                    Database Architecture & Systems
                  </span>
                  Designing normalized SQL schemas and writing efficient queries for reliable data persistence.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
