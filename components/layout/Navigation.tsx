"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/data";

const labels: Record<Lang, Record<string, string>> = {
  en: {
    models: "Models",
    projects: "Projects",
    process: "Process",
    about: "About",
    faq: "FAQ",
    getQuote: "Get a Quote",
  },
  bg: {
    models: "Модели",
    projects: "Проекти",
    process: "Процес",
    about: "За Нас",
    faq: "Въпроси",
    getQuote: "Оферта",
  },
  tr: {
    models: "Modeller",
    projects: "Projeler",
    process: "Süreç",
    about: "Hakkımızda",
    faq: "SSS",
    getQuote: "Teklif Al",
  },
};

interface NavigationProps {
  lang: Lang;
}

export function Navigation({ lang }: NavigationProps) {
  const t = labels[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}/models`, label: t.models },
    { href: `/${lang}/projects`, label: t.projects },
    { href: `/${lang}/process`, label: t.process },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/faq`, label: t.faq },
  ];

  const allLangs: Lang[] = ["en", "bg", "tr"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-1 flex items-center justify-between">
          <Link
            href={`/${lang}`}
            aria-label="Techmod Group — Home"
          >
            <Image
              src="/logo.png"
              alt="Techmod Group"
              width={420}
              height={210}
              className="h-32 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-accent"
                    : "text-brand-gray-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center border border-brand-border">
              {allLangs.map((l) => (
                <Link
                  key={l}
                  href={pathname.replace(`/${lang}`, `/${l}`)}
                  className={`font-sans text-[10px] tracking-[0.2em] uppercase px-2.5 py-1.5 transition-colors duration-200 border-r border-brand-border last:border-r-0 ${
                    l === lang ? "text-white" : "text-brand-gray hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <Button href={`/${lang}/contact`} variant="outline" size="sm">
              {t.getQuote}
            </Button>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark flex flex-col transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-4xl py-3 transition-all duration-300 ${
                pathname === link.href
                  ? "text-brand-accent"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex items-center gap-4">
            <Button href={`/${lang}/contact`} variant="primary" size="lg">
              {t.getQuote}
            </Button>
            <div className="flex items-center border border-brand-border">
              {allLangs.map((l) => (
                <Link
                  key={l}
                  href={pathname.replace(`/${lang}`, `/${l}`)}
                  className={`font-sans text-sm tracking-widest uppercase px-4 py-3 transition-colors duration-200 border-r border-brand-border last:border-r-0 ${
                    l === lang ? "text-white" : "text-brand-gray-light hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 flex items-center justify-between border-t border-brand-border">
          <Image
            src="/logo.png"
            alt="Techmod Group"
            width={260}
            height={130}
            className="h-20 w-auto object-contain"
          />
          <span className="font-sans text-brand-gray text-xs">
            +32 489 63 62 56
          </span>
        </div>
      </div>
    </>
  );
}

