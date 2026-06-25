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
    labelPhone: "Phone", labelEmail: "Email", labelAddress: "Address", labelHours: "Hours",
    hoursValue: "Monday – Friday\n09:00 – 18:00",
    followWork: "Follow Our Work",
    requestQuote: "Request a Quote",
    fillForm: "Fill in the form below and we'll send you a personalised quote within one business day.",
    locationLabel: "Levent, Istanbul",
  },
  bg: {
    eyebrow: "Свържете се с нас",
    title: "Нека Изградим<br/>Нещо Изключително",
    subtitle: "Всеки велик дом започва с разговор. Разкажете ни за вашия проект и ще се свържем с вас в рамките на един работен ден.",
    getInTouch: "Свържете се",
    labelPhone: "Телефон", labelEmail: "Имейл", labelAddress: "Адрес", labelHours: "Работно Време",
    hoursValue: "Понеделник – Петък\n09:00 – 18:00",
    followWork: "Следете Нашата Работа",
    requestQuote: "Заявете Оферта",
    fillForm: "Попълнете формуляра по-долу и ще ви изпратим персонализирана оферта в рамките на един работен ден.",
    locationLabel: "Леvent, Истанбул",
  },
  tr: {
    eyebrow: "Bize Ulaşın",
    title: "Birlikte Olağanüstü<br/>Bir Şey İnşa Edelim",
    subtitle: "Her harika ev bir konuşmayla başlar. Bize projenizi anlatın, bir iş günü içinde sizinle iletişime geçeceğiz.",
    getInTouch: "İletişime Geçin",
    labelPhone: "Telefon", labelEmail: "E-posta", labelAddress: "Adres", labelHours: "Çalışma Saatleri",
    hoursValue: "Pazartesi – Cuma\n09:00 – 18:00",
    followWork: "Çalışmalarımızı Takip Edin",
    requestQuote: "Teklif Talep Edin",
    fillForm: "Aşağıdaki formu doldurun, bir iş günü içinde kişiselleştirilmiş teklifinizi göndereceğiz.",
    locationLabel: "Levent, İstanbul",
  },
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];

  const contactDetails = [
    { label: t.labelPhone, value: "+90 (212) 555 0100", href: "tel:+902125550100" },
    { label: t.labelEmail, value: "hello@techmodgroup.com", href: "mailto:hello@techmodgroup.com" },
    { label: t.labelAddress, value: "Büyükdere Cad. No:185, Levent\nŞişli, Istanbul 34394", href: null },
    { label: t.labelHours, value: t.hoursValue, href: null },
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
                    {["Instagram", "LinkedIn", "YouTube"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="font-sans text-brand-gray-light text-xs hover:text-brand-accent transition-colors duration-200"
                      >
                        {social}
                      </a>
                    ))}
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

      <section className="h-64 lg:h-80 relative overflow-hidden bg-brand-dark">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(200,162,106,1) 39px, rgba(200,162,106,1) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(200,162,106,1) 39px, rgba(200,162,106,1) 40px)
            `,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-3 h-3 rounded-full bg-brand-accent mx-auto mb-3" />
            <p className="font-sans text-brand-gray text-xs tracking-widest uppercase">
              {t.locationLabel}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
