export default function AboutPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">About</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Professional profile</p>
            <h2 className="mt-3 text-3xl font-semibold">Delivering modern web platforms with a strong emphasis on reliability, performance, and product clarity.</h2>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              I am a Full-Stack Software Engineer with a computer science degree, focused on building commercial web applications and enterprise-grade systems. I bring experience in Next.js, TypeScript, React, and Node.js, and I take pride in developing solutions that are maintainable, well-structured, and aligned to business goals.
            </p>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              My strengths include designing scalable frontend experiences, implementing robust backend services, and combining automation with clear engineering practices to improve delivery quality and product stability.
            </p>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Experience highlights</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">Current role</p>
                <p className="mt-2 text-sm font-semibold text-(--foreground)">Full-Stack Software Engineer</p>
                <p className="mt-1 text-sm text-(--muted)">Digital Information Pvt Ltd</p>
              </div>
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">Primary focus</p>
                <p className="mt-2 text-sm font-semibold text-(--foreground)">Web products, data-driven dashboards, AI-enabled workflows.</p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4 text-center">
                <p className="text-2xl font-semibold text-(--accent)">2+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-(--muted)">Years in software</p>
              </div>
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4 text-center">
                <p className="text-2xl font-semibold text-(--accent)">6+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-(--muted)">Core technologies</p>
              </div>
              <div className="rounded-2xl border border-(--border)/35 bg-background p-4 text-center">
                <p className="text-2xl font-semibold text-(--accent)">Reliable</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-(--muted)">Engineering approach</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Capabilities</h3>
            <div className="mt-4 grid gap-3">
              {[
                'Designing Next.js applications with robust frontend architecture',
                'Building TypeScript-first interfaces and backend services',
                'Crafting REST APIs, authentication flows, and data models',
                'Creating responsive UIs with accessible, consistent layouts',
                'Implementing AI-assisted workflows and prompt-aware features',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-(--border)/35 bg-background p-4 text-sm text-(--foreground)">{item}</div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Professional values</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-(--foreground)">
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Focus on clear architecture and maintainable engineering.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Deliver dependable, data-informed solutions for real use cases.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Prioritize performance, accessibility, and clean user interfaces.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Adopt best practices while staying adaptable to new technologies.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Quick facts</h3>
            <div className="mt-4 space-y-3 text-sm text-(--foreground)">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />Karachi, Pakistan
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />konain611@gmail.com
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />BSc in Computer Science
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
