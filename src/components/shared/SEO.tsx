import type { SEOProps } from "@/types/SEOTypes";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_NAME = "RUPAS METAL s.r.o.";
const BASE_URL = "https://www.rupas-metal.cz";

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const { i18n } = useTranslation();
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};