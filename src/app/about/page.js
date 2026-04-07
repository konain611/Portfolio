import { personalInfo, education, socialLinks, interests } from "@/lib/data";
import { Code, Terminal, Database, Cloud, GraduationCap, Award, MapPin, Briefcase, User } from "lucide-react";

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
          <p className="text-muted-foreground text-lg">
            Get to know more about my background and journey
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Who I Am
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                I&apos;m a passionate Full-Stack Developer with a strong foundation in modern web technologies.
                My expertise lies in building scalable, production-ready applications using Next.js, TypeScript,
                and Node.js.
              </p>
              <p>
                Currently working as a Full-Stack Software Engineer at Diginfo, I&apos;ve had the opportunity to
                deliver real-world systems including enterprise dashboards, e-commerce platforms, and AI-powered
                solutions. My work involves everything from frontend UI development to backend architecture and
                DevOps practices.
              </p>
              <p>
                I have a strong interest in DevOps, AI agents, and building autonomous digital products.
                I&apos;m constantly learning and exploring new technologies to stay ahead in this ever-evolving field.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-card border border-border card-hover">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground">{personalInfo.location}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border card-hover">
              <Briefcase className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-1">Experience</h3>
              <p className="text-muted-foreground">{personalInfo.experienceYears}+ Years</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border card-hover">
              <Code className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-1">Focus</h3>
              <p className="text-muted-foreground">Full-Stack Dev</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border card-hover">
              <Award className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-1">Education</h3>
              <p className="text-muted-foreground">BS Computer Science</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education & Certifications
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  {(edu.period || edu.status) && (
                    <span className="text-muted-foreground text-sm mt-1 md:mt-0">
                      {edu.period || edu.status}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-3">{edu.institution}</p>
                {edu.details && (
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map((detail, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
                {edu.status && (
                  <span className="inline-block mt-5 px-3 py-1 font-semibold rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {edu.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <div className="p-6 md:p-8 rounded-2xl bg-secondary border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              Interests & Focus Areas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
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
