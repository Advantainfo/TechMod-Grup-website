export type Lang = "en" | "bg";

export const models = [
  {
    id: "skyline-180",
    name: "Skyline 180",
    tagline: "The Art of Modern Living",
    tagline_bg: "Изкуството на Съвременния Живот",
    area: 180,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    price: 285000,
    description:
      "A masterfully designed single-story home that balances open-plan living with architectural precision. Floor-to-ceiling glazing floods every room with natural light.",
    description_bg:
      "Майсторски проектиран едноетажен дом, балансиращ отворен жилищен план с архитектурна прецизност. Остъклени прозорци от пода до тавана заливат всяка стая с естествена светлина.",
    features: [
      "Floor-to-ceiling glazing",
      "Open-plan kitchen & living",
      "Master suite with en-suite",
      "Covered terrace 40m²",
      "Smart home integration",
    ],
    features_bg: [
      "Остъкляване от пода до тавана",
      "Отворен план кухня и хол",
      "Главна спалня с собствена баня",
      "Покрита тераса 40m²",
      "Интеграция на умен дом",
    ],
    gradient: "from-zinc-800 via-zinc-900 to-stone-900",
    accent: "from-amber-900/30 to-transparent",
    badge: "Most Popular",
    badge_bg: "Най-Популярен",
    image: "/images/skyline-180.jpg.jpeg",
  },
  {
    id: "vista-240",
    name: "Vista 240",
    tagline: "Space Meets Elegance",
    tagline_bg: "Пространство Среща Елегантността",
    area: 240,
    bedrooms: 4,
    bathrooms: 3,
    stories: 2,
    price: 385000,
    description:
      "Two levels of refined living space wrapped in black aluminum cladding and warm timber accents. Designed for families who refuse to compromise.",
    description_bg:
      "Два етажа изискано жилищно пространство, облечено в черна алуминиева обшивка и топли дървени акценти. Проектирано за семейства, отказващи компромиси.",
    features: [
      "Black aluminum facade",
      "Timber feature ceilings",
      "Home office suite",
      "Rooftop terrace 60m²",
      "Underfloor heating",
    ],
    features_bg: [
      "Черна алуминиева фасада",
      "Таванни облицовки от дърво",
      "Офис апартамент",
      "Покривна тераса 60m²",
      "Подово отопление",
    ],
    gradient: "from-slate-800 via-slate-900 to-zinc-900",
    accent: "from-orange-900/25 to-transparent",
    badge: "New Model",
    badge_bg: "Нов Модел",
    image: "/images/vista-240.jpg.jpeg",
  },
  {
    id: "summit-320",
    name: "Summit 320",
    tagline: "Pinnacle of Prefab Luxury",
    tagline_bg: "Върхът на Сглобяемия Лукс",
    area: 320,
    bedrooms: 5,
    bathrooms: 4,
    stories: 2,
    price: 520000,
    description:
      "Our flagship model. An architectural statement that commands its landscape. Expansive volumes, double-height living spaces, and bespoke finishes throughout.",
    description_bg:
      "Нашият флагмански модел. Архитектурна декларация, доминираща своето местоположение. Просторни обеми, дневни с двойна височина и персонализирано обзавеждане навсякъде.",
    features: [
      "Double-height living room",
      "Bespoke kitchen island",
      "Gym & wellness suite",
      "Wraparound terrace 90m²",
      "Cinema room",
    ],
    features_bg: [
      "Дневна с двойна височина",
      "Персонализиран кухненски остров",
      "Зала за фитнес и уелнес",
      "Тераса около периметъра 90m²",
      "Кино зала",
    ],
    gradient: "from-stone-800 via-zinc-900 to-neutral-900",
    accent: "from-yellow-900/20 to-transparent",
    badge: "Flagship",
    badge_bg: "Флагман",
    image: "/images/summit-320.jpg.jpeg",
  },
  {
    id: "studio-65",
    name: "Studio 65",
    tagline: "Refined Compact Living",
    tagline_bg: "Изискан Компактен Живот",
    area: 65,
    bedrooms: 1,
    bathrooms: 1,
    stories: 1,
    price: 125000,
    description:
      "Intelligent design at its most distilled. Every square metre maximised for comfort and style. The perfect retreat, guest house, or investment property.",
    description_bg:
      "Интелигентен дизайн в най-чистата му форма. Всеки квадратен метър максимално оползотворен за комфорт и стил. Перфектно убежище, гостна стая или инвестиционен имот.",
    features: [
      "Loft sleeping platform",
      "Japanese-inspired bathroom",
      "Built-in storage system",
      "Private deck 20m²",
      "Solar-ready",
    ],
    features_bg: [
      "Галерийна спалня",
      "Баня в японски стил",
      "Вградена система за съхранение",
      "Частна тераса 20m²",
      "Готов за соларни панели",
    ],
    gradient: "from-neutral-800 via-zinc-900 to-stone-900",
    accent: "from-amber-900/35 to-transparent",
    badge: null,
    badge_bg: null,
    image: "/images/studio-65.jpg.jpeg",
  },
  {
    id: "horizon-160",
    name: "Horizon 160",
    tagline: "Seamless Indoor-Outdoor Flow",
    tagline_bg: "Плавен Преход Вътре-Вън",
    area: 160,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    price: 245000,
    description:
      "Sliding glass walls dissolve the boundary between living room and landscape. Designed for those who want to live alongside nature without sacrificing luxury.",
    description_bg:
      "Плъзгащите се стъклени стени разтварят границата между хола и природния пейзаж. Проектирано за тези, които искат да живеят до природата, без да жертват лукса.",
    features: [
      "Full-width sliding walls",
      "Integrated indoor garden",
      "Floating bathroom vanities",
      "Wraparound deck 50m²",
      "Passive solar design",
    ],
    features_bg: [
      "Плъзгащи се стени на пълна ширина",
      "Интегрирана вътрешна градина",
      "Плаващи мивки в банята",
      "Палубна тераса около периметъра 50m²",
      "Пасивен соларен дизайн",
    ],
    gradient: "from-zinc-700 via-zinc-800 to-stone-900",
    accent: "from-green-900/20 to-transparent",
    badge: null,
    badge_bg: null,
    image: "/images/horizon-160.jpg.jpeg",
  },
  {
    id: "pinnacle-400",
    name: "Pinnacle 400",
    tagline: "An Estate Without Compromise",
    tagline_bg: "Имение Без Компромис",
    area: 400,
    bedrooms: 6,
    bathrooms: 5,
    stories: 2,
    price: 680000,
    description:
      "The absolute pinnacle of prefabricated luxury. Custom-designed volumes, gallery-worthy interiors, and estate-grade outdoor amenities. Tailored entirely to your vision.",
    description_bg:
      "Абсолютният връх на сглобяемия лукс. Персонализирани обеми, галерийни интериори и имотно-ниво външни удобства. Напълно адаптирано към вашата визия.",
    features: [
      "Private indoor pool option",
      "Wine cellar & bar",
      "Guest suite with kitchenette",
      "Heated garaging for 3 cars",
      "Fully bespoke interior",
    ],
    features_bg: [
      "Опция за частен закрит басейн",
      "Мазе за вино и бар",
      "Гостна стая с кухненски бокс",
      "Отопляем гараж за 3 автомобила",
      "Изцяло по поръчка интериор",
    ],
    gradient: "from-stone-700 via-zinc-800 to-neutral-900",
    accent: "from-amber-800/20 to-transparent",
    badge: "Bespoke",
    badge_bg: "По Поръчка",
    image: "/images/pinnacle-400.jpg.jpeg",
  },
];

