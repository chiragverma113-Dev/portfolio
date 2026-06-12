import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/components/ui/BrandIcons";

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub", id: "social-github" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn", id: "social-linkedin" },
  { icon: Mail, href: "mailto:chirag@example.com", label: "Email", id: "social-email" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter", id: "social-twitter" },
];

export default function FloatingSocials() {
  return (
    <aside className="floating-socials" aria-label="Social links">
      {SOCIALS.map(({ icon: Icon, href, label, id }) => (
        <a
          key={id}
          href={href}
          id={id}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="floating-social-icon"
          aria-label={label}
          title={label}
        >
          <Icon size={15} />
        </a>
      ))}
    </aside>
  );
}
