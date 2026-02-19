import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { equipmentData } from "@/constants/equipment";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const Equipment = () => {
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
            {t("equipment.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t("equipment.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-24 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
          {t("equipment.intro")}
        </motion.p>
      </section>

      <section className="container mx-auto px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
        >
          <table className="w-full text-sm md:text-base text-left border-collapse">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-6 py-4 font-semibold w-1/3">{t("equipment.table.category")}</th>
                <th className="px-6 py-4 font-semibold w-1/3">{t("equipment.table.machine")}</th>
                <th className="px-6 py-4 font-semibold w-1/3">{t("equipment.table.spec")}</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((row, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`border-t border-gray-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-brand/5 transition-colors duration-200`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{row.name}</td>
                  <td className="px-6 py-4 text-gray-600">{row.spec}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
    </div>
  );
};
