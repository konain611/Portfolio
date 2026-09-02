"use client";

function getTabIcon(name) {
  if (name.endsWith(".tsx")) return { icon: "ri-reactjs-line", color: "#61dafb" };
  if (name.endsWith(".json")) return { icon: "ri-braces-line", color: "#cbcb41" };
  if (name.endsWith(".md")) return { icon: "ri-markdown-line", color: "#519aba" };
  return { icon: "ri-file-line", color: "#cccccc" };
}

export default function EditorTabs({ tabs, activeTabId, onTabSelect, onTabClose }) {
  if (tabs.length === 0) return null;

  return (
    <div className="hide-scrollbar flex h-8.75 shrink-0 overflow-x-auto bg-[#252526] select-none">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        const { icon, color } = getTabIcon(tab.name);

        return (
          <div
            key={tab.id}
            className={`group flex h-full min-w-30 max-w-50 shrink-0 items-center border-r border-[#252526] ${
              isActive ? "bg-[#1e1e1e] text-[#ffffff]" : "bg-[#2d2d2d] text-[#969696]"
            }`}
          >
            <button
              type="button"
              onClick={() => onTabSelect(tab.id)}
              className="flex min-w-0 flex-1 items-center gap-1.5 px-3 py-2 text-left text-[13px]"
            >
              <i className={`${icon} shrink-0 text-[14px]`} style={{ color }} />
              <span className="truncate">{tab.name}</span>
            </button>
            <button
              type="button"
              aria-label={`Close ${tab.name}`}
              onClick={(event) => {
                event.stopPropagation();
                onTabClose(tab.id);
              }}
              className={`mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[14px] transition ${
                isActive
                  ? "opacity-100 hover:bg-[#3c3c3c]"
                  : "opacity-0 group-hover:opacity-100 hover:bg-[#3c3c3c]"
              }`}
            >
              <i className="ri-close-line" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
