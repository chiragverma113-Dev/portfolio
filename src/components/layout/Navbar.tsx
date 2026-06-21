"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/src/hooks/useScrollSpy";
import ThemeToggle from "@/src/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/src/components/ui/BrandIcons";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Portfolio", href: "projects" },
  { label: "Qualification", href: "qualification" },
  { label: "Contact", href: "contact" },
];

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/chiragverma113-Dev", label: "GitHub", id: "social-github" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/chirag-verma-817966226?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn", id: "social-linkedin" },
  { icon: InstagramIcon, href: "https://www.instagram.com/chrgvrma?igsh=MXUwYW9sMThwd2w3MQ%3D%3D&utm_source=qr", label: "Instagram", id: "social-instagram" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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

      {/* Floating Theme Toggle in the Top Right Corner - desktop only */}
      <div className="hidden md:block fixed top-4 right-4 md:top-6 md:right-6 z-[1100]">
        <ThemeToggle />
      </div>

      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""} flex flex-col justify-center`}
        style={{
          height: menuOpen ? "auto" : undefined,
          borderRadius: menuOpen ? "24px" : undefined,
          padding: menuOpen ? "1.5rem 1.5rem" : undefined,
          maxHeight: menuOpen ? "450px" : scrolled ? "50px" : "56px",
          transition: "all 0.3s ease-in-out",
          overflow: "hidden"
        }}
      >
        {/* Mobile Header Row */}
        <div className="flex items-center justify-between w-full md:hidden h-8">
          <button
            onClick={() => {
              scrollTo("home");
              setMenuOpen(false);
            }}
            className="text-[14px] sm:text-[15px] font-bold tracking-wider uppercase text-neutral-800 dark:text-neutral-200"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Chirag Verma
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white p-1"
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop navigation bar & Mobile vertical menu */}
        <div
          className={`${menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-4 md:gap-7 py-1 w-full justify-center ${menuOpen ? "mt-4 animate-fade-in" : ""
            }`}
        >
          {/* Section links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollTo(link.href);
                  setMenuOpen(false);
                }}
                className="relative px-1 py-1.5 text-sm md:text-[15px] lg:text-[16px] font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer select-none"
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

          {/* Divider line */}
          <div className="hidden md:block h-5 w-[1px] bg-neutral-300/30 dark:bg-neutral-700/30 shrink-0" />
          <div className="block md:hidden h-[1px] w-full bg-neutral-300/20 dark:bg-neutral-700/20 shrink-0 my-2" />

          {/* Social icons */}
          <div className="flex items-center gap-3.5 justify-center py-1">
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
