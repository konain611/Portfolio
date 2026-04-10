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
    tech: ["npm Package", "RAG", "React", "Next.js", "Agentic AI", "TypeScript"],
    type: "npm Package",
    url: "https://www.npmjs.com/package/autoverse-agent",
    features: ["Easy integration", "RAG-powered responses", "Task automation", "Customizable UI"],
  },

  {
    name: "Personal AI Employee",
    description: "An AI agent that acts as a personal assistant, capable of handling tasks like scheduling, email management, and information retrieval.",
    tech: ["AI Agent", "Reuseable Skills", "Qwen", "Obsidian"],
    type: "Hackathon",
    features: ["Task automation", "Calendar integration", "Email management"],
  },
  {
    name: "Physical AI & Humanoid Robotics Book",
    description: "Book project exploring the intersection of physical AI and humanoid robotics, built with Docasurus for interactive documentation and learning.",
    tech: ["CCR", "Docasaurus", "Speckit-plus", "Next.js", "AI", "TypeScript"],
    type: "Hackathon",
    url: "https://ai-native-book-writing.vercel.app/",
    features: ["Interactive documentation", "AI Native Development", "Spec-Driven Content",],
  },

  {
    name: "DG Magazine",
    description: "A digital magazine platform for publishing and sharing articles on various topics.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Cloudflare", "Nginx", "nssm"],
    url: "https://dgmagazine.net",
    type: "Web App",
    features: ["Article publishing", "User interaction", "Search functionality", "Subscriptions"],
  },
  {
    name: "Dynamic Resume Builder",
    description: "An interactive resume builder with real-time preview and multiple export formats. Features drag-and-drop sections and professional templates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://dynamic-resume-builder-six-liart.vercel.app/",
    type: "Hackathon",
    features: ["Real-time preview", "Multiple templates", "PDF export", "Drag-and-drop"],
  },
  {
    name: "DG Enterprise",
    description: "A comprehensive enterprise dashboard for managing business operations, analytics, and reporting.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Cloudflare", "Nginx", "nssm"],
    url: "https://dgenterprise.diginfo.net",
    type: "Web App",
    features: ["Profile Management", "DGShop", "Interaction management", "Single Sign-On"],
  },
  {
    name: "Diginfo",
    description: "The official corporate website for Diginfo, showcasing services, portfolio, and company information.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    url: "https://diginfo.net",
    type: "Web App",
    features: ["Company information", "Service showcase", "Contact form", "Blog"],
  },
  {
    name: "NS Engineering Works",
    description: "A corporate website for NS Engineering Works, featuring company profile, services, and contact information.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://nsengineeringworks.pk",
    type: "Web App",
    features: ["Company information", "Service showcase", "Contact form", "Blog"],
  },
  {
    name: "Learning Management System",
    description: "Multi-role LMS platform with Admin, Faculty, and Student portals. Features course management, attendance tracking, and grade management.",
    tech: ["PHP", "MySQL", "TypeScript", "Bootstrap"],
    type: "Web App",
    features: ["Multi-role access", "Course management", "Attendance tracking", "Grade system"],
  },
  {
    name: "Hekto E-commerce Platform",
    description: "A UI/UX hackathon project focused on creating a visually appealing and user-friendly e-commerce platform.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    url: "https://figma-to-nextjs-orpin.vercel.app/",
    type: "Hackathon",
    features: ["Product listing", "Responsive design"],
  },
  {
    name: "Password Strength Meter",
    description: "A web application for evaluating and improving password security.",
    tech: ["Python", "Streamlit"],
    url: "https://skanpasswordstrenghtmeter.streamlit.app/",
    type: "Tools",
    features: ["Password evaluation", "Security suggestions", "Real-time feedback"],
  },
  {
    name: "Unit Converter",
    description: "A web-based unit converter supporting various measurement categories with a user-friendly interface.",
    tech: ["Python", "Streamlit"],
    url: "https://skanunitconvertor.streamlit.app/",
    type: "Tools",
    features: ["Multiple unit categories", "Real-time conversion", "User-friendly interface"],
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
    description: "A CLI based currency converter supports conversion between 10 most commonly used currencies.",
    tech: ["TypeScript", "npm"],
    url: "https://www.npmjs.com/package/skan_currencyconvertor",
    type: "CLI",
    features: ["Multiple currency support", "Extremely fast conversion"],
  },
  {
    name: "ATM Simulation System",
    description: "A CLI-based ATM simulation system that allows users to perform banking operations such as withdrawals, deposits, and balance inquiries.",
    tech: ["TypeScript", "npm"],
    url: "https://www.npmjs.com/package/skan_simple_atm",
    type: "CLI",
    features: ["Banking operations", "User authentication", "Transaction history"],
  },
  {
    name: "Word Counter",
    description: "A CLI tool that counts the number of words in a given text input, providing insights into word frequency and readability.",
    tech: ["TypeScript", "npm"],
    url: "https://www.npmjs.com/package/skan_wordcounter",
    type: "CLI",
    features: ["Word counting", "Frequency analysis", "Readability metrics"],
  },
  {
    name: "To-Do List Manager",
    description: "A CLI-based to-do list manager that allows users to create, manage, and prioritize their tasks efficiently.",
    tech: ["TypeScript", "npm"],
    url: "https://www.npmjs.com/package/skan_todolist",
    type: "CLI",
    features: ["Task management", "Prioritization", "Due date tracking"],
  },
  {
    name: "Number Guessing Game",
    description: "A simple CLI game where users try to guess a randomly generated number within a certain range.",
    tech: ["TypeScript", "npm"],
    type: "CLI",
    url: "https://www.npmjs.com/package/skan_numberguessinggame",
    features: ["Random number generation", "User interaction", "Score tracking"],
  },{
    name: "Calculator",
    description: "A CLI-based calculator that supports basic arithmetic operations and provides a simple interface for calculations.",
    tech: ["TypeScript", "npm"],
    type: "CLI",
    features: ["Arithmetic operations",],
    url: "https://www.npmjs.com/package/skan_simplecalculator"
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
  // {
  //   degree: "Google AI Fundamentals",
  //   institution: "Coursera",
  //   period: "March 2026 - Present",
  //   status: "In Progress",
  //   details: [
  //     "AI & Generative AI Basics",
  //     "Prompt Engineering",
  //     "Prompt Chaining",
  //     "Using AI as a Work Assistant",
  //     "AI Tools (Gemini)",
  //     "Responsible AI & Bias Handling"
  //   ],
  // },
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
