import { getLinkPreview } from "@/lib/get-link-preview";

const projects = [
  {
    name: "Autoverse",
    description: "An NPM package for React and Next.js that auto-detects your framework and instantly integrates an agentic RAG chatbot into your app. It understands your app’s context, automates user tasks, and provides a built-in dashboard to manage model settings and behavior.",
    url: "https://github.com/konain611/autoverse-npm",
    stack: ["Typescript", "Python", "React", "RAG", "AI Agents", "NPM", "ChromaDB"],
  },
  {
    name: "DGMagazine",
    description: "A cybersecurity-focused digital magazine platform that publishes articles, breaking news, and downloadable PDFs on cyber-related topics. Built around human interaction and a subscription model, it hosts a large and growing library of content, lets users save articles to read later, and includes several other reader-focused features.",
    url: "https://dgmagazine.net",
    stack: ["Nextjs", "Nodejs", "Prisma ORM", "PostgreSQL", "nginx", "CDN"],
  },
  {
    name: "Personal AI Employee",
    description: "A personal AI agent I'm building to act as my own clone — handling daily tasks like managing my emails and following up with me on WhatsApp, among other automations. Still under active development.",
    url: "https://github.com/konain611/Personal-AI-Employee",
    stack: ["Python", "Obsidian", "AI Agents", "LLM", "Spec-kit"],
  },
  {
    name: "DGEnterprise",
    description: "A centralized dashboard that unifies every Diginfo application under a single account. From one login, users can monitor their activity and interactions across all other Diginfo products, make purchases, customize their profile, and manage more — one account, with access anywhere across the entire Diginfo product suite.",
    url: "https://dgenterprise.diginfo.net/en/login",
    stack: ["Nextjs", "Nodejs", "PostgreSQL"],
  },
  {
    name: "Physical AI & Humanoid Robotics",
    description: "A book built with Docusaurus, written as a practice ground for spec-driven development — figuring out how to get AI to work for me effectively through prompt engineering, while exploring reusable skills, history, and working with agents, all centered around physical AI and humanoid robotics.",
    url: "https://ai-native-book-writing.vercel.app/",
    stack: ["Typescript", "Docusaurus", "AI-Driven Development"],
  },
  {
    name: "Digital Information Systems Pvt Ltd.",
    description: "The corporate website for Digital Information Systems (Diginfo), a company centered on cybersecurity-related products. Highlights their full suite of offerings — a digital magazine, training courses, threat assurance services, native security solutions, and cloud facilities — all under one corporate brand.",
    url: "https://diginfo.net",
    stack: ["JavaScript", "Next.js", "React", "nginx", "VPS"],
  },
  {
    name: "Hameed & Azra Award",
    description: "An awards platform built to honor the memory of the late Azra Hameed and Syed Abdul Hameed, established by their family to recognize and encourage excellence in academic research. Includes a dedicated story page, eligibility details (open to lecturers and assistant professors at public-sector universities in Sindh and Balochistan, for papers published or accepted from July 2023 onward), an online application flow, and an awardees showcase.",
    url: "https://aha2.vercel.app/",
    stack: ["JavaScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    name: "NS Engineering Works",
    description: "A corporate website I built for a client's generator business, serving industrial, home, and office power needs. Showcases their full service range — sales, rentals, maintenance, and overhaul — for diesel, petrol, and gas generators from 10KVA up to megawatt scale, backed by 500+ delivered projects, 30+ years of experience, and 24/7 support.",
    url: "https://nsengineeringworks.pk",
    stack: ["JavaScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Resume Builder",
    description: "A free resume builder I created during my web development learning phase. Users can build their resume from scratch at no cost, download it, and customize it however they like, plus a few other handy features.",
    url: "https://dynamic-resume-builder-six-liart.vercel.app/",
    stack: ["Nextjs", "Shadcn UI", "Tailwind CSS", "Vercel"],
  },
];

export default async function ProjectsPage() {
  const projectsWithPreviews = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      previewImage: project.url ? await getLinkPreview(project.url) : null,
    }))
  );

  return (
    <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-2">
      <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
        <h1 className="text-left text-4xl font-bold uppercase ml-4">Projects</h1>
      </div>

      <div className="mt-4 flex flex-col gap-4 mx-0 md:mx-4">
        {projectsWithPreviews.map((project) => (
          <div
            key={project.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-(--border)/50 bg-(--surface) md:flex-row"
          >
            <div className="hidden md:block md:w-[40%] border-b border-(--border)/35 p-3 md:border-b-0 md:border-r">
              <div className="overflow-hidden">


                <div className="relative h-64 overflow-hidden cursor-pointer hover:opacity-95">
                  {project.previewImage ? (
                    <img
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      className="h-full w-full object-cover pointer-events-none select-none"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.20),rgba(255,255,255,0.02))] px-4 text-center">
                      <div className="w-full max-w-[80%] space-y-2">
                        <div className="mx-auto h-3 w-2/3 rounded-full bg-(--border)/50" />
                        <div className="mx-auto h-2.5 w-1/2 rounded-full bg-(--border)/40" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text column — always visible, including mobile */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold uppercase text-(--accent) tracking-wide text-left">{project.name}</h2>
                <p className="text-left text-md leading-6 ">{project.description}</p>

                <div className="pt-3">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-left text-sm font-bold uppercase tracking-[0.18em] text-(--foreground)">
                      Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(project.stack || []).map((tech) => (
                        <span
                          key={tech}
                          className=" px-2.5 py-1 text-sm font-medium uppercase tracking-[0.12em] text-(--muted)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {project.url ? (
                <div className="mt-5 flex justify-start">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-(--accent)/50 bg-(--accent)/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent) transition hover:border-(--accent) hover:bg-(--accent)/15"
                  >
                    View
                    <span aria-hidden="true" className="font-bold">↗</span>
                  </a>
                </div>
              ) : (
                <div className="mt-5">
                  <p className="text-left text-sm text-(--muted)">No public URL available yet.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}