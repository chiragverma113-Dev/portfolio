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
    role: "Software Developer",
    company: "Zillion Analytics Private Limited",
    location: "India",
    startDate: "2023",
    endDate: "Present",
    current: true,
    description: [
      "Developing and optimising scalable features for the Automate Business platform using Next.js, TypeScript.",
      "Enhancing user experience and process efficiency through modern web solutions for MSME management.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux", "Material-UI"],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    role: "VBA Developer",
    company: "Oscillate Infotech Pvt Ltd.",
    location: "India",
    startDate: "2022",
    endDate: "2023",
    description: [
      "Provided comprehensive documentation for developed VBA modules, facilitating ease of maintenance and future updates.",
      "Simplified complex processes through the creation of automated templates using advanced Excel functions combined with VBA scripting.",
      "Collaborated with cross-functional teams to gather requirements and develop tailored solutions using VBA programming.",
    ],
    tech: ["VBA", "Advanced Excel", "AppScript", "SQL"],
    gradient: "from-emerald-600 to-teal-600",
  },
];
