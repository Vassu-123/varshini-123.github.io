import React, { useState } from 'react';
import { Code2, Globe, Database, Terminal, CheckCircle2, Cpu } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skillCategories } = portfolioData;

  const categories = [
    { id: 'all', label: 'All Technical Skills' },
    { id: 'Programming Languages', label: 'Languages' },
    { id: 'Web Technologies', label: 'Web Tech' },
    { id: 'Computer Science Fundamentals', label: 'CS Fundamentals' },
    { id: 'Developer Tools & Environment', label: 'Developer Tools' }
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-sky-500" />;
      case 'Computer Science Fundamentals':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'Developer Tools & Environment':
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      default:
        return <Database className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              02. Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
              Skills & Proficiencies
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Actual technical proficiencies practiced through coursework, algorithmic problem solving, and end-to-end web projects.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Quiet unboxed text indicator without pills */}
                      <span className="text-xs text-slate-500 dark:text-slate-400 text-right shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footer summary */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span>{group.skills.length} skills listed</span>
                <span>Verified in academic resume</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
