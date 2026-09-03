export const FILE_TREE = [
  {
    id: "portfolio",
    name: "portfolio",
    type: "folder",
    children: [
      {
        id: "public",
        name: "public",
        type: "folder",
      },
      {
        id: "src",
        name: "src",
        type: "folder",
        children: [
          {
            id: "app",
            name: "app",
            type: "folder",
            children: [
              {
                id: "page",
                name: "page.tsx",
                type: "file",
                language: "typescriptreact",
              },
            ],
          },
          {
            id: "components",
            name: "components",
            type: "folder",
            children: [
              {
                id: "about",
                name: "about.tsx",
                type: "file",
                language: "typescriptreact",
              },
              {
                id: "education",
                name: "education.tsx",
                type: "file",
                language: "typescriptreact",
              },
              {
                id: "skills",
                name: "skills.tsx",
                type: "file",
                language: "typescriptreact",
              },
              {
                id: "experience",
                name: "experience.tsx",
                type: "file",
                language: "typescriptreact",
              },
              {
                id: "projects",
                name: "projects.tsx",
                type: "file",
                language: "typescriptreact",
              },
              {
                id: "contact",
                name: "contact.tsx",
                type: "file",
                language: "typescriptreact",
              },
            ],
          },
        ],
      },
      {
        id: "package",
        name: "package.json",
        type: "file",
        language: "json",
      },
      
      {
        id: "readme",
        name: "README.md",
        type: "file",
        language: "markdown",
      },
    ],
  },
];

