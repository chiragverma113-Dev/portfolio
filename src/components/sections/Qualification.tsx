import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const EDUCATION = [
  {
    title: "Bachelor of Technology",
    institution: "UIET, Kurukshetra",
    period: "2019 - 2023",
    id: "edu-1",
  },
  {
    title: "12th Sr. Secondary",
    institution: "M.R.M. Public Sr. Sec. School, Jhajjar",
    period: "2017 - 2018",
    id: "edu-2",
  },
  {
    title: "10th Matriculation",
    institution: "R.S. Modern Public School, Jhajjar",
    period: "2015 - 2016",
    id: "edu-3",
  },
];

const EXPERIENCE = [
  {
    title: "Frontend Developer",
    institution: "Automate Business",
    period: "Jan 2024 - Present",
    id: "exp-1",
  },
  {
    title: "Junior Web Developer",
    institution: "Freelance",
    period: "Jun 2022 - Dec 2023",
    id: "exp-2",
  },
];

export default function Qualification() {
  return (
    <section id="qualification" className="section" style={{ background: "var(--bg-card)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Qualification</h2>
          <p className="section-subtitle">My Personal Journey</p>
        </div>

        {/* Tab-like headers */}
        <div className="flex justify-center gap-10 mb-10">
          <div className="flex items-center gap-2 font-semibold text-base" style={{ color: "var(--fg)" }}>
            <GraduationCap size={20} strokeWidth={1.5} />
            Education
          </div>
          <div className="flex items-center gap-2 font-semibold text-base" style={{ color: "var(--fg)" }}>
            <Briefcase size={20} strokeWidth={1.5} />
            Experience
          </div>
        </div>

        {/* Timeline grid */}
        <div
          className="max-w-3xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 1fr",
            position: "relative",
          }}
        >
          {/* Center vertical line */}
          <div
            style={{
              gridColumn: "2",
              gridRow: "1 / 999",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                bottom: 0,
                width: "1px",
                background: "var(--border)",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          {/* Interleaved rows */}
          {Array.from({ length: Math.max(EDUCATION.length, EXPERIENCE.length) }).map((_, i) => {
            const edu = EDUCATION[i];
            const exp = EXPERIENCE[i];
            return (
              <div
                key={i}
                style={{
                  display: "contents",
                }}
              >
                {/* Left (Education) */}
                <div
                  style={{
                    gridColumn: "1",
                    paddingRight: "2rem",
                    paddingBottom: "2.5rem",
                    textAlign: "right",
                  }}
                >
                  {edu && (
                    <div id={edu.id}>
                      <p className="font-bold text-sm leading-tight mb-1">{edu.title}</p>
                      <p
                        className="text-xs mb-2"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {edu.institution}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 text-xs justify-end"
                        style={{ color: "var(--fg-subtle)" }}
                      >
                        <Calendar size={10} />
                        {edu.period}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div
                  style={{
                    gridColumn: "2",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "6px",
                    paddingBottom: "2.5rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "var(--fg-muted)",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Right (Experience) */}
                <div
                  style={{
                    gridColumn: "3",
                    paddingLeft: "2rem",
                    paddingBottom: "2.5rem",
                  }}
                >
                  {exp && (
                    <div id={exp.id}>
                      <p className="font-bold text-sm leading-tight mb-1">{exp.title}</p>
                      <p
                        className="text-xs mb-2"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {exp.institution}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 text-xs"
                        style={{ color: "var(--fg-subtle)" }}
                      >
                        <Calendar size={10} />
                        {exp.period}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
