import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ContactForm } from "@/components/contact/ContactForm";
import type { Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Contact Us",
    title: "Let's Build<br/>Something Extraordinary",
    subtitle: "Every great home starts with a conversation. Tell us about your project and we'll be in touch within one business day.",
    getInTouch: "Get In Touch",
    labelPhone: "Phone",
    followWork: "Follow Our Work",
    requestQuote: "Request a Quote",
    fillForm: "Fill in the form below and we'll send you a personalised quote within one business day.",
  },
  bg: {
    eyebrow: "Свържете се с нас",
    title: "Нека Изградим<br/>Нещо Изключително",
    subtitle: "Всеки велик дом започва с разговор. Разкажете ни за вашия проект и ще се свържем с вас в рамките на един работен ден.",
    getInTouch: "Свържете се",
    labelPhone: "Телефон",
    followWork: "Следете Нашата Работа",
    requestQuote: "Заявете Оферта",
    fillForm: "Попълнете формуляра по-долу и ще ви изпратим персонализирана оферта в рамките на един работен ден.",
  },
  tr: {
    eyebrow: "Bize Ulaşın",
    title: "Birlikte Olağanüstü<br/>Bir Şey İnşa Edelim",
    subtitle: "Her harika ev bir konuşmayla başlar. Bize projenizi anlatın, bir iş günü içinde sizinle iletişime geçeceğiz.",
    getInTouch: "İletişime Geçin",
    labelPhone: "Telefon",
    followWork: "Çalışmalarımızı Takip Edin",
    requestQuote: "Teklif Talep Edin",
    fillForm: "Aşağıdaki formu doldurun, bir iş günü içinde kişiselleştirilmiş teklifinizi göndereceğiz.",
  },
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];

  const contactDetails = [
    { label: t.labelPhone, value: "+32 489 63 62 56", href: "tel:+32489636256" },
  ];

  return (
    <>
      <section className="relative pt-36 pb-0 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(200,162,106,1) 59px, rgba(200,162,106,1) 60px)
            `,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <AnimateInView>
            <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          </AnimateInView>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <AnimateInView direction="left">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-sans text-brand-accent text-[10px] tracking-[0.2em] uppercase mb-6">
                    {t.getInTouch}
                  </p>
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="py-5 border-b border-brand-border">
                      <p className="font-sans text-brand-gray text-[10px] tracking-[0.2em] uppercase mb-2">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-sans text-brand-gray-light text-sm hover:text-brand-accent transition-colors duration-200 whitespace-pre-line"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-sans text-brand-gray-light text-sm whitespace-pre-line">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-sans text-brand-gray text-[10px] tracking-[0.2em] uppercase mb-4">
                    {t.followWork}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/32489636256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-brand-gray-light hover:text-brand-accent transition-colors duration-200"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="font-sans text-xs">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView direction="right" className="lg:col-span-2">
              <div className="bg-brand-dark border border-brand-border p-8 lg:p-10">
                <h2 className="font-serif text-2xl text-white mb-2">{t.requestQuote}</h2>
                <p className="font-sans text-brand-gray text-sm mb-8">{t.fillForm}</p>
                <ContactForm lang={l} />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>
    </>
  );
}
