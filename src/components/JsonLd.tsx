import type { Locale } from "@/i18n/config";

type Dict = Record<string, unknown>;

export default function JsonLd({ locale, dict }: { locale: Locale; dict: Dict }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youseedance2.com";
  const faq = dict.faq as { items: { question: string; answer: string }[] };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Seedance 2.0",
    url: `${siteUrl}/${locale}`,
    description:
      locale === "en"
        ? "Next-generation AI video generation platform"
        : "新一代 AI 视频生成平台",
    inLanguage: locale === "en" ? "en-US" : "zh-CN",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Seedance 2.0",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "12000",
      bestRating: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
