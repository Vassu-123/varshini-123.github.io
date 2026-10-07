/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CertificationsAchievements } from './components/CertificationsAchievements';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { GitHubDeploymentModal } from './components/GitHubDeploymentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
        {/* Navigation */}
        <Navbar
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Education />
          <Experience onOpenResumeModal={() => setResumeModalOpen(true)} />
          <Projects />
          <CertificationsAchievements />
          <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* Interactive Modals */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        <GitHubDeploymentModal
          isOpen={deployGuideOpen}
          onClose={() => setDeployGuideOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
