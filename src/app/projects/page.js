import { projects } from "@/lib/data";
import { ExternalLink, Github, FolderOpen, Cpu, Globe, Package } from "lucide-react";

export const metadata = {
  title: "Projects | Syed Konain Nasir",
  description: "Explore the portfolio projects built by Syed Konain Nasir, including web applications, npm packages, and more.",
};

const projectIcons = {
  "npm Package": Package,
  "Web App": Globe,
  "CLI": Cpu,
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            A collection of my work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.type] || FolderOpen;

            return (
              <div
                key={project.name}
                className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all card-hover"
              >
                {/* Icon & Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                    {project.type}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-zinc-500 text-sm">Private Project</span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CLI Projects Section */}
        <section className="mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-2">CLI-Based TypeScript Projects</h2>
            <p className="text-zinc-500 mb-6">
              Small utilities and practice projects built with TypeScript
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Currency Converter",
                "ATM Simulation System",
                "Word Counter",
                "To-Do List Manager",
                "Number Guessing Game",
                "Calculator",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">Want to see more?</h2>
          <p className="text-zinc-400 mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com/konain611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 font-medium transition-all"
          >
            <Github className="w-5 h-5" />
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
