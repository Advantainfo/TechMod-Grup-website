import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/data";

const t = {
  en: {
    eyebrow: "Premium Prefabricated Homes",
    line1: "Crafted for",
    line2: "Extraordinary",
    line3: "Living",
    desc: "Techmod Group designs, manufactures, and installs premium prefabricated homes that redefine modern luxury — delivered in weeks, not years.",
    cta1: "Explore Models",
    cta2: "Request Consultation",
    scroll: "Scroll",
    stat1Val: "150+", stat1Label: "Homes Delivered",
    stat2Val: "14 wks", stat2Label: "Average Build Time",
    stat3Val: "25 yr", stat3Label: "Structural Warranty",
  },
  bg: {
    eyebrow: "Премиум Сглобяеми Домове",
    line1: "Създадено за",
    line2: "Изключително",
    line3: "Живеене",
    desc: "Techmod Group проектира, произвежда и монтира премиум сглобяеми домове, които преосмислят съвременния лукс — доставени за седмици, не години.",
    cta1: "Разгледайте Моделите",
    cta2: "Заявете Консултация",
    scroll: "Скрол",
    stat1Val: "150+", stat1Label: "Доставени Домове",
    stat2Val: "14 седм.", stat2Label: "Средно Строително Време",
    stat3Val: "25 год.", stat3Label: "Гаранция за Конструкцията",
  },
  tr: {
    eyebrow: "Premium Prefabrik Evler",
    line1: "Olağanüstü",
    line2: "Yaşam",
    line3: "İçin",
    desc: "Techmod Group, modern lüksü yeniden tanımlayan premium prefabrik evler tasarlar, üretir ve kurar — yıllarca değil, haftalar içinde teslim edilir.",
    cta1: "Modelleri İnceleyin",
    cta2: "Danışma Talep Edin",
    scroll: "Kaydır",
    stat1Val: "150+", stat1Label: "Teslim Edilen Ev",
    stat2Val: "14 hafta", stat2Label: "Ortalama İnşaat Süresi",
    stat3Val: "25 yıl", stat3Label: "Yapısal Garanti",
  },
};

export function HeroSection({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-brand-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-stone-950 to-zinc-900" />
        <div
          className="absolute right-0 top-0 w-[65%] h-full opacity-100"
          style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #141414 50%, #0f0f0f 100%)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 119px, rgba(200,162,106,0.12) 119px, rgba(200,162,106,0.12) 120px)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(200,162,106,0.08) 99px, rgba(200,162,106,0.08) 100px)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 60%, rgba(180,120,50,0.12) 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-0 left-1/4 right-0 h-40"
            style={{ background: "linear-gradient(to bottom, rgba(200,162,106,0.06), transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: "linear-gradient(to top, rgba(100,80,40,0.15), transparent)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent" />
        <div
          className="absolute right-[35%] top-0 bottom-0 w-px opacity-30"
          style={{ background: "linear-gradient(to bottom, transparent, #C8A26A 30%, #C8A26A 70%, transparent)" }}
        />
      </div>

      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-3 z-10">
        <div
          className="w-px h-20 opacity-40"
          style={{ background: "linear-gradient(to bottom, transparent, #C8A26A)" }}
        />
        <span
          className="font-sans text-brand-gray text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-lr" }}
        >
          {c.scroll}
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32 pt-32">
        <div className="max-w-2xl">
          <p className="animate-slide-up font-sans text-brand-accent tracking-[0.25em] uppercase text-xs mb-8">
            {c.eyebrow}
          </p>
          <h1 className="animate-slide-up-delay-1 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-8">
            {c.line1}
            <br />
            <em className="not-italic text-gradient-gold">{c.line2}</em>
            <br />
            {c.line3}
          </h1>
          <p className="animate-slide-up-delay-2 font-sans text-brand-gray-light text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
            {c.desc}
          </p>
          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button href={`/${lang}/models`} variant="primary" size="lg">
              {c.cta1}
            </Button>
            <Button href={`/${lang}/contact`} variant="outline" size="lg">
              {c.cta2}
            </Button>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: c.stat1Val, label: c.stat1Label },
            { value: c.stat2Val, label: c.stat2Label },
            { value: c.stat3Val, label: c.stat3Label },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-white">{stat.value}</span>
              <span className="font-sans text-brand-gray text-xs tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
