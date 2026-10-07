import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, CheckCircle2, Code2, GraduationCap, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status callout */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.statusBadge}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {personal.role}
              </p>
            </div>

            {/* Introduction prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personal.profileSummary}
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 pb-2 max-w-lg border-y border-slate-200 dark:border-slate-800/70">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">9.2</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B.Tech CGPA</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">97.8%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Intermediate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">10.0</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">SSC GPA</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-xs transition-all hover:gap-3 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center gap-4 pt-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer Code & Profile Specification Card (No Photo) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 rounded-2xl blur-xs opacity-70 dark:opacity-50" />
              
              <div className="relative bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-2xl border border-slate-800 space-y-4 font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>developer.json</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">● ready</span>
                </div>

                {/* Code Body */}
                <div className="space-y-1.5 text-[11.5px] leading-relaxed text-slate-300">
                  <p><span className="text-blue-400">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-300">"{personal.name}"</span>,</p>
                  <p className="pl-4">role: <span className="text-amber-200">"Software & Full Stack Developer"</span>,</p>
                  <p className="pl-4">education: <span className="text-sky-300">"B.Tech CSE"</span>,</p>
                  <p className="pl-4">college: <span className="text-slate-300">"Ideal Institute of Technology"</span>,</p>
                  <p className="pl-4">cgpa: <span className="text-purple-300">9.2</span>,</p>
                  <p className="pl-4">languages: [<span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C"</span>, <span className="text-emerald-300">"SQL"</span>],</p>
                  <p className="pl-4">web: [<span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"CSS3"</span>, <span className="text-emerald-300">"JavaScript"</span>],</p>
                  <p className="pl-4">seeking: <span className="text-emerald-400">"Internship / Fresher Role"</span>,</p>
                  <p className="pl-4">location: <span className="text-slate-300">"East Godavari, AP"</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open for Opportunities</span>
                  </span>
                  <span className="text-slate-500">Ideal IT · 2023–2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
