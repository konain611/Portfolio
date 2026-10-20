import Link from "next/link";

export default function Education() {
  const educationItems = [
    {
      name: "Iqra University",
      title: "Bs Computer Science",
      status: "completed",
      duration: "Spring 2022 - Spring 2026",
      monogram: "IU",
    },
    {
      name: "GIAIC",
      title: "Certified Cloud Applied Agentic AI Engineer & Solopreneur",
      status: "in progress",
      duration: "Feb 2024 - Present",
      monogram: "GA",
    },
    // {
    //   name: "PIAIC",
    //   title: "Certified AI Engineer",
    //   status: "in progress",
    //   duration: "June 2026 - Present",
    // },
    {
      name: "Panaversity",
      title: "Agentic AI Architect Program",
      status: "in progress",
      duration: "Aug 2026 - Present",
      monogram: "P",
    },
    // {
    //   name: "Panaversity",
    //   title: "OpenClaw For Business Professionals",
    //   status: "completed",
    //   duration: "May 2026",
    // },
    // {
    //   name: "YoungDev",
    //   title: "Tailwind CSS",
    //   status: "completed",
    //   duration: "Sep 2023",
    // },
    {
      name: "DGAcademy",
      title: "Secure Linux Training Program",
      status: "completed",
      duration: "Jan 2024",
      monogram: "DG",
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
        <Link href="/detailed/education">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
            View All
          </button>
        </Link>
      </div>

      <div className="relative py-4 px-2">
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-3 top-6 w-px bg-(--accent)/30"
        />
        {educationItems.map((item) => (
          <div key={`${item.title}-${item.name}`} className="group flex items-start gap-3 pb-6 last:pb-0">
            <span
              aria-hidden="true"
              className="mt-1.5 z-40 h-2 w-2 shrink-0 rounded-full bg-(--accent)/70 ring-4 ring-background group-hover:bg-(--accent)"
            />

            <div className="flex min-w-0 w-full flex-col">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
