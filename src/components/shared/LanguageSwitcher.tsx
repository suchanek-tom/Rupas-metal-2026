import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { languages } from "../../constants/languages";
import type { LanguageSwitcherProps } from "../../types/languageOptionTypes";

export const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    onLanguageChange?.();
  };

  return (
    <div className="space-y-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`block w-full text-left px-0 py-2 text-lg transition-colors ${
            i18n.language === lang.code
              ? "text-brand font-semibold"
              : "text-black hover:text-brand-dark"
          }`}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
};
