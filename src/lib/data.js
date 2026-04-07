export const personalInfo = {
  name: "Syed Konain Nasir",
  title: "Full-Stack Developer",
  email: "konain611@gmail.com",
  phone: "+92 3333368339",
  location: "Karachi, Pakistan",
  bio: "Full-Stack Developer specializing in Next.js, TypeScript, and modern web architectures. I build scalable production applications with clean, maintainable code. Passionate about creating seamless user experiences and robust backend systems.",
  detailedBio: "I'm a passionate Full-Stack Developer with over 3 years of experience building modern web applications. My journey in software development started with a curiosity about how things work on the internet, and it has evolved into a career where I get to solve complex problems and create impactful digital solutions.\n\nCurrently, I work as a Full-Stack Software Engineer at Diginfo, where I've had the opportunity to lead the development of enterprise-level applications including dashboards, e-commerce platforms, and AI-powered solutions. I take pride in writing clean, efficient code and building systems that are both scalable and maintainable.\n\nBeyond my professional work, I'm deeply interested in DevOps practices, AI agent development, and exploring how autonomous systems can enhance modern applications. I believe in continuous learning and regularly contribute to open-source projects while staying updated with the latest industry trends.",
  avatar: "/avatar.png",
  availability: "Available for opportunities",
  experienceYears: 3,
};

export const socialLinks = {
  github: "https://github.com/konain611",
  npm: "https://www.npmjs.com/~syedkonainnasir",
  linkedin: "https://www.linkedin.com/in/syedkonainnasir/",
  email: "mailto:konain611@gmail.com",
  x: "https://x.com/syedkonain_7",
  insta: "https://www.instagram.com/syedkonainnasir/",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "C"],
  frontend: ["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  database: ["PostgreSQL", "MySQL"],
  tools: ["Prisma ORM", "Postman", "Git", "Nginx", "NSSM", "npm", "Yarn"],
  cloudDevOps: ["Cloudflare CDN", "SSL (WACS)", "Linux", "CI/CD"],
  concepts: ["REST APIs", "Authentication Systems", "Payment Gateway Integration", "AI Agents", "Prompt Engineering", "RAG Systems"],
};