export function getLocalizedModels(lang: Lang) {
  return models.map((m) => ({
    ...m,
    tagline: lang === "bg" ? m.tagline_bg : m.tagline,
    description: lang === "bg" ? m.description_bg : m.description,
    features: lang === "bg" ? m.features_bg : m.features,
    badge: lang === "bg" ? m.badge_bg : m.badge,
  }));
}

export const projects = [
  {
    id: "ankara-villa",
    name: "Ankara Villa Residence",
    location: "Ankara, Turkey",
    year: 2024,
    area: 240,
    model: "Vista 240",
    buildTime: "14 weeks",
    buildTime_bg: "14 седмици",
    description:
      "A four-bedroom family home delivered and installed in just 14 weeks. Set across a generous plot, the home balances privacy with breathtaking views of the Anatolian landscape.",
    description_bg:
      "Четириспален семеен дом, доставен и монтиран само за 14 седмици. Разположен в просторен парцел, домът балансира уединение с дъх-спиращи гледки към анадолския пейзаж.",
    details: [
      "Custom exterior timber cladding",
      "Heated outdoor infinity pool",
      "Private cinema room",
      "Landscaped garden 800m²",
    ],
    details_bg: [
      "Персонализирана дървена облицовка на екстериора",
      "Открит отопляем безкраен басейн",
      "Частна кино зала",
      "Озеленена градина 800m²",
    ],
    gradient: "from-stone-800 via-zinc-900 to-neutral-950",
    image: "/images/vista-240.jpg.jpeg",
  },
  {
    id: "bursa-mountain",
    name: "Uludağ Mountain Retreat",
    location: "Bursa, Turkey",
    year: 2024,
    area: 180,
    model: "Skyline 180",
    buildTime: "11 weeks",
    buildTime_bg: "11 седмици",
    description:
      "Perched at 1,400m elevation, this mountain retreat was engineered to withstand extreme weather conditions without compromising on warmth or elegance.",
    description_bg:
      "Разположено на 1 400 м надморска височина, това планинско убежище е конструирано да издържи екстремни метеорологични условия, без да компрометира топлотата или елегантността.",
    details: [
      "Triple-glazed thermal windows",
      "Radiant floor heating throughout",
      "Timber and stone facade",
      "Panoramic mountain terrace",
    ],
    details_bg: [
      "Тройно остъклени термични прозорци",
      "Лъчисто подово отопление навсякъде",
      "Фасада от дърво и камък",
      "Панорамна планинска тераса",
    ],
    gradient: "from-slate-700 via-slate-900 to-zinc-950",
    image: "/images/skyline-180.jpg.jpeg",
  },
  {
    id: "izmir-coastal",
    name: "Çeşme Coastal Estate",
    location: "Izmir, Turkey",
    year: 2023,
    area: 320,
    model: "Summit 320",
    buildTime: "18 weeks",
    buildTime_bg: "18 седмици",
    description:
      "A statement coastal home where the Aegean becomes part of the interior. Completed in 18 weeks, this flagship project redefines what prefabricated architecture can achieve.",
    description_bg:
      "Представително крайбрежно жилище, в което Егейско море се превръща в част от интериора. Завършено за 18 седмици, този флагмански проект предефинира какво може да постигне сглобяемата архитектура.",
    details: [
      "Private beach access",
      "Infinity pool overlooking the sea",
      "Outdoor kitchen & dining",
      "Guest annexe 65m²",
    ],
    details_bg: [
      "Частен достъп до плажа",
      "Безкраен басейн с изглед към морето",
      "Открита кухня и трапезария",
      "Гостна флигел 65m²",
    ],
    gradient: "from-blue-900 via-slate-900 to-zinc-950",
    image: "/images/summit-320.jpg.jpeg",
  },
  {
    id: "abant-forest",
    name: "Abant Forest Studio",
    location: "Bolu, Turkey",
    year: 2024,
    area: 65,
    model: "Studio 65",
    buildTime: "6 weeks",
    buildTime_bg: "6 седмици",
    description:
      "A nature retreat designed to nestle imperceptibly within an ancient forest. Installed in just six weeks with minimal site disturbance.",
    description_bg:
      "Природно убежище, проектирано да се вписва незабележимо в древна гора. Монтирано само за шест седмици с минимални нарушения на терена.",
    details: [
      "Reclaimed timber cladding",
      "Solar panel array",
      "Rainwater harvesting",
      "Private forest access",
    ],
    details_bg: [
      "Облицовка от рециклирано дърво",
      "Масив соларни панели",
      "Събиране на дъждовна вода",
      "Частен достъп до гората",
    ],
    gradient: "from-green-900 via-zinc-900 to-stone-950",
    image: "/images/studio-65.jpg.jpeg",
  },
  {
    id: "istanbul-terrace",
    name: "Beşiktaş Terrace House",
    location: "Istanbul, Turkey",
    year: 2023,
    area: 160,
    model: "Horizon 160",
    buildTime: "10 weeks",
    buildTime_bg: "10 седмици",
    description:
      "Delivered into the heart of Istanbul — proving that premium prefabricated construction has a place in the world's most vibrant urban environments.",
    description_bg:
      "Доставено в сърцето на Истанбул — доказвайки, че премиум сглобяемото строителство има място в най-живите градски среди на света.",
    details: [
      "Bosphorus view terrace",
      "Custom steel & glass facade",
      "Integrated rooftop garden",
      "Smart building automation",
    ],
    details_bg: [
      "Тераса с изглед към Босфора",
      "Персонализирана фасада от стомана и стъкло",
      "Интегрирана покривна градина",
      "Интелигентна автоматизация на сградата",
    ],
    gradient: "from-neutral-700 via-zinc-900 to-stone-950",
    image: "/images/horizon-160.jpg.jpeg",
  },
  {
    id: "antalya-estate",
    name: "Kalkan Hillside Estate",
    location: "Antalya, Turkey",
    year: 2023,
    area: 400,
    model: "Pinnacle 400",
    buildTime: "22 weeks",
    buildTime_bg: "22 седмици",
    description:
      "Our most ambitious project to date. A six-bedroom estate overlooking the Mediterranean, complete with an indoor pool, wine cellar, and private garage.",
    description_bg:
      "Нашият най-амбициозен проект досега. Шестспален имот с изглед към Средиземно море, пълен с закрит басейн, мазе за вино и частен гараж.",
    details: [
      "Indoor 15m lap pool",
      "Professional-grade kitchen",
      "Home automation by Crestron",
      "Terraced Mediterranean garden",
    ],
    details_bg: [
      "Закрит 15-метров плувен басейн",
      "Кухня от професионален клас",
      "Домашна автоматизация от Crestron",
      "Тераса с медитерански градини",
    ],
    gradient: "from-amber-900 via-zinc-900 to-neutral-950",
    image: "/images/pinnacle-400.jpg.jpeg",
  },
];

