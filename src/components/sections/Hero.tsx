"use client";

import { useEffect, useState } from "react";
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

  return (
    <section
      id="home"
      style={{
        background: "var(--bg-card)",
        paddingTop: "11rem",
        paddingBottom: "9.5rem",
      }}
    >
      <ScrollReveal className="container px-6 md:px-8 flex justify-center">
        <div className="flex flex-col items-center text-center max-w-3xl w-full">
          {/* Name with inline waving emoji */}
          <h1
            className="section-title mb-6 text-center font-extrabold tracking-tight md:whitespace-nowrap"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            Hi, I'm Chirag Verma{" "}
            <span className="animate-wiggle inline-block text-[0.9em] ml-1">👋</span>
          </h1>

          {/* Role - Spaced out and preceded/followed by a horizontal line */}
          <div className="flex items-center justify-center gap-4 mb-10 h-8 select-none w-full">
            <span className="w-12 md:w-16 h-[2px] bg-neutral-400 dark:bg-neutral-600 rounded-full"></span>
            <div
              className="text-lg md:text-xl font-bold tracking-wider uppercase text-blue-500 dark:text-blue-400 flex items-center"
            >
              <span>{text}</span>
              <span className="typewriter-cursor" />
            </div>
            <span className="w-12 md:w-16 h-[2px] bg-neutral-400 dark:bg-neutral-600 rounded-full"></span>
          </div>

          {/* Bio with custom line height and spacing */}
          <p
            className="text-base md:text-[18px] leading-relaxed text-center tracking-wide text-neutral-600 dark:text-neutral-300 mx-auto"
            style={{ paddingTop: "1.5rem" }}
          >
            Full-Stack Developer crafting <strong style={{ color: "var(--fg)" }}>high-performance web apps</strong> that drive business growth. Specializing in <strong style={{ color: "var(--fg)" }}>Next.js, React, and AI-powered solutions</strong> for startups and enterprises.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
