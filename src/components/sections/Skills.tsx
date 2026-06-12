"use client";

import { useState } from "react";
import { skillCategories } from "@/src/data/skills";

const SKILL_ABBR: Record<string, string> = {
  "React.js": "⚛", "Next.js": "▲", "TypeScript": "TS", "JavaScript": "JS",
  "Tailwind CSS": "TW", "HTML5": "H5", "CSS3": "C3", "Framer Motion": "FM",
  "Redux": "RX", "Node.js": "N", "Express.js": "EX", "PostgreSQL": "PG",
  "MongoDB": "MG", "REST API": "API", "Prisma": "PR", "Git": "G",
  "GitHub": "GH", "Docker": "DK", "Vercel": "VL", "Google Cloud": "GC",
  "VS Code": "VS", "Figma": "FG", "Linux": "LX",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-card)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My tech stack</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {active.skills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="card flex flex-col items-center gap-2 p-3 text-center cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black"
                style={{
                  background: `${skill.color}15`,
                  color: skill.color,
                  border: `1px solid ${skill.color}30`,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {SKILL_ABBR[skill.name] ?? skill.name.slice(0, 2)}
              </div>
              <span
                className="text-xs font-medium leading-tight"
                style={{ color: "var(--fg)" }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