export function getLocalizedProjects(lang: Lang) {
  return projects.map((p) => ({
    ...p,
    buildTime: lang === "bg" ? p.buildTime_bg : p.buildTime,
    description: lang === "bg" ? p.description_bg : p.description,
    details: lang === "bg" ? p.details_bg : p.details,
  }));
}

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    title_bg: "Консултация",
    subtitle: "Your vision, clarified",
    subtitle_bg: "Вашата визия, изяснена",
    description:
      "We begin with a detailed consultation to understand your lifestyle, budget, site conditions, and design aspirations. Our architects translate your vision into a clear brief.",
    description_bg:
      "Започваме с подробна консултация, за да разберем вашия начин на живот, бюджет, условия на обекта и дизайнерски амбиции. Нашите архитекти превръщат вашата визия в ясно задание.",
    duration: "1–2 weeks",
    duration_bg: "1–2 седмици",
  },
  {
    number: "02",
    title: "Design",
    title_bg: "Проектиране",
    subtitle: "Architecture, crafted",
    subtitle_bg: "Архитектура, сътворена",
    description:
      "Our design team develops architectural drawings, 3D renders, and material selections. You review and refine until every detail is exactly right.",
    description_bg:
      "Нашият дизайнерски екип разработва архитектурни чертежи, 3D визуализации и избор на материали. Преглеждате и усъвършенствате, докато всеки детайл е точно правилен.",
    duration: "2–4 weeks",
    duration_bg: "2–4 седмици",
  },
  {
    number: "03",
    title: "Production",
    title_bg: "Производство",
    subtitle: "Factory precision",
    subtitle_bg: "Фабрична прецизност",
    description:
      "Your home is manufactured in our controlled facility to exacting tolerances. Factory conditions eliminate the delays and variability of on-site construction.",
    description_bg:
      "Вашият дом се произвежда в нашето контролирано предприятие с изключителни допустими отклонения. Фабричните условия елиминират закъсненията и вариабилността на строителството на място.",
    duration: "8–16 weeks",
    duration_bg: "8–16 седмици",
  },
  {
    number: "04",
    title: "Transportation",
    title_bg: "Транспорт",
    subtitle: "Engineered for movement",
    subtitle_bg: "Проектирано за движение",
    description:
      "Completed modules are carefully loaded and transported to your site. Our logistics team manages every permit, route, and timeline.",
    description_bg:
      "Завършените модули се зареждат внимателно и транспортират до вашия обект. Нашият екип по логистика управлява всяко разрешително, маршрут и срок.",
    duration: "1–2 weeks",
    duration_bg: "1–2 седмици",
  },
  {
    number: "05",
    title: "Installation",
    title_bg: "Монтаж",
    subtitle: "Assembled in days",
    subtitle_bg: "Сглобено за дни",
    description:
      "Our specialist installation crew assembles your home on-site. Modules are craned into position, connected, and finished to a standard that rivals traditional construction.",
    description_bg:
      "Нашият специализиран монтажен екип сглобява вашия дом на обекта. Модулите се поставят с кран, свързват се и се завършват до стандарт, съперничещ на традиционното строителство.",
    duration: "1–3 weeks",
    duration_bg: "1–3 седмици",
  },
  {
    number: "06",
    title: "Handover",
    title_bg: "Предаване",
    subtitle: "Welcome home",
    subtitle_bg: "Добре дошли у дома",
    description:
      "A complete walkthrough, documentation package, and warranty. Your dedicated aftercare contact ensures any questions are answered long after you move in.",
    description_bg:
      "Пълно разходяне, документационен пакет и гаранция. Вашият специален контакт за следпродажбено обслужване гарантира, че всички въпроси са отговорени дълго след нанасянето ви.",
    duration: "1 week",
    duration_bg: "1 седмица",
  },
];

