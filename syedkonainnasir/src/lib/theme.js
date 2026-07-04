export const THEME_STORAGE_KEY = "portfolio-theme-settings";

export const accentOptions = [
  { name: "Red", value: "#e00000", accent: "#e00000", border: "#d80000" },
  { name: "Green", value: "#22c55e", accent: "#22c55e", border: "#16a34a" },
  { name: "Blue", value: "#1e3a8a", accent: "#1e3a8a", border: "#172554" },
  { name: "White", value: "#f5f5f5", accent: "#f5f5f5", border: "#d4d4d4" },
  { name: "Yellow", value: "#facc15", accent: "#facc15", border: "#ca8a04" },
  { name: "Cyan", value: "#22d3ee", accent: "#22d3ee", border: "#0891b2" },
];

export const backgroundOptions = [
  { name: "Black", value: "#06080d" },
  { name: "White", value: "#f5f5f5" },
  { name: "System", value: "system" },
];

export const defaultTheme = {
  accent: "red",
  background: "black",
};

export function readTheme() {
  if (typeof window === "undefined") return defaultTheme;

  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (!saved) return defaultTheme;

    const parsed = JSON.parse(saved);
    return {
      accent: parsed?.accent || defaultTheme.accent,
      background: parsed?.background || defaultTheme.background,
    };
  } catch {
    return defaultTheme;
  }
}

function resolveBackgroundPreference(backgroundPreference) {
  if (backgroundPreference === "system" && typeof window !== "undefined" && typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "black" : "white";
  }

  return backgroundPreference || defaultTheme.background;
}

export function applyTheme(theme = defaultTheme) {
  if (typeof document === "undefined") return;

  const selectedAccent = accentOptions.find(
    (option) => option.name.toLowerCase() === (theme.accent || defaultTheme.accent)
  );

  const root = document.documentElement;

  if (selectedAccent) {
    root.style.setProperty("--accent", selectedAccent.accent);
    root.style.setProperty("--accent-strong", selectedAccent.accent);
    root.style.setProperty("--border", selectedAccent.border);
  }

  const resolvedBackground = resolveBackgroundPreference(theme.background || defaultTheme.background);
  const isDarkBackground = resolvedBackground === "black";

  root.style.setProperty("--background", isDarkBackground ? "#06080d" : "#f5f5f5");
  root.style.setProperty("--text", isDarkBackground ? "#ebebeb" : "#111827");
  root.style.setProperty("--foreground", isDarkBackground ? "#b3b3b3" : "#4b5563");
}

export function persistTheme(theme) {
  if (typeof window === "undefined") return;

  const safeTheme = {
    accent: theme?.accent || defaultTheme.accent,
    background: theme?.background || defaultTheme.background,
  };

  window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(safeTheme));
}

export function publishTheme(theme) {
  if (typeof window === "undefined") return;

  const safeTheme = {
    accent: theme?.accent || defaultTheme.accent,
    background: theme?.background || defaultTheme.background,
  };

  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: safeTheme }));
}
