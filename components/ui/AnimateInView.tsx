"use client";

import { useInView } from "@/hooks/useInView";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimateInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateInViewProps) {
  const { ref, isInView } = useInView();

  const translateMap = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    none: "",
  };

  const base = "transition-all duration-700 ease-out";
  const hidden = `opacity-0 ${translateMap[direction]}`;
  const visible = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${base} ${isInView ? visible : hidden} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
