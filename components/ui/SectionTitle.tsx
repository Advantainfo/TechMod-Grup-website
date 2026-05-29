interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-white";

  return (
    <div className={`flex flex-col ${alignClass} gap-4`}>
      {eyebrow && (
        <p className="font-sans text-brand-accent tracking-[0.2em] uppercase text-xs font-medium">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight ${titleColor}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`font-sans text-brand-gray-light leading-relaxed max-w-2xl ${
            align === "center" ? "text-center" : "text-left"
          } text-base md:text-lg`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
