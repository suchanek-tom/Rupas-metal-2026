export interface LanguageOption {
  code: string;
  label: string;
}

export interface LanguageSwitcherProps {
  onLanguageChange?: () => void;
}