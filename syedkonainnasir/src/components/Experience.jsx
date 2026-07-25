import Link from "next/link";

export default function Experience() {
  const experienceItems = [
    {
      title: "Full-Stack Software Engineer",
      institution: "Diginfo",
      duration: "March 2025 - Present",
      type: "Full-time",
    },
   {
      title: "Full-Stack Developer",
      institution: "NS Engineering Works",
      duration: "Freelance",
      type: "remote",
   },
  //  {
  //     title: "Full-Stack Developer",
  //     institution: "Intellecta Genius Fest",
  //     duration: "Freelance",
  //     type: "remote",
  //  },
   {
      title: "Front-End Developer",
      institution: "YoungDev Interns",
      duration: "August 2024 - September 2024",
      type: "Internship",
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
            Experience
          </div>
        </div>
        <Link href="/experience">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
          View All
        </button>
        </Link>
      </div>
      <div className="space-y-2.5">
        {experienceItems.map((item) => (
          <div
            key={item.title}
            className="group hover:border-(--border)/25"
          >
            <div className="relative border-l-2 border-(--accent)/40 pl-3 py-2.5 transition-all duration-200 group-hover:border-(--accent)">
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate text-[15px] font-medium leading-5 text-foreground">
                  {item.title}
                </h3>
                <span className="shrink-0 px-1.5 py-[1.5px] text-[11px] font-medium uppercase tracking-wider text-(--accent)">
                  {item.institution}
                </span>
              </div>

              <div className="mt-0.75 flex items-center gap-2.5 text-[12px] leading-4 text-foreground/50">
                <span className="inline-flex items-center gap-1">
                  <i className="ri-calendar-line text-[9px]" />
                  {item.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <i className="ri-briefcase-line text-[9px]" />
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
