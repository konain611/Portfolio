"use client";

import { useEffect, useRef, useState } from "react";

export function CodeBackground() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if dark theme
    const isDark =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(darkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  };

  return (
    <div ref={containerRef} className="code-bg">
      {isDarkMode && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          onLoadedMetadata={handleVideoLoaded}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/bg-5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
