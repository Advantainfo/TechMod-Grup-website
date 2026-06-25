import Link from "next/link";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArchImage } from "@/components/ui/ArchImage";
import { Button } from "@/components/ui/Button";
import { getLocalizedProjects, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Completed Projects",
    title: "Where Design<br/>Becomes Reality",
    subtitle: "Every project tells a story. Here are a few of our favourites.",
    viewAll: "View All Projects",
  },
  bg: {
    eyebrow: "Завършени Проекти",
    title: "Където Дизайнът<br/>Се Превръща в Реалност",
    subtitle: "Всеки проект разказва история. Ето някои от нашите любими.",
    viewAll: "Виж Всички Проекти",
  },
  tr: {
    eyebrow: "Tamamlanan Projeler",
    title: "Tasarımın<br/>Gerçeğe Dönüştüğü Yer",
    subtitle: "Her proje bir hikaye anlatır. İşte favorilerimizden birkaçı.",
    viewAll: "Tüm Projeleri Gör",
  },
};

export function GallerySection({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const featured = getLocalizedProjects(lang).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-brand-dark architectural-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateInView>
          <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </AnimateInView>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {featured.map((project, i) => (
            <AnimateInView
              key={project.id}
              delay={i * 80}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={`/${lang}/projects#${project.id}`}
                className={`group relative overflow-hidden block ${i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}
              >
                <ArchImage
                  gradient={project.gradient}
                  src={project.image}
                  overlay="strong"
                  className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-in-out"
                  label={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-sans text-brand-accent text-xs tracking-widest uppercase mb-2">
                        {project.location}
                      </p>
                      <h3 className="font-serif text-xl lg:text-2xl text-white group-hover:text-brand-accent transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex-none flex flex-col items-end gap-1">
                      <span className="font-sans text-brand-gray text-xs">{project.area}m²</span>
                      <span className="font-sans text-brand-gray text-xs">{project.year}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-brand-accent/0 group-hover:border-brand-accent/20 transition-all duration-500" />
              </Link>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView className="mt-12 flex justify-center">
          <Button href={`/${lang}/projects`} variant="outline" size="lg">
            {t.viewAll}
          </Button>
        </AnimateInView>
      </div>
    </section>
  );
}
