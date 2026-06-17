"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/src/components/ui/BrandIcons";

const LINKS = ["About", "Projects", "Qualification"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-t text-center relative"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
      }}
    >
      <style>{`
        .footer-name {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--fg);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.75rem;
        }

        .footer-nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--fg);
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--fg-muted);
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #18181b;
          color: #ffffff;
          transition: transform 0.2s ease, background-color 0.2s ease;
          text-decoration: none;
        }

        .footer-social-link:hover {
          transform: translateY(-2px);
          background: #27272a;
        }

        .dark .footer-social-link {
          background: #27272a;
          color: #f4f4f5;
        }

        .dark .footer-social-link:hover {
          background: #3f3f46;
        }

        .footer-copyright {
          font-size: 0.75rem;
          color: var(--fg-subtle);
        }

        .scroll-top-btn {
          position: absolute;
          right: 3rem;
          bottom: 5rem;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #18181b;
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background-color 0.2s ease;
          z-index: 100;
        }

        .scroll-top-btn:hover {
          transform: translateY(-2px);
          background: #27272a;
        }

        .dark .scroll-top-btn {
          background: #27272a;
          color: #f4f4f5;
        }

        .dark .scroll-top-btn:hover {
          background: #3f3f46;
        }

        @media (max-width: 768px) {
          .footer-nav {
            gap: 1.5rem;
          }
          .scroll-top-btn {
            right: 1.5rem;
            bottom: 4rem;
          }
        }
      `}</style>

      <div className="container">
        <p className="footer-name">Chirag Verma</p>

        {/* Nav links */}
        <div className="footer-nav">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="footer-nav-link"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="footer-socials">
          {[
            { href: "https://github.com/chiragverma113-Dev", label: "GitHub", Icon: GithubIcon, id: "footer-github" },
            { href: "https://www.linkedin.com/in/chirag-verma-817966226?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn", Icon: LinkedinIcon, id: "footer-linkedin" },
            { href: "https://www.instagram.com/chrgvrma?igsh=MXUwYW9sMThwd2w3MQ%3D%3D&utm_source=qr", label: "Instagram", Icon: InstagramIcon, id: "footer-instagram" },
          ].map(({ href, label, Icon, id }) => (
            <a
              key={id}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer-social-link"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          © chiragverma. All rights reserved
        </p>

      </div>

      {/* Scroll To Top Button (Absolute relative to footer viewport) */}
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
