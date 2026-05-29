import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedModels } from "@/components/home/FeaturedModels";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Lang } from "@/lib/data";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Lang;
  return (
    <>
      <HeroSection lang={l} />
      <FeaturedModels lang={l} />
      <BenefitsSection lang={l} />
      <ProcessSection lang={l} />
      <GallerySection lang={l} />
      <TestimonialsSection lang={l} />
      <ContactCTA lang={l} />
    </>
  );
}