export function getLocalizedProcessSteps(lang: Lang) {
  return processSteps.map((s) => ({
    ...s,
    title: lang === "bg" ? s.title_bg : s.title,
    subtitle: lang === "bg" ? s.subtitle_bg : s.subtitle,
    description: lang === "bg" ? s.description_bg : s.description,
    duration: lang === "bg" ? s.duration_bg : s.duration,
  }));
}

export const benefits = [
  {
    icon: "clock",
    title: "4× Faster",
    title_bg: "4× По-Бързо",
    description:
      "Factory production runs concurrently with site preparation, cutting total build time by up to 75% compared to traditional construction.",
    description_bg:
      "Фабричното производство върви едновременно с подготовката на обекта, намалявайки общото строително време с до 75% в сравнение с традиционното строителство.",
  },
  {
    icon: "shield",
    title: "Fixed-Price Guarantee",
    title_bg: "Гаранция за Фиксирана Цена",
    description:
      "Your price is locked at contract signing. No hidden extras, no weather delays, no budget surprises.",
    description_bg:
      "Вашата цена е фиксирана при подписване на договора. Без скрити допълнения, без метеорологични закъснения, без бюджетни изненади.",
  },
  {
    icon: "star",
    title: "Premium Quality",
    title_bg: "Премиум Качество",
    description:
      "Controlled factory conditions mean tighter tolerances, better insulation, and higher finish quality than site-built alternatives.",
    description_bg:
      "Контролираните фабрични условия означават по-строги допустими отклонения, по-добра изолация и по-висококачествено довършване от алтернативите, изградени на място.",
  },
  {
    icon: "leaf",
    title: "Sustainable Build",
    title_bg: "Устойчиво Строителство",
    description:
      "Up to 60% less construction waste, optimised material use, and designs engineered for long-term energy performance.",
    description_bg:
      "До 60% по-малко строителни отпадъци, оптимизирано използване на материали и дизайни, проектирани за дългосрочни енергийни характеристики.",
  },
  {
    icon: "tool",
    title: "Turnkey Service",
    title_bg: "Услуга До Ключ",
    description:
      "From architectural design through to handover, Techmod manages every stage. One contact. Complete accountability.",
    description_bg:
      "От архитектурния дизайн до предаването, Techmod управлява всеки етап. Един контакт. Пълна отговорност.",
  },
  {
    icon: "home",
    title: "Lifetime Warranty",
    title_bg: "Доживотна Гаранция",
    description:
      "Structural elements carry a 25-year warranty. We stand behind the quality of every home we build, for as long as you own it.",
    description_bg:
      "Конструктивните елементи имат 25-годишна гаранция. Зад качеството на всеки построен от нас дом стоим, докато го притежавате.",
  },
];

