import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { galleryImages } from "@/constants/gallery";
import { GalleryGrid } from "@/components/sections/Gallery";

const slides = galleryImages.map((img) => ({
  src: img.src,
  alt: img.alt,
  title: img.alt,
  description: img.caption,
}));

export const Gallery = () => {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t("seo.gallery.title")}
        description={t("seo.gallery.description")}
        canonical="/galerie"
      />
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
            {t("gallery.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t("gallery.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <GalleryGrid onImageClick={setLightboxIndex} />
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  );
};
