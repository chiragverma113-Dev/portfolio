"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/src/data/projects";
import ProjectModal from "@/src/components/ui/ProjectModal";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const FILTERS = ["All", "React", "Next.js", "CSS", "HTML"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  const renderMockup = (projectId: number) => {
    switch (projectId) {
      case 1: // Automate Business Platform (CRM)
        return (
          <div className="mock-crm">
            <div className="mock-sidebar">
              <div className="mock-sidebar-dot" />
              <div className="mock-sidebar-line" style={{ width: "60%" }} />
              <div className="mock-sidebar-line" style={{ width: "80%" }} />
              <div className="mock-sidebar-line" style={{ width: "50%" }} />
            </div>
            <div className="mock-main">
              <div className="mock-header">
                <div className="mock-header-search" />
                <div className="mock-header-avatar" />
              </div>
              <div className="mock-grid-crm">
                <div className="mock-card-crm">
                  <div className="mock-card-title" />
                  <div className="mock-card-value" style={{ width: "40%" }} />
                </div>
                <div className="mock-card-crm">
                  <div className="mock-card-title" />
                  <div className="mock-card-value" style={{ width: "60%" }} />
                </div>
              </div>
              <div className="mock-chart-crm">
                <div className="mock-chart-bar" style={{ height: "40%" }} />
                <div className="mock-chart-bar" style={{ height: "70%" }} />
                <div className="mock-chart-bar" style={{ height: "50%" }} />
                <div className="mock-chart-bar" style={{ height: "90%" }} />
              </div>
            </div>
          </div>
        );
      case 2: // E-Commerce Dashboard
        return (
          <div className="mock-ecommerce">
            <div className="mock-top-stats">
              <div className="mock-stat-box" />
              <div className="mock-stat-box" />
              <div className="mock-stat-box" />
            </div>
            <div className="mock-graph-container">
              <svg viewBox="0 0 100 40" className="mock-svg-chart">
                <path d="M 0,35 Q 25,10 50,25 T 100,5" fill="none" stroke="var(--fg-muted)" strokeWidth="1.5" />
                <circle cx="50" cy="25" r="2" fill="var(--fg)" />
                <circle cx="100" cy="5" r="2" fill="var(--fg)" />
              </svg>
              <div className="mock-y-axis">
                <div className="mock-y-line" />
                <div className="mock-y-line" />
                <div className="mock-y-line" />
              </div>
            </div>
            <div className="mock-sales-table">
              <div className="mock-table-row">
                <div className="mock-cell" style={{ width: "45%" }} />
                <div className="mock-cell-price" />
              </div>
              <div className="mock-table-row">
                <div className="mock-cell" style={{ width: "35%" }} />
                <div className="mock-cell-price" />
              </div>
            </div>
          </div>
        );
      case 3: // Portfolio Website
        return (
          <div className="mock-portfolio-page">
            <div className="mock-port-header">
              <div className="mock-port-logo" />
              <div className="mock-port-nav">
                <div className="mock-port-dot" />
                <div className="mock-port-dot" />
                <div className="mock-port-dot" />
              </div>
            </div>
            <div className="mock-port-hero">
              <div className="mock-port-hero-title" />
              <div className="mock-port-hero-sub" />
              <div className="mock-port-hero-btn" />
            </div>
            <div className="mock-port-grid">
              <div className="mock-port-card" />
              <div className="mock-port-card" />
            </div>
          </div>
        );
      case 4: // Task Management App (Kanban)
        return (
          <div className="mock-kanban">
            <div className="mock-kb-header">
              <div className="mock-kb-title" />
            </div>
            <div className="mock-kb-board">
              <div className="mock-kb-col">
                <div className="mock-kb-col-title" />
                <div className="mock-kb-card"><div className="mock-kb-card-line" /><div className="mock-kb-card-tags" /></div>
                <div className="mock-kb-card"><div className="mock-kb-card-line" style={{ width: "80%" }} /></div>
              </div>
              <div className="mock-kb-col">
                <div className="mock-kb-col-title" />
                <div className="mock-kb-card"><div className="mock-kb-card-line" style={{ width: "60%" }} /><div className="mock-kb-card-tags" /></div>
              </div>
              <div className="mock-kb-col">
                <div className="mock-kb-col-title" />
                <div className="mock-kb-card"><div className="mock-kb-card-line" style={{ width: "40%" }} /></div>
              </div>
            </div>
          </div>
        );
      case 5: // Weather Forecast App
        return (
          <div className="mock-weather">
            <div className="mock-weather-main">
              <div className="mock-weather-icon-sun" />
              <div className="mock-weather-temp">24°</div>
              <div className="mock-weather-desc" />
            </div>
            <div className="mock-weather-forecast">
              <div className="mock-forecast-day"><div className="mock-day-dot" /><div className="mock-day-temp" /></div>
              <div className="mock-forecast-day"><div className="mock-day-dot" /><div className="mock-day-temp" /></div>
              <div className="mock-forecast-day"><div className="mock-day-dot" /><div className="mock-day-temp" /></div>
            </div>
          </div>
        );
      case 6: // Movie Discovery Platform
        return (
          <div className="mock-movie">
            <div className="mock-movie-banner">
              <div className="mock-movie-banner-title" />
              <div className="mock-movie-banner-btn" />
            </div>
            <div className="mock-movie-row-title" />
            <div className="mock-movie-row">
              <div className="mock-movie-card" />
              <div className="mock-movie-card" />
              <div className="mock-movie-card" />
              <div className="mock-movie-card" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-card)" }}>
      <style>{`
        /* ────────────────────────────────────────────────
           PROJECT MOCKUPS (CSS-based Layouts)
        ──────────────────────────────────────────────── */
        .project-card-custom {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 1.25rem;
          cursor: pointer;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card-custom:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-3px);
        }
        .project-screenshot-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .mock-browser-bar {
          height: 28px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
          flex-shrink: 0;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }
        .mock-browser-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .mock-browser-address {
          flex: 1;
          margin: 0 24px;
          height: 14px;
          border-radius: 4px;
          background: var(--bg);
          max-width: 60%;
        }

        .mock-content-viewport {
          position: absolute;
          top: 28px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg);
          padding: 10px;
          font-family: sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* 1. CRM Mockup */
        .mock-crm {
          display: flex;
          height: 100%;
          gap: 8px;
        }
        .mock-sidebar {
          width: 45px;
          background: var(--bg-card);
          border-radius: 6px;
          border: 1px solid var(--border);
          padding: 6px 4px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-sizing: border-box;
        }
        .mock-sidebar-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.15;
          margin-bottom: 4px;
        }
        .mock-sidebar-line {
          height: 4px;
          border-radius: 2px;
          background: var(--fg-subtle);
          opacity: 0.2;
        }
        .mock-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mock-header {
          height: 20px;
          background: var(--bg-card);
          border-radius: 6px;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
        }
        .mock-header-search {
          width: 50px;
          height: 8px;
          border-radius: 4px;
          background: var(--bg);
        }
        .mock-header-avatar {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.3;
        }
        .mock-grid-crm {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .mock-card-crm {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mock-card-title {
          width: 50%;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.3;
          border-radius: 2px;
        }
        .mock-card-value {
          height: 8px;
          background: var(--accent);
          opacity: 0.4;
          border-radius: 2px;
        }
        .mock-chart-crm {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 6px;
        }
        .mock-chart-bar {
          flex: 1;
          background: var(--accent);
          opacity: 0.25;
          border-radius: 3px 3px 0 0;
          transition: transform 0.3s ease;
        }
        .project-card:hover .mock-chart-bar {
          opacity: 0.5;
        }

        /* 2. E-Commerce Mockup */
        .mock-ecommerce {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 8px;
        }
        .mock-top-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 6px;
        }
        .mock-stat-box {
          height: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
        }
        .mock-graph-container {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          position: relative;
          padding: 8px;
          box-sizing: border-box;
        }
        .mock-svg-chart {
          width: 100%;
          height: 100%;
          stroke: var(--accent);
          opacity: 0.5;
        }
        .mock-y-axis {
          position: absolute;
          inset: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          pointer-events: none;
        }
        .mock-y-line {
          height: 1px;
          width: 100%;
          background: var(--border);
          opacity: 0.5;
        }
        .mock-sales-table {
          height: 38px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mock-table-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mock-cell {
          width: 40%;
          height: 5px;
          background: var(--fg-muted);
          opacity: 0.2;
          border-radius: 2px;
        }
        .mock-cell-price {
          width: 15px;
          height: 5px;
          background: var(--accent);
          opacity: 0.4;
          border-radius: 2px;
        }

        /* 3. Portfolio Mockup */
        .mock-portfolio-page {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
          border-radius: 6px;
          border: 1px solid var(--border);
          padding: 8px;
          box-sizing: border-box;
          gap: 12px;
        }
        .mock-port-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mock-port-logo {
          width: 25px;
          height: 6px;
          background: var(--fg);
          border-radius: 2px;
        }
        .mock-port-nav {
          display: flex;
          gap: 6px;
        }
        .mock-port-dot {
          width: 12px;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.4;
          border-radius: 2px;
        }
        .mock-port-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
          padding: 10px 0;
        }
        .mock-port-hero-title {
          width: 70%;
          height: 8px;
          background: var(--fg);
          border-radius: 4px;
        }
        .mock-port-hero-sub {
          width: 45%;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.4;
          border-radius: 2px;
        }
        .mock-port-hero-btn {
          width: 35px;
          height: 10px;
          background: var(--fg);
          border-radius: 5px;
          margin-top: 4px;
        }
        .mock-port-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .mock-port-card {
          height: 30px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 4px;
        }

        /* 4. Kanban Mockup */
        .mock-kanban {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 8px;
        }
        .mock-kb-header {
          height: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          display: flex;
          align-items: center;
          padding: 0 8px;
        }
        .mock-kb-title {
          width: 40px;
          height: 6px;
          background: var(--fg);
          opacity: 0.3;
          border-radius: 2px;
        }
        .mock-kb-board {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 6px;
        }
        .mock-kb-col {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mock-kb-col-title {
          width: 60%;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.3;
          border-radius: 2px;
          margin-bottom: 2px;
        }
        .mock-kb-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 5px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mock-kb-card-line {
          width: 100%;
          height: 4px;
          background: var(--fg);
          opacity: 0.2;
          border-radius: 2px;
        }
        .mock-kb-card-tags {
          display: flex;
          gap: 3px;
        }
        .mock-kb-card-tags::before {
          content: '';
          width: 15px;
          height: 3px;
          background: var(--accent);
          opacity: 0.4;
          border-radius: 1px;
        }

        /* 5. Weather Mockup */
        .mock-weather {
          display: flex;
          height: 100%;
          gap: 12px;
          box-sizing: border-box;
          align-items: center;
        }
        .mock-weather-main {
          flex: 1.2;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }
        .mock-weather-icon-sun {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
          transition: transform 0.5s ease;
        }
        .project-card:hover .mock-weather-icon-sun {
          transform: rotate(45deg) scale(1.1);
        }
        .mock-weather-temp {
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--fg);
          line-height: 1;
        }
        .mock-weather-desc {
          width: 40px;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.3;
          border-radius: 2px;
        }
        .mock-weather-forecast {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mock-forecast-day {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mock-day-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f59e0b;
        }
        .mock-day-temp {
          width: 15px;
          height: 5px;
          background: var(--fg-muted);
          opacity: 0.3;
          border-radius: 2.5px;
        }

        /* 6. Movie Mockup */
        .mock-movie {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 6px;
        }
        .mock-movie-banner {
          height: 50px;
          background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), #333;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px;
          gap: 4px;
          box-sizing: border-box;
        }
        .mock-movie-banner-title {
          width: 60px;
          height: 6px;
          background: #fff;
          border-radius: 3px;
        }
        .mock-movie-banner-btn {
          width: 25px;
          height: 8px;
          background: #dc2626;
          border-radius: 2px;
        }
        .mock-movie-row-title {
          width: 40px;
          height: 4px;
          background: var(--fg-muted);
          opacity: 0.4;
          border-radius: 2.5px;
          margin-top: 2px;
        }
        .mock-movie-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }
        .mock-movie-card {
          aspect-ratio: 2/3;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          transition: transform 0.2s ease;
        }
        .project-card:hover .mock-movie-card {
          transform: scale(1.05);
        }

        /* ────────────────────────────────────────────────
           TECH BADGES
        ──────────────────────────────────────────────── */
        .project-tech-tag {
          font-size: 10px;
          font-weight: 500;
          color: var(--fg-muted);
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
          transition: all 0.2s ease;
        }
        .project-card:hover .project-tech-tag {
          border-color: var(--border-hover);
          color: var(--fg);
        }
      `}</style>

      <ScrollReveal className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Recent Works</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2" style={{ marginBottom: "2.5rem" }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filtered.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="project-card-custom"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              {/* Screenshot mockup */}
              <div className="project-screenshot-wrapper">
                {/* Mock browser chrome */}
                <div className="mock-browser-bar">
                  <div className="mock-browser-dot" style={{ background: "#ff5f56" }} />
                  <div className="mock-browser-dot" style={{ background: "#febc2e" }} />
                  <div className="mock-browser-dot" style={{ background: "#27c840" }} />
                  <div className="mock-browser-address" />
                </div>
                
                {/* Mock content viewport */}
                <div className="mock-content-viewport">
                  {renderMockup(project.id)}
                </div>

                {project.featured && (
                  <span
                    className="absolute top-9 right-3 px-2 py-0.5 text-xs font-semibold rounded"
                    style={{
                      background: "#22c55e",
                      color: "white",
                      fontSize: "0.7rem",
                      zIndex: 100,
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-semibold text-base md:text-lg tracking-tight" style={{ color: "var(--fg)" }}>
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="btn-link text-sm font-semibold flex items-center gap-1" style={{ color: "var(--fg-muted)" }}>
                    Demo <ArrowRight size={14} />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="project-tech-tag"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