export function getLocalizedBenefits(lang: Lang) {
  return benefits.map((b) => ({
    ...b,
    title: lang === "bg" ? b.title_bg : b.title,
    description: lang === "bg" ? b.description_bg : b.description,
  }));
}

export const testimonials = [
  {
    quote:
      "From the first consultation to the day we got our keys, Techmod Group exceeded every expectation. Our home was ready in 14 weeks. The quality is extraordinary.",
    quote_bg:
      "От първата консултация до деня, в който получихме ключовете, Techmod Group надмина всяко наше очакване. Нашият дом беше готов за 14 седмици. Качеството е изключително.",
    name: "Ahmet Yıldırım",
    title: "Villa owner, Ankara",
    title_bg: "Собственик на вила, Анкара",
    year: 2024,
  },
  {
    quote:
      "I was sceptical about prefabricated construction. Now I tell everyone I know. The finish quality rivals anything I've seen in traditional builds at twice the price.",
    quote_bg:
      "Бях скептичен относно сглобяемото строителство. Сега разказвам на всички, които познавам. Качеството на довършването съперничи на всичко, което съм виждал при традиционните строежи на двойна цена.",
    name: "Elif Kaya",
    title: "Coastal home owner, Izmir",
    title_bg: "Собственик на крайбрежен дом, Измир",
    year: 2023,
  },
  {
    quote:
      "The design process was collaborative and inspiring. Techmod understood exactly what we wanted for our mountain retreat — and then delivered something beyond what we imagined.",
    quote_bg:
      "Процесът на проектиране беше съвместен и вдъхновяващ. Techmod разбра точно какво искахме за нашето планинско убежище — и след това достави нещо отвъд нашите представи.",
    name: "Mustafa Demir",
    title: "Retreat owner, Bursa",
    title_bg: "Собственик на убежище, Бурса",
    year: 2024,
  },
];

