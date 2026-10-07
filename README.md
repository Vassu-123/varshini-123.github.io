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
# 1. Initialize git and stage all files
git init
git add .
git commit -m "feat: complete personal portfolio website for Yerramneedi Varshini"

# 2. Set default branch to main
git branch -M main

# 3. Connect to your GitHub repository
git remote set-url origin https://github.com/Vassu-123/varshini-portfolio.github.io.git || git remote add origin https://github.com/Vassu-123/varshini-portfolio.github.io.git

# 4. Push your code
git push -u origin main
```

---

## 🌐 How to Publish on GitHub Pages

1. In your GitHub repository [https://github.com/Vassu-123/varshini-portfolio.github.io](https://github.com/Vassu-123/varshini-portfolio.github.io):
2. Go to **Settings** -> **Pages** (in the left sidebar).
3. Under **Build and deployment** -> **Source**:
   Select **GitHub Actions**.
4. The automated GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and publish your site directly to:
   👉 **`https://varshini-portfolio.github.io/`**

---

## 📬 Contact Information

- **Email**: [yvarshini694@gmail.com](mailto:yvarshini694@gmail.com)
- **Phone**: [+91-9652013624](tel:+919652013624)
- **Location**: East Godavari, Andhra Pradesh, India
