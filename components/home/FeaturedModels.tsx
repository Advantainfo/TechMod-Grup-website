import Link from "next/link";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArchImage } from "@/components/ui/ArchImage";
import { Button } from "@/components/ui/Button";
import { getLocalizedModels, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "House Models",
    title: "Designed for<br/>Exceptional Living",
    subtitle: "Each Techmod model is an architectural statement — engineered in our factory and delivered to your site complete.",
    bed: "bed",
    bath: "bath",
    singleStorey: "Single storey",
    twoStoreys: "Two storeys",
    viewModel: "View Model",
    viewAll: "View All Models",
  },
  bg: {
    eyebrow: "Модели Домове",
    title: "Проектирани за<br/>Изключително Живеене",
    subtitle: "Всеки модел на Techmod е архитектурна декларация — произведен в нашия завод и доставен до вашия имот в готов вид.",
    bed: "стая",
    bath: "баня",
    singleStorey: "Едноетажен",
    twoStoreys: "Двуетажен",
    viewModel: "Виж Модела",
    viewAll: "Виж Всички Модели",
  },
  tr: {
    eyebrow: "Ev Modelleri",
    title: "Olağanüstü Yaşam<br/>İçin Tasarlandı",
    subtitle: "Her Techmod modeli mimari bir ifadedir — fabrikamızda üretilir ve sahanıza eksiksiz teslim edilir.",
    bed: "yatak",
    bath: "banyo",
    singleStorey: "Tek katlı",
    twoStoreys: "İki katlı",
    viewModel: "Modeli Gör",
    viewAll: "Tüm Modelleri Gör",
  },
};

export function FeaturedModels({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const featured = getLocalizedModels(lang).slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-brand-secondary architectural-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateInView>
          <SectionTitle
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />
        </AnimateInView>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((model, i) => (
            <AnimateInView key={model.id} delay={i * 100}>
              <Link
                href={`/${lang}/models#${model.id}`}
                className="group block bg-brand-secondary border border-brand-border overflow-hidden transition-all duration-500 hover:border-brand-accent/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
              >
                {/* Full-bleed image with overlay text */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <ArchImage
                    gradient={model.gradient}
                    accent={model.accent}
                    src={model.image}
                    overlay="strong"
                    className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-in-out"
                    label={`${model.name} — ${model.area}m²`}
                  />

                  {/* Badge */}
                  {model.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white bg-brand-accent/90 px-3 py-1.5">
                        {model.badge}
                      </span>
                    </div>
                  )}

                  {/* Area chip */}
                  <div className="absolute top-4 right-4 z-10 font-sans text-[10px] tracking-widest text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 border border-white/10">
                    {model.area}m²
                  </div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-10">
                    <h3 className="font-serif text-2xl text-white group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                      {model.name}
                    </h3>
                    <p className="font-sans text-white/50 text-[10px] tracking-[0.2em] uppercase mt-1">
                      {model.tagline}
                    </p>
                  </div>
                </div>

                {/* Compact info strip */}
                <div className="px-5 py-4 flex items-center justify-between border-t border-brand-border/60">
                  <div className="flex gap-4 text-[11px] font-sans text-brand-gray">
                    <span>{model.bedrooms} {t.bed}</span>
                    <span className="text-brand-border">·</span>
                    <span>{model.bathrooms} {t.bath}</span>
                    <span className="text-brand-border">·</span>
                    <span>{model.stories === 1 ? t.singleStorey : t.twoStoreys}</span>
                  </div>
                  <span className="font-sans text-brand-accent text-[10px] tracking-widest uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                    {t.viewModel}
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView className="mt-12 flex justify-center">
          <Button href={`/${lang}/models`} variant="outline" size="lg">
            {t.viewAll}
          </Button>
        </AnimateInView>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
