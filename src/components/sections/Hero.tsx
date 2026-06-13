"use client";

import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const ROLES = [
  "Frontend Developer",
  "React.js Expert",
  "Next.js Developer",
  "UI/UX Craftsman",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80");

  useEffect(() => {
    const role = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === role) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else {
      t = setTimeout(
        () =>
          setText(deleting ? role.slice(0, text.length - 1) : role.slice(0, text.length + 1)),
        deleting ? 45 : 95
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  useEffect(() => {
    // Check if local avatar exists, otherwise fall back to unsplash
    const img = new Image();
    img.src = "/avatar.png";
    img.onload = () => setAvatarUrl("/avatar.png");
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        background: "var(--bg-card)",
        paddingTop: "11rem",
        paddingBottom: "9.5rem",
      }}
    >
      <ScrollReveal className="container px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Name with inline waving emoji - forced on a single row for desktop/tablet */}
            <h1
              className="section-title mb-6 text-left font-extrabold tracking-tight md:whitespace-nowrap"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15 }}
            >
              Hi, I'm Chirag Verma{" "}
              <span className="animate-wiggle inline-block text-[0.9em] ml-1">👋</span>
            </h1>

            {/* Role - Spaced out and preceded by a horizontal line */}
            <div className="flex items-center gap-4 mb-10 h-8 select-none">
              <span className="w-12 md:w-16 h-[2px] bg-neutral-400 dark:bg-neutral-600 rounded-full"></span>
              <div
                className="text-lg md:text-xl font-bold tracking-wider uppercase text-blue-500 dark:text-blue-400 flex items-center"
              >
                <span>{text}</span>
                <span className="typewriter-cursor" />
              </div>
            </div>

            {/* Bio with custom line height and spacing */}
            <p
              className="text-base md:text-[18px] leading-relaxed max-w-xl text-left tracking-wide text-neutral-600 dark:text-neutral-300"
              style={{ paddingTop: "1.5rem", marginBottom: "2.50rem" }}
            >
              Full-Stack Developer crafting <strong style={{ color: "var(--fg)" }}>high-performance web apps</strong> that drive business growth. Specializing in <strong style={{ color: "var(--fg)" }}>Next.js, React, and AI-powered solutions</strong> for startups and enterprises.
            </p>

            {/* CTAs with top & bottom padding and margins for spacing */}
            <div
              className="flex flex-wrap items-center gap-6 py-2 w-full justify-start"
              style={{ marginBottom: "1rem" }}
            >
              <a href="/resume.pdf" download id="hero-resume" className="btn-dark">
                <Download size={17} />
                Download CV
              </a>
              <button
                id="hero-projects"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline"
                style={{ padding: "0.875rem 1.75rem" }}
              >
                View Projects
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats with wider column gap and padding top to separate from buttons */}
            <div
              className="flex flex-wrap gap-12 md:gap-20 lg:gap-24 w-full justify-start border-t border-neutral-300/10 dark:border-neutral-700/10"
              style={{ paddingTop: "1rem" }}
            >
              {[
                { num: "3+", label: "Years Experience" },
                { num: "6+", label: "Projects Delivered" },
                { num: "2", label: "Companies" },
              ].map(({ num, label }) => (
                <div key={label} className="text-left">
                  <div
                    className="text-3xl md:text-4xl font-extrabold"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {num}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--fg-muted)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Circular Dummy Image/Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative flex items-center justify-center">
              {/* Decorative background glows */}
              <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none animate-delay-1000" />

              {/* Perfect Circular Image Frame */}
              <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:rotate-1 bg-white dark:bg-neutral-900 flex items-center justify-center">
                <img
                  src={avatarUrl}
                  alt="Chirag Verma Developer Illustration"
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
