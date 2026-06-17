import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const TIMELINE_ITEMS = [
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor's Degree in Computer Applications",
    institution: "IIMTUniversity - IIMTU",
    period: "2019 - 2022",
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Software Developer",
    institution: "Zillion Analytics Private Limited | Automate Business platform",
    period: "2023 - Present",
  },
  {
    id: "edu-2",
    type: "education",
    title: "Intermediate",
    institution: "S.D Inter College, Muzaffarnagar",
    period: "2018 - 2019",
  },
  {
    id: "exp-2",
    type: "experience",
    title: "VBA Developer",
    institution: "Oscillate Infotech Pvt Ltd.",
    period: "2022 - 2023",
  },
];

export default function Qualification() {
  const educationItems = TIMELINE_ITEMS.filter((item) => item.type === "education");
  const experienceItems = TIMELINE_ITEMS.filter((item) => item.type === "experience");

  return (
    <section id="qualification" className="section" style={{ background: "var(--bg-card)" }}>
      <style>{`
        .qualification-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .qualification-col {
          display: flex;
          flex-direction: column;
        }

        .qualification-col-header {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--fg);
          margin-bottom: 2.25rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.75rem;
        }

        .qualification-col-header-icon {
          color: var(--accent);
        }

        .timeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .timeline-line {
          position: absolute;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--border);
          left: 5px;
        }

        .timeline-item {
          position: relative;
          padding-left: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .timeline-dot {
          position: absolute;
          left: 5px;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--fg-muted);
          border: 2px solid var(--bg-card);
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.03);
          transform: translateX(-50%);
          transition: all 0.3s ease;
          z-index: 2;
        }

        .timeline-item:hover .timeline-dot {
          background: var(--fg);
          transform: translateX(-50%) scale(1.3);
          box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.06);
        }

        .dark .timeline-item:hover .timeline-dot {
          box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.08);
        }

        .timeline-content {
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .timeline-item:hover .timeline-content {
          transform: translateX(4px);
        }

        .timeline-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--fg);
          line-height: 1.3;
        }

        .timeline-institution {
          font-size: 0.75rem;
          color: var(--fg-muted);
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .timeline-period-row {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.75rem;
          color: var(--fg-subtle);
        }

        @media (max-width: 768px) {
          .qualification-columns {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>

      <ScrollReveal className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Qualification</h2>
          <p className="section-subtitle text-center">My Personal Journey</p>
        </div>

        <div className="qualification-columns">
          {/* Education Column */}
          <div className="qualification-col">
            <div className="qualification-col-header">
              <GraduationCap className="qualification-col-header-icon" size={22} strokeWidth={1.5} />
              <span>Education</span>
            </div>

            <div className="timeline-container">
              <div className="timeline-line" />
              {educationItems.map(({ id, title, institution, period }) => (
                <div key={id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-title">{title}</span>
                    <span className="timeline-institution">{institution}</span>
                    <div className="timeline-period-row">
                      <Calendar size={12} strokeWidth={1.5} />
                      <span>{period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="qualification-col">
            <div className="qualification-col-header">
              <Briefcase className="qualification-col-header-icon" size={22} strokeWidth={1.5} />
              <span>Experience</span>
            </div>

            <div className="timeline-container">
              <div className="timeline-line" />
              {experienceItems.map(({ id, title, institution, period }) => (
                <div key={id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-title">{title}</span>
                    <span className="timeline-institution">{institution}</span>
                    <div className="timeline-period-row">
                      <Calendar size={12} strokeWidth={1.5} />
                      <span>{period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
