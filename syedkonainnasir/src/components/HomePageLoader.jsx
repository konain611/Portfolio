"use client";

import Link from "next/link";
import ThemeSettingsButton from "./ThemeSettingsButton";

const views = [
  {
    href: "/simple",
    label: "Simple View",
    description:
      "Get the essential introduction and direct links without the extra detail.",
    icon: "ri-user-smile-line",
  },
  {
    href: "/detailed",
    label: "Modern Detailed View",
    description:
      "Browse the portfolio as a polished website with detailed pages.",
    icon: "ri-layout-4-line",
  },
  {
    href: "/dev",
    label: "Developer View",
    description:
      "Explore projects, skills, experience, and the interactive developer portfolio.",
    icon: "ri-terminal-box-line",
  },
];

export default function HomePageLoader() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <section className="relative w-full max-w-3xl border border-(--border)/50 bg-background p-6 shadow-2xl sm:p-10">
        <div className="absolute right-4 top-4 z-20">
          <ThemeSettingsButton />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
          Welcome
        </p>
        <h1 className="mt-4 max-w-xl text-3xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          How would you like to explore?
        </h1>
        <p className="mt-4 text-foreground">
          Choose the experience that fits your visit.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {views.map((view, index) => (
            <Link
              key={view.href}
              href={view.href}
              className={`group border border-(--border)/60 p-5 text-left transition hover:border-(--accent) hover:bg-(--accent) hover:text-background ${index === 2 ? "sm:col-span-2" : ""}`}
            >
              <i
                className={`${view.icon} text-2xl text-(--accent) group-hover:text-background`}
                aria-hidden="true"
              />
              <span className="mt-4 block text-lg font-bold">{view.label}</span>
              <span className="mt-2 block text-sm text-foreground group-hover:text-background/80">
                {view.description}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