export const FILE_CONTENTS = {
  readme: `# Syed Konain Nasir — Portfolio

> Full-Stack Developer • AI Engineer

Welcome to my portfolio, rebuilt as a VS Code workspace.

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## Explore

Open any \`.tsx\` file in the explorer to read about me:

- \`about.tsx\` — Who I am
- \`education.tsx\` — Degrees & certifications
- \`skills.tsx\` — Tech stack
- \`experience.tsx\` — Work history
- \`projects.tsx\` — Featured builds
- \`contact.tsx\` — Get in touch

Built with Next.js, React, and TypeScript.
`,

  package: `{
  "name": "syedkonainnasir-portfolio",
  "version": "1.0.0",
  "private": true,
  "author": "Syed Konain Nasir",
  "role": "Full-Stack Developer",
  "location": "Karachi, Pakistan",
  "email": "konain611@gmail.com",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "stack": [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma"
  ]
}`,

  page: `import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <main className="portfolio">
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}`,

  about: `import type { Developer } from "@/types";

const about: Developer = {
  name: "Syed Konain Nasir",
  role: "Full-Stack Developer",
  focus: ["Next.js", "TypeScript", "Node.js"],
  location: "Karachi, Pakistan",
  experience: "2+ Years",
  email: "konain611@gmail.com",
  company: "Digital Information Systems Pvt Ltd",
};

export default function About() {
  return (
    <section id="about">
      <h1>{about.name}</h1>
      <p>
        Full-Stack Developer specializing in Next.js, TypeScript, and Node.js,
        focused on building scalable, production-ready web applications.
      </p>
      <p>
        Currently at <em>{about.company}</em>, building enterprise dashboards,
        e-commerce platforms, and AI-powered solutions — end to end, from
        frontend to backend to deployment.
      </p>
      <ul>
        <li>📍 {about.location}</li>
        <li>💼 {about.experience}</li>
        <li>✉️ {about.email}</li>
      </ul>
    </section>
  );
}`,

  education: `interface EducationItem {
  institution: string;
  title: string;
  status: "completed" | "in progress";
  duration: string;
}

const education: EducationItem[] = [
  {
    institution: "Iqra University",
    title: "Bs Computer Science",
    status: "completed",
    duration: "Spring 2022 - Spring 2026",
  },
  {
    institution: "GIAIC",
    title: "Web 3.0 & Metaverse",
    status: "in progress",
    duration: "Feb 2024 - Sep 2026",
  },
  {
    institution: "Panaversity",
    title: "Agentic AI Architect Program",
    status: "in progress",
    duration: "Aug 2026 - Sep 2026",
  },
  {
    institution: "Panaversity",
    title: "OpenClaw For Business Professionals",
    status: "completed",
    duration: "May 2026",
  },
  {
    institution: "DGAcademy",
    title: "Secure Linux Training Program",
    status: "completed",
    duration: "Jan 2024",
  },
];

export default function Education() {
  return (
    <section id="education">
      <h2>Education & Certifications</h2>
      {education.map((item) => (
        <article key={item.title}>
          <h3>{item.title}</h3>
          <span>{item.institution}</span>
          <time>{item.duration}</time>
          <StatusBadge status={item.status} />
        </article>
      ))}
    </section>
  );
}`,

  skills: `interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "Next.js", level: 92, icon: "nextjs" },
  { name: "React", level: 94, icon: "react" },
  { name: "TypeScript", level: 88, icon: "typescript" },
  { name: "Python", level: 70, icon: "python" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "Node.js", level: 88, icon: "nodejs" },
  { name: "Prisma", level: 82, icon: "prisma" },
  { name: "PostgreSQL", level: 84, icon: "postgres" },
  { name: "Vercel", level: 65, icon: "vercel" },
  { name: "Git", level: 88, icon: "git" },
  { name: "Linux", level: 76, icon: "linux" },
  { name: "Nginx", level: 78, icon: "nginx" },
  { name: "Cloudflare", level: 82, icon: "cloudflare" },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}`,

  experience: `interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: string;
}

const experience: ExperienceItem[] = [
  {
    title: "Full-Stack Software Engineer",
    company: "Diginfo",
    duration: "March 2025 - Present",
    type: "Full-time",
  },
  {
    title: "Full-Stack Developer",
    company: "NS Engineering Works",
    duration: "Freelance",
    type: "Remote",
  },
  {
    title: "Front-End Developer",
    company: "YoungDev Interns",
    duration: "August 2024 - September 2024",
    type: "Internship",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((job) => (
        <article key={job.title}>
          <h3>{job.title}</h3>
          <span className="company">{job.company}</span>
          <time>{job.duration}</time>
          <Badge>{job.type}</Badge>
        </article>
      ))}
    </section>
  );
}`,

  projects: `interface Project {
  title: string;
  description: string;
  stack: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Autoverse",
    description:
      "AI-powered conversational shopping assistant with vector search and checkout flow.",
    stack: ["Javascript", "Python", "Cohere", "Next.js", "TypeScript"],
    href: "https://github.com/konain611/autoverse-npm",
  },
  {
    title: "DGMAGAZINE",
    description:
      "Cyber intelligence platform with news, dashboards, and backend APIs.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://dgmagazine.net",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Core Projects</h2>
      {projects.map((project) => (
        <a key={project.title} href={project.href} target="_blank">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <StackTags items={project.stack} />
        </a>
      ))}
    </section>
  );
}`,

  contact: `interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/konain611", icon: "github" },
  { label: "NPM", href: "https://www.npmjs.com/~syedkonainnasir", icon: "npm" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syedkonainnasir/",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/syedkonain_7", icon: "twitter" },
  { label: "Email", href: "mailto:konain611@gmail.com", icon: "mail" },
  { label: "Phone", href: "tel:+923333368339", icon: "phone" },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <nav>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank">
            <Icon name={link.icon} />
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
}`,
};

export const FILE_PATHS = {
  readme: "README.md",
  package: "package.json",
  page: "src/app/page.tsx",
  about: "src/components/about.tsx",
  education: "src/components/education.tsx",
  skills: "src/components/skills.tsx",
  experience: "src/components/experience.tsx",
  projects: "src/components/projects.tsx",
  contact: "src/components/contact.tsx",
};

export function getFileMeta(fileId) {
  const path = FILE_PATHS[fileId];
  if (!path) return { name: fileId, language: "plaintext" };

  const name = path.split("/").pop();
  const ext = name.split(".").pop();

  const languageMap = {
    tsx: "TypeScript React",
    md: "Markdown",
    json: "JSON",
  };

  return {
    name,
    path,
    language: languageMap[ext] || "Plain Text",
  };
}
