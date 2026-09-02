"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ActivityBar from "./ActivityBar";
import CodeEditor from "./CodeEditor";
import EditorTabs from "./EditorTabs";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";
import TitleBar from "./TitleBar";
import WelcomeView from "./WelcomeView";
import {
  FILE_CONTENTS,
  FILE_PATHS,
  FILE_TREE,
  getFileMeta,
} from "@/lib/dev/portfolioFiles";

const LANGUAGE_MAP = {
  readme: "markdown",
  package: "json",
};

function getLanguage(fileId) {
  if (LANGUAGE_MAP[fileId]) return LANGUAGE_MAP[fileId];
  return "typescriptreact";
}

export default function VSCodeIDE() {
  const [activeView, setActiveView] = useState("explorer");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [openTabs, setOpenTabs] = useState([
    { id: "readme", name: "README.md" },
  ]);
  const [activeTabId, setActiveTabId] = useState("readme");
  const [cursor, setCursor] = useState({ line: 1, column: 1 });

  const openFile = useCallback((fileId) => {
    const meta = getFileMeta(fileId);

    setOpenTabs((prev) => {
      if (prev.some((tab) => tab.id === fileId)) return prev;
      return [...prev, { id: fileId, name: meta.name }];
    });
    setActiveTabId(fileId);
    setCursor({ line: 1, column: 1 });
    setActiveView("explorer");
    setSidebarVisible(true);
  }, []);

  const closeTab = useCallback(
    (fileId) => {
      setOpenTabs((prev) => {
        const next = prev.filter((tab) => tab.id !== fileId);

        if (fileId === activeTabId) {
          const closedIndex = prev.findIndex((tab) => tab.id === fileId);
          const fallback = next[closedIndex - 1] || next[closedIndex] || next[0];
          setActiveTabId(fallback?.id ?? null);
        }

        return next;
      });
    },
    [activeTabId]
  );

  useEffect(() => {
    function handleKeyboardShortcut(event) {
      if (event.ctrlKey && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarVisible((prev) => !prev);
      }

      if (event.ctrlKey && event.key.toLowerCase() === "w" && activeTabId) {
        event.preventDefault();
        closeTab(activeTabId);
      }
    }

    window.addEventListener("keydown", handleKeyboardShortcut);
    return () => window.removeEventListener("keydown", handleKeyboardShortcut);
  }, [activeTabId, closeTab]);

  const activeContent = activeTabId ? FILE_CONTENTS[activeTabId] : null;
  const activeMeta = activeTabId ? getFileMeta(activeTabId) : null;
  const activeLanguage = activeTabId ? getLanguage(activeTabId) : "Plain Text";
  const lineCount = activeContent ? activeContent.split("\n").length : 1;

  const displayLanguage = useMemo(() => {
    if (!activeMeta) return "Plain Text";
    return activeMeta.language;
  }, [activeMeta]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#1e1e1e] font-[Segoe_UI,Tahoma,sans-serif]">
      <TitleBar />

      <div className="flex min-h-0 flex-1">
        <ActivityBar
          activeView={activeView}
          onViewChange={(view) => {
            if (view === activeView && view === "explorer") {
              setSidebarVisible((prev) => !prev);
              return;
            }
            setActiveView(view);
            setSidebarVisible(true);
          }}
        />

        <Sidebar
          visible={sidebarVisible}
          activeView={activeView}
          tree={FILE_TREE}
          activeFileId={activeTabId}
          onFileSelect={openFile}
          fileContents={FILE_CONTENTS}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <EditorTabs
            tabs={openTabs}
            activeTabId={activeTabId}
            onTabSelect={setActiveTabId}
            onTabClose={closeTab}
          />

          {activeTabId && activeContent ? (
            <CodeEditor
              content={activeContent}
              language={activeLanguage}
              filePath={FILE_PATHS[activeTabId]}
              onCursorChange={setCursor}
            />
          ) : (
            <WelcomeView onOpenFile={openFile} />
          )}
        </div>
      </div>

      <StatusBar
        language={displayLanguage}
        line={cursor.line || lineCount}
        column={cursor.column}
      />
    </div>
  );
}
