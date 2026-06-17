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
    title: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google Cloud",
    date: "2023",
    icon: "SiGooglecloud",
    color: "#4285F4",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
    issuer: "Google Cloud",
    date: "2023",
    icon: "SiGooglecloud",
    color: "#34A853",
    gradient: "from-green-500 to-emerald-500",
  },
];
