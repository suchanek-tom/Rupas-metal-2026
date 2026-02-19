import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { services } from "@/constants/services";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const Production = () => {
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
            Strojírenská výroba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Naše společnost se zabývá komplexní strojírenskou výrobou od A do Z.
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
          Naše služby
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-metal-950 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          >
            <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-brand/20 text-brand">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Konstrukční služby
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
                Zhotovení výrobní dokumentace, statické výpočty, optimalizace výroby,
                návrhy pro zlepšení a efektivní řízení výrobního procesu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    );
};
