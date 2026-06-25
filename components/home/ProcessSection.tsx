import { AnimateInView } from "@/components/ui/AnimateInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { getLocalizedProcessSteps, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "How It Works",
    title: "From Brief<br/>to Keys",
    subtitle: "A seamless six-step journey from your initial consultation to the day you step through your front door.",
    cta: "Full Process Overview",
    avgTimeline: "Average total timeline: 10–22 weeks",
    viewAll: "View all 6 steps →",
  },
  bg: {
    eyebrow: "Как Работи",
    title: "От Идея<br/>до Ключове",
    subtitle: "Безпроблемно шест-стъпково пътуване от началната консултация до деня, в който влизате в новия си дом.",
    cta: "Пълен Преглед на Процеса",
    avgTimeline: "Средно общо времетраене: 10–22 седмици",
    viewAll: "Виж всички 6 стъпки →",
  },
  tr: {
    eyebrow: "Nasıl Çalışır",
    title: "Brifingden<br/>Anahtara",
    subtitle: "İlk danışmadan yeni evinizin kapısından ilk adımı attığınız güne kadar sorunsuz altı adımlık yolculuk.",
    cta: "Tam Süreç Genel Bakışı",
    avgTimeline: "Ortalama toplam süre: 10–22 hafta",
    viewAll: "Tüm 6 adımı gör →",
  },
};

export function ProcessSection({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const preview = getLocalizedProcessSteps(lang).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimateInView direction="left" className="lg:sticky lg:top-32">
            <SectionTitle
              eyebrow={t.eyebrow}
              title={t.title}
              subtitle={t.subtitle}
              align="left"
            />
            <div className="mt-10 flex flex-col gap-4">
              <Button href={`/${lang}/process`} variant="primary">
                {t.cta}
              </Button>
              <p className="font-sans text-brand-gray text-xs">{t.avgTimeline}</p>
            </div>
          </AnimateInView>

          <div className="flex flex-col gap-0">
            {preview.map((step, i) => (
              <AnimateInView key={step.number} delay={i * 100}>
                <div className="group flex gap-6 py-8 border-b border-brand-border last:border-0 hover:pl-2 transition-all duration-300">
                  <div className="flex-none pt-1">
                    <span className="font-serif text-3xl text-brand-accent/40 group-hover:text-brand-accent transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl text-white">{step.title}</h3>
                      <span className="font-sans text-brand-gray text-xs border border-brand-border px-2 py-0.5">
                        {step.duration}
                      </span>
                    </div>
                    <p className="font-sans text-brand-gray text-xs tracking-wider mb-2">
                      {step.subtitle}
                    </p>
                    <p className="font-sans text-brand-gray-light text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateInView>
            ))}
            <AnimateInView>
              <div className="pt-8 pl-0 flex items-center gap-4">
                <div
                  className="flex-none w-px h-10 opacity-30"
                  style={{ background: "linear-gradient(to bottom, #C8A26A, transparent)" }}
                />
                <Button href={`/${lang}/process`} variant="ghost">
                  {t.viewAll}
                </Button>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
