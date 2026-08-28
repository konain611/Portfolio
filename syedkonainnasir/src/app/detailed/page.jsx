import DeveloperHome from "@/components/DeveloperHome";
import Link from "next/link";

const pages = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/playground", label: "Playground" },
];

export default function DetailedPage() {
  return (
    // <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
    //   <div className="border-l-4 border-(--accent) pl-5 sm:pl-8">
    //     <p className="text-sm font-semibold uppercase tracking-[0.3em] text-(--accent)">
    //       Modern detailed view
    //     </p>
    //     <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight text-foreground sm:text-6xl">
    //       Syed Konain Nasir
    //     </h1>
    //     <p className="mt-5 max-w-2xl text-lg leading-8 text-(--foreground)">
    //       Explore the portfolio through detailed pages covering my work, skills, experience, and projects.
    //     </p>
    //   </div>

    //   <nav aria-label="Detailed portfolio pages" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    //     {pages.map((page) => (
    //       <Link
    //         key={page.href}
    //         href={page.href}
    //         className="border border-(--border)/50 p-5 text-lg font-semibold transition hover:border-(--accent) hover:bg-(--accent) hover:text-background"
    //       >
    //         {page.label}
    //         <i className="ri-arrow-right-line ml-3 text-(--accent)" aria-hidden="true" />
    //       </Link>
    //     ))}
    //   </nav>
    // </main>
    <DeveloperHome />
  );
}
