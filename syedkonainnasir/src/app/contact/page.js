const socialLinks = [
  {
    href: "https://github.com/konain611",
    label: "GitHub",
    icon: "ri-github-fill",
  },
  {
    href: "https://www.npmjs.com/~syedkonainnasir",
    label: "NPM",
    icon: "ri-npmjs-line",
  },
  {
    href: "https://www.linkedin.com/in/syedkonainnasir/",
    label: "LinkedIn",
    icon: "ri-linkedin-box-fill",
  },
  {
    href: "https://x.com/syedkonain_7",
    label: "X",
    icon: "ri-twitter-x-fill",
  },
];

const contactDetails = [
  {
    href: "mailto:konain611@gmail.com",
    label: "Email",
    value: "konain611@gmail.com",
    icon: "ri-mail-line",
  },
  {
    href: "tel:+923333368339",
    label: "Phone",
    value: "+92 333 3368339",
    icon: "ri-phone-line",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-6">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Contact</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
        <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Let&apos;s connect</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
            Professional conversations, product discussions, and technical collaboration.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-(--foreground)">
            For software projects, product development, or technical consulting, reach out directly. I work with teams that value clarity, clean system design, and dependable execution.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-(--border)/35 bg-background/60 px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/40 hover:bg-(--accent)/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--border)/35 bg-background text-(--accent)">
                    <i className={`${link.icon} text-base`} />
                  </span>
                  <span className="text-sm font-medium text-(--foreground)">{link.label}</span>
                </div>
                <i className="ri-arrow-right-up-line text-base text-(--muted) opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Direct contact</p>
            <div className="mt-5 space-y-3">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl border border-(--border)/35 bg-background/60 p-3.5 transition hover:border-(--accent)/40 hover:bg-(--accent)/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border)/35 bg-background text-(--accent)">
                    <i className={`${item.icon} text-base`} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-(--muted)">{item.label}</span>
                    <span className="mt-1 block truncate text-sm font-medium text-(--foreground)">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-(--border)/40 bg-background/50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-(--accent)">Location</p>
            <div className="mt-4 flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />
              <p className="text-sm leading-7 text-(--foreground)">Karachi, Pakistan</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
