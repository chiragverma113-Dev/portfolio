"use client";

import { useState } from "react";
import { LayoutDashboard, Code2, Database, ArrowRight, X, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "Website Development",
    desc: "Building fast, responsive, and pixel-perfect websites using modern frameworks like React and Next.js.",
    id: "service-web",
    points: [
      "Craft responsive interfaces with HTML, CSS, and JS.",
      "Create interactive apps using React and Node.js.",
      "Implement intuitive UX design.",
      "Integrate brand elements seamlessly.",
      "Provide mockups aligning with branding.",
    ],
  },
  {
    icon: Code2,
    title: "UI/UX Designer",
    desc: "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
    id: "service-ui",
    points: [
      "Prioritize user needs in design.",
      "Visualize concepts effectively.",
      "Create engaging UX interactions.",
      "Ensure broad user accessibility.",
      "Refine design through feedback.",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Designing and optimizing databases with PostgreSQL and MongoDB for scalable applications.",
    id: "service-db",
    points: [
      "Optimize storage with MongoDB.",
      "Enhance performance with C++.",
      "Ensure robust data protection.",
      "Facilitate smooth transitions.",
      "Design for future growth.",
    ],
  },
];

type Service = (typeof SERVICES)[number];

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="section" style={{ background: "var(--bg-card)" }}>
        <ScrollReveal className="container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">What I offer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} id={svc.id} className="service-card">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      color: "var(--fg)",
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-bold text-base leading-tight mb-1">{svc.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                      {svc.desc}
                    </p>
                  </div>

                  <button
                    className="btn-link mt-auto"
                    onClick={() => setActive(svc)}
                    id={`${svc.id}-viewmore`}
                  >
                    View More <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="modal-overlay"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: "2.5rem 2rem" }}
          >
            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2
              className="font-bold text-center mb-3"
              style={{ fontSize: "1.375rem", color: "var(--fg)" }}
            >
              {active.title}
            </h2>

            {/* Subtitle */}
            <p
              className="text-sm text-center leading-relaxed mb-6"
              style={{ color: "var(--fg-muted)", maxWidth: "22rem", margin: "0 auto 1.5rem" }}
            >
              Service with hands on experience. Providing quality work to clients and companies.
            </p>

            {/* Points */}
            <ul className="flex flex-col gap-4">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.5}
                    style={{ color: "var(--fg-muted)", flexShrink: 0, marginTop: "2px" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
