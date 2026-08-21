"use client";

import Link from "next/link";

const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/playground", label: "Playground" },
];

const links = [
  { href: "mailto:hello@syedkonainnasir.dev", label: "Email", icon: "ri-mail-line" },
  { href: "https://github.com/konain611", label: "GitHub", icon: "ri-github-line" },
  { href: "https://www.linkedin.com/in/syedkonainnasir/", label: "LinkedIn", icon: "ri-linkedin-line" },
  { href: "https://x.com/syedkonain_7", label: "X", icon: "ri-twitter-x-line" },
];

export default function SimpleView() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl border-l-4 border-(--accent) pl-5 sm:pl-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-(--accent)">
          Hello, I&apos;m
        </p>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-foreground sm:text-6xl">
          Syed Konain Nasir
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-(--foreground)">
          Full-Stack Software Engineer building useful products with modern web technologies and AI.
        </p>

        <nav aria-label="Portfolio pages" className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-(--foreground) underline decoration-(--border)/60 underline-offset-4 transition hover:text-(--accent)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Contact and social links" className="mt-10 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 border border-(--border)/60 px-4 py-3 text-sm font-semibold transition hover:border-(--accent) hover:bg-(--accent) hover:text-background"
            >
              <i className={`${link.icon} text-lg`} aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
