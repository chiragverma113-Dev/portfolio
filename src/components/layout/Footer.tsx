"use client";

import { GithubIcon, LinkedinIcon } from "@/src/components/ui/BrandIcons";

const LINKS = ["About", "Projects", "Qualification"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 border-t text-center"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="container">
        <p className="font-bold text-base mb-5">Chirag Verma</p>

        {/* Nav links */}
        <div className="flex justify-center gap-8 mb-5">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium transition-colors"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-muted)",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-6">
          {[
            { href: "https://github.com", label: "GitHub", Icon: GithubIcon, id: "footer-github" },
            { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon, id: "footer-linkedin" },
          ].map(({ href, label, Icon, id }) => (
            <a
              key={id}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="floating-social-icon"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
          © {new Date().getFullYear()} Chirag Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
