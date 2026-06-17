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
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM Project",
    description: "Enterprise CRM & Business Automation platform with lead management, quotation builder, and customer analytics.",
    longDescription: "A comprehensive business management dashboard. Features include lead tracking using Kanban boards, automated WhatsApp integrations, custom invoice and quotation generation, follow-up scheduling, and role-based access control.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Material-UI"],
    category: ["React", "Next.js"],
    liveUrl: "https://crmv2.automatebusiness.com/login",
    githubUrl: "#",
    featured: true,
    gradient: "from-blue-600 to-indigo-600",
    imageUrl: "/Automate CRM.png",
  },
  {
    id: 2,
    title: "Automate Chats",
    description: "AI-driven customer support chat platform with automated workflows, analytics, and instant messaging.",
    longDescription: "A robust real-time communication platform designed to streamline customer service operations. Includes integrated chatbot setup, team assignment capabilities, sentiment analysis on messages, and live dashboard metrics.",
    tech: ["React.js", "Tailwind CSS", "Redux", "WebSockets", "Node.js"],
    category: ["React"],
    liveUrl: "https://automatechats.com/login",
    githubUrl: "#",
    featured: true,
    gradient: "from-emerald-500 to-teal-500",
    imageUrl: "/Automate Chats.png",
  },
  {
    id: 3,
    title: "Automate Forms",
    description: "AI-powered dynamic form builder that enables businesses to create, deploy, and analyze forms instantly.",
    longDescription: "A modern form building web application featuring an intuitive drag-and-drop builder interface, custom themes, field validation rules, response charts, and export tools to automate data collection and integration.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    category: ["React", "Next.js"],
    liveUrl: "http://automateforms.ai/",
    githubUrl: "#",
    featured: true,
    gradient: "from-violet-600 to-purple-600",
    imageUrl: "/Automate Forms.png",
  },
  {
    id: 4,
    title: "Rick & Morty task",
    description: "A creative character encyclopedia displaying characters from the Rick & Morty universe with dynamic search and filtering.",
    longDescription: "A fun front-end application leveraging the official Rick & Morty REST API. Offers a clean, grid-based card layout, smooth animations, character status tracking, advanced page filtering, and detail modal views.",
    tech: ["React.js", "CSS3", "JavaScript", "REST API"],
    category: ["React", "CSS"],
    liveUrl: "https://rick-and-morty-checracter.netlify.app/",
    githubUrl: "#",
    gradient: "from-sky-500 to-cyan-500",
    imageUrl: "/Rick&Morty.png",
  },
  {
    id: 5,
    title: "Webbycard Web Page",
    description: "A premium glassmorphism landing page optimized for fast loading and responsive mobile display.",
    longDescription: "A beautiful static landing page with an elegant custom layout, smooth scroll animations, curated typography, and HSL tailored color schemes to showcase business information with premium aesthetics.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: ["HTML", "CSS"],
    liveUrl: "https://webbycard.netlify.app/",
    githubUrl: "#",
    gradient: "from-orange-500 to-rose-500",
    imageUrl: "/WebPage.png",
  },
];
