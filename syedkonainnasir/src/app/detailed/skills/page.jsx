import SkillsRadarChart from "@/components/SkillsRadarChart";

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C"],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MUI",
      "shadcn/ui",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Prisma ORM", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "npm", "Bun", "Postman", "PM2", "Nginx"],
  },
  {
    title: "Infrastructure",
    items: [
      "Linux",
      "Windows Server",
      "Cloudflare",
      "Vercel",
      "Docker",
      "CI/CD",
    ],
  },
];

const expertise = [
  "Authentication & SSO",
  "Payment Integration",
  "API Development",
  "System Design",
  "AI Agents",
  "Prompt Engineering",
  "RAG Systems",
  "AI Automation",
];

export default function SkillsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[97%] flex-col gap-6 py-4">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="ml-4 text-left text-4xl font-bold uppercase">Skills</h1>
      </div>

      <SkillsRadarChart />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">

        <section className="h-full border border-(--border)/40 bg-background/50 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-(--accent)">
            Core Expertise
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Full-Stack Development & AI Automation
          </h2>

          <p className="mt-3 text-sm leading-7 text-(--muted)">
            I build full-stack web applications, SaaS platforms, APIs, and
            AI-powered tools, from development to production deployment.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Frontend",
                stack: "Next.js · TypeScript · Tailwind CSS",
              },
              {
                title: "Backend",
                stack: "Node.js · NestJS · Prisma",
              },
              {
                title: "Database",
                stack: "PostgreSQL · Redis",
              },
              {
                title: "AI Engineering",
                stack: "AI Agents · RAG · Automation",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-(--border)/35 bg-background p-4"
              >
                <p className="text-xs uppercase tracking-wider text-(--muted)">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-(--accent)">
                  {item.stack}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="grid grid-rows-2 gap-6">
          <section className="border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">
              Hands-on Experience
            </h3>

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
          </section>

          <section className="border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">
              Currently Expanding
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Docker",
                "Kubernetes",
                "GitHub Actions",
                "Advanced AI Agents",
                "Agent Orchestration",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-(--border)/40 bg-background/70 px-3 py-2 text-xs text-(--muted)"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
