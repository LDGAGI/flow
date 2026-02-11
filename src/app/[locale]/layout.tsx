import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youseedance2.com";

  return (
    <>
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="zh" href={`${siteUrl}/zh`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
      {children}
    </>
  );
}
