const experienceItems = [
  {
    role: "Full-Stack Software Engineer",
    company: "Digital Information Pvt Ltd",
    period: "2024 – Present",
    location: "Karachi, Pakistan",
    summary:
      "Owning end-to-end web product development for enterprise dashboards and AI-enabled solutions.",
    highlights: [
      "Delivered reusable Next.js components and TypeScript-driven frontends for customer-facing products.",
      "Designed and implemented REST APIs, authentication, and data workflows using Node.js and Prisma.",
      "Collaborated with product and design teams to improve UX, accessibility, and performance.",
    ],
  },
  {
    role: "Software Developer",
    company: "Freelance / Contract",
    period: "2022 – 2024",
    location: "Remote / Pakistan",
    summary:
      "Built custom web applications and integrations for SMEs, focusing on fast delivery and maintainable systems.",
    highlights: [
      "Developed responsive e-commerce and lead-generation applications using Next.js and Tailwind CSS.",
      "Implemented secure payment workflows, CMS integration, and production deployments.",
      "Maintained strong client communication and iterative delivery for every project.",
    ],
  },
];

const focusAreas = [
  "Web application architecture",
  "TypeScript & modern frontend",
  "API design and integration",
  "Data modeling and persistence",
  "Performance optimization",
  "Production deployment workflows",
];

const impactPoints = [
  "Improved frontend stability by introducing reusable component patterns.",
  "Reduced incident response time through clear logging and monitoring workflows.",
  "Enhanced product adoption by refining user flows and lowering friction.",
];

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Experience</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Career overview</p>
            <h2 className="mt-3 text-3xl font-semibold">Practical software leadership across product design, engineering, and delivery.</h2>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              I focus on delivering web applications that are easy to maintain, performant in production, and aligned with business goals. My experience includes building enterprise dashboards, commerce workflows, and AI-enhanced interfaces while collaborating closely with designers, product owners, and stakeholders.
            </p>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Professional experience</h3>
            <div className="mt-5 space-y-5">
              {experienceItems.map((item) => (
                <div key={item.company} className="rounded-3xl border border-(--border)/35 bg-background p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">{item.company}</p>
                      <h4 className="mt-2 text-xl font-semibold text-(--foreground)">{item.role}</h4>
                    </div>
                    <div className="text-right text-sm text-(--muted)">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-(--foreground)">{item.summary}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-(--foreground)">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Impact areas</h3>
            <div className="mt-5 space-y-4 text-sm leading-6 text-(--foreground)">
              {impactPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-(--border)/35 bg-background p-4">
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Technical focus</h3>
            <div className="mt-5 grid gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="inline-flex rounded-full border border-(--border)/40 bg-background/70 px-3 py-2 text-xs text-(--foreground)">{area}</span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
