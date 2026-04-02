import { skills } from "@/lib/data";
import { Code, Layers, Server, Database, Wrench, Cloud } from "lucide-react";

export const metadata = {
  title: "Skills | Syed Konain Nasir",
  description: "Explore the technical skills and technologies that Syed Konain Nasir works with.",
};

const skillCategories = [
  {
    key: "languages",
    name: "Languages",
    icon: Code,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
  {
    key: "frontend",
    name: "Frontend",
    icon: Layers,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30",
  },
  {
    key: "backend",
    name: "Backend",
    icon: Server,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
  },
  {
    key: "database",
    name: "Database",
    icon: Database,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
  {
    key: "tools",
    name: "Tools & Technologies",
    icon: Wrench,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
  },
  {
    key: "cloudDevOps",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
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
          <p className="text-zinc-500 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const skillList = skills[category.key] || [];

            return (
              <div
                key={category.key}
                className={`p-6 rounded-xl bg-zinc-900 border ${category.borderColor} card-hover group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 transition-colors cursor-default"
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
        <section className="mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-6">Concepts & Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.concepts.map((concept) => (
                <div
                  key={concept}
                  className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-zinc-300">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section>
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Currently Learning</h2>
            <p className="text-zinc-400 mb-6">
              I&apos;m always expanding my skill set. Currently focusing on:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-200">DevOps Practices</h3>
                  <p className="text-zinc-500 text-sm">
                    CI/CD pipelines, containerization, infrastructure as code, and cloud deployment strategies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-200">AI & Agent Development</h3>
                  <p className="text-zinc-500 text-sm">
                    Building autonomous AI agents, RAG systems, and integrating LLMs into applications
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
