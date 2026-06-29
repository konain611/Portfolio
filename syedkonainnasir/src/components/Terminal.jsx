"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const routes = {
  "/": "home",
  "/about": "about",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/contact": "contact",
};

const helpText = [
  "Available commands:",
  "",
  "  help                  Show this help menu",
  "  whoami                Show about me",
  "  ls                    List portfolio sections",
  "  pwd                   Show current route",
  "  date                  Show current date and time",
  "  history               Show command history",
  "  clear                 Clear the terminal",
  "  home                  Go to home",
  "  about                 Go to about",
  "  skills                Go to skills",
  "  experience            Go to experience",
  "  projects              Go to projects",
  "  contact               Go to contact",
  "  open <route>          Open a section",
  "  cd <route>            Change to a section",
];

const USER = "guest";
const HOST = "portfolio";

function promptFor(pathname) {
  const path = pathname === "/" ? "~" : `~${pathname}`;
  return `${USER}@${HOST}:${path}$`;
}

export default function Terminal() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const [entries, setEntries] = useState([
    {
      type: "output",
      text: [
        "Welcome to Konain's portfolio shell. Type 'help' to see available commands.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [entries]);

  const pushEntry = (entry) => {
    setEntries((prev) => [...prev, entry]);
  };

  const resolveRoute = (value) => {
    const normalized = (value || "").trim().toLowerCase();
    if (!normalized) return null;

    if (normalized.startsWith("/")) {
      return normalized === "/" || routes[normalized] ? normalized : null;
    }

    if (normalized === "home") return "/";
    if (normalized === "about") return "/about";
    if (normalized === "skills") return "/skills";
    if (normalized === "experience") return "/experience";
    if (normalized === "projects") return "/projects";
    if (normalized === "contact") return "/contact";

    return null;
  };

  const dangerousCommands = [
    {
      pattern: /^rm\s+-rf\s+(\/|\*|~)?\s*$/,
      text: [
        "Whoa there, cowboy.",
        "Good thing this is a portfolio and not your actual filesystem.",
      ],
    },
    {
      pattern: /^rm\b/,
      text: [
        "Seriously?? :)",
      ],
    },
    {
      pattern: /^(dd|mkfs)\b/i,
      text: ["Bold move. Good thing this is a portfolio, not a hard drive."],
    },
    {
      pattern: /:\(\)\s*{\s*:\s*\|\s*:&?\s*};?\s*:/,
      text: [
        "A fork bomb? In MY terminal?",
        "Respectfully declining — my one process would like to keep living.",
      ],
    },
    {
      pattern: /^(shutdown|reboot|halt|poweroff)\b/i,
      text: ["This terminal doesn't have an off switch. Try 'clear' instead."],
    },
    {
      pattern: /drop\s+(table|database)/i,
      text: [
        "DROP TABLE? Bold of you to assume I have a database.",
        "(I don't. Your secrets are safe.)",
      ],
    },
    {
      pattern: /chmod\s+-r\s+777/i,
      text: [
        "chmod 777 everything... a classic. Still won't do anything here though.",
      ],
    },
    {
      pattern: /^(del|format)\b/i,
      text: [
        "This is a Unix-flavored fake shell — Windows commands don't work, and neither would deleting anything.",
      ],
    },
    {
      pattern: /^(kill|pkill)\s+(-9\s+)?1\b/,
      text: [
        "Trying to kill PID 1? Respect the hustle, but there's no init process to murder here.",
      ],
    },
  ];


  const handleCommand = (rawCommand) => {
    const command = rawCommand.trim();
    if (!command) return;

    // Check for dangerous-looking commands and refuse to run them here
    const dangerMatch = dangerousCommands.find((d) =>
      d.pattern.test(command.toLowerCase()),
    );
    if (dangerMatch) {
      pushEntry({ type: "output", text: dangerMatch.text });
      return;
    }

    const [first, ...rest] = command.split(/\s+/);
    const name = first.toLowerCase();

    switch (name) {
      case "help":
        pushEntry({ type: "output", text: helpText });
        break;

      case "whoami":
        pushEntry({
          type: "output",
          text: [
            "Name: Syed Konain Nasir",
            "Role: Full Stack Developer",
            "Focus: Next.js, React, Node.js, AI agents, DevOps",
            "Location: Karachi, Pakistan",
            "Email: konain611@gmail.com",
          ],
        });
        break;

      case "ls":
        pushEntry({
          type: "output",
          text: [
            "home",
            "about",
            "skills",
            "experience",
            "projects",
            "contact",
          ],
        });
        break;

      case "pwd":
        pushEntry({ type: "output", text: [pathname] });
        break;

      case "date":
        pushEntry({ type: "output", text: [new Date().toString()] });
        break;

      case "history":
        pushEntry({
          type: "output",
          text: history.length
            ? history.map((cmd, i) => `  ${i + 1}  ${cmd}`)
            : ["No commands yet."],
        });
        break;

      case "sudo":
        pushEntry({ type: "output", text: ["Permission denied: nice try."] });
        break;

      case "clear":
        setEntries([]);
        break;

      case "home":
      case "about":
      case "skills":
      case "experience":
      case "projects":
      case "contact":
      case "open":
      case "cd": {
        const routeValue = name === "open" || name === "cd" ? rest[0] : name;
        const targetRoute = resolveRoute(routeValue);

        if (!targetRoute) {
          pushEntry({
            type: "output",
            text: [`Route not found: ${routeValue || name}`],
          });
          break;
        }

        router.push(targetRoute);
        pushEntry({ type: "output", text: [`Opening ${targetRoute}...`] });
        break;
      }

      default:
        pushEntry({
          type: "output",
          text: [
            `Command not found: ${first}`,
            `Type 'help' for a list of commands.`,
          ],
        });
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      setInput("");
      return;
    }

    setEntries((prev) => [
      ...prev,
      { type: "input", text: trimmed, prompt: promptFor(pathname) },
    ]);
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(0);
    handleCommand(trimmed);
    setInput("");
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = historyIndex + 1;
      const previousCommand = history[history.length - nextIndex];
      if (previousCommand) {
        setHistoryIndex(nextIndex);
        setInput(previousCommand);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.max(0, historyIndex - 1);
      const previousCommand = history[history.length - nextIndex];
      setHistoryIndex(nextIndex);
      setInput(previousCommand || "");
    }
  };

  const livePrompt = promptFor(pathname);

  return (
    <div className="flex h-70 w-full max-w-full flex-col overflow-hidden rounded-lg border border-(--border)/40 bg-[rgba(6,8,13,0.95)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-(--muted)">
          portfolio-shell
        </div>
      </div>
      <div
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 overflow-y-auto px-3 py-3 font-mono text-sm leading-6 hide-scrollbar"
      >
        <div className="space-y-1">
          {entries.map((entry, index) => (
            <div key={index} className="whitespace-pre-wrap wrap-break-words">
              {entry.type === "input" ? (
                <div className="flex items-center gap-1.5">
                  <span className="shrink-0 text-(--accent)">
                    {entry.prompt || livePrompt}
                  </span>
                  <span className="min-w-0 flex-1">{entry.text}</span>
                </div>
              ) : (
                <div className="space-y-0.5">
                  {entry.text.map((line, lineIndex) => (
                    <div key={lineIndex} className="leading-6 text-gray-300">
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="mt-1 flex items-left gap-1.5">
          <span className="shrink-0 text-(--accent)">{livePrompt}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            className="min-w-0 flex-1 text-gray-300 bg-transparent font-mono text-sm leading-6 outline-none caret-(--accent)"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          {/* <span className="inline-block h-4 w-1.5 animate-pulse bg-(--foreground)" /> */}
        </form>
      </div>
    </div>
  );
}
