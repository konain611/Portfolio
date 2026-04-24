"use client";

import { useEffect, useRef } from "react";

export function CodeBackground() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if dark theme
    const isDark =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (!isDark) return;

    // Slow down video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);

  return (
    <div ref={containerRef} className="code-bg">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full
         object-cover opacity-20 dark:block hidden"
      >
        <source src="/bg-5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
