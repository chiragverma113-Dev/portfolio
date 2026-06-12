"use client";

import { Project } from "@/src/data/projects";
import { X, ExternalLink, Tag } from "lucide-react";
import { GithubIcon } from "@/src/components/ui/BrandIcons";
import { useEffect } from "react";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal-content">
        {/* Header */}
        <div className="p-6 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold text-xl">{project.title}</h2>
                {project.featured && (
                  <span
                    className="px-2 py-0.5 text-xs font-semibold rounded-full"
                    style={{ background: "#dcfce7", color: "#16a34a" }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                {project.description}
              </p>
            </div>
            <button
              onClick={onClose}
              id="close-modal"
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                color: "var(--fg-muted)",
              }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div>
            <h3
              className="text-xs font-semibold mb-2 flex items-center gap-1.5 uppercase tracking-wider"
              style={{ color: "var(--fg-subtle)" }}
            >
              <Tag size={11} />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-live-${project.id}`}
                className="btn-dark text-sm"
                style={{ padding: "0.625rem 1.25rem" }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-${project.id}`}
                className="btn-outline text-sm"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}
            {project.liveUrl === "#" && project.githubUrl === "#" && (
              <p className="text-sm" style={{ color: "var(--fg-subtle)" }}>
                Links coming soon...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
