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
  const [avatarUrl, setAvatarUrl] = useState("/Me.png");

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
    const img = new Image();
    img.src = "/Me.png";
    img.onload = () => setAvatarUrl("/Me.png");
    img.onerror = () =>
      setAvatarUrl(
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
      );
  }, []);

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

          {/* Left Column — Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Name */}
            <h1
              className="section-title mb-6 text-center lg:text-left font-extrabold tracking-tight md:whitespace-nowrap"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15 }}
            >
              Hi, I'm Chirag Verma{" "}
              <span className="animate-wiggle inline-block text-[0.9em] ml-1">👋</span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 h-8 select-none w-full">
              <span className="w-12 md:w-16 h-[2px] bg-neutral-400 dark:bg-neutral-600 rounded-full" />
              <div className="text-lg md:text-xl font-bold tracking-wider uppercase text-blue-500 dark:text-blue-400 flex items-center">
                <span>{text}</span>
                <span className="typewriter-cursor" />
              </div>
            </div>

            {/* Bio */}
            <p
              className="text-base md:text-[18px] leading-relaxed max-w-xl text-center lg:text-left tracking-wide text-neutral-600 dark:text-neutral-300 mx-auto lg:mx-0"
              style={{ paddingTop: "1.5rem" }}
            >
              Full-Stack Developer crafting{" "}
              <strong style={{ color: "var(--fg)" }}>high-performance web apps</strong> that
              drive business growth. Specializing in{" "}
              <strong style={{ color: "var(--fg)" }}>Next.js, React, and AI-powered solutions</strong>{" "}
              for startups and enterprises.
            </p>
          </div>

          {/* Right Column — Avatar with wavy morphing frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative flex items-center justify-center">

              {/* Background glows */}
              <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />

              {/* Glow ring — same morphing animation */}
              <div
                className="absolute w-72 h-72 md:w-[350px] md:h-[350px] bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-[4px] avatar-wavy-frame scale-[1.03] pointer-events-none"
                style={{ animationDelay: "-2s", animationDuration: "10s" }}
              />

              {/* Wavy morphing image frame */}
              <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl transition-all duration-500 hover:scale-[1.03] bg-white dark:bg-neutral-900 flex items-center justify-center avatar-wavy-frame">
                <img
                  src={avatarUrl}
                  alt="Chirag Verma"
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
