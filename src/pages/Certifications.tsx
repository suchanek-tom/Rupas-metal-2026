import { useTranslation } from "react-i18next";
import { SEO } from "@/components/shared/SEO";
import { DEFAULT_SEO_IMAGE, SITE_URL, parseKeywords } from "@/lib/seo";
import { CertificatesList } from "../components/sections/CertificatesList";

export const Certifications = () => {
  const { t } = useTranslation();
  const description = t("seo.certifications.description");
  const keywords = parseKeywords(t("seo.certifications.keywords"));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("seo.certifications.title"),
    description,
    url: `${SITE_URL}/certifications`,
    about: keywords,
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title={t("seo.certifications.title")}
        description={description}
        canonical="/certifications"
        keywords={keywords}
        image={DEFAULT_SEO_IMAGE}
        structuredData={structuredData}
      />
      <h2 className="text-3xl font-bold mb-6">{t("certifications.title")}</h2>
      <p className="text-lg text-gray-500">
        {t("certifications.description")}
      </p>

      <CertificatesList />
    </div>
  );
};