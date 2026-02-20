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
    </>
  );
};
