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

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((model, i) => (
            <AnimateInView key={model.id} delay={i * 100}>
              <Link
                href={`/${lang}/models#${model.id}`}
                className="group block bg-brand-tertiary border border-brand-border overflow-hidden card-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ArchImage
                    gradient={model.gradient}
                    accent={model.accent}
                    src={model.image}
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    label={`${model.name} — ${model.area}m²`}
                  />
                  {model.badge && (
                    <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 z-10">
                      {model.badge}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-tertiary to-transparent z-10" />
                </div>

                <div className="p-6 lg:p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-2xl text-white group-hover:text-brand-accent transition-colors duration-300">
                        {model.name}
                      </h3>
                      <p className="font-sans text-brand-gray text-xs tracking-wider mt-1">
                        {model.tagline}
                      </p>
                    </div>
                    <span className="font-sans text-brand-gray text-xs mt-1">{model.area}m²</span>
                  </div>

                  <p className="font-sans text-brand-gray-light text-sm leading-relaxed line-clamp-2 mb-5">
                    {model.description}
                  </p>

                  <div className="flex gap-4 text-xs font-sans text-brand-gray mb-6">
                    <span>{model.bedrooms} {t.bed}</span>
                    <span className="text-brand-border">·</span>
                    <span>{model.bathrooms} {t.bath}</span>
                    <span className="text-brand-border">·</span>
                    <span>{model.stories === 1 ? t.singleStorey : t.twoStoreys}</span>
                  </div>

                  <div className="flex items-center justify-end pt-5 border-t border-brand-border">
                    <span className="font-sans text-brand-accent text-xs tracking-widest uppercase group-hover:gap-3 flex items-center gap-2 transition-all duration-300">
                      {t.viewModel}
                      <ArrowRight />
                    </span>
                  </div>
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
