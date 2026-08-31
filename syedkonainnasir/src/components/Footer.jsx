"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { accentOptions, applyTheme, backgroundOptions, defaultTheme, persistTheme, publishTheme, readTheme } from "@/lib/theme";

const links = [
  // { href: "/", label: "Home", icon: "ri-home-3-line" },
  { href: "/detailed/about", label: "About", icon: "ri-user-3-line" },
  { href: "/detailed/skills", label: "Skills", icon: "ri-tools-line" },
  { href: "/detailed/education", label: "Education", icon: "ri-graduation-cap-line" },
  { href: "/detailed/experience", label: "Experience", icon: "ri-briefcase-line" },
  { href: "/detailed/projects", label: "Projects", icon: "ri-folder-4-line" },
  { href: "/detailed/contact", label: "Contact", icon: "ri-mail-line" },
  // { href: "/detailed/playground", label: "Playground", icon: "ri-gamepad-line" },
];

const developerLinks = [
  { href: "/dev", label: "Developer Home", icon: "ri-terminal-box-line" },
];

export default function Footer() {
  const pathname = usePathname() || "/";
  const isDeveloperRoute = pathname.startsWith("/dev");
  const navigationLinks = isDeveloperRoute ? developerLinks : links;
  const homeHref = isDeveloperRoute ? "/dev" : "/";
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const [mounted, setMounted] = useState(false);
  const [settingsPos, setSettingsPos] = useState({ left: 0, bottom: 0 });
  const settingsRef = useRef(null);
  const settingsPanelRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      const clickedButton = settingsRef.current && settingsRef.current.contains(event.target);
      const clickedPanel = settingsPanelRef.current && settingsPanelRef.current.contains(event.target);

      if (!clickedButton && !clickedPanel) {
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

  // No date/time displayed — removed per design.

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

  // Opens the desktop settings panel, capturing the button's on-screen
  // position so the portaled panel can anchor next to it.
  const toggleDesktopSettings = () => {
    if (!isSettingsOpen && settingsRef.current) {
      const rect = settingsRef.current.getBoundingClientRect();
      setSettingsPos({
        left: rect.right + 12,
        bottom: Math.max(12, window.innerHeight - rect.bottom),
      });
    }
    setIsSettingsOpen((prev) => !prev);
  };

  const renderSettingsControls = (mobile = false, ref = null, style = null) => {
    const darkAccentOptions = accentOptions.slice(0, 5);
    const neonAccentOptions = accentOptions.slice(5);

    return (
      <div
        ref={ref}
        style={style || undefined}
        className={`${mobile ? "w-full mt-4" : "w-60"} rounded-xl border border-(--border)/40 bg-background p-3 shadow-2xl`}
      >
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground)">Dark</div>
        <div className="mb-3 flex flex-wrap gap-2">
          {darkAccentOptions.map((option) => (
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

        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground)">Neon</div>
        <div className="mb-3 flex flex-wrap gap-2">
          {neonAccentOptions.map((option) => (
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
    );
  };

  return (
    <>
      {/* <style jsx global>{`
        a,
        button,
        i {
          transition: color 200ms ease, background-color 200ms ease, border-color 200ms ease,
            fill 200ms ease;
        }
      `}</style> */}

      <button
        type="button"
        className="fixed right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-(--border) bg-background md:hidden"
        aria-label="Open menu"
        onClick={() => setIsMobileOpen(true)}
      >
        <i className="ri-menu-line text-2xl" />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:z-40 md:h-screen md:w-15 md:overflow-hidden md:border-r-2 md:border-(--border)/40 md:bg-background md:py-4 md:transition-all md:duration-300 md:ease-out md:hover:w-48 md:flex md:flex-col md:items-center md:justify-between">
      <div className="flex h-full w-full flex-col items-center justify-between">
        {/* Top: Home button (used to be settings) */}
        <div className="flex w-full justify-center md:justify-start md:pl-3">
          <Link
            href={homeHref}
            aria-label="Home"
            className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-(--border) transition hover:text-(--accent) md:w-8 md:justify-center"
          >
            <i className="ri-home-3-line text-xl" />
          </Link>
        </div>

        <nav className="flex w-full flex-col items-center gap-3 md:items-start md:pl-3">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "");

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-10 items-center justify-start transition ${
                  isActive
                    ? " text-(--accent)"
                    : "text-(--foreground) hover:text-(--accent)"
                }`}
              >
                <i className={`${link.icon} text-2xl`} />
                <span className="relative ml-6 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-(--foreground) md:inline-block md:group-hover:inline-block md:group-hover:text-(--accent)">
                  {link.label}
                  <span className="absolute left-0 top-full mt-1 h-px origin-left scale-x-0 bg-(--accent) transition-transform duration-300 ease-out md:group-hover:scale-x-100" style={{ width: "100%" }} />
                </span>
              </Link>
            );
          })}

          {/* Download resume button below Playground */}
          <Link
            href="/resume.pdf"
            download
            aria-label="Download Resume"
            className="group relative flex h-10 items-center justify-start text-(--foreground) transition hover:text-(--accent)"
          >
            <i
              className="ri-download-line text-2xl no-bg resume-icon"
              style={{ animation: "resumeAccent 2s ease-in-out infinite" }}
            />
            <span className="relative ml-6 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-(--foreground) md:inline-block md:group-hover:inline-block md:group-hover:text-(--accent)">
              Download
              <span className="absolute left-0 top-full mt-1 h-px origin-left scale-x-0 bg-(--accent) transition-transform duration-300 ease-out md:group-hover:scale-x-100" style={{ width: "100%" }} />
            </span>
          </Link>
        </nav>

        {/* Bottom: Settings button (used to be date/time) */}
        <div className="flex z-50 w-full justify-center md:justify-start md:pl-3" ref={settingsRef}>
          <button
            type="button"
            aria-label="Settings"
            onClick={toggleDesktopSettings}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-(--border) transition hover:text-(--accent)"
          >
            <i className="ri-settings-3-line text-xl" />
          </button>
        </div>
      </div>
      </aside>

      {/* Desktop settings panel — portaled to <body> so the collapsed
          60px sidebar (overflow-hidden) never clips it. Positioned via
          the button's live bounding rect, fixed, and above everything. */}
      {mounted &&
        isSettingsOpen &&
        createPortal(
          renderSettingsControls(false, settingsPanelRef, {
            position: "fixed",
            left: settingsPos.left,
            bottom: settingsPos.bottom,
            zIndex: 9999,
          }),
          document.body
        )}

      {/* Mobile slide-in panel */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileOpen(false)} />
          <aside className="relative z-50 w-64 max-w-full translate-x-0 border-l-2 border-(--border)/40 bg-background py-6 transition-transform duration-300 ease-out animate-in slide-in-from-right-full">
            <div className="flex h-full flex-col items-start justify-between px-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div />
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsMobileSettingsOpen(false);
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-(--border)"
                  >
                    <i className="ri-close-line text-xl" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-start gap-3">
                  <Link
                    href={homeHref}
                    aria-label="Home"
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-2 py-2 ${
                      pathname === homeHref ? "text-(--accent)" : "text-(--foreground) hover:text-(--accent)"
                    }`}
                  >
                    <i className="ri-home-3-line text-2xl" />
                    <span className="text-sm">Home</span>
                  </Link>

                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href === "/" && pathname === "");

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-label={link.label}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-3 rounded-md px-2 py-2 ${
                          isActive ? "text-(--accent)" : "text-(--foreground) hover:text-(--accent)"
                        }`}
                      >
                        <i className={`${link.icon} text-2xl`} />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/resume.pdf"
                    download
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-(--foreground) hover:text-(--accent)"
                  >
                    <i className="ri-download-line text-2xl" />
                    <span className="text-sm">Download</span>
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <div className="mt-6 border-t border-(--border)/40 pt-4">
                  <button
                    type="button"
                    aria-label="Settings"
                    onClick={() => setIsMobileSettingsOpen((prev) => !prev)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-(--border)"
                  >
                    <i className="ri-settings-3-line text-xl" />
                  </button>

                  {isMobileSettingsOpen && renderSettingsControls(true)}
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}