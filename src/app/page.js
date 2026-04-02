import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {personalInfo.title}
          </p>

          {/* Bio */}
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/projects"
              className="btn-glow px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium transition-all"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium transition-all flex items-center gap-2"
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
              className="p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all card-hover"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all card-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.email}
              className="p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all card-hover"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-zinc-500 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-zinc-500 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-zinc-500 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-zinc-500 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Technologies I Work With
          </h2>
          <p className="text-zinc-500 text-center mb-12">
            A glimpse of my technical toolkit
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Tailwind", icon: "🎨" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all card-hover text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-zinc-400 text-sm group-hover:text-zinc-100 transition-colors">{tech.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/skills"
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 transition-colors"
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
          <p className="text-zinc-500 text-center mb-12">
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
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all card-hover group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs"
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
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-zinc-500 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
