import { motion } from "framer-motion";
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
  if (galleryImages.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg">Fotky brzy přibydou.</p>
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
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {img.caption && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <span className="block w-full px-4 py-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {img.caption}
              </span>
            </div>
          )}
        </motion.button>
      ))}
    </div>
  );
};
