export const THEME_STORAGE_KEY = "portfolio-theme-settings";

export const accentOptions = [
  { name: "Red", value: "#d10e2f", accent: "#d10e2f", border: "#a30a24" },
  { name: "Green", value: "#39ff14", accent: "#39ff14", border: "#1ecc00" },
  { name: "White", value: "#eaf7ff", accent: "#eaf7ff", border: "#cfe8ff" },
  { name: "Blue", value: "#2541b2", accent: "#2541b2", border: "#1b2f80" },
  { name: "Yellow", value: "#ffd400", accent: "#ffd400", border: "#e0b800" },
  { name: "Cyan", value: "#1ef2ff", accent: "#1ef2ff", border: "#00c6d9" },
  { name: "Magenta", value: "#ff4fd8", accent: "#ff4fd8", border: "#d700b7" },
  { name: "Violet", value: "#b56dff", accent: "#b56dff", border: "#8b42f7" },
  { name: "Orange", value: "#ff8f1f", accent: "#ff8f1f", border: "#ff6a00" },
  { name: "Lime", value: "#b6ff00", accent: "#b6ff00", border: "#8ad100" },
];

export const backgroundOptions = [
  { name: "Black", value: "#06080d" },
  { name: "White", value: "#f5f5f5" },
  { name: "System", value: "system" },
];

export const defaultTheme = {
  accent: "green",
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
