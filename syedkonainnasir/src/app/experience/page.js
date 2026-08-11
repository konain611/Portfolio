const experienceItems = [
  {
    role: "Full-Stack Software Engineer",
    company: "Digital Information Pvt Ltd",
    period: "March 2024 – Present",
    location: "Full time - Karachi, Pakistan",
    summary:
      "Leading product development for enterprise dashboards and AI-driven features — from idea to production.",
    highlights: [
      "Built a component system that halved frontend onboarding time.",
      "Designed APIs and data models focused on observability and scale.",
      "Led cross-functional improvements that improved key workflows by 30%.",
    ],
  },
  {
    role: "Software Developer",
    company: "NS Engineering Works",
    period: "2025 – Present",
    location: "Freelance / Contract - Remote",
    summary:
      "Delivered polished web products for SMEs, prioritizing speed-to-value and maintainability.",
    highlights: [
      "Shipped conversion-focused e-commerce and lead-gen apps with clear A/B learnings.",
      "Implemented secure checkout and CI/CD workflows for several clients.",
      "Maintained close client collaboration and iterative feature rollouts.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "YoungDev Interns",
    period: "Aug 2024 - Sep 2024",
    location: "Internship - Remote",
    summary:
      "Delivered polished web products for SMEs, prioritizing speed-to-value and maintainability.",
    highlights: [
      "Shipped conversion-focused e-commerce and lead-gen apps with clear A/B learnings.",
      "Implemented secure checkout and CI/CD workflows for several clients.",
      "Maintained close client collaboration and iterative feature rollouts.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-8">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Experience</h1>
      </div>

      <main className="space-y-6">
        <section className="relative overflow-hidden rounded-3xl border border-(--border)/30 bg-linear-to-br from-background/60 to-background/40 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Career overview</p>
              <h2 className="mt-3 text-3xl font-semibold">Practical software leadership across product design, engineering, and delivery.</h2>
              <p className="mt-4 text-sm leading-7 text-(--foreground)">
                I design resilient, observable systems and elegant frontends. Below is a compact, interactive timeline that highlights outcomes and craft.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center gap-2">
              <div className="h-12 w-12 rounded-full bg-(--accent) flex items-center justify-center text-xs font-bold text-black">KP</div>
              <p className="text-xs text-(--muted)">Key Projects</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl p-6">
          <div className="relative">
            <div className="absolute left-6.5 top-3 bottom-3 w-1 bg-(--border) rounded-full opacity-40" />
            <div className="space-y-6">
              {experienceItems.map((item, idx) => (
                <article key={item.company} className="group relative grid grid-cols-[56px_1fr] items-start gap-5">
                  <div className="flex items-start justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/60 ring-2 ring-(--border) group-hover:scale-105 transition-transform">
                      <div className="h-3 w-3 rounded-full bg-(--accent)" />
                    </div>
                  </div>

                  <div className="flex-1 transform-gpu transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">{item.company}</p>
                        <h4 className="mt-1 text-xl font-semibold text-(--foreground)">{item.role}</h4>
                      </div>
                      <div className="text-right text-sm text-(--muted)">
                        <p className="font-medium">{item.period}</p>
                        <p className="mt-1">{item.location}</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl border border-(--border)/30 bg-background/50 p-4 shadow-sm">
                      <p className="text-sm leading-6 text-(--foreground)">{item.summary}</p>
                      <ul className="mt-3 grid gap-2 text-sm">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-(--accent)" />
                            <span className="text-(--foreground)">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}