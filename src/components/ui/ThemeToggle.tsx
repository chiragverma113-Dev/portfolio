"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--foreground)",
      }}
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(90deg)",
        }}
      >
        <Moon size={17} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "light" ? 1 : 0,
          transform: theme === "light" ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
        }}
      >
        <Sun size={17} />
      </span>
    </button>
  );
}
