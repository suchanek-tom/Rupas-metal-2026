import { useTranslation } from "react-i18next";
import { CertificatesList } from "../components/sections/CertificatesList";

export const Certifications = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">{t("certifications.title")}</h2>
      <p className="text-lg text-gray-500">
        {t("certifications.description")}
      </p>

      <CertificatesList />
    </div>
  );
}