"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 18 + 5;
      });
    }, 70);
    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center gap-6">
        {/* Initials */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "var(--fg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          CV
        </div>

        {/* Name */}
        <div className="text-center">
          <p className="font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>
            Chirag Verma
          </p>
          <p className="text-sm mt-0.5" style={{ color: "var(--fg-muted)" }}>
            Frontend Developer
          </p>
        </div>

        {/* Progress */}
        <div
          style={{
            width: 160,
            height: 2,
            borderRadius: 999,
            background: "var(--border)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 999,
              background: "var(--fg)",
              width: `${Math.min(progress, 100)}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
