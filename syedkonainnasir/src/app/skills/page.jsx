import SkillsRadarChart from "@/components/SkillsRadarChart";

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    title: "Tools & Technologies",
    items: ["Postman", "Git", "Nginx", "SSL", "npm", "Yarn"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Cloudflare CDN", "Linux", "CI/CD"],
  },
];

const expertise = [
  "REST APIs",
  "Authentication Systems",
  "Payment Gateway Integration",
  "AI Agents",
  "Prompt Engineering",
  "RAG Systems",
];

const methodologies = [
  {
    title: "Product-focused delivery",
    description:
      "I build software with clear outcomes, making sure every technical decision supports product success.",
  },
  {
    title: "Maintainable architecture",
    description:
      "Clean structure, consistent conventions, and reliable integrations are the foundation of my work.",
  },
  {
    title: "Performance & quality",
    description:
      "I prioritize performance, accessibility, and dependable behavior for every application.",
  },
];

export default function SkillsPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Skills</h1>
      </div>

      <SkillsRadarChart />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">
              Core capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Modern engineering skills for scalable web products.
            </h2>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              I blend frontend craftsmanship, backend engineering, and platform
              operations to deliver user-friendly applications that are
              straightforward to maintain. My focus is on practical technology
              choices, strong engineering discipline, and delivering systems
              that work consistently in production.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">
                  Primary stack
                </p>
                <p className="mt-2 text-lg font-semibold text-(--accent)">
                  Next.js + TypeScript
                </p>
              </div>
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">
                  Backend
                </p>
                <p className="mt-2 text-lg font-semibold text-(--accent)">
                  Node.js + Express
                </p>
              </div>
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">
                  Data
                </p>
                <p className="mt-2 text-lg font-semibold text-(--accent)">
                  SQL + Prisma
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">
              Development approach
            </h3>
            <div className="mt-5 space-y-4">
              {methodologies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-(--border)/35 bg-background p-4"
                >
                  <p className="text-sm font-semibold text-(--foreground)">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">
              Skill areas
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-(--border)/35 bg-background p-4"
                >
                  <p className="text-sm font-semibold text-(--foreground)">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-(--border)/40 bg-background/70 px-3 py-1 text-xs text-(--muted)"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Expertise</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-(--border)/40 bg-background/70 px-3 py-2 text-xs text-(--foreground)"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-(--border)/35 bg-background p-4">
              <h4 className="text-sm font-semibold text-(--foreground)">
                Currently exploring
              </h4>
              <p className="mt-2 text-sm leading-6 text-(--muted)">
                DevOps workflows, containerization, Kubernetes, infrastructure
                automation, and advanced AI agent orchestration.
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
