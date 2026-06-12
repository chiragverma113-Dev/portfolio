export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon: string;
  color: string;
  gradient: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-ACE-2023",
    credentialUrl: "#",
    icon: "SiGooglecloud",
    color: "#4285F4",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-CDL-2023",
    credentialUrl: "#",
    icon: "SiGooglecloud",
    color: "#34A853",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "React Developer Certification",
    issuer: "Meta (via Coursera)",
    date: "2022",
    credentialId: "META-REACT-2022",
    credentialUrl: "#",
    icon: "SiReact",
    color: "#61DAFB",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-JSADS-2022",
    credentialUrl: "#",
    icon: "SiJavascript",
    color: "#F7DF1E",
    gradient: "from-yellow-500 to-orange-500",
  },
];
