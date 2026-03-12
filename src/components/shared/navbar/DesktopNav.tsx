import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../../constants/navigation";
import { languages } from "../../../constants/languages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export const DesktopNav = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="hidden lg:flex items-center gap-8">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors font-medium ${
                  isActive ? "text-brand" : "text-black hover:text-brand"
                }`
              }
            >
              {t(link.i18nKey)}
            </NavLink>
          </li>
        ))}
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-2xl text-black hover:text-brand transition-colors font-medium outline-none">
          {currentLanguage?.triggerLabel || "🇨🇿"}
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-30">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={
                i18n.language === lang.code
                  ? "text-brand font-semibold"
                  : "text-black"
              }
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};