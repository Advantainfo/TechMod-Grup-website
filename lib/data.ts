export type Lang = "en" | "bg" | "tr";

export const models = [
  {
    id: "skyline-180",
    name: "Skyline 180",
    tagline: "The Art of Modern Living",
    tagline_bg: "Изкуството на Съвременния Живот",
    tagline_tr: "Modern Yaşamın Sanatı",
    area: 180,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    price: 285000,
    description:
      "A masterfully designed single-story home that balances open-plan living with architectural precision. Floor-to-ceiling glazing floods every room with natural light.",
    description_bg:
      "Майсторски проектиран едноетажен дом, балансиращ отворен жилищен план с архитектурна прецизност. Остъклени прозорци от пода до тавана заливат всяка стая с естествена светлина.",
    description_tr:
      "Açık plan yaşamı mimari hassasiyetle dengeleyen ustalıkla tasarlanmış tek katlı ev. Yerden tavana cam cepheler her odayı doğal ışıkla doldurur.",
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
    features_tr: [
      "Yerden tavana cam cepheler",
      "Açık plan mutfak ve oturma odası",
      "En suite banyolu ana yatak odası",
      "Kapalı teras 40m²",
      "Akıllı ev entegrasyonu",
    ],
    gradient: "from-zinc-800 via-zinc-900 to-stone-900",
    accent: "from-amber-900/30 to-transparent",
    badge: "Most Popular",
    badge_bg: "Най-Популярен",
    badge_tr: "En Popüler",
    image: "/images/skyline-180.jpg.jpeg",
  },
  {
    id: "vista-240",
    name: "Vista 240",
    tagline: "Space Meets Elegance",
    tagline_bg: "Пространство Среща Елегантността",
    tagline_tr: "Mekan Zarafetle Buluşuyor",
    area: 240,
    bedrooms: 4,
    bathrooms: 3,
    stories: 2,
    price: 385000,
    description:
      "Two levels of refined living space wrapped in black aluminum cladding and warm timber accents. Designed for families who refuse to compromise.",
    description_bg:
      "Два етажа изискано жилищно пространство, облечено в черна алуминиева обшивка и топли дървени акценти. Проектирано за семейства, отказващи компромиси.",
    description_tr:
      "Siyah alüminyum kaplama ve sıcak ahşap aksentlerle sarılmış iki katlı şık yaşam alanı. Taviz vermeyen aileler için tasarlandı.",
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
    features_tr: [
      "Siyah alüminyum cephe",
      "Ahşap özellikli tavanlar",
      "Ev ofis süiti",
      "Çatı terası 60m²",
      "Yerden ısıtma",
    ],
    gradient: "from-slate-800 via-slate-900 to-zinc-900",
    accent: "from-orange-900/25 to-transparent",
    badge: "New Model",
    badge_bg: "Нов Модел",
    badge_tr: "Yeni Model",
    image: "/images/vista-240.jpg.jpeg",
  },
  {
    id: "summit-320",
    name: "Summit 320",
    tagline: "Pinnacle of Prefab Luxury",
    tagline_bg: "Върхът на Сглобяемия Лукс",
    tagline_tr: "Prefabrik Lüksün Zirvesi",
    area: 320,
    bedrooms: 5,
    bathrooms: 4,
    stories: 2,
    price: 520000,
    description:
      "Our flagship model. An architectural statement that commands its landscape. Expansive volumes, double-height living spaces, and bespoke finishes throughout.",
    description_bg:
      "Нашият флагмански модел. Архитектурна декларация, доминираща своето местоположение. Просторни обеми, дневни с двойна височина и персонализирано обзавеждане навсякъде.",
    description_tr:
      "Amiral gemisi modelimiz. Manzarasına hükmeden mimari bir ifade. Geniş hacimler, çift yükseklikli oturma alanları ve özel bitiş detayları.",
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
    features_tr: [
      "Çift yükseklikli oturma odası",
      "Özel mutfak adası",
      "Spor ve wellness süiti",
      "Çepeçevre teras 90m²",
      "Sinema odası",
    ],
    gradient: "from-stone-800 via-zinc-900 to-neutral-900",
    accent: "from-yellow-900/20 to-transparent",
    badge: "Flagship",
    badge_bg: "Флагман",
    badge_tr: "Amiral Gemisi",
    image: "/images/hero-house.jpg.jpeg",
  },
  {
    id: "studio-65",
    name: "Studio 65",
    tagline: "Refined Compact Living",
    tagline_bg: "Изискан Компактен Живот",
    tagline_tr: "Rafine Kompakt Yaşam",
    area: 65,
    bedrooms: 1,
    bathrooms: 1,
    stories: 1,
    price: 125000,
    description:
      "Intelligent design at its most distilled. Every square metre maximised for comfort and style. The perfect retreat, guest house, or investment property.",
    description_bg:
      "Интелигентен дизайн в най-чистата му форма. Всеки квадратен метър максимално оползотворен за комфорт и стил. Перфектно убежище, гостна стая или инвестиционен имот.",
    description_tr:
      "Zekice tasarımın en saf hali. Her metrekare konfor ve stil için maksimize edilmiş. Mükemmel bir tatil köşesi, misafir evi veya yatırım mülkü.",
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
    features_tr: [
      "Asma kat uyku platformu",
      "Japon tarzı banyo",
      "Gömme depolama sistemi",
      "Özel teras 20m²",
      "Güneş enerjisine hazır",
    ],
    gradient: "from-neutral-800 via-zinc-900 to-stone-900",
    accent: "from-amber-900/35 to-transparent",
    badge: null,
    badge_bg: null,
    badge_tr: null,
    image: "/images/studio-65.jpg.jpeg",
  },
  {
    id: "horizon-160",
    name: "Horizon 160",
    tagline: "Seamless Indoor-Outdoor Flow",
    tagline_bg: "Плавен Преход Вътре-Вън",
    tagline_tr: "İç ve Dış Mekan Arasında Kusursuz Geçiş",
    area: 160,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    price: 245000,
    description:
      "Sliding glass walls dissolve the boundary between living room and landscape. Designed for those who want to live alongside nature without sacrificing luxury.",
    description_bg:
      "Плъзгащите се стъклени стени разтварят границата между хола и природния пейзаж. Проектирано за тези, които искат да живеят до природата, без да жертват лукса.",
    description_tr:
      "Kayan cam duvarlar oturma odası ile peyzaj arasındaki sınırı kaldırır. Lüksü feda etmeden doğayla iç içe yaşamak isteyenler için tasarlandı.",
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
    features_tr: [
      "Tam genişlikte kayan duvarlar",
      "Entegre iç mekan bahçesi",
      "Asık banyo lavabolar",
      "Çepeçevre teras 50m²",
      "Pasif güneş tasarımı",
    ],
    gradient: "from-zinc-700 via-zinc-800 to-stone-900",
    accent: "from-green-900/20 to-transparent",
    badge: null,
    badge_bg: null,
    badge_tr: null,
    image: "/images/horizon-160.jpg.jpeg",
  },
  {
    id: "pinnacle-400",
    name: "Pinnacle 400",
    tagline: "An Estate Without Compromise",
    tagline_bg: "Имение Без Компромис",
    tagline_tr: "Taviz Vermez Bir Malikane",
    area: 400,
    bedrooms: 6,
    bathrooms: 5,
    stories: 2,
    price: 680000,
    description:
      "The absolute pinnacle of prefabricated luxury. Custom-designed volumes, gallery-worthy interiors, and estate-grade outdoor amenities. Tailored entirely to your vision.",
    description_bg:
      "Абсолютният връх на сглобяемия лукс. Персонализирани обеми, галерийни интериори и имотно-ниво външни удобства. Напълно адаптирано към вашата визия.",
    description_tr:
      "Prefabrik lüksün mutlak zirvesi. Özel tasarım hacimler, galeri değerinde iç mekanlar ve malikane sınıfı dış mekan olanakları. Tamamen vizyonunuza göre hazırlandı.",
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
    features_tr: [
      "Özel kapalı havuz seçeneği",
      "Şarap mahzeni ve bar",
      "Küçük mutfaklı misafir süiti",
      "3 araç için ısıtmalı garaj",
      "Tamamen özel tasarım iç mekan",
    ],
    gradient: "from-stone-700 via-zinc-800 to-neutral-900",
    accent: "from-amber-800/20 to-transparent",
    badge: "Bespoke",
    badge_bg: "По Поръчка",
    badge_tr: "Özel Tasarım",
    image: "/images/pinnacle-400.jpg.jpeg",
  },
];

