import { Github } from "lucide-react";
import { ProjectsList } from "@/components/ProjectsList";

export const metadata = {
  title: "Projects | Syed Konain Nasir",
  description: "Explore the portfolio projects built by Syed Konain Nasir, including web applications, npm packages, and more.",
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
          <p className="text-muted-foreground text-lg">
            A collection of my work and personal projects
          </p>
        </div>

        {/* Projects List with Filter */}
        <ProjectsList />

        {/* CLI Projects Section */}
        <section className="mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-semibold mb-2">CLI-Based TypeScript Projects deployed on npm</h2>
            <p className="text-muted-foreground mb-6">
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
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-2xl bg-secondary border border-border">
          <h2 className="text-2xl font-semibold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <a
            href="https://github.com/konain611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
          >
            <Github className="w-5 h-5" />
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
