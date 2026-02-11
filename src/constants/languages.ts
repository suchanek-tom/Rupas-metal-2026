import type { LanguageOption } from "../types/languageOptionTypes";

export const languageLabels: Record<string, string> = {
  cs: "CZ",
  en: "EN",
  de: "DE",
};

export const languages: LanguageOption[] = [
  { code: "cs", label: "Čeština" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];
