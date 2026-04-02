import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact | Syed Konain Nasir",
  description: "Get in touch with Syed Konain Nasir for collaborations, opportunities, or inquiries.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 card-hover">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a
                  href={socialLinks.email}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Email</p>
                    <p className="text-zinc-200">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Phone</p>
                    <p className="text-zinc-200">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="text-zinc-200">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>
              
              <div className="space-y-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-zinc-700 group-hover:bg-zinc-600 transition-colors">
                    <Github className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-200">GitHub</p>
                    <p className="text-zinc-500 text-sm">Check out my code</p>
                  </div>
                  <Send className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-200">LinkedIn</p>
                    <p className="text-zinc-500 text-sm">Professional network</p>
                  </div>
                  <Send className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </a>

                <a
                  href={socialLinks.email}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-200">Send a Message</p>
                    <p className="text-zinc-500 text-sm">I&apos;ll get back to you</p>
                  </div>
                  <Send className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-4">Let&apos;s Talk</h2>
              <p className="text-zinc-400 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Whether you have a question, 
                a project idea, or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-200 mb-2">What I can help with:</h3>
                  <ul className="space-y-2">
                    {[
                      "Full-stack web development",
                      "Next.js & React projects",
                      "API design & integration",
                      "Database architecture",
                      "DevOps & deployment",
                      "AI-powered solutions",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-zinc-500 text-sm mb-4">
                    Average response time: <span className="text-cyan-400">Within 24 hours</span>
                  </p>
                  <a
                    href={socialLinks.email}
                    className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-semibold">Currently Available</h3>
              </div>
              <p className="text-zinc-400 text-sm">
                I&apos;m open to freelance projects, contract work, and full-time opportunities. 
                Let&apos;s discuss how I can contribute to your team or project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
