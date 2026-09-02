"use client";

import { useMemo, useState } from "react";
import FileExplorer from "./FileExplorer";

export default function Sidebar({
  visible,
  activeView,
  tree,
  activeFileId,
  onFileSelect,
  fileContents = {},
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return Object.entries(fileContents)
      .flatMap(([fileId, content]) => {
        const lines = content.split("\n");
        return lines.flatMap((line, index) =>
          line.toLowerCase().includes(query)
            ? [{ fileId, line: index + 1, text: line.trim() || " " }]
            : []
        );
      })
      .slice(0, 40);
  }, [fileContents, searchQuery]);

  if (!visible) return null;

  return (
    <aside className="flex w-65 shrink-0 flex-col border-r border-[#3c3c3c] bg-[#252526]">
      {activeView === "explorer" && (
        <FileExplorer tree={tree} activeFileId={activeFileId} onFileSelect={onFileSelect} />
      )}

      {activeView === "search" && (
        <div className="flex h-full flex-col p-3 text-[13px] text-[#cccccc]">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#bbbbbb]">
            Search
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded border border-[#3c3c3c] bg-[#3c3c3c] px-2 py-1.5 text-[13px] text-[#cccccc] outline-none placeholder:text-[#858585] focus:border-[#007acc]"
          />
          {searchQuery.trim() ? (
            <div className="mt-3 min-h-0 overflow-y-auto text-[12px]">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <button
                    key={`${result.fileId}-${result.line}-${index}`}
                    type="button"
                    onClick={() => onFileSelect(result.fileId)}
                    className="block w-full border-b border-[#303031] px-1 py-2 text-left hover:bg-[#2a2d2e]"
                  >
                    <div className="flex items-center justify-between text-[#cccccc]">
                      <span className="truncate">{result.fileId}</span>
                      <span className="ml-2 shrink-0 text-[#858585]">{result.line}</span>
                    </div>
                    <div className="mt-0.5 truncate text-[#858585]">{result.text}</div>
                  </button>
                ))
              ) : (
                <p className="px-1 py-3 text-[#858585]">No results found.</p>
              )}
            </div>
          ) : (
            <p className="mt-4 text-[12px] text-[#858585]">
              Search across portfolio files for skills, projects, and more.
            </p>
          )}
        </div>
      )}

      {activeView === "git" && (
        <div className="flex h-full flex-col p-3 text-[13px] text-[#cccccc]">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#bbbbbb]">
            Source Control
          </div>
          <div className="flex items-center gap-2 text-[12px]">
            <i className="ri-git-branch-line text-[#cccccc]" />
            <span>main</span>
          </div>
          <p className="mt-4 text-[12px] text-[#858585]">No pending changes.</p>
        </div>
      )}

      {activeView === "extensions" && (
        <div className="flex h-full flex-col p-3 text-[13px] text-[#cccccc]">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#bbbbbb]">
            Extensions
          </div>
          <input
            type="text"
            placeholder="Search Extensions in Marketplace"
            className="w-full rounded border border-[#3c3c3c] bg-[#3c3c3c] px-2 py-1.5 text-[13px] text-[#cccccc] outline-none placeholder:text-[#858585] focus:border-[#007acc]"
          />
          <div className="mt-4 space-y-3">
            {["ESLint", "Prettier", "Tailwind CSS IntelliSense"].map((ext) => (
              <div key={ext} className="rounded border border-[#3c3c3c] p-2">
                <div className="text-[13px] font-medium">{ext}</div>
                <div className="text-[11px] text-[#858585]">Installed</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
