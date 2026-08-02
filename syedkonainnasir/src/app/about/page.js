export default function AboutPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">About</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Professional profile</p>
            <h2 className="mt-3 text-3xl font-semibold">Building polished, production-ready web applications with focus on reliability, performance, and user clarity.</h2>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              I am a Full-Stack Software Engineer with a computer science background and a strong track record of delivering modern web systems. I design and develop product-focused applications using Next.js, React, Node.js, and TypeScript, with an emphasis on clean architecture, responsive design, and maintainable code.
            </p>
            <p className="mt-4 text-sm leading-7 text-(--foreground)">
              My work spans frontend interfaces, backend APIs, and end-to-end delivery. I enjoy solving complex problems through practical automation, efficient collaboration, and thoughtful product design that helps businesses move faster.
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
                <p className="text-sm uppercase tracking-[0.35em] text-(--muted)">Focused on</p>
                <p className="mt-2 text-sm font-semibold text-(--foreground)">Enterprise dashboards, e-commerce platforms, AI-powered workflows.</p>
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
                <p className="text-2xl font-semibold text-(--accent)">100%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-(--muted)">Delivery focus</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Capabilities</h3>
            <div className="mt-4 grid gap-3">
              {[
                'Next.js / React.js application design',
                'TypeScript-first frontend and backend development',
                'REST API design, authentication, and data modeling',
                'Responsive UI with accessible modern layouts',
                'AI agent workflows, prompt engineering, RAG-aware solutions',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-(--border)/35 bg-background p-4 text-sm text-(--foreground)">{item}</div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <h3 className="text-lg font-semibold text-(--accent)">Professional values</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-(--foreground)">
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Build with clarity and intentional structure.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Deliver stable, maintainable systems that scale.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Keep user experience, performance, and trust front and center.</li>
              <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />Learn continuously and apply modern practices with discipline.</li>
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
