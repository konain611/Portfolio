import { experience } from "@/lib/data";
import { Briefcase, Building, Calendar, ExternalLink, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Experience | Syed Konain Nasir",
  description: "View the professional work experience and career history of Syed Konain Nasir.",
};

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            My professional journey and career highlights
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`relative md:flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-zinc-950 hidden md:block" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10">
                          <Building className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-100">
                            {job.title}
                          </h3>
                          <p className="text-zinc-400 text-sm">{job.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 mb-4">{job.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zinc-400 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Projects */}
                    {job.projects && job.projects.length > 0 && (
                      <div className="pt-4 border-t border-zinc-800">
                        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                          <Briefcase className="w-4 h-4" />
                          <span>Projects Delivered</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.projects.map((project) => (
                            <a
                              key={project.name}
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 text-sm transition-colors"
                            >
                              {project.name}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">What I&apos;ve Learned</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Building production-ready applications at scale",
              "Working with cross-functional remote teams",
              "Implementing secure authentication & payment systems",
              "Optimizing performance with CDN & caching strategies",
              "Self-hosting and managing server infrastructure",
              "Balancing technical debt with feature development",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                <span className="text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