export function getLocalizedTestimonials(lang: Lang) {
  return testimonials.map((t) => ({
    ...t,
    quote: lang === "bg" ? t.quote_bg : t.quote,
    title: lang === "bg" ? t.title_bg : t.title,
  }));
}

export const teamMembers = [
  {
    name: "Kemal Arslan",
    title: "Founder & CEO",
    title_bg: "Основател и Главен Изпълнителен Директор",
    bio: "Architect by training, entrepreneur by nature. Kemal founded Techmod Group after 15 years in luxury residential construction, driven by the belief that premium homes shouldn't take two years to build.",
    bio_bg:
      "Архитект по образование, предприемач по природа. Кемал основава Techmod Group след 15 години в луксозното жилищно строителство, воден от убеждението, че премиум домовете не трябва да отнемат две години за изграждане.",
  },
  {
    name: "Selin Yıldız",
    title: "Head of Architecture",
    title_bg: "Ръководител Архитектура",
    bio: "With a portfolio spanning four continents, Selin brings international design sensibility to every Techmod project. Her approach marries Scandinavian restraint with Turkish warmth.",
    bio_bg:
      "С портфолио, обхващащо четири континента, Селин привнася международна дизайнерска чувствителност в всеки проект на Techmod. Нейният подход съчетава скандинавската сдържаност с турската топлина.",
  },
  {
    name: "Tarık Öztürk",
    title: "Director of Engineering",
    title_bg: "Директор Инженеринг",
    bio: "Tarık oversees all structural and systems engineering, ensuring every Techmod home is built to outlast the century. His rigour is the reason our warranty is so comprehensive.",
    bio_bg:
      "Тарък ръководи цялото структурно и системно инженерство, гарантирайки, че всеки дом на Techmod е изграден да издържи столетие. Неговата строгост е причината нашата гаранция да е толкова изчерпателна.",
  },
  {
    name: "Dila Şahin",
    title: "Client Experience Director",
    title_bg: "Директор Клиентско Изживяване",
    bio: "Dila ensures that every client feels supported from first enquiry to fifth anniversary. Her team is the reason our client satisfaction rate has never dropped below 98%.",
    bio_bg:
      "Дила гарантира, че всеки клиент се чувства подкрепен от първото запитване до петата годишнина. Нейният екип е причината нашето ниво на удовлетвореност никога да не е паднало под 98%.",
  },
];

