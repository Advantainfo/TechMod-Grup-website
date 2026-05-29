import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Start Your Journey",
    title1: "Your Dream Home is",
    title2: "14 Weeks Away",
    desc: "Book a free consultation with our architectural team. We'll review your site, discuss your vision, and provide a no-obligation quote — all within one week.",
    cta1: "Book a Consultation",
    cta2: "Browse Models",
    stat1Val: "Free", stat1Label: "Consultation",
    stat2Val: "1 week", stat2Label: "Quote Turnaround",
    stat3Val: "Fixed", stat3Label: "Price Guarantee",
    stat4Val: "No", stat4Label: "Hidden Costs",
  },
  bg: {
    eyebrow: "Започнете Пътешествието",
    title1: "Вашият Мечтан Дом е",
    title2: "14 Седмици Разстояние",
    desc: "Запазете безплатна консултация с нашия архитектурен екип. Ще прегледаме вашия имот, ще обсъдим вашата визия и ще предоставим оферта без ангажимент — всичко в рамките на една седмица.",
    cta1: "Запазете Консултация",
    cta2: "Разгледайте Моделите",
    stat1Val: "Безплатна", stat1Label: "Консултация",
    stat2Val: "1 седмица", stat2Label: "Срок за Оферта",
    stat3Val: "Фиксирана", stat3Label: "Гаранция за Цена",
    stat4Val: "Без", stat4Label: "Скрити Разходи",
  },
};

export function ContactCTA({ lang }: { lang: Lang }) {
  const t = labels[lang];
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(200,162,106,0.08) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px)
            `,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,162,106,0.4))" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
          style={{ background: "linear-gradient(to top, transparent, rgba(200,162,106,0.4))" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <AnimateInView>
          <p className="font-sans text-brand-accent tracking-[0.25em] uppercase text-xs mb-8">
            {t.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
            {t.title1}
            <br />
            <span className="text-gradient-gold">{t.title2}</span>
          </h2>
          <p className="font-sans text-brand-gray-light text-base lg:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${lang}/contact`} variant="primary" size="lg">
              {t.cta1}
            </Button>
            <Button href={`/${lang}/models`} variant="outline" size="lg">
              {t.cta2}
            </Button>
          </div>
        </AnimateInView>

        <AnimateInView delay={200} className="mt-16 pt-12 border-t border-brand-border">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: t.stat1Val, label: t.stat1Label },
              { value: t.stat2Val, label: t.stat2Label },
              { value: t.stat3Val, label: t.stat3Label },
              { value: t.stat4Val, label: t.stat4Label },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-serif text-2xl text-brand-accent">{item.value}</span>
                <span className="font-sans text-brand-gray text-xs tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
