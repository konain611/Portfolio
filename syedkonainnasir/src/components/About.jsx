export default function About() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-start justify-between">
        <h1 className="text-lg font-semibold uppercase">About me</h1>
        <div className="mr-2 my-2 flex h-8 w-8 items-center justify-center text-(--accent) drop-shadow-[0_0_4px_var(--accent)] font-light">
          <i className="ri-user-line text-6xl" />
        </div>
      </div>

      <div className="text-sm leading-6 max-w-2xl text-left text-gray-300">
        <p className="mb-3">
          Full-Stack Developer with expertise in Next.js, TypeScript, and
          Node.js, focused on building scalable, production-ready web
          applications. Currently working as a Full-Stack Software Engineer at &nbsp;
          <span className="italic">Digital Information Pvt Ltd</span>, where I develop enterprise dashboards, e-commerce platforms,
          and AI-powered solutions across the full development lifecycle—from
          frontend development and backend architecture to DevOps. Passionate
          about DevOps, AI agents, and creating autonomous digital products,
          with a strong commitment to continuous learning and adopting modern
          technologies.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-(--accent)" />
            <span>Karachi, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-briefcase-4-line text-(--accent)" />
            <span>3+ Years</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-mail-line text-(--accent)" />
            <span>konain611@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
