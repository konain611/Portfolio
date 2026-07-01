export default function Education() {
  const educationItems = [
    {
      title: "Bs Computer Science",
      institution: "Iqra University",
      status: "done",
    },
    {
      title: "AI Agent Development",
      institution: "GIAIC",
      status: "progress",
    },
    {
      title: "Certified AI Engineer",
      institution: "PIAIC",
      status: "progress",
    },
    {
      title: "OpenClaw For Business Professionals",
      institution: "Panaversity",
      status: "done",
    },
    {
      title: "Tailwind CSS",
      institution: "YoungDev",
      status: "done",
    },
    {
      title: "Secure Linux Training Program",
      institution: "DGAcademy",
      status: "done",
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-md p-2 text-foreground">
      <div className="flex items-start justify-between gap-2 pb-3">
        <div>
          <div className="text-sm uppercase tracking-[0.4em]">
            <span>
              <i className="ri-briefcase-line text-(--accent) text-lg" />
            </span>{" "}
            Education
          </div>
        </div>
        <button className="rounded-full border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
          View All
        </button>
      </div>
      <div className="relative py-4 px-2">
        {/* line runs from the center of the first dot to the center of the last dot */}
        <div className="absolute left-3.5 top-1.5 bottom-1.5 w-px bg-(--border)/40 " />

        {educationItems.map((item) => (
          <div
            key={item.title}
            className="relative flex items-start pb-4 last:pb-0"
          >
            {/* dot, centered on the line */}
            <span className="absolute left-0 top-0 flex h-3.5 w-3.5 items-center justify-center">
              {item.status === "progress" && (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-(--accent)/40" />
              )}
              <span
                className={`relative h-2 w-2 rounded-full ${
                  item.status === "progress"
                    ? "bg-(--accent)"
                    : "bg-(--accent)/70 ring-2 ring-(--accent)/20"
                }`}
              />
            </span>

            <div className="flex w-full items-baseline justify-between gap-3 pl-4">
              <span className="flex items-center gap-1.5 text-[13px] font-medium leading-4 text-foreground">
                {item.title}
                {item.status === "progress" && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                )}
              </span>
              <span className="shrink-0 text-[11px] leading-4 text-foreground/50">
                {item.institution}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
