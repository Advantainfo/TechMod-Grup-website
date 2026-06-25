import { AnimateInView } from "@/components/ui/AnimateInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getLocalizedTestimonials, type Lang } from "@/lib/data";

const labels = {
  en: { eyebrow: "Client Testimonials", title: "What Our Clients Say" },
  bg: { eyebrow: "Отзиви на Клиенти", title: "Какво Казват Нашите Клиенти" },
  tr: { eyebrow: "Müşteri Görüşleri", title: "Müşterilerimiz Ne Diyor" },
};

export function TestimonialsSection({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const items = getLocalizedTestimonials(lang);

  return (
    <section className="py-24 lg:py-32 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateInView>
          <SectionTitle eyebrow={t.eyebrow} title={t.title} />
        </AnimateInView>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimateInView key={item.name} delay={i * 100}>
              <div className="flex flex-col gap-6 p-8 border border-brand-border bg-brand-dark hover:border-brand-accent/20 transition-colors duration-300 h-full">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" className="flex-none">
                  <path
                    d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.2 6.8 6.4 12H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.2 6.8 24.4 12H30V24H18z"
                    fill="#C8A26A"
                    fillOpacity="0.4"
                  />
                </svg>
                <blockquote className="font-serif text-lg text-white leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-brand-border">
                  <div
                    className="w-10 h-10 rounded-full flex-none"
                    style={{
                      background: "linear-gradient(135deg, #C8A26A22, #C8A26A55)",
                      border: "1px solid rgba(200,162,106,0.3)",
                    }}
                  >
                    <span className="w-full h-full flex items-center justify-center font-serif text-brand-accent text-sm">
                      {item.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-white text-sm font-medium">{item.name}</p>
                    <p className="font-sans text-brand-gray text-xs">{item.title}</p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
