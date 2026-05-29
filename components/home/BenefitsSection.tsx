import { AnimateInView } from "@/components/ui/AnimateInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getLocalizedBenefits, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Why Techmod Group",
    title: "The Premium<br/>Prefab Difference",
    subtitle: "Factory precision. Architectural quality. Delivered in a fraction of the time.",
  },
  bg: {
    eyebrow: "Защо Techmod Group",
    title: "Разликата на Премиум<br/>Сглобяемото Строителство",
    subtitle: "Фабрична прецизност. Архитектурно качество. Доставено за малко от времето.",
  },
};

const icons: Record<string, React.FC> = {
  clock: ClockIcon,
  shield: ShieldIcon,
  star: StarIcon,
  leaf: LeafIcon,
  tool: ToolIcon,
  home: HomeIcon,
};

export function BenefitsSection({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const items = getLocalizedBenefits(lang);

  return (
    <section className="py-24 lg:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateInView>
          <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </AnimateInView>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((benefit, i) => {
            const Icon = icons[benefit.icon];
            return (
              <AnimateInView key={benefit.icon} delay={i * 80}>
                <div className="group p-8 border border-brand-border hover:border-brand-accent/30 transition-all duration-300 bg-brand-secondary hover:bg-brand-tertiary">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center border border-brand-accent/20 group-hover:border-brand-accent/50 transition-colors duration-300">
                    <span className="text-brand-accent">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-brand-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L3 5v6c0 3.87 3.03 7.5 7 8.5 3.97-1 7-4.63 7-8.5V5L10 2z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2l2.4 4.8L18 7.6l-4 3.9 1 5.4L10 14.2 5 16.9l1-5.4-4-3.9 5.6-.8L10 2z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 16c0 0 4-10 14-12C18 4 10 4 6 10L4 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M4 16l5-5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
function ToolIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14 2a4 4 0 00-4 4c0 .7.19 1.35.5 1.93L3 15.5 4.5 17l7.57-7.5A4 4 0 1014 2z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 9l7-7 7 7v9H3V9z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M8 18v-6h4v6" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}
