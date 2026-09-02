"use client";

const ACTIVITIES = [
  { id: "explorer", icon: "ri-file-list-3-line", label: "Explorer" },
  { id: "search", icon: "ri-search-line", label: "Search" },
  { id: "git", icon: "ri-git-branch-line", label: "Source Control" },
  { id: "extensions", icon: "ri-puzzle-line", label: "Extensions" },
];

export default function ActivityBar({ activeView, onViewChange }) {
  return (
    <aside className="flex w-[48px] shrink-0 flex-col items-center bg-[#333333] py-1 select-none">
      {ACTIVITIES.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-label={item.label}
          title={item.label}
          onClick={() => onViewChange(item.id)}
          className={`relative flex h-[48px] w-full items-center justify-center text-[22px] transition ${
            activeView === item.id
              ? "text-white before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-white"
              : "text-[#858585] hover:text-[#cccccc]"
          }`}
        >
          <i className={item.icon} />
        </button>
      ))}

      <div className="mt-auto flex w-full flex-col items-center pb-2">
        <button
          type="button"
          aria-label="Settings"
          title="Settings"
          className="flex h-12 w-full items-center justify-center text-[22px] text-[#858585] transition hover:text-[#cccccc]"
        >
          <i className="ri-settings-3-line" />
        </button>
      </div>
    </aside>
  );
}
