import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getLocalizedProjects, type Lang } from "@/lib/data";

const labels = {
  en: {
    eyebrow: "Our Work",
    title: "Projects That<br/>Define Excellence",
    subtitle: "150+ homes delivered across Turkey. Each one a unique story of collaboration, precision, and architectural ambition.",
    stat1Label: "Homes Delivered", stat2Label: "Cities",
    stat3Label: "Client Satisfaction", stat4Label: "Avg Build Time",
  },
  bg: {
    eyebrow: "Нашата Работа",
    title: "Проекти, Определящи<br/>Съвършенството",
    subtitle: "150+ доставени домове в цяла Турция. Всеки от тях — уникална история на сътрудничество, прецизност и архитектурни амбиции.",
    stat1Label: "Доставени Домове", stat2Label: "Града",
    stat3Label: "Удовлетвореност", stat4Label: "Средно Строит. Време",
  },
};

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = labels[l];
  const projects = getLocalizedProjects(l);

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

          <AnimateInView delay={100} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "150+", label: t.stat1Label },
              { value: "28", label: t.stat2Label },
              { value: "98%", label: t.stat3Label },
              { value: lang === "bg" ? "11 седм." : "11 wks", label: t.stat4Label },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl text-brand-accent">{stat.value}</p>
                <p className="font-sans text-brand-gray text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </AnimateInView>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <AnimateInView key={project.id} delay={40}>
              <ProjectCard project={project} reverse={i % 2 !== 0} lang={l} />
            </AnimateInView>
          ))}
        </div>
      </section>

      <ContactCTA lang={l} />
    </>
  );
}
