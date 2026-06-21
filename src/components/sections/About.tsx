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
      <ScrollReveal className="w-full px-6">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>

        {/* Centered layout */}
        <div className="flex flex-col items-center text-center gap-8" style={{ maxWidth: "42rem", margin: "0 auto" }}>
          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="stat-badge flex-1 min-w-[140px] max-w-[180px]">
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
          <p className="text-base md:text-[17px] leading-relaxed text-center" style={{ color: "var(--fg-muted)" }}>
            I turn complex ideas into scalable web products with{" "}
            <strong style={{ color: "var(--fg)" }}>Next.js and React</strong>. Currently
            building modern web solutions and optimizing scalable features for the{" "}
            <strong style={{ color: "var(--fg)" }}>Automate Business</strong> platform at{" "}
            <strong style={{ color: "var(--fg)" }}>Zillion Analytics Private Limited</strong> — let's engineer your growth.
          </p>

          <a
            href="/Chirag_Verma_Resume (3).pdf (3).pdf"
            download="Chirag_Verma_Resume.pdf"
            id="about-download-cv"
            className="btn-dark"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
