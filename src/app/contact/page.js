import { personalInfo, socialLinks } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiNpmjsFill } from "react-icons/ri";

export const metadata = {
  title: "Contact | Syed Konain Nasir",
  description: "Get in touch with Syed Konain Nasir for collaborations, opportunities, or inquiries.",
};

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: socialLinks.email,
      description: "Best for detailed inquiries",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: "Available during business hours",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      description: "Open to remote work",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const services = [
    "Full-stack web development",
    "Next.js & React projects",
    "API design & integration",
    "Database architecture",
    "DevOps & deployment",
    "AI-powered solutions",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-secondary transition-colors ${
                      method.href ? "hover:bg-secondary/80 cursor-pointer" : ""
                    }`}
                    {...(method.href ? { href: method.href, target: method.href.startsWith("http") ? "_blank" : undefined } : {})}
                  >
                    <div className={`p-2 rounded-lg ${method.bgColor}`}>
                      <method.icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground text-sm">{method.label}</p>
                      <p className="text-foreground font-medium">{method.value}</p>
                      {/* <p className="text-muted-foreground text-xs">{method.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>

              <div className="space-y-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary">
                    <Github className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">GitHub</p>
                    <p className="text-muted-foreground text-sm">Check out my code</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={socialLinks.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary">
                    <RiNpmjsFill className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">Npm</p>
                    <p className="text-muted-foreground text-sm">Check out my packages</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <FaLinkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">Professional network</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <BsTwitterX className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">X (Twitter)</p>
                    <p className="text-muted-foreground text-sm">Social media</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={socialLinks.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <IoLogoInstagram className="w-5 h-5 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">Instagram</p>
                    <p className="text-muted-foreground text-sm">Social media</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={socialLinks.email}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">Send a Message</p>
                    <p className="text-muted-foreground text-sm">I&apos;ll get back to you</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-secondary border border-border">
              <h2 className="text-2xl font-semibold mb-4">Let&apos;s Talk</h2>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Whether you have a question,
                a project idea, or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">What I can help with:</h3>
                  <ul className="space-y-2">
                    {services.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Clock className="w-4 h-4" />
                    Average response time: <span className="text-primary font-medium">Within 24 hours</span>
                  </div>
                  <a
                    href={socialLinks.email}
                    className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-semibold">Currently Available</h3>
              </div>
              <p className="text-muted-foreground text-sm">
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
