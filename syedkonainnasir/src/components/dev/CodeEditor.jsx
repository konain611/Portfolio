"use client";

import { useMemo, useState } from "react";
import { highlightCode } from "@/lib/dev/highlightCode";

const LINE_HEIGHT = 19;

export default function CodeEditor({ content, language, filePath, onCursorChange }) {
  const [activeLine, setActiveLine] = useState(1);
  const highlightedLines = useMemo(
    () => highlightCode(content || "", language),
    [content, language]
  );

  const lineCount = highlightedLines.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#1e1e1e]">
      {filePath && (
        <div className="flex h-5.5 shrink-0 items-center gap-1 border-b border-[#3c3c3c] bg-[#1e1e1e] px-4 text-[12px] text-[#cccccc]">
          <span className="text-[#858585]">portfolio</span>
          <i className="ri-arrow-right-s-line text-[#858585]" />
          {filePath.split("/").map((segment, index, parts) => (
            <span key={`${segment}-${index}`} className="flex items-center gap-1">
              <span className={index === parts.length - 1 ? "text-[#cccccc]" : "text-[#858585]"}>
                {segment}
              </span>
              {index < parts.length - 1 && (
                <i className="ri-arrow-right-s-line text-[#858585]" />
              )}
            </span>
          ))}
        </div>
      )}

      <div className="hide-scrollbar flex min-h-0 flex-1 overflow-auto">
        <div className="sticky left-0 z-10 shrink-0 select-none bg-[#1e1e1e] py-3 pr-3 pl-4 text-right font-mono text-[13px] text-[#858585]">
          {highlightedLines.map((_, index) => {
            const lineNumber = index + 1;
            return (
              <div
                key={lineNumber}
                className={lineNumber === activeLine ? "text-[#c6c6c6]" : ""}
                style={{ height: `${LINE_HEIGHT}px`, lineHeight: `${LINE_HEIGHT}px` }}
              >
                {lineNumber}
              </div>
            );
          })}
        </div>

        <pre className="m-0 min-w-max flex-1 py-3 pr-6 font-mono text-[13px]">
          <code>
            {highlightedLines.map((line, index) => {
              const lineNumber = index + 1;
              return (
                <div
                  key={lineNumber}
                  className={`whitespace-pre ${lineNumber === activeLine ? "bg-[#2a2d2e]" : ""}`}
                  style={{ height: `${LINE_HEIGHT}px`, lineHeight: `${LINE_HEIGHT}px` }}
                  onClick={() => {
                    setActiveLine(lineNumber);
                    onCursorChange?.({ line: lineNumber, column: 1 });
                  }}
                  dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }}
                />
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
