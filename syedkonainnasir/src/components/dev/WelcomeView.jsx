"use client";

export default function WelcomeView({ onOpenFile }) {
  const shortcuts = [
    { label: "about.tsx", id: "about", desc: "Who I am" },
    { label: "skills.tsx", id: "skills", desc: "Tech stack" },
    { label: "projects.tsx", id: "projects", desc: "Featured work" },
    { label: "contact.tsx", id: "contact", desc: "Get in touch" },
  ];

  return (
    <div className="flex flex-1 items-center justify-center bg-[#1e1e1e] p-8">
      <div className="max-w-xl text-[#cccccc]">
        <h1 className="mb-2 text-[28px] font-light text-white">Syed Konain Nasir</h1>
        <p className="mb-8 text-[14px] text-[#858585]">
          Full-Stack Developer • AI Engineer — explore the portfolio workspace.
        </p>

        <div className="mb-8">
          <h2 className="mb-3 text-[13px] font-semibold text-white">Start</h2>
          <ul className="space-y-2">
            {shortcuts.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onOpenFile(item.id)}
                  className="group flex items-center gap-2 text-[13px] text-[#3794ff] transition hover:underline"
                >
                  <i className="ri-file-code-line text-[#3794ff]" />
                  Open {item.label}
                  <span className="text-[#858585] group-hover:text-[#cccccc]">— {item.desc}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-[13px] font-semibold text-white">Recent</h2>
          <button
            type="button"
            onClick={() => onOpenFile("readme")}
            className="flex items-center gap-2 text-[13px] text-[#3794ff] transition hover:underline"
          >
            <i className="ri-markdown-line text-[#519aba]" />
            README.md
          </button>
        </div>
      </div>
    </div>
  );
}
