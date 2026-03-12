import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Hero = () => {
  const { t } = useTranslation();

  const handleScrollToIntro = () => {
    document.getElementById("home-intro")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rupas-main-photo.png')" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute top-0 left-0 right-0 h-24 from-black/30 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 my-6 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t("hero.title")}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <Button
                type="button"
                size="lg"
                className="bg-brand hover:bg-brand-dark text-xl cursor-pointer"
                onClick={handleScrollToIntro}
              >
                {t("hero.cta")}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}