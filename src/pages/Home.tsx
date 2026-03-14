import { SEO } from "@/components/shared/SEO";
import { SITE_NAME, SITE_URL, parseKeywords } from "@/lib/seo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Hero } from "../components/sections/Hero";

export const Home = () => {
  const { t } = useTranslation();
  const description = t("seo.home.description");
  const keywords = parseKeywords(t("seo.home.keywords"));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("seo.home.title"),
    description,
    url: `${SITE_URL}/`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: keywords,
    primaryImageOfPage: `${SITE_URL}/images/rupas-main-photo.png`,
  };

  return (
    <>
      <SEO
        title={t("seo.home.title")}
        description={description}
        canonical="/"
        keywords={keywords}
        image="/images/rupas-main-photo.png"
        structuredData={structuredData}
      />
      <Hero />
      <section id="home-intro" className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-foreground/90 md:text-lg"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("home.introTitle")}
            </h2>
            <p>{t("home.introParagraph1")}</p>
            <p>{t("home.introParagraph2")}</p>
            <p>{t("home.introParagraph3")}</p>
            <div className="mt-6 space-y-3">
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {t("home.qualityPolicyTitle")}
              </h3>
              <p>{t("home.qualityPolicyText")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="md:row-span-2">
                <img
                  src="/images/img29.jpeg"
                  alt="Rupas Metal"
                  className="w-full h-full object-center rounded-xl shadow-md"
                />
              </div>
              <img
                src="/images/img9.jpg"
                alt="Rupas Metal montáž"
                className="md:col-span-2 w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src="/images/img26.jpg"
                alt="Rupas Metal"
                className="md:col-span-2 w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};