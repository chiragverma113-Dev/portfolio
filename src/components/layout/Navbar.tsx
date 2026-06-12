"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/src/hooks/useScrollSpy";
import ThemeToggle from "@/src/components/ui/ThemeToggle";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/components/ui/BrandIcons";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Portfolio", href: "projects" },
  { label: "Qualification", href: "qualification" },
  { label: "Contact", href: "contact" },
];

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub", id: "social-github" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn", id: "social-linkedin" },
  { icon: Mail, href: "mailto:chirag@example.com", label: "Email", id: "social-email" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter", id: "social-twitter" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* Floating Theme Toggle in the Top Right Corner */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[1100]">
        <ThemeToggle />
      </div>

      <nav className={`navbar ${scrolled ? "scrolled" : ""} flex items-center justify-center`}>
        {/* Centered container housing navigation links and social icons */}
        <div className="flex items-center gap-5 md:gap-7 py-1 overflow-x-auto no-scrollbar justify-center w-full px-2">
          
          {/* Section Page Links with enlarged text size */}
          <div className="flex items-center gap-4 md:gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-1 py-2 text-sm md:text-[15px] lg:text-[16px] font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer select-none"
                style={{
                  background: "none",
                  border: "none",
                  color: active === link.href ? "var(--fg)" : "var(--fg-muted)",
                  fontWeight: active === link.href ? 600 : 400,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-[1px] bg-neutral-300/30 dark:bg-neutral-700/30 shrink-0" />

          {/* Social Profiles */}
          <div className="flex items-center gap-3 md:gap-4">
            {SOCIALS.map(({ icon: Icon, href, label, id }) => (
              <a
                key={id}
                href={href}
                id={`nav-${id}`}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 flex items-center justify-center p-1"
                aria-label={label}
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}
