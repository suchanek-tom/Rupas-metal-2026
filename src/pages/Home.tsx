import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Hero } from "../components/sections/Hero";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        canonical="/"
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
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <img
                src="/images/rupas-main-photo.png"
                alt="Rupas Metal"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src="/images/img9.jpg"
                alt="Rupas Metal montáž"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
