import type { Locale } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youseedance2.com";

export function generatePageMetadata(locale: Locale) {
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Seedance 2.0 — AI Video Generator | Create Stunning Videos in Seconds"
      : "Seedance 2.0 — AI 视频生成器 | 秒级创作惊艳视频",
    description: isEn
      ? "Seedance 2.0 is the next-gen AI video generator. Transform text & images into cinematic videos with unmatched motion control. Free to start. Compare vs Sora, Kling, Runway."
      : "Seedance 2.0 是新一代 AI 视频生成器。将文字和图片转化为电影级视频，运动控制无与伦比。免费开始使用。对比 Sora、Kling、Runway。",
    keywords: isEn
      ? [
          "Seedance 2.0",
          "AI video generator",
          "text to video AI",
          "AI video maker",
          "Seedance vs Sora",
          "Seedance vs Kling",
          "AI video generation",
          "image to video AI",
          "free AI video generator",
        ]
      : [
          "Seedance 2.0",
          "AI 视频生成器",
          "文生视频",
          "AI 视频制作",
          "Seedance 对比 Sora",
          "Seedance 对比 Kling",
          "AI 视频生成",
          "图生视频",
          "免费 AI 视频生成器",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        zh: `${siteUrl}/zh`,
      },
    },
    openGraph: {
      title: isEn
        ? "Seedance 2.0 — AI Video Generator"
        : "Seedance 2.0 — AI 视频生成器",
      description: isEn
        ? "Create stunning AI videos in seconds. Free to start."
        : "秒级创作惊艳 AI 视频。免费开始使用。",
      url: `${siteUrl}/${locale}`,
      siteName: "Seedance 2.0",
      type: "website",
      locale: isEn ? "en_US" : "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: isEn
        ? "Seedance 2.0 — AI Video Generator"
        : "Seedance 2.0 — AI 视频生成器",
      description: isEn
        ? "Create stunning AI videos in seconds."
        : "秒级创作惊艳 AI 视频。",
    },
  };
}
