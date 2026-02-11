import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../../constants/navigation";
import { languageLabels } from "../../../constants/languages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export const DesktopNav = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="hidden lg:flex items-center gap-8">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-sm text-black hover:text-brand transition-colors font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-sm text-black hover:text-brand transition-colors font-medium outline-none">
          {languageLabels[i18n.language] || "CZ"}
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-30">
          {Object.entries(languageLabels).map(([code, label]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={
                i18n.language === code
                  ? "text-brand font-semibold"
                  : "text-black"
              }
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};