import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { getLocalizedFaqs, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Frequently Asked",
    title: "Everything You<br/>Need to Know",
    subtitle: "Can't find your answer here? Call us or request a consultation — we're happy to answer any question in detail.",
    stillHave: "Still have questions?",
    teamResponds: "Our team responds to all enquiries within one business day.",
    contact: "Contact Us",
    call: "Call Us",
  },
  bg: {
    eyebrow: "Често Задавани",
    title: "Всичко, което<br/>Трябва да Знаете",
    subtitle: "Не можете да намерите отговора тук? Обадете ни се или заявете консултация — с удоволствие ще отговорим на всеки въпрос подробно.",
    stillHave: "Все още имате въпроси?",
    teamResponds: "Нашият екип отговаря на всички запитвания в рамките на един работен ден.",
    contact: "Свържете се с нас",
    call: "Обадете ни се",
  },
  tr: {
    eyebrow: "Sık Sorulan",
    title: "Bilmeniz Gereken<br/>Her Şey",
    subtitle: "Cevabınızı burada bulamadınız mı? Bizi arayın veya danışma talep edin — her soruyu ayrıntılı yanıtlamaktan memnuniyet duyarız.",
    stillHave: "Hâlâ sorunuz var mı?",
    teamResponds: "Ekibimiz tüm sorulara bir iş günü içinde yanıt verir.",
    contact: "Bize Ulaşın",
    call: "Bizi Arayın",
  },
};

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];
  const faqs = getLocalizedFaqs(l);

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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FAQAccordion items={faqs} />

          <AnimateInView className="mt-16 pt-12 border-t border-brand-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-serif text-xl text-white mb-2">{t.stillHave}</p>
                <p className="font-sans text-brand-gray text-sm">{t.teamResponds}</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button href={`/${l}/contact`} variant="primary">{t.contact}</Button>
                <Button href="tel:+902125550100" variant="outline">{t.call}</Button>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
