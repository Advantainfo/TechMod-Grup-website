import Image from "next/image";

interface ArchImageProps {
  gradient: string;
  accent?: string;
  className?: string;
  label?: string;
  src?: string;
}

export function ArchImage({ gradient, accent, className = "", label, src }: ArchImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-label={label}>
      {src ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          className="object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
