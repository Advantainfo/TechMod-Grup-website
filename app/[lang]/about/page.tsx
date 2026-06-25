import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";
import { ArchImage } from "@/components/ui/ArchImage";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Our Story",
    title: "Building Homes That Outlast the Century",
    foundedLabel: "Founded 2014",
    whyTitle: "Why We Started",
    story1: "Techmod Group was founded in 2014 with a simple conviction: the gap between architectural quality and construction practicality was artificial. The finest homes in the world didn't have to take two years and three contractors to build.",
    story2: "Our founder, Kemal Arslan, had spent 15 years watching premium construction projects overrun their budgets, miss their deadlines, and compromise their designs. He believed that factory manufacturing — applied rigorously to residential architecture — could eliminate all three problems simultaneously.",
    story3: "A decade later, we have delivered over 150 homes across Turkey. Our factory in Istanbul produces homes that meet our clients' exacting standards on time and on budget. Every single time.",
    storyCta: "Start a Conversation",
    valuesEyebrow: "Our Values",
    valuesTitle: "What We Stand For",
    values: [
      { title: "Architectural Integrity", description: "We believe prefabricated homes should be architecturally indistinguishable from the finest site-built residences. We hold ourselves to that standard on every project." },
      { title: "Radical Transparency", description: "Fixed prices. Honest timelines. No surprises. We tell you everything upfront because trust is the foundation of every home we build." },
      { title: "Obsessive Quality", description: "Our factory produces homes to tighter tolerances than on-site construction allows. We reject any compromise that affects longevity, insulation, or finish quality." },
      { title: "Sustainability by Design", description: "Every home is designed to perform efficiently for its entire lifespan. Responsible material sourcing and minimal waste are non-negotiable." },
    ],
  },
  bg: {
    eyebrow: "Нашата История",
    title: "Изграждаме Домове, Надживяващи Столетия",
    foundedLabel: "Основана 2014",
    whyTitle: "Защо Започнахме",
    story1: "Techmod Group е основана през 2014 г. с просто убеждение: разликата между архитектурното качество и практичността на строителството беше изкуствена. Най-добрите домове в света не трябваха да отнемат две години и трима изпълнители за изграждане.",
    story2: "Нашият основател Кемал Арслан прекара 15 години, наблюдавайки как премиум строителни проекти надхвърлят бюджетите, изпускат сроковете и компрометират дизайна. Той вярваше, че фабричното производство — прилагано стриктно към жилищната архитектура — може да елиминира и трите проблема едновременно.",
    story3: "Десетилетие по-късно сме доставили над 150 домове в цяла Турция. Нашата фабрика в Истанбул произвежда домове, отговарящи на строгите стандарти на нашите клиенти — навреме и в рамките на бюджета. Всеки единствен път.",
    storyCta: "Започнете Разговор",
    valuesEyebrow: "Нашите Ценности",
    valuesTitle: "За Какво Стоим",
    values: [
      { title: "Архитектурна Цялост", description: "Вярваме, че сглобяемите домове трябва да бъдат архитектурно неотличими от най-изисканите традиционно построени резиденции. Придържаме се към този стандарт при всеки проект." },
      { title: "Радикална Прозрачност", description: "Фиксирани цени. Честни срокове. Без изненади. Казваме ви всичко предварително, защото доверието е основата на всеки дом, който строим." },
      { title: "Обсесивно Качество", description: "Нашата фабрика произвежда домове с по-строги допустими отклонения, отколкото традиционното строителство позволява. Отхвърляме всеки компромис, засягащ дълготрайността, изолацията или качеството на довършването." },
      { title: "Устойчивост по Дизайн", description: "Всеки дом е проектиран да функционира ефективно за целия си жизнен цикъл. Отговорното снабдяване с материали и минималните отпадъци не са предмет на компромис." },
    ],
  },
  tr: {
    eyebrow: "Hikayemiz",
    title: "Yüzyılı Aşacak Evler İnşa Ediyoruz",
    foundedLabel: "Kuruluş 2014",
    whyTitle: "Neden Başladık",
    story1: "Techmod Group, 2014 yılında basit bir inançla kuruldu: mimari kalite ile inşaat pratikliği arasındaki uçurum yapay bir şeydi. Dünyanın en iyi evleri iki yıl ve üç müteahhit gerektirmek zorunda değildi.",
    story2: "Kurucumuz Kemal Arslan, premium inşaat projelerinin bütçeleri aşmasını, son tarihleri kaçırmasını ve tasarımlardan taviz vermesini 15 yıl boyunca izledi. Fabrika üretiminin — konut mimarisine titizlikle uygulandığında — üç sorunu aynı anda ortadan kaldırabileceğine inandı.",
    story3: "On yıl sonra Türkiye genelinde 150'den fazla ev teslim ettik. İstanbul'daki fabrikamız, müşterilerimizin titiz standartlarını karşılayan evler üretiyor — zamanında ve bütçe dahilinde. Her seferinde.",
    storyCta: "Konuşmaya Başlayın",
    valuesEyebrow: "Değerlerimiz",
    valuesTitle: "Neyin Arkasındayız",
    values: [
      { title: "Mimari Bütünlük", description: "Prefabrik evlerin mimari açıdan en iyi sahada inşa edilmiş konutlardan ayırt edilemez olması gerektiğine inanıyoruz. Her projede bu standarda uyuyoruz." },
      { title: "Radikal Şeffaflık", description: "Sabit fiyatlar. Dürüst zaman çizelgeleri. Sürpriz yok. Her şeyi önceden söylüyoruz çünkü güven, inşa ettiğimiz her evin temelidir." },
      { title: "Takıntılı Kalite", description: "Fabrikamız, yerinde inşaatın izin verdiğinden daha sıkı toleranslarla ev üretiyor. Uzun ömrü, yalıtımı veya bitiş kalitesini etkileyen hiçbir tavize izin vermiyoruz." },
      { title: "Tasarımla Sürdürülebilirlik", description: "Her ev, tüm yaşam döngüsü boyunca verimli çalışacak şekilde tasarlanmıştır. Sorumlu malzeme tedariği ve minimum atık tartışılmaz." },
    ],
  },
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];

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
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateInView>
            <p className="font-sans text-brand-accent tracking-[0.2em] uppercase text-xs mb-6">
              {t.eyebrow}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl mb-16">
              {t.title}
            </h1>
          </AnimateInView>
        </div>

        <AnimateInView>
          <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden mt-4">
            <ArchImage
              gradient="from-zinc-700 via-zinc-800 to-stone-900"
              accent="from-amber-900/20 to-transparent"
              src="/images/hero-house.jpg.jpeg"
              className="absolute inset-0"
              label="Techmod Group factory and headquarters"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-transparent" />
          </div>
        </AnimateInView>
      </section>

      <section className="py-24 lg:py-32 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateInView direction="left">
              <div className="flex flex-col gap-6">
                <p className="font-sans text-brand-accent tracking-[0.2em] uppercase text-xs">
                  {t.foundedLabel}
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
                  {t.whyTitle}
                </h2>
              </div>
            </AnimateInView>
            <AnimateInView direction="right">
              <div className="flex flex-col gap-5 font-sans text-brand-gray-light leading-relaxed">
                <p>{t.story1}</p>
                <p>{t.story2}</p>
                <p>{t.story3}</p>
                <Button href={`/${l}/contact`} variant="outline" className="self-start mt-4">
                  {t.storyCta}
                </Button>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateInView>
            <SectionTitle eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
          </AnimateInView>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.values.map((value, i) => (
              <AnimateInView key={value.title} delay={i * 80}>
                <div className="p-8 border border-brand-border hover:border-brand-accent/30 transition-colors duration-300 bg-brand-secondary">
                  <div className="w-8 h-px bg-brand-accent mb-6" />
                  <h3 className="font-serif text-xl text-white mb-4">{value.title}</h3>
                  <p className="font-sans text-brand-gray text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA lang={l} />
    </>
  );
}
