"use client";

import { useState } from "react";

function getFileIcon(name, isOpen) {
  if (name.endsWith(".tsx")) return { icon: "ri-reactjs-line", color: "#61dafb" };
  if (name.endsWith(".json")) return { icon: "ri-braces-line", color: "#cbcb41" };
  if (name.endsWith(".md")) return { icon: "ri-markdown-line", color: "#519aba" };
  if (isOpen) return { icon: "ri-folder-open-line", color: "#dcb67a" };
  return { icon: "ri-folder-3-line", color: "#dcb67a" };
}

function TreeNode({ node, depth, activeFileId, onFileSelect, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen || depth < 2);
  const isFolder = node.type === "folder";
  const isActive = !isFolder && node.id === activeFileId;
  const { icon, color } = getFileIcon(node.name, isFolder && isOpen);

  if (isFolder) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center gap-1 py-[3px] pr-2 text-left text-[13px] text-[#cccccc] transition hover:bg-[#2a2d2e]"
          style={{ paddingLeft: `${8 + depth * 12}px` }}
        >
          <i
            className={`${isOpen ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"} shrink-0 text-[14px] text-[#cccccc]`}
          />
          <i className={`${icon} shrink-0 text-[16px]`} style={{ color }} />
          <span className="truncate">{node.name}</span>
        </button>

        {isOpen &&
          node.children?.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeFileId={activeFileId}
              onFileSelect={onFileSelect}
              defaultOpen={depth < 1}
            />
          ))}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onFileSelect(node.id)}
      className={`flex w-full items-center gap-1.5 py-[3px] pr-2 text-left text-[13px] transition ${
        isActive
          ? "bg-[#37373d] text-white"
          : "text-[#cccccc] hover:bg-[#2a2d2e]"
      }`}
      style={{ paddingLeft: `${24 + depth * 12}px` }}
    >
      <i className={`${icon} shrink-0 text-[16px]`} style={{ color }} />
      <span className="truncate">{node.name}</span>
    </button>
  );
}

export default function FileExplorer({ tree, activeFileId, onFileSelect }) {
  return (
    <div className="flex h-full flex-col bg-[#252526] text-[#cccccc]">
      <div className="flex h-[35px] shrink-0 items-center justify-between px-4 text-[11px] font-semibold uppercase tracking-wide text-[#bbbbbb]">
        <span>Explorer</span>
        <div className="flex items-center gap-2 text-[14px] text-[#cccccc]">
          <i className="ri-file-add-line cursor-pointer opacity-70 hover:opacity-100" />
          <i className="ri-folder-add-line cursor-pointer opacity-70 hover:opacity-100" />
          <i className="ri-refresh-line cursor-pointer opacity-70 hover:opacity-100" />
        </div>
      </div>

      <div className="border-t border-[#3c3c3c] px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#bbbbbb]">
        Portfolio
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {tree.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            depth={0}
            activeFileId={activeFileId}
            onFileSelect={onFileSelect}
            defaultOpen
          />
        ))}
      </div>
    </div>
  );
}
