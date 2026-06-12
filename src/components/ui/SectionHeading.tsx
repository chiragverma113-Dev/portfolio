interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
  className = "",
}: Props) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""} ${className}`}>
      {tag && (
        <div className={`${center ? "flex justify-center" : ""}`}>
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            {tag}
          </span>
        </div>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold mt-2 mb-4"
        style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)", marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full ${center ? "mx-auto" : ""}`}
        style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
      />
    </div>
  );
}
