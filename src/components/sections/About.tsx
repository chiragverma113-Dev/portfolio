import { Download, Briefcase, CheckCircle, Headphones } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const STATS = [
  { icon: Briefcase, label: "Experience", value: "3+ Years Working" },
  { icon: CheckCircle, label: "Completed", value: "6 + Projects" },
  { icon: Headphones, label: "Support", value: "Online 24/7" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-card)" }}>
      <ScrollReveal className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Left — photo */}
          <div className="flex justify-center md:justify-start">
            <div
              className="w-64 h-80 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg)",
              }}
            >
              {/* Real developer photo */}
              <img
                src="/Me.png"
                alt="Chirag Verma"
                className="w-full h-full object-cover"
                style={{ width: "100%", height: "100%", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6">
            {/* Stat badges */}
            <div className="flex gap-3">
              {STATS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="stat-badge">
                  <Icon size={18} style={{ color: "var(--fg-muted)" }} />
                  <span className="text-xs font-semibold" style={{ color: "var(--fg)" }}>
                    {label}
                  </span>
                  <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              I turn complex ideas into scalable web products with{" "}
              <strong style={{ color: "var(--fg)" }}>Next.js and React</strong>. Currently
              building modern web solutions and optimizing scalable features for the{" "}
              <strong style={{ color: "var(--fg)" }}>Automate Business</strong> platform at{" "}
              <strong style={{ color: "var(--fg)" }}>Zillion Analytics Private Limited</strong> — let's engineer your growth.
            </p>

            <a href="/resume.pdf" download id="about-download-cv" className="btn-dark w-fit">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
