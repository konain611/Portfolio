export const THEME_STORAGE_KEY = "portfolio-theme-settings";

export const accentOptions = [
  { name: "Blue", value: "#2f6bff", accent: "#2f6bff", border: "#224db8" },
  { name: "Emerald", value: "#10b981", accent: "#10b981", border: "#0c855d" },
  { name: "Amber", value: "#f59e0b", accent: "#f59e0b", border: "#b07208" },
  { name: "Violet", value: "#7c5cff", accent: "#7c5cff", border: "#5942b8" },
  { name: "Crimson", value: "#ef4444", accent: "#ef4444", border: "#ac3131" },
  { name: "Black", value: "#000000", accent: "#000000", border: "#333333" },
  { name: "White", value: "#eaf7ff", accent: "#eaf7ff", border: "#cfe8ff" },
  // { name: "Cyan", value: "#1ef2ff", accent: "#1ef2ff", border: "#00c6d9" },
  // { name: "Magenta", value: "#ff4fd8", accent: "#ff4fd8", border: "#d700b7" },
  // { name: "Violet", value: "#b56dff", accent: "#b56dff", border: "#8b42f7" },
  // { name: "Orange", value: "#ff8f1f", accent: "#ff8f1f", border: "#ff6a00" },
  // { name: "Lime", value: "#b6ff00", accent: "#b6ff00", border: "#8ad100" },
];

export const backgroundOptions = [
  { name: "Black", value: "#06080d" },
  { name: "White", value: "#f5f5f5" },
  { name: "System", value: "system" },
];

export const defaultTheme = {
  accent: "blue",
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

export function getAccentOptionsForBackground(backgroundPreference) {
  const resolvedBackground = resolveBackgroundPreference(backgroundPreference);
  const hiddenAccent = resolvedBackground === "black" ? "Black" : "White";

  return accentOptions.filter((option) => option.name !== hiddenAccent);
}

export function applyTheme(theme = defaultTheme) {
  if (typeof document === "undefined") return;

  const resolvedBackground = resolveBackgroundPreference(theme.background || defaultTheme.background);
  const isDarkBackground = resolvedBackground === "black";
  const requestedAccent = accentOptions.find(
    (option) => option.name.toLowerCase() === (theme.accent || defaultTheme.accent)
  );
  const fallbackAccentName =
    (!isDarkBackground && requestedAccent?.name === "White")
      ? "Black"
      : (isDarkBackground && requestedAccent?.name === "Black")
        ? "White"
        : requestedAccent?.name;
  const selectedAccent = accentOptions.find((option) => option.name === fallbackAccentName);

  const root = document.documentElement;

  if (selectedAccent) {
    root.style.setProperty("--accent", selectedAccent.accent);
    root.style.setProperty("--accent-strong", selectedAccent.accent);
    root.style.setProperty("--border", selectedAccent.border);
  }

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
