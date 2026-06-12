"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    value: "chirag@example.com",
    action: "Write Me",
    href: "mailto:chirag@example.com",
    id: "contact-card-email",
  },
  {
    icon: Phone,
    title: "Whatsapp",
    value: "+91 98765 43210",
    action: "Write Me",
    href: "https://wa.me/919876543210",
    id: "contact-card-whatsapp",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@chirag_dev",
    action: "Write Me",
    href: "https://t.me/chirag_dev",
    id: "contact-card-telegram",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    // TODO: wire up EmailJS here
    setState("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setState("idle"), 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Left — "Talk to me" */}
          <div>
            <h2 className="section-title mb-1" style={{ textAlign: "left", fontSize: "1.75rem" }}>
              Talk to me
            </h2>
            <div className="flex flex-col gap-4 mt-6">
              {CONTACT_CARDS.map(({ icon: Icon, title, value, action, href, id }) => (
                <div key={id} id={id} className="contact-card">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ color: "var(--fg)" }} />
                  </div>
                  <p className="font-bold text-sm">{title}</p>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{value}</p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="btn-link text-xs mt-1"
                  >
                    {action} <span style={{ fontSize: "1rem" }}>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="section-title mb-1" style={{ textAlign: "left", fontSize: "1.75rem" }}>
              Write me your project
            </h2>
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
              {/* Name */}
              <div className="form-field">
                <span className="form-field-label">Name</span>
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
                <span className="form-field-label">Email</span>
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
                <span className="form-field-label">Project</span>
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
                <div
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#16a34a",
                  }}
                >
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you soon.
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
