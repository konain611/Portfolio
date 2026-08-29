import Link from "next/link";

const projects = [
  {
    title: "Autoverse",
    description:
      "AI-powered conversational shopping assistant that understands natural-language queries, retrieves and compares products via vector search, and walks users through checkout.",
    stack: [
      "Javascript",
      "Python",
      "Cohere",
      "Quadrant",
      "ChromaDB",
      "Next.js",
      "TypeScript",
    ],
    href: "https://github.com/konain611/autoverse-npm",
  },
  {
    title: "DGMAGAZINE",
    description:
      "Full-fledged cyber intelligence web platform — publishes news, articles, and awareness content, with user interactions, dashboards, and backend APIs, built and maintained solo at Diginfo.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://dgmagazine.net",
  },
  {
    title: "Personal AI Employee",
    description:
      "Python automation agent that handles personal workflows like email and scheduling, using Obsidian as its knowledge and context layer.",
    stack: ["Python", "Obsidian", "AI Driven", "Automation"],
    href: "https://github.com/konain611/Personal-AI-Employee",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col justify-between rounded-md p-2 text-foreground">
      <div className="flex items-start justify-between gap-2 pb-3">
        <div>
          <div className="text-sm uppercase tracking-[0.4em]">
            <span>
              <i className="ri-file-code-line text-(--accent) text-lg" />
            </span>{" "}
            Core Projects
          </div>
        </div>
        <Link href="/detailed/projects">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
            View All
          </button>
        </Link>
      </div>

      <div className="space-y-2.5">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group block rounded-xl border border-(--border)/30 bg-background/50 p-3 transition hover:border-(--border)/60"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-(--foreground) group-hover:text-(--accent) transition-colors">
                {project.title}
              </h3>
              <i className="ri-arrow-right-up-line text-(--muted) text-sm group-hover:text-(--accent) transition-colors" />
            </div>
            <p className="mt-1.5 text-xs leading-5 text-(--muted) text-left">
              {project.description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-(--border)/30 bg-background/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-(--muted)"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
