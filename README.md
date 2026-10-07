# Yerramneedi Varshini - Personal Developer Portfolio

> **Aspiring Software Developer | Full Stack Developer**  
> Computer Science Engineering Undergraduate (9.2 CGPA) at Ideal Institute of Technology  
> Proficient in Java, Python, SQL, HTML5, CSS3, JavaScript, and Git.

This is a modern, responsive, and recruiter-ready personal developer portfolio built with React, Vite, TypeScript, and Tailwind CSS. All credentials, coursework marks, academic institutions, projects, and contact details match **Yerramneedi Varshini's** official resume.

---

## 🌟 Key Features

- **Accurate Resume Data**: 100% authentic academic scores (9.2 CGPA B.Tech, 97.8% Intermediate, 10/10 SSC), verified projects (*Study Buddy* and *Student Portfolio Website*), and core CS competencies.
- **Dedicated Resume Viewer & Download**:
  - Interactive ATS-friendly modal with full resume view.
  - Browser print trigger (`Print / Save as PDF`).
  - 1-click Download Resume (`.txt` formatted).
  - Copy plaintext resume to clipboard for job applications.
- **Centralized Data File**: All information is structured cleanly in `src/data/portfolioData.ts`. Easily update your details, add new certifications, or change links in one place.
- **Dark & Light Mode**: Accessible theme switcher with automatic preference detection and `localStorage` persistence.
- **Project Detail Modals**: Deep-dive modals explaining the architecture, key features, and technology stack of each project.
- **Responsive Layout**: Designed for mobile, tablet, laptop, and ultra-wide screens.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Open in your browser
# Navigate to http://localhost:3000
```

---

## ✏️ How to Edit Your Details

Open `src/data/portfolioData.ts`. In this file you can modify:
- `personal.email`, `personal.phone`, `personal.location`
- `personal.githubUrl` and `personal.linkedinUrl`
- `education` entries (CGPA, semester updates)
- `projects` (add new full-stack projects, live demo URLs, repository URLs)
- `certifications` (update status from "In Progress" to "Completed" with credential links)
- `skills` (add newly learned libraries, tools, or databases)

---

## 🐙 How to Push to Your GitHub Repository

Follow these terminal commands:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Commit your changes
git commit -m "feat: complete personal portfolio website for Yerramneedi Varshini"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub remote repository
git remote add origin https://github.com/Vassu-123/portfolio-website.git

# 6. Push your code
git push -u origin main
```

---

## 🌐 How to Publish & Deploy Online (Free Live URL)

### Option A: 1-Click Deployment via Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account (`Vassu-123`).
2. Click **"Add New Project"** and select `portfolio-website`.
3. Vercel automatically detects **Vite** as the framework preset.
4. Click **Deploy**. Within 60 seconds, you get an active live HTTPS URL (e.g. `https://portfolio-website-vassu-123.vercel.app`).

### Option B: Deploy on GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://Vassu-123.github.io/portfolio-website",
   ```
3. Add to the `"scripts"` section of `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📬 Contact Information

- **Email**: [yvarshini694@gmail.com](mailto:yvarshini694@gmail.com)
- **Phone**: [+91-9652013624](tel:+919652013624)
- **Location**: East Godavari, Andhra Pradesh, India
