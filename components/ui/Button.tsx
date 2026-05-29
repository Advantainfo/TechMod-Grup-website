import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer select-none";

  const sizes = {
    sm: "text-xs px-5 py-2.5 gap-1.5",
    md: "text-xs px-8 py-3.5 gap-2",
    lg: "text-sm px-10 py-4 gap-2",
  };

  const variants = {
    primary:
      "bg-brand-accent text-brand-dark hover:bg-brand-accent-light active:scale-[0.98]",
    outline:
      "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark active:scale-[0.98]",
    ghost:
      "text-brand-accent hover:text-white underline underline-offset-4 decoration-brand-accent/40 hover:decoration-white/40",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "";

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${widthClass} ${disabledClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
