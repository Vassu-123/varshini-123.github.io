import studyBuddyImg from '../assets/images/project_study_buddy_1791394056586.jpg';
import portfolioShowcaseImg from '../assets/images/project_portfolio_showcase_1791394068846.jpg';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  description: string;
  points: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Web Application' | 'Developer Tools';
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  scoreType: 'CGPA' | 'Percentage' | 'GPA';
  score: string;
  highlights: string[];
  status?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
  }[];
}

export interface AchievementItem {
  title: string;
  metric: string;
  organization: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  focus: string;
  status: 'In Progress' | 'Completed';
  note: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  skillsAcquired: string[];
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Yerramneedi Varshini",
    role: "Aspiring Software Developer | Full Stack Developer",
    statusBadge: "Available for Software Developer & Full Stack Internships",
    location: "East Godavari, Andhra Pradesh, India",
    email: "yvarshini694@gmail.com",
    phone: "+91-9652013624",
    languages: ["Telugu", "English"],
    githubUrl: "https://github.com/Vassu-123",
    linkedinUrl: "https://linkedin.com/in/yerramneedi-varshini",
    profileSummary:
      "Motivated Computer Science Engineering undergraduate seeking a Software Developer / Full Stack Developer internship, leveraging strong foundations in object-oriented programming, web technologies, and database systems to deliver scalable, user-focused solutions within a fast-paced engineering team.",
    aboutMeBio: [
      "I am a Computer Science and Engineering undergraduate maintaining a 9.2/10 CGPA at Ideal Institute of Technology. My passion lies in building functional, user-centric web applications and solving logical problems using clean code and structured system design.",
      "With hands-on proficiency in Java, Python, SQL, and core web technologies (HTML5, CSS3, JavaScript), I have independently developed and deployed full-stack web applications end-to-end. I focus on responsive UI development, object-oriented design principles, and reliable database fundamentals.",
      "I have maintained a consistent record of academic excellence across all stages of my education (10/10 in SSC, 97.8% in Intermediate, and 9.2 CGPA in B.Tech). I am actively preparing for software developer and full-stack engineering internships to contribute meaningfully to fast-paced engineering teams."
    ],
  },

  profileBulletPoints: [
    "Maintaining a 9.2/10 CGPA as a Computer Science Engineering undergraduate, with hands-on proficiency in Java, Python, SQL, and modern web technologies (HTML5, CSS3, JavaScript).",
    "Independently designed, developed, and deployed two full-stack web applications, applying object-oriented design principles, responsive UI development, and database fundamentals end-to-end.",
    "Recognized for sustained academic excellence across all levels of education, including 97.8% in Intermediate and a perfect 10/10 GPA in SSC.",
    "Strong analytical and problem-solving ability, developed through consistent practice in data structures, algorithms, and database management systems.",
    "Proficient with Git and GitHub for version control, and Visual Studio Code as a primary development environment.",
    "Seeking a Software Developer / Full Stack Developer internship to deliver scalable, user-focused software solutions within a fast-paced engineering team."
  ],

  coreCompetencies: [
    "Object-Oriented Programming (OOP)",
    "Software Development Life Cycle (SDLC)",
    "Database Management",
    "Web Application Development",
    "Team Collaboration",
    "Effective Communication",
    "Analytical & Problem-Solving",
    "Adaptability",
    "Time Management"
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core languages used for problem solving, backend logic, and systems programming.",
      skills: [
        { name: "Java", level: "Core & OOP Foundations" },
        { name: "Python", level: "Scripting & Algorithms" },
        { name: "C", level: "Procedural & Memory Concepts" },
        { name: "SQL", level: "Relational Queries & Schemas" }
      ]
    },
    {
      category: "Web Technologies",
      description: "Frontend standards and client-side engineering for accessible user interfaces.",
      skills: [
        { name: "HTML5", level: "Semantic Markup & Accessibility" },
        { name: "CSS3", level: "Modern Layouts & Transitions" },
        { name: "JavaScript", level: "ES6+ DOM & Interactive Logic" },
        { name: "Responsive Web Design", level: "Mobile-First & Cross-Screen Consistency" }
      ]
    },
    {
      category: "Computer Science Fundamentals",
      description: "Algorithmic thinking and engineering methodologies.",
      skills: [
        { name: "Data Structures & Algorithms", level: "Arrays, Lists, Trees, Complexity Analysis" },
        { name: "Object-Oriented Programming (OOP)", level: "Inheritance, Encapsulation, Polymorphism" },
        { name: "Database Management", level: "Normalization, Relational Modeling" },
        { name: "Software Development Life Cycle (SDLC)", level: "Requirements, Design, Testing & Delivery" }
      ]
    },
    {
      category: "Developer Tools & Environment",
      description: "Modern developer workflow tools and version control systems.",
      skills: [
        { name: "Visual Studio Code", level: "Primary Development Environment" },
        { name: "Git", level: "Local Version Control & Branching" },
        { name: "GitHub", level: "Repository Hosting & Collaboration" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Technology, Computer Science Engineering",
      institution: "Ideal Institute of Technology",
      duration: "2023 - 2027 (Expected)",
      scoreType: "CGPA",
      score: "9.2 / 10.0",
      status: "Currently Pursuing (Pre-Final Year)",
      highlights: [
        "Maintaining an outstanding 9.2/10 CGPA across all completed semesters.",
        "Core coursework: Data Structures, Object-Oriented Programming, Database Management Systems, Computer Networks, and Web Technologies.",
        "Active technical project development and practical lab implementations."
      ]
    },
    {
      degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
      institution: "Pragati Junior College",
      duration: "2021 - 2023",
      scoreType: "Percentage",
      score: "97.8%",
      highlights: [
        "Achieved a top-tier score of 97.8% in Andhra Pradesh Board of Intermediate Education.",
        "Strong analytical foundation in higher mathematics, analytical physics, and chemistry."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Vivekananda English Medium School",
      duration: "2020 - 2021",
      scoreType: "GPA",
      score: "10 / 10.0",
      highlights: [
        "Secured a flawless 10.0/10.0 GPA in 10th standard board examinations.",
        "Recognized for top academic standing and consistent excellence."
      ]
    }
  ] as EducationItem[],

  projects: [
    {
      id: "study-buddy",
      title: "Study Buddy - Web-Based Study Resource Manager",
      tagline: "Productivity web application for students to organize, categorize, and retrieve academic materials.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Web Application",
      image: studyBuddyImg,
      description:
        "Engineered a responsive study-resource management web application from the ground up, enabling students to organize, categorize, and retrieve academic materials efficiently across multiple subjects and topics.",
      points: [
        "Engineered a responsive study-resource management web application from the ground up, enabling students to organize, categorize, and retrieve academic materials efficiently across multiple subjects and topics.",
        "Designed an intuitive, accessibility-focused user interface that streamlined navigation and simplified resource discovery for end users.",
        "Implemented structured content-categorization logic to support scalable organization of study materials across subjects and topics.",
        "Applied core HTML5, CSS3, and JavaScript concepts to deliver a fully functional, framework-independent productivity tool."
      ],
      githubUrl: "https://github.com/Vassu-123/study-buddy",
      liveUrl: "https://studybuddy-demo.local"
    },
    {
      id: "student-portfolio",
      title: "Student Portfolio Website",
      tagline: "Modern, responsive personal portfolio showcasing projects, technical competencies, and academic background.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Web Application",
      image: portfolioShowcaseImg,
      description:
        "Built and deployed a fully responsive personal portfolio website showcasing projects, technical skills, achievements, and contact information, ensuring consistent layout and readability across varying screen sizes.",
      points: [
        "Built and deployed a fully responsive personal portfolio website showcasing projects, technical skills, achievements, and contact information, ensuring consistent layout and readability across varying screen sizes.",
        "Developed interactive navigation and smooth-scroll functionality using JavaScript, improving overall user engagement and site usability.",
        "Applied modern UI/UX principles, including visual hierarchy, readability, and design consistency, to enhance the site's professional presentation.",
        "Integrated professional social and portfolio links while optimizing page load performance and accessibility."
      ],
      githubUrl: "https://github.com/Vassu-123/varshini-portfolio.github.io",
      liveUrl: "https://varshini-portfolio.github.io/"
    }
  ] as Project[],

  experience: [
    {
      role: "Aspiring Software Developer / Full Stack Intern",
      organization: "Candidate for Software Engineering Internships",
      duration: "Available Immediately / Summer 2026",
      location: "Open to Remote / On-Site",
      type: "Internship Candidate",
      description:
        "Undergraduate Computer Science Engineer actively preparing for software development and internship opportunities. Equipped with solid academic training, self-driven project experience, and collaborative team skills.",
      skillsAcquired: ["Object-Oriented Design", "Web Development", "Database Schema Design", "Git Version Control"],
      highlights: [
        "Ready to contribute to full-stack engineering, frontend UI workflows, or backend database integration.",
        "Hands-on experience developing modular web solutions independently and deploying them with clean code standards.",
        "Quick learner with sustained academic rigor (9.2 CGPA) and strong communication skills."
      ]
    },
    {
      role: "Academic & Full-Stack Web Development",
      organization: "Ideal Institute of Technology",
      duration: "2023 - Present",
      location: "East Godavari, Andhra Pradesh",
      type: "Academic & Project Engineering",
      description:
        "Designed and executed end-to-end coursework projects and independent web utilities conforming to modern standards.",
      skillsAcquired: ["Java", "Python", "SQL", "HTML5", "CSS3", "JavaScript", "VS Code"],
      highlights: [
        "Architected 'Study Buddy' resource manager implementing categorized client-side storage and responsive UI.",
        "Built custom responsive portfolio interfaces focusing on accessibility and fast page rendering.",
        "Practiced data structures and relational queries on SQL databases."
      ]
    }
  ] as ExperienceItem[],

  academicAchievements: [
    {
      title: "Consistently Top-Ranked Academic Performance",
      metric: "> 90% Sustained",
      organization: "Across All Educational Milestones",
      period: "2020 - Present",
      description:
        "Consistently ranked among top-performing students throughout her academic career, sustaining above 90% performance at every level: 10/10 GPA (SSC), 97.8% (Intermediate), and 9.2/10 CGPA (B.Tech, ongoing)."
    },
    {
      title: "Flawless SSC Board Standing",
      metric: "10.0 / 10.0 GPA",
      organization: "Sri Vivekananda English Medium School",
      period: "2020 - 2021",
      description:
        "Secured highest possible GPA of 10.0/10.0 in secondary school board examinations."
    },
    {
      title: "Intermediate Board Distinction",
      metric: "97.8%",
      organization: "Pragati Junior College",
      period: "2021 - 2023",
      description:
        "Achieved exceptional 97.8% aggregate in the MPC (Maths, Physics, Chemistry) stream."
    }
  ] as AchievementItem[],

  certifications: [
    {
      title: "Full Stack Web Development",
      focus: "End-to-End Web Engineering, Modern Frontend & Backend Systems",
      status: "In Progress",
      note: "Actively pursuing industry-relevant coursework to further strengthen technical credibility; details to be added upon completion."
    },
    {
      title: "Data Structures & Algorithms",
      focus: "Algorithmic Problem Solving, Time & Space Complexity, Core Data Structures",
      status: "In Progress",
      note: "Consistent practice in problem solving, algorithmic design, and competitive coding fundamentals."
    }
  ] as CertificationItem[]
};
