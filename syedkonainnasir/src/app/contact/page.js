export default function ContactPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Contact</h1>
      </div>

      <div className="rounded-3xl border border-(--border)/40 bg-background/50 p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">Get in touch</p>
        <h2 className="mt-3 text-3xl font-semibold">Let’s talk about your next project.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-(--foreground)">
          I am available for new opportunities, consulting, and collaboration on web applications, product development, and AI-enabled projects. Reach out directly for a concise, practical conversation about your requirements.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-(--border)/35 bg-background p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-(--muted)">Email</p>
            <p className="mt-3 text-sm font-semibold text-(--foreground)">konain611@gmail.com</p>
          </div>
          <div className="rounded-2xl border border-(--border)/35 bg-background p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-(--muted)">Availability</p>
            <p className="mt-3 text-sm font-semibold text-(--foreground)">Open to freelance, contract, and full-time roles.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:konain611@gmail.com"
            className="inline-flex items-center justify-center rounded-2xl border border-(--accent) bg-(--accent)/10 px-4 py-3 text-sm font-semibold text-(--accent) transition hover:bg-(--accent)/15"
          >
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/syedkonainnasir/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-(--border)/35 bg-background px-4 py-3 text-sm font-semibold text-(--foreground) transition hover:border-(--accent) hover:text-(--accent)"
          >
            View LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
}