export function getLocalizedModels(lang: Lang) {
  return models.map((m) => ({
    ...m,
    tagline: lang === "bg" ? m.tagline_bg : lang === "tr" ? m.tagline_tr : m.tagline,
    description: lang === "bg" ? m.description_bg : lang === "tr" ? m.description_tr : m.description,
    features: lang === "bg" ? m.features_bg : lang === "tr" ? m.features_tr : m.features,
    badge: lang === "bg" ? m.badge_bg : lang === "tr" ? m.badge_tr : m.badge,
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
    buildTime_tr: "14 hafta",
    description:
      "A four-bedroom family home delivered and installed in just 14 weeks. Set across a generous plot, the home balances privacy with breathtaking views of the Anatolian landscape.",
    description_bg:
      "Четириспален семеен дом, доставен и монтиран само за 14 седмици. Разположен в просторен парцел, домът балансира уединение с дъх-спиращи гледки към анадолския пейзаж.",
    description_tr:
      "Sadece 14 haftada teslim edilip monte edilen dört yatak odalı aile evi. Geniş bir arazi üzerinde kurulu, ev mahremiyetini Anadolu manzarasının nefes kesen görüntüleriyle dengeler.",
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
    details_tr: [
      "Özel dış cephe ahşap kaplaması",
      "Isıtmalı açık sonsuzluk havuzu",
      "Özel sinema odası",
      "Peyzajlı bahçe 800m²",
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
    buildTime_tr: "11 hafta",
    description:
      "Perched at 1,400m elevation, this mountain retreat was engineered to withstand extreme weather conditions without compromising on warmth or elegance.",
    description_bg:
      "Разположено на 1 400 м надморска височина, това планинско убежище е конструирано да издържи екстремни метеорологични условия, без да компрометира топлотата или елегантността.",
    description_tr:
      "1.400 metre yükseklikte konumlanan bu dağ evi, sıcaklık ve zarafetten ödün vermeksizin aşırı hava koşullarına dayanacak şekilde mühendislik yapıldı.",
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
    details_tr: [
      "Üçlü camlı termal pencereler",
      "Her yerde ışınımlı yerden ısıtma",
      "Ahşap ve taş cephe",
      "Panoramik dağ terası",
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
    buildTime_tr: "18 hafta",
    description:
      "A statement coastal home where the Aegean becomes part of the interior. Completed in 18 weeks, this flagship project redefines what prefabricated architecture can achieve.",
    description_bg:
      "Представително крайбрежно жилище, в което Егейско море се превръща в част от интериора. Завършено за 18 седмици, този флагмански проект предефинира какво може да постигне сглобяемата архитектура.",
    description_tr:
      "Ege'nin iç mekanın bir parçası haline geldiği göz alıcı bir kıyı evi. 18 haftada tamamlanan bu amiral gemisi proje, prefabrik mimarinin neler başarabileceğini yeniden tanımlıyor.",
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
    details_tr: [
      "Özel sahil erişimi",
      "Denize bakan sonsuzluk havuzu",
      "Açık mutfak ve yemek alanı",
      "Misafir ek binası 65m²",
    ],
    gradient: "from-blue-900 via-slate-900 to-zinc-950",
    image: "/images/hero-house.jpg.jpeg",
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
    buildTime_tr: "6 hafta",
    description:
      "A nature retreat designed to nestle imperceptibly within an ancient forest. Installed in just six weeks with minimal site disturbance.",
    description_bg:
      "Природно убежище, проектирано да се вписва незабележимо в древна гора. Монтирано само за шест седмици с минимални нарушения на терена.",
    description_tr:
      "Kadim bir orman içinde fark edilmeden yuvalanmak için tasarlanmış doğa inzivası. Minimum alan müdahalesiyle sadece altı haftada monte edildi.",
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
    details_tr: [
      "Geri dönüşümlü ahşap kaplama",
      "Güneş paneli dizisi",
      "Yağmur suyu hasadı",
      "Özel orman erişimi",
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
    buildTime_tr: "10 hafta",
    description:
      "Delivered into the heart of Istanbul — proving that premium prefabricated construction has a place in the world's most vibrant urban environments.",
    description_bg:
      "Доставено в сърцето на Истанбул — доказвайки, че премиум сглобяемото строителство има място в най-живите градски среди на света.",
    description_tr:
      "İstanbul'un kalbine teslim edildi — premium prefabrik inşaatın dünyanın en dinamik kentsel ortamlarında da yer bulduğunu kanıtlıyor.",
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
    details_tr: [
      "Boğaz manzaralı teras",
      "Özel çelik ve cam cephe",
      "Entegre çatı bahçesi",
      "Akıllı bina otomasyonu",
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
    buildTime_tr: "22 hafta",
    description:
      "Our most ambitious project to date. A six-bedroom estate overlooking the Mediterranean, complete with an indoor pool, wine cellar, and private garage.",
    description_bg:
      "Нашият най-амбициозен проект досега. Шестспален имот с изглед към Средиземно море, пълен с закрит басейн, мазе за вино и частен гараж.",
    description_tr:
      "Bugüne kadarki en iddialı projemiz. Kapalı havuz, şarap mahzeni ve özel garajı olan Akdeniz manzaralı altı yatak odalı konut.",
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
    details_tr: [
      "Kapalı 15 metre yüzme havuzu",
      "Profesyonel standartlarda mutfak",
      "Crestron ev otomasyonu",
      "Teraslı Akdeniz bahçesi",
    ],
    gradient: "from-amber-900 via-zinc-900 to-neutral-950",
    image: "/images/summit-320000.jpg.jpeg",
  },
];

export function getLocalizedProjects(lang: Lang) {
  return projects.map((p) => ({
    ...p,
    buildTime: lang === "bg" ? p.buildTime_bg : lang === "tr" ? p.buildTime_tr : p.buildTime,
    description: lang === "bg" ? p.description_bg : lang === "tr" ? p.description_tr : p.description,
    details: lang === "bg" ? p.details_bg : lang === "tr" ? p.details_tr : p.details,
  }));
}

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    title_bg: "Консултация",
    title_tr: "Danışma",
    subtitle: "Your vision, clarified",
    subtitle_bg: "Вашата визия, изяснена",
    subtitle_tr: "Vizyonunuz, netleştirildi",
    description:
      "We begin with a detailed consultation to understand your lifestyle, budget, site conditions, and design aspirations. Our architects translate your vision into a clear brief.",
    description_bg:
      "Започваме с подробна консултация, за да разберем вашия начин на живот, бюджет, условия на обекта и дизайнерски амбиции. Нашите архитекти превръщат вашата визия в ясно задание.",
    description_tr:
      "Yaşam tarzınızı, bütçenizi, arazi koşullarınızı ve tasarım beklentilerinizi anlamak için ayrıntılı bir danışmayla başlıyoruz. Mimarlarımız vizyonunuzu net bir brifinge dönüştürür.",
    duration: "1–2 weeks",
    duration_bg: "1–2 седмици",
    duration_tr: "1–2 hafta",
  },
  {
    number: "02",
    title: "Design",
    title_bg: "Проектиране",
    title_tr: "Tasarım",
    subtitle: "Architecture, crafted",
    subtitle_bg: "Архитектура, сътворена",
    subtitle_tr: "Mimarlık, özenle hazırlandı",
    description:
      "Our design team develops architectural drawings, 3D renders, and material selections. You review and refine until every detail is exactly right.",
    description_bg:
      "Нашият дизайнерски екип разработва архитектурни чертежи, 3D визуализации и избор на материали. Преглеждате и усъвършенствате, докато всеки детайл е точно правилен.",
    description_tr:
      "Tasarım ekibimiz mimari çizimler, 3B görseller ve malzeme seçimleri geliştirir. Her detay tam doğru olana kadar inceleyip geliştirirsiniz.",
    duration: "2–4 weeks",
    duration_bg: "2–4 седмици",
    duration_tr: "2–4 hafta",
  },
  {
    number: "03",
    title: "Production",
    title_bg: "Производство",
    title_tr: "Üretim",
    subtitle: "Factory precision",
    subtitle_bg: "Фабрична прецизност",
    subtitle_tr: "Fabrika hassasiyeti",
    description:
      "Your home is manufactured in our controlled facility to exacting tolerances. Factory conditions eliminate the delays and variability of on-site construction.",
    description_bg:
      "Вашият дом се произвежда в нашето контролирано предприятие с изключителни допустими отклонения. Фабричните условия елиминират закъсненията и вариабилността на строителството на място.",
    description_tr:
      "Eviniz, kontrollü tesisimizde sıkı toleranslarla üretilir. Fabrika koşulları, yerinde inşaatın gecikme ve değişkenliğini ortadan kaldırır.",
    duration: "8–16 weeks",
    duration_bg: "8–16 седмици",
    duration_tr: "8–16 hafta",
  },
  {
    number: "04",
    title: "Transportation",
    title_bg: "Транспорт",
    title_tr: "Taşıma",
    subtitle: "Engineered for movement",
    subtitle_bg: "Проектирано за движение",
    subtitle_tr: "Hareket için tasarlandı",
    description:
      "Completed modules are carefully loaded and transported to your site. Our logistics team manages every permit, route, and timeline.",
    description_bg:
      "Завършените модули се зареждат внимателно и транспортират до вашия обект. Нашият екип по логистика управлява всяко разрешително, маршрут и срок.",
    description_tr:
      "Tamamlanan modüller dikkatle yüklenerek sahanıza taşınır. Lojistik ekibimiz her izni, güzergahı ve zaman çizelgesini yönetir.",
    duration: "1–2 weeks",
    duration_bg: "1–2 седмици",
    duration_tr: "1–2 hafta",
  },
  {
    number: "05",
    title: "Installation",
    title_bg: "Монтаж",
    title_tr: "Montaj",
    subtitle: "Assembled in days",
    subtitle_bg: "Сглобено за дни",
    subtitle_tr: "Günler içinde tamamlandı",
    description:
      "Our specialist installation crew assembles your home on-site. Modules are craned into position, connected, and finished to a standard that rivals traditional construction.",
    description_bg:
      "Нашият специализиран монтажен екип сглобява вашия дом на обекта. Модулите се поставят с кран, свързват се и се завършват до стандарт, съперничещ на традиционното строителство.",
    description_tr:
      "Uzman montaj ekibimiz evinizi sahada birleştirir. Modüller vince kaldırılıp konumlandırılır, bağlanır ve geleneksel inşaatla yarışan standartta bitirilir.",
    duration: "1–3 weeks",
    duration_bg: "1–3 седмици",
    duration_tr: "1–3 hafta",
  },
  {
    number: "06",
    title: "Handover",
    title_bg: "Предаване",
    title_tr: "Teslim",
    subtitle: "Welcome home",
    subtitle_bg: "Добре дошли у дома",
    subtitle_tr: "Hoş geldiniz",
    description:
      "A complete walkthrough, documentation package, and warranty. Your dedicated aftercare contact ensures any questions are answered long after you move in.",
    description_bg:
      "Пълно разходяне, документационен пакет и гаранция. Вашият специален контакт за следпродажбено обслужване гарантира, че всички въпроси са отговорени дълго след нанасянето ви.",
    description_tr:
      "Eksiksiz bir inceleme, dokümantasyon paketi ve garanti. Özel satış sonrası iletişim kişiniz, taşındıktan uzun süre sonra da tüm sorularınızın yanıtlandığından emin olur.",
    duration: "1 week",
    duration_bg: "1 седмица",
    duration_tr: "1 hafta",
  },
];

export function getLocalizedProcessSteps(lang: Lang) {
  return processSteps.map((s) => ({
    ...s,
    title: lang === "bg" ? s.title_bg : lang === "tr" ? s.title_tr : s.title,
    subtitle: lang === "bg" ? s.subtitle_bg : lang === "tr" ? s.subtitle_tr : s.subtitle,
    description: lang === "bg" ? s.description_bg : lang === "tr" ? s.description_tr : s.description,
    duration: lang === "bg" ? s.duration_bg : lang === "tr" ? s.duration_tr : s.duration,
  }));
}

export const benefits = [
  {
    icon: "clock",
    title: "4× Faster",
    title_bg: "4× По-Бързо",
    title_tr: "4× Daha Hızlı",
    description:
      "Factory production runs concurrently with site preparation, cutting total build time by up to 75% compared to traditional construction.",
    description_bg:
      "Фабричното производство върви едновременно с подготовката на обекта, намалявайки общото строително време с до 75% в сравнение с традиционното строителство.",
    description_tr:
      "Fabrika üretimi, arazi hazırlığıyla eş zamanlı yürütülerek geleneksel inşaata kıyasla toplam inşaat süresini %75'e kadar azaltır.",
  },
  {
    icon: "shield",
    title: "Fixed-Price Guarantee",
    title_bg: "Гаранция за Фиксирана Цена",
    title_tr: "Sabit Fiyat Garantisi",
    description:
      "Your price is locked at contract signing. No hidden extras, no weather delays, no budget surprises.",
    description_bg:
      "Вашата цена е фиксирана при подписване на договора. Без скрити допълнения, без метеорологични закъснения, без бюджетни изненади.",
    description_tr:
      "Fiyatınız sözleşme imzalanırken kilitlenir. Gizli ekstralar yok, hava gecikmesi yok, bütçe sürprizleri yok.",
  },
  {
    icon: "star",
    title: "Premium Quality",
    title_bg: "Премиум Качество",
    title_tr: "Premium Kalite",
    description:
      "Controlled factory conditions mean tighter tolerances, better insulation, and higher finish quality than site-built alternatives.",
    description_bg:
      "Контролираните фабрични условия означават по-строги допустими отклонения, по-добра изолация и по-висококачествено довършване от алтернативите, изградени на място.",
    description_tr:
      "Kontrollü fabrika koşulları, sahada inşa edilen alternatiflere kıyasla daha sıkı toleranslar, daha iyi yalıtım ve daha yüksek bitiş kalitesi sağlar.",
  },
  {
    icon: "leaf",
    title: "Sustainable Build",
    title_bg: "Устойчиво Строителство",
    title_tr: "Sürdürülebilir İnşaat",
    description:
      "Up to 60% less construction waste, optimised material use, and designs engineered for long-term energy performance.",
    description_bg:
      "До 60% по-малко строителни отпадъци, оптимизирано използване на материали и дизайни, проектирани за дългосрочни енергийни характеристики.",
    description_tr:
      "%60'a kadar daha az inşaat atığı, optimize edilmiş malzeme kullanımı ve uzun vadeli enerji performansı için mühendislik yapılmış tasarımlar.",
  },
  {
    icon: "tool",
    title: "Turnkey Service",
    title_bg: "Услуга До Ключ",
    title_tr: "Anahtar Teslim Hizmet",
    description:
      "From architectural design through to handover, Techmod manages every stage. One contact. Complete accountability.",
    description_bg:
      "От архитектурния дизайн до предаването, Techmod управлява всеки етап. Един контакт. Пълна отговорност.",
    description_tr:
      "Mimari tasarımdan teslime kadar Techmod her aşamayı yönetir. Tek iletişim noktası. Tam hesap verebilirlik.",
  },
  {
    icon: "home",
    title: "Lifetime Warranty",
    title_bg: "Доживотна Гаранция",
    title_tr: "Ömür Boyu Garanti",
    description:
      "Structural elements carry a 25-year warranty. We stand behind the quality of every home we build, for as long as you own it.",
    description_bg:
      "Конструктивните елементи имат 25-годишна гаранция. Зад качеството на всеки построен от нас дом стоим, докато го притежавате.",
    description_tr:
      "Yapısal elemanlar 25 yıl garanti kapsamındadır. İnşa ettiğimiz her evin kalitesinin arkasındayız, sahip olduğunuz sürece.",
  },
];

export function getLocalizedBenefits(lang: Lang) {
  return benefits.map((b) => ({
    ...b,
    title: lang === "bg" ? b.title_bg : lang === "tr" ? b.title_tr : b.title,
    description: lang === "bg" ? b.description_bg : lang === "tr" ? b.description_tr : b.description,
  }));
}

export const testimonials = [
  {
    quote:
      "From the first consultation to the day we got our keys, Techmod Group exceeded every expectation. Our home was ready in 14 weeks. The quality is extraordinary.",
    quote_bg:
      "От първата консултация до деня, в който получихме ключовете, Techmod Group надмина всяко наше очакване. Нашият дом беше готов за 14 седмици. Качеството е изключително.",
    quote_tr:
      "İlk danışmadan anahtarlarımızı aldığımız güne kadar Techmod Group her beklentimizi aştı. Evimiz 14 haftada hazırdı. Kalite olağanüstü.",
    name: "Ahmet Yıldırım",
    title: "Villa owner, Ankara",
    title_bg: "Собственик на вила, Анкара",
    title_tr: "Villa sahibi, Ankara",
    year: 2024,
  },
  {
    quote:
      "I was sceptical about prefabricated construction. Now I tell everyone I know. The finish quality rivals anything I've seen in traditional builds at twice the price.",
    quote_bg:
      "Бях скептичен относно сглобяемото строителство. Сега разказвам на всички, които познавам. Качеството на довършването съперничи на всичко, което съм виждал при традиционните строежи на двойна цена.",
    quote_tr:
      "Prefabrik inşaat konusunda şüpheciydim. Şimdi tanıdığım herkese anlatıyorum. Bitiş kalitesi, iki kat fiyatla geleneksel inşaatlarda gördüklerimin hepsine rakip.",
    name: "Elif Kaya",
    title: "Coastal home owner, Izmir",
    title_bg: "Собственик на крайбрежен дом, Измир",
    title_tr: "Kıyı evi sahibi, İzmir",
    year: 2023,
  },
  {
    quote:
      "The design process was collaborative and inspiring. Techmod understood exactly what we wanted for our mountain retreat — and then delivered something beyond what we imagined.",
    quote_bg:
      "Процесът на проектиране беше съвместен и вдъхновяващ. Techmod разбра точно какво искахме за нашето планинско убежище — и след това достави нещо отвъд нашите представи.",
    quote_tr:
      "Tasarım süreci ortaklaşa ve ilham vericiydi. Techmod dağ evi için ne istediğimizi tam olarak anladı ve hayal ettiğimizin ötesinde bir şey teslim etti.",
    name: "Mustafa Demir",
    title: "Retreat owner, Bursa",
    title_bg: "Собственик на убежище, Бурса",
    title_tr: "İnziva evi sahibi, Bursa",
    year: 2024,
  },
];

export function getLocalizedTestimonials(lang: Lang) {
  return testimonials.map((t) => ({
    ...t,
    quote: lang === "bg" ? t.quote_bg : lang === "tr" ? t.quote_tr : t.quote,
    title: lang === "bg" ? t.title_bg : lang === "tr" ? t.title_tr : t.title,
  }));
}

export const teamMembers = [
  {
    name: "Kemal Arslan",
    title: "Founder & CEO",
    title_bg: "Основател и Главен Изпълнителен Директор",
    title_tr: "Kurucu ve CEO",
    bio: "Architect by training, entrepreneur by nature. Kemal founded Techmod Group after 15 years in luxury residential construction, driven by the belief that premium homes shouldn't take two years to build.",
    bio_bg:
      "Архитект по образование, предприемач по природа. Кемал основава Techmod Group след 15 години в луксозното жилищно строителство, воден от убеждението, че премиум домовете не трябва да отнемат две години за изграждане.",
    bio_tr:
      "Eğitimde mimar, doğası gereği girişimci. Kemal, premium evlerin iki yıl sürmemesi gerektiği inancıyla lüks konut inşaatında 15 yılın ardından Techmod Group'u kurdu.",
  },
  {
    name: "Selin Yıldız",
    title: "Head of Architecture",
    title_bg: "Ръководител Архитектура",
    title_tr: "Mimarlık Direktörü",
    bio: "With a portfolio spanning four continents, Selin brings international design sensibility to every Techmod project. Her approach marries Scandinavian restraint with Turkish warmth.",
    bio_bg:
      "С портфолио, обхващащо четири континента, Селин привнася международна дизайнерска чувствителност в всеки проект на Techmod. Нейният подход съчетава скандинавската сдържаност с турската топлина.",
    bio_tr:
      "Dört kıtayı kapsayan portföyüyle Selin, her Techmod projesine uluslararası tasarım duyarlılığı katar. Yaklaşımı İskandinav sadeliğini Türk sıcaklığıyla harmanlıyor.",
  },
  {
    name: "Tarık Öztürk",
    title: "Director of Engineering",
    title_bg: "Директор Инженеринг",
    title_tr: "Mühendislik Direktörü",
    bio: "Tarık oversees all structural and systems engineering, ensuring every Techmod home is built to outlast the century. His rigour is the reason our warranty is so comprehensive.",
    bio_bg:
      "Тарък ръководи цялото структурно и системно инженерство, гарантирайки, че всеки дом на Techmod е изграден да издържи столетие. Неговата строгост е причината нашата гаранция да е толкова изчерпателна.",
    bio_tr:
      "Tarık, her Techmod evinin yüzyılı aşacak şekilde inşa edilmesini sağlamak için tüm yapısal ve sistem mühendisliğini denetler. Onun titizliği, garantimizin bu kadar kapsamlı olmasının nedenidir.",
  },
  {
    name: "Dila Şahin",
    title: "Client Experience Director",
    title_bg: "Директор Клиентско Изживяване",
    title_tr: "Müşteri Deneyimi Direktörü",
    bio: "Dila ensures that every client feels supported from first enquiry to fifth anniversary. Her team is the reason our client satisfaction rate has never dropped below 98%.",
    bio_bg:
      "Дила гарантира, че всеки клиент се чувства подкрепен от първото запитване до петата годишнина. Нейният екип е причината нашето ниво на удовлетвореност никога да не е паднало под 98%.",
    bio_tr:
      "Dila, her müşterinin ilk sorudan beşinci yıl dönümüne kadar desteklenmiş hissetmesini sağlar. Ekibi, müşteri memnuniyet oranımızın hiç %98'in altına düşmemesinin nedenidir.",
  },
];

export function getLocalizedTeamMembers(lang: Lang) {
  return teamMembers.map((m) => ({
    ...m,
    title: lang === "bg" ? m.title_bg : lang === "tr" ? m.title_tr : m.title,
    bio: lang === "bg" ? m.bio_bg : lang === "tr" ? m.bio_tr : m.bio,
  }));
}

export const faqs = [
  {
    question: "How long does it take to build a Techmod home?",
    question_bg: "Колко отнема изграждането на дом Techmod?",
    question_tr: "Techmod evi inşa etmek ne kadar sürer?",
    answer:
      "The total timeline depends on the model and site conditions, but most projects are completed in 10–22 weeks from contract signing. This includes design finalisation (2–4 weeks), factory production (8–16 weeks), and installation (1–3 weeks). This is 3–4× faster than traditional construction.",
    answer_bg:
      "Общото времетраене зависи от модела и условията на обекта, но повечето проекти завършват за 10–22 седмици от подписване на договора. Включва финализиране на дизайна (2–4 седмици), фабрично производство (8–16 седмици) и монтаж (1–3 седмици). Това е 3–4 пъти по-бързо от традиционното строителство.",
    answer_tr:
      "Toplam süre modele ve arazi koşullarına bağlıdır, ancak çoğu proje sözleşme imzalanmasından itibaren 10–22 haftada tamamlanır. Bu süre tasarım kesinleştirmesini (2–4 hafta), fabrika üretimini (8–16 hafta) ve montajı (1–3 hafta) kapsar. Bu, geleneksel inşaattan 3–4 kat daha hızlıdır.",
  },
  {
    question: "Are prefabricated homes as durable as traditionally built homes?",
    question_bg: "Толкова ли са издръжливи сглобяемите домове, колкото традиционно построените?",
    question_tr: "Prefabrik evler geleneksel inşa edilmiş evler kadar dayanıklı mı?",
    answer:
      "Yes — in many respects, they are more durable. Factory conditions allow for tighter tolerances, better quality control, and the elimination of weather-related defects during construction. Our homes meet or exceed all Turkish and European building standards, and our structural warranty covers 25 years.",
    answer_bg:
      "Да — в много отношения те са по-издръжливи. Фабричните условия позволяват по-строги допустими отклонения, по-добър контрол на качеството и елиминиране на дефекти, причинени от времето по време на строителството. Нашите домове отговарят или надвишават всички турски и европейски стандарти за строителство, а структурната гаранция покрива 25 години.",
    answer_tr:
      "Evet — birçok açıdan daha dayanıklıdır. Fabrika koşulları daha sıkı toleranslara, daha iyi kalite kontrolüne ve inşaat sırasında hava kaynaklı kusurların ortadan kaldırılmasına olanak tanır. Evlerimiz tüm Türk ve Avrupa yapı standartlarını karşılar ya da aşar ve yapısal garantimiz 25 yılı kapsar.",
  },
  {
    question: "Can I customise the design?",
    question_bg: "Мога ли да персонализирам дизайна?",
    question_tr: "Tasarımı özelleştirebilir miyim?",
    answer:
      "Absolutely. Every Techmod home begins with our architectural design process. You can modify layouts, materials, facades, interior finishes, and specifications to suit your preferences and site. Our Pinnacle model is fully bespoke and designed from scratch around your brief.",
    answer_bg:
      "Абсолютно. Всеки дом Techmod започва с нашия архитектурен процес. Можете да промените разпределенията, материалите, фасадите, интериорните завършвания и спецификациите, за да отговарят на вашите предпочитания и обект. Нашият модел Pinnacle е напълно по поръчка и се проектира от нулата около вашето задание.",
    answer_tr:
      "Kesinlikle. Her Techmod evi mimari tasarım sürecimizle başlar. Tercihlerinize ve arazinize uyacak şekilde planları, malzemeleri, cepheleri, iç mekan bitiş detaylarını ve özellikleri değiştirebilirsiniz. Pinnacle modelimiz tamamen özel tasarımdır ve brifinginiz etrafında sıfırdan tasarlanır.",
  },
  {
    question: "What does the price include?",
    question_bg: "Какво включва цената?",
    question_tr: "Fiyata ne dahil?",
    answer:
      "Our quoted price includes architectural design, factory manufacture, transportation to site, crane installation, all structural and service connections, interior finishing, and handover documentation. Site preparation and foundation work is handled separately as costs vary significantly by location.",
    answer_bg:
      "Нашата оферирана цена включва архитектурен дизайн, фабрично производство, транспорт до обекта, монтаж с кран, всички структурни и инсталационни връзки, интериорно довършване и документация при предаване. Подготовката на обекта и фундаментните работи се обработват отделно, тъй като разходите варират значително в зависимост от местоположението.",
    answer_tr:
      "Teklif ettiğimiz fiyat; mimari tasarımı, fabrika üretimini, sahaya taşımayı, vince montajı, tüm yapısal ve tesisat bağlantılarını, iç mekan bitişini ve teslim belgelerini kapsar. Arazi hazırlığı ve temel çalışmaları, konuma göre maliyetler önemli ölçüde farklılık gösterdiğinden ayrıca ele alınır.",
  },
  {
    question: "Do you handle building permits and approvals?",
    question_bg: "Помагате ли с разрешителни за строителство и одобрения?",
    question_tr: "İnşaat izinleri ve onaylarla ilgileniyor musunuz?",
    answer:
      "Our team assists with the preparation of documentation required for building permits and liaises with local authorities. Formal permit applications are made in the client's name. We have experience working with municipal authorities across Turkey and can advise on site-specific requirements.",
    answer_bg:
      "Нашият екип помага при подготовката на документация, необходима за разрешителни за строителство, и осъществява контакт с местните власти. Официалните заявления за разрешителни се подават от името на клиента. Имаме опит в работата с общинските власти в цяла Турция и можем да консултираме относно изискванията, специфични за обекта.",
    answer_tr:
      "Ekibimiz inşaat izinleri için gerekli belgelerin hazırlanmasında yardımcı olur ve yerel yetkililerle irtibat kurar. Resmi izin başvuruları müşteri adına yapılır. Türkiye genelinde belediye yetkilileriyle çalışma deneyimine sahibiz ve sahaya özgü gereksinimler konusunda danışmanlık yapabiliriz.",
  },
  {
    question: "Can a Techmod home be placed on any land?",
    question_bg: "Може ли дом Techmod да бъде поставен на всяка земя?",
    question_tr: "Techmod evi herhangi bir araziye yerleştirilebilir mi?",
    answer:
      "Land suitability depends on zoning, ground conditions, and access for transportation. Our team conducts a site assessment early in the process to identify any constraints. In most cases, we can find engineering solutions for challenging sites.",
    answer_bg:
      "Годността на земята зависи от зонирането, почвените условия и достъпа за транспорт. Нашият екип извършва оценка на обекта в ранния етап на процеса, за да идентифицира евентуални ограничения. В повечето случаи можем да намерим инженерни решения за предизвикателни терени.",
    answer_tr:
      "Arazi uygunluğu imar durumuna, zemin koşullarına ve taşıma erişimine bağlıdır. Ekibimiz sürecin erken aşamasında olası kısıtlamaları belirlemek için bir arazi değerlendirmesi yapar. Çoğu durumda, zorlu araziler için mühendislik çözümleri bulabiliriz.",
  },
  {
    question: "What is the energy performance of a Techmod home?",
    question_bg: "Каква е енергийната ефективност на дом Techmod?",
    question_tr: "Techmod evinin enerji performansı nedir?",
    answer:
      "Our homes are designed to meet or exceed current energy efficiency standards. Standard features include high-performance double or triple glazing, excellent wall and roof insulation, and thermal bridge elimination. Many clients choose to add solar panels, underfloor heating, and heat pump systems.",
    answer_bg:
      "Нашите домове са проектирани да отговарят или надвишават настоящите стандарти за енергийна ефективност. Стандартните характеристики включват висококачествено двойно или тройно остъкляване, отлична изолация на стени и покрив и елиминиране на термомости. Много клиенти избират да добавят соларни панели, подово отопление и топлинно-помпени системи.",
    answer_tr:
      "Evlerimiz mevcut enerji verimliliği standartlarını karşılayacak ya da aşacak şekilde tasarlanmıştır. Standart özellikler arasında yüksek performanslı çift veya üçlü cam, mükemmel duvar ve çatı yalıtımı ve termal köprü eliminasyonu yer alır. Birçok müşteri güneş panelleri, yerden ısıtma ve ısı pompası sistemleri eklemeyi tercih eder.",
  },
  {
    question: "Do you offer financing options?",
    question_bg: "Предлагате ли финансови опции?",
    question_tr: "Finansman seçenekleri sunuyor musunuz?",
    answer:
      "We work with several partner financial institutions who offer construction loans tailored to prefabricated home projects. Our sales team can provide introductions and indicative terms during the consultation phase.",
    answer_bg:
      "Работим с няколко партньорски финансови институции, предлагащи строителни заеми, адаптирани към проекти за сглобяеми домове. Нашият екип по продажбите може да предоставя представяния и ориентировъчни условия по време на фазата на консултацията.",
    answer_tr:
      "Prefabrik ev projelerine yönelik özel inşaat kredileri sunan çeşitli ortak finans kuruluşlarıyla çalışıyoruz. Satış ekibimiz danışma aşamasında tanıtım ve tahmini koşullar sağlayabilir.",
  },
  {
    question: "What happens if I want to make changes after signing the contract?",
    question_bg: "Какво се случва, ако искам да направя промени след подписване на договора?",
    question_tr: "Sözleşme imzaladıktan sonra değişiklik yapmak istersem ne olur?",
    answer:
      "Minor changes can often be accommodated in the design phase at no additional cost. Once production begins, structural changes become increasingly complex and may incur costs and timeline adjustments. We encourage clients to finalise their brief thoroughly before production starts.",
    answer_bg:
      "Малки промени могат често да бъдат приети в дизайнерската фаза без допълнителни разходи. Веднъж стартирало производството, структурните промени стават все по-сложни и могат да доведат до разходи и корекции в графика. Насърчаваме клиентите да финализират подробно заданието си преди стартирането на производството.",
    answer_tr:
      "Küçük değişiklikler genellikle tasarım aşamasında ek ücret ödemeksizin yapılabilir. Üretim başladıktan sonra yapısal değişiklikler giderek daha karmaşık hale gelir ve maliyet ile zaman çizelgesi ayarlamalarına yol açabilir. Üretim başlamadan önce müşterileri brifinlerini kapsamlı şekilde kesinleştirmeye teşvik ediyoruz.",
  },
  {
    question: "Is there an aftercare service?",
    question_bg: "Има ли следпродажбено обслужване?",
    question_tr: "Satış sonrası hizmet var mı?",
    answer:
      "Yes. Every client is assigned a dedicated aftercare contact for the first two years. Beyond this, our service team is available for maintenance, modifications, or extensions. Many of our clients have returned to add garages, guest annexes, and pool houses to their original homes.",
    answer_bg:
      "Да. Всеки клиент получава специален контакт за следпродажбено обслужване за първите две години. След това нашият сервизен екип е на разположение за техническа поддръжка, модификации или разширения. Много от нашите клиенти са се върнали, за да добавят гаражи, гостни флигели и басейни към оригиналните си домове.",
    answer_tr:
      "Evet. Her müşteriye ilk iki yıl için özel bir satış sonrası iletişim kişisi atanır. Bu sürenin ötesinde, hizmet ekibimiz bakım, modifikasyon veya genişletme için ulaşılabilir durumdadır. Müşterilerimizin birçoğu orijinal evlerine garaj, misafir ek binası ve havuz evi eklemek için geri döndü.",
  },
];

export function getLocalizedFaqs(lang: Lang) {
  return faqs.map((f) => ({
    ...f,
    question: lang === "bg" ? f.question_bg : lang === "tr" ? f.question_tr : f.question,
    answer: lang === "bg" ? f.answer_bg : lang === "tr" ? f.answer_tr : f.answer,
  }));
}
