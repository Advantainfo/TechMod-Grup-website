"use client";

import { useState, useEffect } from "react";
import type { Lang } from "@/lib/data";

const STORAGE_KEY = "techmod_cookie_consent";

const labels: Record<Lang, { title: string; text: string; accept: string; decline: string }> = {
  en: {
    title: "We use cookies",
    text: "We use essential cookies to keep this website running smoothly. With your consent, we also use analytics cookies to improve our website. You can accept or decline non-essential cookies.",
    accept: "Accept All",
    decline: "Decline",
  },
  bg: {
    title: "Използваме бисквитки",
    text: "Използваме основни бисквитки, за да поддържаме уебсайта в изправност. С вашето съгласие използваме и аналитични бисквитки за подобряване на сайта. Можете да приемете или откажете незадължителните бисквитки.",
    accept: "Приемам всички",
    decline: "Отказ",
  },
  tr: {
    title: "Çerez kullanıyoruz",
    text: "Bu web sitesinin sorunsuz çalışması için temel çerezler kullanıyoruz. Onayınızla, sitemizi geliştirmek amacıyla analitik çerezler de kullanıyoruz. Zorunlu olmayan çerezleri kabul edebilir veya reddedebilirsiniz.",
    accept: "Tümünü Kabul Et",
    decline: "Reddet",
  },
};

export function CookieBanner({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);
  const t = labels[lang];

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-[#0d0d0d]/95 backdrop-blur-sm shadow-[0_-12px_40px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-10">
        <div className="flex-1 min-w-0">
          <p className="font-sans text-white text-sm font-medium mb-1">{t.title}</p>
          <p className="font-sans text-brand-gray text-xs leading-relaxed">{t.text}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs tracking-wide text-brand-gray hover:text-white border border-brand-border hover:border-white/30 px-5 py-2.5 transition-colors duration-200"
          >
            {t.decline}
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs tracking-wide font-medium text-brand-dark bg-brand-accent hover:bg-brand-accent/85 px-5 py-2.5 transition-colors duration-200"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
