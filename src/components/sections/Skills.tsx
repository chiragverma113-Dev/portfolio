"use client";

import React, { useState } from "react";
import { skillCategories } from "@/src/data/skills";
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import { Brain, Cpu, Palette, Smartphone, LineChart } from "lucide-react";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "React.js": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5L12.4 10.9v4.2H10.8V8.8h1.6l4.1 5.6V8.8h1.6v7.7h-1.6z"/>
    </svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm7.8 13.5c0-.9-.3-1.6-.9-2-.5-.4-1.3-.7-2.3-.9l-.6-.2c-.5-.1-.8-.3-.9-.5-.1-.2-.2-.4-.2-.7 0-.3.1-.5.3-.6s.5-.2.8-.2c.4 0 .7.1.9.3.2.2.3.5.3.8h2c0-.9-.3-1.6-.9-2-.6-.4-1.4-.6-2.4-.6-1 0-1.8.2-2.3.7-.5.5-.8 1.1-.8 1.9 0 .8.3 1.4.8 1.8.5.4 1.3.6 2.3.9l.6.2c.6.1.9.3 1.1.5.2.2.3.5.3.8 0 .4-.1.6-.4.8-.3.2-.6.3-1 .3-.5 0-.8-.1-1.1-.4-.3-.3-.4-.6-.4-1h-2c0 .9.3 1.6.9 2.1.6.5 1.4.7 2.5.7 1.1 0 1.9-.2 2.5-.7s.9-1.2.9-2.1zm8.2-5.5h-5.2v2h1.6v5.8h2V13h1.6v-2z"/>
    </svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10 11.5c0-.9-.3-1.6-.9-2-.5-.4-1.3-.7-2.3-.9l-.6-.2c-.5-.1-.8-.3-.9-.5-.1-.2-.2-.4-.2-.7 0-.3.1-.5.3-.6s.5-.2.8-.2c.4 0 .7.1.9.3.2.2.3.5.3.8h2c0-.9-.3-1.6-.9-2-.6-.4-1.4-.6-2.4-.6-1 0-1.8.2-2.3.7-.5.5-.8 1.1-.8 1.9 0 .8.3 1.4.8 1.8.5.4 1.3.6 2.3.9l.6.2c.6.1.9.3 1.1.5.2.2.3.5.3.8 0 .4-.1.6-.4.8-.3.2-.6.3-1 .3-.5 0-.8-.1-1.1-.4-.3-.3-.4-.6-.4-1h-2c0 .9.3 1.6.9 2.1.6.5 1.4.7 2.5.7 1.1 0 1.9-.2 2.5-.7s.9-1.2.9-2.1zm6-5.5h-2v5.8h-1.6V11H13.8v7.8h5.2V9z"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z"/>
    </svg>
  ),
  "HTML5": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 22L0 2h24l-1.5 20L12 25.5 1.5 22zM12 4.6l-7 1.6.4 4.5H12V4.6zm0 13.1l-4.1-.9-.3-3.2H4.8l.6 6.3 6.6 2.1V17.7zm0-5.6H4.3l.3 3h7.4v-3zm7.7-6.1L12.7 4.6V10.7h7.3l-.3-2.2zM12 17.7v4.6l6.6-2.1.6-6.3h-2.8l-.3 3.2-4.1.9zm0-5.6v3h7.4l.3-3H12z"/>
    </svg>
  ),
  "CSS3": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 22L0 2h24l-1.5 20L12 25.5 1.5 22zM12 4.6l-7 1.6.4 4.5H12V4.6zm0 13.1l-4.1-.9-.3-3.2H4.8l.6 6.3 6.6 2.1V17.7zm0-5.6H4.3l.3 3h7.4v-3zm7.7-6.1L12.7 4.6V10.7h7.3l-.3-2.2zM12 17.7v4.6l6.6-2.1.6-6.3h-2.8l-.3 3.2-4.1.9zm0-5.6v3h7.4l.3-3H12z"/>
    </svg>
  ),
  "Framer Motion": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM12 16h8v8z"/>
    </svg>
  ),
  "Redux": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeDasharray="3 3"/>
      <path d="M16.5 7.5c-2.5-2.5-6.5-2.5-9 0s-2.5 6.5 0 9 6.5 2.5 9 0z"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9v-9.8L12 2zm0 17.1L5.3 15.3V8.3L12 4.4v14.7zm0-14.7l6.7 3.9v7l-6.7 3.8V4.4z"/>
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 11h6a2 2 0 0 1 2 2v2" />
      <circle cx="7" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
    </svg>
  ),
  "MongoDB": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5C12 1.5 7.5 7 7.5 12.5c0 3 2 5.5 4.5 5.5s4.5-2.5 4.5-5.5C16.5 7 12 1.5 12 1.5zm0 14c-1.4 0-2.5-1.1-2.5-2.5 0-2.1 2.5-5.9 2.5-5.9s2.5 3.8 2.5 5.9c0 1.4-1.1 2.5-2.5 2.5zm0 4v3"/>
    </svg>
  ),
  "REST API": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <line x1="9" y1="6" x2="15" y2="6" />
    </svg>
  ),
  "Prisma": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4.6l6.4 12.8H5.6L12 6.6z"/>
    </svg>
  ),
  "Git": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="6" y1="9" x2="6" y2="15" />
      <path d="M6 9a9 9 0 0 1 9 9" />
    </svg>
  ),
  "GitHub": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  "Docker": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 12.5c0-.8.6-1.5 1.5-1.5h1.5v3H3.5C2.6 14 2 13.3 2 12.5zm4.5-1.5h2v3h-2v-3zm3 0h2v3h-2v-3zm3 0h2v3h-2v-3zm3.5-3.5h2v3h-2v-3zM16 11h2v3h-2v-3z"/>
      <path d="M6 16.5C6 15.7 6.7 15 7.5 15h12c.8 0 1.5.7 1.5 1.5S20.3 18 19.5 18h-12C6.7 18 6 17.3 6 16.5z"/>
    </svg>
  ),
  "Vercel": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 22.5H0L12 1.5z"/>
    </svg>
  ),
  "Google Cloud": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.78-3.5-3.5-4-2.28-.67-4.5.73-5 3A4 4 0 0 0 3.5 14c0 2.2 1.8 4 4 4" />
      <path d="M12 12v7M9 16h6" />
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.9 6.5l-3.3-3.1c-.2-.2-.5-.2-.7 0L12 10.9V3c0-.3-.2-.5-.5-.5L9 4.3c-.2.1-.3.5-.3.5v6.1L2.1 5c-.2-.2-.5-.2-.7 0L.1 6.3c-.2.2-.2.5 0 .7l6.7 5-6.7 5c-.2.2-.2.5 0 .7l1.3 1.3c.2.2.5.2.7 0L8.7 13v6.2c0 .2.1.4.3.5l2.5 1.8c.3.2.5 0 .5-.3v-7.9l7.9 7.5c.2.2.5.2.7 0l3.3-3.1c.2-.2.2-.5 0-.7l-7.7-7 7.7-7c.1-.2.1-.5 0-.7z"/>
    </svg>
  ),
  "Figma": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 12a4 4 0 0 1 4-4h4V4a4 4 0 0 0-8 0v8zm0 0a4 4 0 0 0 4 4h4v-4H8zm0 0a4 4 0 0 0-4 4 4 4 0 0 0 8 0v-4H8zm8-8a4 4 0 0 0-4 4v4h4a4 4 0 0 0 0-8zm0 8a4 4 0 0 0-4 4 4 4 0 0 0 4-4z"/>
    </svg>
  ),
  "Linux": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 3 2 5.5 4.5 6.5C10.5 17 11 19 12 22c1-3 1.5-5 2.5-6.5C17 14.5 19 12 19 9c0-3.9-3.1-7-7-7zm0 10.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 7.5 12 7.5 14.5 8.6 14.5 10s-1.1 2.5-2.5 2.5z"/>
    </svg>
  ),
  "Material-UI": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 2.4v19.2l12-6 12 6V2.4L12 8.4z" fill="#0081CB"/>
    </svg>
  ),
  "GitLab": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m23.824 11.604-2.883-8.868a.834.834 0 0 0-1.584 0l-2.883 8.868H7.525L4.642 2.736a.834.834 0 0 0-1.584 0L.176 11.604a1.002 1.002 0 0 0 .364 1.121l10.974 7.973a.817.817 0 0 0 .97 0l10.975-7.973a1.002 1.002 0 0 0 .365-1.121Z" fill="#FC6D26"/>
    </svg>
  ),
  "Netlify": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.09 14.91L6.73 12.8c-.39-.39-.39-1.02 0-1.41L10.91 7.2c.39-.39 1.02-.39 1.41 0l4.18 4.18c.39.39.39 1.02 0 1.41l-4.18 4.18c-.39.38-1.02.38-1.41-.06z" />
    </svg>
  ),
  "Cursor": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" />
      <line x1="13" y1="13" x2="19" y2="19" />
    </svg>
  ),
  "AppScript": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  "SQL": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  "App Sheet": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7l7 5-7 5z" />
    </svg>
  ),
  "Problem-solving": <Brain />,
  "API Integration": <Cpu />,
  "Web Design": <Palette />,
  "Responsive Design": <Smartphone />,
  "Analytical Thinking": <LineChart />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-card)" }}>
      <ScrollReveal className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Skills</h2>
          <p className="section-subtitle text-center">My tech stack</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 px-4" style={{ marginBottom: "3.5rem" }}>
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              id={`skill-tab-${i}`}
              onClick={() => setActiveTab(i)}
              className={`tab ${activeTab === i ? "active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-4xl mx-auto">
          {active.skills.map((skill) => {
            const isWhite = skill.color.toLowerCase() === "#ffffff";
            const color = isWhite ? "var(--fg)" : skill.color;
            const iconNode = SKILL_ICONS[skill.name];
            const styledIcon = iconNode && React.isValidElement(iconNode)
              ? React.cloneElement(iconNode as React.ReactElement<any>, {
                  style: { width: "22px", height: "22px", display: "block" }
                })
              : null;

            return (
              <div
                key={skill.name}
                id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-default group"
                style={{
                  padding: "2rem 1.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.005)",
                }}
                onMouseEnter={(e) => {
                  const glowColor = isWhite ? "var(--fg)" : color;
                  e.currentTarget.style.borderColor = glowColor;
                  // Dynamic brand colored shadow glow
                  e.currentTarget.style.boxShadow = isWhite
                    ? "0 12px 24px -8px rgba(120, 120, 120, 0.2)"
                    : `0 12px 24px -8px ${glowColor}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.005)";
                }}
              >
                {/* Brand icon container */}
                <div
                  className="rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    background: isWhite ? "var(--border)" : `${color}0d`, // ~5% opacity
                    color: color,
                    border: `1px solid ${isWhite ? "var(--border)" : `${color}20`}`, // ~12% opacity
                  }}
                >
                  {styledIcon ?? (
                    <span className="font-bold text-sm tracking-wide">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                {/* Skill Name */}
                <span
                  className="text-xs md:text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-200"
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
