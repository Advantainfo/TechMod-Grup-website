"use client";

import { useState } from "react";
import { AnimateInView } from "@/components/ui/AnimateInView";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <AnimateInView key={i} delay={i * 40}>
          <div className="border-b border-brand-border">
            <button
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span
                className={`font-serif text-lg leading-snug transition-colors duration-200 ${
                  open === i ? "text-brand-accent" : "text-white group-hover:text-brand-accent"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex-none mt-1 w-5 h-5 border border-brand-border flex items-center justify-center transition-all duration-300 ${
                  open === i ? "border-brand-accent bg-brand-accent rotate-45" : "group-hover:border-brand-accent"
                }`}
              >
                <span className={`text-sm leading-none ${open === i ? "text-brand-dark" : "text-brand-gray"}`}>
                  +
                </span>
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-400 ease-in-out"
              style={{ maxHeight: open === i ? "500px" : "0" }}
            >
              <p className="font-sans text-brand-gray-light text-sm leading-relaxed pb-6 pr-12">
                {item.answer}
              </p>
            </div>
          </div>
        </AnimateInView>
      ))}
    </div>
  );
}
