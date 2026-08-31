"use client";

import Link from "next/link";
import ThemeSettingsButton from "./ThemeSettingsButton";

const socialLinks = [
  {
    href: "mailto:hello@syedkonainnasir.dev",
    label: "Email",
    icon: "ri-mail-line",
  },
  {
    href: "https://github.com/konain611",
    label: "GitHub",
    icon: "ri-github-line",
  },
  {
    href: "https://www.linkedin.com/in/syedkonainnasir/",
    label: "LinkedIn",
    icon: "ri-linkedin-line",
  },
  { href: "https://x.com/syedkonain_7", label: "X", icon: "ri-twitter-x-line" },
];

// type CardSection = {
//   eyebrow: string;
//   body: string;
//   /** Omit for a card that isn't a link to a detail page. */
//   href?: string;
//   /** Extra grid classes for this specific card, if it needs to span differently. */
//   className?: string;
// };

const sections = [
  {
    eyebrow: "Education",
    body: "Bachelor of Science in Computer Science, alongside continuous certifications and hands-on learning.",
    href: "/detailed/education",
  },
  {
    eyebrow: "Experience",
    body: "Full-stack software engineer with two-plus years of experience, including 1.5+ years in a full-time professional role — designing systems and shipping them end to end.",
    href: "/detailed/experience",
  },
  {
    eyebrow: "Skills",
    body: "Comfortable across the stack: TypeScript/Java, Next.js, React, and PostgreSQL for building products; Nginx, REST APIs, WebSockets, and Redis for the systems behind them; Tailwind CSS, FastAPI, Docusaurus, Git, npm, Linux, and Vercel for everything in between — plus a working sense of how to design it all so it holds together.",
    href: "/detailed/skills",
    className: "md:col-span-2 xl:col-span-1",
  },
  {
    eyebrow: "Current Focus",
    body: "Deepening my DevSecOps skills while building AI agents and RAG-based systems — the two areas where I'm spending most of my learning time right now.",
    href: "/detailed",
  },
  {
    eyebrow: "Projects",
    body: "A running list — AutoVerse, a RAG-powered shopping assistant shipped as an npm package, and DGMAGAZINE, a full-featured interactive magazine platform, among others.",
    href: "/detailed/projects",
  },
  {
    eyebrow: "Approach",
    body: "I like building things that work well and feel considered — solid engineering underneath, practical AI where it actually helps, not just where it's trendy.",
    // No href: this page already reflects the "approach", so it isn't a link to itself.
  },
];

const cardBaseClass =
  "flex flex-col justify-between rounded-md border border-(--border)/50 bg-background/40 p-4 transition hover:border-(--accent) hover:bg-(--accent)/5";
const eyebrowClass =
  "mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)";

export default function SimpleView() {
  return (
    <main className="relative min-h-screen w-full py-16">
      <Link
        href="/"
        aria-label="Go home"
        className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-md border border-(--border)/60 bg-background px-3 py-1.5 text-sm font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-background"
      >
        <i className="ri-home-4-line text-lg" aria-hidden="true" />
        <span>Home</span>
      </Link>

      <div className="absolute right-5 top-5 z-20 flex items-center gap-3">
        <a
          href="/resume.pdf"
          download
          aria-label="Download CV"
          className="inline-flex items-center gap-2 rounded-md border border-(--border)/60 bg-background px-3 py-1.5 text-sm font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-background"
        >
          <i className="ri-download-line text-lg" aria-hidden="true" />
          <span>Download Resume</span>
        </a>

        <ThemeSettingsButton className="relative z-20" />
      </div>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-2 sm:px-3 lg:px-4">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-baseline justify-center mt-5 gap-3 text-center sm:justify-start sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-(--accent) sm:text-base">
              Hello, I&apos;m
            </p>
            <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Syed Konain Nasir
            </h1>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map(({ eyebrow, body, href, className }) => {
            const cardClassName = className
              ? `${cardBaseClass} ${className}`
              : cardBaseClass;

            const content = (
              <>
                <div>
                  <h2 className={eyebrowClass}>{eyebrow}</h2>
                  <p className="text-base leading-7 text-(--foreground)">
                    {body}
                  </p>
                </div>
                {href && (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--accent)">
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                    {eyebrow === "Education" || eyebrow === "Projects"
                      ? "View more"
                      : "View details"}
                  </p>
                )}
              </>
            );

            return href ? (
              <Link key={eyebrow} href={href} className={cardClassName}>
                {content}
              </Link>
            ) : (
              <div key={eyebrow} className={cardClassName}>
                {content}
              </div>
            );
          })}
        </div>

        <nav
          aria-label="Contact and social links"
          className="flex flex-wrap gap-3"
        >
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-md border border-(--border)/60 px-4 py-3 text-sm font-semibold transition hover:border-(--accent) hover:bg-(--accent) hover:text-background"
            >
              <i className={`${icon} text-lg`} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
