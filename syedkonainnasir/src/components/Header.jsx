"use client";

import { useEffect, useRef, useState } from "react";
import {
  accentOptions,
  applyTheme,
  backgroundOptions,
  defaultTheme,
  persistTheme,
  publishTheme,
  readTheme,
} from "@/lib/theme";

export default function Header() {
  const socialLinks = [
    {
      href: "https://github.com/konain611",
      label: "GitHub",
      icon: "ri-github-fill",
    },
    {
      href: "https://www.linkedin.com/in/syedkonainnasir/",
      label: "LinkedIn",
      icon: "ri-linkedin-fill",
    },
    {
      href: "https://x.com/syedkonain_7",
      label: "X",
      icon: "ri-twitter-x-fill",
    },
  ];

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
    return () =>
      window.removeEventListener("portfolio-theme-change", handleThemeChange);
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
    return () =>
      mediaQuery.removeEventListener?.("change", handleSystemThemeChange);
  }, [theme]);

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
    <div className="w-full my-3 max-w-[97%] mx-auto min-h-20 border-l-4 border-(--border) pl-2 md:pl-4 pt-2 pb-4 mt-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start">
        <h1 className="text-left text-4xl font-bold uppercase">
          Syed Konain Nasir
        </h1>
        <p className="text-left text-sm font-semibold d mt-2 max-w-4xl text-(--foreground)">
          CS Grad • Full-Stack Software Engineer • Learning DevSecOps • Agentic AI Development
        </p>
      </div>

      <div className="flex items-center gap-2">
        {/* <div className="relative" ref={settingsRef}>
          <button
            type="button"
            aria-label="Settings"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border)/60 text-(--accent) transition hover:bg-(--accent) hover:text-background"
          >
            <i className="ri-settings-3-line text-lg cursor-pointer" />
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 top-12 z-50 w-60 rounded-xl border border-(--border)/40 bg-background p-3 shadow-2xl">
              <div className="mb-2 text-sm font-semibold text-left">Accent</div>
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

              <div className="mb-2 text-sm font-semibold text-left">Theme</div>
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
        </div> */}

        {/* {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border)/60 text-(--accent) transition hover:bg-(--accent) hover:text-background"
          >
            <i className={`${link.icon} text-lg`} />
          </a>
        ))} */}

        <a
          href="/resume.pdf"
          download
          aria-label="Download resume"
          className="flex h-10 px-3 py-1 items-center justify-center rounded-full border border-(--border)/60 text-(--accent) transition hover:bg-(--accent) hover:text-background"
        >
          Download Resume &nbsp;
          <i className="ri-download-line " />
        </a>
      </div>
    </div>
  );
}
