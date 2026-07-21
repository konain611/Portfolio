const socialLinks = [
  {
    href: "https://github.com/konain611",
    label: "GitHub",
    icon: "ri-github-fill",
  },
  {
    href: "https://www.npmjs.com/~syedkonainnasir",
    label: "NPM",
    icon: "ri-npmjs-line",
  },
  {
    href: "https://www.linkedin.com/in/syedkonainnasir/",
    label: "LinkedIn",
    icon: "ri-linkedin-box-fill",
  },
  {
    href: "https://x.com/syedkonain_7",
    label: "X",
    icon: "ri-twitter-x-fill",
  },
  {
    href: "mailto:konain611@gmail.com",
    label: "Email",
    icon: "ri-mail-line",
  },
  {
    href: "tel:+923333368339",
    label: "Contact",
    icon: "ri-phone-line",
  },
];

export default function Social() {
  return (
   <div className="overflow-hidden rounded-lg ">
  <div className="flex flex-col divide-y divide-(--border)/40">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        aria-label={link.label}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center justify-between gap-3 px-3 py-[0.5rem] text-(--foreground) transition-colors hover:bg-(--accent)/10 hover:text-(--accent) focus-visible:bg-(--accent)/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/50"
      >
        <div className="flex items-center gap-3">
          <i className={`${link.icon} text-lg text-(--accent) transition-colors group-hover:text-(--accent)`} />
          <span className="text-sm font-medium">{link.label}</span>
        </div>
        <i className="ri-arrow-right-up-line text-base opacity-0 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    ))}
  </div>
</div>
  );
}
