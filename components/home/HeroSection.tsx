import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/data";

const t = {
  en: {
    eyebrow: "Premium Prefabricated Homes",
    line1: "Crafted for",
    line2: "Extraordinary",
    line3: "Living",
    desc: "Techmod Group designs, manufactures, and installs premium prefabricated homes that redefine modern luxury — delivered in weeks, not years.",
    cta1: "Explore Models",
    cta2: "Request Consultation",
    scroll: "Scroll",
    stat1Val: "150+", stat1Label: "Homes Delivered",
    stat2Val: "14 wks", stat2Label: "Average Build Time",
    stat3Val: "25 yr", stat3Label: "Structural Warranty",
  },
  bg: {
    eyebrow: "Премиум Сглобяеми Домове",
    line1: "Създадено за",
    line2: "Изключително",
    line3: "Живеене",
    desc: "Techmod Group проектира, произвежда и монтира премиум сглобяеми домове, които преосмислят съвременния лукс — доставени за седмици, не години.",
    cta1: "Разгледайте Моделите",
    cta2: "Заявете Консултация",
    scroll: "Скрол",
    stat1Val: "150+", stat1Label: "Доставени Домове",
    stat2Val: "14 седм.", stat2Label: "Средно Строително Време",
    stat3Val: "25 год.", stat3Label: "Гаранция за Конструкцията",
  },
  tr: {
    eyebrow: "Premium Prefabrik Evler",
    line1: "Olağanüstü",
    line2: "Yaşam",
    line3: "İçin",
    desc: "Techmod Group, modern lüksü yeniden tanımlayan premium prefabrik evler tasarlar, üretir ve kurar — yıllarca değil, haftalar içinde teslim edilir.",
    cta1: "Modelleri İnceleyin",
    cta2: "Danışma Talep Edin",
    scroll: "Kaydır",
    stat1Val: "150+", stat1Label: "Teslim Edilen Ev",
    stat2Val: "14 hafta", stat2Label: "Ortalama İnşaat Süresi",
    stat3Val: "25 yıl", stat3Label: "Yapısal Garanti",
  },
};

