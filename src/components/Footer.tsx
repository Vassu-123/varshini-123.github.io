import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenDeployGuide: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide, onOpenResumeModal }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Brand & bio */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {personal.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {personal.role}. B.Tech Computer Science Engineering undergraduate at Ideal Institute of Technology.
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              East Godavari, Andhra Pradesh, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Profile</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Technical Skills</a>
              <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education (9.2 CGPA)</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Key Projects</a>
              <button onClick={onOpenResumeModal} className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                Resume Viewer
              </button>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Me</a>
            </div>
          </div>

          {/* Actions & Repos */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Developer Tools
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenDeployGuide}
                className="w-full inline-flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <Github className="w-3.5 h-3.5" />
                  <span>Git & Deploy Guide</span>
                </span>
                <span className="text-blue-500 font-bold">→</span>
              </button>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite, and Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