export const experience = [
  {
    title: "Full-Stack Software Engineer",
    company: "Diginfo (Remote)",
    period: "March 2025 - Present",
    description: "Leading development of enterprise-level web applications with modern technologies and best practices.",
    achievements: [
      "Developed and deployed a corporate website using Next.js with optimized performance",
      "Built a centralized enterprise dashboard serving multiple business units",
      "Created a scalable magazine platform with advanced engagement features (likes, comments, replies, views tracking)",
      "Implemented complete e-commerce flow including cart, checkout, and payment gateway integration",
      "Integrated Prisma ORM with PostgreSQL for efficient database management and type safety",
      "Configured Cloudflare CDN for enhanced performance, caching, and security",
      "Self-hosted applications using Nginx and NSSM for reliable deployment",
      "Generated and managed SSL certificates using WACS for secure communications",
    ],
    projects: [
      { name: "Diginfo", url: "https://diginfo.net" },
      { name: "DG Enterprise", url: "https://dgenterprise.diginfo.net" },
      { name: "DG Magazine", url: "https://dgmagazine.net" },
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "Nginx", "Cloudflare"],
  },
  {
    title: "Freelance / Part-Time Web Developer",
    company: "NS Engineering Works & N N Power Engineering",
    period: "Freelance",
    description: "Designed and maintained corporate websites with focus on performance and SEO.",
    achievements: [
      "Designed and maintained corporate websites using Next.js",
      "Managed deployments using Vercel with CI/CD pipelines",
      "Provided ongoing technical support and feature updates",
      "Optimized websites for search engines and performance",
    ],
    technologies: ["Next.js", "Vercel", "SEO"],
  },
  {
    title: "Frontend Developer Intern",
    company: "YoungDev Interns (Remote)",
    period: "Aug 2024 - Sep 2024",
    description: "Developed responsive UI components and collaborated on frontend architecture.",
    achievements: [
      "Developed responsive UI components using modern frontend practices and Tailwind CSS",
      "Improved design consistency and usability across the application",
      "Collaborated with designers to implement pixel-perfect interfaces",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  // {
  //   title: "Frontend Developer",
  //   company: "Upwork (Freelance)",
  //   period: "Dec 2023 - Sep 2024",
  //   description: "Developed responsive UI components and collaborated on frontend architecture.",
  //   achievements: [
  //     "Developed responsive UI components using modern frontend practices and Tailwind CSS",
  //     "Improved design consistency and usability across the application",
  //     "Collaborated with designers to implement pixel-perfect interfaces",
  //   ],
  //   technologies: ["React", "Tailwind CSS", "JavaScript"],
  // },
];

export const projects = [
  {
    name: "Autoverse (FYP)",
    description: "A plug-and-play RAG chatbot npm package for React/Next.js applications. Enables both conversational responses and task automation with easy integration.",
    tech: ["npm Package", "RAG", "React", "Next.js", "AI", "TypeScript"],
    type: "npm Package",
    features: ["Easy integration", "RAG-powered responses", "Task automation", "Customizable UI"],
  },
  {
    name: "Dynamic Resume Builder",
    description: "An interactive resume builder with real-time preview and multiple export formats. Features drag-and-drop sections and professional templates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://dynamic-resume-builder-six-liart.vercel.app/",
    type: "Web App",
    features: ["Real-time preview", "Multiple templates", "PDF export", "Drag-and-drop"],
  },
  {
    name: "Learning Management System",
    description: "Multi-role LMS platform with Admin, Faculty, and Student portals. Features course management, attendance tracking, and grade management.",
    tech: ["PHP", "MySQL", "TypeScript", "Bootstrap"],
    type: "Web App",
    features: ["Multi-role access", "Course management", "Attendance tracking", "Grade system"],
  },
  {
    name: "Data Entry Form Application",
    description: "Enterprise data collection system with validation, batch processing, and reporting capabilities for efficient data management.",
    tech: ["React.js", "Node.js", "MySQL", "Express"],
    type: "Web App",
    features: ["Form validation", "Batch processing", "Data export", "Reporting"],
  },
  {
    name: "Home Loan Web Application",
    description: "Loan application processing system with workflow automation, document management, and approval tracking for financial institutions.",
    tech: ["React.js", "Node.js", "MySQL", "Express"],
    type: "Web App",
    features: ["Workflow automation", "Document management", "Approval tracking", "Notifications"],
  },
  {
    name: "Currency Converter",
    description: "Real-time currency conversion tool with historical rates and multiple currency support.",
    tech: ["TypeScript", "Node.js", "API Integration"],
    type: "CLI",
    features: ["Real-time rates", "Multiple currencies", "Historical data"],
  },
  {
    name: "ATM Simulation System",
    description: "CLI-based ATM simulator with balance inquiry, withdrawal, deposit, and transaction history features.",
    tech: ["TypeScript", "Node.js"],
    type: "CLI",
    features: ["Balance management", "Transaction history", "PIN security"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Iqra University",
    period: "2021 - 2025",
    details: ["Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Engineering"],
  },
  {
    degree: "Governor Sindh Initiative (Gen AI, Web3, Metaverse)",
    institution: "GIAIC",
    period: "March 2024 - Present",
    status: "In Progress",
    details: ["TypeScript", "Next.js", "Python", "OpenAI Agents SDK", "Prompt Engineering", "Context Engineering", "AI-driven Development"],
  },
  {
    degree: "OpenClaw for Business Professionals",
    institution: "Panaversity",
    period: "April 2026 - Present",
    status: "In Progress",
    details: [
      "Agentic AI Fundamentals",
      "Building AI Employees (Agents)",
      "WhatsApp & Telegram AI Integration",
      "Workflow Automation with AI",
      "AI Tool & API Integration",
      "Multi-Agent Systems",
      "AI System Deployment Basics"
    ],
  },
  {
    degree: "Google AI Fundamentals",
    institution: "Coursera",
    period: "March 2026 - Present",
    status: "In Progress",
    details: [
      "AI & Generative AI Basics",
      "Prompt Engineering",
      "Prompt Chaining",
      "Using AI as a Work Assistant",
      "AI Tools (Gemini)",
      "Responsible AI & Bias Handling"
    ],
  },
  {
    degree: "DevOps Course",
    institution: "Zynex Solutions",
    period: "April 2026 - Present",
    status: "In Progress",
    details: ["CI/CD Pipelines", "Docker", "Kubernetes", "Linux Administration", "Cloud Infrastructure"],
  },
  {
    degree: "Tailwind CSS Workshop",
    institution: "YoungDev Interns",
    period: "2024",
    details: ["Utility-first CSS", "Responsive Design", "Component Patterns"],
  },
  {
    degree: "DG NSOS Secure OS Training Program (Linux)",
    institution: "DG Academy",
    period: "2023",
    details: ["Linux Security", "System Administration", "Network Configuration"],
  }
];

export const certifications = [
  {
    name: "Governor Sindh Initiative",
    issuer: "GIAIC",
    year: "2024",
    focus: "Gen AI, Web3, Metaverse",
  },
  {
    name: "Linux Security Training",
    issuer: "DG Academy",
    year: "2023",
    focus: "Secure OS, System Administration",
  },
];

export const interests = [
  { title: "DevOps", desc: "CI/CD, Infrastructure as Code, Automation" },
  { title: "AI Agents", desc: "Autonomous systems, RAG, LLM integration" },
  { title: "Web Architecture", desc: "Scalable, performant web applications" },
  { title: "Open Source", desc: "Contributing to developer tools" },
  { title: "System Design", desc: "Building robust distributed systems" },
  { title: "Developer Experience", desc: "Creating intuitive developer tools" },
];

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies",
    icon: "code",
  },
  {
    title: "Frontend Development",
    description: "Responsive, accessible, and performant user interfaces",
    icon: "layout",
  },
  {
    title: "Backend Development",
    description: "Scalable APIs and database architecture",
    icon: "server",
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, cloud deployment, and infrastructure",
    icon: "cloud",
  },
];
