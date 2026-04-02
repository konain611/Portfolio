import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download, Code, Database, Cloud, Layers } from "lucide-react";
import { personalInfo, socialLinks, stats } from "@/lib/data";

export default function Home() {
  const topSkills = [
    { name: "Next.js", icon: Code },
    { name: "React", icon: Layers },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Tailwind", icon: Code },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-5 md:py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border text-muted-foreground text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {personalInfo.availability}
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {personalInfo.title}
          </p>

          {/* Bio */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/projects"
              className="btn-glow px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border border-border hover:border-primary text-foreground font-medium transition-all"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-lg border border-border hover:border-primary text-foreground font-medium transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all card-hover"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all card-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href={socialLinks.email}
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all card-hover"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A glimpse of my technical toolkit
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {topSkills.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all card-hover text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{tech.name}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/skills"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
            >
              View all skills
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Some of my recent work
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Autoverse (FYP)",
                description: "A plug-and-play RAG chatbot npm package for React/Next.js applications",
                tags: ["npm", "RAG", "AI"],
              },
              {
                name: "Dynamic Resume Builder",
                description: "Interactive resume builder with export functionality",
                tags: ["Next.js", "TypeScript"],
              },
            ].map((project, index) => (
              <div
                key={project.name}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-hover group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Services I offer as a full-stack developer
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development using modern technologies and best practices",
                icon: Code,
              },
              {
                title: "Frontend Development",
                description: "Responsive, accessible, and performant user interfaces with React and Next.js",
                icon: Layers,
              },
              {
                title: "Backend Development",
                description: "Scalable APIs, database design, and server-side logic with Node.js",
                icon: Database,
              },
              {
                title: "DevOps & Deployment",
                description: "CI/CD pipelines, cloud deployment, and infrastructure management",
                icon: Cloud,
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-secondary border border-border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
