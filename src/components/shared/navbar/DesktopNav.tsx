import { NavLink } from "react-router-dom";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../../constants/navigation";
import { languages } from "../../../constants/languages";
import { Button } from "../../ui/button";
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
    <div className="hidden lg:flex items-center gap-4">
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

      <a
        href="https://www.contranet-we.cz/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-block"
      >
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-black border-gray-300 hover:bg-brand hover:cursor-pointer hover:text-white hover:border-brand transition-all"
        >
          {t("nav.contranet")}
          <ExternalLink className="w-4 h-4" />
        </Button>
      </a>

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