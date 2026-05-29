import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getLocalizedProcessSteps, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Our Process",
    title: "Six Steps to<br/>Your New Home",
    subtitle: "We manage every stage with complete transparency. Here is exactly what happens from your first call to your first night in your new home.",
    totalTimeline: "Total Project Timeline",
    timelineValue: "10 – 22 weeks",
    phaseDesign: "Design", phaseProduction: "Production", phaseInstall: "Install",
    faqTeaser: "Have more questions?",
    faqLink: "Read our FAQ →",
  },
  bg: {
    eyebrow: "Нашият Процес",
    title: "Шест Стъпки до<br/>Вашия Нов Дом",
    subtitle: "Управляваме всеки етап с пълна прозрачност. Ето точно какво се случва от вашето първо обаждане до първата нощ в новия ви дом.",
    totalTimeline: "Общ Времеви График на Проекта",
    timelineValue: "10 – 22 седмици",
    phaseDesign: "Проектиране", phaseProduction: "Производство", phaseInstall: "Монтаж",
    faqTeaser: "Имате още въпроси?",
    faqLink: "Прочетете нашите ЧЗВ →",
  },
};

export default async function ProcessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];
  const steps = getLocalizedProcessSteps(l);

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

      <section className="py-16 lg:py-24 bg-brand-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimateInView>
            <div className="bg-brand-dark border border-brand-border p-6 lg:p-8 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-sans text-brand-gray text-[10px] tracking-[0.2em] uppercase mb-2">
                  {t.totalTimeline}
                </p>
                <p className="font-serif text-3xl text-white">{t.timelineValue}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { color: "bg-brand-accent/20 border-brand-accent/40 text-brand-accent", label: t.phaseDesign },
                  { color: "bg-zinc-700/40 border-zinc-600/40 text-brand-gray-light", label: t.phaseProduction },
                  { color: "bg-stone-700/40 border-stone-600/40 text-brand-gray-light", label: t.phaseInstall },
                ].map((phase) => (
                  <span key={phase.label} className={`border font-sans text-xs px-3 py-1.5 ${phase.color}`}>
                    {phase.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimateInView>

          <div className="relative">
            <div
              className="absolute left-[3.5rem] top-8 bottom-8 w-px hidden lg:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(200,162,106,0.3) 10%, rgba(200,162,106,0.3) 90%, transparent)" }}
            />
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <AnimateInView key={step.number} delay={i * 80}>
                  <div className="group relative flex gap-8 lg:gap-12 py-10 lg:py-12 border-b border-brand-border last:border-0">
                    <div className="flex-none relative z-10">
                      <div className="w-14 h-14 border border-brand-border group-hover:border-brand-accent/50 flex items-center justify-center bg-brand-secondary transition-colors duration-300">
                        <span className="font-serif text-xl text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="font-serif text-2xl lg:text-3xl text-white group-hover:text-brand-accent transition-colors duration-300">
                          {step.title}
                        </h3>
                        <span className="font-sans text-xs text-brand-accent border border-brand-accent/30 px-3 py-1">
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-sans text-brand-accent/70 text-xs tracking-widest uppercase mb-4">
                        {step.subtitle}
                      </p>
                      <p className="font-sans text-brand-gray-light text-base leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimateInView>
            <p className="font-sans text-brand-gray text-sm mb-4">{t.faqTeaser}</p>
            <a
              href={`/${l}/faq`}
              className="font-serif text-2xl text-white hover:text-brand-accent transition-colors duration-300"
            >
              {t.faqLink}
            </a>
          </AnimateInView>
        </div>
      </section>

      <ContactCTA lang={l} />
    </>
  );
}
