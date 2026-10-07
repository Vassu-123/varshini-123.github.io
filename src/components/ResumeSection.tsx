import React, { useState } from 'react';
import { Download, Printer, Copy, Check, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);
  const { personal, profileBulletPoints, education, coreCompetencies } = portfolioData;

  const generateResumeText = () => {
    return `YERRAMNEEDI VARSHINI
${personal.role}
Email: ${personal.email} | Phone: ${personal.phone}
Location: ${personal.location}

PROFILE SUMMARY
${profileBulletPoints.map(p => `• ${p}`).join('\n')}

EDUCATION
• B.Tech, Computer Science Engineering - Ideal Institute of Technology (2023 - 2027) | CGPA: 9.2 / 10.0
• Intermediate (MPC) - Pragati Junior College (2021 - 2023) | Percentage: 97.8%
• SSC - Sri Vivekananda English Medium School (2020 - 2021) | GPA: 10 / 10.0

TECHNICAL SKILLS
Languages: Java, Python, C, SQL
Web: HTML5, CSS3, JavaScript, Responsive Web Design
CS: Data Structures & Algorithms, OOP, Database Management, SDLC
Tools: Visual Studio Code, Git, GitHub
`;
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generateResumeText()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Yerramneedi_Varshini_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateResumeText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="resume" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            08. Official Curriculum Vitae
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            Resume & Document
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Verified ATS-compliant academic resume summarizing educational excellence, core proficiencies, and independent projects.
          </p>
        </div>

        {/* Interactive Resume Card Banner */}
        <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          
          {/* Top Bar of the resume card */}
          <div className="p-6 sm:p-8 bg-slate-50/80 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Yerramneedi_Varshini_Resume
                </h3>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Data</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Source: Official uploaded candidate resume · Updated October 2026
              </p>
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Full Page</span>
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Plaintext'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Embedded Preview */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Academic Credentials
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  9.2 CGPA (B.Tech CSE)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Ideal Institute of Technology (2023 - 2027)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Core Technologies
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Java, Python, SQL, Web Dev
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Hands-on programming & database design
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  End-to-End Projects
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  2 Deployed Applications
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Study Buddy & Student Portfolio Website
                </p>
              </div>

            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center pt-2">
              Click <strong className="text-slate-800 dark:text-slate-200">"View Full Page"</strong> or <strong className="text-slate-800 dark:text-slate-200">"Download Resume"</strong> to examine all course subjects, academic marks, and project specifications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
