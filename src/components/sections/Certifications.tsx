import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/src/data/certifications";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const CERT_ICONS: Record<string, string> = {
  SiGooglecloud: "GC",
  SiReact: "⚛",
  SiJavascript: "JS",
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <ScrollReveal>
          <SectionHeading
            tag="Certifications"
            title="Credentials & Learning"
            subtitle="Continuous learning is core to who I am — here are certifications I've earned."
            center
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 100}>
              <div
                className="glass-card p-6 flex flex-col items-start gap-4 group"
                id={`cert-${cert.id}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                    border: `1.5px solid ${cert.color}55`,
                    color: cert.color,
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {CERT_ICONS[cert.icon] || cert.icon.replace("Si", "").slice(0, 2)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="font-semibold text-sm leading-tight mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: cert.color, fontWeight: 600 }}>
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                    <Award size={11} />
                    {cert.date}
                  </div>
                </div>

                {/* Credential link */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: cert.color }}
                    aria-label={`View credential for ${cert.title}`}
                  >
                    <ExternalLink size={11} />
                    View Credential
                  </a>
                )}

                {/* Gradient line */}
                <div
                  className="w-full h-0.5 rounded-full mt-auto opacity-40"
                  style={{
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
