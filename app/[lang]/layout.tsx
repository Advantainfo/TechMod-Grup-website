import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import type { Lang } from "@/lib/data";

const supportedLangs: Lang[] = ["en", "bg", "tr"];

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang as Lang)) notFound();
  const l = lang as Lang;

  return (
    <>
      <Navigation lang={l} />
      <main className="flex-1">{children}</main>
      <Footer lang={l} />
    </>
  );
}