// Topographic contour line background — resembles luxury architectural site plans
function TopoBackground() {
  const W = 900, H = 960;
  // Terrain peak: upper-centre-right of the SVG panel
  const cx = 520, cy = 255;
  // Rotate -20°: terrain major axis runs NW→SE
  const theta = -20 * Math.PI / 180;
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  // Cubic-bezier magic number for ellipse approximation
  const K = 0.5523;

  // Build one closed organic contour path.
  // a/b = semi-axes, ox/oy = centre drift, dN/dE/dS/dW = small anchor perturbations
  // that create subtle irregularities in the otherwise elliptical shape.
  function mc(
    a: number, b: number, ox = 0, oy = 0,
    dN = [0, 0], dE = [0, 0], dS = [0, 0], dW = [0, 0],
  ): string {
    const ka = K * a, kb = K * b;
    // Rotate local (x,y) → global SVG coords
    const p = (x: number, y: number) =>
      `${(x * cosT - y * sinT + cx + ox).toFixed(1)},${(x * sinT + y * cosT + cy + oy).toFixed(1)}`;
    // 4 anchor points with organic perturbation applied
    const N  = p(dN[0],       -b + dN[1]);
    const E  = p(a  + dE[0],       dE[1]);
    const S  = p(dS[0],        b + dS[1]);
    const W_ = p(-a + dW[0],       dW[1]);
    // Bezier control handles stay on the perfect-ellipse curve; the
    // slight mismatch with perturbed anchors gives a barely-visible organic quality.
    return [
      `M ${N}`,
      `C ${p(ka, -b)} ${p(a, -kb)} ${E}`,
      `C ${p(a, kb)} ${p(ka, b)} ${S}`,
      `C ${p(-ka, b)} ${p(-a, kb)} ${W_}`,
      `C ${p(-a, -kb)} ${p(-ka, -b)} ${N}`,
      "Z",
    ].join(" ");
  }

  // 18 contour levels — closer spacing near peak (steeper look),
  // wider spacing toward the outer edges (gentler terrain)
  const paths = [
    mc(22,  13,   0,  0, [ 2,-1], [ 0, 2], [-1, 0], [ 0,-2]),
    mc(40,  24,  -1,  1, [-1, 2], [ 1, 0], [ 2,-1], [ 0, 2]),
    mc(60,  36,  -1,  1, [ 3, 0], [ 0,-2], [-2, 1], [ 1, 0]),
    mc(82,  49,  -2,  2, [ 0, 3], [-1, 0], [ 1,-2], [ 2, 1]),
    mc(105, 63,  -2,  2, [-2, 0], [ 2, 1], [ 0, 2], [-1,-1]),
    mc(128, 77,  -3,  3, [ 4,-2], [ 0, 2], [-3, 0], [ 1, 3]),
    mc(152, 91,  -3,  3, [ 0, 4], [-2,-1], [ 3,-1], [ 0,-3]),
    mc(178, 107, -4,  4, [-3, 2], [ 1, 3], [ 2, 1], [-2, 0]),
    mc(205, 123, -4,  4, [ 5, 0], [ 0,-3], [-2, 3], [ 3,-1]),
    mc(234, 140, -5,  5, [-2, 4], [ 2, 0], [ 0,-3], [-3, 2]),
    mc(264, 158, -5,  5, [ 3,-3], [-1, 4], [ 3, 0], [ 1,-2]),
    mc(295, 177, -6,  6, [ 0, 5], [ 3,-1], [-3, 2], [-1, 4]),
    mc(328, 197, -6,  6, [-4, 2], [ 0, 4], [ 4,-1], [ 2,-3]),
    mc(362, 217, -7,  7, [ 5,-2], [-2, 3], [-1, 4], [-3, 1]),
    mc(398, 239, -7,  8, [ 2, 5], [ 3, 0], [ 3,-3], [ 0, 3]),
    mc(436, 262, -8,  8, [-3, 4], [ 1,-4], [-3, 2], [ 4, 0]),
    mc(476, 286, -8,  9, [ 4,-3], [-2, 5], [ 2,-2], [-1,-4]),
    mc(518, 311, -9,  9, [ 0, 6], [ 4,-2], [-2, 5], [ 3,-2]),
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Fade contours out toward the left (content side) */}
        <linearGradient id="topoFade" x1="0%" y1="0%" x2="40%" y2="0%">
          <stop offset="0%"   stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="topoMask">
          <rect width={W} height={H} fill="url(#topoFade)" />
        </mask>
        {/* Subtle radial warmth behind the contours */}
        <radialGradient id="topoGlow" cx="62%" cy="30%" r="52%">
          <stop offset="0%"   stopColor="#C8A46A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#C8A46A" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* Golden radial glow layer */}
      <rect width={W} height={H} fill="url(#topoGlow)" />

      {/* Contour lines — thin, gold, fading toward content */}
      <g mask="url(#topoMask)" stroke="#C8A46A" strokeWidth="0.6" fill="none">
        {paths.map((d, i) => (
          <path key={i} d={d} strokeOpacity={0.08} />
        ))}
      </g>
    </svg>
  );
}

export function HeroSection({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-brand-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-stone-950 to-zinc-900" />

        {/* Right panel — dark base + topographic contour texture */}
        <div
          className="absolute right-0 top-0 w-[65%] h-full"
          style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #141414 50%, #0f0f0f 100%)" }}
        >
          <TopoBackground />
          {/* Very faint bottom warmth to ground the panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 70% 75%, rgba(160,110,40,0.06) 0%, transparent 60%)" }}
          />
        </div>

        {/* Left-to-right fade so type always reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent" />

        {/* Hairline vertical separator */}
        <div
          className="absolute right-[35%] top-0 bottom-0 w-px opacity-30"
          style={{ background: "linear-gradient(to bottom, transparent, #C8A26A 30%, #C8A26A 70%, transparent)" }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-3 z-10">
        <div
          className="w-px h-20 opacity-40"
          style={{ background: "linear-gradient(to bottom, transparent, #C8A26A)" }}
        />
        <span
          className="font-sans text-brand-gray text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-lr" }}
        >
          {c.scroll}
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32 pt-32">
        <div className="max-w-2xl">
          <p className="animate-slide-up font-sans text-brand-accent tracking-[0.25em] uppercase text-xs mb-8">
            {c.eyebrow}
          </p>
          <h1 className="animate-slide-up-delay-1 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-8">
            {c.line1}
            <br />
            <em className="not-italic text-gradient-gold">{c.line2}</em>
            <br />
            {c.line3}
          </h1>
          <p className="animate-slide-up-delay-2 font-sans text-brand-gray-light text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
            {c.desc}
          </p>
          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button href={`/${lang}/models`} variant="primary" size="lg">
              {c.cta1}
            </Button>
            <Button href={`/${lang}/contact`} variant="outline" size="lg">
              {c.cta2}
            </Button>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: c.stat1Val, label: c.stat1Label },
            { value: c.stat2Val, label: c.stat2Label },
            { value: c.stat3Val, label: c.stat3Label },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-white">{stat.value}</span>
              <span className="font-sans text-brand-gray text-xs tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