export function getLocalizedTeamMembers(lang: Lang) {
  return teamMembers.map((m) => ({
    ...m,
    title: lang === "bg" ? m.title_bg : m.title,
    bio: lang === "bg" ? m.bio_bg : m.bio,
  }));
}

export const faqs = [
  {
    question: "How long does it take to build a Techmod home?",
    question_bg: "Колко отнема изграждането на дом Techmod?",
    answer:
      "The total timeline depends on the model and site conditions, but most projects are completed in 10–22 weeks from contract signing. This includes design finalisation (2–4 weeks), factory production (8–16 weeks), and installation (1–3 weeks). This is 3–4× faster than traditional construction.",
    answer_bg:
      "Общото времетраене зависи от модела и условията на обекта, но повечето проекти завършват за 10–22 седмици от подписване на договора. Включва финализиране на дизайна (2–4 седмици), фабрично производство (8–16 седмици) и монтаж (1–3 седмици). Това е 3–4 пъти по-бързо от традиционното строителство.",
  },
  {
    question: "Are prefabricated homes as durable as traditionally built homes?",
    question_bg: "Толкова ли са издръжливи сглобяемите домове, колкото традиционно построените?",
    answer:
      "Yes — in many respects, they are more durable. Factory conditions allow for tighter tolerances, better quality control, and the elimination of weather-related defects during construction. Our homes meet or exceed all Turkish and European building standards, and our structural warranty covers 25 years.",
    answer_bg:
      "Да — в много отношения те са по-издръжливи. Фабричните условия позволяват по-строги допустими отклонения, по-добър контрол на качеството и елиминиране на дефекти, причинени от времето по време на строителството. Нашите домове отговарят или надвишават всички турски и европейски стандарти за строителство, а структурната гаранция покрива 25 години.",
  },
  {
    question: "Can I customise the design?",
    question_bg: "Мога ли да персонализирам дизайна?",
    answer:
      "Absolutely. Every Techmod home begins with our architectural design process. You can modify layouts, materials, facades, interior finishes, and specifications to suit your preferences and site. Our Pinnacle model is fully bespoke and designed from scratch around your brief.",
    answer_bg:
      "Абсолютно. Всеки дом Techmod започва с нашия архитектурен процес. Можете да промените разпределенията, материалите, фасадите, интериорните завършвания и спецификациите, за да отговарят на вашите предпочитания и обект. Нашият модел Pinnacle е напълно по поръчка и се проектира от нулата около вашето задание.",
  },
  {
    question: "What does the price include?",
    question_bg: "Какво включва цената?",
    answer:
      "Our quoted price includes architectural design, factory manufacture, transportation to site, crane installation, all structural and service connections, interior finishing, and handover documentation. Site preparation and foundation work is handled separately as costs vary significantly by location.",
    answer_bg:
      "Нашата оферирана цена включва архитектурен дизайн, фабрично производство, транспорт до обекта, монтаж с кран, всички структурни и инсталационни връзки, интериорно довършване и документация при предаване. Подготовката на обекта и фундаментните работи се обработват отделно, тъй като разходите варират значително в зависимост от местоположението.",
  },
  {
    question: "Do you handle building permits and approvals?",
    question_bg: "Помагате ли с разрешителни за строителство и одобрения?",
    answer:
      "Our team assists with the preparation of documentation required for building permits and liaises with local authorities. Formal permit applications are made in the client's name. We have experience working with municipal authorities across Turkey and can advise on site-specific requirements.",
    answer_bg:
      "Нашият екип помага при подготовката на документация, необходима за разрешителни за строителство, и осъществява контакт с местните власти. Официалните заявления за разрешителни се подават от името на клиента. Имаме опит в работата с общинските власти в цяла Турция и можем да консултираме относно изискванията, специфични за обекта.",
  },
  {
    question: "Can a Techmod home be placed on any land?",
    question_bg: "Може ли дом Techmod да бъде поставен на всяка земя?",
    answer:
      "Land suitability depends on zoning, ground conditions, and access for transportation. Our team conducts a site assessment early in the process to identify any constraints. In most cases, we can find engineering solutions for challenging sites.",
    answer_bg:
      "Годността на земята зависи от зонирането, почвените условия и достъпа за транспорт. Нашият екип извършва оценка на обекта в ранния етап на процеса, за да идентифицира евентуални ограничения. В повечето случаи можем да намерим инженерни решения за предизвикателни терени.",
  },
  {
    question: "What is the energy performance of a Techmod home?",
    question_bg: "Каква е енергийната ефективност на дом Techmod?",
    answer:
      "Our homes are designed to meet or exceed current energy efficiency standards. Standard features include high-performance double or triple glazing, excellent wall and roof insulation, and thermal bridge elimination. Many clients choose to add solar panels, underfloor heating, and heat pump systems.",
    answer_bg:
      "Нашите домове са проектирани да отговарят или надвишават настоящите стандарти за енергийна ефективност. Стандартните характеристики включват висококачествено двойно или тройно остъкляване, отлична изолация на стени и покрив и елиминиране на термомости. Много клиенти избират да добавят соларни панели, подово отопление и топлинно-помпени системи.",
  },
  {
    question: "Do you offer financing options?",
    question_bg: "Предлагате ли финансови опции?",
    answer:
      "We work with several partner financial institutions who offer construction loans tailored to prefabricated home projects. Our sales team can provide introductions and indicative terms during the consultation phase.",
    answer_bg:
      "Работим с няколко партньорски финансови институции, предлагащи строителни заеми, адаптирани към проекти за сглобяеми домове. Нашият екип по продажбите може да предоставя представяния и ориентировъчни условия по време на фазата на консултацията.",
  },
  {
    question: "What happens if I want to make changes after signing the contract?",
    question_bg: "Какво се случва, ако искам да направя промени след подписване на договора?",
    answer:
      "Minor changes can often be accommodated in the design phase at no additional cost. Once production begins, structural changes become increasingly complex and may incur costs and timeline adjustments. We encourage clients to finalise their brief thoroughly before production starts.",
    answer_bg:
      "Малки промени могат често да бъдат приети в дизайнерската фаза без допълнителни разходи. Веднъж стартирало производството, структурните промени стават все по-сложни и могат да доведат до разходи и корекции в графика. Насърчаваме клиентите да финализират подробно заданието си преди стартирането на производството.",
  },
  {
    question: "Is there an aftercare service?",
    question_bg: "Има ли следпродажбено обслужване?",
    answer:
      "Yes. Every client is assigned a dedicated aftercare contact for the first two years. Beyond this, our service team is available for maintenance, modifications, or extensions. Many of our clients have returned to add garages, guest annexes, and pool houses to their original homes.",
    answer_bg:
      "Да. Всеки клиент получава специален контакт за следпродажбено обслужване за първите две години. След това нашият сервизен екип е на разположение за техническа поддръжка, модификации или разширения. Много от нашите клиенти са се върнали, за да добавят гаражи, гостни флигели и басейни към оригиналните си домове.",
  },
];

export function getLocalizedFaqs(lang: Lang) {
  return faqs.map((f) => ({
    ...f,
    question: lang === "bg" ? f.question_bg : f.question,
    answer: lang === "bg" ? f.answer_bg : f.answer,
  }));
}
