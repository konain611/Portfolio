import Link from "next/link";

export default function Projects() {
  return (
       <div className="flex flex-col justify-between rounded-md p-2 text-foreground">
      <div className="flex items-start justify-between gap-2 pb-3">
        <div>
          <div className="text-sm uppercase tracking-[0.4em]">
            <span>
              <i className="ri-file-code-line text-(--accent) text-lg" />
            </span>{" "}
            Projects
          </div>
        </div>
        <Link href="/projects">
          <button className="rounded-full cursor-pointer border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
          View All
        </button>
        </Link>
      </div>
      <div className="space-y-2.5">
      
      </div>
    </div>
  );
}
