import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chirag Verma — Frontend Developer",
  description:
    "Portfolio of Chirag Verma — Frontend Developer specializing in React.js, Next.js & TypeScript. Building fast, beautiful web apps.",
  keywords: ["Chirag Verma", "Frontend Developer", "React", "Next.js", "TypeScript", "India"],
  openGraph: {
    title: "Chirag Verma — Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js & TypeScript.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
