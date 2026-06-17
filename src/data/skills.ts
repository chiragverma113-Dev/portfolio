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
    name: "Languages",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "AppScript", icon: "SiGoogle", color: "#34A853" },
      { name: "SQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "App Sheet", icon: "SiGooglecloud", color: "#4285F4" },
    ],
  },
  {
    name: "Frameworks & Libs",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Material-UI", icon: "SiMaterialdesign", color: "#0081CB" },
      { name: "Redux", icon: "SiRedux", color: "#764ABC" },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitLab", icon: "SiGitlab", color: "#FC6D26" },
      { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
      { name: "Netlify", icon: "SiNetlify", color: "#00C7B7" },
      { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Cursor", icon: "SiCursor", color: "#5856D6" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem-solving", icon: "Brain", color: "#F59E0B" },
      { name: "API Integration", icon: "Cpu", color: "#10B981" },
      { name: "Web Design", icon: "Palette", color: "#EC4899" },
      { name: "Responsive Design", icon: "Smartphone", color: "#3B82F6" },
      { name: "Analytical Thinking", icon: "LineChart", color: "#8B5CF6" },
    ],
  },
];
