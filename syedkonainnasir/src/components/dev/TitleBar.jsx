"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MENU_ITEMS = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

export default function TitleBar() {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  useEffect(() => {
    const syncFullscreenState = () => setIsFullscreen(Boolean(document.fullscreenElement));

    syncFullscreenState();
    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  };

  const goBack = () => {
    if (isMinimizing) return;

    setIsMinimizing(true);
    document.documentElement.classList.add("screen-minimizing");

    window.setTimeout(() => {
      router.back();
    }, 260);
  };

  return (
    <header className="flex h-8.75 shrink-0 items-center overflow-hidden bg-[#3c3c3c] text-[13px] text-[#cccccc] select-none">
      <div className="flex items-center gap-3 px-3">
        <div className="flex items-center gap-1.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="#007ACC" />
            <path d="M8 3.5L4.5 5.5V10.5L8 12.5L11.5 10.5V5.5L8 3.5Z" fill="#1e1e1e" />
          </svg>
          <span className="text-[12px] font-medium">SKN Code</span>
        </div>
      </div>

      <nav className="hidden flex-1 justify-center md:flex">
        <ul className="flex items-center gap-1">
          {MENU_ITEMS.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="rounded px-2.5 py-1 text-[13px] transition hover:bg-[#505050]"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-1 px-2">
        <button
          type="button"
          aria-label="Minimize"
          title="Go back"
          onClick={goBack}
          className="flex h-8.75 w-11.5 items-center justify-center transition hover:bg-[#505050]"
        >
          <span className="h-px w-3 bg-[#cccccc]" />
        </button>
        <button
          type="button"
          aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
          title={isFullscreen ? "Exit full screen" : "Enter full screen"}
          onClick={toggleFullscreen}
          className="flex h-8.75 w-11.5 items-center justify-center transition hover:bg-[#505050]"
        >
          <i
            className={isFullscreen ? "ri-fullscreen-exit-line" : "ri-fullscreen-line"}
            aria-hidden="true"
          />
        </button>
        <Link href='/'>
        <button
          type="button"
          aria-label="Close"
          className="flex h-8.75 w-11.5 items-center justify-center transition hover:bg-[#e81123]"
        >
          <i className="ri-close-line text-base" />
        </button>
        </Link>
      </div>
    </header>
  );
}
