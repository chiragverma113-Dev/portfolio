"use client";

import { useEffect, useRef } from "react";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import { experiences } from "@/src/data/experience";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="section"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <ScrollReveal>
          <SectionHeading
            tag="Experience"
            title="Where I've worked"
            subtitle="My professional journey — from freelancing to building enterprise products."
            center
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "var(--border)" }}>
            <div
              ref={lineRef}
              className="timeline-line"
              style={{ background: "linear-gradient(180deg, var(--primary), var(--accent))" }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 150}>
                <div className="relative pl-16">
                  {/* Dot */}
                  <div
                    className="absolute left-3.5 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: "var(--surface)",
                      borderColor: exp.current ? "var(--primary)" : "var(--border)",
                      boxShadow: exp.current ? "0 0 12px var(--primary-glow)" : "none",
                    }}
                  >
                    {exp.current && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--primary)", animation: "pulse 2s ease infinite" }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3
                            className="text-xl font-bold"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: "var(--primary-glow)",
                                color: "var(--primary-light)",
                                border: "1px solid rgba(139,92,246,0.3)",
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
                          <span
                            className="font-semibold"
                            style={{ color: "var(--primary-light)" }}
                          >
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <Calendar size={11} />
                        {exp.startDate} — {exp.endDate}
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                          <CheckCircle
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--primary)" }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: "var(--surface-2)",
                            border: "1px solid var(--border)",
                            color: "var(--muted)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
