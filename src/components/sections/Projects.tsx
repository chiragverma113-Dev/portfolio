"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/src/data/projects";
import ProjectModal from "@/src/components/ui/ProjectModal";

const FILTERS = ["All", "React", "Next.js", "CSS", "HTML"];

// Gradient placeholder colors for screenshots
const PLACEHOLDER_COLORS: Record<string, string> = {
  "from-violet-600 via-purple-600 to-blue-600": "#7c3aed",
  "from-emerald-500 via-teal-500 to-cyan-500": "#10b981",
  "from-orange-500 via-pink-500 to-rose-500": "#f97316",
  "from-blue-500 via-indigo-500 to-violet-500": "#3b82f6",
  "from-sky-500 via-blue-500 to-indigo-500": "#0ea5e9",
  "from-red-600 via-rose-500 to-pink-500": "#dc2626",
};

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Recent Works</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(".", "-")}`}
              onClick={() => setFilter(f)}
              className={`tab ${filter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filtered.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="project-card"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              {/* Screenshot placeholder */}
              <div
                className="project-screenshot flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${PLACEHOLDER_COLORS[project.gradient] ?? "#ddd"}22, ${PLACEHOLDER_COLORS[project.gradient] ?? "#ddd"}44)`,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Mock browser chrome */}
                <div className="absolute inset-0 flex flex-col">
                  <div
                    className="h-7 flex items-center px-3 gap-1.5 flex-shrink-0"
                    style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f56" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: "#27c840" }} />
                    <div
                      className="flex-1 mx-2 h-3.5 rounded"
                      style={{ background: "var(--bg)", maxWidth: "60%" }}
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="text-5xl font-black opacity-10"
                      style={{ color: PLACEHOLDER_COLORS[project.gradient] ?? "#999" }}
                    >
                      {project.title.slice(0, 1)}
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <span
                    className="absolute top-9 right-3 px-2 py-0.5 text-xs font-semibold rounded"
                    style={{
                      background: "#22c55e",
                      color: "white",
                      fontSize: "0.7rem",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{project.title}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs"
                        style={{ color: "var(--fg-subtle)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-link text-xs">
                  Demo <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
