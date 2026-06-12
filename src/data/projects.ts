export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Automate Business Platform",
    description: "A full-featured CRM & business automation platform with lead management, quotation builder, WhatsApp integration, and analytics dashboard.",
    longDescription: "A comprehensive business automation platform built for modern enterprises. Features include lead management with Kanban boards, automated WhatsApp messaging, dynamic quotation builder with PDF export, follow-up scheduling, role-based access control, and real-time analytics dashboards.",
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WhatsApp API"],
    category: ["React", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-blue-600",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A modern e-commerce admin dashboard with inventory management, order tracking, and real-time sales analytics.",
    longDescription: "A responsive e-commerce management dashboard featuring product inventory management, order fulfillment tracking, customer management, and interactive charts displaying real-time sales data. Built with a focus on performance and user experience.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Chart.js", "REST API"],
    category: ["React"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A premium developer portfolio with glassmorphism design, smooth animations, and dark/light theme support.",
    longDescription: "This very portfolio! Built with Next.js 14, Framer Motion animations, TypeScript, and Tailwind CSS. Features a glassmorphism design system, smooth scroll animations, dark/light mode, project filtering, and an EmailJS contact form.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "EmailJS"],
    category: ["Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500 via-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A Trello-inspired task management app with drag-and-drop boards, team collaboration, and deadline tracking.",
    longDescription: "A full-stack task management application featuring drag-and-drop Kanban boards, real-time collaboration, deadline notifications, file attachments, and team role management. Supports multiple workspaces and project templates.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "CSS Modules"],
    category: ["React"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A beautiful weather application with 7-day forecasts, location search, and animated weather conditions.",
    longDescription: "A visually stunning weather application that provides real-time weather data, 7-day forecasts, hourly breakdowns, and animated weather conditions. Features geolocation support, city search, and dynamic backgrounds based on weather conditions.",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    category: ["CSS", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    id: 6,
    title: "Movie Discovery Platform",
    description: "A Netflix-inspired movie browsing platform with search, filtering, ratings, and watchlist management.",
    longDescription: "A movie discovery platform powered by TMDB API, featuring trending movies, genre browsing, advanced search with filters, user ratings, and a personal watchlist system. Designed with a dark Netflix-inspired interface.",
    tech: ["React.js", "TMDB API", "CSS3", "LocalStorage"],
    category: ["React", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-red-600 via-rose-500 to-pink-500",
  },
];
