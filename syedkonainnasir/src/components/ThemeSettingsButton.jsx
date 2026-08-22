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

export default function ThemeSettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
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
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const updateTheme = (nextTheme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    persistTheme(nextTheme);
    publishTheme(nextTheme);
  };

  const applyAccentTheme = (accent) => {
    updateTheme({ ...theme, accent: accent.toLowerCase() });
  };

  const applyBackgroundTheme = (background) => {
    updateTheme({ ...theme, background: background.toLowerCase() });
  };

  return (
    <div ref={settingsRef} className="absolute right-4 top-4 z-50">
      <button
        type="button"
        aria-label="Open settings"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-(--border) bg-background text-(--accent) transition hover:bg-(--accent) hover:text-background"
      >
        <i className="ri-settings-3-line text-xl" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-60 rounded-xl border border-(--border)/40 bg-background p-3 shadow-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground)">
            Accent
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {accentOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                onClick={() => applyAccentTheme(option.name)}
                aria-label={option.name}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-(--border)/40 p-0 transition hover:border-(--accent)"
              >
                <span
                  className="h-4 w-4 rounded-full border border-white/20"
                  style={{ backgroundColor: option.value }}
                />
              </button>
            ))}
          </div>

          <div className="mb-2 text-sm font-semibold">Theme</div>
          <div className="mb-3 flex flex-wrap gap-2">
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
            onClick={() => updateTheme(defaultTheme)}
            className="mt-3 w-full rounded-lg border border-(--border)/40 px-3 py-2 text-sm transition hover:bg-(--accent) hover:text-background"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
