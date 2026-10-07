import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, CheckCircle2, Code2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
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

          {/* Right Column: Visual Portrait & Developer Snapshot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 rounded-2xl blur-xs opacity-70 dark:opacity-50" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {!imageError ? (
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : null}

                  {/* Fallback container if image fails */}
                  {imageError && (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 text-center">
                      <Code2 className="w-12 h-12 text-blue-400 mb-3" />
                      <p className="font-bold text-lg">{personal.name}</p>
                      <p className="text-xs text-blue-200 mt-1">Computer Science Engineering</p>
                    </div>
                  )}

                  {/* Overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md rounded-lg p-2.5 text-xs text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium truncate">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">Ideal Institute of Technology</span>
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0 ml-1">
                      2023–2027
                    </span>
                  </div>
                </div>

                {/* Developer Fact sheet */}
                <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>Location</span>
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">{personal.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Languages</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">
                      {personal.languages.join(' & ')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Core Focus</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      Java · Python · SQL · Web Dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
