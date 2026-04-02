"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-zinc-100 hover:text-zinc-300 transition-colors">
          <span className="text-cyan-400">&lt;</span>
          Konain
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-cyan-400 bg-zinc-800"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.email}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
