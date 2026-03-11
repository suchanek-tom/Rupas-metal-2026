import { SEO } from "@/components/shared/SEO";
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
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-foreground/90 md:text-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("home.introTitle")}
            </h2>
            <p>{t("home.introParagraph1")}</p>
            <p>{t("home.introParagraph2")}</p>
            <p>{t("home.introParagraph3")}</p>
          </div>
        </div>
      </section>
    </>
  );
};
