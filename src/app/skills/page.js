import { skills } from "@/lib/data";
import { Code, Layers, Server, Database, Wrench, Cloud, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Skills | Syed Konain Nasir",
  description: "Explore the technical skills and technologies that Syed Konain Nasir works with.",
};

const skillCategories = [
  {
    key: "languages",
    name: "Languages",
    icon: Code,
    description: "Programming languages I code in daily",
  },
  {
    key: "frontend",
    name: "Frontend",
    icon: Layers,
    description: "Technologies for building user interfaces",
  },
  {
    key: "backend",
    name: "Backend",
    icon: Server,
    description: "Server-side technologies and frameworks",
  },
  {
    key: "database",
    name: "Database",
    icon: Database,
    description: "Data storage and management systems",
  },
  {
    key: "tools",
    name: "Tools & Technologies",
    icon: Wrench,
    description: "Development tools and utilities",
  },
  {
    key: "cloudDevOps",
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud services and deployment practices",
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const skillList = skills[category.key] || [];

            return (
              <div
                key={category.key}
                className="p-6 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Concepts Section */}
        <section className="mb-16">
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-semibold mb-6">Concepts & Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.concepts.map((concept) => (
                <div
                  key={concept}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section>
          <div className="p-6 md:p-8 rounded-2xl bg-secondary border border-border">
            <h2 className="text-2xl font-semibold mb-4">Currently Learning</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m always expanding my skill set. Currently focusing on:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">DevOps Practices</h3>
                  <p className="text-muted-foreground text-sm">
                    CI/CD pipelines, containerization with Docker, Kubernetes orchestration, 
                    infrastructure as code, and cloud deployment strategies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">AI & Agent Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Building autonomous AI agents, RAG systems, LLM integration, 
                    and context engineering for intelligent applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
