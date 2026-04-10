"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Github, FolderOpen, Cpu, Globe, Package, Filter } from "lucide-react";

const projectIcons = {
  "npm Package": Package,
  "Web App": Globe,
  "CLI": Cpu,
};

const projectTypes = ["All", "Web App", "npm Package", "Hackathon"];

export function ProjectsList() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = selectedType === "All" 
    ? projects 
    : projects.filter(p => p.type === selectedType);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              selectedType === type
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Filter className="w-4 h-4" />
            {type}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredProjects.map((project, index) => {
          const Icon = projectIcons[project.type] || FolderOpen;

          return (
            <div
              key={project.name}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-hover"
            >
              {/* Icon & Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                  {project.type}
                </span>
              </div>

              {/* Project Name */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Features */}
              {project.features && (
                <div className="mb-4 space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">Private Project</span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
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
    </>
  );
}
