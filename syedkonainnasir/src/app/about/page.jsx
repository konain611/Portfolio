const LINES = [
  [{ text: 'export', c: 'kw' }, { text: ' ' }, { text: 'default', c: 'kw' }, { text: ' ' }, { text: 'function', c: 'kw' }, { text: ' ' }, { text: 'About', c: 'tag' }, { text: '() {', c: 'punct' }],
  [{ text: '  return (', c: 'punct' }],
  [{ text: '    <>', c: 'punct' }],
  [],
  [{ text: '      {/* ', c: 'punct' }, { text: 'CS grad, Full-Stack Software Engineer.', c: 'content' }, { text: ' */}', c: 'punct' }],
  [],
  [{ text: '      <', c: 'punct' }, { text: 'Education', c: 'tag' }, { text: '>', c: 'punct' }],
  [{ text: '        ', c: 'punct' }, { text: 'BS Computer Science, Iqra University — Spring 2026', c: 'content' }],
  [{ text: '      </', c: 'punct' }, { text: 'Education', c: 'tag' }, { text: '>', c: 'punct' }],
  [],
  [{ text: '      <', c: 'punct' }, { text: 'CurrentRole', c: 'tag' }, { text: '>', c: 'punct' }],
  [{ text: '        ', c: 'punct' }, { text: 'Full-Stack Software Engineer @ Diginfo', c: 'content' }],
  [{ text: '        ', c: 'punct' }, { text: 'Onsite, since March 2025', c: 'content' }],
  [{ text: '      </', c: 'punct' }, { text: 'CurrentRole', c: 'tag' }, { text: '>', c: 'punct' }],
  [],
  [{ text: '      <', c: 'punct' }, { text: 'TechStack', c: 'tag' }, { text: '>', c: 'punct' }],
  [{ text: '        ', c: 'punct' }, { text: 'Next.js, TypeScript, React, Node.js, PostgreSQL, Prisma', c: 'content' }],
  [{ text: '      </', c: 'punct' }, { text: 'TechStack', c: 'tag' }, { text: '>', c: 'punct' }],
  [],
  [{ text: '      <', c: 'punct' }, { text: 'CurrentlyLearning', c: 'tag' }, { text: '>', c: 'punct' }],
  [{ text: '        ', c: 'punct' }, { text: 'Docker, Kubernetes, AI agents', c: 'content' }],
  [{ text: '      </', c: 'punct' }, { text: 'CurrentlyLearning', c: 'tag' }, { text: '>', c: 'punct' }],
  [],
  [{ text: '      <', c: 'punct' }, { text: 'Contact', c: 'tag' }, { text: '>', c: 'punct' }],
  [{ text: '        ', c: 'punct' }, { text: 'Karachi, Pakistan · konain611@gmail.com', c: 'content' }],
  [{ text: '      </', c: 'punct' }, { text: 'Contact', c: 'tag' }, { text: '>', c: 'punct' }],
  [],
  [{ text: '    </>', c: 'punct' }],
  [{ text: '  );', c: 'punct' }],
  [{ text: '}', c: 'punct' }],
];

function tokenClass(c) {
  switch (c) {
    case 'kw':
      return 'text-(--accent)';
    case 'tag':
      return 'text-(--accent) font-medium';
    case 'content':
      return 'text-(--foreground)';
    case 'punct':
    default:
      return 'text-(--muted)';
  }
}

function IconFolder({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h6l2 2h8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function IconSearch({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.5" y2="15.5" />
    </svg>
  );
}

function IconGitBranch({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 8.2V15.8" />
      <path d="M6 12c0-3 3-4.5 6-4.5h4" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full max-w-[97%] mx-auto py-4">
      <h1 className="sr-only">About</h1>

      <div className="rounded-xl border border-(--border)/50 overflow-hidden flex flex-col">
        {/* tab bar */}
        <div className="flex items-center border-b border-(--border)/40 bg-background/60">
          <div className="flex items-center gap-2 px-4 py-2 border-r border-(--border)/40 border-t-2 border-t-(--accent) bg-background text-xs font-mono text-(--foreground)">
            <span className="h-2 w-2 rounded-sm bg-(--accent)" aria-hidden="true" />
            about.jsx
            <span className="text-(--muted)" aria-hidden="true">×</span>
          </div>
        </div>

        {/* body */}
        <div className="flex">
          {/* activity bar */}
          <div className="hidden sm:flex flex-col items-center gap-5 w-11 py-3 border-r border-(--border)/40 bg-background/60" aria-hidden="true">
            <span className="p-1.5 border-l-2 border-(--accent) text-(--foreground)">
              <IconFolder />
            </span>
            <span className="p-1.5 text-(--muted)">
              <IconSearch />
            </span>
            <span className="p-1.5 text-(--muted)">
              <IconGitBranch />
            </span>
          </div>

          {/* editor */}
          <div className="flex-1 bg-background/30 overflow-x-auto">
            <pre className="text-sm leading-7 font-mono px-4 py-4">
              {LINES.map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="select-none text-(--muted)/50 w-5 text-right shrink-0">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre-wrap break-words">
                    {line.length === 0
                      ? '\u00A0'
                      : line.map((t, j) => (
                          <span key={j} className={tokenClass(t.c)}>
                            {t.text}
                          </span>
                        ))}
                    {i === LINES.length - 1 && (
                      <span className="inline-block w-[7px] h-[1em] bg-(--accent) ml-1 align-middle animate-blink" />
                    )}
                  </span>
                </div>
              ))}
            </pre>
          </div>

          {/* minimap */}
          <div className="hidden lg:block w-20 border-l border-(--border)/40 bg-background/40 px-2 py-4" aria-hidden="true">
            {LINES.map((line, i) => {
              const weight = line.reduce((sum, t) => sum + t.text.length, 0);
              const width = Math.min(100, weight * 2.2);
              const hasTag = line.some((t) => t.c === 'tag');
              return (
                <div
                  key={i}
                  className={`h-[3px] mb-[2px] rounded-sm ${hasTag ? 'bg-(--accent)/40' : 'bg-(--muted)/30'}`}
                  style={{ width: `${width}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between px-3 py-1 text-[11px] font-mono bg-(--accent) text-(--background)">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <IconGitBranch size={12} /> main
            </span>
            <span>0 problems</span>
          </div>
          <div className="flex items-center gap-3">
            <span>JavaScript (JSX)</span>
            <span>UTF-8</span>
            <span>Spaces: 2</span>
            <span>Ln {LINES.length}, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}