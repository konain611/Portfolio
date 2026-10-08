import Link from "next/link";

export default function About() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-2 pb-3">
        <div>
          <div className="text-sm uppercase tracking-[0.4em]">
            <span>
              <i className="ri-user-line text-(--accent) text-lg" />
            </span>{" "}
            About Me
          </div>
        </div>
        <Link href="/detailed/about">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
            View All
          </button>
        </Link>
      </div>

      <div className="text-sm leading-6 max-w-2xl text-left">
        <p className="mb-3">
          Full-Stack Software Engineer with 2+ years of experience building
          production-grade websites, SaaS platforms, and business applications.
          Built corporate websites for 5+ companies and complete SaaS solutions
          with dashboards, APIs, authentication, and payments. Experienced
          across system design, development, deployment, security, and
          monitoring, with Next.js, React, TypeScript, Node.js, PostgreSQL,
          Linux, Docker, Kubernetes, and Nginx. Currently specializing in AI
          agents and automation.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-(--accent)" />
            <span>Karachi, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-briefcase-4-line text-(--accent)" />
            <span>2+ Years</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-mail-line text-(--accent)" />
            <span>konain611@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
