import { Button } from "@/components/ui/Button";
import { ArchImage } from "@/components/ui/ArchImage";
import type { Lang } from "@/lib/data";
import type { getLocalizedModels } from "@/lib/data";

type Model = ReturnType<typeof getLocalizedModels>[number];

const labels = {
  en: {
    area: "Area", bedrooms: "Bedrooms", bathrooms: "Bathrooms",
    storeys: "Storeys",
    included: "Included Features",
    requestQuote: "Request Quote",
    downloadFloorPlan: "Download Floor Plan",
  },
  bg: {
    area: "Площ", bedrooms: "Спални", bathrooms: "Бани",
    storeys: "Етажи",
    included: "Включени Характеристики",
    requestQuote: "Заявете Оферта",
    downloadFloorPlan: "Изтеглете Разпределение",
  },
};

interface ModelCardProps {
  model: Model;
  featured?: boolean;
  lang: Lang;
}

export function ModelCard({ model, featured = false, lang }: ModelCardProps) {
  const t = labels[lang];
  return (
    <div
      id={model.id}
      className={`group bg-brand-secondary border border-brand-border overflow-hidden card-lift scroll-mt-24 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <ArchImage
          gradient={model.gradient}
          accent={model.accent}
          src={model.image}
          className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
          label={`${model.name} — ${model.area}m² prefab home`}
        />
        {model.badge && (
          <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 z-10">
            {model.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-secondary to-transparent z-10" />
      </div>

      <div className={`p-8 ${featured ? "lg:grid lg:grid-cols-2 lg:gap-12" : ""}`}>
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-3xl text-white group-hover:text-brand-accent transition-colors duration-300">
                {model.name}
              </h3>
              <p className="font-sans text-brand-accent text-xs tracking-widest mt-1">
                {model.tagline}
              </p>
            </div>
          </div>
          <p className="font-sans text-brand-gray-light text-sm leading-relaxed mb-6">
            {model.description}
          </p>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-border mb-6">
            {[
              { label: t.area, value: `${model.area}m²` },
              { label: t.bedrooms, value: model.bedrooms },
              { label: t.bathrooms, value: model.bathrooms },
              { label: t.storeys, value: model.stories },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1">
                <span className="font-sans text-brand-gray text-[10px] tracking-widest uppercase">
                  {spec.label}
                </span>
                <span className="font-serif text-lg text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <p className="font-sans text-brand-gray text-[10px] tracking-[0.2em] uppercase mb-4">
              {t.included}
            </p>
            <ul className="flex flex-col gap-2.5">
              {model.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 font-sans text-sm text-brand-gray-light">
                  <span className="flex-none mt-1.5 w-1 h-1 rounded-full bg-brand-accent" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button href={`/${lang}/contact`} variant="primary">
              {t.requestQuote}
            </Button>
            <Button href={`/${lang}/contact`} variant="outline">
              {t.downloadFloorPlan}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
