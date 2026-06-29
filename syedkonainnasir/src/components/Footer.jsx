"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { accentOptions, applyTheme, backgroundOptions, defaultTheme, persistTheme, publishTheme, readTheme } from "@/lib/theme";

const links = [
  { href: "/", label: "Home", icon: "ri-home-3-line" },
  { href: "/about", label: "About", icon: "ri-user-3-line" },
  { href: "/skills", label: "Skills", icon: "ri-tools-line" },
  { href: "/experience", label: "Experience", icon: "ri-briefcase-line" },
  { href: "/projects", label: "Projects", icon: "ri-folder-4-line" },
  { href: "/contact", label: "Contact", icon: "ri-mail-line" },
  { href: "/playground", label: "Playground", icon: "ri-gamepad-line" },
];

export default function Footer() {
  const pathname = usePathname() || "/";
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const settingsRef = useRef(null);

  useEffect(() => {
    const initialTheme = readTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleThemeChange = (event) => {
      const nextTheme = event.detail || readTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    window.addEventListener("portfolio-theme-change", handleThemeChange);
    return () => window.removeEventListener("portfolio-theme-change", handleThemeChange);
  }, []);

  useEffect(() => {
    if (!isSettingsOpen) return;

    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSettingsOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || theme.background !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      const nextTheme = { ...theme, background: "system" };
      applyTheme(nextTheme);
      publishTheme(nextTheme);
    };

    mediaQuery.addEventListener?.("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener?.("change", handleSystemThemeChange);
  }, [theme]);

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formattedTime = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDate = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const updateTheme = (nextTheme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    persistTheme(nextTheme);
    publishTheme(nextTheme);
  };

  const applyAccentTheme = (themeName) => {
    updateTheme({ ...theme, accent: themeName.toLowerCase() });
  };

  const applyBackgroundTheme = (themeName) => {
    updateTheme({ ...theme, background: themeName.toLowerCase() });
  };

  const resetTheme = () => {
    updateTheme(defaultTheme);
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-(--border)/40 bg-background py-2">
      <div className="mx-auto relative flex w-full items-center justify-between px-3 sm:px-4">
        <div className="relative hidden sm:block" ref={settingsRef}>
          <button
            type="button"
            aria-label="Settings"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-(--border)/40 text-(--foreground) transition hover:text-(--accent)"
          >
            <i className="ri-settings-3-line text-xl" />
          </button>

          {isSettingsOpen && (
            <div className="absolute bottom-12 left-0 w-60 rounded-xl border border-(--border)/40 bg-background p-3 shadow-2xl">
              <div className="mb-2 text-sm font-semibold">Accent</div>
              <div className="mb-3 flex flex-wrap gap-2">
                {accentOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => applyAccentTheme(option.name)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-(--border)/40 p-0 transition hover:border-(--accent)"
                    aria-label={option.name}
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-white/20"
                      style={{ backgroundColor: option.value }}
                    />
                  </button>
                ))}
              </div>

              <div className="mb-2 text-sm font-semibold">Theme</div>
              <div className="mb-3 flex gap-2">
                {backgroundOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => applyBackgroundTheme(option.name)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      theme.background === option.name.toLowerCase()
                        ? "border-(--accent) bg-(--accent)/15"
                        : "border-(--border)/40"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={resetTheme}
                className="mt-3 w-full rounded-lg border border-(--border)/40 px-3 py-2 text-sm transition hover:bg-(--accent) hover:text-background"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        <div className="absolute inset-x-0 mx-auto flex max-w-xs items-center justify-center gap-3">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "");

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                // title={link.label}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-8 w-8 items-center justify-center${
                  isActive
                    ? " text-(--accent)"
                    : "text-(--foreground) hover:text-(--accent) transition"
                }`}
              >
                <i className={`${link.icon} text-2xl`} />
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-2 rounded-full bg-(--accent)" />
                )}
                <span className="pointer-events-none absolute -top-8 rounded-full border border-(--border)/40 bg-background px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-(--foreground) opacity-0 transition group-hover:opacity-100">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden min-w-28 flex-col items-end text-[11px] leading-4 text-(--muted) sm:flex sm:min-w-34">
          <span>{formattedTime}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </footer>
  );
}
