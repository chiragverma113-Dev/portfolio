export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  tech: string[];
  gradient: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Automate Business",
    location: "Remote, India",
    startDate: "Jan 2024",
    endDate: "Present",
    current: true,
    description: [
      "Built and maintained a comprehensive CRM & business automation platform serving 50+ business clients",
      "Developed key modules including lead management with Kanban boards, WhatsApp automation, and dynamic quotation builder with PDF export",
      "Implemented role-based access control (RBAC) and multi-tenant architecture for enterprise clients",
      "Designed and built a real-time analytics dashboard with interactive charts and KPI tracking",
      "Collaborated in an agile team, consistently delivering features on schedule with high code quality",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    gradient: "from-violet-600 to-purple-600",
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Freelance",
    location: "India",
    startDate: "Jun 2022",
    endDate: "Dec 2023",
    description: [
      "Delivered 6+ client projects including e-commerce sites, portfolios, and business dashboards",
      "Built responsive, pixel-perfect UI designs converting Figma mockups to production-ready code",
      "Integrated third-party APIs including payment gateways, maps, and email services",
      "Maintained and optimized existing web applications, improving page load times by 40%",
      "Communicated directly with clients to gather requirements and provide technical consultations",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB"],
    gradient: "from-emerald-600 to-teal-600",
  },
];
