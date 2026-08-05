import Link from "next/link";

export default function Education() {
  const educationItems = [
    {
      name: "Iqra University",
      title: "Bs Computer Science",
      status: "completed",
      duration: "Spring 2022 - Spring 2026",
    },
    {
      name: "GIAIC",
      title: "Web 3.0 & Metaverse",
      status: "in progress",
      duration: "Feb 2024 - Sep 2026",
    },
    {
      name: "PIAIC",
      title: "Certified AI Engineer",
      status: "in progress",
      duration: "June 2026 - Present",
    },
    {
      name: "Panaversity",
      title: "OpenClaw For Business Professionals",
      status: "completed",
      duration: "May 2026",
    },
    {
      name: "YoungDev",
      title: "Tailwind CSS",
      status: "completed",
      duration: "Sep 2023",
    },
    {
      name: "DGAcademy",
      title: "Secure Linux Training Program",
      status: "completed",
      duration: "Jan 2024",
    },
  ];

  return (
    <div className="flex flex-col justify-between rounded-md p-2 text-foreground">
      <div className="flex items-start justify-between gap-2 pb-3">
        <div>
          <div className="text-sm uppercase tracking-[0.4em]">
            <span>
              <i className="ri-graduation-cap-line text-(--accent) text-lg" />
            </span>{" "}
            Education & Certifications
          </div>
        </div>
        <Link href="/education">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
            View All
          </button>
        </Link>
      </div>

      <div className="relative py-4 px-2">
        <div className="absolute left-3.5 top-1.5 bottom-1.5 w-px bg-(--border)/40" />

        {educationItems.map((item) => (
          <div key={`${item.title}-${item.name}`} className="relative flex items-start pb-2 last:pb-0">
            <span className="absolute left-0 top-0 flex h-3.5 w-3.5 items-center justify-center">
              {item.status === "in progress" && (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-(--accent)/40" />
              )}
              <span
                className={`relative h-2 w-2 rounded-full ${
                  item.status === "in progress"
                    ? "bg-(--accent)"
                    : "bg-(--accent)/70 ring-2 ring-(--accent)/20"
                }`}
              />
            </span>

            <div className="flex w-full flex-col pl-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold leading-5 text-foreground">
                  {item.title}
                </h3>
                <span className="text-[12px] uppercase text-(--accent)">
                  {item.name}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[12px] text-foreground/60">
                <span>{item.duration}</span>
                <span>•</span>
                <span className="font-medium text-foreground/80">
                  {item.status === "in progress" ? "In progress" : "Completed"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
