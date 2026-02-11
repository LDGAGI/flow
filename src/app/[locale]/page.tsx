import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { generatePageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as Locale);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <JsonLd locale={locale as Locale} dict={dict} />
      <Header locale={locale as Locale} dict={dict.header} />
      <main>
        <Hero dict={dict.hero} />
        <Features dict={dict.features} />
        <Comparison dict={dict.comparison} />
        <UseCases dict={dict.useCases} />
        <FAQ dict={dict.faq} />
        <FinalCTA dict={dict.finalCta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
