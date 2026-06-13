import { LayoutDashboard, Code2, Database, ArrowRight } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "Website Development",
    desc: "Building fast, responsive, and pixel-perfect websites using modern frameworks like React and Next.js.",
    id: "service-web",
  },
  {
    icon: Code2,
    title: "UI/UX Designer",
    desc: "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
    id: "service-ui",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Designing and optimizing databases with PostgreSQL and MongoDB for scalable applications.",
    id: "service-db",
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--bg-card)" }}>
      <ScrollReveal className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {SERVICES.map(({ icon: Icon, title, desc, id }) => (
            <div key={id} id={id} className="service-card">
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
                <h3 className="font-bold text-base leading-tight mb-1">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {desc}
                </p>
              </div>

              <button className="btn-link mt-auto">
                View More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
