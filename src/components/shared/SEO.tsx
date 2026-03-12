import { useEffect } from "react";
import type { SEOProps } from "@/types/SEOTypes";
import { useTranslation } from "react-i18next";

const SITE_NAME = "RUPAS METAL s.r.o.";
const BASE_URL = "https://www.rupas-metal.cz";
const DEFAULT_OG_IMAGE = "/images/logo_rupas_metal.jpg";

const localeMap: Record<string, string> = {
  cs: "cs_CZ",
  en: "en_GB",
  de: "de_DE",
};

const toAbsoluteUrl = (path?: string) => {
  if (!path) {
    return `${BASE_URL}${DEFAULT_OG_IMAGE}`;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${BASE_URL}${path}`;
};

export const SEO = ({
  title,
  description,
  canonical,
  keywords = [],
  image,
  type = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language || "cs";
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const imageUrl = toAbsoluteUrl(image);
  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const locale = localeMap[currentLanguage] || localeMap.cs;
  const schemaItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaItems.map((schema, index) => (
        <script
          key={`${fullTitle}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};