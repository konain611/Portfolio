"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home", icon: "ri-home-3-line" },
  { href: "/about", label: "About", icon: "ri-user-3-line" },
  { href: "/skills", label: "Skills", icon: "ri-tools-line" },
  { href: "/experience", label: "Experience", icon: "ri-briefcase-line" },
  { href: "/projects", label: "Projects", icon: "ri-folder-4-line" },
  { href: "/contact", label: "Contact", icon: "ri-mail-line" },
];

const accentOptions = [
  {
    name: "Red",
    value: "#e00000",
    accent: "#e00000",
    border: "#d80000",
  },
  {
    name: "Green",
    value: "#22c55e",
    accent: "#22c55e",
    border: "#16a34a",
  },
  {
    name: "Blue",
    value: "#1e3a8a",
    accent: "#1e3a8a",
    border: "#172554",
  },
  {
    name: "White",
    value: "#f5f5f5",
    accent: "#f5f5f5",
    border: "#d4d4d4",
  },
  {
    name: "Yellow",
    value: "#facc15",
    accent: "#facc15",
    border: "#ca8a04",
  },
  {
    name: "Cyan",
    value: "#22d3ee",
    accent: "#22d3ee",
    border: "#0891b2",
  },
];

const backgroundOptions = [
  { name: "Black", value: "#06080d" },
  { name: "White", value: "#f5f5f5" },
];

const textColorOptions = [
  { name: "Light", value: "#ebebeb" },
  { name: "Dark", value: "#111827" },
];

export default function Footer() {
  const pathname = usePathname() || "/";
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [accentTheme, setAccentTheme] = useState("red");
  const [backgroundTheme, setBackgroundTheme] = useState("black");
  const [textTheme, setTextTheme] = useState("light");
  const settingsRef = useRef(null);

  useEffect(() => {
    const savedAccent = window.localStorage.getItem("portfolio-accent-theme");
    const savedBackground = window.localStorage.getItem("portfolio-background-theme");
    const savedText = window.localStorage.getItem("portfolio-text-theme");

    if (savedAccent) setAccentTheme(savedAccent);
    if (savedBackground) setBackgroundTheme(savedBackground);
    if (savedText) setTextTheme(savedText);
  }, []);

  useEffect(() => {
    const selectedAccent = accentOptions.find((option) => option.name.toLowerCase() === accentTheme);
    if (!selectedAccent) return;

    const root = document.documentElement;
    root.style.setProperty("--accent", selectedAccent.accent);
    root.style.setProperty("--accent-strong", selectedAccent.accent);
    root.style.setProperty("--border", selectedAccent.border);

    window.localStorage.setItem("portfolio-accent-theme", accentTheme);
  }, [accentTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background", backgroundTheme === "white" ? "#f5f5f5" : "#06080d");
    window.localStorage.setItem("portfolio-background-theme", backgroundTheme);
  }, [backgroundTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--text", textTheme === "dark" ? "#111827" : "#ebebeb");
    root.style.setProperty("--foreground", textTheme === "dark" ? "#111827" : "#b3b3b3");
    window.localStorage.setItem("portfolio-text-theme", textTheme);
  }, [textTheme]);

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

  const now = useMemo(() => new Date(), []);
  const formattedTime = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDate = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const applyAccentTheme = (themeName) => {
    setAccentTheme(themeName.toLowerCase());
  };

  const resetTheme = () => {
    setAccentTheme("red");
    setBackgroundTheme("black");
    setTextTheme("light");
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

              <div className="mb-2 text-sm font-semibold">Background</div>
              <div className="mb-3 flex gap-2">
                {backgroundOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setBackgroundTheme(option.name.toLowerCase())}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      backgroundTheme === option.name.toLowerCase()
                        ? "border-(--accent) bg-(--accent)/15"
                        : "border-(--border)/40"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              <div className="mb-2 text-sm font-semibold">Text</div>
              <div className="flex gap-2">
                {textColorOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setTextTheme(option.name.toLowerCase())}
                    className={`rounded-full border px-3 py-1 text-xs transition ${
                      textTheme === option.name.toLowerCase()
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
                aria-current={isActive ? "page" : undefined}
                className={`relative flex h-8 w-8 items-center justify-center${
                  isActive
                    ? " text-(--accent)"
                    : "text-(--foreground) hover:text-(--accent) transition"
                }`}
              >
                <i className={`${link.icon} text-2xl`} />
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-2 rounded-full bg-(--accent)" />
                )}
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
