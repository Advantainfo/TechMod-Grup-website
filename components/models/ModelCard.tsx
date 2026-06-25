import { Button } from "@/components/ui/Button";
import { ArchImage } from "@/components/ui/ArchImage";
import type { Lang } from "@/lib/data";
import type { getLocalizedModels } from "@/lib/data";

type Model = ReturnType<typeof getLocalizedModels>[number];

const labels = {
  en: {
    area: "Area",
    bedrooms: "Bed",
    bathrooms: "Bath",
    storeys: "Floors",
    included: "Included Features",
    requestQuote: "Request Quote",
    downloadFloorPlan: "Floor Plan",
  },
  bg: {
    area: "Площ",
    bedrooms: "Спални",
    bathrooms: "Бани",
    storeys: "Етажи",
    included: "Включени Характеристики",
    requestQuote: "Заявете Оферта",
    downloadFloorPlan: "Разпределение",
  },
  tr: {
    area: "Alan",
    bedrooms: "Yatak",
    bathrooms: "Banyo",
    storeys: "Kat",
    included: "Dahil Özellikler",
    requestQuote: "Teklif Al",
    downloadFloorPlan: "Kat Planı",
  },
};

interface ModelCardProps {
  model: Model;
  lang: Lang;
}

export function ModelCard({ model, lang }: ModelCardProps) {
  const t = labels[lang];

  return (
    <div
      id={model.id}
      className="group flex flex-col h-full bg-brand-secondary border border-brand-border overflow-hidden scroll-mt-24 transition-all duration-500 hover:border-brand-accent/20 hover:shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
    >
      {/* ── Image ────────────────────────────────── */}
      <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden">
        <ArchImage
          gradient={model.gradient}
          accent={model.accent}
          src={model.image}
          overlay="subtle"
          className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-in-out"
          label={`${model.name} — ${model.area}m²`}
        />
        {model.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white bg-brand-accent/90 px-3 py-1.5 leading-none">
              {model.badge}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ──────────────────────────────── */}
      <div className="flex flex-col flex-1 p-7 lg:p-8">

        {/* Name + Tagline */}
        <div className="mb-5">
          <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight group-hover:text-brand-accent transition-colors duration-300">
            {model.name}
          </h3>
          <p className="font-sans text-brand-accent/70 text-[10px] tracking-[0.28em] uppercase mt-2 leading-none">
            {model.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="font-sans text-brand-gray-light text-sm leading-relaxed mb-6">
          {model.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-4 gap-2 py-5 border-y border-brand-border mb-6">
          {[
            { label: t.area, value: `${model.area}m²` },
            { label: t.bedrooms, value: String(model.bedrooms) },
            { label: t.bathrooms, value: String(model.bathrooms) },
            { label: t.storeys, value: String(model.stories) },
          ].map((spec) => (
            <div key={spec.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-xl text-white">{spec.value}</span>
              <span className="font-sans text-brand-gray text-[9px] tracking-widest uppercase text-center leading-none">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <p className="font-sans text-brand-gray text-[9px] tracking-[0.3em] uppercase mb-3 leading-none">
            {t.included}
          </p>
          <ul className="flex flex-col gap-2.5">
            {model.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <span className="flex-none mt-[7px] w-[3px] h-[3px] rounded-full bg-brand-accent" />
                <span className="font-sans text-sm text-brand-gray-light leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Actions — always at bottom ────────── */}
        <div className="mt-auto pt-6 border-t border-brand-border flex gap-3">
          <Button href={`/${lang}/contact`} variant="primary" className="flex-1">
            {t.requestQuote}
          </Button>
          <Button href={`/${lang}/contact`} variant="outline" className="flex-1">
            {t.downloadFloorPlan}
          </Button>
        </div>
      </div>
    </div>
  );
}
