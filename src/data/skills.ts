export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
      { name: "Framer Motion", icon: "SiFramer", color: "#FF0055" },
      { name: "Redux", icon: "SiRedux", color: "#764ABC" },
    ],
  },
  {
    name: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "REST API", icon: "SiPostman", color: "#FF6C37" },
      { name: "Prisma", icon: "SiPrisma", color: "#2D3748" },
    ],
  },
  {
    name: "Tools & Cloud",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
      { name: "Docker", icon: "SiDocker", color: "#2496ED" },
      { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
      { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
      { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
      { name: "Linux", icon: "SiLinux", color: "#FCC624" },
    ],
  },
];
