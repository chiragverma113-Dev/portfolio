"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, AlertCircle, MapPin } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    value: "chiragverma113@gmail.com",
    action: "Write Me",
    href: "mailto:chiragverma113@gmail.com",
    id: "contact-card-email",
    color: "#EA4335",
  },
  {
    icon: Phone,
    title: "Whatsapp",
    value: "91-892374353",
    action: "Write Me",
    href: "https://wa.me/91892374353",
    id: "contact-card-whatsapp",
    color: "#25D366",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Muzaffarnagar, UP, India",
    action: "View Map",
    href: "https://maps.google.com/?q=Muzaffarnagar",
    id: "contact-card-location",
    color: "#3B82F6",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [showToast, setShowToast] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; color: string; delay: number }[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/chiragverma113@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`
        })
      });

      if (response.ok) {
        setState("success");
        setForm({ name: "", email: "", message: "" });

        // Trigger particle confetti burst from submit button
        const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#22c55e"];
        const particles = Array.from({ length: 45 }).map((_, i) => ({
          id: i,
          x: Math.random() * 320 - 160, // horizontal spread (-160px to 160px)
          y: Math.random() * -130 - 30,  // vertical burst height (-30px to -160px)
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.15
        }));
        setConfetti(particles);
        setTimeout(() => setConfetti([]), 2000);
      } else {
        setState("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setState("error");
    } finally {
      setTimeout(() => setState("idle"), 6000); // give 6s to read the success message
    }
  };

  const handleContactCardClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (id === "contact-card-email") {
      e.preventDefault();
      const email = "chiragverma113@gmail.com";
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
          })
          .catch((err) => {
            console.error("Clipboard copy failed: ", err);
          })
          .finally(() => {
            window.location.href = href;
          });
      } else {
        // Fallback for insecure context or unsupported clipboard API
        try {
          const textArea = document.createElement("textarea");
          textArea.value = email;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
          console.error("Fallback copy failed: ", err);
        }
        window.location.href = href;
      }
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-card)" }}>
      <ScrollReveal className="container">
        {/* Main section header */}
        <div className="section-header">
          <h2 className="section-title text-center">Get in touch</h2>
          <p className="section-subtitle text-center">Contact Me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Left — "Talk to me" */}
          <div>
            <h3 style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: 500, color: "var(--fg)", marginBottom: "1.5rem" }}>
              Talk to me
            </h3>
            <div className="flex flex-col gap-4">
              {CONTACT_CARDS.map(({ icon: Icon, title, value, action, href, id, color }) => (
                <div
                  key={id}
                  id={id}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-default group"
                  style={{
                    padding: "1.25rem 1rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.005)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 12px 24px -8px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.005)";
                  }}
                >
                  {/* Brand icon container */}
                  <div
                    className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: `${color}0d`, // ~5% opacity
                      color: color,
                      border: `1px solid ${color}20`, // ~12% opacity
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ display: "block" }} />
                  </div>
                  <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{title}</p>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{value}</p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="btn-link text-xs mt-1 font-semibold group-hover:text-[var(--fg)]"
                    style={{ color: "var(--fg-muted)" }}
                    onClick={(e) => handleContactCardClick(e, href, id)}
                  >
                    {action} <span style={{ fontSize: "1rem" }}>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <h3 style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: 500, color: "var(--fg)", marginBottom: "1.5rem" }}>
              Write me your project
            </h3>
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="form-field">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-field-input"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-field-input"
                />
              </div>

              {/* Project / Message */}
              <div className="form-field">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your project"
                  className="form-field-input resize-none"
                />
              </div>

              {state === "success" && (
                <div className="flex items-center gap-3.5 p-4 rounded-2xl text-[14px] sm:text-[15px] font-semibold animate-success-pop border bg-green-500/10 border-green-500/25 text-green-600 dark:text-green-400 backdrop-blur-md shadow-[0_8px_32px_rgba(34,197,94,0.08)]">
                  {/* Self-drawing premium SVG Checkmark */}
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "block",
                      strokeWidth: "4.5",
                      stroke: "currentColor",
                      strokeMiterlimit: "10",
                    }}
                  >
                    <circle
                      className="checkmark-circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                      style={{
                        strokeMiterlimit: "10",
                        stroke: "currentColor",
                        fill: "none",
                      }}
                    />
                    <path
                      className="checkmark-check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      style={{
                        transformOrigin: "50% 50%",
                      }}
                    />
                  </svg>
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}
              {state === "error" && (
                <div
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#dc2626",
                  }}
                >
                  <AlertCircle size={15} />
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="relative w-fit">
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={state === "loading"}
                  className="btn-dark w-fit"
                  style={{ opacity: state === "loading" ? 0.7 : 1 }}
                >
                  {state === "loading" ? (
                    <>
                      <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>

                {/* Confetti particles */}
                {confetti.map((p) => (
                  <span
                    key={p.id}
                    className="animate-confetti absolute pointer-events-none"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                      background: p.color,
                      left: "50%",
                      top: "50%",
                      opacity: 1,
                      zIndex: 50,
                      "--tx": `${p.x}px`,
                      "--ty": `${p.y}px`,
                      "--rot": `${Math.random() * 360}deg`,
                      "--delay": `${p.delay}s`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>

      {/* Copy notification toast */}
      {showToast && (
        <div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 dark:bg-neutral-100/90 backdrop-blur-md text-white dark:text-neutral-900 px-4 py-2.5 rounded-full text-xs font-semibold shadow-xl z-[9999] flex items-center gap-2 border border-neutral-700/30 dark:border-neutral-300/30"
          style={{
            animation: "reveal-up 0.2s ease",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          }}
        >
          Email copied to clipboard!
        </div>
      )}
    </section>
  );
}
