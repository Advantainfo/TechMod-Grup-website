import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ModelCard } from "@/components/models/ModelCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getLocalizedModels, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Our Range",
    title: "Homes Built<br/>for Every Vision",
    subtitle: "Six models. Infinite possibilities. Each one a complete architectural statement — engineered for precision and finished to exacting standards.",
  },
  bg: {
    eyebrow: "Нашата Гама",
    title: "Домове, Изградени<br/>за Всяка Визия",
    subtitle: "Шест модела. Безкрайни възможности. Всеки е пълна архитектурна декларация — проектирана с прецизност и завършена по строги стандарти.",
  },
};

export default async function ModelsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];
  const models = getLocalizedModels(l);

  return (
    <>
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-brand-dark overflow-hidden">
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

      <section className="py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {models.map((model, i) => (
              <AnimateInView key={model.id} delay={i * 80}>
                <ModelCard model={model} featured={i === 0} lang={l} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA lang={l} />
    </>
  );
}
