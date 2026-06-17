import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/src/components/ui/BrandIcons";

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/chiragverma113-Dev", label: "GitHub", id: "social-github" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/chirag-verma-817966226?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn", id: "social-linkedin" },
  { icon: InstagramIcon, href: "https://www.instagram.com/chrgvrma?igsh=MXUwYW9sMThwd2w3MQ%3D%3D&utm_source=qr", label: "Instagram", id: "social-instagram" },
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
