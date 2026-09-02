"use client";

export default function StatusBar({ language, line, column, branch = "main" }) {
  return (
    <footer className="flex h-[22px] shrink-0 items-center justify-between bg-[#007acc] px-2 text-[12px] text-white select-none">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 px-1">
          <i className="ri-git-branch-line text-[13px]" />
          {branch}
        </span>
        <span className="hidden items-center gap-1 px-1 sm:flex">
          <i className="ri-error-warning-line text-[13px]" />
          0
          <i className="ri-alert-line ml-1 text-[13px]" />
          0
        </span>
      </div>

      <div className="flex items-center">
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">
          Ln {line}, Col {column}
        </span>
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">Spaces: 2</span>
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">UTF-8</span>
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">LF</span>
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">{language}</span>
        <span className="cursor-default px-2 py-0.5 transition hover:bg-[#1f8ad2]">
          <i className="ri-notification-3-line" />
        </span>
      </div>
    </footer>
  );
}
