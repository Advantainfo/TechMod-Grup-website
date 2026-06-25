import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ModelCard } from "@/components/models/ModelCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getLocalizedModels, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Our Collection",
    title: "Six Models.<br/>One Standard of Excellence.",
    subtitle: "Each Techmod home is an architectural statement — engineered to factory precision and finished to exacting standards. Choose your starting point.",
  },
  bg: {
    eyebrow: "Нашата Колекция",
    title: "Шест Модела.<br/>Един Стандарт на Съвършенство.",
    subtitle: "Всеки дом Techmod е архитектурна декларация — произведен с фабрична прецизност и завършен по строги стандарти. Изберете вашата отправна точка.",
  },
  tr: {
    eyebrow: "Koleksiyonumuz",
    title: "Altı Model.<br/>Tek Mükemmellik Standardı.",
    subtitle: "Her Techmod evi mimari bir ifadedir — fabrika hassasiyetiyle üretilmiş ve titiz standartlarda bitirilmiştir. Başlangıç noktanızı seçin.",
  },
};

export default async function ModelsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];
  const models = getLocalizedModels(l);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px)
            `,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateInView>
            <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          </AnimateInView>

        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {models.map((model, i) => (
              <AnimateInView key={model.id} delay={i * 60} className="h-full">
                <ModelCard model={model} lang={l} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA lang={l} />
    </>
  );
}
