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
              {/* Developer avatar SVG (replace with <img> tag when you have a real photo) */}
              <svg
                viewBox="0 0 256 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}
              >
                <rect width="256" height="320" fill="#1a1a2e" />
                {/* Background glow */}
                <ellipse cx="128" cy="200" rx="80" ry="60" fill="#2d2d5e" opacity="0.4" />
                {/* Body */}
                <rect x="72" y="180" width="112" height="140" rx="12" fill="#111827" />
                {/* Collar */}
                <rect x="108" y="165" width="40" height="20" rx="4" fill="#e8c09a" />
                {/* Shirt */}
                <rect x="72" y="190" width="112" height="130" rx="10" fill="#1f2937" />
                {/* Head */}
                <ellipse cx="128" cy="138" rx="48" ry="50" fill="#e8c09a" />
                {/* Hair */}
                <ellipse cx="128" cy="100" rx="48" ry="26" fill="#2c1810" />
                <ellipse cx="128" cy="94" rx="44" ry="20" fill="#3d2415" />
                {/* Beard/stubble */}
                <ellipse cx="128" cy="168" rx="30" ry="10" fill="#3d2415" opacity="0.5" />
                {/* Eyes */}
                <ellipse cx="112" cy="135" rx="6" ry="7" fill="#2c1810" />
                <ellipse cx="144" cy="135" rx="6" ry="7" fill="#2c1810" />
                <ellipse cx="113.5" cy="133" rx="2" ry="2" fill="white" />
                <ellipse cx="145.5" cy="133" rx="2" ry="2" fill="white" />
                {/* Eyebrows */}
                <path d="M104 122 Q112 118 120 120" stroke="#2c1810" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M136 120 Q144 118 152 122" stroke="#2c1810" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Nose */}
                <path d="M124 145 Q128 152 132 145" stroke="#c4956a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Mouth */}
                <path d="M116 157 Q128 164 140 157" stroke="#c4956a" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
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
              building a full-featured CRM & automation platform at{" "}
              <strong style={{ color: "var(--fg)" }}>Automate Business</strong> that serves
              50+ enterprise clients — let's engineer your growth.
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
