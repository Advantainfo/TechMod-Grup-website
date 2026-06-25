import Link from "next/link";
import type { Lang } from "@/lib/data";

const labels: Record<Lang, Record<string, string>> = {
  en: {
    description: "Premium prefabricated homes designed, manufactured, and installed across Turkey. Architecture without compromise.",
    homesTitle: "Homes",
    companyTitle: "Company",
    allModels: "All Models",
    aboutUs: "About Us",
    projects: "Projects",
    ourProcess: "Our Process",
    faq: "FAQ",
    contact: "Contact",
    allRights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  bg: {
    description: "Премиум сглобяеми домове, проектирани, произведени и монтирани в цяла Турция. Архитектура без компромис.",
    homesTitle: "Домове",
    companyTitle: "Компания",
    allModels: "Всички Модели",
    aboutUs: "За Нас",
    projects: "Проекти",
    ourProcess: "Нашият Процес",
    faq: "Въпроси",
    contact: "Контакт",
    allRights: "Всички права запазени.",
    privacy: "Политика за Поверителност",
    terms: "Условия за Ползване",
  },
  tr: {
    description: "Türkiye genelinde tasarlanan, üretilen ve kurulan premium prefabrik evler. Mimaride taviz yok.",
    homesTitle: "Evler",
    companyTitle: "Şirket",
    allModels: "Tüm Modeller",
    aboutUs: "Hakkımızda",
    projects: "Projeler",
    ourProcess: "Sürecimiz",
    faq: "SSS",
    contact: "İletişim",
    allRights: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
  },
};

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = labels[lang];

  const footerLinks = {
    [t.homesTitle]: [
      { href: `/${lang}/models`, label: t.allModels },
      { href: `/${lang}/models#skyline-180`, label: "Skyline 180" },
      { href: `/${lang}/models#vista-240`, label: "Vista 240" },
      { href: `/${lang}/models#summit-320`, label: "Summit 320" },
      { href: `/${lang}/models#pinnacle-400`, label: "Pinnacle 400" },
    ],
    [t.companyTitle]: [
      { href: `/${lang}/about`, label: t.aboutUs },
      { href: `/${lang}/projects`, label: t.projects },
      { href: `/${lang}/process`, label: t.ourProcess },
      { href: `/${lang}/faq`, label: t.faq },
      { href: `/${lang}/contact`, label: t.contact },
    ],
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-5 max-w-sm">
              <Link href={`/${lang}`} className="flex flex-col leading-none w-fit">
                <span className="font-serif text-white text-2xl tracking-wider">Techmod</span>
                <span className="font-sans text-brand-gray text-[9px] tracking-[0.3em] uppercase mt-1">
                  Group
                </span>
              </Link>
              <p className="font-sans text-brand-gray text-sm leading-relaxed">{t.description}</p>
              <div className="flex flex-col gap-2 text-sm font-sans">
                <a
                  href="tel:+902125550100"
                  className="text-brand-gray-light hover:text-brand-accent transition-colors duration-200"
                >
                  +90 (212) 555 0100
                </a>
                <a
                  href="mailto:hello@techmodgroup.com"
                  className="text-brand-gray-light hover:text-brand-accent transition-colors duration-200"
                >
                  hello@techmodgroup.com
                </a>
                <address className="text-brand-gray not-italic leading-relaxed mt-1">
                  Levent, Büyükdere Caddesi No:185
                  <br />
                  Şişli, Istanbul 34394
                </address>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-sans text-white text-xs tracking-[0.2em] uppercase mb-6">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-brand-gray text-sm hover:text-brand-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-brand-gray text-xs">
            © {new Date().getFullYear()} Techmod Group. {t.allRights}
          </p>
          <div className="flex gap-6">
            <Link
              href={`/${lang}/privacy`}
              className="font-sans text-brand-gray text-xs hover:text-brand-accent transition-colors duration-200"
            >
              {t.privacy}
            </Link>
            <Link
              href={`/${lang}/terms`}
              className="font-sans text-brand-gray text-xs hover:text-brand-accent transition-colors duration-200"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
