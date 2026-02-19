import { useTranslation } from "react-i18next";
import { countries } from "@/constants/countries";
import { productions } from "@/constants/productions";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.48, ease: "easeOut" as const },
  }),
};

export const References = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex items-center justify-center min-h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/img11.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {t("references.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t("references.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
        >
          {t("references.whatWeDeliver")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productions.map(({ icon: Icon, labelKey }, i) => (
            <motion.div
              key={labelKey}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-brand transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-snug">{t(labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
          >
          {t("references.countriesTitle")}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {countries.map(({ flag, nameKey }, i) => (
              <motion.div
                key={nameKey}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand transition-all duration-300"
              >
                <span className="text-5xl leading-none">{flag}</span>
                <span className="text-xs font-medium text-gray-600 text-center">{t(nameKey)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};