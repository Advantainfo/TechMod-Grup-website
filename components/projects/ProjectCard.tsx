import { Button } from "@/components/ui/Button";
import { ArchImage } from "@/components/ui/ArchImage";
import type { Lang } from "@/lib/data";
import type { getLocalizedProjects } from "@/lib/data";

type Project = ReturnType<typeof getLocalizedProjects>[number];

const labels = {
  en: { area: "Area", buildTime: "Build Time", buildSimilar: "Build Similar" },
  bg: { area: "Площ", buildTime: "Строително Време", buildSimilar: "Изградете Подобен" },
  tr: { area: "Alan", buildTime: "İnşaat Süresi", buildSimilar: "Benzerini İnşa Et" },
};

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  lang: Lang;
}

export function ProjectCard({ project, reverse = false, lang }: ProjectCardProps) {
  const t = labels[lang];
  return (
    <div
      id={project.id}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-border overflow-hidden scroll-mt-24 ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      <div
        className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${
          reverse ? "lg:col-start-2" : ""
        }`}
      >
        <ArchImage
          gradient={project.gradient}
          src={project.image}
          overlay="strong"
          className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-in-out"
          label={project.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-4 right-4 font-sans text-xs text-brand-gray border border-brand-border bg-brand-dark/80 px-3 py-1.5 backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      <div
        className={`flex flex-col justify-center p-8 lg:p-10 bg-brand-secondary ${
          reverse ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="font-sans text-brand-accent text-[10px] tracking-[0.2em] uppercase">
            {project.location}
          </span>
          <span className="w-px h-3 bg-brand-border" />
          <span className="font-sans text-brand-gray text-[10px] tracking-wider">
            {project.model}
          </span>
        </div>

        <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-brand-accent transition-colors duration-300">
          {project.name}
        </h3>

        <p className="font-sans text-brand-gray-light text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex gap-6 py-5 border-y border-brand-border mb-6">
          {[
            { label: t.area, value: `${project.area}m²` },
            { label: t.buildTime, value: project.buildTime },
          ].map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1">
              <span className="font-sans text-brand-gray text-[10px] tracking-widest uppercase">
                {spec.label}
              </span>
              <span className="font-serif text-xl text-white">{spec.value}</span>
            </div>
          ))}
        </div>

        <ul className="flex flex-col gap-2 mb-8">
          {project.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 font-sans text-sm text-brand-gray-light">
              <span className="flex-none mt-1.5 w-1 h-1 rounded-full bg-brand-accent" />
              {detail}
            </li>
          ))}
        </ul>

        <Button href={`/${lang}/contact`} variant="outline" className="self-start">
          {t.buildSimilar}
        </Button>
      </div>
    </div>
  );
}
