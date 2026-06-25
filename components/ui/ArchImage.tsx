import Image from "next/image";

interface ArchImageProps {
  gradient: string;
  accent?: string;
  className?: string;
  label?: string;
  src?: string;
  /** Controls how strong the bottom-to-top darkening overlay is. Default: "standard" */
  overlay?: "none" | "subtle" | "standard" | "strong";
}

const overlayStyles: Record<string, string> = {
  none: "transparent",
  subtle: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
  standard: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
  strong: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 80%, transparent 100%)",
};

export function ArchImage({
  gradient,
  accent,
  className = "",
  label,
  src,
  overlay = "standard",
}: ArchImageProps) {
  return (
    <div className={`overflow-hidden ${className}`} aria-label={label}>
      {src ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          className="object-cover transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          {accent && (
            <div className={`absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t ${accent}`} />
          )}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(200,162,106,1) 39px, rgba(200,162,106,1) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px)
              `,
            }}
          />
        </>
      )}
      {overlay !== "none" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlayStyles[overlay] }}
        />
      )}
    </div>
  );
}
