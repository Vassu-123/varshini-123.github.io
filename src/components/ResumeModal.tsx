import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personal, profileBulletPoints, coreCompetencies, skillCategories, education, projects, academicAchievements, certifications } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateResumeText = () => {
    return `=======================================================
YERRAMNEEDI VARSHINI
${personal.role}
Email: ${personal.email} | Phone: ${personal.phone}
Location: ${personal.location}
Languages: ${personal.languages.join(', ')}
LinkedIn: ${personal.linkedinUrl} | GitHub: ${personal.githubUrl}
=======================================================

PROFILE SUMMARY
${profileBulletPoints.map(p => `• ${p}`).join('\n')}

CORE COMPETENCIES
${coreCompetencies.join(' · ')}

TECHNICAL SKILLS
• Programming Languages: Java, Python, C, SQL
• Web Technologies: HTML5, CSS3, JavaScript, Responsive Web Design
• Fundamentals: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management, SDLC
• Development Tools: Visual Studio Code, Git, GitHub

EDUCATION
• Bachelor of Technology, Computer Science Engineering
  Ideal Institute of Technology | 2023 - 2027 (Expected)
  CGPA: 9.2 / 10.0

• Intermediate (MPC)
  Pragati Junior College | 2021 - 2023
  Percentage: 97.8%

• Secondary School Certificate (SSC)
  Sri Vivekananda English Medium School | 2020 - 2021
  GPA: 10 / 10.0

KEY PROJECTS
• Study Buddy - Web-Based Study Resource Manager (HTML, CSS, JavaScript)
  - Engineered a responsive study-resource management web application from the ground up, enabling students to organize, categorize, and retrieve academic materials efficiently across multiple subjects and topics.
  - Designed an intuitive, accessibility-focused user interface that streamlined navigation and simplified resource discovery for end users.
  - Implemented structured content-categorization logic to support scalable organization of study materials across subjects and topics.
  - Applied core HTML5, CSS3, and JavaScript concepts to deliver a fully functional, framework-independent productivity tool.

• Student Portfolio Website (HTML, CSS, JavaScript)
  - Built and deployed a fully responsive personal portfolio website showcasing projects, technical skills, achievements, and contact information, ensuring consistent layout and readability across varying screen sizes.
  - Developed interactive navigation and smooth-scroll functionality using JavaScript, improving overall user engagement and site usability.
  - Applied modern UI/UX principles, including visual hierarchy, readability, and design consistency, to enhance the site's professional presentation.
  - Integrated professional social and portfolio links while optimizing page load performance and accessibility.

ACADEMIC ACHIEVEMENTS
• Consistently ranked among top-performing students throughout her academic career, sustaining above 90% performance at every level: 10/10 GPA (SSC), 97.8% (Intermediate), and 9.2/10 CGPA (B.Tech, ongoing).

CERTIFICATIONS (IN PROGRESS)
• Full Stack Web Development (Actively pursuing)
• Data Structures & Algorithms (Actively pursuing)
`;
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([generateResumeText()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Yerramneedi_Varshini_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateResumeText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Action Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-950/60 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Official Resume Viewer
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body (Styled identically to the uploaded resume document) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans print:p-0">
          
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                {personal.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {personal.role}
              </p>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${personal.email}`} className="hover:underline">{personal.email}</a>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`tel:${personal.phone}`} className="hover:underline">{personal.phone}</a>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personal.location}</span>
                </span>
                <span>·</span>
                <span>Languages: {personal.languages.join(', ')}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Profile Summary
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {profileBulletPoints.map((point, i) => (
                  <li key={i} className="list-disc ml-4">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Competencies & Technical Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p><span className="font-semibold text-slate-900 dark:text-white">Languages:</span> Java, Python, C, SQL</p>
                  <p><span className="font-semibold text-slate-900 dark:text-white">Web:</span> HTML5, CSS3, JavaScript, Responsive Web Design</p>
                  <p><span className="font-semibold text-slate-900 dark:text-white">CS Fundamentals:</span> Data Structures & Algorithms, OOP, Database Management, SDLC</p>
                  <p><span className="font-semibold text-slate-900 dark:text-white">Tools:</span> Visual Studio Code, Git, GitHub</p>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
                  Core Competencies
                </h2>
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {coreCompetencies.join(' · ')}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h2>

              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block">{edu.scoreType}: {edu.score}</span>
                    <span className="text-xs text-slate-500">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div className="space-y-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Key Projects
              </h2>

              {projects.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="list-disc ml-4">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Academic Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Academic Achievements
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {academicAchievements[0].description}
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                Certifications (In Progress)
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Actively pursuing industry-relevant certifications (e.g., Full Stack Web Development, Data Structures & Algorithms) to further strengthen technical credibility; details to be added upon completion.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
