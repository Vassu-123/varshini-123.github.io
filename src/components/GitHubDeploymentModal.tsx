import React, { useState } from 'react';
import { X, Github, Copy, Check, Terminal, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface GitHubDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeploymentModal: React.FC<GitHubDeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(id);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch {
      // fallback
    }
  };

  const gitSteps = `# Step 1: Initialize Git and stage files
git init
git add .
git commit -m "feat: complete modern personal developer portfolio for Yerramneedi Varshini"

# Step 2: Connect to your GitHub repository Vassu-123/portfolio-website
git branch -M main
git remote add origin https://github.com/Vassu-123/portfolio-website.git

# Step 3: Push code to GitHub
git push -u origin main`;

  const vercelSteps = `# Quick 1-Command Live Deployment using Vercel CLI:
npm install -g vercel
vercel

# Or via GitHub Connect on vercel.com:
# 1. Go to https://vercel.com
# 2. Click "Add New Project" -> Import your "portfolio-website" repo
# 3. Framework Preset: Vite
# 4. Click "Deploy" -> You will get your instant live HTTPS URL!`;

  const githubPagesSteps = `# To deploy for free on GitHub Pages:
# 1. In package.json, add: "homepage": "https://Vassu-123.github.io/portfolio-website"
# 2. Run: npm install gh-pages --save-dev
# 3. Add to scripts: "deploy": "gh-pages -d dist"
# 4. Build and deploy:
npm run build
npm run deploy`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                How to Push to GitHub & Publish Live Online
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step-by-step instructions for repository hosting and public deployment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable instructions */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          
          {/* Section 1: Git Push */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span>1. Push to your GitHub Repository</span>
              </h4>
              <button
                onClick={() => copyCode(gitSteps, 'git')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                {copiedStep === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStep === 'git' ? 'Copied Commands' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              {gitSteps}
            </pre>
          </div>

          {/* Section 2: Free Cloud Deployment Options */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>2. Recommended 1-Click Deployment (Vercel / Netlify)</span>
              </h4>
              <button
                onClick={() => copyCode(vercelSteps, 'vercel')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                {copiedStep === 'vercel' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStep === 'vercel' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              {vercelSteps}
            </pre>
          </div>

          {/* Section 3: GitHub Pages */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>3. Alternative: GitHub Pages Deployment</span>
              </h4>
              <button
                onClick={() => copyCode(githubPagesSteps, 'ghpages')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                {copiedStep === 'ghpages' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStep === 'ghpages' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              {githubPagesSteps}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-800 dark:text-blue-300">
            <strong>Tip for Customization:</strong> All your personal info, projects, and contact channels are stored in <code>src/data/portfolioData.ts</code>. Simply update that single file anytime you gain new certifications or projects!
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
};
