export default function Header() {
    const socialLinks = [
        { href: "https://github.com", label: "GitHub", icon: "ri-github-fill" },
        { href: "https://www.linkedin.com", label: "LinkedIn", icon: "ri-linkedin-fill" },
        { href: "https://x.com", label: "X", icon: "ri-twitter-x-fill" },
    ];

    return (
        <div className="w-full max-w-[97%] mx-auto min-h-20 border-l-4 border-(--border) pl-2 md:pl-4 pt-2 pb-4 mt-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start">
                <h1 className="text-left text-4xl font-bold uppercase">Syed Konain Nasir</h1>
                <p className="text-left text-sm font-normal mt-2 max-w-4xl text-(--foreground)">
                    Full Stack Developer with a Bachelor's in Computer Science. Focused on modern web development, system design, DevSecOps practices, and AI agent development.
                </p>
            </div>

            <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border)/60 text-(--accent) transition hover:bg-(--accent) hover:text-background"
                    >
                        <i className={`${link.icon} text-lg`} />
                    </a>
                ))}

                <a
                    href="/resume.pdf"
                    download
                    aria-label="Download resume"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-red-600/60 text-red-500 transition hover:bg-red-600 hover:text-white"
                >
                    <i className="ri-download-line text-lg" />
                </a>
            </div>
        </div>
    );
}