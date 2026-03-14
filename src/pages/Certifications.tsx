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
    <div className="min-h-screen bg-white">
      <SEO
        title={t("seo.certifications.title")}
        description={description}
        canonical="/certifications"
        keywords={keywords}
        image={DEFAULT_SEO_IMAGE}
        structuredData={structuredData}
      />
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("certifications.title")}</h2>
            <p className="text-lg text-gray-600">
              {t("certifications.description")}
            </p>
          </div>
          <CertificatesList />
        </div>
      </section>
    </div>
  );
};