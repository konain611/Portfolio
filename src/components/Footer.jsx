import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-zinc-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-zinc-500 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={socialLinks.email}
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
