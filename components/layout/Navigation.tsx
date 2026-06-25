"use client";

import { useEffect, useRef, useState } from "react";
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
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}/models`, label: t.models },
    { href: `/${lang}/projects`, label: t.projects },
    { href: `/${lang}/process`, label: t.process },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/faq`, label: t.faq },
  ];

  const allLangs: Lang[] = ["en", "bg", "tr"];
  const otherLangs = allLangs.filter((l) => l !== lang);
  const flags: Record<Lang, string> = { en: "🇬🇧", bg: "🇧🇬", tr: "🇹🇷" };

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

  // Close lang dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex items-center justify-between">
          <Link href={`/${lang}`} aria-label="Techmod Group — Home">
            <Image
              src="/logo.png"
              alt="Techmod Group"
              width={460}
              height={230}
              className="h-28 w-auto object-contain"
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
            <Button href={`/${lang}/contact`} variant="outline" size="sm">
              {t.getQuote}
            </Button>

            {/* Language dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 border border-brand-border px-3 py-1.5 font-sans text-[10px] tracking-[0.2em] uppercase text-white hover:text-brand-accent transition-colors duration-200"
              >
                <span>{flags[lang]}</span>
                {lang.toUpperCase()}
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-brand-dark border border-brand-border flex flex-col min-w-full">
                  {otherLangs.map((l) => (
                    <Link
                      key={l}
                      href={pathname.replace(`/${lang}`, `/${l}`)}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-2 text-brand-gray hover:text-white hover:bg-brand-border/20 transition-colors duration-200"
                    >
                      <span>{flags[l]}</span>
                      {l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            {/* Mobile lang switcher — keep inline for clarity */}
            <div className="flex items-center border border-brand-border">
              {allLangs.map((l) => (
                <Link
                  key={l}
                  href={pathname.replace(`/${lang}`, `/${l}`)}
                  className={`flex items-center gap-2 font-sans text-sm tracking-widest uppercase px-4 py-3 transition-colors duration-200 border-r border-brand-border last:border-r-0 ${
                    l === lang ? "text-white" : "text-brand-gray-light hover:text-white"
                  }`}
                >
                  <span>{flags[l]}</span>
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
