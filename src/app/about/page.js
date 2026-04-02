import { personalInfo, education, socialLinks } from "@/lib/data";
import { Code, Terminal, Database, Cloud, GraduationCap, Award } from "lucide-react";

export const metadata = {
  title: "About | Syed Konain Nasir",
  description: "Learn more about Syed Konain Nasir, a Full-Stack Developer specializing in Next.js, TypeScript, and modern web architectures.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Get to know more about my background and journey
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-cyan-400" />
              Who I Am
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I&apos;m a passionate Full-Stack Developer with a strong foundation in modern web technologies. 
              My expertise lies in building scalable, production-ready applications using Next.js, TypeScript, 
              and Node.js.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Currently working as a Full-Stack Software Engineer at Diginfo, I&apos;ve had the opportunity to 
              deliver real-world systems including enterprise dashboards, e-commerce platforms, and AI-powered 
              solutions. My work involves everything from frontend UI development to backend architecture and 
              DevOps practices.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I have a strong interest in DevOps, AI agents, and building autonomous digital products. 
              I&apos;m constantly learning and exploring new technologies to stay ahead in this ever-evolving field.
            </p>
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
              <Terminal className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-zinc-500">{personalInfo.location}</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
              <Database className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Experience</h3>
              <p className="text-zinc-500">3+ Years</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
              <Cloud className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Focus</h3>
              <p className="text-zinc-500">Full-Stack Dev</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
              <Award className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Education</h3>
              <p className="text-zinc-500">BS Computer Science</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Education & Certifications
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {edu.degree}
                  </h3>
                  {(edu.period || edu.status) && (
                    <span className="text-zinc-500 text-sm mt-1 md:mt-0">
                      {edu.period || edu.status}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 mb-3">{edu.institution}</p>
                {edu.details && (
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
                {edu.status && (
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                    {edu.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mt-16">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Interests & Focus Areas</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "DevOps", desc: "CI/CD, Infrastructure, Automation" },
                { title: "AI Agents", desc: "Autonomous systems, RAG, LLMs" },
                { title: "Web Architecture", desc: "Scalable, modern web apps" },
                { title: "Open Source", desc: "Contributing & building tools" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <div>
                    <h3 className="font-medium text-zinc-200">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
