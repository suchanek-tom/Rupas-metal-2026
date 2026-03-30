import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { galleryImages } from "@/constants/gallery";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

type Props = {
  onImageClick: (index: number) => void;
};

export const GalleryGrid = ({ onImageClick }: Props) => {
  const { t } = useTranslation();
  if (galleryImages.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg">{t("gallery.empty")}</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryImages.map((img, i) => (
        <motion.button
          key={img.src}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          onClick={() => onImageClick(i)}
          className="group relative overflow-hidden rounded-xl aspect-4/3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <img
            src={img.src}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.button>
      ))}
    </div>
  );
};
