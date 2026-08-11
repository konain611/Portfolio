import Link from "next/link";

const projects = [
  {
    title: "Autoverse",
    description:
      "AI-powered conversational shopping assistant — agentic product search, comparison, and checkout flow.",
    stack: ["React", "Python", "LangChain", "ChromaDB"],
    href: "https://github.com/konain611/autoverse-npm", // add your repo/demo link
  },
  {
    title: "DGMAGAZINE",
    description:
      "Cyber intelligence platform built and maintained solo at Diginfo — dashboards, APIs, and data pipelines.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://dgmagazine.net", // add link if you can share one publicly
  },
  {
    title: "autoverse-agent-cli",
    description:
      "Published npm CLI that scaffolds a protected dashboard into Next.js/React apps with framework auto-detection.",
    stack: ["Node.js", "CLI", "npm"],
    href: "https://www.npmjs.com/package/autoverse-agent-cli",
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
            Projects
          </div>
        </div>
        <Link href="/projects">
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