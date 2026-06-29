import Link from "next/link";

const skills = [
  { name: "Next.js", icon: "ri-nextjs-line", level: 92 },
  { name: "React", icon: "ri-reactjs-line", level: 94 },
  { name: "Tailwind CSS", icon: "ri-tailwind-css-fill", level: 90 },
  { name: "Node.js", icon: "ri-nodejs-line", level: 88 },
  { name: "PostgreSQL", icon: "ri-database-2-line", level: 84 },
  { name: "Git", icon: "ri-git-branch-line", level: 88 },
  { name: "Linux", icon: "ri-ubuntu-line", level: 76 },
  { name: "Nginx", icon: "ri-node-tree", level: 78 },
  { name: "Cloudflare", icon: "ri-cloud-line", level: 82 },
];

export default function Skills() {
  return (
    <div className="flex flex-col justify-between rounded-md p-2 text-foreground">
      <div>
        <div className="flex items-start justify-between gap-2 pb-3">
          <div>
            <div className="text-sm uppercase tracking-[0.4em]"><span><i className="ri-code-s-slash-line text-(--accent) text-lg" /></span> Skills</div>
          </div>
          <button className="rounded-full border border-(--border)/40 px-3 py-1 text-xs text-foreground transition hover:border-(--border)/60 hover:text-(--accent)">
          <Link href="/skills">
            View All
            </Link>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {skills.slice(0, 9).map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-1 rounded-2xl text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-(--accent)">
                <i className={`${skill.icon} text-2xl`} />
              </div>
              <span className="text-[10px] text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-3 rounded-2xl p-3">
        <div className="flex items-center justify-between text-sm text-foreground">
          <span>TypeScript</span>
          <span>90%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-(--border)/20">
          <div className="h-full rounded-full bg-(--accent)" style={{ width: '90%' }} />
        </div>
      </div> */}
    </div>
  );
}
