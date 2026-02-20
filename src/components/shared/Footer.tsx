import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import logoRupasMetal from "@/assets/images/logo_rupas_metal.jpg";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              RUPAS METAL s.r.o.
            </h3>
            <div className="space-y-2 text-sm">
              <h4 className="text-brand font-medium">{t("footer.whereToFind")}</h4>
              <p>Masarykova 702</p>
              <p>742 45 – Fulnek</p>
              <p>IČ: 21046204</p>
              <p>DIČ: CZ21046204</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              {t("footer.contactUs")}
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@rupas-metal.cz"
                className="block hover:text-brand-dark transition-colors"
              >
                info@rupas-metal.cz
              </a>
              <div className="mt-2">
                <h4 className="text-brand font-medium">{t("footer.openingHours")}</h4>
                <p>7:00 – 17:00</p>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-brand font-semibold text-lg mb-4">
              {t("footer.followUs")}
            </h3>
            <div className="space-y-3 text-sm">
                <a
                  href="https://www.instagram.com/rupas_metal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-dark transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
            </div>
          </div>

          <div className="hidden md:block md:col-span-3">
            <div className="flex items-center justify-end">
              <div className="text-right">
                <img src={logoRupasMetal} alt="Rupas Metal logo" className="h-28 w-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-metal-900 text-sm text-[#707070]">
          <p>
            RUPAS METAL © {new Date().getFullYear()} {t("footer.rights")}. {t("footer.madeBy")}.
          </p>
        </div>
      </div>
    </footer>
  );
};